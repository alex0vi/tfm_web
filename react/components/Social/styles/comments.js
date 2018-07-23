'use strict'

import {COLORS} from '../../../globals/colors.js';


let commentsStyle = {
  commentsDiv: {
    flexDirection: 'column',
    display: 'flex',
    backgroundColor: '#fafafa',
  },
  scrollableSection: {
    maxHeight: '400px',
    overflowY: 'scroll',
  },
  comment: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    margin: '5px 15px',
  },
  avatarArea: {
    margin: '10px 10px 5px 0px',
  },
  userInformationArea: {
    flex: 7,
    margin: '10px 0 10px 10px '
  },
  infoUser: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textComment: {
  },
  text: {
    textAlign: 'justify',
    marginBottom: 4
  },

  writeCommentDiv: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 15px',
  },
  textField: {
    flex: 1,
    height: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '5px'
  },
  inputText: {
    backgroundColor: 'transparent',
    height: '30px',
    margin: '0 0 0 10px',
  },
  placeholder: {
    margin: '4px 0 0 10px',
    bottom: '20px',
  },
  underline: {
    height: 0,
  },
  sendButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    width: 50,
    borderWidth: 0,
    marginLeft: '10px',
    outline: 'none',
  },
  icon: {
    fontSize: 20,
    cursor: 'pointer',
    color: '#ffffff',
    // marginLeft: '10px'
  }
};

export {commentsStyle}
