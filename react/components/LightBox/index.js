'use strict';

let ReactDOM = require('react-dom');

import R                        from 'ramda';
import React, {PureComponent}   from 'react';
import PropTypes                from 'prop-types';

import Radium                   from 'radium';
import autobind                 from 'autobind-decorator';

@Radium
class LightBox extends PureComponent {

    constructor(props) {
        super(props);

        this.clickOutsideChildren   = this.clickOutsideChildren.bind(this);
    }


    render() {
        let { children, title, closeLightBoxWithComponent } = this.props;

        // if(!isVisible) return null;

        return (
            <div
                className={`light-box`}
                onClick = {(event) => this.clickOutsideChildren(event)}
            >

                <div className = {'light-box-content'}>
                    <div className = {'title-wrapper'}>
                        <div className = {'buttonClose' } onClick = { () => closeLightBoxWithComponent() } >
                            <i className="material-icons">close</i>
                        </div>
                        <span>{title}</span>
                    </div>
                    { children }
                </div>

            </div>
        );
    }

    clickOutsideChildren(event){
        if(R.equals(event.target.className, 'light-box')){
            this.props.closeLightBoxWithComponent();
        }
    }
}


LightBox.defaultProps =  {
    // isVisible                       :  false,
    closeLightBoxWithComponent      :  () => {console.log('closeLightBoxWithComponent not exist')},
    title                           :  '',
    children                        :  {},
};

LightBox.propTypes = {
    // isVisible                       :   PropTypes.bool,
    closeLightBoxWithComponent      :   PropTypes.func,
    title                           :   PropTypes.string,
    children                        :   PropTypes.object,
};

export default LightBox;
