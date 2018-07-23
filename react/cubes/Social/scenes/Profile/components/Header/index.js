'use strict';

import React, {Component}           from 'react';
import R                            from 'ramda';
import {connect}                    from 'react-redux'
import autobind                     from 'autobind-decorator';
import {bindActionCreators}         from 'redux';
import Radium                       from 'radium';

import {MdAddAPhoto}                from 'react-icons/lib/md';

import {COLORS}                       from '../../../../../../globals/colors.js';
import CONSTANTS                    from '../../../../../../globals/constants.js';

import UploadedImagesPreviewDialog  from '../../../../../../components/UploadImage';
import {setUser}                    from '../../../../../../../store/actionsCreators/user/setUser.js';

import {openPopUpChangePhoto}       from '../../../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';
import {closePopUpChangePhoto}      from '../../../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';

import ButtonSocial                 from '../../../../../../components/ButtonSocial';
const CUBE_TYPES                    = require('../../../../../../../js/devel/constants/cubeTypes/cubeTypesConstants');
import USER_SETTINGS                from '../../../../../../../js/devel/modules-system/module-user-settings';



const api       =   require('../../../../../../../../app/js/devel/modules-system/api-calls').apiv2;

const avatarSize = 160;

let styles = {
    container: {
        width: '850px',
        flexDirection: 'column',
        justifyContent: 'center',
        borderTopWidth: 0.3,
        height: '315px',
        position: 'relative',
        zIndex: 4,
        boxShadow: 'rgba(0, 0, 0, 0.117647) 1px 1px 1px 1px',

    },
    contentProfile: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    coverContainer: {},
    profileArea: {
        flex: 1,
        flexDirection: 'row'
    },
    wrapperProfileImage:{
        overflow:'hidden',
        height: '100%',
        width: '100%',
        position: 'relative'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        backgroundSize: 'contain',
    },
    avatarAndInfoWrapper: {
        flex: 1,
        position: 'absolute',
        zIndex: 1,
        marginLeft: 15,
    },
    avatarWrapper: {
        position: 'relative',
        backgroundColor: 'transparent',
        width: '120px',
    },
    avatar: {
        width: avatarSize,
        height: avatarSize,
        borderRadius: '50%',
        position: 'absolute',
        top: '-60px'
    },
    userInfoWrapper: {
        flex: 1,
        marginTop: 65,
        width: 275,
    },
    socialInfoAndButtonsArea: {
        flex: 1.4,
        backgroundColor: 'transparent',
        alignItems: 'center'
    },
    profileBorder: {
        // backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textWithIcon: {
        flexDirection: 'row',
    },
    fullNameText: {
        fontSize: 16,
        color: '#353535',
        fontWeight: '600',
        marginBottom: 8,
        width: 250,
    },
    location: {
        fontSize: 14,
        color: '#373737',
        marginLeft: 3,
        marginBottom: 8
    },
    dateOfBirth: {
        fontSize: 14,
        color: '#373737',
        marginLeft: 3
    },
    infoIcon: {
        marginTop: 5,
    },
    socialInfo: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent'
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        marginLeft: 25
    },
    button: {
        // flex: 1,
        height: 24,
        borderWidth: 0.5,
        borderColor: '#979797',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoContainer: {
        flexDirection: 'column',
        flex: 1,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addImageButton: {
        backgroundColor: 'transparent',
        position: 'absolute',
        right: -25,
        bottom: -40,
    },
    photoIcon: {
        fontSize: 18
    },
    editPenIcon:{
        fontSize: 14,
        cursor: 'pointer',
        position: 'absolute',
        top: 100,
        right: 5,
    },
    wrapperAddNewProfileImageStyle:{
        display: 'flex',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        cursor: 'pointer',
    },
    editButtonStyle:{
        width: 110,
        marginRight: 10,
        fontSize: 13,
        height: 25,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 64,
        border: '1px solid #d2d2d2',
        cursor: 'pointer',
        zIndex: 3,
    },
    wrapperEditButtonsSaveAndCancel:{
        display: 'flex',
    },
    buttonsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      position: 'absolute',
      right: 0,
      bottom: 0,
      margin: '10px'
    },
    buttonWrapper: {
      flex: 1,
      alignItems: 'center',
      marginLeft: 2,
      marginRight: 2,
    },
};


