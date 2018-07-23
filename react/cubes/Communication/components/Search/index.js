import React, {PureComponent}       from 'react';

import R                            from 'ramda';
import Radium                       from 'radium';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import PropTypes                    from 'prop-types';

import {COLORS}                     from '../../../../globals/colors.js';
import CONSTANTS                    from '../../../../globals/constants.js';

const styles = {
    container: {
        display: 'flex',
        height: 40,
        position: 'relative',
        width: '100%',
    },
    wrapper: {
        display: 'flex',
        height: 30,
        margin: 5,
        position: 'relative',
        borderRadius: 4,
        // backgroundColor: '#F8F8F8',
        width: '100%',
        alignItems:'center'
    },
    input: {
        border: 'none',
        backgroundColor: 'transparent',
        width: '100%',
        fontSize: 14,
        color: '#757575',
    },
    icon: {
        marginRight:5,
        marginLeft:10,
        color: '#757575',
        fontSize: 15,
    }
}



@connect(null, null)
@Radium
class Search extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            hoverPin: false,
            isPined: false,
        }


        // this.userActiveLabel = this.userActiveLabel.bind(this);
    }

    component

    render() {
        let {handleChange, text, onFocus, placeholder} = this.props;
        return(
            <div
                style={ styles.container }
                className="socialSearchBar"
            >
                    <div style= {styles.wrapper}>

                        <i style={styles.icon} className="material-icons">{CONSTANTS.ICONS.SEARCH}</i>

                        <input
                            ref                 = {(input) => { this.input = input; }}
                            style               = { styles.input }
                            type                = { 'text' }
                            name                = { 'name' }
                            placeholder         = { placeholder }
                            onChange            = { handleChange }
                            value               = { text }
                            onFocus             = { onFocus }
                        />
                    </div>
            </div>
        )
    }
}


Search.propTypes = {
    onFocus:            PropTypes.func,
    handleChange:       PropTypes.func,
    text:               PropTypes.string,
}


export default Search;
