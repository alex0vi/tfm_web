'use strict';

import React, {PureComponent}       from 'react';
import R                            from 'ramda';
// import {connect}                    from 'react-redux';
// import {bindActionCreators}         from 'redux';
import PropTypes                    from 'prop-types';
import Radium                       from 'radium';
import LinkCircularButton           from '../LinkCircularButton';
// import autobind                     from 'autobind-decorator';

const {getHistory}                  = require('../../../js/devel/modules-system/module-historial');
const {clearHistory}                = require('../../../js/devel/modules-system/module-historial');
const {getFavicon}                  = require('../../../js/devel/modules-system/module-historial');
const {getAddaps}                   = require('../../../js/devel/modules-system/module-user-settings');
const {getBaseUrl}                  = require('../../../js/devel/modules-system/module-operations-url');
const {T_}                          = require('../../../js/devel/modules-system/module-translation');




// @connect(mapStateToProps, mapDispatchToProps)
@Radium
class History extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            storyButton: 0,
        };

        // autobindFunctions(this) // does the autobind of all the functions to the current this.
        // this.goToUpContainer = this.goToUpContainer.bind(this);
        // this.undoArrowGoToUpContainer = this.undoArrowGoToUpContainer.bind(this);
        this.clearHistory           = this.clearHistory.bind(this);
        this.renderHistoryElBlock   = this.renderHistoryElBlock.bind(this);
        this.renderHistoryEl        = this.renderHistoryEl.bind(this);
        this.renderHistoryTitleDay  = this.renderHistoryTitleDay.bind(this);
        this.renderHistoryElements  = this.renderHistoryElements.bind(this);
        this.openUrl                = this.openUrl.bind(this);
    }

    clearHistory(){
        this.state.storyButton =+ 1;
        clearHistory();
    }


    render() {
        return (
            <div className={"history-section"}>
                {/*<div className={"history-close"} onClick={this.props.closeCallback}>x</div>*/}
                {/*<div className={"history-title"}>{ T_("history") }</div>*/}
                <div className={"history-list"}>
                    { this.renderHistoryElements(getHistory()) }
                </div>

                <div className={`history-clear buttonSettingsContainer`} onClick={ this.clearHistory }>{ T_("clear history") }</div>
            </div>
        )
    }

    renderHistoryElBlock(elSet){
        return (
            <div key={`el-block${ elSet[0].time }`} className="history-element-el-block">
                { R.map(this.renderHistoryEl, elSet) }
            </div>
        );

    }

    openUrl(url){
        getAddaps().addWebCube(url);
        this.props.closeCallback();
    }

    renderHistoryEl({time, hour, url, title}){
        return (
            <div key={`${url}-${time}`} className={"history-element"} title={title} onClick={() => this.openUrl(url)}>
                <div className={"history-element-flex"}>
                    <div className={"history-element-title"} style={{backgroundImage: `url("${getFavicon(url)}")`}}><div className="history-actual-title">{title}</div></div>
                    <div className={"history-element-time"}>{hour}</div>
                </div>

                <div className={"history-element-url"}  title={url}>{url}</div>
            </div>
        )
    }

    renderHistoryTitleDay({ date }){
        return (
            <div key={`title-${date}`} className={"history-new-day"}>{ date }</div>
        )

    }

    renderHistoryElements(history){
        let organizedElements = R.groupWith((a, b) => a.date === b.date, history);
        let returnResults = [];

        R.map(elList => {
            returnResults = R.append(this.renderHistoryTitleDay(elList[0]), returnResults);
            returnResults = R.append(this.renderHistoryElBlock(elList), returnResults);
        })(organizedElements);

        return returnResults;
    };
}


History.defaultProps =  {
    // // notification props
    // acceptCallback: () => alert("accept"),
    closeCallback:  () => alert("close"),
};

History.propTypes = {
    // acceptCallback: PropTypes.func,
    closeCallback:  PropTypes.func,
};


export default History;