const fullNameToFirstAndLastName = R.pipe(
    R.split(' '),
    R.reject( R.equals('') ),
    R.lift( R.pair )( R.head, R.compose( R.join(' ') , R.tail) )
)

const mapStateToProps = (state, ownProps) => {
    let myself      = state.user;

    return {
        myself,
    }
}

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchSetMyself: setUser
    }, dispatch)
};


@connect(mapStateToProps, mapDispatchToProps)
@autobind
@Radium
class ProfileInformation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: this.props.user.id,
            changeImageDialog: false,
            type: null,
            hoverCoverPhoto:  false,
            hoverAvatarPhoto: false,
            hoverUserInfo: false,
            editButtonActive: false,
            isUserInfoEditMode: false,
            usernameValue: null,
            locationValue:  null,
            titleValue: null,
            dateOfBirthValue: null,
            telValue: null,
            emailValue: null,
            changeAvatar: false,
            statusFollowing: !R.isNil(this.props.user.status) ? this.props.user.status.following : null,
            statusFriend: !R.isNil(this.props.user.status) ? this.props.user.status.friend : null,
        };

        this.statusUserConexionButtonsHandler = this.statusUserConexionButtonsHandler.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    componentWillUpdate(nextProps, nextState) {
        if(!nextProps.isMyTimeline) {
            if( this.props.user.status.friend       !== nextProps.user.status.friend    ||
                this.props.user.status.following    !== nextProps.user.status.following
            ) {
                this.setState({
                    statusFollowing : nextProps.user.status.following,
                    statusFriend    : nextProps.user.status.friend
                });
            }
        }
    }

    render() {

      let {user} = this.props;
      let avatarWrapperSize = 40;

      return (
        <div style = {styles.container}>

            <div
                style = {styles.wrapperProfileImage}
                onMouseEnter={()=>this.onHoverCoverPhoto()}
                onMouseLeave={()=>this.onUnhoverCoverPhoto()}
            >
                <img
                    src={user.cover.lm}
                    style={styles.backgroundImage}
                />


                {
                    this.props.isMyTimeline ?
                        null
                    :
                      this.renderFriendsButtons()
                }

                {this.props.isMyTimeline && this.state.hoverCoverPhoto ? this.renderAddNewProfileImage() : null}
            </div>


            <div style={styles.profileArea}>
                <div style = {styles.avatarAndInfoWrapper}>
                    { this.renderAvatar(user.avatar.sm, avatarWrapperSize) }
                    { this.props.avatarFixed ? null : this.renderUserInfo(user) }
                </div>
            </div>


        </div>
      )
    }


    renderFriendsButtons() {
        return(
            <div style={styles.buttonsWrapper}>

                <div style={styles.buttonWrapper}>
                    <ButtonSocial
                          type ={'friend'}
                          status={this.state.statusFriend}
                          id = {this.props.user.id}
                          onChange = {(value)=> this.statusUserConexionButtonsHandler('statusFriend', value) }
                    />
                </div>

                <div style={styles.buttonWrapper}>

                    <ButtonSocial
                        type ={'following'}
                        status = {this.state.statusFollowing}
                        id = {this.props.user.id}
                        onChange = {(value)=>this.statusUserConexionButtonsHandler('statusFollowing',value) }
                    />
                </div>

            </div>
        )
    }

    statusUserConexionButtonsHandler(type, value){
        this.setState({[type]: value});
    }

    renderAddNewProfileImage(){
        return(
            <div
                style = { styles.wrapperAddNewProfileImageStyle}
                onClick={()=>this.onPressImageButton('cover')}
            >
                <i className="material-icons" style = {{fontSize: 45, marginRight: 20}}>{CONSTANTS.ICONS.ADD_PHOTO}</i>
                <span style = {{fontSize: 25}}>{CONSTANTS.USER.CHANGE_COVER_PHOTO}</span>
            </div>
        )
    }


    renderAddNewAvatarImage(){
        return(
            <div
                style = {[styles.wrapperAddNewProfileImageStyle,{top: -60, height: 150, width: 150}]}
                onClick = {()=>this.onPressImageButton('avatar')}
            >
                <i className="material-icons" style = {{fontSize: 20, position: 'absolute', top:50, left: 62}}>{CONSTANTS.ICONS.ADD_PHOTO}</i>
                <span style = {{fontSize: 14, position: 'absolute', top:75, left: 7}}>{CONSTANTS.USER.CHANGE_PROFILE_PHOTO}</span>
            </div>
        )
    }

    renderAvatar(avatar, avatarWrapperSize) {
        let auxStyleAvatar;
        let secondAuxStyleAvatar;
        if(this.props.avatarFixed){
            auxStyleAvatar = {
                top: 5,
                width: 60,
                height: 60,
                transition: 'width 0.5s, height 0.5s',
            }
        }

        if(this.props.topBarFixed){
            secondAuxStyleAvatar = {
                top: this.props.posTopBar-305,
                width: 50,
                height: 50,
                transition: 'width 0.5s, height 0.5s',
            }
        }
        return (
            <div
                style = {styles.avatarWrapper}
                onMouseEnter={()=>this.onHoverAvatarPhoto()}
                onMouseLeave={()=>this.onUnhoverAvatarPhoto()}
            >
                <div style={[ styles.profileBorder,{ width: avatarWrapperSize, height: avatarWrapperSize, borderRadius: '50%'}  ]}>
                    <img src={ avatar } style={[styles.avatar, auxStyleAvatar,secondAuxStyleAvatar]} />
                     {this.props.isMyTimeline && this.state.hoverAvatarPhoto ? this.renderAddNewAvatarImage() : null}
                </div>
            </div>
        )
    }

    onPressImageButton(type) {
        this.setState({changeImageDialog: true})

        if(this.props.isMyTimeline) {
            let props = {
                isOpen:         true,
                onClick:        ( ) => this.onCloseImageDialog(type),
                type:           'firstPopUp',
                imageType:      type,
                cubeInstance:   this.props.cubeInstance
            }
            openPopUpChangePhoto(this.props.cubeInstance, UploadedImagesPreviewDialog, props);
        }

    }

    onCloseImageDialog(type) {
        this.setState({changeImageDialog: false})

        if(this.props.isMyTimeline) {
            let props = {
                type:           'firstPopUp',
                cubeInstance:   this.props.cubeInstance,

            }
            closePopUpChangePhoto(this.props.cubeInstance,  props);
        }
    }

    onHoverAvatarPhoto(){
        this.setState({hoverAvatarPhoto: true});
    }

    onUnhoverAvatarPhoto(){
        this.setState({hoverAvatarPhoto: false});
    }

    onHoverUserInfo(){
        this.setState({hoverUserInfo: true});
    }

    onUnhoverUserInfo(){
        this.setState({hoverUserInfo: false});
    }

    toggleEditMode(){
        USER_SETTINGS.getAddaps().addCubeToBoard({ type: CUBE_TYPES.CUBE_SETTINGS });
    }

    renderUserInfo(user) {
        return (
            <div
                className = "addaps-tour-profile"
                style={styles.userInfoWrapper}
                onMouseEnter={()=>this.onHoverUserInfo()}
                onMouseLeave={()=>this.onUnhoverUserInfo()}
            >
                    { this.props.isMyTimeline && this.state.hoverUserInfo ? <i
                                                    className="material-icons"
                                                    style = {styles.editPenIcon}
                                                    onClick={()=>this.toggleEditMode()}
                                                >
                                                    mode_edit
                                                </i>
                                                : null
                    }
                    {this.renderGeneralUserInfo('Username')}
                    {this.renderGeneralUserInfo('Title')}
            </div>
        )
    }

    // {this.state.isUserInfoEditMode ? this.renderGeneralUserInfoModeEdit('Username') : this.renderGeneralUserInfo('Username')}
    // {/* Wait to backendthis.state.isUserInfoEditMode ? this.renderGeneralUserInfoModeEdit('Location') : this.renderGeneralUserInfo('Location')*/}
    // {this.state.isUserInfoEditMode ? this.renderGeneralUserInfoModeEdit('Tlf') : this.renderGeneralUserInfo('Tlf')}
    // {/* Wait to backend this.state.isUserInfoEditMode ? this.renderGeneralUserInfoModeEdit('DateOfBirth') : this.renderGeneralUserInfo('DateOfBirth')*/}
    // {this.state.isUserInfoEditMode ? this.renderGeneralUserInfoModeEdit('Title') : this.renderGeneralUserInfo('Title')}
    // {this.state.isUserInfoEditMode ? this.renderEditButtonsSaveAndCancel() : null}

    getFullNameFromFirstNameAndLastName(firstName,lastName){
        return `${firstName} ${lastName}`;
    }

    getDateOfBirthUserStyle(birthdate){
        if(R.isNil(birthdate)) return;

        return R.splitAt(10,birthdate)[0];
    }

    //now d'ont change email Until we can verificate email
    // now location are not implemented in backend
    getUserInfoCharacteristics(type){

        let user = this.props.user.id === this.props.myself.id ? this.props.myself : this.props.user;


        let fullname = this.getFullNameFromFirstNameAndLastName(user.firstName, user.lastName);
        let dateOfBirth = this.getDateOfBirthUserStyle(user.birthdate);
        return R.cond([
            [ R.equals('Username'),             R.always({state: 'usernameValue'    ,icon: ''              , text: fullname                    , style: 'fullNameText'   ,type : 'text'  ,funcHandleChange: (event) => this.handleChangeGeneral(type, event)})],
            [ R.equals('Location'),             R.always({state: 'locationValue'    ,icon: 'location_on'   , text: 'Barcelona'                 , style: 'location'       ,type : 'text'  ,funcHandleChange: (event) => this.handleChangeGeneral(type, event)})],
            [ R.equals('DateOfBirth'),          R.always({state: 'dateOfBirthValue' ,icon: 'cake'          , text: dateOfBirth                 , style: 'infoIcon'       ,type : 'date'  ,funcHandleChange: (event) => this.handleChangeGeneral(type, event)})],
            [ R.equals('Title'),                R.always({state: 'titleValue'       ,icon: ''              , text: user.description            , style: 'infoIcon'       ,type : 'text'  ,funcHandleChange: (event) => this.handleChangeGeneral(type, event)})],
            [ R.equals('Tlf'),                  R.always({state: 'telValue'         ,icon: 'phone'         , text: user.tlf                    , style: 'infoIcon'       ,type : 'text'  ,funcHandleChange: (event) => this.handleChangeGeneral(type, event)})],
            [ R.T,                              R.I],
        ])(type);
    }

    renderGeneralUserInfo(type){
        let item = this.getUserInfoCharacteristics(type);
        let haveIcon = !R.isNil(item.icon)
        if(R.isNil(item.text)) return
        return(
            <div style={styles.textWithIcon}>
                {haveIcon ? <i style = {{fontSize: 13}} className="material-icons">{item.icon}</i> : null}
                <span style = {styles[item.style]}>{item.text}</span>
            </div>
        )
    }

    handleChangeGeneral(type, event){
        let item = this.getUserInfoCharacteristics(type);
        this.setState({ [item.state]: event.target.value});
    }

    onHoverCoverPhoto(){
        this.setState({hoverCoverPhoto: true})
    }

    onUnhoverCoverPhoto(){
        this.setState({hoverCoverPhoto: false})
    }
}

ProfileInformation.propTypes = {
  user: React.PropTypes.object,
};

// Specifies the default values for props:
ProfileInformation.defaultProps = {
};


export default ProfileInformation;
