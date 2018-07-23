'use strict'
import React, { PureComponent }                 from 'react';
import Radium                                   from 'radium';
import autobind                                 from 'autobind-decorator';
import R                                        from 'ramda';
import {connect}                                from 'react-redux';
import {bindActionCreators}                     from 'redux';
import addapsMedia                              from '@addaps/addaps_media';

import {COLORS}                                   from '../../../../../../globals/colors.js';
import CONSTANTS                                from '../../../../../../globals/constants.js';
import {getDifferenceBetweenNowAndDate}         from '../../../../../../utils/time.js';
import {openBoardAdapter, openWeblinkAdapter}   from '../../../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';
import {setActiveTab}                           from '../../../../../../../store/actionsCreators/social/setActiveTab';

import RequestButton                            from './components/Button';
const api                                       =   require('../../../../../../../../app/js/devel/modules-system/api-calls').apiv2;


const basePath = window.location.href.split( '/' ).slice( 0, -2 ).join( '/' );


const styles = {
  container: {
      display: 'flex',
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      alignItems: 'center',
      backgroundColor: 'white',
      cursor: 'pointer',
      height: 80,
  },
  avatarStyle:{
      width: 60,
      height: 60,
      borderRadius: '50%',
      margin: '0px 10px 0px 10px',
      backgroundSize: 'cover',
      cursor: 'pointer',
  },
  wrapperUserInformation:{
      height: '100%',
      width: '100%',
      borderBottom: '1px solid #d2d2d2',
      alignSelf: 'center',
  },
  userName:{
      fontSize: 16,
      marginRight: 5,
      fontWeight: 400,
      fontFamily: 'AvenirNextMediana',
  },
  userDescription:{
      fontWeight: 500,
      fontSize: 16,
      marginRight: 5,
  },
  date:{
      fontSize: 14,
      marginRight: 5,
      color: '#757575',
  },
  wrapperUserFirstInformation:{
      width: '100%',
      paddingTop: 16,
      display: 'flex',
      alignItems: 'center',
  },
  wrapperUsersecondaryInformation:{
      width: '100%',
      height: '20%',
      display: 'flex',
      alignItems: 'center',
      marginBottom: 10,
  },
  buttonsWrapper:{
    display: 'flex',
    right: 0,
    position: 'absolute',
    margin: 5,
  },
}


const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchSetActiveTab: setActiveTab,
    }, dispatch)
};

const mapStateToProps = (state, ownProps) => {
    return {
        myself:              state.user
    }
}

@connect(mapStateToProps, mapDispatchToProps)
@Radium
class Request extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            areFriends: null
        }
    }

    render() {
        let item = this.props.item;
        let auxBackgroundHoverStyles, auxBorderBottomStyles;

        if(this.state.isHover){
            auxBackgroundHoverStyles={
                backgroundColor: '#f2f2f2',
            }
            auxBorderBottomStyles={
                borderBottom: 0,
            }
        }

        let actionType = 'FRIENDSHIP_REQUEST_SENT';
        let itemCharacteristics = this.getTextByAccionType(actionType, item.id);

        return(
            <div
                 key = {item.id}
                 style={[styles.container, auxBackgroundHoverStyles]}
                 onMouseEnter =  {() => this.setStateGeneral('isHover', true )}
                 onMouseLeave = {() => this.setStateGeneral('isHover', false )}
                 onClick = {(event)=> this.goToUsers(event, item.id)}
             >
                <img
                    src={item.avatar.s}
                    style={styles.avatarStyle}
                />
                <div style = {[styles.wrapperUserInformation, auxBorderBottomStyles]}>
                    <div style={styles.wrapperUserFirstInformation}>
                        <div
                            style={styles.userName}
                        >
                            {`${item.firstName} ${item.lastName}`}
                        </div>
                        {this.renderButtonsNotification(itemCharacteristics.buttonsToRender)}
                    </div>
                </div>
            </div>
        )
    }

    setStateGeneral(type, value){
        this.setState({ [type]: value});
    }

    getTextByAccionType(type, id){
        return R.cond([
            [ R.equals('FRIENDSHIP_REQUEST_SENT'),      R.always({
                                                            text: 'send you a friend request',
                                                            type: 'materialIcon',
                                                            name:'person_add',
                                                            color: '#4CAF50',
                                                            transform: 'inherit',
                                                            componentToOpen: () => {},
                                                            buttonsToRender: [{
                                                                            isPrimaryButton: true,
                                                                            text:'Accept',
                                                                            funcClick : ()=> this.onPressAccept(id),
                                                                        },{
                                                                            isPrimaryButton: false,
                                                                            text:'Delete',
                                                                            funcClick : () => this.onPressCancel(id),
                                                                        }],
                                                        })],
        ])(type);
    }

    onPressAccept(id) {
      api.put(`user/friends/${id}`)
      .then(data => {
          this.props.refreshItems()
      })
    }

    onPressCancel(id){
        api.delete(`user/friendshipPending/received/${id}`)
        .then(data => {
             this.props.refreshItems()
        })
    }

    goToUsers(event, userId) {
        if(R.isNil(event.target.closest('.requestButton'))){
            let {history, myself} = this.props;
            if(R.equals(userId, myself.id)) history.push({ pathname:'/me/', state: { userId: userId } });
            else history.push({ pathname:`/users/${userId}`, state: { userId: userId } });
        }
    }

    renderButtonsNotification(buttonsSpec){
        return (
            <div style={styles.buttonsWrapper}>
                {R.addIndex(R.map)((buttonSpec,i)=>this.renderButtonNotification(buttonSpec, i), buttonsSpec)}
            </div>
        )

    }

    renderButtonNotification(buttonSpec,i){
        let {id}  = this.props.item
        return(
            <RequestButton
                key = {`notificationButton-${i}`}
                isPrimaryButton = {buttonSpec.isPrimaryButton}
                styleButton = {buttonSpec.styleButton}
                text = {buttonSpec.text}
                funcClick = {() => buttonSpec.funcClick()}
            />
        )
    }
}

export default Request;
