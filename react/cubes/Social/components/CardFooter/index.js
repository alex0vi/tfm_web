import React, {PureComponent}           from 'react';
import R                                from 'ramda';
import Radium                           from 'radium';
import autobind                         from 'autobind-decorator';
import u                                from 'updeep';
import {connect}                        from 'react-redux';

import TextField                        from 'material-ui/TextField';
import {MdTagFaces, MdSend}             from 'react-icons/lib/md';
import {FaComment, FaMailForward}       from 'react-icons/lib/fa';

import addapsMedia                      from '@addaps/addaps_media';

import {openPopUpGeneral, closePopUpGeneral}          from '../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';

import eventEmitter                     from '../../../../services/eventEmitterService';

import SocialUser                       from '../SocialUser'
import SocialBoard                      from '../SocialBoard'
import SocialApp                        from '../SocialApp'
import SocialWebLink                    from '../SocialWebLink'
import ActionsInformationAreaCard       from '../ActionsInformationAreaCard'
import PopUpCommentBoardDialog          from '../../../../components/PopUpCommentBoardDialog';



import PopUpShare                       from '../../../../components/PopUpShare'


import {getDifferenceBetweenNowAndDate} from '../../../../utils/time.js';

/* styles */
import {COLORS}                           from '../../../../globals/colors.js';
import CONSTANTS                        from '../../../../globals/constants.js';
import {commentsStyle}                  from '../../../../components/Social/styles/comments.js'
import {footerStyles}                   from '../../../../components/Social/styles/footerCard.js'

const api           =   require('../../../../../../app/js/devel/modules-system/api-calls').apiv2;

const basePath = window.location.href.split( '/' ).slice( 0, -2 ).join( '/' );

const URL_MAPPING = {
    'USER': 'users',
    'BOARD': 'boards',
    'WEBLINK': 'weblinks',
    'APP': 'apps'
};

const styles = {
    fakeIconsWrapper: {
        width: 290,
        height: 52,
        position: 'absolute',
        borderRadius: '30px 30px 30px 30px',
        boxShadow: '1px 1px 1px 1px #888888',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        zIndex: 150,
        'transition': '0.5s',
        bottom: 25,
    },
    iconWrapper: {
        width: 38,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 30,
        marginRight: 3,
        shadowColor: 'black',
        shadowOffset: {
            height: 0.5,
            width: 0.5
        },
        'transition': '0.5s',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        marginHorizontal: 10,
        cursor: 'pointer'
    },
}


const mapStateToProps = state => {

    let myself = state.user;
    return {
        myself
    };

};


@connect(mapStateToProps, null)
@Radium
class CardFooter extends PureComponent {

    constructor(props) {
        super(props);

        this.limit = 10;
        this.offset = 0;

        this.state = {
            informationActivity:{
                emotions: this.props.item.emotions,
                comments: this.props.item.comments,
                shares: this.props.item.shares,
            },
            isOpenShareDialog: false,
            text: '',
            comments: [],
            commentsAreOpen: false,
            isEmotionButttonHovered: false,
            isWrapperEmotionsHover: false,
            activeIcon: null,
        }

        this.renderIcon = this.renderIcon.bind(this);
        this.openShareDialog = this.openShareDialog.bind(this);
    }

    hoverEmotion(icon) {
        this.setState({ activeIcon: icon})
    }

    unHoverEmotion() {
        this.setState({ activeIcon: null})
    }


    hoverEmotionsContainer(){
        this.setState({isWrapperEmotionsHover: true});
    }

    unHoverEmotionsContainer(){
        this.setState({isWrapperEmotionsHover: false});
    }

    handleHoverEmotionsButton(){
         this.setState({isEmotionButttonHovered: true});
    }

    handleUnhoverEmotionsButton(){
        this.setState({isEmotionButttonHovered: false });
    }


    componentDidMount() {
        if(this.props.isEntityPage) {
            this.onPressCommentButton()
        }
    }

