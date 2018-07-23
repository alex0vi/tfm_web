'use strict'

import React, {PureComponent}       from 'react';
import R                            from 'ramda';
import _                            from 'lodash';
import {connect}                    from 'react-redux';
import PropTypes                    from 'prop-types';
import {bindActionCreators}         from 'redux';
import Radium                       from 'radium';

import Slide                        from '../../../../../../../../ComponentsWithEffects/Slide';

const KEYBOARD          =   require('../../../../../../../../../js/devel/constants/keyboardKeys/constants');

const api               =   require('../../../../../../../../../js/devel/modules-system/api-calls').apiv2;




@Radium
class NewQuickLink extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            image:  null,
            url:    '',
        }

        this.enterInputEvent                = this.enterInputEvent.bind(this);
        this.saveNewQuicklink               = this.saveNewQuicklink.bind(this);
        this.appendNewImgFromUrl            = this.appendNewImgFromUrl.bind(this);
    }


    componentWillMount() {
        this.appendNewImgFromUrlDebounced = _.debounce( function(url) {this.appendNewImgFromUrl(url)}, 400);
    }


    render() {
        return (
            <Slide
                in          = {this.props.visible}
                duration    = {500}
                classNames  = 'slideDownUp'
                key         = 'new-quickLink-transition'
            >
                <div className   = { 'new-quickLink-container' }>
                    <div className = { 'new-quickLink-img'}>
                        {
                            R.isNil(this.state.image) ?
                                <i className = { `icon ion-image` } />
                            :
                                <img src={this.state.image}/>
                        }
                    </div>

                    <input
                        className   =   { 'new-quickLink-input' }
                        placeholder =   { 'Add new url' }
                        value       =   { this.state.url }
                        onChange    =   { (e) => this.onChangeUrl(e.target.value) }
                        onKeyDown   =   { (e) => this.enterInputEvent(e) }
                    />

                    <div
                        className   = { 'new-quickLink-save'}
                        onClick     = { () => this.saveNewQuicklink() }
                    >
                        {'Save'}
                    </div>

                </div>
            </Slide>
        )
    }


    enterInputEvent(event) {
        if (event.keyCode === KEYBOARD.KEY_ENTER) {
            this.saveNewQuicklink()
        }
    };

    onChangeUrl(url) {
        this.setState({url: url});
        this.appendNewImgFromUrlDebounced(url)
    }

    appendNewImgFromUrl(url) {


        if(R.isEmpty(url)) {
            this.setState({image:  null})
        }
        else {
            api.get('favicon', {url})
                .then( imgUrl => {
                    this.setState({image:  imgUrl})
                })
        }
    }

    saveNewQuicklink() {

        api.post('user/quickLinks', {url: this.state.url} )
            .then( data => {
                this.props.addNewQuickLink(data);
                this.setState({
                    url:  '',
                    image: null,
                })
            })
    }

}

NewQuickLink.defaultProps =  {
    visible:            false,
    addNewQuickLink:    () => {},
};

NewQuickLink.propTypes = {
    visible:            PropTypes.bool,
    addNewQuickLink:    PropTypes.func,
};


export default NewQuickLink;
