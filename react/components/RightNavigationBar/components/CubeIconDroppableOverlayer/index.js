'use strict';

let ReactDOM = require('react-dom');
import R                        from 'ramda';
import PropTypes                from 'prop-types';
import React, {PureComponent}   from 'react';
import { DropTarget }           from 'react-dnd';

const {ItemTypes}               = require("../constants.js");
const {WRAPPER_POSITION}        = require("../constants.js");
const { BEFORE}                 = WRAPPER_POSITION;
const { AFTER }                 = WRAPPER_POSITION;

const cubeContainerTarget = {
    drop(props, monitor, component) {
        // let {cubeId, boardId}   = props;
        let dropItemId          = monitor.getItem().id;
        let dropItemBoard       = monitor.getItem().boardId;
        component.setState({dropItemId, dropItemBoard});
        component.processDrop();

    },
    hover(props, monitor, component){
        component.setState({isHover: true});
        // console.warn("HOVERING ELEMENT IN COORDINATES", {props, monitor, component, item: monitor.getItem()});
    }
};

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        didDrop: monitor.didDrop(),
        draggableItem: monitor.getItem(),
    };
};


class CubeIconDroppableOverlayer extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            dropItemId: null,
            dropItemBoard: null,
            isHover: false,
        };

        this.processDrop = this.processDrop.bind(this);
    }

    processDrop(){
        const { cubeId, boardId, position, processOrder } = this.props;
        const { dropItemId, dropItemBoard }                      = this.state;
        console.log("process drop", { cubeId, boardId, position, dropItemId, dropItemBoard });

        if (cubeId !== dropItemId && dropItemBoard === boardId){
            processOrder(cubeId, dropItemId, boardId, position);
        }
    }

    // componentWillUpdate(nextProps, nextState){
    //     // console.warn("component will update", { nextIsOver: nextProps.isOver, isOver: this.props.isOver, nextIsDrop: nextState.isDrop, isDrop: this.state.isDrop, cubeId: this.props.cubeId, dropItemId: this.state.dropItemId })
    //     if (nextState.isDrop && !R.isEmpty(this.state.dropItemId)){
    //         this.processDrop();
    //     }
    // }

    render(){
        const { connectDropTarget, isOver } = this.props;
        let isHoveringClass    =  isOver ? "hovering-element" : "normal-element";
        let afterOrBeforeClass =  this.props.position === AFTER ? "after-container" : "before-container";

        return connectDropTarget(
            <div className={`cube-container-droppable ${isHoveringClass} ${afterOrBeforeClass}`}>{
                this.props.children
            }</div>
        )
    }
}



CubeIconDroppableOverlayer.defaultProps =  {
    cubeId:         "no-id",
    boardId:        "no-board-id",
    position:       BEFORE,
    processOrder:   () => console.log("no process order function")
};

CubeIconDroppableOverlayer.propTypes = {
    cubeId:     PropTypes.string.isRequired,
    boardId:    PropTypes.string.isRequired,
    position:   PropTypes.string.isRequired
};


export default DropTarget(ItemTypes.LINK_BUTTON, cubeContainerTarget, collect)(CubeIconDroppableOverlayer);
