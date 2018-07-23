'use strict'

import React, {PureComponent}       from 'react';
import R                            from 'ramda';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import Radium                       from 'radium';
import autobind                     from 'autobind-decorator';

import {COLORS}                     from '../../../../../../globals/colors.js';
import CONSTANTS                    from '../../../../../../globals/constants.js';

import Channel                      from '../../../../../Channel';

import {openCubeCommunication, openConversationByChannel}      from '../../../../../../../../app/js/devel/entities/cubes/reactCubes/Functions/ReactToElectron';

const api           =   require('../../../../../../../../app/js/devel/modules-system/api-calls').apiv2;



@connect(null, null)
@Radium
class Channels extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            ready: false,
            hasMoreItems: true,
            channelsItems: [],
            isHoverCubeContent: false,
            requestSent: false,
        }

        this.limit  = 10;
        this.offset = 0;

        this.askForMoreChannels             = this.askForMoreChannels.bind(this);
        this.loadMoreChannels               = this.loadMoreChannels.bind(this);
        this.renderChannels                 = this.renderChannels.bind(this);
        this.onClickChannel                 = this.onClickChannel.bind(this);
        this.onClickOpenCommunicationCube   = this.onClickOpenCommunicationCube.bind(this);

    }

    componentDidMount() {
        this.loadMoreChannels()
            .then( () => this.setState({ready: true}) )
    }


    render() {
        if(!this.state.ready) return null;

        return (
            <div className={'messages-dropwdown'}>
                <div
                    className = { 'messages-channels-list-with-loader' }
                    onScroll        = { this.askForMoreChannels }
                >
                    <div
                        className       = { 'messages-channels-list' }
                        ref             = { self => this.channelsContainer = self }
                        onMouseEnter    = { () => this.setState({isHoverCubeContent: true}) }
                        onMouseLeave    = { () => this.setState({isHoverCubeContent: false}) }
                    >

                        { R.map( this.renderChannels, this.state.channelsItems )}

                    </div>

                    {   /* Loader */
                        this.state.requestSent ?
                            <div className='new-spin'>
                                <img className='new-loader' src='./multimedia/images/not-avaliable/loader-dual-ring.gif' />
                            </div>
                        :
                           null
                    }
                </div>


                <div
                    className   = { 'messages-bottom-options' }
                    onClick     = { () => this.onClickOpenCommunicationCube()  }
                >
                    <span>See all in Communication Cube</span>
                </div>

            </div>

        )
    }

    renderChannels(channel){

        return(
            <Channel
                key             = { channel.item.id }
                type            = { channel.type    }
                item            = { channel.item    }
                onClick         = { () => this.onClickChannel(channel) }
            />
        )
    }


    onClickChannel(channel) {
        openConversationByChannel(channel);
        this.props.onClose();
    }

    onClickOpenCommunicationCube() {
        openCubeCommunication();
        this.props.onClose();

    }

    askForMoreChannels() {
        let listElm = this.channelsContainer;

        if (this.state.ready && !this.state.requestSent && listElm.scrollTop + listElm.clientHeight + 50 >= listElm.scrollHeight && this.state.hasMoreItems) {
            this.loadMoreChannels();
        }
    }


    loadMoreChannels() {
        this.setState({requestSent: true})
        let body = {
            limit: this.limit,
            offset: this.offset,
        };

        return api.get( 'user/channels', body )
            .then( data => {
                if(data.length === 0) {
                  this.setState({ hasMoreItems: false });
                }
                else {
                    let allData = R.concat(this.state.channelsItems, data);
                    this.setState({channelsItems: allData });
                }
                this.offset = this.offset + this.limit;
            })
            .then( () => {
                console.log('request sent false')
                this.setState({requestSent: false})
            })

    }


}

export default Channels;
