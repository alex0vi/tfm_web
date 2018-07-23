import React, {PureComponent}       from 'react';

import R                            from 'ramda';
import Radium                       from 'radium';
import autobind                     from 'autobind-decorator';

import TextField                    from 'material-ui/TextField';
import {MdTagFaces, MdSend}         from 'react-icons/lib/md';
import {FaComment, FaMailForward}   from 'react-icons/lib/fa';


import SocialUser                   from '../SocialUser'
import SocialBoard                  from '../SocialBoard'
import SocialApp                    from '../SocialApp'
import SocialWebLink                from '../SocialWebLink'
import CardType                     from '../CardType'
import CardFooter                   from '../CardFooter'


import {COLORS}                       from '../../../../globals/colors.js';
import eventEmitter                 from '../../../../services/eventEmitterService';

/* styles */
import {commentsStyle}              from '../../../../components/Social/styles/comments.js'
import {footerStyles}               from '../../../../components/Social/styles/footerCard.js'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: 15,
    },
}

const CARD_MAPPING = {
    'USER': SocialUser,
    'BOARD': SocialBoard,
    'WEBLINK': SocialWebLink,
    'APP': SocialApp
};

@Radium
class Card extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        let RenderType = CARD_MAPPING[this.props.type];
        return (
            <div style={styles.container}>
                <CardType type={this.props.type}/>
                <RenderType
                    key         =  {`card-${this.props.type}-${this.props.item.id}`}
                    type        = {this.props.type}
                    item        = {this.props.item}
                    history     = {this.props.history}
                />
                <CardFooter
                    key         = {`cardFooter-${this.props.type}-${this.props.item.id}`}
                    type        = {this.props.type}
                    item        = {this.props.item}
                    cubeInstance= {this.props.cubeInstance}
                    isEntityPage= {false}
                    typeStyle   = {'whiteStyle'}
                />
            </div>
        );
    }




}

export default Card;
