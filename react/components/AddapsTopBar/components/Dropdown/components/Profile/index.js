'use strict'

import React, {PureComponent}       from 'react';
import R                            from 'ramda';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import Radium                       from 'radium';
import autobind                     from 'autobind-decorator';


const CONSTANTS                 =   require('../../../../../../../js/devel/constants/constants');
const {getActiveBoard}          =   require('../../../../../../../js/devel/modules-system/module-user-settings');
const {getAddaps}               =   require('../../../../../../../js/devel/modules-system/module-user-settings');
const {isGuestMode}             =   require('../../../../../../../js/devel/modules-system/module-user-settings');
const {alertGuestMode}          =   require('../../../../../../../js/devel/modules-system/module-user-settings');
const {translateStringCapital}  =   require('../../../../../../../js/devel/modules-system/module-translation');
const CUBE_TYPES                =   require('../../../../../../../js/devel/constants/cubeTypes/cubeTypesConstants');
const TourAddaps                =   require('../../../../../../../js/devel/modules-addaps/module-tour');
const {logOut}                  =   require('../../../../../../../js/devel/modules-system/module-authentication');

const {openLightBoxWithComponent}   = require('../../../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron');
const {openHistory}                 = require('../../../../../../../js/devel/entities/cubes/reactCubes/Functions/ElectronToReact');
const Settings                      = require('../../../../../../components/Settings');
const History                       = require('../../../../../../components/History');

const mapStateToProps = (state, ownProps) => {

    let name = `${state.user.firstName} ${state.user.lastName}`;
    return {
        name,
        avatar      :   state.user.avatar,
    }
};

@connect(mapStateToProps, null)
@Radium
class Profile extends PureComponent {

    constructor(props) {
        super(props);

        this.openSettingsLightBox = this.openSettingsLightBox.bind(this);
        this.openHistorialLightBox = this.openHistorialLightBox.bind(this);
    }



    render() {
        let {avatar, name } = this.props;

        return (
            <div className='dropdown-profile'>
                <div className='pd-user-info'>

                    <div className='pd-user-avatar-wrapper'>
                        <img className='pd-user-avatar' src={ avatar.sm } />
                    </div>

                    <div className='pd-user-details'>
                        <div className='pd-user-name'>{ name }</div>
                        <div
                            className   = { 'pd-user-profile' }
                            onClick     = { () => this.onClickOptionWithGuestMode({spec: { subType: 'Profile'}, type: CUBE_TYPES.CUBE_SOCIAL}) }
                        >{ translateStringCapital('view profile') }</div>
                    </div>
                </div>

                <div className='pd-user-options'>
                    <div id='pd-settings'   className='pd-user-options-el' onClick={() => this.openSettingsLightBox() }>{ translateStringCapital('settings')}</div>
                    <div id='pd-settings'   className='pd-user-options-el' onClick={this.openHistorialLightBox }>{ translateStringCapital('browsing History')}</div>
                    <div id='pd-tour'       className='pd-user-options-el' onClick={() => TourAddaps.initTour()} >{ translateStringCapital('tour') }</div>
                    <div id='pd-sign-out'   className='pd-user-options-el' onClick={() => getAddaps().verifySavedAskUserAndSave({ logout: true }).then(res => res !== CONSTANTS.CANCEL_CLOSE ? logOut() : null)}>{ translateStringCapital('sign out') }</div>
                    <div id='pd-close'      className='pd-user-options-el' onClick={() => getAddaps().closeApp()}>{ translateStringCapital('close') }</div>
                </div>
            </div>
        )
    }


    onClickOptionWithGuestMode(spec) {
        isGuestMode() ? alertGuestMode() : getAddaps().addCubeToBoard( spec );
        this.props.onClose()
    }

    openSettingsLightBox(){
        isGuestMode() ? alertGuestMode() : openLightBoxWithComponent(<Settings cubeInstance={this}/>, translateStringCapital('settings'), 'settings');
        this.props.onClose()
    }

    openHistorialLightBox(){
        let closeLightbox = () => console.log("test close");
        const closeCallback = () => closeLightbox();
        closeLightbox = openLightBoxWithComponent(<History closeCallback={ closeCallback }/>, translateStringCapital('browsing history'), 'history');

        this.props.onClose();
    }
}

export default Profile;
