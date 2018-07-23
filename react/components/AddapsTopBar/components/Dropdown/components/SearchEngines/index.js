'use strict'

import React, {PureComponent}       from 'react';
import R                            from 'ramda';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import Radium                       from 'radium';
import autobind                     from 'autobind-decorator';
import PropTypes                    from 'prop-types';

import SearchEngine                 from './components/SearchEngine';

const {AVALIABLE_SEARCH_ENGINES}    = require('../../../../../../../js/devel/constants/topBarDropDownButtons/topBarDropDownButtons')



@Radium
class SearchEngines extends PureComponent {

    constructor(props) {
        super(props);

        this.renderSearchEngine = this.renderSearchEngine.bind(this);
    }


    render() {
        return (
            <div className  = { 'searchEngines-list' }>
                { R.map( this.renderSearchEngine, R.values(AVALIABLE_SEARCH_ENGINES)) }
            </div>
        )
    }

    renderSearchEngine(searchEngine){
        return(
            <SearchEngine
                key         = { searchEngine.nameId }
                base        = { searchEngine.base   }
                nameId      = { searchEngine.nameId }
                search      = { searchEngine.search }
                src         = { searchEngine.src    }
                text        = { searchEngine.text   }
                onClose     = { this.props.onClose  }
            />
        )
    }
};



SearchEngines.defaultProps =  {
    onClose:    () => {},
};

SearchEngines.propTypes = {
    onClose:    PropTypes.func,
};



export default SearchEngines;
