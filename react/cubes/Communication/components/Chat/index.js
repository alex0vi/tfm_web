'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import {Provider}                   from 'react-redux'
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import R                            from 'ramda';
import Radium                       from 'radium';
import PropTypes                    from 'prop-types';
import moment                       from 'moment';



import {COLORS}                       from '../../../../globals/colors.js';

import Information                  from './components/Information';
import Box                          from './components/Box/';
import BoxUnaccepted                from './components/BoxUnaccepted';
import BoxWithMessage               from './components/BoxWithMessage';
import Message                      from './components/Message/';
// import Loading                      from '../../../../components/Loading';

import {getCurrentRoom}             from '../../utils/';

import {setMessages}                from '../../../../../store/actionsCreators/communication/setMessages';
import {setActiveChannel}           from '../../../../../store/actionsCreators/communication/setActiveChannel';
import {getMessagesByDate}          from './utils/';

const api                           =   require('../../../../../js/devel/modules-system/api-calls').apiv2;


const avatarSize    = 60;
const sideBarWidth  = '300px';

const styles = {
    container: {
        position:       'absolute',
        top:            40,
        bottom:         0,
        zIndex:         1,
        right:          0,
    },
    containerChat:{
        position:       'absolute',
        height:         '100%',
        width:          '100%',
    },
    content: {
        position:       'absolute',
        top:            0,
        bottom:         '50px',
        right:          0,
        left:           0,
        overflow:       'scroll'
    },
    box: {
        position:       'absolute',
        bottom:         0,
        right:          0,
        left:           0,
        height:         '50px',
    },
    boxContainer: {
        display:        'flex',
        width:          '100%',
        height:         '100%',
        borderTop:      '0.5px solid #E0E0E0',
        alignItems:     'center',
    },
    message: {
        flex:           1,
    },
    button: {
        width:          '50px',
        cursor:         'pointer',
    },
    buttonText: {
        color:          COLORS.primary,
        fontSize:       '14px'
    },
    infoDayText:{
        width: 70,
        color: '#474747',
        fontFamily: "Avenir Next",
        fontSize: 10,
        fontWeight: 500,
        textAlign: 'justify',
        backgroundColor: '#FFF7F7',
        borderRadius: 100,
        display: 'flex',
        justifyContent:'center',
    },
}

const mapStateToProps = (state, ownProps) => {
    let { activeChannel } =  state.communication;

    return {
        myself          :   state.user,
        activeChannel   :   state.communication.activeChannel,
        type            :   activeChannel.type,
        item            :   activeChannel.item,
        messages        :   activeChannel.messages,
        modal           :   state.communication.modal,
    }
}

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchSetMessages         : setMessages,
        dispatchSetActiveChannel    : setActiveChannel,
    }, dispatch)
};



@connect(mapStateToProps, mapDispatchToProps)
@Radium
class Chat extends PureComponent {

    constructor(props){
        super(props)

        this.state = {
            text                    : '',
            goScrollToBottom        : false,
            hasMoreItems            : true,
            oldScrollHeight         : null,
            oldScrollTop            : null,
        }

        this.limit  = 15;
        this.offset = 0;
        this.block = false;

        this.headerDate = {};

        this.scrollToBottom             = this.scrollToBottom.bind(this);
        this.getChannelMessages         = this.getChannelMessages.bind(this);
        this.updateFeed                 = this.updateFeed.bind(this);
        this.renderMessagesList         = this.renderMessagesList.bind(this);
        this.moveScroll                 = this.moveScroll.bind(this);
        this.renderBottom               = this.renderBottom.bind(this);
        this.renderActiveBox            = this.renderActiveBox.bind(this);
        this.renderBoxUnactive          = this.renderBoxUnactive.bind(this);
        this.renderUnacceptedBox        = this.renderUnacceptedBox.bind(this);
    }

    componentWillMount() {
        if(R.isNil(this.props.messages.length)){
            this.offset = 0;
        }
        else this.offset = this.props.messages.length;

        this.getChannelMessages(this.props.item.id);
        this.listenMessagesSuscription(this.props.type);

    }

    componentWillReceiveProps(nextProps) {

        if(!R.equals(this.props.item.id, nextProps.item.id)) {
            this.offset = 0;

            this.getChannelMessages(nextProps.item.id);
            this.listenMessagesSuscription(nextProps.type);
            this.setState({goScrollToBottom: false, hasMoreItems : true })
        }
    }

    componentDidUpdate(){
        if(!R.isEmpty(this.props.messages) && !this.state.goScrollToBottom) this.scrollToBottom();
        let listElm = this.messageList;
        if(!R.equals(listElm.scrollHeight,this.state.oldScrollHeight)) this.moveScroll();
    }

    render(){
        let {isOpenInformationSection, cubeInstance, type, openInformationSection} = this.props;
        let auxStylesMoreVertOpen;
        if(isOpenInformationSection) auxStylesMoreVertOpen = {width: 'calc(100% - 300px)'};

        let messagesByDate = getMessagesByDate(this.props.messages);
        return (
            <div
                style = {styles.container}
                className = {'right-side-communication-cube'}
            >
                <div
                    style       = { [styles.containerChat,auxStylesMoreVertOpen ] }
                    className   = { 'selectable-element' }
                >

                    <div
                        style   = {[styles.content] }
                        ref     ={ (div) => {this.messageList = div }}
                        onScroll= {(event)=> this.updateFeed(event)}

                    >
                        { R.addIndex(R.map)((subListDay, index) => this.renderMessagesList(messagesByDate[`${subListDay}`], index), R.keys(messagesByDate))}
                    </div>

                    <div style = { [styles.box] }>

                        { this.renderBottom() }

                    </div>


                </div>
                { isOpenInformationSection ? <Information  openInformationSection ={openInformationSection} cubeInstance = {cubeInstance} channelType = { type }></Information> : null}




            </div>
        );
    }

