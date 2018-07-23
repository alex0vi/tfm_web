'use strict';
let ReactDOM = require('react-dom');

import R                        from 'ramda';
import React                    from 'react';

const {getAddaps}               = require('../../../js/devel/modules-system/module-user-settings');

const {removeCubeStore}         = require('../../../js/devel/modules-system/module-user-settings');
const {MAT_ICON}                = require('../../../js/devel/constants/navigatorBarConstants.js');
const {DOM_ICON}                = require('../../../js/devel/constants/navigatorBarConstants.js');
const {IMG_ICON}                = require('../../../js/devel/constants/navigatorBarConstants.js');


/** HELP FUNCTIONS**/
const defaultOpenCallback   = (myIcon)                  => () => { console.error("error on select cube: no cube of id " + myIcon.id + " and board id " + myIcon.board) };
const defaultCloseCallback  = (myIcon)                  => () => { console.error("error on close: no cube of id " + myIcon.id + " and board id " + myIcon.board); removeCubeStore(myIcon.id) };
const renderDefaultIcon     = ()                        => renderMatIcon({iconText: 'settings_applications' }); // retuns the default icon, that is of the type of "MATERIAL ICON" (settings_application)
const renderMatIcon         = ({iconClass, iconText})   => (<i className={ "material-icons " + iconClass }>{ iconText }</i>); // returns an icon of the type "MATERIAL ICON"
const renderImgIcon         = ({iconClass, iconSrc})    => (<img className={ "link-img " + iconClass } src={ iconSrc} />);  // return an icon of the type "IMAGE"
const renderDomIcon         = ({iconClass, iconText})   => (<div className={ "dom-icon " + iconClass }>{ iconText }</div>); // returns an icon of the type "DOM"
const searchCube            = (cubeId, boardId)         => getAddaps().searchCube(cubeId, boardId); // searchs a cube in addaps and returns the results

const createIcon            = (icon) => R.cond([
    [ R.equals(MAT_ICON),   () => renderMatIcon(icon)],
    [ R.equals(IMG_ICON),   () => renderImgIcon(icon)],
    [ R.equals(DOM_ICON),   () => renderDomIcon(icon)],
    [ R.T,                  () => renderDefaultIcon()  ]
])(icon.iconType);

module.exports = {
    defaultOpenCallback,
    defaultCloseCallback,
    renderDefaultIcon,
    searchCube,
    createIcon,
};
