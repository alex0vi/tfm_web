'use strict';

let ReactDOM = require('react-dom');

import R                            from 'ramda';
import {bindActionCreators}         from 'redux';
import React, {PureComponent}       from 'react';
import {connect}                    from 'react-redux';
import { DragDropContext }          from 'react-dnd';
import HTML5Backend                 from 'react-dnd-html5-backend';

import CubeButtonDraggable          from './components/CubeButtonDraggable/index.js'
import CubeButtonDroppableWrapper   from './components/CubeIconDroppableOverlayer/index.js'
import CustomDragLayer              from './components/CustomDragLayer/index.js'
const {CSSTransition, TransitionGroup} = require('react-transition-group'); // ES5 with npm
import FadeEffect                   from '../../TransitionEffects/FadeEffect.js'
import {actionSetCubeOrderByBoard}    from '../../../store/actionsCreators/boardState/setCubeOrderByBoard.js'
const {WRAPPER_POSITION}            = require("./components/constants.js");

const { BEFORE}                     = WRAPPER_POSITION;
const { AFTER }                     = WRAPPER_POSITION;

const boardExists = (myBoard, cubeOrderByBoard) => R.has(myBoard, cubeOrderByBoard);
const cubeExists  = (cubeId, cubeList) => R.any(R.equals(cubeId), cubeList);

const mapStateToProps = (state, ownProps) => {
    return {
        // todo; connects the info from redux to an specific value inside the element. We need the board cube's info, that is in the state.
        addapsCubes:        state.boardReducer.addapsCubes,
        boardOrder:         state.boardReducer.boardOrder,
        cubeOrderByBoard:   state.boardReducer.cubeOrderByBoard,
        currentBoard:       state.boardReducer.currentBoard,
        selectedCube:       state.boardReducer.selectedCube,
    }
};

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchCubeOrderByBoard: actionSetCubeOrderByBoard,
    }, dispatch)
};

@connect(mapStateToProps, mapDispatchToProps)
class RightNavigationBar extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            isDragging: false,
        };

        // binding of the "this" to each of the object's functions
        this.getCurrentBoardCubeList    = this.getCurrentBoardCubeList.bind(this);
        this.renderIcons                = this.renderIcons.bind(this);
        this.getAddapsCubeList          = this.getAddapsCubeList.bind(this);
        this.getCubeListByBoardId       = this.getCubeListByBoardId.bind(this);
        this.processCubeOrder           = this.processCubeOrder.bind(this);
        this.elementIsDragging          = this.elementIsDragging.bind(this);
    }

    elementIsDragging(isDragging){
        this.setState({isDragging})
    }

    render() {
        if(R.isEmpty(this.props.addapsCubes) || R.isNil(this.props.addapsCubes)) return null;
        // this.props.cubeOrderByBoard;


        return (
            <div className={ this.state.isDragging ? "cube-link-is-dragging" : "" }>
                { /* todo: in the future this might be deprecated */ }
                <div className="rb-addaps-cubes cube-list-system" key="addaps-container">
                    <TransitionGroup  className='addaps-cube-wrapper'>
                        { this.getAddapsCubeList() }
                    </TransitionGroup>

                </div>

                <div className="rb-addaps-cubes cube-list-system" key="board-container">
                    <TransitionGroup  className='board-cube-wrapper'>
                        { this.getCurrentBoardCubeList() }
                    </TransitionGroup>
                </div>
                {/*<CustomDragLayer/> todo: this isn't working properly yet, we should take a look in the future*/}
            </div>
        );
    }

    getCurrentBoardCubeList()   { return this.getCubeListByBoardId(this.props.currentBoard); }
    getAddapsCubeList()         { return this.getCubeListByBoardId("addaps");  }


    /**
     * process the reorganization of the elements
     * @param cubeId
     * @param dropItemId
     * @param boardId
     * @param isAfter
     */
    processCubeOrder(cubeId, dropItemId, boardId, isAfter = BEFORE){
        let cubeOrderByBoard = R.clone(this.props.cubeOrderByBoard);
        let reverseIfApplicable = isAfter === AFTER ? R.reverse : R.identity;
        console.warn("process order general", { dropItemId, cubeId, boardId, cubeOrderByBoard});

        if (
            !R.equals(dropItemId, cubeId)                 &&     // the dropped cube is not dropping inside itself
            boardExists(boardId, cubeOrderByBoard)      &&     // the board exists
            cubeExists(cubeId, cubeOrderByBoard[boardId]) &&     // current cube exists in the board (should be, but just in case)
            cubeExists(dropItemId, cubeOrderByBoard[boardId])  // the dropped cube exists in the board
        ){
            // at this level we know that the board has a list, and it contains at least both elements, and both elements are different
            // one should note that if we drop the element over itself, it should remain the same place, but this will move it to the last part
            let myList  = R.pipe(
                R.prop(boardId),                    // we will get the cube list associated to the board
                reverseIfApplicable,                // if we want to move after the cube, we should revert the list first. if not, it will not do anything
                R.reject(R.equals(dropItemId)),     // we will remove the element we want to move
                R.splitWhen(R.equals(cubeId)),        // we will find where our id is, and will split it
                R.insert(1, [dropItemId]),          // insert before the id todo: check the cases in where cubeId is first
                R.flatten,                          // we will make a single list again, not an splitted one
                reverseIfApplicable                 // we will reverse if we want to place it after, leave as it otherwise
            )(cubeOrderByBoard);

            cubeOrderByBoard = R.assoc(boardId, myList, cubeOrderByBoard);
            this.props.dispatchCubeOrderByBoard(cubeOrderByBoard);

        }else{
            console.warn("No order was rearranged because some elements didn't exist", { dropItemId, cubeId, boardId, cubeOrderByBoard})
        }
    }

    getCubeListByBoardId(boardKey){
        let cubeList = R.prop(boardKey,  this.props.cubeOrderByBoard);
        let result   = R.props(cubeList, this.props.addapsCubes);
        return R.map(this.renderIcons, result);
    }

    renderIcons(myIcon){
        if(R.isEmpty(this.props.addapsCubes) || R.isNil(this.props.addapsCubes)) return null;

        return (
            <FadeEffect key={`${myIcon.id}-test`}>
                <CubeButtonDraggable selectedCube={this.props.selectedCube === myIcon.id}
                                     extraClass="cube-container-droppable-wrapper" // to be used with cubeButtonDropableWrapper
                                     cubeId={myIcon.id}
                                     boardId={myIcon.board}
                                     cubeIcon={myIcon.icon}
                                     key={myIcon.id}
                                     myKey={myIcon.id}
                                     isDraggingCallback={this.elementIsDragging}
                >
                    <CubeButtonDroppableWrapper cubeId={myIcon.id} boardId={myIcon.board} position={BEFORE}  processOrder={ this.processCubeOrder }/>
                    <CubeButtonDroppableWrapper cubeId={myIcon.id} boardId={myIcon.board} position={AFTER}   processOrder={ this.processCubeOrder }/>
                </CubeButtonDraggable>
            </FadeEffect>
        );
    }
}


RightNavigationBar.defaultProps =  {
    // // notification props
    // acceptCallback: () => alert("accept"),
    // closeCallback:  () => alert("close"),
};

RightNavigationBar.propTypes = {
    // acceptCallback: PropTypes.func,
    // closeCallback:  PropTypes.func,
};


export default DragDropContext(HTML5Backend)(RightNavigationBar);
