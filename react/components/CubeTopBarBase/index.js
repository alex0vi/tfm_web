import React, {PureComponent}       from 'react';

import R                            from 'ramda';
import Radium                       from 'radium';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import PropTypes                    from 'prop-types';

import {COLORS}                     from '../../globals/colors.js';

const api                           =   require('../../../../app/js/devel/modules-system/api-calls').apiv2;

const styles = {
    container: {
        display:        'flex',
        backgroundColor:'white',
        alignItems:     'center',
        cursor:         'pointer',
        borderBottom:   '1px solid #e0e0e0',
        height: '40px'
    },
    leftTopBarIcons:{
        display:        'flex',
        marginLeft:     15,
    },
    rightTopBarIcons:{
        display:        'flex',
        alignItems:     'center',
        right:          0,
        position:       'absolute',
    },
    iconWrapper:{
        marginLeft:        5,
        position:         'relative',
        width:            15,
        height:           15,
        borderRadius:     '50%',
        backgroundColor:  '#E0E0E0',
        cursor:           'pointer',
        color:            'black',
        display:          'flex',
        justifyContent:   'center',
        alignItems:       'center',
    },
    icon:{
        position:       'relative',
        fontSize:       14,
    },
    glyphiconIcon:{
        marginRight: 15,
        color: '#373737'
    },
}



@Radium
class CubeTopBarBase extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            hoverPin:   false,
            isPined:    false,
            ready:      false,
        }

        this.renderLeftTopBarIcons = this.renderLeftTopBarIcons.bind(this);
        this.renderRightTopBarIcons =this.renderRightTopBarIcons.bind(this);
    }

    componentWillMount(){
        let {cubeInstance} = this.props;
        this.setState({isPined: cubeInstance.getIsPined()});
    }

    render() {
        let {cubeInstance} = this.props;
        return(
            <div
                style = {styles.container}
                onDoubleClick = {() => cubeInstance.maximize()}
            >
                {this.renderLeftTopBarIcons()}

                {
                    React.Children.map(this.props.children, child => React.cloneElement(child, this.props))
                }

                {this.renderRightTopBarIcons()}

            </div>
        )
    }

    renderLeftTopBarIcons(){
        let {cubeInstance} = this.props;

        return(
            <div style = {styles.leftTopBarIcons}>
                <div
                    style={styles.iconWrapper}
                    onClick= { () => { this.props.closeCallback()  }}
                >
                    <i className="material-icons" style={styles.icon}>close</i>
                </div>
                <div
                    style={styles.iconWrapper}
                    onClick= { () => {cubeInstance.minimize()} }
                >
                    <i className="material-icons" style={styles.icon}>remove</i>
                </div>
                <div
                    style={styles.iconWrapper}
                    onClick= { () => {cubeInstance.maximize()} }
                >
                    <i className="material-icons" style={styles.icon}>crop_square</i>
                </div>
            </div>
        )
    }



    renderRightTopBarIcons(){
        let {cubeInstance} = this.props;
        let auxPinstyle;

        if(this.state.hoverPin || this.state.isPined){
            auxPinstyle = { color: COLORS.primary }
        }

        return(
            <div style= {styles.rightTopBarIcons}>
                <span
                    style={[styles.glyphiconIcon, auxPinstyle]}
                    className="glyphicon glyphicon-pushpin"
                    onMouseEnter = { () => this.handlerSetState('hoverPin', true)}
                    onMouseLeave = { () => this.handlerSetState('hoverPin', false)}
                    onClick      = { () => this.pinCube()}
                ></span>
            </div>
        )
    }


    pinCube(){
        let {cubeInstance} = this.props;
        this.setState({isPined: !cubeInstance.getIsPined()});
        cubeInstance.pin();
    }


    handlerSetState(state, value){
        this.setState({[state]: value})
    }
}

CubeTopBarBase.defaultProps =  {
    cubeInstance:   null,
    children:       null,
    closeCallback:  () => {},
};

CubeTopBarBase.propTypes = {
    cubeInstance:   PropTypes.object,
    closeCallback:  PropTypes.func,
    children:       PropTypes.element,
};

export default CubeTopBarBase;