    renderBottom() {
        return R.cond([
            [ R.equals('ACTIVE'),               this.renderActiveBox            ],
            [ R.equals('UNACCEPTED'),           this.renderUnacceptedBox       ],
            [ R.equals('UNACTIVE'),             this.renderBoxUnactive       ],
            [ R.T,                              x => console.log(x)             ],
        ])(this.props.activeChannel.item.status)
    }

    renderActiveBox() {
        if(this.props.activeChannel.item.left) {
            return(
                <BoxWithMessage
                    key                 = {'BoxWithMessage'}
                    text                = {'You left the group.'}
                />
            )
        }
        if(this.props.activeChannel.item.bloqued) {
            return(
                <BoxWithMessage
                    key                 = {'BoxWithMessage'}
                    text                = {`You\'ve blocked this user` }
                />
            )
        }
        else {
            return(
                <Box
                    key                 = {'boxMessage'}
                    type                = { this.props.type }
                    myself              = { this.props.myself }
                    scrollToBottom      = { () => this.setState({goScrollToBottom: false})}
                    moveChannelToTop    = { () => this.props.moveChannelToTop(this.props.item.id) }
                />
            )
        }

    }

    renderUnacceptedBox() {
        return(
            <BoxUnaccepted
                key                 = {'boxUnaccepted'}
            />
        )
    }

    renderBoxUnactive() {
        return(
            <Box
                key                 = {'boxMessage'}
                type                = { this.props.type }
                myself              = { this.props.myself }
                scrollToBottom      = { () => this.setState({goScrollToBottom: false})}
                moveChannelToTop    = { () => this.props.moveChannelToTop(this.props.item.id) }
            />
        )
    }


    renderMessagesList(messageList, index){

        let isOverSevenDays = moment(messageList.meta.day).isBefore(moment().subtract(7, 'days'))

        return(
            <div key     = { index }>
                <div style= {{justifyContent: 'center',height: 22, width: '100%', display: 'flex'}}>
                    <span
                        key     = { `${index} section day` }
                        ref     = { self => { this.headerDate[index] = self }}
                        style   = { styles.infoDayText }
                    >
                        {isOverSevenDays ? messageList.meta.day : this.calcNameOfDay(messageList.meta.day)}
                    </span>
                </div>
                {R.map((msg) => this.renderMessages(msg, index), messageList.messages)}
            </div>
        )
    }

    calcNameOfDay(date){
        let numberDayOfWeek = moment(date).day();
        return moment.weekdays()[numberDayOfWeek]
    }

    renderMessages(message, index) {
        return(
            <Message
                key         = { `${index} section - ${message.id} ${message.insertedAt}` }
                item        = { message.item }
                type        = { message.type }
                user        = { message.user }
                insertedAt  = { message.insertedAt }
            />
        )
    }

    scrollToBottom() {
        const scrollHeight = this.messageList.scrollHeight;
        const height = this.messageList.clientHeight;
        const maxScrollTop = scrollHeight - height;
        this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
        this.setState({goScrollToBottom: true});
    }


    listenMessagesSuscription(type) {
        let room = getCurrentRoom();
        room.onNewMessage(message => {
            this.props.dispatchSetMessages([message], 'DOWN');
        })
    }


    getChannelMessages(channelId) {
        let offset =  this.offset;
        let limit  =  this.limit;

        if(this.block) return null;
        this.block = true;

        api.get(`user/channels/${channelId}/messages`,{limit, offset})
            .then( (data) => {
                if (data.length === 0 ) {
                    this.setState({hasMoreItems: false})

                }
                else{
                    let reversedMessages = R.reverse(data);
                    this.props.dispatchSetMessages(reversedMessages, 'UP');
                    this.offset = this.offset + limit;
                }
                this.block = false;
            })
    }

    updateFeed() {
        let listElm = this.messageList;
        this.setState({oldScrollHeight: listElm.scrollHeight, oldScrollTop: listElm.scrollTop});
        if ( listElm.scrollHeight > listElm.clientHeight  && listElm.scrollTop <= 20 && this.state.hasMoreItems) {

            this.getChannelMessages(this.props.item.id);
        }
    }

    moveScroll(){
        let listElm = this.messageList;
        let topPosition = (listElm.scrollHeight - this.state.oldScrollHeight) + this.state.oldScrollTop;
        this.messageList.scrollTop = topPosition;
    }
}

Chat.defaultProps = {
    openInformationSection       : () => console.log('not exist openInformationSection'),
    isOpenInformationSection     : false,
    cubeInstance                 : {},
    room                         : {},
    moveChannelToTop             : () => console.log('not exist moveChannelToTop'),
    history                      : {},
};

Chat.propTypes = {
    openInformationSection       : PropTypes.func,
    isOpenInformationSection     : PropTypes.bool,
    cubeInstance                 : PropTypes.object,
    room                         : PropTypes.object,
    moveChannelToTop             : PropTypes.func,
    history                      : PropTypes.object,
};

export default Chat;
