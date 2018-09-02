'use strict'

import Ru from 'rutils'

import React, { PureComponent } from 'react'

import autobind from 'autobind-decorator'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import { updateMessages } from '../../../../actionCreators/messages'

import { Grid, Row , Col } from 'react-bootstrap';

let typing = false
const mapDispatchToProps = ( dispatch, ownProps ) => {

  let actions = {
    updateMessages
  }

  return {
    actions: bindActionCreators( actions, dispatch )
  }
}

const mapStateToProps = ( state, ownProps ) => {
    return {
      messages: state.messages.messages
    }
}

@connect(mapStateToProps, mapDispatchToProps)
@autobind
class CallModal extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            message: '',
            container: '',
            whoIs: ''
        }
    }
    componentDidMount() {
        let { actions, socket } = this.props


            socket.getNsWebRTC().onReceiveMessage( data => {


            // this.setState( { messages: [ ...this.state.messages, data ] } )
            actions.updateMessages( data )
            this.state.container.scrollTop = this.state.container.scrollHeight
        })

        // socket.getNsWebRTC().onTyping( data => {
        //     console.log('data', data);
        //     typing = true;
        //     this.setState({ whoIs: data })
        // })

    }

    handleKeyPress(event) {
        let { socket, clientId } = this.props


        //this.updateTyping()
        if(event.key == 'Enter' && this.state.message.length != 0){
            let author= ''

            let specMsg = { msg: this.state.message, author: clientId }

            socket.getNsWebRTC().emitSendMessage( specMsg )

            //actions.updateMessages( specMsg )
            this.state.container.scrollTop = this.state.container.scrollHeight
            this.setState( { message: '' } )
        }
    }

    // updateTyping(){
    //     let { clientId, socket } = this.props
    //
    //
    //        socket.getNsWebRTC().emitTyping( clientId )

         // lastTypingTime = (new Date()).getTime();
         //
         // setTimeout(() => {
         //   var typingTimer = (new Date()).getTime();
         //   var timeDiff = typingTimer - lastTypingTime;
         //   if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
         //     socket.emit('stop typing');
         //     typing = false;
         //   }
         // }, TYPING_TIMER_LENGTH);

     // }




    renderMessages( spec, i ){
        let { socket, clientId } = this.props

        if( spec.author === clientId ){
            return(
                <li id="message" className="message text-r">
                    <p className="fs">
                        <span className="msg">{ spec.msg }</span>
                        <span className="ic"></span>
                    </p>
                </li>
            )
        }
        else {
            const renderAut = (noshow) => {

                return (noshow)?'':<span style={{ color: spec.color }} className="nickname">{ spec.author }</span>


            }
            return(
                <li id="message" className="message">
                    <p className="fs">
                        {
                            renderAut(spec.noShow)
                        }
                        <span className="msg">{ spec.msg }</span>
                        <span className="ic-l"></span>
                    </p>
                </li>
            )
        }
    }

    // handleKeyUp(){
    //     console.log('quii');
    //     //typing = false;
    // }
    //
    // renderTyping(){
    //
    //
    // }

    render(){
        return(
                <Col md={ 6 } sm= { 6 } className="chat-container">
                    <ul className="pages">
                        <li className="chat page">
                          <div className="chatArea">
                            <ul ref={ el => this.setState({ container: el }) } id="messages" className="messages">
                                {
                                    Ru.addIndex(Ru.map)( this.renderMessages, this.props.messages )
                                }

                            </ul>
                          </div>

                          <input
                            onChange={ event => this.setState({ message: event.target.value }) }
                            value={ this.state.message }
                            onKeyPress={  this.handleKeyPress }
                            onKeyUp= { this.handleKeyUp }
                            className="inputMessage" placeholder="Type message...
                          "/>
                        </li>
                    </ul>
                </Col>
            )
        }
    }

    export default CallModal
