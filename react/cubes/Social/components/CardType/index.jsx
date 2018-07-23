import React, { PureComponent } from 'react';
import autobind                 from 'autobind-decorator';
import Radium                   from 'radium';

import {
    MdDashboard,
    MdPerson,
    MdLink,
    MdApps
} from 'react-icons/lib/md';

// import Dimensions from 'react-dimensions';
import {COLORS}                   from '../../../../globals/colors.js';

// var iconEmotion = require('react-icons/lib/md/tag-faces');
let styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    circleContainer: {
        display: 'flex',
        backgroundColor: '#F6F6F6',
        width: 38,
        height: 38,
        borderRadius: 38 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    icon: {
        fontSize: 23,
        color: COLORS.primary,
        borderRadius: '50%',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        transform: 'rotateY(180deg)'
    },
    iconBoard: {
        fontSize: 17,
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        color: '#F6F6F6',
        backgroundColor: COLORS.primary
    },
    separator: {
        display: 'flex',
        flex: 1,
        alignSelf: "stretch",
        flexDirection: 'row',
        borderWidth: '1px',
        alignSelf: 'center',
        marginLeft: '10px',
        marginRight: '10px',
        height: 1,
        backgroundColor: ' #d2d2d2'
    }
}


const CARD_MAPPING = {
    'USER':  <MdPerson style= {styles.icon} /> ,
    'BOARD':  <MdDashboard style= {styles.iconBoard} /> ,
    'WEBLINK':  <MdLink style={styles.icon}/> ,
    'APP':  <MdApps style={styles.icon}/> ,

    // 'ACTIVITY': Activity,
    // 'SocialApp': SocialApp,
    // 'WEBLINK': SocialWebLink,
};


// @autobind
@Radium
class CardType extends PureComponent {

    constructor(props){
      super(props);
    }



   render() {
       let Rendericon = CARD_MAPPING[this.props.type];

       return (
         <div style={ styles.container}>
            <div style= {styles.separator}/>
            <div style= {styles.circleContainer}>
                { Rendericon }
            </div>
            <div style= {styles.separator}/>
         </div>

      );
   }
}

export default CardType;
