import React                from 'react';
import R                    from 'ramda';

import { Emoji }            from 'emoji-mart'
import { emojiIndex }       from 'emoji-mart'

// const regExp                = /(\:+\w+\:)/g;
// const regExp                = /(\:+.+\:)/g;
const regExpDoublePoint        = /(\:+.+\:)/g;
const regExpSpace              = /(\s)/g;

const getIcon = R.pipe(
   R.split(':'),
   R.remove(0,1),
   R.head
)

const getObjectItemsAux = (item) =>{
  let x = [];
  item.map((content, index, array) => {
    if(!R.isNil(array[index+1]) && R.indexOf('skin',array[index+1])!==-1) x = R.append({text: content, color:array[index+1]}, x);
    else if(R.indexOf('skin',array[index])===-1) x = R.append({text: content, color: null}, x);
  });
  return x;
}

const getObjectItems = R.pipe(
  R.split(':'),
  R.reject(R.equals('')),
  getObjectItemsAux,
)


const getWords = R.pipe(
  R.split(regExpSpace),
  R.map(R.split(regExpDoublePoint)),
  R.unnest,
)

const specialEmojis = {
    "<3"    : "heart",
    ":o)"   : "monkey_face",
    "<\/3"  : "broken_heart",
    "=)"    : "smiley",
    "=-)"   : "smiley",
    "C:"    : "smile",
    "c:"    : "smile",
    ":D"    : "smile",
    ":-D"   : "smile",
    ":>"    : "laughing",
    ":->"   : "laughing",
    ";)"    : "wink",
    ";-)"   : "wink",
    "8)"    : "sunglasses",
    ":|"    : "neutral_face",
    ":-|"   : "neutral_face",
    ":\\"   : "confused",
    ":-\\"  : "confused",
    ":\/"   : "confused",
    ":-\/"  : "confused",
    ":*"    : "kissing_heart",
    ":-*"   : "kissing_heart",
    ":p"    : "stuck_out_tongue",
    ":-p"   : "stuck_out_tongue",
    ":P"    : "stuck_out_tongue",
    ":-P"   : "stuck_out_tongue",
    ":b"    : "stuck_out_tongue",
    ":-b"   : "stuck_out_tongue",
    ";p"    : "stuck_out_tongue_winking_eye",
    ";-p"   : "stuck_out_tongue_winking_eye",
    ";b"    : "stuck_out_tongue_winking_eye",
    ";-b"   : "stuck_out_tongue_winking_eye",
    ";P"    : "stuck_out_tongue_winking_eye",
    ";-P"   : "stuck_out_tongue_winking_eye",
    "):"    : "disappointed",
    ":("    : "disappointed",
    ":-("   : "disappointed",
    ">:("   : "angry",
    ">:-("  : "angry",
    ":'("   : "cry",
    "D:"    : "anguished",
    ":o"    : "open_mouth",
    ":-o"   : "open_mouth",
    ":O"    : "open_mouth",
    ":-O"   : "open_mouth",
    ":)"    : "slightly_smiling_face",
    "(:"    : "slightly_smiling_face",
    ":-)"   : "slightly_smiling_face"
};




const isRegularEmoji = (word) => {
    let finded = false;
    let icon = getIcon(word);
    if(!R.isNil(icon) && !R.isEmpty(icon) && !finded) {
        emojiIndex.search(icon).map( (o) => {
            if(R.equals(o.id, icon)) {
                finded = true;
            }
        })
    }
    return finded ? true : false;
}

const isSpecialEmoji = (word) => {
    return R.isNil(specialEmojis[word]) ? false : true;
}

const newText = (el) => {

    if (isRegularEmoji(el)) {
        let objList = getObjectItems(el);
        let x = objList.map((content, index, array) => {
            if(!R.isNil(content.color)) return (<Emoji style={{marginLeft:4, marginRight:4}} size={20} emoji={`:${content.text}::${content.color}:` } set={'twitter'} />);
            else return (<Emoji style={{marginLeft:4, marginRight:4}} size={20} emoji={{id: content.text}} set={'twitter'} />);
        });
        return x;
    }
    else {
        if (isSpecialEmoji(el)) {
            return <Emoji style={{marginLeft:4, marginRight:4}} size={20} emoji={{ id: specialEmojis[el] }} set={'twitter'} />
        }
        else return el;
    }
}

const getEmojis = (objEmoji) => {
    let obj;
    emojiIndex.search(objEmoji.text).map( (o) => {
        obj = o.native;
    })
    return obj;
}

const newTextNative = (el) => {
    if (isRegularEmoji(el)) {
        let objList = getObjectItems(el);
        let emojis = R.map(getEmojis, objList);
        return emojis;
    }
    else return el;
}

const emojifyText = (text) => {
    let wordsObject = getWords(text);
    let result = R.unnest(R.map( newText, wordsObject));
    return result;
};

const emojify = (text, options = {}) => {
    if (!text) return null;
    return emojifyText(text);
}

const textWithEmojisToNative = (text) => {
    let wordsObject = getWords(text);
    let resultList = R.unnest(R.map( newTextNative, wordsObject));
    let resultString = '';
    resultList.map((content, index, array) => {
        resultString = R.concat(resultString, content);
    });
    return resultString;
}

export default {
    emojify,
    textWithEmojisToNative,
}
