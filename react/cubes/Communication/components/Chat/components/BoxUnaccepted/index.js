'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import {Provider}                   from 'react-redux'
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';

import R                            from 'ramda';
import Radium                       from 'radium';
import PropTypes                    from 'prop-types';


import {setActiveChannel}           from '../../../../../../../store/actionsCreators/communication/setActiveChannel';
import {setChannels}                from '../../../../../../../store/actionsCreators/communication/setChannels';


const api                           =   require('../../../../../../../js/devel/modules-system/api-calls').apiv2;


const styles = {
    container: {
        display:        'flex',
        width:          '100%',
        height:         '100%',
        alignItems:     'center',
        borderTop:      '0.5px solid #E0E0E0',
        padding:        '0px 10px',
    },
}


const mapStateToProps = (state, ownProps) => {

    return {
        activeChannel      :   state.communication.activeChannel,
    }
}

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchSetActiveChannel        : setActiveChannel,
        dispatchSetChannels             : setChannels,
    }, dispatch)
};


@connect(mapStateToProps, mapDispatchToProps)
@Radium
class BoxUnaccepted extends PureComponent {

    constructor(props){
        super(props);

        this.acceptChannel     = this.acceptChannel.bind(this);
    }



    render(){

        return (
            <div
                className = {'box-unaccepted'}
                style = {   [styles.container]  }
            >
            {
                // <div className={'button button-decline'} onClick={()=> this.declineChannel() }>Decline</div>
            }
                <div className={'button button-accept'} onClick={()=> this.acceptChannel() }>Accept</div>

            </div>
        );
    }


    acceptChannel() {
        let channelId = this.props.activeChannel.item.id;

        api.put(`/user/channels/${channelId}/accept`)
            .then( () => {
                Promise.all([
                    api.get('user/channels'),
                    api.get(`user/channels/${channelId}`),
                ])
                    .then( ([channels, channel]) => {
                        let label = channel.type === 'CONTACT' ? null : channelItem.label;

                        this.props.dispatchSetChannels(channels);
                        this.props.dispatchSetActiveChannel(channel.type, channel.item, label);
                    })
            })
    }

    // declineChannel() {
    //
    // }


}



BoxUnaccepted.childContextTypes = {
    // item:               PropTypes.object,
    // type:               PropTypes.string,
    // isActiveChannel:    PropTypes.bool,
    // onClickChannel:     PropTypes.func,
}

export default BoxUnaccepted;