    render(){
        let auxTypeStyleColorIsBlack, auxTypeStyleBackgroundColorIsBlack, auxTypeStylePositionIsBlack, auxTypeStyleShareIconIsBlack;
        if(this.props.typeStyle === 'blackStyle'){
            auxTypeStyleColorIsBlack = {
                color: 'white',
            }
            auxTypeStyleBackgroundColorIsBlack = {
                backgroundColor: 'transparent',
            }
            auxTypeStylePositionIsBlack={
                position: 'absolute',
                bottom: 10,
                width: '',
            }
            auxTypeStyleShareIconIsBlack ={
                filter: 'invert(100%)',
                opacity: 1,
            }
        }



        return(
            <div style={[footerStyles.wrapperContainer,auxTypeStylePositionIsBlack]}>
                <div>

                  {
                    !this.props.fromActivity && !this.props.isReduced && !this.props.fromModal ?

                        <ActionsInformationAreaCard
                            key             = {`informationAreaCard-Card${this.props.item.id}`}
                            item            ={this.state.informationActivity}
                            funcOpenComments={this.props.typeStyle === 'blackStyle' ? () => this.openCommentDialog() : () => this.onPressCommentButton()}
                            fakeIcons       = {CONSTANTS.FAKE_ICONS}
                            cubeInstance    ={this.props.cubeInstance}
                            typeStyleBlack  = {this.props.typeStyle === 'blackStyle'}

                        />
                        :
                        null
                  }
                </div>



                <div style={[footerStyles.container, auxTypeStyleBackgroundColorIsBlack]}>
                    <button style={[footerStyles.footerButton, auxTypeStyleBackgroundColorIsBlack]}
                        onMouseEnter={() => this.handleHoverEmotionsButton() }
                        onMouseLeave={() => this.handleUnhoverEmotionsButton() }
                    >
                        <div style={footerStyles.buttons}>
                            {(this.state.isEmotionButttonHovered || this.state.isWrapperEmotionsHover) ? this.renderEmotions() : null}
                            <i style={[footerStyles.iconCom, auxTypeStyleColorIsBlack]} className="material-icons">insert_emoticon</i>
                            <span style={auxTypeStyleColorIsBlack} >{CONSTANTS.FEED.EMOTIONS_TEXT_BUTTON_CARD_FOOTER}</span>
                        </div>
                    </button>

                    <button style={[footerStyles.footerButton, auxTypeStyleBackgroundColorIsBlack]} onClick={this.props.typeStyle === 'blackStyle' ? () => this.openCommentDialog() : () => this.onPressCommentButton() }>
                        <div style={footerStyles.buttons}>
                            <span style={[footerStyles.iconCom, {top:0, position:'relative', fontSize: 14}, auxTypeStyleColorIsBlack]} className="fa fa-comment-o mirror-icon"></span>
                            <span style={auxTypeStyleColorIsBlack}>{CONSTANTS.FEED.COMMENTS_TEXT_BUTTON_CARD_FOOTER}</span>
                        </div>
                    </button>

                    <button
                        style={[footerStyles.footerButton, auxTypeStyleBackgroundColorIsBlack]}
                        onClick={() => this.onPressShare() }
                    >
                        <div style={footerStyles.buttons}>
                            <img src={addapsMedia.getImagePath(basePath,'SOCIAL_IMAGES' , 'SHARE')} style={[{color: '#56a4de', width: 15, opacity: 0.7, position: 'relative', top: -1, marginRight: 5}, auxTypeStyleShareIconIsBlack]} />
                            <span style={auxTypeStyleColorIsBlack} >{CONSTANTS.FEED.SHARES_TEXT_BUTTON_CARD_FOOTER}</span>
                        </div>
                    </button>
                    {this.state.commentsAreOpen ? this.renderComentWrapper(): null}
                </div>
            </div>
        )
    }


    openCommentDialog(){
        let props = {
            type:                   'BOARD',
            item:                   this.props.item,
            onClick:                () => this.closeCommentDialog(),
        }

        openPopUpGeneral(this.props.cubeInstance, PopUpCommentBoardDialog, props )
    }

    closeCommentDialog(){
        let props = {
            type:                   'BOARD',
            item:                   this.props.item,
            cubeInstance:           this.props.cubeInstance,
        }
        closePopUpGeneral(this.props.cubeInstance, props)
    }


