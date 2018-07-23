import React, {PureComponent}       from 'react';

import R                            from 'ramda';
import Radium                       from 'radium';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import PropTypes                    from 'prop-types';

import {COLORS}                     from '../../../../globals/colors.js';
import CONSTANTS                    from '../../../../globals/constants.js';

import ContactWithRouter            from './components/ContactWithRouter/';


import {openNewChannel}             from '../../utils/';


const styles = {
    separatorLetter:{
        display: 'flex',
        position: 'relative',
        margin: 10, alignItems: 'center',
        overflow:'hidden', cursor:'pointer',
        borderBottom: '1px solid #F8F8F8',
        borderTop:' 1px solid #F8F8F8',
        padding: '5px 0px 5px 0px',
        color: COLORS.primary,
    }
}



@connect(null, null)
@Radium
class AlphabeticalList extends PureComponent {

    constructor(props) {
        super(props);

        this.renderHeader           = this.renderHeader.bind(this);
        this.renderSection          = this.renderSection.bind(this);
    }


    render() {
        let { list } = this.props;

        return(
            <div>
                 { R.addIndex(R.map)((item, index) =>  this.renderSection(item, index), list)}
            </div>
        )
    }

    renderSection(list,index) {
        return(
            <div
                key = {`section-${index}`}
            >
                { this.renderHeader(list.letter) }
                { R.map((item) => this.renderContact(item), list.users)}
            </div>
        )
    }
    // {R.map( (item) => this.renderSection(item), list )}
    // { R.addIndex(R.map)((subListDay, index) => this.renderMessagesList(messagesByDate[`${subListDay}`], index), R.keys(messagesByDate))}

    renderHeader(letter) {
        return(
            <div
                 key    = { letter }
                 style  = { styles.separatorLetter}
             >
                <div>{letter}</div>
            </div>
        )
    }

    renderContact(item) {
        let {listType, currentRoomId, onClickUserOnNewGroup, history } = this.props;

        return(
            <ContactWithRouter
                key                     = { item.id }
                item                    = { item }
                listType                = { listType }
                openNewChannel          = { () => openNewChannel(item, currentRoomId, history)}
                onClickUserOnNewGroup   = { () => onClickUserOnNewGroup(item) }
                history                 = { history }
            />
        )
    }

}

AlphabeticalList.defaultProps = {
    list            : [],
    listType        : null,
    currentRoomId   : null,
    history         : {},
};

AlphabeticalList.propTypes = {
    list            : PropTypes.array,
    listType        : PropTypes.string,
    currentRoomId   : PropTypes.string,
    history         : PropTypes.object,
};

export default AlphabeticalList;
