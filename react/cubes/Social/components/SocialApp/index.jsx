'use strict';

let ReactDOM                        = require('react-dom');

//import R                          from 'ramda';
import React, { PureComponent }     from 'react';
import Dimensions                   from 'react';
import _                            from 'lodash';
import autobind                     from 'autobind-decorator';

//import Bluebird from 'bluebird';
import {COLORS}                       from '../../../../globals/colors.js';
import ButtonSocial                 from '../../../../components/ButtonSocial';
import ActionsInformationAreaCard   from '../ActionsInformationAreaCard';

import { MdPersonAdd, MdRssFeed, MdBookmark
} from 'react-icons/lib/md';


const WINDOW_WIDTH = window.innerWidth;
const avatarSize = WINDOW_WIDTH/4;

let styles = {
    container: {
        flex:1,
        height: 700,
    },
    header: {
        flex: 1,
        height: 450,
        width: '100%',
    },
    avatarname: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        transform: 'translate(10px,10px)',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 60/2,
        marginHorizontal: 10,
    },
    title: {
        fontSize: '23px',
    },
    bodyarea: {
        display: 'flex',
        flexDirection: 'column',
        flex: 2,
        justifyContent: 'flex-start',
        marginTop: '0px',
        marginLeft: '15px',
        height: '250px',
        position: 'absolute'
    },
    name: {
        transform: 'translate(10px, 0px)',
        cursor: 'pointer',
        fontSize: '15px',
        color: '#ffffff',
    },
    connectbuttons: {
        cursor: 'pointer',
        fontSize: '16px',
    },
    description: {
        flex: 1,
        alignSelf: 'flex-start',
        marginTop: '-5px'
    },
    cardActivityPosition: {
        alignSelf: 'flex-end',
        transform: 'translate(0px,-15px)',
    },
    buttonposition: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            position: 'relative',
            marginTop: '0px',
            marginRight: '15px',
    },
    buttonInformation: {
            height: '20',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            position: 'relative',
            marginTop: '0px',
            marginRight: '40px',
    },
    boards: {
        display: 'hidden',
    },

}

//@autobind
class SocialApp extends PureComponent {

    constructor(props){
      super(props);
    }



   render() {
      //  let RenderType = APP_MAPPING[this.props.item.type]

      // return (
      //     <div>
      //         <RenderType
      //             item={this.props.item}
      //         />
      //     </div>
      // );
   }
}

export default SocialApp;
