'use strict';

let ReactDOM = require('react-dom');

import R                        from 'ramda';
import PropTypes                from 'prop-types';
import React, {PureComponent}   from 'react';
import {DragSource}             from 'react-dnd';
import HTML5Backend             from 'react-dnd-html5-backend';


const {getAddaps}               = require('../../../../../js/devel/modules-system/module-user-settings');
const {removeCubeStore}         = require('../../../../../js/devel/modules-system/module-user-settings');
const {MAT_ICON}                = require('../../../../../js/devel/constants/navigatorBarConstants.js');
const {DOM_ICON}                = require('../../../../../js/devel/constants/navigatorBarConstants.js');
const {IMG_ICON}                = require('../../../../../js/devel/constants/navigatorBarConstants.js');
const {ItemTypes}               = require("../constants.js");


const mySearchCube            = (cubeId, boardId)         => getAddaps().searchCube(cubeId, boardId); // searchs a cube in addaps and returns the results
const cubeExists = R.curry((myProperty, el) => !R.isNil(el) && !R.isEmpty(el) && el !== false && R.hasIn(myProperty, el));


const iconSource = {
    beginDrag(props, monitor, component) {
        component.props.isDraggingCallback(true);
        return {
            id: props.cubeId,
            boardId: props.boardId,
        };
    },

    endDrag(props, monitor, component){
        component.props.isDraggingCallback(false)
    }
};

const collect = (connect, monitor) => {
    return {
        connectDragSource:  connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging:         monitor.isDragging()
    }
};




class CubeButtonDraggable extends PureComponent {
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
        this.closeCallback     = this.closeCallback.bind(this);
        this.clickCallback     = this.clickCallback.bind(this);
        this.baseCallback      = this.baseCallback.bind(this);
        this.defaultCallback   = this.defaultCallback.bind(this);
        // this.componentDidMount = this.componentDidMount.bind(this);

    }

    // componentDidMount(){
    //     let self = this;
    //     const myLink = 'https://cdn.globalauctionplatform.com/35fbd475-ccb7-45e1-a451-a7d9011935f8/a94b83ae-3e76-4e15-cfbb-bd311b6dad79/120x120.jpg';
    //     // let previewLink = (
    //     //     <div style={{ "backgroundColor": "blue", display:"block", height: "100px", width:"100px"}}>
    //     //         hola caracola
    //     //     </div>
    //     // );
    //
    //     const img = new Image();
    //     img.src = myLink;
    //     img.onload = () => this.props.connectDragPreview(img);
    //     // self.props.connectDragPreview(previewLink)
    // }


    render() {
        const { connectDragSource, isDragging } = this.props;
        return connectDragSource(
            <div style={{ display: isDragging ? "none" : "flex", cursor: isDragging ? "move" : "pointer" }}
                 id={ this.props.cubeId }
                 className={`rb-link-wrapper ${this.props.extraClass} ${this.props.selectedCube ? " selected-cube" : ""} ${ this.props.cubeId }` }
                 key={ this.props.cubeId }>
                <div className="rb-link" onClick={this.clickCallback}>
                    <div className="rb-img-overlayer" />
                    { this.createIcon() }
                </div>

                <div className="rb-close-button" onClick={this.closeCallback}>
                    <div className="material-icons">close</div>
                </div>
                <div className="droppable-elements">
                    { this.props.children }
                </div>
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

    closeCallback(){ this.baseCallback("close"); }
    clickCallback(){ this.baseCallback("focusCubeOperation"); }

    /**
     * base callback for close and click callback. As both of them are basically the same, only the cube's action
     * changes, here we get the action we want as a parameter to execute and do the same operations
     * @param myProperty
     */
    baseCallback(myProperty){
        let self = this;
        let myCube = mySearchCube(self.props.cubeId, self.props.boardId); // we do this because the cube can be init before addap is init
        const executeCubeAction = R.curry((myProperty, el) => el[myProperty]());
        R.cond([
            [ cubeExists,  executeCubeAction ],
            [ R.T,         this.defaultCallback   ]
        ])(myProperty, myCube);
    }

    defaultCallback(myProperty,el) { console.error("error on executing " + myProperty + ": no cube of id " + this.props.cubeId + " and board id " + this.props.boardId, { cubeResultValue: el, hasOwnProperty: R.hasOwnProperty(myProperty, el) }) }

    // defaultOpenCallback()     { console.error("error on select cube: no cube of id " + this.props.cubeId + " and board id " + this.props.boardId) }
    // defaultCloseCallback()    { console.error("error on close: no cube of id "       + this.props.cubeId + " and board id " + this.props.boardId); removeCubeStore(this.props.cubeId) }
}


CubeButtonDraggable.defaultProps =  {
    // notification props
    selectedCube: false,
    cubeId: "",
    boardId: "",
    extraClass: "",
    cubeIcon: {
        id: "noId",
        icon:{
            iconType: IMG_ICON,
            iconSrc: "./multimedia/images/not-avaliable/loader-dual-ring.gif"
        }
    }
};

CubeButtonDraggable.propTypes = {
    connectDragSource:  PropTypes.func,
    isDragging:         PropTypes.bool,
    isDraggingCallback: PropTypes.func, // an operation to do everytime we enter to drag. when dropping we should invalidate it. should have a parameter that is a boolean - is dragging or is not dragging
    extraClass: PropTypes.string,
    selectedCube: PropTypes.bool,
    cubeId: PropTypes.string,
    boardId: PropTypes.string,
    cubeIcon: PropTypes.object
};

export default DragSource(ItemTypes.LINK_BUTTON, iconSource, collect)(CubeButtonDraggable);
