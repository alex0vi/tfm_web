'use strict'

import React, { Component } from 'react';

import Ru from 'rutils';

import autobind from 'autobind-decorator';

import parseUserAgent from 'ua-parser-js';

import jsyaml from 'js-yaml';

const osTypeMapping = {
    'Mac OS': 'MAC',
    'Windows': 'WINDOWS',
    'Linux': 'LINUX',
    'iOS': 'IOS',
    'Android': 'ANDROID',
    'Chromium OS': 'LINUX',
    'Ubuntu': 'LINUX',
    'FreeBSD': null,
    'OpenBSD': null,
    'Solaris': null,
    'Debian': 'LINUX',
    'Kubuntu': 'LINUX',
    'AIX': null,
    'Mint': 'LINUX',
    'Symbian': null,
    'Tyzen': null,
    'BlackBerry': null,
    'Windows Phone OS': null,
    'Nintendo': null,
    'webOS': null,
    'PLAYSTATION': null,
    'PlayStation': null,
    'Windows Mobile': null,
}

const lookupOsType = Ru.pipe(
    Ru.lookupFrom( osTypeMapping ),
    Ru.defaultTo( null )
)

const getAddapsLastVersionInfo = () => {

    return(
        fetch('https://s3.amazonaws.com/addaps-beta/latest.yml')
        .then( res => res.text() )
        .then( yaml => jsyaml.load( yaml ) )
    )
}


@autobind
class DownloadButtons extends Component {

    constructor(props) {
        super(props);

        this.state = {
            MAC: `https://s3.amazonaws.com/addaps-beta/Addap's+beta-0.5.0-mac.zip`,
            LINUX: `https://s3.amazonaws.com/addaps-beta/Addaps-0.5.0-x86_64.AppImage`,
            WINDOWS: `https://s3.amazonaws.com/addaps-beta/Addap's+beta+Web+Setup+0.5.0.exe`,
            IOS: "https://itunes.apple.com/us/app/addaps/id1269471524?mt=8",
            ANDROID: "https://play.google.com/store/apps/details?id=com.addaps.addaps"
        };
    }



    componentWillMount() {
        fetch('https://s3.amazonaws.com/addaps-beta/latest.yml')
        .then(res => res.text())
        .then(json => {
            let version =  jsyaml.load(json).version;

            if (version) {
                let urlMac = "https://s3.amazonaws.com/addaps-beta/Addap's+beta-"+version+"-mac.zip";
                let urlLinux = "https://s3.amazonaws.com/addaps-beta/Addaps-"+version+"-x86_64.AppImage";
                let urlWindows = "https://s3.amazonaws.com/addaps-beta/Addap's+beta+Web+Setup+"+version+".exe";

                this.setState({
                    MAC: urlMac,
                    LINUX: urlLinux,
                    WINDOWS: urlWindows
                });
            }
        });
    }

    handleClick(target){

        ga('send', 'event', 'Download App', target, 'Click on download app');
    }

    render(){
        let userAgent = parseUserAgent( this.props.ua)
        let translations = this.props.data

        let someClass = this.props.someClass ?  this.props.someClass: ''
        let { browser, os } = userAgent
        let osName = os.name
        let osType = lookupOsType( osName );
        //let osType = 'SOMETHING'
        let iconDonwload = ''
        let title = ''
        let platfom = ''
        let target = ''
        let downloadUrl = ''

        console.log('osType', osType)

        switch (osType) {
            case 'MAC':
                iconDonwload = 'fa fa-apple'
                title = translations.downloadApp
                target = "_self"
                platfom = translations[`for${ osType }`]
                downloadUrl =  this.state[osType]
                break;
            case 'WINDOWS':
                iconDonwload = 'fa fa-windows'
                title = translations.downloadApp
                target = "_self"
                platfom = translations[`for${ osType }`]
                downloadUrl =  this.state[osType]
                break;
            case 'LINUX':
                iconDonwload = 'fa fa-linux'
                title = translations.downloadApp
                target = "_self"
                platfom = translations[`for${ osType }`]
                downloadUrl =  this.state[osType]
                break;
            case 'IOS':
                iconDonwload = 'fa fa-mobile'
                title = translations.availableOn
                target = "_blank"
                platfom = 'App Store'
                downloadUrl =  this.state[osType]
                break;
            case 'ANDROID':
                iconDonwload = 'fa fa-android'
                target = "_blank"
                title = translations.availableOn
                platfom = 'Google play'
                downloadUrl =  this.state[osType]
                break;
            default:
                iconDonwload = 'fa fa-apple'
                title = translations.downloadApp
                target = "_new"
                downloadUrl =  this.state["MAC"]
                platfom = "for MAC"
                break;
        }

        return(

            <a onClick={ ()=>{ this.handleClick( osType ) } }  target={ target } className={ "btn btn-app-filled "+ someClass }>
                <i className={ iconDonwload }></i>
                <strong>{ title }</strong>
                <span>{ platfom }</span>
            </a>
        )
    }
}

export default DownloadButtons;