    renderCommentPopUp(){
        return(
            <div class="fs-create-folder-pop-alert">
                <div class="fs-form-top-title">
                    <span class="window_buttons window_buttons_close fs-create-folder-window-close"></span>
                    <span class="fs-form-top-title-text">Write a comment</span>
                </div>
                <div class="fs-form-content">
                    <div class="alert-message"></div>
                    <span class="fs-create-folder-text">Send comment for this board</span>
                    <input class="form-control fs-create-folder-input" type="text"  name="{{ inputNewFolder }}" placeholder="{{ placeholder }}"/>
                </div>

                <div class="fs-form-buttons">
                    <div class="fs-create-folder-cancel-button btn btn-sm btn-default">cancel</div>
                    <div class="fs-create-folder-create-button btn btn-sm btn-danger">accept</div>
                </div>
            </div>
        )
    }



    getTypeOfEmotion(type){
        return R.cond([
            [ R.equals('LIKE'),             R.always('likeEmotions')],
            [ R.equals('LOVE'),             R.always('loveEmotions')],
            [ R.equals('FUN'),              R.always('funEmotions')],
            [ R.equals('WOW'),              R.always('wowEmotions')],
            [ R.equals('SAD'),              R.always('sadEmotions')],
            [ R.equals('ANGRY'),            R.always('angryEmotions')],
            [ R.T,                          R.I],
        ])(type);
    }

    pressAddPost(){
        let newinfoActtivity = u({shares: R.inc}, this.state.informationActivity);
        this.setState({informationActivity: newinfoActtivity});
    }
    closeDialogUpdateStatus(){
        this.setState({isOpenShareDialog: false});
        this.closeShareDialog()

    }

    onPressShare() {
        this.setState({isOpenShareDialog: true})
        this.openShareDialog()
    }

    openShareDialog(){
        let props = {
            type:                   this.props.type,
            item:                   this.props.item,
            isOpenShareDialog:      true,
            onClick:                () => this.closeDialogUpdateStatus(),
            onPressAddPost:         () => this.pressAddPost(),
            myself:                 this.props.myself
        }

        openPopUpGeneral(this.props.cubeInstance, PopUpShare, props )
    }

    closeShareDialog(){
        let props = {
            type:                   this.props.type,
            item:                   this.props.item,
            isOpenShareDialog:      false,
            onClick:                () => this.closeDialogUpdateStatus(),
            onPressAddPost:         () => this.pressAddPost(),
            myself:                 this.props.myself,
            cubeInstance:   this.props.cubeInstance,

        }
        closePopUpGeneral(this.props.cubeInstance, props )
    }

    onPressCommentButton() {
        let commentsAreOpen = this.state.commentsAreOpen;

        if (commentsAreOpen) {
            this.setState({commentsAreOpen: false})
            return;
        }
        let urlType = URL_MAPPING[this.props.type];
        let url = urlType + '/' + this.props.item.id + '/comments';

        api.get(url).then(commentsInPost => {
            // let newinfoActtivity = u({comments:  R.inc, }, this.state.informationActivity);
            let zeroCommentsInPost = commentsInPost.length === 0;
            return zeroCommentsInPost
                ? this.setState({commentsAreOpen: true, comments: []})
                : this.setState({commentsAreOpen: true, comments: commentsInPost, informationActivity: this.state.informationActivity});
        }).catch(err => {
            console.log(err);
        })
    }

    renderComentWrapper(){
        return(
            <div
              style = {commentsStyle.commentsDiv}
              ref = { self => this._commentsDiv = self }
            >
              <div style = {commentsStyle.scrollableSection}>
                    {R.addIndex(R.map)((comment ,i) =>  this.renderComment(comment, i), R.reverse(this.state.comments) )}
              </div>
                    {this.renderWriteCommentDiv()}
            </div>
        )
    }


