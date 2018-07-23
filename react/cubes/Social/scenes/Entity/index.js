import React, {PureComponent}       from 'react';

import R                            from 'ramda';
import Radium                       from 'radium';
import autobind                     from 'autobind-decorator';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';

import TextField                    from 'material-ui/TextField';
import {MdTagFaces, MdSend}         from 'react-icons/lib/md';
import {FaComment, FaMailForward}   from 'react-icons/lib/fa';

import Loading                      from '../../../../components/Loading'

import SocialUser                   from '../../components/SocialUser'
import SocialBoard                  from '../../components/SocialBoard'
import SocialApp                    from '../../components/SocialApp'
import SocialWebLink                from '../../components/SocialWebLink'
import CardType                     from '../../components/CardType'
import CardFooter                   from '../../components/CardFooter'

import {setActiveTab}               from '../../../../../store/actionsCreators/social/setActiveTab';

import {COLORS}                       from '../../../../globals/colors.js';
import eventEmitter                 from '../../../../services/eventEmitterService';

/* styles */
import {commentsStyle}              from '../../../../components/Social/styles/comments.js'
import {footerStyles}               from '../../../../components/Social/styles/footerCard.js'

const api                           =   require('../../../../../../app/js/devel/modules-system/api-calls').apiv2;

const styles = {
    container: {
        display:            'flex',
        flex:               1,
        overflow:           'scroll',
        backgroundColor:    '#ececec',
        justifyContent:     'center'
    },
    cardWrapper: {
        width:              '550px',
        flexDirection:      'column',
        marginTop:          15,
        marginBottom:       15,
    }
}

const CARD_MAPPING = {
    'USER': SocialUser,
    'BOARD': SocialBoard,
    'WEBLINK': SocialWebLink,
    'APP': SocialApp
};

const mapStateToProps = (state, ownProps) => {
    return {
        cubesStyles :     state.reactCubes.cubesStyles,
    }
}

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchSetActiveTab: setActiveTab,
    }, dispatch)

};


@connect(mapStateToProps, mapDispatchToProps)
// @autobind
@Radium
class Entity extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            item: null,
            type: null,
            ready: false,
            isHoverCubeContent: false,
        }
    }

    componentWillMount() {
        let {item, type, apiType} = this.props.location.state;
        let {dispatchSetActiveTab}  = this.props;

        dispatchSetActiveTab('')

        api.get(`${apiType}/${item.id}`)
            .then(data => {
                this.setState({
                    ready: true,
                    item: data,
                    type: type
                })
            })
    }

    render() {
        if(!this.state.ready){
          return null
        }

        let { item, type } = this.state;

        let styleContainerString = this.props.cubesStyles[`${this.props.cubeInstance.getKey()}`];
        let styleCubeBool = styleContainerString === 'minimizedStyle' ? true : false;

        let myContainer = {
            top: styleCubeBool ? 100 : 60
        }

        let RenderType = CARD_MAPPING[type];


        if(this.state.isHoverCubeContent) this.props.cubeInstance._$dom.main.closest('.desktop-container').css('overflow','hidden');
        else this.props.cubeInstance._$dom.main.closest('.desktop-container').css('overflow','auto');

        return (
            <div
                className = {'element-with-interaction'}
                style={[ styles.container, myContainer ]}
                onMouseEnter =  {() => this.handlerSetState('isHoverCubeContent', true)}
                onMouseLeave = {() => this.handlerSetState('isHoverCubeContent', false)}
            >
                <div style={[ styles.cardWrapper ]}>
                    <CardType type={type}/>
                    <RenderType
                        key         =  {`card-${type}-${item.id}`}
                        type        = {type}
                        item        = {item}
                        history     = {this.props.history}
                    />
                    <CardFooter
                        key         =  {`cardFooter-${type}-${item.id}`}
                        type        = {type}
                        item        = {item}
                        cubeInstance= {this.props.cubeInstance}
                        isEntityPage= {true}
                        typeStyle   = {'whiteStyle'}
                    />
                </div>
            </div>
        );
    }

    handlerSetState(type, value){
        this.setState({[type]: value});
    }




}

export default Entity;
