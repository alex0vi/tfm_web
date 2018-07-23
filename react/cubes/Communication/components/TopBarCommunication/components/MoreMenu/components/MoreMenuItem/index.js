import React, {PureComponent}       from 'react';

import R                            from 'ramda';
import Radium                       from 'radium';
import PropTypes                    from 'prop-types';




@Radium
class MoreMenuItem extends PureComponent {

    constructor(props) {
        super(props);
    }


    render(){
        let {title, titleClasses, disableClick} = this.props;

        if(disableClick) return null;

        return(
            <div
                className   = { 'menu-item' }
                onClick     = { () => this.onClickItem() }
            >
                <span className={`menu-title ${titleClasses}`}>{title}</span>
            </div>
        )
    }

    onClickItem() {
        this.props.onClick();
        this.props.onChangeStateMoreMenu()
    }
}

MoreMenuItem.defaultProps = {
    title:                      'default title',
    titleClasses:               '',
    onClick:                    () => {},
    onChangeStateMoreMenu:      () => {},
    disableClick:               false,
};

MoreMenuItem.propTypes = {
    title:                      PropTypes.string,
    titleClasses:               PropTypes.string,
    onClick:                    PropTypes.func,
    onChangeStateMoreMenu:      PropTypes.func,
    disableClick:               PropTypes.bool,
};

export default MoreMenuItem;