    renderWriteCommentDiv() {
        return (
            <div style={commentsStyle.writeCommentDiv}>

                <div style={commentsStyle.avatarArea}>
                    <img src={this.props.myself.avatar.xs} style={styles.avatar}/>
                </div>

                <div style={commentsStyle.textField}>
                    <input
                        type="text"
                        onChange={(text) => this.onChangeWriteComment(text)}
                        style= {{border: 'none' ,width: '100%'}}
                        placeholder = {"Write a comment..."}
                        value={this.state.text}

                    />
                </div>

                <button style={commentsStyle.sendButton}>
                    <MdSend
                        style={commentsStyle.icon}
                        onClick={() => this.onSendComment() }
                    />
                </button>
            </div>
        )
    }

    onChangeWriteComment(text){
        this.setState({text: text.target.value});
    }


    onSendComment() {
        let type = this.props.type;
        let id = this.props.item.id;
        if(!R.isEmpty(this.state.text)) {
            this.offset = 0;
            let limit = this.limit;
            let offset = this.offset;
            let url = type + 's/' + id + '/comments'
            let body = {
              type: 'TEXT',
              item: {
                text: this.state.text
              }
            }
            api.post(url, body)
            .then(() => {
                api.get(url, {limit, offset})
                .then(comments => {
                  this.offset = this.offset + limit;
                  let newinfoActtivity = u({comments:  R.inc, }, this.state.informationActivity);
                  this.setState({text: '',comments: comments, informationActivity: newinfoActtivity});
                })
            }).catch(err => {
                console.log(err)
            })
        }
    }

    renderComment(comment, i) {
      let userName = comment.item.user.firstName + " " + comment.item.user.lastName;
      let date = getDifferenceBetweenNowAndDate(comment.item.insertedAt);
      return(
        <div
            key = {i}
            style={commentsStyle.comment}
        >
            <div style={commentsStyle.avatarArea}>
              <img src={comment.item.user.avatar.xs} style={styles.avatar} />
            </div>
            <div style={commentsStyle.userInformationArea}>
              <div style={commentsStyle.infoUser}>
                <span style={[commentsStyle.text, {color: '#434343'}, {fontSize: 14}]}>{userName}</span>
                <span style={[commentsStyle.text, {color: '#757575'}, {fontSize: 8}]}>{date}</span>
              </div>
              <div style={commentsStyle.textComment}>
                <span style={[commentsStyle.text, {color: '#373737'}, {fontSize: "12px"}]}>{comment.item.text}</span>
              </div>
            </div>
        </div>
      )
    }

    renderEmotions() {

        return (

                <div
                    style={[styles.fakeIconsWrapper]}
                    onMouseEnter={() => this.hoverEmotionsContainer()}
                    onMouseLeave={() => this.unHoverEmotionsContainer()}
                >
                    {R.map(this.renderIcon , CONSTANTS.FAKE_ICONS)}
                </div>
        )
    }


    renderIcon(icon) {

        let auxStyles = {};
        let iconText = icon.text;

        if(this.state.activeIcon !== null) {
            if(iconText === this.state.activeIcon.text) {
                auxStyles = {
                    width: 55,
                    height: 55,
                    'transition': '0.3s',
                }
            }
        }

        return(
            <img
                key = {iconText}
                src={icon.url}
                onMouseEnter={(e) => this.hoverEmotion(icon) }
                onMouseLeave={() => this.unHoverEmotion()}
                onClick={()=> this.saveEmotion(iconText)}
                style={[styles.iconWrapper, auxStyles]}
            />
        )
    }

    saveEmotion(emotion) {
        this.unHoverEmotion();
        this.handleUnhoverEmotionsButton();
        this.unHoverEmotionsContainer();

        let url = ''
        if(this.props.type == 'USER') {
            url = 'users/' + this.props.item.id + '/' + emotion
        }
        else if(this.props.type == 'BOARD') {
            url = 'boards/' + this.props.item.id + '/' + emotion
        }
        else if(this.props.type == 'WEBLINK') {
            url = 'weblinks/' + this.props.item.id + '/' + emotion
        }
        api.put(url)
            .then((data) => {
                let newinfoActtivity = u({emotions: {
                                                total: R.inc,
                                                [this.getTypeOfEmotion(emotion)]: R.inc,
                                    } }, this.state.informationActivity);
                this.setState({informationActivity: newinfoActtivity});
            })
    }
}

export default CardFooter;
