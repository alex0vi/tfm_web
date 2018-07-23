'use strict';

let ReactDOM = require('react-dom');

import R                        from 'ramda';
import PropTypes                from 'prop-types';
import React, {PureComponent}   from 'react';
import {DragSource}             from 'react-dnd';
import HTML5Backend             from 'react-dnd-html5-backend';


const {getAddaps}               = require('../../../js/devel/modules-system/module-user-settings');
const {removeCubeStore}         = require('../../../js/devel/modules-system/module-user-settings');
const {MAT_ICON}                = require('../../../js/devel/constants/navigatorBarConstants.js');
const {DOM_ICON}                = require('../../../js/devel/constants/navigatorBarConstants.js');
const {IMG_ICON}                = require('../../../js/devel/constants/navigatorBarConstants.js');
const {ItemTypes}               = require("./constants.js");


class LinkCircularButton extends PureComponent {
    constructor(props){
        super(props);
        this.state = {

        };

        // binding of the "this" to each of the object's functions
        this.renderMatIcon     = this.renderMatIcon.bind(this);
        this.renderImgIcon     = this.renderImgIcon.bind(this);
        this.renderDomIcon     = this.renderDomIcon.bind(this);
        this.renderDefaultIcon = this.renderDefaultIcon.bind(this);
        this.createIcon        = this.createIcon.bind(this);
    }



    render() {
        const { cubeId, extraClass, selectedCube, clickCallback, closeCallback, style } = this.props;


        return (
            <div style={ style }
                 id={ cubeId }
                 className={`rb-link-wrapper ${extraClass} ${selectedCube ? " selected-cube" : ""} ${ cubeId }` }
                 key={ cubeId }>
                <div className="rb-link" onClick={clickCallback}>
                    <div className="rb-img-overlayer" />
                    { this.createIcon() }
                </div>

                <div className="rb-close-button" onClick={closeCallback}>
                    <div className="material-icons">close</div>
                </div>
                {/*<div className="droppable-elements">*/}
                    {/*{ children }*/}
                {/*</div>*/}
            </div>
        );
    }

    renderMatIcon(){     return (<i className={ "material-icons " + this.props.cubeIcon.iconClass }>{ this.props.cubeIcon.iconText }</i>) } // returns an icon of the type "MATERIAL ICON"
    renderImgIcon(){     return (<img className={ "link-img " + this.props.cubeIcon.iconClass } src={ this.props.cubeIcon.iconSrc} />) } // return an icon of the type "IMAGE"
    renderDomIcon(){     return (<div className={ "dom-icon " + this.props.cubeIcon.iconClass }>{ this.props.cubeIcon.iconText }</div>) } // returns an icon of the type "DOM"
    renderDefaultIcon(){ return this.renderMatIcon({iconText: 'settings_applications' });}

    createIcon(){
        let self = this;
        let myIcon = this.props.cubeIcon;
        return R.cond([
            [ R.equals(MAT_ICON),   () => self.renderMatIcon()],
            [ R.equals(IMG_ICON),   () => self.renderImgIcon()],
            [ R.equals(DOM_ICON),   () => self.renderDomIcon()],
            [ R.T,                  () => self.renderDefaultIcon() ]
        ])(myIcon.iconType);
    };
}


LinkCircularButton.defaultProps =  {
    // notification props
    selectedCube: false,
    cubeId: "",
    extraClass: "",
    clickCallback: () => console.log('clickCallback'),
    closeCallback:  () => console.log('closecallback'),
    cubeIcon: {
        id: "noId",
        icon:{
            iconType: IMG_ICON,
            iconSrc: "./multimedia/images/not-avaliable/loader-dual-ring.gif"
        }
    },


};

LinkCircularButton.propTypes = {
    selectedCube: PropTypes.bool,
    extraClass: PropTypes.string,
    cubeId: PropTypes.string,
    cubeIcon: PropTypes.object,
    clickCallback: PropTypes.func,
    closeCallback: PropTypes.func,
};

export default LinkCircularButton;
