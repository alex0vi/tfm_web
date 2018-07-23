'use strict'

import React, { Component } from 'react';

import ReactFlagsSelect from 'react-flags-select';

import 'react-flags-select/scss/react-flags-select.scss';

import Ru from 'rutils';

import autobind from 'autobind-decorator';

const language = (navigator.languages && navigator.languages[0]) || navigator.language ||  navigator.userLanguage;

let languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

if(languageWithoutRegionCode === 'en'){
    languageWithoutRegionCode = 'GB';
}

const initialLanguage = Ru.toUpper(languageWithoutRegionCode) || 'GB';

@autobind
class Translations extends Component {

    constructor(props) {
        super(props);
    }

    onSelectFlag(countryCode) {
        let switchLanguage = this.props.switchLanguage;
        switchLanguage(Ru.toLower(countryCode));
    }

    // customLabels={ {"ES": "es","GB": "en","FR": "fr","PT": "pt", "PL": "pl"} }
    // countries={ ["ES", "GB", "FR", "PT", "PL"] }

    render(){
        return(
            <ReactFlagsSelect
                className="translations"
                defaultCountry= "GB"
                searchable={ false }
                onSelect={ this.onSelectFlag }
                customLabels={ {"GB": "en"} }
                countries={ ["GB"] }
                placeholder="Select Language"
            />
        )
    }
}

export default Translations;
