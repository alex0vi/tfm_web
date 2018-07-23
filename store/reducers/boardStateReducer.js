'use strict';

import R from 'ramda';
import u from 'updeep';
import { normalize, schema }    from 'normalizr';

import {CHANGE_CURRENT_BOARD_KEY}   from '../actionsCreators/boardState/changeCurrentBoardKey.js';
import {CHANGE_SELECTED_CUBE_KEY}   from '../actionsCreators/boardState/changeSelectedCubeKey.js';
import {ADD_BOARD}                  from '../actionsCreators/boardState/addBoard.js';
import {ADD_CUBE}                   from '../actionsCreators/boardState/addCube.js';
import {CHANGE_CUBE_ICON}           from '../actionsCreators/boardState/changeCubeIcon.js';
import {REMOVE_BOARD}               from '../actionsCreators/boardState/removeBoard.js';
import {REMOVE_CUBE}                from '../actionsCreators/boardState/removeCube.js';
import {SET_CUBE_ORDER_LIST}        from '../actionsCreators/boardState/setCubeOrderList.js';
import {SET_CUBE_ORDER_BY_BOARD}    from '../actionsCreators/boardState/setCubeOrderByBoard.js';
import {SET_BODY_CLICK_EVENT}       from '../actionsCreators/boardState/setBodyClickNode.js';

const initialState = {
    addapsCubes:        {}, // list of active cubes, that has info about them (they DO NOT define their order). each cube has its id and favicon addapsCubes = { cubeId: { id: cubeId, icon: "www.test.com" } }

    boardOrder:         [],  // list of board that defines their order. boardOrder = [ boardId1, boardId2, boardId3, ...]
    cubeOrderByBoard:   {},  // object of boards that have the cube order, type: cubeOrderByBoard = { boardId: [cubeId1, cubeId2 ... ], ... }
    currentBoard:       "",
    selectedCube:       "",
    bodyClickNode:      {}
};


const changeCurrentBoardKeyHandler   = (state, payload) => {
    return {
        currentBoard: payload.boardId
    }
};


const setCubeOrderByBoard = (state, payload) => {
    return {
        cubeOrderByBoard: payload.cubeOrderByBoard
    }
};


const changeSelectedCubeKeyHandler   = (state, payload) => {
    return {
        selectedCube: payload.cubeId
    }
};


const setBodyClickNode   = (state, payload) => {
    return {
        bodyClickNode: payload.bodyClickNode
    }
};


/**
 * adds a board to the system
 * @param state
 * @param payload
 * @returns {{boardOrder: *, cubeOrderByBoard: *}}
 */
const addBoardHandler       = (state, payload) => {
    return {
        boardOrder:   R.append(payload.boardId, state.boardOrder),
        cubeOrderByBoard:    R.assoc(payload.boardId, [], state.cubeOrderByBoard), // adds a board with empty cube list, to the cube order object
    }
};


/**
 * removes a board from the system
 * @param state
 * @param payload
 * @returns {{addapsCubes: *, boardOrder: *, cubeOrderByBoard: *}}
 */
const removeBoardHandler    = (state, payload) => {
    // note: we should remove all the cubes before removing the board!!!
    let {boardId}       = payload;
    let cubesToRemove   = R.prop(boardId, state.cubeOrderByBoard); // list of cubes to remove

    let addapsCubes     = R.omit(cubesToRemove, state.addapsCubes);        // Removes the cubes from the list of cubes

    let boardOrder      = R.filter(R.equals(boardId), state.boardOrder);   //
    let cubeOrderByBoard       = R.omit(boardId, state.cubeOrderByBoard);

    return {
        addapsCubes,
        boardOrder,
        cubeOrderByBoard, // adds a board with empty cube list, to the cube order object
    }
};

/**
 * add a cube to the system
 * @param state
 * @param payload
 * @returns {{addapsCubes: *, cubeOrderByBoard: *}}
 */
const addCubeHandler        = (state, payload) => {
    let {boardId, cubeIcon, cubeId} = payload;
    let cubeOrderByBoard   = R.clone(state.cubeOrderByBoard);
    let addapsCubes = R.clone(state.addapsCubes);

    if (R.has(boardId, cubeOrderByBoard)){
        let cube = {
            id:    cubeId,
            board: boardId,
            icon:  cubeIcon,
        };

        addapsCubes                 = R.assoc(cubeId, cube, state.addapsCubes);
        cubeOrderByBoard[boardId]   = R.append(cubeId, cubeOrderByBoard[boardId]);
    }

    return {
        addapsCubes,
        cubeOrderByBoard,
    }
};


/**
 * removes a cube from the system
 * @param state
 * @param payload
 * @returns {{addapsCubes: *, cubeOrderByBoard: *}}
 */
const removeCubeHandler     = (state, payload) => {
    let {cubeId} = payload;

    let addapsCubes        = R.dissoc(cubeId, state.addapsCubes);
    let cubeOrderByBoard   = R.map(myList => R.reject(el => el === cubeId, myList), state.cubeOrderByBoard); // originally we got the boardId, but it has been decided that is more secure remove the cube by its id regardless of the board
    // cubeOrderByBoard[boardId] = R.reject(el => cubeId === el, cubeOrderByBoard[boardId]);

    return {
        addapsCubes,
        cubeOrderByBoard,
    }
};

/**
 * swaps a board's cube list with another cube list. Used to reorganize the state.
 * @param state
 * @param payload
 */
const setCubeOrderListHandler    = (state, payload) => {
    let {boardId, cubeList} = payload;
    let cubeOrderByBoard = state.cubeOrderByBoard;

    cubeOrderByBoard = R.assoc(boardId, cubeList, cubeOrderByBoard);

    return {
        cubeOrderByBoard
    }
};

/**
 * changes the info about an icon from a cube
 * @param state
 * @param payload
 * @returns {{addapsCubes: *}}
 */
const changeCubeIcon        = (state, payload) => {
    let {cubeIcon, cubeId} = payload;
    let addapsCubes = R.clone(state.addapsCubes);

    let cube = {
        icon:  cubeIcon,
    };

    addapsCubes[cubeId] = R.merge(state.addapsCubes[cubeId], cube);

    return {
        addapsCubes,
    }
};


let mapToActionHandler = {
    [CHANGE_CURRENT_BOARD_KEY]: changeCurrentBoardKeyHandler,
    [CHANGE_SELECTED_CUBE_KEY]: changeSelectedCubeKeyHandler,
    [ADD_BOARD]:                addBoardHandler,
    [REMOVE_BOARD]:             removeBoardHandler,
    [ADD_CUBE]:                 addCubeHandler,
    [REMOVE_CUBE]:              removeCubeHandler,
    [SET_CUBE_ORDER_LIST]:      setCubeOrderListHandler,
    [CHANGE_CUBE_ICON]:         changeCubeIcon,
    [SET_CUBE_ORDER_BY_BOARD]:  setCubeOrderByBoard,
    [SET_BODY_CLICK_EVENT]:     setBodyClickNode,
};


const isAnActionType    = type => R.has(type, mapToActionHandler);
const updateState       = (state, type, payload) => {
    return R.merge(state, mapToActionHandler[type](state, payload)); // I would use u, but it is too exhaustive and the elements doesnt end being the ones I want when I remove them.
};

/**
 * default function
 * @param state
 * @param action
 * @returns {{addapsCubes: {}, boardOrder: Array, cubeOrderByBoard: {}}}
 */
export default function(state = initialState, action = {type: null, action: null} ) {
    let {type, payload} = action;
    return isAnActionType(action.type) ? updateState(state, type, payload)
                                       : state;
};

