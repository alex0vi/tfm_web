'use strict'

import React, {PureComponent}       from 'react';
import R                            from 'ramda';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import Radium                       from 'radium';
import autobind                     from 'autobind-decorator';

import {COLORS}                     from '../../../../../../globals/colors.js';
import CONSTANTS                    from '../../../../../../globals/constants.js';

import Notification                 from './components/Notification';


const api           =   require('../../../../../../../../app/js/devel/modules-system/api-calls').apiv2;



@connect(null, null)
@Radium
class Notifications extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            ready: false,
            hasMoreItems: true,
            notificationsItems: [],
            isHoverCubeContent: false,
            requestSent: false,
        }

        this.limit = 10;
        this.offset = 0;

        this.askForMoreNotifications    = this.askForMoreNotifications.bind(this);
        this.renderNotification         = this.renderNotification.bind(this);
    }

    componentDidMount() {
        this.loadMoreNotifications()
            .then( () => this.setState({ready: true}) )
    }


    render() {
        if(!this.state.ready) return null;

        return (
            <div
                style className = { 'social-notifications-list-with-loader' }
                onScroll        = { this.askForMoreNotifications }
            >
                <div
                    className       = { 'social-notifications-list' }
                    ref             = { self => this.noticationsContainer = self }
                    onMouseEnter    = { () => this.handlerSetState('isHoverCubeContent', true) }
                    onMouseLeave    = { () => this.handlerSetState('isHoverCubeContent', false) }
                >

                    { R.map( this.renderNotification, this.state.notificationsItems )}

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
        )
    }

    renderNotification(notification){
        return(
            <Notification
                item            = {notification}
                key             = {notification.id}
                onClose         = {() => this.props.onClose()}
            />
        )
    }



    askForMoreNotifications() {
        let listElm = this.noticationsContainer;

        if (this.state.ready && !this.state.requestSent && listElm.scrollTop + listElm.clientHeight + 50 >= listElm.scrollHeight && this.state.hasMoreItems) {
            this.loadMoreNotifications()
        }
    }


    loadMoreNotifications() {
        this.setState({requestSent: true})
        let body = {
            limit: this.limit,
            offset: this.offset,
        };

        return api.get( 'user/notifications', body )
            .then( data => {

                if(data.length === 0) {
                  this.setState({ hasMoreItems: false });
                }
                else {
                    let allData = R.concat(this.state.notificationsItems, data);
                    this.setState({notificationsItems: allData });
                }
                this.offset = this.offset + this.limit;
            })
            .then( () => {
                this.setState({requestSent: false})
            })

    }



    handlerSetState(type, value){
        this.setState({[type]: value});
    }


}

export default Notifications;
