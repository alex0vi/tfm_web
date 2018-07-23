import React, { Component }     from 'react';
import PropTypes                from 'prop-types';



class QuickLink extends Component {

    render() {
        const { quickLink, index} = this.props;

        let domain = (new URL(quickLink.url)).hostname;

        return (
            <div
                className   = { 'quickLink-circle' }
                key         = { `quickLink-${index}`}
                title       = { domain }
            >
                <div className={'quickLink-circle-div-img'} onClick = { () => this.props.onClickQuickLink() }>
                    <img
                        src         = { quickLink.urlImg }
                        className   = { 'quickLink-favicon' }
                    />
                </div>

                <div className="rb-close-button" onClick={ () => this.props.deleteQuickLink() }>
                    <div className="material-icons">close</div>
                </div>

            </div>
        );
    }
}

QuickLink.defaultProps =  {
    quickLink:          {},
    index:              0,
};

QuickLink.propTypes = {
    quickLink:          PropTypes.object,
    index:              PropTypes.number,
};


export default QuickLink;
