import React, {PureComponent}       from 'react';

import R                            from 'ramda';
import Radium                       from 'radium';
import PropTypes                    from 'prop-types';

import Slide                        from '../../../../../../ComponentsWithEffects/Slide';
import MoreMenuItem                 from './components/MoreMenuItem';




@Radium
class MoreMenu extends PureComponent {

    constructor(props) {
        super(props);

        console.log('props', props)
        this.state = {
            isVisible: props.isVisible,
        }
    }

    componentWillMount(){

        let $cube = $(`#${this.props.cubeInstance.getDomCube()[0].getAttribute('id')}`);

        $cube.click( (event)=> {
            if(this.state.isVisible && R.isNil(event.target.closest('.more-menu')) ) {
                this.setState({isVisible: false})
                this.props.onCloseMenu();
            }
        })
    }

    componentWillReceiveProps(nextProps){
        if (this.state.isVisible !== nextProps.isVisible) {
            this.setState({isVisible: nextProps.isVisible})
        }
    }

    render(){
        return(
            <Slide
                in          = { this.state.isVisible }
                duration    = { 1000 }
                classNames  = { 'slideDownUpChat' }
                key         = { 'more-menu' }
            >
                <div className ='chat-more-vertical-menu more-menu element-with-interaction'>

                    <div className={'menu-container'}>

                        { this.props.children && this.renderActions() }

                    </div>
                </div>
            </Slide>
        )
    }


    renderActions() {
        return (
            React.Children.map(this.props.children, (child, index) => {
                if(!R.isNil(child)) {
                    return (
                        <MoreMenuItem
                            title                   = { child.props.title   }
                            onClick                 = { child.props.onClick }
                            titleClasses            = { child.props.titleClasses }
                            onChangeStateMoreMenu   = { this.props.onChangeStateMoreMenu }
                            disableClick            = { child.props.disableClick }
                        />
                    );
                }
                return null
            })
        );
    }


}

MoreMenu.Item = MoreMenuItem;

MoreMenu.defaultProps = {
    isVisible:                  false,
    onChangeStateMoreMenu:      () => {},
    cubeInstance:               {},
    onCloseMenu:                () => {},
};

MoreMenu.propTypes = {
    isVisible:                  PropTypes.bool,
    onChangeStateMoreMenu:      PropTypes.func,
    cubeInstance:               PropTypes.object,
    onCloseMenu:                PropTypes.func,
};

export default MoreMenu;
