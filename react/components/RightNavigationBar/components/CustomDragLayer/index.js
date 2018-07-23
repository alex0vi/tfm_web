import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
const {ItemTypes}               = require("../constants.js");
// import shouldPureComponentUpdate from './shouldPureComponentUpdate'
// import ItemTypes from './ItemTypes'
// import Box from './Box'

const boxSource = {
    beginDrag(props) {
        console.log("begin drag test", props)
        const { id, title, left, top } = props
        return { id, title, left, top }
    },
};


const shallowEqual = (objA, objB) => {
    if (objA === objB) {
        return true
    }

    const keysA = Object.keys(objA)
    const keysB = Object.keys(objB)

    if (keysA.length !== keysB.length) {
        return false
    }

    // Test for A's keys different from B.
    const hasOwn = Object.prototype.hasOwnProperty
    for (let i = 0; i < keysA.length; i += 1) {
        if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
            return false
        }

        const valA = objA[keysA[i]]
        const valB = objB[keysA[i]]

        if (valA !== valB) {
            return false
        }
    }

    return true
};

function getStyles(props) {
    const { left, top, isDragging } = props;
    const transform = `translate3d(${left}px, ${top}px, 0)`

    return {
        position: 'absolute',
        transform,
        WebkitTransform: transform,
        // IE fallback: hide the real node using CSS when dragging
        // because IE will ignore our custom "empty image" drag preview.
        opacity: isDragging ? 0 : 1,
        height: isDragging ? 0 : '',
    }
}

@DragSource(ItemTypes.LINK_BUTTON, boxSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
}))
export default class DraggableBox extends Component {
    // static propTypes = {
    //     connectDragSource: PropTypes.func.isRequired,
    //     connectDragPreview: PropTypes.func.isRequired,
    //     isDragging: PropTypes.bool.isRequired,
    //     id: PropTypes.any.isRequired,
    //     title: PropTypes.string.isRequired,
    //     left: PropTypes.number.isRequired,
    //     top: PropTypes.number.isRequired,
    // }


    shouldComponentUpdate(nextProps, nextState){
        return (
            !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState)
        )
    }

    componentDidMount() {
        // Use empty image as a drag preview so browsers don't draw it
        // and we can draw whatever we want on the custom drag layer instead.
        this.props.connectDragPreview(getEmptyImage(), {
            // IE fallback: specify that we'd rather screenshot the node
            // when it already knows it's being dragged so we can hide it with CSS.
            captureDraggingState: true,
        })
    }

    render() {
        const { connectDragSource } = this.props;

        return connectDragSource(
            <div style={ getStyles(this.props) }>
                test
            </div>,
        )
    }
}

