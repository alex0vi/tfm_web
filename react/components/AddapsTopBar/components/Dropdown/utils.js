'use strict';
const R         = require('ramda');
const Promise   = require('bluebird');
const {setBodyClickNode}     = require('../../../../../js/devel/modules-system/module-user-settings');

const initBodyClick = ($body) => {
    $body = R.isNil($body) ? $("body") : $body;
    $body.mousedown(getNodeInfo);

    // emptyHideSubscribers(); // clean the subscribers buffer
};

const getNodeInfo = event => {
    let $myTarget  = $(event.target);
    let $parents   = $myTarget.parentsUntil("body");
    let parentListTag   = [];
    let parentListClass = [];
    let parentListId    = [];

    $parents.each((idx, el) => {
        let $el = $(el);
        let myTagName   = $el.prop("tagName");
        let myClass     = $el.attr("class");
        let myId        = $el.attr("id");

        if (!R.isNil(myTagName))    parentListTag  .push(myTagName); // it should be always one
        if (!R.isNil(myClass))      parentListClass.push(R.split(" ", myClass   ));
        if (!R.isNil(myId))         parentListId   .push(R.split(" ", myId      ));
    });

    setBodyClickNode({
        parentListTag,
        parentListClass,
        parentListId,
    });
};

const hasValidData = (nodeList, searchType) => !R.isNil(nodeList)
                                        && !R.isEmpty(nodeList)
                                        &&  R.has(searchType, nodeList)
                                        && !R.isNil(nodeList[searchType])
                                        && !R.isEmpty(nodeList[searchType]);

const verifyClickedNode = (nodeList, nodeToSearch, searchType) => {
    if (hasValidData(nodeList, searchType)){
        let myList = nodeList[searchType];
        return R.any(el => R.any(R.equals(nodeToSearch), el), myList);
    }

    return false;
};

module.exports = {
    initBodyClick,
    getNodeInfo,
    verifyNodeClassClicked: (nodeList, nodeToSearch) => verifyClickedNode(nodeList, nodeToSearch, 'parentListClass'),
    verifyNodeTagClicked:   (nodeList, nodeToSearch) => verifyClickedNode(nodeList, nodeToSearch, 'parentListTag'),
    verifyNodeIdClicked:    (nodeList, nodeToSearch) => verifyClickedNode(nodeList, nodeToSearch, 'parentListId'),

};
