import React, { Component }     from 'react';
import PropTypes                from 'prop-types';
import { DragSource }           from 'react-dnd';



class AddapsApp extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {text, src, index} = this.props;

        return (
            <div
                className   = { 'quickLink-circle' }
                title       = { text }
            >
                <div className={'quickLink-circle-div-img'} onClick = { () => this.props.onClickAddapsApp() }>
                    <img
                        src         = { src }
                        className   = { 'quickLink-favicon' }
                    />
                </div>


            </div>
        );
    }
}

AddapsApp.defaultProps =  {
    text:               '',
    src:                '',
    onClickAddapsApp:   () => {}
};

AddapsApp.propTypes = {
    text:               PropTypes.string,
    src:                PropTypes.string,
    onClickAddapsApp:   PropTypes.func
};

export default AddapsApp;
