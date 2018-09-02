'use strict'

import Ru from 'rutils'

import React, { PureComponent } from 'react'

import { logout } from '../../actionCreators/auth'

import { bindActionCreators } from 'redux'

import { withRouter } from 'react-router-dom';

import autobind from 'autobind-decorator'

import { connect } from 'react-redux'

import B from 'bluebird'

import { socket } from '../../services'

import { store } from '../../store.js'



const mapDispatchToProps = ( dispatch, ownProps ) => {
  let actions = {
    logout
  }

  return {
    actions: bindActionCreators( actions, dispatch )
  }
}


const mapStateToProps = ( state, ownProps ) => {

    return {
      profile : state.user.profile,
      token : state.user.token,
    }
}


@withRouter
@connect(mapStateToProps, mapDispatchToProps)
@autobind
class Whiteboard extends PureComponent {

    constructor(props) {
        super(props)

    }

    componentDidMount() {

        this.initContext()

        this.canvas = this.refs.canvas
        this.context = this.canvas.getContext("2d")


        window.addEventListener('resize', this.onResize, false);
        this.onResize()

        //MOBILE
        // this.canvas.addEventListener('touchstart', this.onMouseDown, false);
        // this.canvas.addEventListener('touchend', this.onMouseUp, false);
        // this.canvas.addEventListener('touchend', this.onMouseUp, false);
        // this.canvas.addEventListener('touchmove', this.throttle(this.onMouseMove, 10), false);


        this.canvas.addEventListener('mousedown', this.onMouseDown, false);
        this.canvas.addEventListener('mouseup', this.onMouseUp, false);
        this.canvas.addEventListener('mouseout', this.onMouseUp, false);
        this.canvas.addEventListener('mousemove', this.throttle(this.onMouseMove, 10), false);
        socket.getNsWebRTC().onDrawing( ( data ) => {
            if(data.clear) {
                this.clearWhiteboard(false)
            }

            this.onDrawingEvent( data )
        })
    }

    componentWillMount() {

    }

    initContext() {
        this.color = "black"
        this.drawing = false

        this.current = {
            color: 'black',
            lineWidth: 2
        }

        this.context = ''
        this.canvas = ''
    }


    clearWhiteboard( isClient ) {

        if ( isClient ) {
            socket.getNsWebRTC().emitDrawing({ clear: true })
        }

        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height); // Clears the canvas
    }

    changeColor( color ) {
        this.current.color = color; // Clears the canvas
    }


    drawLine( x0, y0, x1, y1, color, emit ) {
        this.context.beginPath();
        this.context.moveTo(x0, y0);
        this.context.lineTo(x1, y1);
        this.context.strokeStyle = color;
        this.context.lineWidth = this.current.lineWidth;
        this.context.stroke();
        this.context.closePath();

        if (!emit) { return; }
        let w = this.canvas.width;
        let h = this.canvas.height;

        socket.getNsWebRTC().emitDrawing({
            x0: x0 / w,
            y0: y0 / h,
            x1: x1 / w,
            y1: y1 / h,
            color: color
        })
    }

    onMouseDown(e){
        this.drawing = true;
        this.current.x = e.clientX;
        this.current.y = e.clientY;
      }

    onMouseUp(e){
        if (!this.drawing) { return }
        this.drawing = false;
        this.drawLine(
                this.current.x,
                this.current.y,
                e.clientX,
                e.clientY,
                this.current.color,
                true
            )
    }

    onMouseMove(e){
        if (!this.drawing) { return; }
        this.drawLine(
            this.current.x,
            this.current.y,
            e.clientX,
            e.clientY,
            this.current.color,
            true )
        this.current.x = e.clientX;
        this.current.y = e.clientY;
    }

    throttle(callback, delay) {
      let previousCall = new Date().getTime();
      return function() {
        let time = new Date().getTime();

        if ((time - previousCall) >= delay) {
          previousCall = time;
          callback.apply(null, arguments);
        }
      };
    }

    onDrawingEvent( data ) {
        let w = this.canvas.width;
        let h = this.canvas.height;
        this.drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color);
    }

    onResize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    render(){
        return(
            <section id="whiteboard" className="whiteboard-section section" >
                <div className="container">
                <div className="btn-contain">
                    <button className="btn" onClick={ () => this.clearWhiteboard(true) }><i className="fa fa-trash"></i></button>
                    <div className="btn-colors">
                        <button className="btn-c-black" onClick={ () => this.changeColor( 'black' ) }></button>
                        <button className="btn-c-yellow"   onClick={ () => this.changeColor( 'yellow' ) }></button>
                        <button className="btn-c-blue"  onClick={ () => this.changeColor( 'blue' ) }></button>
                        <button className="btn-c-red"   onClick={ () => this.changeColor( 'red' ) }></button>
                        <button className="btn-c-white" onClick={ () => this.changeColor( 'white' ) }></button>
                    </div>

                </div>
                    <div className="row">
                        <canvas ref="canvas" className="whiteboard" />
                    </div>
                </div>
            </section>
        )
    }
}

export default Whiteboard
