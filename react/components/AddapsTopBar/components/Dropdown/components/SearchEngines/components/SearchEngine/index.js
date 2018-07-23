'use strict'

import React, {PureComponent}       from 'react';
import R                            from 'ramda';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import Radium                       from 'radium';
import autobind                     from 'autobind-decorator';
import PropTypes                    from 'prop-types';

import {setSearchEngine}            from '../../../../../../../../../store/actionsCreators/user/setSearchEngine';

const USER_SETTINGS     =   require('../../../../../../../../../js/devel/modules-system/module-user-settings');
const api               =   require('../../../../../../../../../js/devel/modules-system/api-calls').apiv2;





const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchSetSearchEngine:    setSearchEngine,
    }, dispatch)
};


@connect(null, mapDispatchToProps)
@Radium
class SearchEngine extends PureComponent {

    constructor(props) {
        super(props);
    }


    render() {
        let {base, nameId, search, src, text } = this.props;

        return(
            <div
                className   = { 'searchEngine-circle' }
                key         = { `searchEngine-${nameId}`}
                onClick     = { () => this.onClickSearchEngine(nameId) }
                title       = { text }
            >
                <img
                    src         = { src }
                    className   = { 'searchEngine-favicon' }
                />
            </div>
        )
    }


    onClickSearchEngine(nameId) {
        let body = {
            searchEngine: nameId
        }

        api.patch('user', body)
            .then( data => {
                this.props.dispatchSetSearchEngine(nameId);
                this.props.onClose();
            })
    }


}



SearchEngine.defaultProps =  {
    base:       '',
    nameId:     '',
    search:     '',
    src:        '',
    text:       '',
};

SearchEngine.propTypes = {
    base:       PropTypes.string,
    nameId:     PropTypes.string,
    search:     PropTypes.string,
    src:        PropTypes.string,
    text:       PropTypes.string,
};


export default SearchEngine;
