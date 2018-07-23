'use strict';
import R                            from 'ramda';

import CUBE_DES_CONSTANTS           from '../../../../../../js/devel/constants/cubeDesigner/cubeDesignerConstants';
import DROP_CONSTANTS               from '../../../../../../js/devel/constants/topBarDropDownButtons/topBarDropDownButtons';


// CONSTANTS
const MAX_NUMBERS_WIDTH_AND_HEIGHT = 15;

const DEFAULT_LANGUAGE = {
    label: 'English',
    value: 'en'
};

const OPENING_DIRECTIONS =[
    {label: "Right to left",    value: CUBE_DES_CONSTANTS.RIGHT_TO_LEFT},
    {label: "Left to right",    value: CUBE_DES_CONSTANTS.LEFT_TO_RIGHT},
    {label: "Center",           value: CUBE_DES_CONSTANTS.CENTER},
];

const CUBE_SIZES = [
    {label: "Standard size",    value: CUBE_DES_CONSTANTS.CUBES_SIZES.CUBE_SIZE_STANDARD},
    {label: "Small size",       value: CUBE_DES_CONSTANTS.CUBES_SIZES.CUBE_SIZE_SMALL},
    {label: "Big size",         value: CUBE_DES_CONSTANTS.CUBES_SIZES.CUBE_SIZE_BIG},
    {label: 'Manual',           value: 'MANUAL'},
];

const ELEM_SEARCH = [
    {label: 'Google',    value: DROP_CONSTANTS.ELEM_SEARCH[0].nameId,       src: DROP_CONSTANTS.ELEM_SEARCH[0].src},
    {label: 'Startpage', value: DROP_CONSTANTS.ELEM_SEARCH[1].nameId,       src: DROP_CONSTANTS.ELEM_SEARCH[1].src},
    {label: 'Yahoo',     value: DROP_CONSTANTS.ELEM_SEARCH[2].nameId,       src: DROP_CONSTANTS.ELEM_SEARCH[2].src},
    {label: 'Bing',      value: DROP_CONSTANTS.ELEM_SEARCH[3].nameId,       src: DROP_CONSTANTS.ELEM_SEARCH[3].src},
    {label: 'Yandex',    value: DROP_CONSTANTS.ELEM_SEARCH[4].nameId,       src: DROP_CONSTANTS.ELEM_SEARCH[4].src},
    {label: 'Baidu',     value: DROP_CONSTANTS.ELEM_SEARCH[5].nameId,       src: DROP_CONSTANTS.ELEM_SEARCH[5].src},
];

const MAP_ELEM_SEARCH = {
    google:     ELEM_SEARCH[0],
    startpage:  ELEM_SEARCH[1],
    yahoo:      ELEM_SEARCH[2],
    bing:       ELEM_SEARCH[3],
    yandex:     ELEM_SEARCH[4],
    baidu:      ELEM_SEARCH[5],
};

const OPENING_DIRECTIONS_MAP = {
    [CUBE_DES_CONSTANTS.RIGHT_TO_LEFT]: OPENING_DIRECTIONS[0],
    [CUBE_DES_CONSTANTS.LEFT_TO_RIGHT]: OPENING_DIRECTIONS[1],
    [CUBE_DES_CONSTANTS.CENTER]:        OPENING_DIRECTIONS[2],
}




// FUNCTIONS
const isPredefinedSize = (myWidth, myHeight) => {
    let result = R.filter((predefinedSize) => isEqualToPredefinedSize(myWidth, myHeight,predefinedSize), CUBE_SIZES)
    return result[0];
}

const isEqualToPredefinedSize = (myWidth, myHeight, cubeSizePredefined) =>{
    if(cubeSizePredefined.value === 'MANUAL') {
        return [{
            label: 'Manual',
            valie: {
                height: myHeight,
                width:  myWidth,
            }
        }]
    }
    return R.equals({height: myHeight, width: myWidth}, cubeSizePredefined.value);
}


const getBoardBackground = (type, background) => {
    return R.cond([
        [ R.equals('CSS_COLOR'),          R.always({backgroundColor: background.item})],
        [ R.equals('ADDAPS_IMG'),         R.always({backgroundImage: `url(${background.item.sm})`})],
        [ R.equals('USER_IMG'),           R.always({backgroundImage: `url(${background.item.sm})`})],
    ])(type);
}

const differenceBetweenStringsInNumbers = (field) => {
    return MAX_NUMBERS_WIDTH_AND_HEIGHT - field.toString().length;
}

export default {
    MAX_NUMBERS_WIDTH_AND_HEIGHT,
    DEFAULT_LANGUAGE,
    OPENING_DIRECTIONS,
    CUBE_SIZES,
    ELEM_SEARCH,
    MAP_ELEM_SEARCH,
    OPENING_DIRECTIONS_MAP,
    isPredefinedSize,
    isEqualToPredefinedSize,
    getBoardBackground,
    differenceBetweenStringsInNumbers
}
