'use strict'

import {COLORS} from '../../../globals/colors.js';


let footerStyles = {
  wrapperContainer:{
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
       width: '100%',
       position: 'relative',
  },wrapperActionsInformationArea:{
        width: '100%',
        overflow: 'hidden',
  },
  container: {
      display: 'inline-block',
      flexDirection: 'row',
      flex: 1,
      //   height: 70,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor:'#ffffff',
      borderStyle: 'solid hidden hidden hidden',
      borderColor: '#cccccc',
      marginTop: '5px',
      borderWidth: 'thin',
  },
  buttons: {
      color: '#666666',
      fontSize: '15px',
      cursor: 'pointer',
      hoverColor: 'blue',
      position: 'relative',
  },
  icon: {
    fontSize: 15,
    cursor: 'pointer',
    color: '#666666',
    transform: 'translate(-5px,0)',
    marginLeft: '10px'
  },
  iconCom: {
    fontSize: 16,
    transform: 'rotateY(180deg), translate(-10px,0)',
    cursor: 'pointer',
    color: '#666666',
    marginLeft: '5px',
    marginRight: '5px',
    top: 2,
    position: 'relative',
  },
  footerButton: {
    backgroundColor: 'white',
    borderWidth: 0,
    margin: '5px 20px 5px 0px',
    outline: 'none',

  }
}

export { footerStyles }
