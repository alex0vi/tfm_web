'use strict'

import React, {PureComponent}       from 'react';
import R                            from 'ramda';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import Radium                       from 'radium';
import autobind                     from 'autobind-decorator';
// import { DragDropContext }          from 'react-dnd';
// import HTML5Backend                 from 'react-dnd-html5-backend';


import QuickLink                    from './components/QuickLink';
import NewQuickLink                 from './components/NewQuickLink';
import AddapsApp                    from './components/AddapsApp';

const USER_SETTINGS     =   require('../../../../../../../js/devel/modules-system/module-user-settings');
const {ELEM_PLAYERS}    =   require('../../../../../../../js/devel/constants/topBarDropDownButtons/topBarDropDownButtons');
const api               =   require('../../../../../../../js/devel/modules-system/api-calls').apiv2;




@connect(null, null)
@Radium
// @DragDropContext(HTML5Backend)
class QuickLinks extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            ready: false,
            quickLinks:     [],
            hiddenElements: [],
            showAddQuickLink: false,
        }

        this.addNewQuickLink            = this.addNewQuickLink.bind(this);
        this.renderAddapsApp            = this.renderAddapsApp.bind(this);
        this.onClickAddapsApp           = this.onClickAddapsApp.bind(this);
        this.calculateHiddenElements    = this.calculateHiddenElements.bind(this);
    }

    componentWillMount() {

        api.get('/user/quickLinks')
            .then( quickLinks => {
                console.log({quickLinks})
                this.setState({quickLinks: quickLinks});
            })
            .then( () => {
                let hiddenElementsArr = this.calculateHiddenElements();

                this.setState({
                    hiddenElements: hiddenElementsArr,
                    ready:          true,
                })
            })
    }


    render() {
        if(!this.state.ready) return null;

        const mapIndexed = R.addIndex(R.map);

        console.log({ELEM_PLAYERS})
        return (
            <div
                className = { 'quickLinks-list-with-loader' }
                onScroll        = { this.askForMoreNotifications }
            >
                <div
                    className       = { 'quickLinks-list' }
                    ref             = { self => this.noticationsContainer = self }
                    onMouseEnter    = { () => this.setState({isHoverCubeContent: true}) }
                    onMouseLeave    = { () => this.setState({isHoverCubeContent: false}) }
                >
                    { /* Addap's Apps */}
                    { R.map(this.renderAddapsApp, ELEM_PLAYERS) }

                    { /* User quicklinks */}
                    { mapIndexed( (quickLink, idx) => this.renderWebApp(quickLink, idx), this.state.quickLinks ) }

                    { /* Add new quickLink Button */ }
                    <div
                        className   = { 'quickLink-circle' }
                        key         = { `quickLink-add`}
                        onClick     = { () => this.onClickAddNewQuickLink() }
                        title       = { 'Add new' }
                    >
                        <i style ={{color:'#9E9E9E', fontSize: 22,}} className={"material-icons quickLink-favicon"}>{this.state.showAddQuickLink ? 'close' : 'add'}</i>
                    </div>

                    { /* Hidden elements to fill the space */}
                    { mapIndexed( (quickLink, idx) => this.renderHiddenElement(quickLink, idx), this.state.hiddenElements)}
                </div>



                <NewQuickLink
                    addNewQuickLink = { this.addNewQuickLink }
                    visible         = { this.state.showAddQuickLink }
                />


            </div>
        )
    }

    onClickAddNewQuickLink() {
        this.setState({showAddQuickLink:!this.state.showAddQuickLink});
    }

    renderWebApp(quickLink, index){

        return(
            <QuickLink
                key                 = { `quickLink-${index}`}
                quickLink           = { quickLink }
                index               = { index }
                onClickQuickLink    = { () => this.onClickQuickLink(quickLink) }
                deleteQuickLink     = { () => this.deleteQuickLink(index)  }
            />
        )
    }

    renderAddapsApp(player) {

        return(
            <AddapsApp
                key                 = { `quickLink-${player.nameId}`}
                text                = { player.text }
                src                 = { player.src }
                onClickAddapsApp    = { () => this.onClickAddapsApp(player) }
            />
        )
    }


    renderHiddenElement(fakeApp, index){
        return(
            <div className={'quickLink-circle-hidden'} key= { `quickLink-${index}-hidden`}></div>
        )
    }

    onClickAddapsApp(player) {
        player.action();

        this.props.onClose();
    }

    onClickQuickLink(quickLink) {
        USER_SETTINGS.getActiveBoard().addWebCube(quickLink.url);

        this.props.onClose();
    }

    addNewQuickLink(quickLink) {
        this.setState({quickLinks: R.concat(this.state.quickLinks, [quickLink])})

        let hiddenElementsArr   = this.calculateHiddenElements();
        this.setState({hiddenElements: hiddenElementsArr});
    }

    deleteQuickLink(index) {

        api.delete(`user/quickLinks/${index}`)
            .then( data => {
                let newQuickLinkArr     = R.remove(index, 1, this.state.quickLinks);
                this.setState({quickLinks: newQuickLinkArr});
            })
            .then( () => {
                let hiddenElementsArr   = this.calculateHiddenElements();
                this.setState({hiddenElements: hiddenElementsArr});
            })
    }

    calculateHiddenElements() {
        let hiddenElementsArr = [];

        for(let i = 0; i < (5 - (this.state.quickLinks.length+ELEM_PLAYERS.length)%5 -1); ++i) { hiddenElementsArr.push(i) }

        return hiddenElementsArr;
    }
}





export default QuickLinks;
