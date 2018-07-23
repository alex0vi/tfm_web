'use strict';

let ReactDOM                        = require('react-dom');

//import R from 'ramda';
import R                            from 'ramda';
import _                            from 'lodash';
import Dimensions                   from 'react';
import Radium                       from 'radium';
import React, { PureComponent }     from 'react';

import {COLORS}                       from '../../../../globals/colors.js';
import eventEmitter                 from '../../../../services/eventEmitterService';
import {faviconURL}                 from '../../../../services/faviconService.js';

import ButtonSocial                 from '../../../../components/ButtonSocial';
import ActionsInformationAreaCard   from '../ActionsInformationAreaCard';

import { MdPersonAdd, MdRssFeed, MdBookmark
} from 'react-icons/lib/md';



let styles = {
    container: {
        flex:1,
        // height: 700,
        position: 'relative',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    header: {
        flex: 1,
        width: '100%',
        backgroundSize: 'cover',
    },
    title: {
        fontSize: 18,
        color: '#454545',
        cursor: 'pointer',
    },
    name: {
        transform: 'translate(10px, 0px)',
        cursor: 'pointer',
        fontSize: '15px',
        color: '#ffffff',
    },
    description: {
        flex: 1,
        alignSelf: 'flex-start',
        marginTop: '-5px'
    },

    coverContainer: {
      flex: 2.3,
    },
    informationArea: {
      flex: 0.8,
      marginHorizontal: 15,
      marginTop: 10,
    },
    descriptionSection: {
      flex: 2,
      margin: '5px 10px 15px 5px',
      fontWeight: 900,
    },
    nameSection: {
        display: 'flex',
        margin: '0 10px',
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
    },
    bookmark: {
        display: 'flex',
        color: COLORS.secondary,
        fontSize: '20',
        cursor: 'pointer',
    },
    faviconWrapper: {
        display: 'flex',
      position: 'absolute',
    //   zIndex: 3,

      alignItems: 'center',
      justifyContent: 'space-between',
      marginLeft: 5,
      marginTop: 5,
      flexDirection: 'row',
      flex: 3,
      overflow: 'hidden',
      width: '98%',
    },
    faviconImg: {
      width: 20,
      height: 20,
      marginRight: 5
    },
    url: {
      fontSize: 14,
      color: '#FFFFFF',
      backgroundColor: 'transparent',
    },
};

@Radium
class SocialWebLink extends PureComponent {

    constructor(props){
      super(props);
    }

   render() {
        let {type, item} = this.props;

        return (
            <div style={ styles.container}>
                <div style={styles.coverContainer}>
                    <div style={styles.faviconWrapper}>

                            <img style={styles.faviconImg}
                                src={ faviconURL(item.url) }
                            />
                            <span style={styles.url}>{item.url}</span>
                    </div>

                    <img src={item.image} style={ [styles.header, {height: !this.props.fromModal ? 393 : 250} ] } />

                </div>

                <div style={styles.informationArea}>
                    <div style={styles.nameSection}>

                        <span onClick={() => this.openWebLink(type, item) } style={styles.title}>{item.title} </span>

                        {
                            !this.props.fromModal ?
                                <MdBookmark style={styles.bookmark}/>
                                :
                                null
                        }

                    </div>

                    {
                        !this.props.fromActivity && !this.props.fromModal ?
                        <div style={styles.descriptionSection}>
                          <span
                            style={styles.description}
                            >
                              {item.description}
                          </span>
                      </div>
                      :
                      null
                    }

                </div>
            </div>

        );
   }


    openWebLink(type, item) {
        let content = {
            type: type,
            item: item
        }
        eventEmitter.emit('PRESS_CONTENT', content);
    }
}

export default SocialWebLink;
