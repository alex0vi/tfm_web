webpackHotUpdate(0,Array(116).concat([
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(537)(undefined);
// imports


// module
exports.push([module.i, ".btn-app-open,\n.btn-app-filled {\n  text-decoration: none;\n  color: #fff;\n  position: relative;\n  width: 100%;\n  padding: 0 2em;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 16px;\n  height: 60px;\n  line-height: 58px;\n  border: 2px solid #FF6C6F;\n  display: inline-block;\n  outline: 0;\n  letter-spacing: 1.5px;\n  font-weight: 700;\n  margin: 20px 0;\n}\n\n.btn-app-open:hover,\n.btn-app-filled:hover {\n  color: #fff;\n  background: #FF6C6F;\n}\n\n.btn-app-open i,\n.btn-app-filled i {\n  margin-right: 10px;\n  line-height: 1;\n}\n\n.btn-app-open span,\n.btn-app-filled span {\n  display: block;\n  font-size: 14px;\n  /* font-weight: 700; */\n  letter-spacing: 0.5px;\n  margin-top: -3px;\n  opacity: 1;\n}\n\n.btn-app-filled {\n  margin: 0;\n  background: #FF6C6F;\n}\n\n.header-section {\n  margin-bottom: 0;\n  box-shadow: 0 28px 56px 0 rgba(55, 55, 55, 0.22);\n  transition: all ease 1.5s;\n}\n\n.header-section .container .addaps-logo {\n  height: 26px;\n}\n\n.header-section.header-floating {\n  margin-top: -120px;\n}\n\n.header-section.header-floating.floating {\n  margin-top: 0;\n}\n\n.header-section.navbar-default {\n  background-color: #373737;\n  border-bottom-color: #373737;\n}\n\n.navbar-toggle {\n  margin-top: 13px;\n  margin-bottom: 13px;\n  background-color: transparent;\n  border: none;\n}\n\n.navbar-logo {\n  max-height: 50px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  padding-top: 0;\n  padding-bottom: 0;\n  line-height: 46px;\n  white-space: nowrap;\n}\n\n.navbar-logo img {\n  height: 34px;\n  width: auto;\n  margin-top: 8px;\n}\n\n.navbar-nav > li > a {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding-top: 0;\n  padding-bottom: 0;\n  line-height: 25px;\n  font-size: 15px;\n  letter-spacing: 0.5px;\n}\n\n.navbar-default .navbar-nav > li > a {\n  color: #fff;\n}\n\n.navbar-nav > li {\n  float: left;\n}\n\n.navbar-collapse .navbar-form {\n  border-color: none;\n}\n\n.navbar-default .navbar-nav > li > a:focus,\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li.current > a {\n  color: #FF6C6F;\n}\n\n.navbar-default .navbar-nav > li.current {\n  border-bottom: 3px solid #FF6C6F;\n}\n\n@media (min-width: 768px) {\n  .navbar-nav > li > a {\n    margin-top: 17.5px;\n    margin-bottom: 17.5px;\n  }\n}\n\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav > li.current {\n    border-bottom: transparent;\n  }\n\n  .navbar-nav > li {\n    float: none;\n  }\n\n  .navbar-default .navbar-collapse {\n    border-color: transparent;\n  }\n}\n\n.translations {\n  position: fixed;\n  bottom: 0px;\n  right: 40px;\n  z-Index: 9999;\n  text-align: left;\n  background-color: rgba(0, 0, 0, 0.4) !important;\n  border: 1px solid #353535 !important;\n  padding-bottom: 0;\n}\n\n.translations img {\n  top: 0;\n}\n\n.translations .selected--flag--option {\n  display: block;\n  height: 37px;\n  line-height: 36px;\n  padding: 0 10px;\n  padding-right: 60px;\n  color: #fff;\n}\n\n.translations .selected--flag--option .country-flag {\n  width: auto !important;\n  height: auto !important;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.translations .flag-options {\n  bottom: 38px;\n  border-radius: 0;\n  background: #373737;\n  position: absolute;\n  min-width: 100%;\n  border: 1px solid #ebeef0;\n  color: white;\n  border: none;\n}\n\n.translations .flag-options .flag-option:hover {\n  background-color: #474747;\n}\n\n.sections-container {\n  height: 100%;\n  position: relative;\n}\n\n.sections-container .general-section {\n  padding: 80px 0;\n  font-family: AvenirNextUltrafina;\n}\n\n.sections-container .general-section .section-heading {\n  font-size: 50px;\n  font-weight: 700;\n  color: #FF6C6F;\n  line-height: 1em;\n  position: relative;\n  padding-bottom: 20px;\n  margin: 0 0 30px;\n  font-weight: 300;\n}\n\n.sections-container .general-section .section-heading:after {\n  content: \"\";\n  border-top: 3px solid #FF6C6F;\n  display: block;\n  margin-top: 10px;\n  width: 30px;\n}\n\n.sections-container .general-section h5 {\n  margin: 0 0 3px;\n  color: #fff;\n  text-transform: none;\n  font-size: 20px;\n}\n\n.sections-container .general-section p {\n  margin-bottom: 0;\n  font-size: 15px;\n}\n\n.sections-container .cover-section {\n  position: relative;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-top: 0px;\n  background-position: 50% 0px;\n  padding-top: 82px;\n  overflow: hidden;\n}\n\n.sections-container .cover-section .video-background-container {\n  top: 0;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.sections-container .cover-section .video-background-container .arrow {\n  position: absolute;\n  z-index: 99999999;\n  bottom: 15px;\n  left: 50%;\n  height: 15px;\n}\n\n.sections-container .cover-section .black-dot-background-overlay {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUM4Q0NDRTgyNDQ2MTFFNEE2NEVDNzc4QzFDRjlCRUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUM4Q0NDRTkyNDQ2MTFFNEE2NEVDNzc4QzFDRjlCRUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQzhDQ0NFNjI0NDYxMUU0QTY0RUM3NzhDMUNGOUJFRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQzhDQ0NFNzI0NDYxMUU0QTY0RUM3NzhDMUNGOUJFRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkB60N8AAAAYSURBVHjaYmJgYPgPBAxMQIIRyGEACDAARwYG/12eAo8AAAAASUVORK5CYII%3D);\n  background-repeat: repeat;\n  background-position: center center;\n}\n\n.sections-container .cover-section .wrap {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: 1440px;\n  padding: 140px 50px;\n  margin: 0 auto;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .hero-logo {\n  height: 100px;\n  margin-bottom: 30px;\n  max-width: 100%;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .hero-title {\n  color: #FF6C6F;\n  font-size: 51px;\n  font-weight: 500;\n  line-height: 1.2em;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .hero-description {\n  margin-bottom: 70px;\n  color: #fff;\n  font-size: 28px;\n  line-height: 30px;\n  font-weight: 700;\n  max-width: 700px;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .download-buttons {\n  margin: 0 -10px;\n  margin-bottom: 20px;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .download-buttons .btn-app-download {\n  margin: 0 10px 10px;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .btn {\n  padding: 14px 22px;\n  font-weight: 800;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  transition: all ease 0.25s;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .btn:focus,\n.sections-container .cover-section .wrap .hero-content .hero-text .btn:active:focus,\n.sections-container .cover-section .wrap .hero-content .hero-text .btn.active:focus {\n  outline: 0;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .btn-lg {\n  padding: 20px 25px;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .btn-lg,\n.sections-container .cover-section .wrap .hero-content .hero-text .btn-app-download {\n  font-size: 14px;\n  letter-spacing: 1.5px;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .btn-app-download {\n  position: relative;\n  box-shadow: 0px 1px 30px 1px #373737;\n  padding: 10px 20px 10px 60px;\n  margin-right: 10px;\n  text-align: left;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .app-mobile-ios {\n  background: #8f8f8f;\n  color: #fff;\n  border-radius: 100px;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .app-mobile-android {\n  background-color: #8aba56;\n  color: #fff;\n  border-radius: 100px;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .btn-app-download strong {\n  display: block;\n  margin-bottom: 6px;\n  opacity: 0.8;\n  font-size: 10px;\n  /*font-weight: 800;*/\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .btn-app-download span {\n  display: block;\n  font-size: 14px;\n  /*font-weight: 700;*/\n  letter-spacing: 0.5px;\n  margin-top: -3px;\n  opacity: 1;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .btn-app-download i {\n  position: absolute;\n  top: 50%;\n  transform: translate(40%, -100%);\n  left: 0;\n  margin: 10px 0 0 15px;\n  font-size: 20px;\n  line-height: 1;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .btn-black {\n  background-color: #222222;\n  color: #ffffff;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .btn-black:focus,\n.sections-container .cover-section .wrap .hero-content .hero-text .btn-black:hover {\n  background-color: #000000;\n  color: #ffffff;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .btn-ios {\n  border-radius: 100px;\n  background-color: #777777;\n  color: #ffffff;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .btn-ios:focus,\n.sections-container .cover-section .wrap .hero-content .hero-text .btn-ios:hover,\n.sections-container .cover-section .wrap .hero-content .hero-text .app-mobile-ios:hover {\n  background-color: #999;\n  color: #ffffff;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .btn-android {\n  background-color: #a4c639;\n  color: #ffffff;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .btn-android:focus,\n.sections-container .cover-section .wrap .hero-content .hero-text .btn-android:hover,\n.sections-container .cover-section .wrap .hero-content .hero-text .app-mobile-android:hover {\n  background-color: #8bad20;\n  color: #ffffff;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .btn-windows-phone {\n  border-radius: 100px;\n  background-color: #777777;\n  color: #ffffff;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .btn-windows-phone:focus,\n.sections-container .cover-section .wrap .hero-content .hero-text .btn-windows-phone:hover {\n  background-color: #999;\n  color: #ffffff;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .social-links {\n  display: inline-block;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .social-links .btn-social {\n  color: #fff;\n  text-decoration: none;\n  font-size: 18px;\n  display: inline-block;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .social-links .btn-social:hover i {\n  color: #FF6C6F;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .social-links i {\n  color: #fff;\n  font-size: 17px;\n  max-width: 17px;\n  margin: 0 8px 0 20px;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .social-links i:hover {\n  color: #FF6C6F;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-text .social-links .fa-facebook {\n  margin-left: 0;\n}\n\n@media (max-width: 767px) {\n  .sections-container .cover-section .wrap .hero-content .hero-text .desktop {\n    display: none;\n  }\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-images .main {\n  color: #fff;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.3);\n  display: inline-block;\n  width: 100%;\n  min-width: 340px;\n  padding: 1.5em 3em 2em;\n  border-radius: 10px;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-images .main .token-sales {\n  font-weight: 500;\n  line-height: 1.2em;\n  text-transform: uppercase;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-images .main .bonus {\n  font-size: 24px;\n  font-weight: 400;\n  margin: 30px 0;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-images .main .total-number {\n  font-size: 24px;\n  margin-bottom: -10px;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-images .main .total-text {\n  font-size: 14px;\n  font-weight: 400;\n  margin-bottom: 30px;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-images .main .price {\n  font-size: 20px;\n  font-weight: 400;\n  margin-bottom: 30px;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-images .main .btn-app-open,\n.sections-container .cover-section .wrap .hero-content .hero-images .main .btn-app-filled,\n.sections-container .cover-section .wrap .hero-content .hero-images .main .btn-app-filled {\n  border-radius: 100px;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-images .main .btn-app-open .last-update,\n.sections-container .cover-section .wrap .hero-content .hero-images .main .btn-app-filled .last-update,\n.sections-container .cover-section .wrap .hero-content .hero-images .main .btn-app-filled .last-update {\n  position: absolute;\n  right: 0;\n  font-size: 8px;\n  bottom: -42px;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-images .main .contact-us a {\n  cursor: pointer;\n  text-decoration: none;\n  color: #fff;\n}\n\n.sections-container .cover-section .wrap .hero-content .hero-images .main .contact-us a:hover {\n  color: #FF6C6F;\n}\n\n.sections-container .parallax-background {\n  background-attachment: fixed;\n}\n\n@media (max-width: 767px) {\n  .sections-container .black-dot-background-overlay {\n    background: #373737 !important;\n  }\n\n  .sections-container .wrap {\n    text-align: center;\n    padding: 0px 20px !important;\n  }\n\n  .sections-container .wrap .hero-content .hero-text .rated img {\n    width: 80px;\n    height: 80px;\n  }\n\n  .sections-container .wrap .hero-content .hero-text .hero-logo {\n    height: 65px !important;\n    width: 80%;\n  }\n\n  .sections-container .wrap .hero-content .hero-text .hero-title {\n    font-size: 30px !important;\n  }\n\n  .sections-container .wrap .hero-content .hero-text .hero-description {\n    font-size: 18px !important;\n    margin-bottom: 30px !important;\n  }\n\n  .sections-container .wrap .hero-content .hero-text .btn-whitepaper {\n    margin-bottom: 30px;\n  }\n\n  .sections-container .wrap .hero-content .hero-text .social-links .btn-social {\n    font-size: 12px !important;\n  }\n\n  .sections-container .wrap .hero-content .hero-images {\n    margin-top: 20px;\n  }\n\n  .sections-container .wrap .hero-content .hero-images .main {\n    padding: 0px 20px !important;\n  }\n}\n\n.sections-container .section-inverse-color {\n  background-color: #222222;\n  color: #cccccc;\n}\n\n.sections-container .video-section {\n  background-color: #4a4a4a;\n}\n\n.sections-container .video-section .iframe-yt {\n  margin-top: 30px;\n  position: relative;\n  padding-top: 56.25%;\n  height: 0;\n  background-color: #000000;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n\n.sections-container .video-section .iframe-yt iframe {\n  position: absolute;\n  top: 0;\n  border: none;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n}\n\n.sections-container .video-section .featured-item {\n  text-align: center;\n}\n\n.sections-container .video-section .featured-item img {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  margin-top: 40px;\n}\n\n.sections-container .progress-section {\n  background: #454545;\n  position: relative;\n  z-index: -1;\n}\n\n.sections-container .progress-section .wrap {\n  position: relative;\n  padding: 80px 15px;\n  margin: 0 auto;\n  max-width: 1440px;\n}\n\n.sections-container .progress-section .wrap .section-title {\n  font-size: 50px;\n  font-weight: 700;\n  color: #FF6C6F;\n  line-height: 1em;\n  margin-bottom: 0.5em;\n}\n\n.sections-container .progress-section .wrap .stat-sum-total {\n  font-size: 40px;\n  font-weight: 700;\n  color: #fff;\n}\n\n.sections-container .progress-section .wrap .stat-sum-label-holder {\n  font-size: 35px;\n  font-weight: 700;\n  margin-top: 30px;\n}\n\n.sections-container .progress-section .wrap .stat-sum-label-holder .stat-sum-label {\n  vertical-align: top;\n  display: inline-block;\n  width: calc(377 / 1500 * 100%);\n}\n\n.sections-container .progress-section .wrap .stat-sum-label-holder .stat-sum-label {\n  vertical-align: top;\n  display: inline-block;\n}\n\n.sections-container .progress-section .wrap .stat-sum-holder {\n  background: #ededed;\n  height: 65px;\n  margin-top: 10px;\n  border-radius: 30px;\n  position: relative;\n}\n\n.sections-container .progress-section .wrap .stat-sum-holder .stat-sum-current {\n  background: #ededed;\n  background: linear-gradient(to right, #2ce877 0, #78d896 99%);\n  height: 65px;\n  border-radius: 30px;\n}\n\n.sections-container .progress-section .wrap .stat-sum-holder .stat-sum-presale {\n  width: calc(377 / 1500 * 100%);\n  background: rgba(0, 0, 0, 0.2);\n  height: 65px;\n  border-radius: 30px 0 0 30px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n\n.sections-container .progress-section .wrap .stat-sum-legend-holder {\n  font-size: 24px;\n  font-weight: 700;\n  margin-top: 10px;\n}\n\n.sections-container .progress-section .wrap .stat-sum-legend-holder .stat-sum-label {\n  vertical-align: top;\n  display: inline-block;\n}\n\n.sections-container .progress-section .wrap .stat-sum-legend-holder .stat-sum-label .stat-sum-money {\n  font-size: 18px;\n  color: #bcbcbc;\n  margin-top: -5px;\n}\n\n.sections-container .addaps-section {\n  background-color: #454545;\n}\n\n.sections-container .addaps-section .download-addaps .pc-and-mobile {\n  text-align: center;\n  margin-bottom: 80px;\n}\n\n.sections-container .addaps-section .download-addaps .pc-and-mobile img {\n  width: 100%;\n  margin: 10px auto;\n}\n\n.sections-container .addaps-section .download-addaps .download-buttons {\n  margin: 0 -10px;\n  margin-bottom: 20px;\n}\n\n.sections-container .addaps-section .download-addaps .download-buttons .btn-app-download {\n  margin: 0 10px 10px;\n}\n\n.sections-container .addaps-section .download-addaps .btn {\n  padding: 14px 22px;\n  font-weight: 800;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  transition: all ease 0.25s;\n}\n\n.sections-container .addaps-section .download-addaps .btn:focus,\n.sections-container .addaps-section .download-addaps .btn:active:focus,\n.sections-container .addaps-section .download-addaps .btn.active:focus {\n  outline: 0;\n}\n\n.sections-container .addaps-section .download-addaps .btn-lg {\n  padding: 20px 25px;\n}\n\n.sections-container .addaps-section .download-addaps .btn-lg,\n.sections-container .addaps-section .download-addaps .btn-app-download {\n  font-size: 14px;\n  letter-spacing: 1.5px;\n}\n\n.sections-container .addaps-section .download-addaps .btn-app-download {\n  position: relative;\n  box-shadow: 0px 1px 30px 1px #373737;\n  padding: 10px 20px 10px 60px;\n  margin-right: 10px;\n  text-align: left;\n}\n\n.sections-container .addaps-section .download-addaps .app-mobile-ios {\n  background: #8f8f8f;\n  color: #fff;\n  border-radius: 100px;\n}\n\n.sections-container .addaps-section .download-addaps .app-mobile-android {\n  background-color: #8aba56;\n  color: #fff;\n  border-radius: 100px;\n}\n\n.sections-container .addaps-section .download-addaps .btn-app-download strong {\n  display: block;\n  margin-bottom: 6px;\n  opacity: 0.8;\n  font-size: 10px;\n  /*font-weight: 800;*/\n}\n\n.sections-container .addaps-section .download-addaps .btn-app-download span {\n  display: block;\n  font-size: 14px;\n  /*font-weight: 700;*/\n  letter-spacing: 0.5px;\n  margin-top: -3px;\n  opacity: 1;\n}\n\n.sections-container .addaps-section .download-addaps .btn-app-download i {\n  position: absolute;\n  top: 50%;\n  transform: translate(40%, -100%);\n  left: 0;\n  margin: 10px 0 0 15px;\n  font-size: 20px;\n  line-height: 1;\n}\n\n.sections-container .addaps-section .download-addaps .btn-black {\n  background-color: #222222;\n  color: #ffffff;\n}\n\n.sections-container .addaps-section .download-addaps .btn-black:focus,\n.sections-container .addaps-section .download-addaps .btn-black:hover {\n  background-color: #000000;\n  color: #ffffff;\n}\n\n.sections-container .addaps-section .download-addaps .btn-ios {\n  border-radius: 100px;\n  background-color: #777777;\n  color: #ffffff;\n}\n\n.sections-container .addaps-section .download-addaps .btn-ios:focus,\n.sections-container .addaps-section .download-addaps .btn-ios:hover,\n.sections-container .addaps-section .download-addaps .app-mobile-ios:hover {\n  background-color: #999;\n  color: #ffffff;\n}\n\n.sections-container .addaps-section .download-addaps .btn-android {\n  background-color: #a4c639;\n  color: #ffffff;\n}\n\n.sections-container .addaps-section .download-addaps .btn-android:focus,\n.sections-container .addaps-section .download-addaps .btn-android:hover,\n.sections-container .addaps-section .download-addaps .app-mobile-android:hover {\n  background-color: #8bad20;\n  color: #ffffff;\n}\n\n.sections-container .addaps-section .download-addaps .btn-windows-phone {\n  border-radius: 100px;\n  background-color: #777777;\n  color: #ffffff;\n}\n\n.sections-container .addaps-section .download-addaps .btn-windows-phone:focus,\n.sections-container .addaps-section .download-addaps .btn-windows-phone:hover {\n  background-color: #999;\n  color: #ffffff;\n}\n\n@media (max-width: 767px) {\n  .sections-container .addaps-section .desktop {\n    display: none;\n  }\n}\n\n.sections-container .allocation-section {\n  background-color: #4a4a4a;\n}\n\n.sections-container .allocation-section .image {\n  margin-bottom: 40px;\n}\n\n.sections-container .allocation-section .image img {\n  width: 100%;\n}\n\n.sections-container .allocation-section .text {\n  font-size: 20px;\n  text-align: center;\n}\n\n.sections-container .ico-section {\n  background-color: #4a4a4a;\n}\n\n.sections-container .ico-section .slogan {\n  font-size: 20px;\n}\n\n.sections-container .ico-section .options {\n  list-style: none;\n  box-shadow: 0 10px 80px 1px #333;\n  color: #fff;\n  padding: 0;\n  margin: 40px 0;\n  background: #373737;\n  padding: 20px;\n}\n\n.sections-container .ico-section .options .more {\n  margin-left: 16px;\n}\n\n.sections-container .ico-section .options li {\n  padding-left: 1.3em;\n  color: #ccc;\n  font-size: 20px;\n  margin: 20px 0;\n}\n\n.sections-container .ico-section .options li:before {\n  content: \"\\F00C\";\n  /* FontAwesome Unicode */\n  font-family: FontAwesome;\n  display: inline-block;\n  color: #FF6C6F;\n  font-size: 16px;\n  margin-left: -1.3em;\n  /* same as padding-left set on li */\n  width: 2em;\n  /* same as padding-left set on li */\n}\n\n.sections-container .ico-section .new-sections {\n  margin-top: 40px;\n}\n\n.sections-container .ico-section .new-sections .coins-img {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  left: 100%;\n  top: 70%;\n}\n\n.sections-container .ico-section .new-sections .ico-list {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.sections-container .ico-section .new-sections .ico-list .ico-list-item {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  position: relative;\n  padding-left: 50px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  min-height: 60px;\n}\n\n.sections-container .ico-section .new-sections .ico-list .ico-list-item .general_img {\n  position: absolute;\n  top: -5px;\n  left: 0;\n  margin-left: 15px;\n}\n\n.sections-container .ico-section .new-sections .ico-list .ico-list-item .general_img img {\n  width: 20px;\n  height: 20px;\n}\n\n@media (max-width: 767px) {\n  .sections-container .ico-section .coins-img {\n    display: none;\n  }\n}\n\n.sections-container .company-section {\n  background-color: #373737;\n}\n\n.sections-container .company-section .text {\n  font-size: 20px;\n  text-align: justify;\n}\n\n.sections-container .roadmap-section {\n  background-color: #454545;\n}\n\n.sections-container .roadmap-section .timeline {\n  margin-bottom: 50px;\n  position: relative;\n}\n\n.sections-container .roadmap-section .timeline .roadmap-list .roadmap-list-item {\n  margin-top: 40px;\n  padding: 2px;\n  left: -4%;\n  border-radius: 12px;\n  background: linear-gradient(90deg, #ff6c6f, #464646);\n}\n\n.sections-container .roadmap-section .timeline .roadmap-list .roadmap-list-item p {\n  border-radius: 12px;\n  background: #464646;\n  padding: 20px;\n  padding-left: 80px;\n}\n\n.sections-container .roadmap-section .timeline .roadmap-list .roadmap-list-item .history-separator-l {\n  align-items: center;\n  z-index: 3;\n  width: 30px;\n  height: 30px;\n  border: 2px solid #777;\n  position: absolute;\n  left: 8.2%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n}\n\n.sections-container .roadmap-section .timeline .roadmap-list .roadmap-list-item .history-separator-l:before {\n  content: '';\n  background: linear-gradient(315deg, #FF946C, #ff6c6f);\n  width: 18px;\n  top: 4px;\n  left: 4px;\n  z-index: 2;\n  border-radius: 50%;\n  position: absolute;\n  height: 18px;\n}\n\n.sections-container .roadmap-section .timeline .roadmap-list .roadmap-list-item .title {\n  padding-left: 80px;\n  color: #fff;\n  font-size: 15px;\n}\n\n.sections-container .roadmap-section .timeline .roadmap-list .roadmap-list-item-l {\n  margin-top: 40px;\n  padding: 2px;\n  left: 4%;\n  border-radius: 12px;\n  background: linear-gradient(270deg, #ff6c6f, #464646);\n}\n\n.sections-container .roadmap-section .timeline .roadmap-list .roadmap-list-item-l p {\n  border-radius: 12px;\n  background: #464646;\n  padding: 20px;\n  padding-right: 80px;\n  padding-left: 20px;\n}\n\n.sections-container .roadmap-section .timeline .roadmap-list .roadmap-list-item-l .history-separator-r {\n  align-items: center;\n  z-index: 3;\n  width: 30px;\n  height: 30px;\n  border: 2px solid #777;\n  position: absolute;\n  left: 92.2%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n}\n\n.sections-container .roadmap-section .timeline .roadmap-list .roadmap-list-item-l .history-separator-r:before {\n  content: '';\n  background: linear-gradient(315deg, #FF946C, #ff6c6f);\n  width: 18px;\n  top: 4px;\n  left: 4px;\n  z-index: 2;\n  border-radius: 50%;\n  position: absolute;\n  height: 18px;\n}\n\n.sections-container .roadmap-section .timeline .roadmap-list .roadmap-list-item-l .title {\n  padding-left: 20px;\n  color: #fff;\n  font-size: 15px;\n}\n\n.sections-container .roadmap-section .timeline:before {\n  z-index: 1;\n  content: '';\n  left: 50%;\n  position: absolute;\n  top: 2%;\n  height: 100%;\n  width: 2px;\n  background-image: linear-gradient(180deg, rgba(255, 148, 108, 0.2), #ff6c6f);\n}\n\n@media (max-width: 767px) {\n  .sections-container .roadmap-section .timeline:before {\n    left: 4%;\n  }\n\n  .sections-container .roadmap-section .timeline .roadmap-list .title {\n    padding-left: 60px !important;\n  }\n\n  .sections-container .roadmap-section .timeline .roadmap-list-item {\n    left: 0 !important;\n  }\n\n  .sections-container .roadmap-section .timeline .roadmap-list-item p {\n    padding-left: 60px !important;\n  }\n\n  .sections-container .roadmap-section .timeline .roadmap-list-item .history-separator-l {\n    left: 8% !important;\n  }\n\n  .sections-container .roadmap-section .timeline .roadmap-list-item-l {\n    left: 0 !important;\n    background: linear-gradient(90deg, #ff6c6f, #464646) !important;\n  }\n\n  .sections-container .roadmap-section .timeline .roadmap-list-item-l p {\n    padding-right: 0px !important;\n    padding-left: 60px !important;\n  }\n\n  .sections-container .roadmap-section .timeline .roadmap-list-item-l .history-separator-r {\n    left: 8% !important;\n  }\n}\n\n.sections-container .token-section {\n  background-color: #4a4a4a;\n}\n\n.sections-container .token-section .token-list {\n  position: relative;\n}\n\n.sections-container .token-section .token-list .coins-img {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  left: 80%;\n  top: 70%;\n}\n\n.sections-container .token-section .token-list .token-list-item {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  position: relative;\n  min-height: 60px;\n}\n\n.sections-container .token-section .token-list .token-list-item .number {\n  margin-top: 20px;\n  font-size: 35px;\n}\n\n@media (max-width: 767px) {\n  .sections-container .token-section .token-list .coins-img {\n    display: none;\n  }\n}\n\n.sections-container .token-section .docu-downloads {\n  margin-top: 50px;\n}\n\n.sections-container .token-section .docu-downloads .bt-docu-downloads {\n  color: #fff;\n  cursor: pointer;\n  border: 1px solid #fff;\n  padding: 8px 40px;\n  border-radius: 100px;\n}\n\n.sections-container .join-section {\n  background-color: #373737;\n}\n\n.sections-container .join-section .section-heading:after {\n  left: 50%;\n  margin-left: -60px;\n  position: absolute;\n  width: 120px !important;\n}\n\n.sections-container .join-section .ico .btn-app-open .last-update,\n.sections-container .join-section .ico .btn-app-filled .last-update {\n  position: absolute;\n  right: 0;\n  font-size: 8px;\n  bottom: -42px;\n}\n\n.sections-container .join-section .ico .terms {\n  color: #fff;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.sections-container .join-section .ico .terms:hover {\n  color: #FF6C6F;\n}\n\n.sections-container .team-section {\n  background-color: #454545;\n}\n\n.sections-container .team-section p {\n  font-size: 20px;\n}\n\n.sections-container .team-section .team-list {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.sections-container .team-section .team-list .title {\n  margin-top: 25px;\n  margin-bottom: 30px;\n  font-size: 26px;\n  color: #ccc;\n}\n\n.sections-container .team-section .team-list .team-list-item {\n  margin-bottom: 50px;\n}\n\n.sections-container .team-section .team-list .team-list-item .contain {\n  width: 100%;\n  box-shadow: 0 3px 18px 0 #333333;\n}\n\n.sections-container .team-section .team-list .team-list-item .contain .about {\n  display: flex;\n  justify-content: space-between;\n}\n\n.sections-container .team-section .team-list .team-list-item .contain .about .nameBlock .name {\n  font-size: 16px;\n  color: #fff;\n  margin: 10px 0 0px 10px;\n}\n\n.sections-container .team-section .team-list .team-list-item .contain .about .nameBlock .office {\n  padding-left: 10px;\n  color: #ff6c6f;\n  font-size: 15px;\n  line-height: 18px;\n  max-width: 200px;\n}\n\n.sections-container .team-section .team-list .team-list-item .contain .about .social {\n  cursor: pointer;\n  margin-right: 10px;\n  margin-top: 10px;\n  height: 30px;\n  width: 30px;\n  background: #53667b;\n  border-radius: 100px;\n}\n\n.sections-container .team-section .team-list .team-list-item .contain .about .social i {\n  margin-left: 8px;\n  margin-top: 6px;\n  color: #fff;\n}\n\n.sections-container .team-section .team-list .team-list-item .contain .about .social:hover {\n  background: #0e76a8;\n}\n\n.sections-container .team-section .team-list .team-list-item .contain .img {\n  background-size: cover;\n  background-position: center;\n  height: 250px;\n}\n\n.sections-container .team-section .team-list .team-list-item .contain p {\n  padding: 10px;\n  text-align: left;\n  line-height: 22px;\n  font-size: 14px;\n}\n\n.sections-container .team-section .team-list .team-list-item .contain p a {\n  cursor: pointer;\n  color: #FF6C6F;\n  margin-left: 8px;\n  text-decoration: none;\n}\n\n.sections-container .team-section .team-list .team-list-item .contain p a i {\n  color: #FF6C6F;\n}\n\n.sections-container .team-section .team-list .team-list-item .plus {\n  width: 100%;\n  height: 529px;\n  background: linear-gradient(178deg, #ff6c6f, #FF946C);\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n\n.sections-container .team-section .team-list .team-list-item .plus a {\n  justify-content: center;\n  align-items: center;\n  font-size: 26px;\n  color: #fff;\n  text-decoration: none;\n}\n\n@media (max-width: 767px) {\n  .sections-container .team-section .team-list-item .img {\n    height: 300px !important;\n  }\n}\n\n.sections-container .press-section {\n  background-color: #4a4a4a;\n}\n\n.sections-container .press-section .press-list .item {\n  text-align: center;\n}\n\n.sections-container .press-section .press-list .item img {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n  width: 80%;\n  height: 100px;\n  margin-top: 30px;\n}\n\n.sections-container .press-section .press-list .featured-item {\n  text-align: center;\n}\n\n.sections-container .press-section .press-list .featured-item img {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n  width: 93%;\n  margin: 10px auto;\n}\n\n.sections-container .press-section .press-youtube {\n  margin-top: 30px;\n}\n\n.sections-container .press-section .press-youtube img {\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n}\n\n.sections-container .press-section .press-youtube .iframe-yt {\n  margin-top: 30px;\n  position: relative;\n  padding-top: 56.25%;\n  height: 0;\n  background-color: #000000;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n\n.sections-container .press-section .press-youtube .iframe-yt iframe {\n  position: absolute;\n  top: 0;\n  border: none;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n}\n\n.sections-container .footer-section {\n  border-top: none !important;\n  padding: 0 !important;\n  color: #cccccc;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n  background: #323232;\n}\n\n.sections-container .footer-section header {\n  background-color: #323232 !important;\n}\n\n.sections-container .footer-section header .navbar {\n  margin-bottom: 0px;\n  border: none !important;\n}\n\n.sections-container .footer-section header .navbar-default {\n  background: none;\n}\n\n.sections-container .footer-section .navbar-footer-menu {\n  background-color: none !important;\n  border: none !important;\n}\n\n.sections-container .footer-section .navbar-footer-menu .footer-border {\n  border-top: 0.5px solid #424242 !important;\n}\n\n.sections-container .footer-section .navbar-footer-menu .footer-border .copyright_with_menu {\n  padding-top: 15px !important;\n}\n\n.sections-container .footer-section .background-overlay {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 1;\n}\n\n.sections-container .footer-section .container {\n  position: relative;\n}\n\n.sections-container .footer-section .container img {\n  height: 100px;\n  margin-bottom: 50px;\n}\n\n.sections-container .contact-toggle {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  margin-left: -45px;\n  border-radius: 0 0 90px 90px;\n  height: 45px;\n  width: 90px;\n  padding: 4px 0 11px;\n  font-size: 24px;\n  line-height: 30px;\n  background-color: #f0f0f0;\n  color: #777777;\n  text-align: center;\n}\n\n.sections-container .contact-toggle:focus,\n.sections-container .contact-toggle:hover {\n  color: #444444;\n}\n\n.sections-container .footer-section .download-buttons {\n  margin: 0 -10px;\n  margin-bottom: 70px;\n}\n\n.sections-container .footer-section .download-buttons .btn-app-download {\n  margin: 0 10px 10px;\n}\n\n.sections-container .social-media-links {\n  margin: 0;\n  margin-bottom: 50px;\n  padding: 0;\n  list-style: none;\n}\n\n.sections-container .social-media-links li {\n  display: inline-block;\n  margin-left: 10px;\n}\n\n.sections-container .social-media-links li:first-child {\n  margin-left: 0;\n}\n\n.sections-container .social-media-links li i {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  font-size: 20px;\n  line-height: 40px;\n  text-align: center;\n  color: #ffffff;\n}\n\n.sections-container .social-media-links li a:hover {\n  background-color: #FF6C6F;\n}\n\n.sections-container .social-media-links li a {\n  display: inline-block;\n  border-radius: 50%;\n  background-color: #cccccc;\n  background-color: rgba(0, 0, 0, 0.15);\n  font-weight: normal;\n  color: #777777;\n}\n\n.sections-container .footer-text {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.sections-container .footer-text li {\n  display: inline-block;\n  margin-left: 10px;\n}\n\n.sections-container .footer-text li:first-child {\n  margin-left: 0;\n}\n\n.sections-container .copyright {\n  border-top: 1px solid #eeeeee;\n  padding-top: 25px;\n  text-align: center;\n}\n\n.sections-container .copyright a {\n  font-weight: normal;\n  color: #cccccc;\n}\n\n.sections-container .copyright a:focus,\n.sections-container .copyright a:hover {\n  color: #777777;\n}\n\n.sections-container .contact-section .d-buttons a {\n  font-weight: normal;\n  color: #fff;\n}\n\nhtml {\n  height: 100% !important;\n}\n\nbody {\n  height: 100%;\n  font-family: AvenirNextUltrafina;\n  font-size: 16px;\n  overflow-x: hidden;\n  line-height: 28px;\n  background-color: #ffffff;\n  color: #ccc;\n}\n\n.modal .modal-dialog {\n  width: auto;\n  margin: 0 !important;\n  right: 30px;\n  top: 30px;\n  position: absolute;\n}\n\n.modal .modal-dialog .modal-content {\n  box-shadow: none;\n  display: flex;\n  border: none;\n  background: #373737;\n  border-radius: 0;\n}\n\n.modal .modal-dialog .modal-content .modal-body {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.modal .modal-dialog .modal-content .modal-body p {\n  color: #fff;\n  font-size: 20px;\n  margin-left: 10px;\n  margin-bottom: 0px;\n  margin-right: 20px;\n}\n\n.modal .modal-dialog .modal-content .modal-body a {\n  background: #fff;\n  /* position: relative; */\n  padding: 10px;\n  border-radius: 100%;\n  width: 50px;\n  height: 50px;\n}\n\n.modal .modal-dialog .modal-content .modal-body a i {\n  font-size: 30px;\n  color: #FF6C6F;\n}\n\n.modal .modal-dialog .modal-content .modal-body .close {\n  opacity: 1;\n  color: #fff;\n  font-size: 26px;\n}\n\n@media (max-width: 767px) {\n  .modal .modal-dialog {\n    width: 100%;\n    left: 0;\n    right: auto;\n    top: auto;\n    bottom: 0;\n    position: absolute;\n  }\n\n  .modal .modal-dialog .modal-content {\n    border: none;\n  }\n\n  .modal .modal-dialog .modal-content .modal-body {\n    padding: 10px;\n  }\n\n  .modal .modal-dialog .modal-content .modal-body p {\n    margin-right: 10px;\n    font-size: 16px;\n  }\n}\n\n#root {\n  height: 100%;\n  position: relative;\n}\n\n#root [data-reactroot] {\n  height: 100%;\n  position: relative;\n}\n\n.typeform-popup .typeform-popup-overlay {\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.typeform-popup .typeform-popup-wrapper.typeform-popup-mode-popup {\n  width: calc(100vw - 50%);\n  height: calc(100vh - 20%);\n  top: 10%;\n  left: 25%;\n}\n\n@media (max-width: 767px) {\n  #root {\n    height: auto;\n  }\n\n  .typeform-popup .typeform-popup-wrapper.typeform-popup-mode-popup {\n    width: calc(100vw - 80px);\n    height: calc(100vh - 80px);\n    top: 40px;\n    left: 40px;\n  }\n}", ""]);

// exports


/***/ }),
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(13), RootInstanceProvider = __webpack_require__(14), ReactMount = __webpack_require__(10), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _app = __webpack_require__(245);

var _app2 = _interopRequireDefault(_app);

var _store = __webpack_require__(863);

var _store2 = _interopRequireDefault(_store);

var _reactDom = __webpack_require__(135);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Provider = __webpack_require__(568).Provider;

var app = document.getElementById("root");

_reactDom2.default.render(_react2.default.createElement(
    Provider,
    { store: _store2.default },
    _react2.default.createElement(_app2.default, null)
), app);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(15); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }),
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(13), RootInstanceProvider = __webpack_require__(14), ReactMount = __webpack_require__(10), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Translations = __webpack_require__(614);

var _Translations2 = _interopRequireDefault(_Translations);

var _TopBar = __webpack_require__(246);

var _TopBar2 = _interopRequireDefault(_TopBar);

var _Home = __webpack_require__(248);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactRedux = __webpack_require__(568);

var actions = __webpack_require__(862);
//import Footer from './components/Footer'

__webpack_require__(536);

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var content = this.props.content;
            var switchLanguage = this.props.switchLanguage;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_TopBar2.default, { data: content.page.topBar }),
                _react2.default.createElement(_Translations2.default, { switchLanguage: switchLanguage }),
                _react2.default.createElement(_Home2.default, { data: content.page.home })
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = ReactRedux.connect(function (state) {
    return { content: state.content };
}, function (dispatch) {
    return {
        switchLanguage: function switchLanguage(lang) {
            return dispatch(actions.switchLanguage(lang));
        }
    };
})(App);
;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(15); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }),
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(579);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 541 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 542 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 543 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(894),
    getValue = __webpack_require__(897);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 544 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(545),
    getRawTag = __webpack_require__(857),
    objectToString = __webpack_require__(858);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 545 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(540);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 546 */
/***/ (function(module, exports, __webpack_require__) {

var Emitter = __webpack_require__(872);

if (!Object.create) {
  Object.create = __webpack_require__(873);
}

var SCEmitter = function () {
  Emitter.call(this);
};

SCEmitter.prototype = Object.create(Emitter.prototype);

SCEmitter.prototype.emit = function (event) {
  if (event == 'error') {

    // To work with sc-domain.
    // See https://github.com/SocketCluster/sc-domain
    var domainErrorArgs = ['__domainError'];
    if (arguments[1] !== undefined) {
      domainErrorArgs.push(arguments[1]);
    }

    Emitter.prototype.emit.apply(this, domainErrorArgs);

    if (this.domain) {
      // Emit the error on the domain if it has one.
      // See https://github.com/joyent/node/blob/ef4344311e19a4f73c031508252b21712b22fe8a/lib/events.js#L78-85

      var err = arguments[1];

      if (!err) {
        err = new Error('Uncaught, unspecified "error" event.');
      }
      err.domainEmitter = this;
      err.domain = this.domain;
      err.domainThrown = false;
      this.domain.emit('error', err);
    }
  }
  Emitter.prototype.emit.apply(this, arguments);
};

module.exports.SCEmitter = SCEmitter;


/***/ }),
/* 547 */
/***/ (function(module, exports, __webpack_require__) {

var decycle = __webpack_require__(875);

var isStrict = (function () { return !this; })();

function AuthTokenExpiredError(message, expiry) {
  this.name = 'AuthTokenExpiredError';
  this.message = message;
  this.expiry = expiry;
  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = (new Error()).stack;
  }
}
AuthTokenExpiredError.prototype = Object.create(Error.prototype);


function AuthTokenInvalidError(message) {
  this.name = 'AuthTokenInvalidError';
  this.message = message;
  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = (new Error()).stack;
  }
}
AuthTokenInvalidError.prototype = Object.create(Error.prototype);


function AuthTokenNotBeforeError(message, date) {
  this.name = 'AuthTokenNotBeforeError';
  this.message = message;
  this.date = date;
  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = (new Error()).stack;
  }
}
AuthTokenNotBeforeError.prototype = Object.create(Error.prototype);


// For any other auth token error.
function AuthTokenError(message) {
  this.name = 'AuthTokenError';
  this.message = message;
  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = (new Error()).stack;
  }
}
AuthTokenError.prototype = Object.create(Error.prototype);


function SilentMiddlewareBlockedError(message, type) {
  this.name = 'SilentMiddlewareBlockedError';
  this.message = message;
  this.type = type;
  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = (new Error()).stack;
  }
}
SilentMiddlewareBlockedError.prototype = Object.create(Error.prototype);


function InvalidActionError(message) {
  this.name = 'InvalidActionError';
  this.message = message;
  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = (new Error()).stack;
  }
}
InvalidActionError.prototype = Object.create(Error.prototype);

function InvalidArgumentsError(message) {
  this.name = 'InvalidArgumentsError';
  this.message = message;
  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = (new Error()).stack;
  }
}
InvalidArgumentsError.prototype = Object.create(Error.prototype);

function InvalidOptionsError(message) {
  this.name = 'InvalidOptionsError';
  this.message = message;
  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = (new Error()).stack;
  }
}
InvalidOptionsError.prototype = Object.create(Error.prototype);


function InvalidMessageError(message) {
  this.name = 'InvalidMessageError';
  this.message = message;
  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = (new Error()).stack;
  }
}
InvalidMessageError.prototype = Object.create(Error.prototype);


function SocketProtocolError(message, code) {
  this.name = 'SocketProtocolError';
  this.message = message;
  this.code = code;
  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = (new Error()).stack;
  }
}
SocketProtocolError.prototype = Object.create(Error.prototype);


function ServerProtocolError(message) {
  this.name = 'ServerProtocolError';
  this.message = message;
  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = (new Error()).stack;
  }
}
ServerProtocolError.prototype = Object.create(Error.prototype);

function HTTPServerError(message) {
  this.name = 'HTTPServerError';
  this.message = message;
  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = (new Error()).stack;
  }
}
HTTPServerError.prototype = Object.create(Error.prototype);


function ResourceLimitError(message) {
  this.name = 'ResourceLimitError';
  this.message = message;
  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = (new Error()).stack;
  }
}
ResourceLimitError.prototype = Object.create(Error.prototype);


function TimeoutError(message) {
  this.name = 'TimeoutError';
  this.message = message;
  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = (new Error()).stack;
  }
}
TimeoutError.prototype = Object.create(Error.prototype);


function BadConnectionError(message, type) {
  this.name = 'BadConnectionError';
  this.message = message;
  this.type = type;
  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = (new Error()).stack;
  }
}
BadConnectionError.prototype = Object.create(Error.prototype);


function BrokerError(message) {
  this.name = 'BrokerError';
  this.message = message;
  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = (new Error()).stack;
  }
}
BrokerError.prototype = Object.create(Error.prototype);


function ProcessExitError(message, code) {
  this.name = 'ProcessExitError';
  this.message = message;
  this.code = code;
  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = (new Error()).stack;
  }
}
ProcessExitError.prototype = Object.create(Error.prototype);


function UnknownError(message) {
  this.name = 'UnknownError';
  this.message = message;
  if (Error.captureStackTrace && !isStrict) {
    Error.captureStackTrace(this, arguments.callee);
  } else {
    this.stack = (new Error()).stack;
  }
}
UnknownError.prototype = Object.create(Error.prototype);


// Expose all error types

module.exports = {
  AuthTokenExpiredError: AuthTokenExpiredError,
  AuthTokenInvalidError: AuthTokenInvalidError,
  AuthTokenNotBeforeError: AuthTokenNotBeforeError,
  AuthTokenError: AuthTokenError,
  SilentMiddlewareBlockedError: SilentMiddlewareBlockedError,
  InvalidActionError: InvalidActionError,
  InvalidArgumentsError: InvalidArgumentsError,
  InvalidOptionsError: InvalidOptionsError,
  InvalidMessageError: InvalidMessageError,
  SocketProtocolError: SocketProtocolError,
  ServerProtocolError: ServerProtocolError,
  HTTPServerError: HTTPServerError,
  ResourceLimitError: ResourceLimitError,
  TimeoutError: TimeoutError,
  BadConnectionError: BadConnectionError,
  BrokerError: BrokerError,
  ProcessExitError: ProcessExitError,
  UnknownError: UnknownError
};

module.exports.socketProtocolErrorStatuses = {
  1001: 'Socket was disconnected',
  1002: 'A WebSocket protocol error was encountered',
  1003: 'Server terminated socket because it received invalid data',
  1005: 'Socket closed without status code',
  1006: 'Socket hung up',
  1007: 'Message format was incorrect',
  1008: 'Encountered a policy violation',
  1009: 'Message was too big to process',
  1010: 'Client ended the connection because the server did not comply with extension requirements',
  1011: 'Server encountered an unexpected fatal condition',
  4000: 'Server ping timed out',
  4001: 'Client pong timed out',
  4002: 'Server failed to sign auth token',
  4003: 'Failed to complete handshake',
  4004: 'Client failed to save auth token',
  4005: 'Did not receive #handshake from client before timeout',
  4006: 'Failed to bind socket to message broker',
  4007: 'Client connection establishment timed out'
};

module.exports.socketProtocolIgnoreStatuses = {
  1000: 'Socket closed normally',
  1001: 'Socket hung up'
};

// Properties related to error domains cannot be serialized.
var unserializableErrorProperties = {
  domain: 1,
  domainEmitter: 1,
  domainThrown: 1
};

module.exports.dehydrateError = function (error, includeStackTrace) {
  var dehydratedError;

  if (error && typeof error == 'object') {
    dehydratedError = {
      message: error.message
    };
    if (includeStackTrace) {
      dehydratedError.stack = error.stack;
    }
    for (var i in error) {
      if (!unserializableErrorProperties[i]) {
        dehydratedError[i] = error[i];
      }
    }
  } else if (typeof error == 'function') {
    dehydratedError = '[function ' + (error.name || 'anonymous') + ']';
  } else {
    dehydratedError = error;
  }

  return decycle(dehydratedError);
};

module.exports.hydrateError = function (error) {
  var hydratedError = null;
  if (error != null) {
    if (typeof error == 'object') {
      hydratedError = new Error(error.message);
      for (var i in error) {
        if (error.hasOwnProperty(i)) {
          hydratedError[i] = error[i];
        }
      }
    } else {
      hydratedError = error;
    }
  }
  return hydratedError;
};

module.exports.decycle = decycle;


/***/ }),
/* 548 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(543);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 549 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(902),
    listCacheDelete = __webpack_require__(903),
    listCacheGet = __webpack_require__(904),
    listCacheHas = __webpack_require__(905),
    listCacheSet = __webpack_require__(906);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(591);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(908);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(936);

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

module.exports = {
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),
/* 553 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(566);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(537)(undefined);
// imports


// module
exports.push([module.i, ".flag-select {\n  position: relative;\n  display: inline-block;\n  vertical-align: inherit;\n  padding-bottom: 5px;\n  color: #4d4d4d;\n  text-align: left;\n}\n\n.flag-select img {\n  width: 1.3em;\n  height: 1.3em;\n  position: relative;\n  top: 0.3em;\n}\n\n.flag-select .selected--flag--option {\n  cursor: pointer;\n  padding: 0 8px;\n}\n\n.flag-select .selected--flag--option:before {\n  content: ' ';\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 999;\n}\n\n.flag-select .selected--flag--option .country-label {\n  padding-left: 9px;\n}\n\n.flag-select .country-flag {\n  cursor: pointer;\n}\n\n.flag-select .country-flag .country-label {\n  font-size: 1em;\n  position: relative;\n}\n\n.flag-select .flag-options {\n  position: absolute;\n  z-index: 999999;\n  border: 1px solid #bdbbbb;\n  border-radius: 3px;\n  background: #ffffff;\n  margin-top: 8px;\n  padding: 8px 0;\n  max-height: 160px;\n  overflow: auto;\n}\n\n.flag-select .flag-options.to--left {\n  right: 10px;\n}\n\n.flag-select .flag-option {\n  cursor: pointer;\n  padding: 0px 8px 3px 8px;\n  margin: 4px 0;\n  white-space: nowrap;\n}\n\n.flag-select .flag-option.has-label {\n  padding: 0px 20px 3px 8px;\n}\n\n.flag-select .flag-option:hover {\n  background: #eaeaea;\n}\n\n.flag-select .flag-option .country-label {\n  padding: 0 9px;\n}\n\n.flag-select .arrow-down {\n  color: #4d4d4d;\n  padding: 2px;\n}\n\n.flag-select .hidden {\n  display: none;\n}\n\n.flag-select .no--focus {\n  pointer-events: none;\n}", ""]);

// exports


/***/ }),
/* 555 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(556),
    setCacheAdd = __webpack_require__(912),
    setCacheHas = __webpack_require__(913);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 556 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(891),
    mapCacheDelete = __webpack_require__(907),
    mapCacheGet = __webpack_require__(909),
    mapCacheHas = __webpack_require__(910),
    mapCacheSet = __webpack_require__(911);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 557 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 558 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(543),
    root = __webpack_require__(540);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 559 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 560 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(919),
    isObjectLike = __webpack_require__(542);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 561 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 562 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 563 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 564 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(951),
    baseKeys = __webpack_require__(956),
    isArrayLike = __webpack_require__(601);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 565 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(541),
    isSymbol = __webpack_require__(566);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 566 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(544),
    isObjectLike = __webpack_require__(542);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 567 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ad.svg": 617,
	"./ae.svg": 618,
	"./af.svg": 619,
	"./ag.svg": 620,
	"./ai.svg": 621,
	"./al.svg": 622,
	"./am.svg": 623,
	"./ao.svg": 624,
	"./ar.svg": 625,
	"./as.svg": 626,
	"./at.svg": 627,
	"./au.svg": 628,
	"./aw.svg": 629,
	"./az.svg": 630,
	"./ba.svg": 631,
	"./bb.svg": 632,
	"./bd.svg": 633,
	"./be.svg": 634,
	"./bf.svg": 635,
	"./bg.svg": 636,
	"./bh.svg": 637,
	"./bi.svg": 638,
	"./bj.svg": 639,
	"./bm.svg": 640,
	"./bo.svg": 641,
	"./br.svg": 642,
	"./bs.svg": 643,
	"./bt.svg": 644,
	"./bw.svg": 645,
	"./by.svg": 646,
	"./bz.svg": 647,
	"./ca.svg": 648,
	"./cd.svg": 649,
	"./cf.svg": 650,
	"./cg.svg": 651,
	"./ch.svg": 652,
	"./ci.svg": 653,
	"./ck.svg": 654,
	"./cl.svg": 655,
	"./cm.svg": 656,
	"./cn.svg": 657,
	"./co.svg": 658,
	"./cr.svg": 659,
	"./cu.svg": 660,
	"./cv.svg": 661,
	"./cw.svg": 662,
	"./cy.svg": 663,
	"./cz.svg": 664,
	"./de.svg": 665,
	"./dj.svg": 666,
	"./dk.svg": 667,
	"./dm.svg": 668,
	"./do.svg": 669,
	"./dz.svg": 670,
	"./ec.svg": 671,
	"./ee.svg": 672,
	"./eg.svg": 673,
	"./er.svg": 674,
	"./es.svg": 675,
	"./et.svg": 676,
	"./fi.svg": 677,
	"./fj.svg": 678,
	"./fk.svg": 679,
	"./fm.svg": 680,
	"./fo.svg": 681,
	"./fr.svg": 682,
	"./ga.svg": 683,
	"./gb.svg": 684,
	"./gd.svg": 685,
	"./ge.svg": 686,
	"./gg.svg": 687,
	"./gh.svg": 688,
	"./gi.svg": 689,
	"./gl.svg": 690,
	"./gm.svg": 691,
	"./gn.svg": 692,
	"./gq.svg": 693,
	"./gr.svg": 694,
	"./gt.svg": 695,
	"./gu.svg": 696,
	"./gw.svg": 697,
	"./hk.svg": 698,
	"./hn.svg": 699,
	"./hr.svg": 700,
	"./ht.svg": 701,
	"./hu.svg": 702,
	"./id.svg": 703,
	"./ie.svg": 704,
	"./il.svg": 705,
	"./im.svg": 706,
	"./in.svg": 707,
	"./io.svg": 708,
	"./iq.svg": 709,
	"./ir.svg": 710,
	"./is.svg": 711,
	"./it.svg": 712,
	"./je.svg": 713,
	"./jm.svg": 714,
	"./jo.svg": 715,
	"./jp.svg": 716,
	"./ke.svg": 717,
	"./kg.svg": 718,
	"./kh.svg": 719,
	"./ki.svg": 720,
	"./km.svg": 721,
	"./kn.svg": 722,
	"./kp.svg": 723,
	"./kr.svg": 724,
	"./kw.svg": 725,
	"./ky.svg": 726,
	"./kz.svg": 727,
	"./la.svg": 728,
	"./lb.svg": 729,
	"./li.svg": 730,
	"./lk.svg": 731,
	"./lr.svg": 732,
	"./ls.svg": 733,
	"./lt.svg": 734,
	"./lu.svg": 735,
	"./lv.svg": 736,
	"./ly.svg": 737,
	"./ma.svg": 738,
	"./mc.svg": 739,
	"./md.svg": 740,
	"./me.svg": 741,
	"./mg.svg": 742,
	"./mh.svg": 743,
	"./mk.svg": 744,
	"./ml.svg": 745,
	"./mm.svg": 746,
	"./mn.svg": 747,
	"./mo.svg": 748,
	"./mp.svg": 749,
	"./mq.svg": 750,
	"./mr.svg": 751,
	"./ms.svg": 752,
	"./mt.svg": 753,
	"./mu.svg": 754,
	"./mv.svg": 755,
	"./mw.svg": 756,
	"./mx.svg": 757,
	"./my.svg": 758,
	"./mz.svg": 759,
	"./na.svg": 760,
	"./nato.svg": 761,
	"./ne.svg": 762,
	"./nf.svg": 763,
	"./ng.svg": 764,
	"./ni.svg": 765,
	"./nl.svg": 766,
	"./no.svg": 767,
	"./np.svg": 768,
	"./nr.svg": 769,
	"./nu.svg": 770,
	"./nz.svg": 771,
	"./om.svg": 772,
	"./pa.svg": 773,
	"./pe.svg": 774,
	"./pf.svg": 775,
	"./pg.svg": 776,
	"./ph.svg": 777,
	"./pk.svg": 778,
	"./pl.svg": 779,
	"./pn.svg": 780,
	"./pr.svg": 781,
	"./ps.svg": 782,
	"./pt.svg": 783,
	"./pw.svg": 784,
	"./py.svg": 785,
	"./qa.svg": 786,
	"./ro.svg": 787,
	"./rs.svg": 788,
	"./ru.svg": 789,
	"./rw.svg": 790,
	"./sa.svg": 791,
	"./sb.svg": 792,
	"./sc.svg": 793,
	"./sd.svg": 794,
	"./se.svg": 795,
	"./sg.svg": 796,
	"./si.svg": 797,
	"./sk.svg": 798,
	"./sl.svg": 799,
	"./sm.svg": 800,
	"./sn.svg": 801,
	"./so.svg": 802,
	"./sr.svg": 803,
	"./ss.svg": 804,
	"./st.svg": 805,
	"./sv.svg": 806,
	"./sx.svg": 807,
	"./sy.svg": 808,
	"./sz.svg": 809,
	"./tc.svg": 810,
	"./td.svg": 811,
	"./tg.svg": 812,
	"./th.svg": 813,
	"./tibet.svg": 814,
	"./tj.svg": 815,
	"./tk.svg": 816,
	"./tm.svg": 817,
	"./tn.svg": 818,
	"./to.svg": 819,
	"./tr.svg": 820,
	"./tt.svg": 821,
	"./tv.svg": 822,
	"./tw.svg": 823,
	"./tz.svg": 824,
	"./ua.svg": 825,
	"./ug.svg": 826,
	"./us.svg": 827,
	"./uy.svg": 828,
	"./uz.svg": 829,
	"./ve.svg": 830,
	"./vi.svg": 831,
	"./vn.svg": 832,
	"./vu.svg": 833,
	"./ws.svg": 834,
	"./ye.svg": 835,
	"./za.svg": 836,
	"./zm.svg": 837,
	"./zw.svg": 838
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 567;

/***/ }),
/* 568 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.connect = exports.Provider = undefined;

var _Provider = __webpack_require__(840);

var _Provider2 = _interopRequireDefault(_Provider);

var _connect = __webpack_require__(841);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports.Provider = _Provider2["default"];
exports.connect = _connect2["default"];

/***/ }),
/* 569 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__(60);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _propTypes2["default"].shape({
  subscribe: _propTypes2["default"].func.isRequired,
  dispatch: _propTypes2["default"].func.isRequired,
  getState: _propTypes2["default"].func.isRequired
});

/***/ }),
/* 570 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 571 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(576);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (false) {
  warning('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}



/***/ }),
/* 572 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 573 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(844);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(851);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 574 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(845);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(852);


/***/ }),
/* 576 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 577 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 578 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(544),
    getPrototype = __webpack_require__(859),
    isObjectLike = __webpack_require__(542);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 579 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(532)))

/***/ }),
/* 580 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 581 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(13), RootInstanceProvider = __webpack_require__(14), ReactMount = __webpack_require__(10), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

module.exports = {
  SWITCH_LANGUAGE: 'SWITCH_LANGUAGE'
};

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(15); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }),
/* 582 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(583);


/***/ }),
/* 583 */
/***/ (function(module, exports, __webpack_require__) {

var cycle = __webpack_require__(866);

exports.stringify = function stringify(value, replacer, space, _options) {

  if (arguments.length < 4) {
    try {
      if (arguments.length === 1) {
        return JSON.stringify(value);
      } else {
        return JSON.stringify.apply(JSON, arguments);
      }
    } catch (e) {}
  }

  var options = _options || false;
  if (typeof options === 'boolean') {
    options = {
      'date': options,
      'function': options,
      'regex': options,
      'undefined': options,
      'error': options,
      'symbol': options,
      'map': options,
      'set': options,
      'nan': options,
      'infinity': options
    }
  }

  var decycled = cycle.decycle(value, options, replacer);
  if (arguments.length === 1) {
    return JSON.stringify(decycled);
  } else {
    return JSON.stringify(decycled, replacer, space);
  }

}

exports.parse = function parse(text, reviver) {
  var needsRetrocycle = /"\$jsan"/.test(text);
  var parsed;
  if (arguments.length === 1) {
    parsed = JSON.parse(text);
  } else {
    parsed = JSON.parse(text, reviver);
  }
  if (needsRetrocycle) {
    parsed = cycle.retrocycle(parsed);
  }
  return parsed;
}


/***/ }),
/* 584 */
/***/ (function(module, exports) {

module.exports = pathGetter;

function pathGetter(obj, path) {
  if (path !== '$') {
    var paths = getPaths(path);
    for (var i = 0; i < paths.length; i++) {
      path = paths[i].toString().replace(/\\"/g, '"');
      if (typeof obj[path] === 'undefined' && i !== paths.length - 1) continue;
      obj = obj[path];
    }
  }
  return obj;
}

function getPaths(pathString) {
  var regex = /(?:\.(\w+))|(?:\[(\d+)\])|(?:\["((?:[^\\"]|\\.)*)"\])/g;
  var matches = [];
  var match;
  while (match = regex.exec(pathString)) {
    matches.push( match[1] || match[2] || match[3] );
  }
  return matches;
}


/***/ }),
/* 585 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, Buffer) {var SCEmitter = __webpack_require__(546).SCEmitter;
var SCChannel = __webpack_require__(874).SCChannel;
var Response = __webpack_require__(587).Response;
var AuthEngine = __webpack_require__(876).AuthEngine;
var formatter = __webpack_require__(877);
var SCTransport = __webpack_require__(878).SCTransport;
var querystring = __webpack_require__(588);
var LinkedList = __webpack_require__(882);
var base64 = __webpack_require__(884);
var clone = __webpack_require__(885);

var scErrors = __webpack_require__(547);
var InvalidArgumentsError = scErrors.InvalidArgumentsError;
var InvalidMessageError = scErrors.InvalidMessageError;
var SocketProtocolError = scErrors.SocketProtocolError;
var TimeoutError = scErrors.TimeoutError;

var isBrowser = typeof window != 'undefined';


var SCSocket = function (opts) {
  var self = this;

  SCEmitter.call(this);

  this.id = null;
  this.state = this.CLOSED;
  this.authState = this.PENDING;
  this.signedAuthToken = null;
  this.authToken = null;
  this.pendingReconnect = false;
  this.pendingReconnectTimeout = null;
  this.pendingConnectCallback = false;

  this.connectTimeout = opts.connectTimeout;
  this.ackTimeout = opts.ackTimeout;
  this.channelPrefix = opts.channelPrefix || null;
  this.disconnectOnUnload = opts.disconnectOnUnload == null ? true : opts.disconnectOnUnload;

  // pingTimeout will be ackTimeout at the start, but it will
  // be updated with values provided by the 'connect' event
  this.pingTimeout = this.ackTimeout;

  var maxTimeout = Math.pow(2, 31) - 1;

  var verifyDuration = function (propertyName) {
    if (self[propertyName] > maxTimeout) {
      throw new InvalidArgumentsError('The ' + propertyName +
        ' value provided exceeded the maximum amount allowed');
    }
  };

  verifyDuration('connectTimeout');
  verifyDuration('ackTimeout');
  verifyDuration('pingTimeout');

  this._localEvents = {
    'connect': 1,
    'connectAbort': 1,
    'disconnect': 1,
    'message': 1,
    'error': 1,
    'raw': 1,
    'fail': 1,
    'kickOut': 1,
    'subscribe': 1,
    'unsubscribe': 1,
    'subscribeStateChange': 1,
    'authStateChange': 1,
    'authenticate': 1,
    'deauthenticate': 1,
    'removeAuthToken': 1,
    'subscribeRequest': 1
  };

  this.connectAttempts = 0;

  this._emitBuffer = new LinkedList();
  this._channels = {};

  this.options = opts;

  this._cid = 1;

  this.options.callIdGenerator = function () {
    return self._callIdGenerator();
  };

  if (this.options.autoReconnect) {
    if (this.options.autoReconnectOptions == null) {
      this.options.autoReconnectOptions = {};
    }

    // Add properties to the this.options.autoReconnectOptions object.
    // We assign the reference to a reconnectOptions variable to avoid repetition.
    var reconnectOptions = this.options.autoReconnectOptions;
    if (reconnectOptions.initialDelay == null) {
      reconnectOptions.initialDelay = 10000;
    }
    if (reconnectOptions.randomness == null) {
      reconnectOptions.randomness = 10000;
    }
    if (reconnectOptions.multiplier == null) {
      reconnectOptions.multiplier = 1.5;
    }
    if (reconnectOptions.maxDelay == null) {
      reconnectOptions.maxDelay = 60000;
    }
  }

  if (this.options.subscriptionRetryOptions == null) {
    this.options.subscriptionRetryOptions = {};
  }

  if (this.options.authEngine) {
    this.auth = this.options.authEngine;
  } else {
    this.auth = new AuthEngine();
  }

  if (this.options.codecEngine) {
    this.codec = this.options.codecEngine;
  } else {
    // Default codec engine
    this.codec = formatter;
  }

  this.options.path = this.options.path.replace(/\/$/, '') + '/';

  this.options.query = opts.query || {};
  if (typeof this.options.query == 'string') {
    this.options.query = querystring.parse(this.options.query);
  }

  if (this.options.autoConnect) {
    this.connect();
  }

  this._channelEmitter = new SCEmitter();

  if (isBrowser && this.disconnectOnUnload) {
    var unloadHandler = function () {
      self.disconnect();
    };

    if (global.attachEvent) {
      global.attachEvent('onunload', unloadHandler);
    } else if (global.addEventListener) {
      global.addEventListener('beforeunload', unloadHandler, false);
    }
  }
};

SCSocket.prototype = Object.create(SCEmitter.prototype);

SCSocket.CONNECTING = SCSocket.prototype.CONNECTING = SCTransport.prototype.CONNECTING;
SCSocket.OPEN = SCSocket.prototype.OPEN = SCTransport.prototype.OPEN;
SCSocket.CLOSED = SCSocket.prototype.CLOSED = SCTransport.prototype.CLOSED;

SCSocket.AUTHENTICATED = SCSocket.prototype.AUTHENTICATED = 'authenticated';
SCSocket.UNAUTHENTICATED = SCSocket.prototype.UNAUTHENTICATED = 'unauthenticated';
SCSocket.PENDING = SCSocket.prototype.PENDING = 'pending';

SCSocket.ignoreStatuses = scErrors.socketProtocolIgnoreStatuses;
SCSocket.errorStatuses = scErrors.socketProtocolErrorStatuses;

SCSocket.prototype._privateEventHandlerMap = {
  '#publish': function (data) {
    var undecoratedChannelName = this._undecorateChannelName(data.channel);
    var isSubscribed = this.isSubscribed(undecoratedChannelName, true);

    if (isSubscribed) {
      this._channelEmitter.emit(undecoratedChannelName, data.data);
    }
  },
  '#kickOut': function (data) {
    var undecoratedChannelName = this._undecorateChannelName(data.channel);
    var channel = this._channels[undecoratedChannelName];
    if (channel) {
      SCEmitter.prototype.emit.call(this, 'kickOut', data.message, undecoratedChannelName);
      channel.emit('kickOut', data.message, undecoratedChannelName);
      this._triggerChannelUnsubscribe(channel);
    }
  },
  '#setAuthToken': function (data, response) {
    var self = this;

    if (data) {
      var triggerAuthenticate = function (err) {
        if (err) {
          // This is a non-fatal error, we don't want to close the connection
          // because of this but we do want to notify the server and throw an error
          // on the client.
          response.error(err);
          self._onSCError(err);
        } else {
          self._changeToAuthenticatedState(data.token);
          response.end();
        }
      };

      this.auth.saveToken(this.options.authTokenName, data.token, {}, triggerAuthenticate);
    } else {
      response.error(new InvalidMessageError('No token data provided by #setAuthToken event'));
    }
  },
  '#removeAuthToken': function (data, response) {
    var self = this;

    this.auth.removeToken(this.options.authTokenName, function (err, oldToken) {
      if (err) {
        // Non-fatal error - Do not close the connection
        response.error(err);
        self._onSCError(err);
      } else {
        SCEmitter.prototype.emit.call(self, 'removeAuthToken', oldToken);
        self._changeToUnauthenticatedState();
        response.end();
      }
    });
  },
  '#disconnect': function (data) {
    this.transport.close(data.code, data.data);
  }
};

SCSocket.prototype._callIdGenerator = function () {
  return this._cid++;
};

SCSocket.prototype.getState = function () {
  return this.state;
};

SCSocket.prototype.getBytesReceived = function () {
  return this.transport.getBytesReceived();
};

SCSocket.prototype.deauthenticate = function (callback) {
  var self = this;

  this.auth.removeToken(this.options.authTokenName, function (err, oldToken) {
    if (err) {
      // Non-fatal error - Do not close the connection
      self._onSCError(err);
    } else {
      self.emit('#removeAuthToken');
      SCEmitter.prototype.emit.call(self, 'removeAuthToken', oldToken);
      self._changeToUnauthenticatedState();
    }
    callback && callback(err);
  });
};

SCSocket.prototype.connect = SCSocket.prototype.open = function () {
  var self = this;

  if (this.state == this.CLOSED) {
    this.pendingReconnect = false;
    this.pendingReconnectTimeout = null;
    clearTimeout(this._reconnectTimeoutRef);

    this.state = this.CONNECTING;
    SCEmitter.prototype.emit.call(this, 'connecting');

    this._changeToPendingAuthState();

    if (this.transport) {
      this.transport.off();
    }

    this.transport = new SCTransport(this.auth, this.codec, this.options);

    this.transport.on('open', function (status) {
      self.state = self.OPEN;
      self._onSCOpen(status);
    });

    this.transport.on('error', function (err) {
      self._onSCError(err);
    });

    this.transport.on('close', function (code, data) {
      self.state = self.CLOSED;
      self._onSCClose(code, data);
    });

    this.transport.on('openAbort', function (code, data) {
      self.state = self.CLOSED;
      self._onSCClose(code, data, true);
    });

    this.transport.on('event', function (event, data, res) {
      self._onSCEvent(event, data, res);
    });
  }
};

SCSocket.prototype.reconnect = function () {
  this.disconnect();
  this.connect();
};

SCSocket.prototype.disconnect = function (code, data) {
  code = code || 1000;

  if (typeof code != 'number') {
    throw new InvalidArgumentsError('If specified, the code argument must be a number');
  }

  if (this.state == this.OPEN || this.state == this.CONNECTING) {
    this.transport.close(code, data);
  } else {
    this.pendingReconnect = false;
    this.pendingReconnectTimeout = null;
    clearTimeout(this._reconnectTimeoutRef);
  }
};

SCSocket.prototype._changeToPendingAuthState = function () {
  if (this.authState != this.PENDING) {
    var oldState = this.authState;
    this.authState = this.PENDING;
    var stateChangeData = {
      oldState: oldState,
      newState: this.authState
    };
    SCEmitter.prototype.emit.call(this, 'authStateChange', stateChangeData);
  }
};

SCSocket.prototype._changeToUnauthenticatedState = function () {
  if (this.authState != this.UNAUTHENTICATED) {
    var oldState = this.authState;
    this.authState = this.UNAUTHENTICATED;
    this.signedAuthToken = null;
    this.authToken = null;

    var stateChangeData = {
      oldState: oldState,
      newState: this.authState
    };
    SCEmitter.prototype.emit.call(this, 'authStateChange', stateChangeData);
    if (oldState == this.AUTHENTICATED) {
      SCEmitter.prototype.emit.call(this, 'deauthenticate');
    }
    SCEmitter.prototype.emit.call(this, 'authTokenChange', this.signedAuthToken);
  }
};

SCSocket.prototype._changeToAuthenticatedState = function (signedAuthToken) {
  this.signedAuthToken = signedAuthToken;
  this.authToken = this._extractAuthTokenData(signedAuthToken);

  if (this.authState != this.AUTHENTICATED) {
    var oldState = this.authState;
    this.authState = this.AUTHENTICATED;
    var stateChangeData = {
      oldState: oldState,
      newState: this.authState,
      signedAuthToken: signedAuthToken,
      authToken: this.authToken
    };
    this.processPendingSubscriptions();

    SCEmitter.prototype.emit.call(this, 'authStateChange', stateChangeData);
    SCEmitter.prototype.emit.call(this, 'authenticate', signedAuthToken);
  }
  SCEmitter.prototype.emit.call(this, 'authTokenChange', signedAuthToken);
};

SCSocket.prototype.decodeBase64 = function (encodedString) {
  var decodedString;
  if (typeof Buffer == 'undefined') {
    if (global.atob) {
      decodedString = global.atob(encodedString);
    } else {
      decodedString = base64.decode(encodedString);
    }
  } else {
    var buffer = new Buffer(encodedString, 'base64');
    decodedString = buffer.toString('utf8');
  }
  return decodedString;
};

SCSocket.prototype.encodeBase64 = function (decodedString) {
  var encodedString;
  if (typeof Buffer == 'undefined') {
    if (global.btoa) {
      encodedString = global.btoa(decodedString);
    } else {
      encodedString = base64.encode(decodedString);
    }
  } else {
    var buffer = new Buffer(decodedString, 'utf8');
    encodedString = buffer.toString('base64');
  }
  return encodedString;
};

SCSocket.prototype._extractAuthTokenData = function (signedAuthToken) {
  var tokenParts = (signedAuthToken || '').split('.');
  var encodedTokenData = tokenParts[1];
  if (encodedTokenData != null) {
    var tokenData = encodedTokenData;
    try {
      tokenData = this.decodeBase64(tokenData);
      return JSON.parse(tokenData);
    } catch (e) {
      return tokenData;
    }
  }
  return null;
};

SCSocket.prototype.getAuthToken = function () {
  return this.authToken;
};

SCSocket.prototype.getSignedAuthToken = function () {
  return this.signedAuthToken;
};

// Perform client-initiated authentication by providing an encrypted token string
SCSocket.prototype.authenticate = function (signedAuthToken, callback) {
  var self = this;

  this._changeToPendingAuthState();

  this.emit('#authenticate', signedAuthToken, function (err, authStatus) {
    if (authStatus && authStatus.authError) {
      authStatus.authError = scErrors.hydrateError(authStatus.authError);
    }
    if (err) {
      self._changeToUnauthenticatedState();
      callback && callback(err, authStatus);
    } else {
      self.auth.saveToken(self.options.authTokenName, signedAuthToken, {}, function (err) {
        callback && callback(err, authStatus);
        if (err) {
          self._changeToUnauthenticatedState();
          self._onSCError(err);
        } else {
          if (authStatus.isAuthenticated) {
            self._changeToAuthenticatedState(signedAuthToken);
          } else {
            self._changeToUnauthenticatedState();
          }
        }
      });
    }
  });
};

SCSocket.prototype._tryReconnect = function (initialDelay) {
  var self = this;

  var exponent = this.connectAttempts++;
  var reconnectOptions = this.options.autoReconnectOptions;
  var timeout;

  if (initialDelay == null || exponent > 0) {
    var initialTimeout = Math.round(reconnectOptions.initialDelay + (reconnectOptions.randomness || 0) * Math.random());

    timeout = Math.round(initialTimeout * Math.pow(reconnectOptions.multiplier, exponent));
  } else {
    timeout = initialDelay;
  }

  if (timeout > reconnectOptions.maxDelay) {
    timeout = reconnectOptions.maxDelay;
  }

  clearTimeout(this._reconnectTimeoutRef);

  this.pendingReconnect = true;
  this.pendingReconnectTimeout = timeout;
  this._reconnectTimeoutRef = setTimeout(function () {
    self.connect();
  }, timeout);
};

SCSocket.prototype._onSCOpen = function (status) {
  var self = this;

  if (status) {
    this.id = status.id;
    this.pingTimeout = status.pingTimeout;
    this.transport.pingTimeout = this.pingTimeout;
    if (status.isAuthenticated) {
      this._changeToAuthenticatedState(status.authToken);
    } else {
      this._changeToUnauthenticatedState();
    }
  } else {
    this._changeToUnauthenticatedState();
  }

  this.connectAttempts = 0;
  if (this.options.autoProcessSubscriptions) {
    this.processPendingSubscriptions();
  } else {
    this.pendingConnectCallback = true;
  }

  // If the user invokes the callback while in autoProcessSubscriptions mode, it
  // won't break anything - The processPendingSubscriptions() call will be a no-op.
  SCEmitter.prototype.emit.call(this, 'connect', status, function () {
    self.processPendingSubscriptions();
  });

  this._flushEmitBuffer();
};

SCSocket.prototype._onSCError = function (err) {
  var self = this;

  // Throw error in different stack frame so that error handling
  // cannot interfere with a reconnect action.
  setTimeout(function () {
    if (self.listeners('error').length < 1) {
      throw err;
    } else {
      SCEmitter.prototype.emit.call(self, 'error', err);
    }
  }, 0);
};

SCSocket.prototype._suspendSubscriptions = function () {
  var channel, newState;
  for (var channelName in this._channels) {
    if (this._channels.hasOwnProperty(channelName)) {
      channel = this._channels[channelName];
      if (channel.state == channel.SUBSCRIBED ||
        channel.state == channel.PENDING) {

        newState = channel.PENDING;
      } else {
        newState = channel.UNSUBSCRIBED;
      }

      this._triggerChannelUnsubscribe(channel, newState);
    }
  }
};

SCSocket.prototype._onSCClose = function (code, data, openAbort) {
  var self = this;

  this.id = null;

  if (this.transport) {
    this.transport.off();
  }
  this.pendingReconnect = false;
  this.pendingReconnectTimeout = null;
  clearTimeout(this._reconnectTimeoutRef);

  this._changeToPendingAuthState();
  this._suspendSubscriptions();

  // Try to reconnect
  // on server ping timeout (4000)
  // or on client pong timeout (4001)
  // or on close without status (1005)
  // or on handshake failure (4003)
  // or on socket hung up (1006)
  if (this.options.autoReconnect) {
    if (code == 4000 || code == 4001 || code == 1005) {
      // If there is a ping or pong timeout or socket closes without
      // status, don't wait before trying to reconnect - These could happen
      // if the client wakes up after a period of inactivity and in this case we
      // want to re-establish the connection as soon as possible.
      this._tryReconnect(0);

      // Codes 4500 and above will be treated as permanent disconnects.
      // Socket will not try to auto-reconnect.
    } else if (code != 1000 && code < 4500) {
      this._tryReconnect();
    }
  }

  if (openAbort) {
    SCEmitter.prototype.emit.call(self, 'connectAbort', code, data);
  } else {
    SCEmitter.prototype.emit.call(self, 'disconnect', code, data);
  }

  if (!SCSocket.ignoreStatuses[code]) {
    var failureMessage;
    if (data) {
      failureMessage = 'Socket connection failed: ' + data;
    } else {
      failureMessage = 'Socket connection failed for unknown reasons';
    }
    var err = new SocketProtocolError(SCSocket.errorStatuses[code] || failureMessage, code);
    this._onSCError(err);
  }
};

SCSocket.prototype._onSCEvent = function (event, data, res) {
  var handler = this._privateEventHandlerMap[event];
  if (handler) {
    handler.call(this, data, res);
  } else {
    SCEmitter.prototype.emit.call(this, event, data, function () {
      res && res.callback.apply(res, arguments);
    });
  }
};

SCSocket.prototype.decode = function (message) {
  return this.transport.decode(message);
};

SCSocket.prototype.encode = function (object) {
  return this.transport.encode(object);
};

SCSocket.prototype._flushEmitBuffer = function () {
  var currentNode = this._emitBuffer.head;
  var nextNode;

  while (currentNode) {
    nextNode = currentNode.next;
    var eventObject = currentNode.data;
    currentNode.detach();
    this.transport.emitObject(eventObject);
    currentNode = nextNode;
  }
};

SCSocket.prototype._handleEventAckTimeout = function (eventObject, eventNode) {
  if (eventNode) {
    eventNode.detach();
  }
  var callback = eventObject.callback;
  if (callback) {
    delete eventObject.callback;
    var error = new TimeoutError("Event response for '" + eventObject.event + "' timed out");
    callback.call(eventObject, error, eventObject);
  }
};

SCSocket.prototype._emit = function (event, data, callback) {
  var self = this;

  if (this.state == this.CLOSED) {
    this.connect();
  }
  var eventObject = {
    event: event,
    data: data,
    callback: callback
  };

  var eventNode = new LinkedList.Item();

  if (this.options.cloneData) {
    eventNode.data = clone(eventObject);
  } else {
    eventNode.data = eventObject;
  }

  eventObject.timeout = setTimeout(function () {
    self._handleEventAckTimeout(eventObject, eventNode);
  }, this.ackTimeout);

  this._emitBuffer.append(eventNode);

  if (this.state == this.OPEN) {
    this._flushEmitBuffer();
  }
};

SCSocket.prototype.send = function (data) {
  this.transport.send(data);
};

SCSocket.prototype.emit = function (event, data, callback) {
  if (this._localEvents[event] == null) {
    this._emit(event, data, callback);
  } else {
    SCEmitter.prototype.emit.call(this, event, data);
  }
};

SCSocket.prototype.publish = function (channelName, data, callback) {
  var pubData = {
    channel: this._decorateChannelName(channelName),
    data: data
  };
  this.emit('#publish', pubData, callback);
};

SCSocket.prototype._triggerChannelSubscribe = function (channel, subscriptionOptions) {
  var channelName = channel.name;

  if (channel.state != channel.SUBSCRIBED) {
    var oldState = channel.state;
    channel.state = channel.SUBSCRIBED;

    var stateChangeData = {
      channel: channelName,
      oldState: oldState,
      newState: channel.state,
      subscriptionOptions: subscriptionOptions
    };
    channel.emit('subscribeStateChange', stateChangeData);
    channel.emit('subscribe', channelName, subscriptionOptions);
    SCEmitter.prototype.emit.call(this, 'subscribeStateChange', stateChangeData);
    SCEmitter.prototype.emit.call(this, 'subscribe', channelName, subscriptionOptions);
  }
};

SCSocket.prototype._triggerChannelSubscribeFail = function (err, channel, subscriptionOptions) {
  var channelName = channel.name;
  var meetsAuthRequirements = !channel.waitForAuth || this.authState == this.AUTHENTICATED;

  if (channel.state != channel.UNSUBSCRIBED && meetsAuthRequirements) {
    channel.state = channel.UNSUBSCRIBED;

    channel.emit('subscribeFail', err, channelName, subscriptionOptions);
    SCEmitter.prototype.emit.call(this, 'subscribeFail', err, channelName, subscriptionOptions);
  }
};

// Cancel any pending subscribe callback
SCSocket.prototype._cancelPendingSubscribeCallback = function (channel) {
  if (channel._pendingSubscriptionCid != null) {
    this.transport.cancelPendingResponse(channel._pendingSubscriptionCid);
    delete channel._pendingSubscriptionCid;
  }
};

SCSocket.prototype._decorateChannelName = function (channelName) {
  if (this.channelPrefix) {
    channelName = this.channelPrefix + channelName;
  }
  return channelName;
};

SCSocket.prototype._undecorateChannelName = function (decoratedChannelName) {
  if (this.channelPrefix && decoratedChannelName.indexOf(this.channelPrefix) == 0) {
    return decoratedChannelName.replace(this.channelPrefix, '');
  }
  return decoratedChannelName;
};

SCSocket.prototype._trySubscribe = function (channel) {
  var self = this;

  var meetsAuthRequirements = !channel.waitForAuth || this.authState == this.AUTHENTICATED;

  // We can only ever have one pending subscribe action at any given time on a channel
  if (this.state == this.OPEN && !this.pendingConnectCallback &&
    channel._pendingSubscriptionCid == null && meetsAuthRequirements) {

    var options = {
      noTimeout: true
    };

    var subscriptionOptions = {
      channel: this._decorateChannelName(channel.name)
    };
    if (channel.waitForAuth) {
      options.waitForAuth = true;
      subscriptionOptions.waitForAuth = options.waitForAuth;
    }
    if (channel.data) {
      subscriptionOptions.data = channel.data;
    }

    channel._pendingSubscriptionCid = this.transport.emit(
      '#subscribe', subscriptionOptions, options,
      function (err) {
        delete channel._pendingSubscriptionCid;
        if (err) {
          self._triggerChannelSubscribeFail(err, channel, subscriptionOptions);
        } else {
          self._triggerChannelSubscribe(channel, subscriptionOptions);
        }
      }
    );
    SCEmitter.prototype.emit.call(this, 'subscribeRequest', channel.name, subscriptionOptions);
  }
};

SCSocket.prototype.subscribe = function (channelName, options) {
  var channel = this._channels[channelName];

  if (!channel) {
    channel = new SCChannel(channelName, this, options);
    this._channels[channelName] = channel;
  } else if (options) {
    channel.setOptions(options);
  }

  if (channel.state == channel.UNSUBSCRIBED) {
    channel.state = channel.PENDING;
    this._trySubscribe(channel);
  }

  return channel;
};

SCSocket.prototype._triggerChannelUnsubscribe = function (channel, newState) {
  var channelName = channel.name;
  var oldState = channel.state;

  if (newState) {
    channel.state = newState;
  } else {
    channel.state = channel.UNSUBSCRIBED;
  }
  this._cancelPendingSubscribeCallback(channel);

  if (oldState == channel.SUBSCRIBED) {
    var stateChangeData = {
      channel: channelName,
      oldState: oldState,
      newState: channel.state
    };
    channel.emit('subscribeStateChange', stateChangeData);
    channel.emit('unsubscribe', channelName);
    SCEmitter.prototype.emit.call(this, 'subscribeStateChange', stateChangeData);
    SCEmitter.prototype.emit.call(this, 'unsubscribe', channelName);
  }
};

SCSocket.prototype._tryUnsubscribe = function (channel) {
  var self = this;

  if (this.state == this.OPEN) {
    var options = {
      noTimeout: true
    };
    // If there is a pending subscribe action, cancel the callback
    this._cancelPendingSubscribeCallback(channel);

    // This operation cannot fail because the TCP protocol guarantees delivery
    // so long as the connection remains open. If the connection closes,
    // the server will automatically unsubscribe the socket and thus complete
    // the operation on the server side.
    var decoratedChannelName = this._decorateChannelName(channel.name);
    this.transport.emit('#unsubscribe', decoratedChannelName, options);
  }
};

SCSocket.prototype.unsubscribe = function (channelName) {

  var channel = this._channels[channelName];

  if (channel) {
    if (channel.state != channel.UNSUBSCRIBED) {

      this._triggerChannelUnsubscribe(channel);
      this._tryUnsubscribe(channel);
    }
  }
};

SCSocket.prototype.channel = function (channelName, options) {
  var currentChannel = this._channels[channelName];

  if (!currentChannel) {
    currentChannel = new SCChannel(channelName, this, options);
    this._channels[channelName] = currentChannel;
  }
  return currentChannel;
};

SCSocket.prototype.destroyChannel = function (channelName) {
  var channel = this._channels[channelName];
  channel.unwatch();
  channel.unsubscribe();
  delete this._channels[channelName];
};

SCSocket.prototype.subscriptions = function (includePending) {
  var subs = [];
  var channel, includeChannel;
  for (var channelName in this._channels) {
    if (this._channels.hasOwnProperty(channelName)) {
      channel = this._channels[channelName];

      if (includePending) {
        includeChannel = channel && (channel.state == channel.SUBSCRIBED ||
          channel.state == channel.PENDING);
      } else {
        includeChannel = channel && channel.state == channel.SUBSCRIBED;
      }

      if (includeChannel) {
        subs.push(channelName);
      }
    }
  }
  return subs;
};

SCSocket.prototype.isSubscribed = function (channelName, includePending) {
  var channel = this._channels[channelName];
  if (includePending) {
    return !!channel && (channel.state == channel.SUBSCRIBED ||
      channel.state == channel.PENDING);
  }
  return !!channel && channel.state == channel.SUBSCRIBED;
};

SCSocket.prototype.processPendingSubscriptions = function () {
  var self = this;

  this.pendingConnectCallback = false;

  for (var i in this._channels) {
    if (this._channels.hasOwnProperty(i)) {
      (function (channel) {
        if (channel.state == channel.PENDING) {
          self._trySubscribe(channel);
        }
      })(this._channels[i]);
    }
  }
};

SCSocket.prototype.watch = function (channelName, handler) {
  if (typeof handler != 'function') {
    throw new InvalidArgumentsError('No handler function was provided');
  }
  this._channelEmitter.on(channelName, handler);
};

SCSocket.prototype.unwatch = function (channelName, handler) {
  if (handler) {
    this._channelEmitter.removeListener(channelName, handler);
  } else {
    this._channelEmitter.removeAllListeners(channelName);
  }
};

SCSocket.prototype.watchers = function (channelName) {
  return this._channelEmitter.listeners(channelName);
};

module.exports = SCSocket;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(532), __webpack_require__(586).Buffer))

/***/ }),
/* 586 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(869)
var ieee754 = __webpack_require__(870)
var isArray = __webpack_require__(871)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(532)))

/***/ }),
/* 587 */
/***/ (function(module, exports, __webpack_require__) {

var scErrors = __webpack_require__(547);
var InvalidActionError = scErrors.InvalidActionError;

var Response = function (socket, id) {
  this.socket = socket;
  this.id = id;
  this.sent = false;
};

Response.prototype._respond = function (responseData) {
  if (this.sent) {
    throw new InvalidActionError('Response ' + this.id + ' has already been sent');
  } else {
    this.sent = true;
    this.socket.send(this.socket.encode(responseData));
  }
};

Response.prototype.end = function (data) {
  if (this.id) {
    var responseData = {
      rid: this.id
    };
    if (data !== undefined) {
      responseData.data = data;
    }
    this._respond(responseData);
  }
};

Response.prototype.error = function (error, data) {
  if (this.id) {
    var err = scErrors.dehydrateError(error);

    var responseData = {
      rid: this.id,
      error: err
    };
    if (data !== undefined) {
      responseData.data = data;
    }

    this._respond(responseData);
  }
};

Response.prototype.callback = function (error, data) {
  if (error) {
    this.error(error, data);
  } else {
    this.end(data);
  }
};

module.exports.Response = Response;


/***/ }),
/* 588 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(879);
exports.encode = exports.stringify = __webpack_require__(880);


/***/ }),
/* 589 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(544),
    isObject = __webpack_require__(557);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 590 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 591 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 592 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(914);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 593 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 594 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 595 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 596 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(597),
    isFlattenable = __webpack_require__(918);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 597 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 598 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(561),
    overRest = __webpack_require__(920),
    setToString = __webpack_require__(922);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 599 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(543);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 600 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(601),
    isObjectLike = __webpack_require__(542);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 601 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(589),
    isLength = __webpack_require__(562);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 602 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(543),
    root = __webpack_require__(540);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 603 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomByte = __webpack_require__(937);

function encode(lookup, number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = encode;


/***/ }),
/* 604 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(540),
    stubFalse = __webpack_require__(953);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }),
/* 605 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 606 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(954),
    baseUnary = __webpack_require__(595),
    nodeUtil = __webpack_require__(955);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 607 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(549),
    stackClear = __webpack_require__(962),
    stackDelete = __webpack_require__(963),
    stackGet = __webpack_require__(964),
    stackHas = __webpack_require__(965),
    stackSet = __webpack_require__(966);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 608 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(967),
    isObjectLike = __webpack_require__(542);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 609 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(555),
    arraySome = __webpack_require__(968),
    cacheHas = __webpack_require__(559);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 610 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(557);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 611 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 612 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(613),
    toKey = __webpack_require__(553);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 613 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(541),
    isKey = __webpack_require__(565),
    stringToPath = __webpack_require__(985),
    toString = __webpack_require__(988);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 614 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(13), RootInstanceProvider = __webpack_require__(14), ReactMount = __webpack_require__(10), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;
//import Styles from '../stylesheets/components/SearchBar.scss'


//import css module


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactFlagsSelect = __webpack_require__(615);

var _reactFlagsSelect2 = _interopRequireDefault(_reactFlagsSelect);

__webpack_require__(839);

var _rutils = __webpack_require__(152);

var _rutils2 = _interopRequireDefault(_rutils);

var _autobindDecorator = __webpack_require__(210);

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var language = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;

var languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

if (languageWithoutRegionCode === 'en') {
    languageWithoutRegionCode = 'GB';
}

var initialLanguage = _rutils2.default.toUpper(languageWithoutRegionCode) || 'GB';

var Translations = (0, _autobindDecorator2.default)(_class = function (_Component) {
    _inherits(Translations, _Component);

    function Translations(props) {
        _classCallCheck(this, Translations);

        return _possibleConstructorReturn(this, (Translations.__proto__ || Object.getPrototypeOf(Translations)).call(this, props));
    }

    _createClass(Translations, [{
        key: 'onSelectFlag',
        value: function onSelectFlag(countryCode) {
            var switchLanguage = this.props.switchLanguage;
            switchLanguage(_rutils2.default.toLower(countryCode));
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_reactFlagsSelect2.default, {
                className: 'translations',
                defaultCountry: initialLanguage,
                searchable: true,
                onSelect: this.onSelectFlag,
                customLabels: { "ES": "ES", "GB": "EN", "RO": "RO" },
                countries: ["ES", "GB", "RO"],
                placeholder: 'Select Language'
            });
        }
    }]);

    return Translations;
}(_react.Component)) || _class;

exports.default = Translations;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(15); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }),
/* 615 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__countries__ = __webpack_require__(616);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ReactFlagsSelect = function (_Component) {
	_inherits(ReactFlagsSelect, _Component);

	function ReactFlagsSelect(props) {
		_classCallCheck(this, ReactFlagsSelect);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		var fullCountries = Object.keys(__WEBPACK_IMPORTED_MODULE_2__countries__["a" /* default */]);

		var selectCountries = _this.props.countries && _this.props.countries.filter(function (country) {
			return __WEBPACK_IMPORTED_MODULE_2__countries__["a" /* default */][country];
		});
		var defaultCountry = __WEBPACK_IMPORTED_MODULE_2__countries__["a" /* default */][_this.props.defaultCountry] && _this.props.defaultCountry;

		_this.state = {
			openOptions: false,
			countries: selectCountries || fullCountries,
			defaultCountry: defaultCountry
		};

		_this.toggleOptions = _this.toggleOptions.bind(_this);
		_this.closeOptions = _this.closeOptions.bind(_this);
		_this.onSelect = _this.onSelect.bind(_this);
		return _this;
	}

	ReactFlagsSelect.prototype.toggleOptions = function toggleOptions() {
		!this.state.disabled && this.setState({
			openOptions: !this.state.openOptions
		});
	};

	ReactFlagsSelect.prototype.closeOptions = function closeOptions(event) {
		if (event.target !== this.refs.selectedFlag && event.target !== this.refs.flagOptions) {
			this.setState({
				openOptions: false
			});
		}
	};

	ReactFlagsSelect.prototype.onSelect = function onSelect(countryCode) {
		this.setState({
			selected: countryCode
		});
		this.props.onSelect && this.props.onSelect(countryCode);
	};

	ReactFlagsSelect.prototype.updateSelected = function updateSelected(countryCode) {
		var isValid = __WEBPACK_IMPORTED_MODULE_2__countries__["a" /* default */][countryCode];

		isValid && this.setState({
			selected: countryCode
		});
	};

	ReactFlagsSelect.prototype.componentDidMount = function componentDidMount() {
		!this.props.disabled && window.addEventListener("click", this.closeOptions);
	};

	ReactFlagsSelect.prototype.componentWillUnmount = function componentWillUnmount() {
		!this.props.disabled && window.removeEventListener("click", this.closeOptions);
	};

	ReactFlagsSelect.prototype.render = function render() {
		var _this2 = this;

		var isSelected = this.state.selected || this.state.defaultCountry;
		var selectedSize = this.props.selectedSize;
		var optionsSize = this.props.optionsSize;
		var alignClass = this.props.alignOptions.toLowerCase() === 'left' ? 'to--left' : '';

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ className: 'flag-select ' + (this.props.className ? this.props.className : "") },
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ ref: 'selectedFlag', style: { fontSize: selectedSize + 'px' }, className: 'selected--flag--option ' + (this.props.disabled ? 'no--focus' : ''), onClick: this.toggleOptions },
				isSelected && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'span',
					{ className: 'country-flag', style: { width: selectedSize + 'px', height: selectedSize + 'px' } },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(567)("./" + isSelected.toLowerCase() + '.svg') }),
					this.props.showSelectedLabel && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'span',
						{ className: 'country-label' },
						this.props.customLabels[isSelected] || __WEBPACK_IMPORTED_MODULE_2__countries__["a" /* default */][isSelected]
					)
				),
				!isSelected && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'span',
					{ className: 'country-label' },
					this.props.placeholder
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'span',
					{ className: 'arrow-down ' + (this.props.disabled ? 'hidden' : '') },
					'\u25BE'
				)
			),
			this.state.openOptions && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ ref: 'flagOptions', style: { fontSize: optionsSize + 'px' }, className: 'flag-options ' + alignClass },
				this.state.countries.map(function (countryCode) {
					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ className: 'flag-option ' + (_this2.props.showOptionLabel ? 'has-label' : ''), key: countryCode, onClick: function onClick() {
								return _this2.onSelect(countryCode);
							} },
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'span',
							{ className: 'country-flag', style: { width: optionsSize + 'px', height: optionsSize + 'px' } },
							__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(567)("./" + countryCode.toLowerCase() + '.svg') }),
							_this2.props.showOptionLabel && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'span',
								{ className: 'country-label' },
								_this2.props.customLabels[countryCode] || __WEBPACK_IMPORTED_MODULE_2__countries__["a" /* default */][countryCode]
							)
						)
					);
				})
			)
		);
	};

	return ReactFlagsSelect;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ReactFlagsSelect.defaultProps = {
	selectedSize: 16,
	optionsSize: 14,
	placeholder: "Select a country",
	showSelectedLabel: true,
	showOptionLabel: true,
	alignOptions: "right",
	customLabels: [],
	disabled: false
};

ReactFlagsSelect.propsType = {
	countries: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
	customLabels: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
	selectedSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	optionsSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
	defaultCountry: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	placeholder: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	showSelectedLabel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
	showOptionLabel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
	alignOptions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
	onSelect: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
	disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

/* harmony default export */ __webpack_exports__["default"] = (ReactFlagsSelect);

/***/ }),
/* 616 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    "AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia, Plurinational State of",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "CV": "Cape Verde",
    "KY": "Cayman Islands",
    "CF": "Central African Republic",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CO": "Colombia",
    "KM": "Comoros",
    "CG": "Congo",
    "CD": "Democratic Republic of the Congo",
    "CK": "Cook Islands",
    "CR": "Costa Rica",
    "CI": "Côte d'Ivoire",
    "HR": "Croatia",
    "CU": "Cuba",
    "CW": "Curaçao",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "ET": "Ethiopia",
    "FK": "Falkland Islands (Malvinas)",
    "FO": "Faroe Islands",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "PF": "French Polynesia",
    "GA": "Gabon",
    "GM": "Gambia",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "HT": "Haiti",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran, Islamic Republic of",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KP": "North Korea",
    "KR": "South Korea",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Lao People's Democratic Republic",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MK": "Republic of Macedonia",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "MX": "Mexico",
    "FM": "Micronesia, Federated States of",
    "MD": "Republic of Moldova",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "Northern Mariana Islands",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestinian Territory",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "RO": "Romania",
    "RU": "Russian",
    "RW": "Rwanda",
    "KN": "Saint Kitts and Nevis",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SX": "Sint Maarten",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "SS": "South Sudan",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan",
    "SR": "Suriname",
    "SZ": "Swaziland",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syria",
    "TW": "Taiwan, Province of China",
    "TJ": "Tajikistan",
    "TZ": "Tanzania",
    "TH": "Thailand",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks and Caicos Islands",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates",
    "GB": "United Kingdom",
    "US": "United States",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela, Bolivarian Republic of",
    "VN": "Viet Nam",
    "VI": "Virgin Islands",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe"
});

/***/ }),
/* 617 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9464a7aa3463725ad446cbeabe8eb64c.svg";

/***/ }),
/* 618 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "20e7ed10a2df8c150f788153a95e012d.svg";

/***/ }),
/* 619 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7ce1ff323d0530d5aab31c9ce0be489b.svg";

/***/ }),
/* 620 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aedbfc050bea47359e1fca35d097b948.svg";

/***/ }),
/* 621 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "281765d3b07f182d90ff04730069be2a.svg";

/***/ }),
/* 622 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "92260ca3978647dd263965c6c4a8d185.svg";

/***/ }),
/* 623 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9a7d452b5586e49012ea08bb72ee435e.svg";

/***/ }),
/* 624 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aa4da35f96a72cf696ac9970cd81aeb5.svg";

/***/ }),
/* 625 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "da94f30e93a639fb7965c96ba97ae568.svg";

/***/ }),
/* 626 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "be14e9c3a00060aa832935fa03ba53d5.svg";

/***/ }),
/* 627 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ca8dd218014203361e5c97aa6340733e.svg";

/***/ }),
/* 628 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e450f04047a7a56ed695ff4ca82dd0cc.svg";

/***/ }),
/* 629 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "644e81d701ef8847fea06f6281e3a570.svg";

/***/ }),
/* 630 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0efd7e6f6067f8a803eb86c0b080cb48.svg";

/***/ }),
/* 631 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "790d2cf349fdf0fde1a3ae3dda7107fb.svg";

/***/ }),
/* 632 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f3cdb04606f9ebb784f131b658a5d093.svg";

/***/ }),
/* 633 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "96d9a5ea21545c1eb33b2b79e6e0d4df.svg";

/***/ }),
/* 634 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4c16303d0f59b1a4eb2c5b521c8d4126.svg";

/***/ }),
/* 635 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d5e1dd343b464b7803bc6a613a474834.svg";

/***/ }),
/* 636 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cfec3311d977761902e136e7702a8917.svg";

/***/ }),
/* 637 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a8fbd33791efae2b0b9c518d7f4613c7.svg";

/***/ }),
/* 638 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "89db61c698f45ab8e2545cf50803eee1.svg";

/***/ }),
/* 639 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "035b91e9523755f49dc3b9996e02cde5.svg";

/***/ }),
/* 640 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "92dd8580bdbd75b7d2ac1f4af698142b.svg";

/***/ }),
/* 641 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "55830b321536134fccfbbf0d39652ce1.svg";

/***/ }),
/* 642 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5fa9d6cd9d66337c0dba461266eac8a8.svg";

/***/ }),
/* 643 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "026b24c58f31dfa5acc97f361aba4cc7.svg";

/***/ }),
/* 644 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c152f21b9ff672101f63be02c314d21e.svg";

/***/ }),
/* 645 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cdafdbbe4c0d93f2fb27cc02e2c9684d.svg";

/***/ }),
/* 646 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bb1ff035bdf266f6f943fc6133df7b6f.svg";

/***/ }),
/* 647 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ee0f84abac3de6db3e0f6cf84259f7f9.svg";

/***/ }),
/* 648 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "662ba92d3a175278fde8318a5dbe06ff.svg";

/***/ }),
/* 649 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "48a5a972d9d3cffddffe55758fca9ab2.svg";

/***/ }),
/* 650 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "753211db4999facedbc0c7836092b948.svg";

/***/ }),
/* 651 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6a8d00a46c3d96851160c21b67a45146.svg";

/***/ }),
/* 652 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c70c6cf22875140a324fcb0f3cdd924d.svg";

/***/ }),
/* 653 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8f45b7f24faa432422147a8bfb276630.svg";

/***/ }),
/* 654 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "29e57da21f65f885bd9dc7e51e8bcaef.svg";

/***/ }),
/* 655 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1f87f4c35be0ce6c2e9d6f6048082bec.svg";

/***/ }),
/* 656 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "82cc6a7749d8d512a02fb7e83839b564.svg";

/***/ }),
/* 657 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9790e76c5ea1b05622374ad66bd62790.svg";

/***/ }),
/* 658 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1f52846a4dc7b637d1fa7bf178b03503.svg";

/***/ }),
/* 659 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "88647bc11c38e87f44743456801109d7.svg";

/***/ }),
/* 660 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fc65bfe1218625d662466b833036baab.svg";

/***/ }),
/* 661 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "73ea5862f8f99b4593fc7386462d7ef5.svg";

/***/ }),
/* 662 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7a68a235f08562c25fb8cf27d099d366.svg";

/***/ }),
/* 663 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8af66c5ce3fcaaa4175cd9fea6542327.svg";

/***/ }),
/* 664 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "70fd40fb008d7f88dfa94229541a77cd.svg";

/***/ }),
/* 665 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "67ef6c7c64ee171e7b50647b057053e6.svg";

/***/ }),
/* 666 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ba7d21b0f08cd70fea0b66d4c519c6b8.svg";

/***/ }),
/* 667 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "41bf657cb58afcb884a11fcc8b55ca37.svg";

/***/ }),
/* 668 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "136ce8dce107311777d31dc4b6d9c563.svg";

/***/ }),
/* 669 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f1f4f89d8203ff64e74cfe4e45144221.svg";

/***/ }),
/* 670 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "be424acebbee3c8c6bbb855a5c09db4b.svg";

/***/ }),
/* 671 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "52cb6c2bde32a1eae3b57129fa89cf63.svg";

/***/ }),
/* 672 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "52f45f6f52bc7cd1040d1fee5cc5249c.svg";

/***/ }),
/* 673 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ca6826f2bc94d10e8693d20e62212f0a.svg";

/***/ }),
/* 674 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "742e22eed688b28537a3c7519e21aa95.svg";

/***/ }),
/* 675 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dd5a6f920cda1eadb00bb51af340bb29.svg";

/***/ }),
/* 676 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b2ef202588027c97ec3eef0160216aae.svg";

/***/ }),
/* 677 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d4b5de88395b846f81ae448d15f1822c.svg";

/***/ }),
/* 678 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b52be1cbbafec1de56ddfcc56c8cb6ef.svg";

/***/ }),
/* 679 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "73a179691815c8872e270d6b6ee0055a.svg";

/***/ }),
/* 680 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "295e588af60c9cc11bf49e47bcebc72f.svg";

/***/ }),
/* 681 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "db7085b57d0052edb7277f9d3fa17be2.svg";

/***/ }),
/* 682 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4d7fafafcc9477b68d22ee2af49d2361.svg";

/***/ }),
/* 683 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2a41674a75113a4fd89035940d292508.svg";

/***/ }),
/* 684 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e8afcf18ca975307a8aea96ec3d20c35.svg";

/***/ }),
/* 685 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6bc6e61387f7ddca0b49fa50117cb7c4.svg";

/***/ }),
/* 686 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ce9f59b3e5030790e9643a944786857f.svg";

/***/ }),
/* 687 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9bd18b0ae83c0a40d2564e2d570f7dc8.svg";

/***/ }),
/* 688 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "92e2ed60efec4fa4830260b45c01c013.svg";

/***/ }),
/* 689 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1050d954ee1fd25bae062c476c5d6707.svg";

/***/ }),
/* 690 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b0760c9108e82d5303535602ef5846d3.svg";

/***/ }),
/* 691 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dcb49245bf60854e38d1a713d5a91552.svg";

/***/ }),
/* 692 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "390a20b895fccb9e680208f2ff5f4926.svg";

/***/ }),
/* 693 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dd05cd43ca6cc0ec8ffea426ad88e479.svg";

/***/ }),
/* 694 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3774e7f71f19ec1e72d507fcff330460.svg";

/***/ }),
/* 695 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b43d4f099b72939f4b0b6f20aebde523.svg";

/***/ }),
/* 696 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1094d3f07320bf667bc591259da72f47.svg";

/***/ }),
/* 697 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "125954011ad8e7b47f80f5f0b583a624.svg";

/***/ }),
/* 698 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "11a241c42efeaddddca883053d6d9eda.svg";

/***/ }),
/* 699 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "204858816b7b272437af41dc71adc8c7.svg";

/***/ }),
/* 700 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "061b8932b7bcb06dc46e8584200e45b9.svg";

/***/ }),
/* 701 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5b67cba2900cdffaff679ccfc76b0a61.svg";

/***/ }),
/* 702 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "317a1e36bbdc5f8ea3fd36fd4173a72f.svg";

/***/ }),
/* 703 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aad27e0bec33a77fb740a98423f6c475.svg";

/***/ }),
/* 704 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7329abd2c7a0beeda4b436c84e0f61e7.svg";

/***/ }),
/* 705 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4d3b8d61d8826eecb831d5a050751441.svg";

/***/ }),
/* 706 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0ef9ac70732fda1fb9c73e4303e2a5a7.svg";

/***/ }),
/* 707 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "24718ca4d4d43ca7b4e6c514c84716f1.svg";

/***/ }),
/* 708 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0368ae098dece085e391b6a4770dea5b.svg";

/***/ }),
/* 709 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "44cfdf874766e967c7ff9672e1a5c259.svg";

/***/ }),
/* 710 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ada79eb16f510736d340eacfcbd38ccc.svg";

/***/ }),
/* 711 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b13a006585e54d8e11045ff3f0589e94.svg";

/***/ }),
/* 712 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c20029e7a2cd8dd538e5252665ace7ec.svg";

/***/ }),
/* 713 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8816845bd37c4a942e19028187a2a039.svg";

/***/ }),
/* 714 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d4c91d14417bcbdde039c67e03ca2a22.svg";

/***/ }),
/* 715 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a32211d5f3ced44882fefd050ffdf28f.svg";

/***/ }),
/* 716 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "61eab6593e989ac42f0ecb0495d403c8.svg";

/***/ }),
/* 717 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "be2bd3bfb361335ed25ff5b808387a4c.svg";

/***/ }),
/* 718 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "46fc01564cfaea4f2f299a697df8b4d4.svg";

/***/ }),
/* 719 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3b6c87ae5805f8911f3e75b06748ea0a.svg";

/***/ }),
/* 720 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "df97017847f89b8a40961e7fc912cc8e.svg";

/***/ }),
/* 721 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1a04994932396c7285166cee79c636dd.svg";

/***/ }),
/* 722 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "da7f44d9f8df7ce3aa2003de29de8d0b.svg";

/***/ }),
/* 723 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ae5fcdef8516514747ea19590bd04650.svg";

/***/ }),
/* 724 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5de67f51ae3cbacdb56da77a1d6c639d.svg";

/***/ }),
/* 725 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3e2522186bd8f638a98c068fc6ac091a.svg";

/***/ }),
/* 726 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7ceb117ad49734eb77489558c71229fb.svg";

/***/ }),
/* 727 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8408b1d0bf9c071f15246430376a6e7f.svg";

/***/ }),
/* 728 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4d973089035d6b8a974aa8bd6651da9a.svg";

/***/ }),
/* 729 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d11b5f56bdaa4dd8720c04d1d0047887.svg";

/***/ }),
/* 730 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a6fd4206ccb56beb53ccc4c11a7d30a5.svg";

/***/ }),
/* 731 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4a4815b0eb743089f56778fc9b5923c9.svg";

/***/ }),
/* 732 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "008b67ab9bb46bde7e0562115a6fb8b7.svg";

/***/ }),
/* 733 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "15a9de2d62520abdc5960f9fe86b18b2.svg";

/***/ }),
/* 734 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3a662aadd0de403dabead9363176e769.svg";

/***/ }),
/* 735 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4db7213ff7f741f3cb034a03a85ad06c.svg";

/***/ }),
/* 736 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "df93780718f81b0ae57ddbb576f1229c.svg";

/***/ }),
/* 737 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "958d885ea77131a09df53562450415fe.svg";

/***/ }),
/* 738 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "93a5d53bf82fff993aac48bef8cf70d4.svg";

/***/ }),
/* 739 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "33f1250cf60f62233e11ac62a83a3352.svg";

/***/ }),
/* 740 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8b1d749519e925493cc7183919b87dac.svg";

/***/ }),
/* 741 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "692a426dd9d56f342b3c6d239fad0d61.svg";

/***/ }),
/* 742 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4e0d168bc11081d7492e4565cc98deab.svg";

/***/ }),
/* 743 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bbe6d4b22b3a0f5255ae0a27dcb272c2.svg";

/***/ }),
/* 744 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5bbb81a7fd4083dd5daee7bbe67a9910.svg";

/***/ }),
/* 745 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d4ccc96c3b4d0a298188f491e31421d2.svg";

/***/ }),
/* 746 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d4638e4ce2ffa71c2baaab651a016e89.svg";

/***/ }),
/* 747 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4b09a9b5887962fd1d144fc80a0ccc61.svg";

/***/ }),
/* 748 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e23b939398c2c034b854edf2a7985898.svg";

/***/ }),
/* 749 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9c93dab0f36b7b7b8f3cbd07c26c749c.svg";

/***/ }),
/* 750 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "01823b736eddd79ddd7edde8b24a6ea2.svg";

/***/ }),
/* 751 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2e8adb6e2781ce262c3137f94b13c386.svg";

/***/ }),
/* 752 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "be391f3d0e0f6cfdbc9e7b4594da0245.svg";

/***/ }),
/* 753 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7b88db9d9b3c2520720d1739ecb7793e.svg";

/***/ }),
/* 754 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6d2ab98597b52b3f941df0cfafae6de0.svg";

/***/ }),
/* 755 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "14dea265e1522fb5670a2fd257cb7cb3.svg";

/***/ }),
/* 756 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3106b4b0fd5b5891830c27206964450f.svg";

/***/ }),
/* 757 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bf17e20407435463fe9342cf45661387.svg";

/***/ }),
/* 758 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1aaf2fee8a58cc319014e2fd1d74d9bd.svg";

/***/ }),
/* 759 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b421ebd2588608ae85cd438ae7960bae.svg";

/***/ }),
/* 760 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "05824be7788d3cb79816eb0e53e0cdb9.svg";

/***/ }),
/* 761 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ea1fa0232bba2206046ca6668b3eba3b.svg";

/***/ }),
/* 762 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "389fa39f0cea5a06c79714434f49d45b.svg";

/***/ }),
/* 763 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "05ae27216bbebfd77d835dc404381afa.svg";

/***/ }),
/* 764 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "33569458707562bc95dc85525bb3691f.svg";

/***/ }),
/* 765 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3e3301e34b533115fad4c67655fb2e6d.svg";

/***/ }),
/* 766 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "23bc1b2215ae788dae16dd0574bb6dce.svg";

/***/ }),
/* 767 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e9f30212e47ef0895ec3627f97448e72.svg";

/***/ }),
/* 768 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0100596f867f9406168161abf7e0f636.svg";

/***/ }),
/* 769 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1aa9cff11783492087bab190a8fe6aee.svg";

/***/ }),
/* 770 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ed9f1702ec8b95da00db2d347ff292b9.svg";

/***/ }),
/* 771 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "800aafcef08e4dffee30dad062533b6c.svg";

/***/ }),
/* 772 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1a21483d7f33dcef822ed391e5bde655.svg";

/***/ }),
/* 773 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c732640c6d4202f1e2d72efba966edc9.svg";

/***/ }),
/* 774 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a314b009bc4027514a809fd006293030.svg";

/***/ }),
/* 775 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7717650150b009512d9fc4a09e3a351f.svg";

/***/ }),
/* 776 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a729979f63dea150c0a58a9677e65844.svg";

/***/ }),
/* 777 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "434c54f04aa77c35333b23632118971c.svg";

/***/ }),
/* 778 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "66707fd81740f0f2a95c4abffca25cba.svg";

/***/ }),
/* 779 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "191dfd43e968fd65673b7804ddfb4f90.svg";

/***/ }),
/* 780 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "92c477ec74e9d10c6fab80255af55c6a.svg";

/***/ }),
/* 781 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "60bec7d6aebe86bd82495e9ee7e36e67.svg";

/***/ }),
/* 782 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "334a1dae1469c27172efd2621a5fc31f.svg";

/***/ }),
/* 783 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "049cb986041858ec4d34c870072ee0f0.svg";

/***/ }),
/* 784 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3c88a40c93a1c3b02f6ce9946900ba91.svg";

/***/ }),
/* 785 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "89a25003b27ea66d74eab4e050058083.svg";

/***/ }),
/* 786 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0d349db7b4ecd01b3c0a873e51c89958.svg";

/***/ }),
/* 787 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "242832e2dd5641979270dd1bdeb76918.svg";

/***/ }),
/* 788 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5f1ce60e2a5888c1b9be18e57aa3f758.svg";

/***/ }),
/* 789 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f797f0694a7a4d3de40995d34f218198.svg";

/***/ }),
/* 790 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5224bfcd951f0ef04b1860dfaeb0fe18.svg";

/***/ }),
/* 791 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a7a3c0c2899f6023cefbb390aa951e35.svg";

/***/ }),
/* 792 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "84b433f13accc838b1c2db702e7dd5df.svg";

/***/ }),
/* 793 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "04a0a1db4d88b00c2271bce14271bf82.svg";

/***/ }),
/* 794 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "237448a2612bdb5774f34bc25380a994.svg";

/***/ }),
/* 795 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7e8f4fdf0fdb8d514d266050883ba9ba.svg";

/***/ }),
/* 796 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7f63419c1934e53eaecabb31d85c9aa4.svg";

/***/ }),
/* 797 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5d26a4e2562f74e708b8c9ef3cf8c6a3.svg";

/***/ }),
/* 798 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3dbac07ef679ac694fa299befd654824.svg";

/***/ }),
/* 799 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b862d4efeaae715242a0f104bceecca0.svg";

/***/ }),
/* 800 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "92adbe396cb68ae9dec11d0ffe08b1c1.svg";

/***/ }),
/* 801 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eca50d938a3f63d73d3d77da99b3d000.svg";

/***/ }),
/* 802 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "74ebbd1a1010e71a9b9520804a7dfd40.svg";

/***/ }),
/* 803 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "566e8575ffd36f680c8a83fc1775bc79.svg";

/***/ }),
/* 804 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "508814e20d472936aa0d61f5a970c59c.svg";

/***/ }),
/* 805 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6abd8643ad37759ce355baa77ac3565e.svg";

/***/ }),
/* 806 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "afa714f7f5cd6c47af2f3c2c6cfa63d3.svg";

/***/ }),
/* 807 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d6dcbf387d2586a87c9d840072ca5859.svg";

/***/ }),
/* 808 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8eccdac336deda2ce971af8f9c6fd624.svg";

/***/ }),
/* 809 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4f10db9c354f9b733bacec7a0ce02b61.svg";

/***/ }),
/* 810 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "158863cdd275bebf126b1e7fc3db454f.svg";

/***/ }),
/* 811 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "024d45d4d67e3dd85f22a0e3fe7140dd.svg";

/***/ }),
/* 812 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "58c0b2373296321e52a4ea23d0c5711c.svg";

/***/ }),
/* 813 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7fb67a3d03278fad16bec81b9f50fa8a.svg";

/***/ }),
/* 814 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3a74517a49d564977e4fa6fff4b1213b.svg";

/***/ }),
/* 815 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "37d18d4bb27e6e8b5a24cade5dcb2160.svg";

/***/ }),
/* 816 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fe43d67faa047e6459fdc7f34a8b6e88.svg";

/***/ }),
/* 817 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c49fda620fac24243df610cd862b13f7.svg";

/***/ }),
/* 818 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a5465fbc79e97bc0db91072c70996ace.svg";

/***/ }),
/* 819 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a639fdf02e54192273f97c50390cb031.svg";

/***/ }),
/* 820 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b21387fd2c7c273d6a888c6218c523c8.svg";

/***/ }),
/* 821 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "473b9d586159e41b173d93b913089e90.svg";

/***/ }),
/* 822 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a81aaee0d37eed6294695571c8802e03.svg";

/***/ }),
/* 823 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c6c93a27922676b68ef3b52f985bbc99.svg";

/***/ }),
/* 824 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1835673b2fe9d3bd416a54a5bd6e4cac.svg";

/***/ }),
/* 825 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "92a0d7449272db0d0a081839fe5fd434.svg";

/***/ }),
/* 826 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3cec3e2cf5c99ab1d0520af6e7c65ed2.svg";

/***/ }),
/* 827 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0bc14d489bc5848f425e8a8bd56ea08e.svg";

/***/ }),
/* 828 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cfe348d48ff19b10aa15ae236773da78.svg";

/***/ }),
/* 829 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a5361fa4bf2a4672060f8a281438a00d.svg";

/***/ }),
/* 830 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8d1f1303692fc19dd4d03ccdec591740.svg";

/***/ }),
/* 831 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "858003ecfae4b3c7ae90bb8be84ad5a4.svg";

/***/ }),
/* 832 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bc3b8f0689076b24bf65a488fa24c60d.svg";

/***/ }),
/* 833 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ec6ce9178b5d5b92a70e34628b9fc711.svg";

/***/ }),
/* 834 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9887b9d986e718e948d8a6bd3b0ed94c.svg";

/***/ }),
/* 835 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0749b65c1c6713d43ce261adf36e7375.svg";

/***/ }),
/* 836 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "49b39eec8b65169fc1fe320cdc7f6e28.svg";

/***/ }),
/* 837 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1aeaafd6c3428d5f0800ecd0f9fd902b.svg";

/***/ }),
/* 838 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3a33b5836858b13cb3e53838c5594648.svg";

/***/ }),
/* 839 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(554);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(538)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(554, function() {
			var newContent = __webpack_require__(554);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 840 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = undefined;

var _react = __webpack_require__(1);

var _propTypes = __webpack_require__(60);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _storeShape = __webpack_require__(569);

var _storeShape2 = _interopRequireDefault(_storeShape);

var _warning = __webpack_require__(570);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

var Provider = function (_Component) {
  _inherits(Provider, _Component);

  Provider.prototype.getChildContext = function getChildContext() {
    return { store: this.store };
  };

  function Provider(props, context) {
    _classCallCheck(this, Provider);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.store = props.store;
    return _this;
  }

  Provider.prototype.render = function render() {
    return _react.Children.only(this.props.children);
  };

  return Provider;
}(_react.Component);

exports["default"] = Provider;


if (false) {
  Provider.prototype.componentWillReceiveProps = function (nextProps) {
    var store = this.store;
    var nextStore = nextProps.store;


    if (store !== nextStore) {
      warnAboutReceivingStore();
    }
  };
}

Provider.propTypes = {
  store: _storeShape2["default"].isRequired,
  children: _propTypes2["default"].element.isRequired
};
Provider.childContextTypes = {
  store: _storeShape2["default"].isRequired
};

/***/ }),
/* 841 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = connect;

var _react = __webpack_require__(1);

var _storeShape = __webpack_require__(569);

var _storeShape2 = _interopRequireDefault(_storeShape);

var _shallowEqual = __webpack_require__(842);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _wrapActionCreators = __webpack_require__(843);

var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

var _warning = __webpack_require__(570);

var _warning2 = _interopRequireDefault(_warning);

var _isPlainObject = __webpack_require__(578);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _hoistNonReactStatics = __webpack_require__(860);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _invariant = __webpack_require__(861);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultMapStateToProps = function defaultMapStateToProps(state) {
  return {};
}; // eslint-disable-line no-unused-vars
var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
  return { dispatch: dispatch };
};
var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
  return _extends({}, parentProps, stateProps, dispatchProps);
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

var errorObject = { value: null };
function tryCatch(fn, ctx) {
  try {
    return fn.apply(ctx);
  } catch (e) {
    errorObject.value = e;
    return errorObject;
  }
}

// Helps track hot reloading.
var nextVersion = 0;

function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var shouldSubscribe = Boolean(mapStateToProps);
  var mapState = mapStateToProps || defaultMapStateToProps;

  var mapDispatch = void 0;
  if (typeof mapDispatchToProps === 'function') {
    mapDispatch = mapDispatchToProps;
  } else if (!mapDispatchToProps) {
    mapDispatch = defaultMapDispatchToProps;
  } else {
    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
  }

  var finalMergeProps = mergeProps || defaultMergeProps;
  var _options$pure = options.pure,
      pure = _options$pure === undefined ? true : _options$pure,
      _options$withRef = options.withRef,
      withRef = _options$withRef === undefined ? false : _options$withRef;

  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

  // Helps track hot reloading.
  var version = nextVersion++;

  return function wrapWithConnect(WrappedComponent) {
    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

    function checkStateShape(props, methodName) {
      if (!(0, _isPlainObject2["default"])(props)) {
        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
      }
    }

    function computeMergedProps(stateProps, dispatchProps, parentProps) {
      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
      if (false) {
        checkStateShape(mergedProps, 'mergeProps');
      }
      return mergedProps;
    }

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
      };

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.store = props.store || context.store;

        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

        var storeState = _this.store.getState();
        _this.state = { storeState: storeState };
        _this.clearCache();
        return _this;
      }

      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
        if (!this.finalMapStateToProps) {
          return this.configureFinalMapState(store, props);
        }

        var state = store.getState();
        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

        if (false) {
          checkStateShape(stateProps, 'mapStateToProps');
        }
        return stateProps;
      };

      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
        var mappedState = mapState(store.getState(), props);
        var isFactory = typeof mappedState === 'function';

        this.finalMapStateToProps = isFactory ? mappedState : mapState;
        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

        if (isFactory) {
          return this.computeStateProps(store, props);
        }

        if (false) {
          checkStateShape(mappedState, 'mapStateToProps');
        }
        return mappedState;
      };

      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
        if (!this.finalMapDispatchToProps) {
          return this.configureFinalMapDispatch(store, props);
        }

        var dispatch = store.dispatch;

        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

        if (false) {
          checkStateShape(dispatchProps, 'mapDispatchToProps');
        }
        return dispatchProps;
      };

      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
        var mappedDispatch = mapDispatch(store.dispatch, props);
        var isFactory = typeof mappedDispatch === 'function';

        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

        if (isFactory) {
          return this.computeDispatchProps(store, props);
        }

        if (false) {
          checkStateShape(mappedDispatch, 'mapDispatchToProps');
        }
        return mappedDispatch;
      };

      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
        var nextStateProps = this.computeStateProps(this.store, this.props);
        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
          return false;
        }

        this.stateProps = nextStateProps;
        return true;
      };

      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
          return false;
        }

        this.dispatchProps = nextDispatchProps;
        return true;
      };

      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
          return false;
        }

        this.mergedProps = nextMergedProps;
        return true;
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return typeof this.unsubscribe === 'function';
      };

      Connect.prototype.trySubscribe = function trySubscribe() {
        if (shouldSubscribe && !this.unsubscribe) {
          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
          this.handleChange();
        }
      };

      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
        if (this.unsubscribe) {
          this.unsubscribe();
          this.unsubscribe = null;
        }
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        this.trySubscribe();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
          this.haveOwnPropsChanged = true;
        }
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        this.tryUnsubscribe();
        this.clearCache();
      };

      Connect.prototype.clearCache = function clearCache() {
        this.dispatchProps = null;
        this.stateProps = null;
        this.mergedProps = null;
        this.haveOwnPropsChanged = true;
        this.hasStoreStateChanged = true;
        this.haveStatePropsBeenPrecalculated = false;
        this.statePropsPrecalculationError = null;
        this.renderedElement = null;
        this.finalMapDispatchToProps = null;
        this.finalMapStateToProps = null;
      };

      Connect.prototype.handleChange = function handleChange() {
        if (!this.unsubscribe) {
          return;
        }

        var storeState = this.store.getState();
        var prevStoreState = this.state.storeState;
        if (pure && prevStoreState === storeState) {
          return;
        }

        if (pure && !this.doStatePropsDependOnOwnProps) {
          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
          if (!haveStatePropsChanged) {
            return;
          }
          if (haveStatePropsChanged === errorObject) {
            this.statePropsPrecalculationError = errorObject.value;
          }
          this.haveStatePropsBeenPrecalculated = true;
        }

        this.hasStoreStateChanged = true;
        this.setState({ storeState: storeState });
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

        return this.refs.wrappedInstance;
      };

      Connect.prototype.render = function render() {
        var haveOwnPropsChanged = this.haveOwnPropsChanged,
            hasStoreStateChanged = this.hasStoreStateChanged,
            haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated,
            statePropsPrecalculationError = this.statePropsPrecalculationError,
            renderedElement = this.renderedElement;


        this.haveOwnPropsChanged = false;
        this.hasStoreStateChanged = false;
        this.haveStatePropsBeenPrecalculated = false;
        this.statePropsPrecalculationError = null;

        if (statePropsPrecalculationError) {
          throw statePropsPrecalculationError;
        }

        var shouldUpdateStateProps = true;
        var shouldUpdateDispatchProps = true;
        if (pure && renderedElement) {
          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
        }

        var haveStatePropsChanged = false;
        var haveDispatchPropsChanged = false;
        if (haveStatePropsBeenPrecalculated) {
          haveStatePropsChanged = true;
        } else if (shouldUpdateStateProps) {
          haveStatePropsChanged = this.updateStatePropsIfNeeded();
        }
        if (shouldUpdateDispatchProps) {
          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
        }

        var haveMergedPropsChanged = true;
        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
        } else {
          haveMergedPropsChanged = false;
        }

        if (!haveMergedPropsChanged && renderedElement) {
          return renderedElement;
        }

        if (withRef) {
          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
            ref: 'wrappedInstance'
          }));
        } else {
          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
        }

        return this.renderedElement;
      };

      return Connect;
    }(_react.Component);

    Connect.displayName = connectDisplayName;
    Connect.WrappedComponent = WrappedComponent;
    Connect.contextTypes = {
      store: _storeShape2["default"]
    };
    Connect.propTypes = {
      store: _storeShape2["default"]
    };

    if (false) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        if (this.version === version) {
          return;
        }

        // We are hot reloading!
        this.version = version;
        this.trySubscribe();
        this.clearCache();
      };
    }

    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
  };
}

/***/ }),
/* 842 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = shallowEqual;
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var hasOwn = Object.prototype.hasOwnProperty;
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 843 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = wrapActionCreators;

var _redux = __webpack_require__(571);

function wrapActionCreators(actionCreators) {
  return function (dispatch) {
    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
  };
}

/***/ }),
/* 844 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(848);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 845 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(846);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 846 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(532)))

/***/ }),
/* 847 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(574);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 848 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 849 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(850);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 850 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 851 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 852 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(853);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(532), __webpack_require__(12)(module)))

/***/ }),
/* 853 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 854 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(576);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/***/ }),
/* 855 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 856 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(577);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 857 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(545);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 858 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 859 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(580);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 860 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};


/***/ }),
/* 861 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 862 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(13), RootInstanceProvider = __webpack_require__(14), ReactMount = __webpack_require__(10), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var action_types = __webpack_require__(581);

var actions = {
  switchLanguage: function switchLanguage(language) {
    return {
      type: action_types.SWITCH_LANGUAGE,
      language: language
    };
  }
};

module.exports = actions;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(15); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }),
/* 863 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(13), RootInstanceProvider = __webpack_require__(14), ReactMount = __webpack_require__(10), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(571);

var _remoteReduxDevtools = __webpack_require__(864);

var _remoteReduxDevtools2 = _interopRequireDefault(_remoteReduxDevtools);

var _multiLanguage = __webpack_require__(996);

var _multiLanguage2 = _interopRequireDefault(_multiLanguage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// definimos el estado inicial
// creamos el store

// cargamos nuestros reducers (ya combinados)
var store = (0, _redux.createStore)(_multiLanguage2.default, (0, _remoteReduxDevtools2.default)()); // cargamos la función para crear un store
exports.default = store;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(15); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "store.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }),
/* 864 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.composeWithDevTools = exports.default = undefined;

var _devTools = __webpack_require__(865);

Object.defineProperty(exports, 'composeWithDevTools', {
  enumerable: true,
  get: function get() {
    return _devTools.composeWithDevTools;
  }
});

var _devTools2 = _interopRequireDefault(_devTools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _devTools2.default;

/***/ }),
/* 865 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = devToolsEnhancer;
exports.preEnhancer = preEnhancer;
exports.composeWithDevTools = composeWithDevTools;

var _jsan = __webpack_require__(582);

var _socketclusterClient = __webpack_require__(868);

var _socketclusterClient2 = _interopRequireDefault(_socketclusterClient);

var _configureStore = __webpack_require__(887);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _constants = __webpack_require__(930);

var _rnHostDetect = __webpack_require__(931);

var _rnHostDetect2 = _interopRequireDefault(_rnHostDetect);

var _remotedevUtils = __webpack_require__(932);

var _catchErrors = __webpack_require__(944);

var _catchErrors2 = _interopRequireDefault(_catchErrors);

var _filters = __webpack_require__(945);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instanceId = void 0;
var instanceName = void 0;
var suppressConnectErrors = void 0;
var errorCounts = {};
var socketOptions = void 0;
var socket = void 0;
var channel = void 0;
var store = {};
var lastAction = void 0;
var filters = void 0;
var isExcess = void 0;
var isMonitored = void 0;
var started = void 0;
var startOn = void 0;
var stopOn = void 0;
var sendOn = void 0;
var sendOnError = void 0;
var sendTo = void 0;
var lastErrorMsg = void 0;
var locked = void 0;
var paused = void 0;
var actionCreators = void 0;
var stateSanitizer = void 0;
var actionSanitizer = void 0;

function getLiftedState() {
  return (0, _filters.filterStagedActions)(store.liftedStore.getState(), filters);
}

function send() {
  if (!instanceId) instanceId = socket && socket.id || Math.random().toString(36).substr(2);
  try {
    fetch(sendTo, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        type: 'STATE',
        id: instanceId,
        name: instanceName,
        payload: (0, _jsan.stringify)(getLiftedState())
      })
    }).catch(function (err) {
      console.log(err);
    });
  } catch (err) {
    console.log(err);
  }
}

function relay(type, state, action, nextActionId) {
  var message = {
    type: type,
    id: socket.id,
    name: instanceName
  };
  if (state) {
    message.payload = type === 'ERROR' ? state : (0, _jsan.stringify)((0, _filters.filterState)(state, type, filters, stateSanitizer, actionSanitizer, nextActionId));
  }
  if (type === 'ACTION') {
    message.action = (0, _jsan.stringify)(!actionSanitizer ? action : actionSanitizer(action.action, nextActionId - 1));
    message.isExcess = isExcess;
    message.nextActionId = nextActionId;
  } else if (action) {
    message.action = action;
  }
  socket.emit(socket.id ? 'log' : 'log-noid', message);
}

function dispatchRemotely(action) {
  try {
    var result = (0, _remotedevUtils.evalAction)(action, actionCreators);
    store.dispatch(result);
  } catch (e) {
    relay('ERROR', e.message);
  }
}

function handleMessages(message) {
  if (message.type === 'IMPORT' || message.type === 'SYNC' && socket.id && message.id !== socket.id) {
    store.liftedStore.dispatch({
      type: 'IMPORT_STATE', nextLiftedState: (0, _jsan.parse)(message.state)
    });
  } else if (message.type === 'UPDATE') {
    relay('STATE', getLiftedState());
  } else if (message.type === 'START') {
    isMonitored = true;
    if (typeof actionCreators === 'function') actionCreators = actionCreators();
    relay('STATE', getLiftedState(), actionCreators);
  } else if (message.type === 'STOP' || message.type === 'DISCONNECTED') {
    isMonitored = false;
    relay('STOP');
  } else if (message.type === 'ACTION') {
    dispatchRemotely(message.action);
  } else if (message.type === 'DISPATCH') {
    store.liftedStore.dispatch(message.action);
  }
}

function async(fn) {
  setTimeout(fn, 0);
}

function sendError(errorAction) {
  // Prevent flooding
  if (errorAction.message && errorAction.message === lastErrorMsg) return;
  lastErrorMsg = errorAction.message;

  async(function () {
    store.dispatch(errorAction);
    if (!started) send();
  });
}

function str2array(str) {
  return typeof str === 'string' ? [str] : str && str.length;
}

function init(options) {
  instanceName = options.name;

  var _ref = options.filters || {};

  var blacklist = _ref.blacklist;
  var whitelist = _ref.whitelist;

  filters = (0, _filters.getLocalFilter)({
    actionsBlacklist: blacklist || options.actionsBlacklist,
    actionsWhitelist: whitelist || options.actionsWhitelist
  });
  if (options.port) {
    socketOptions = {
      port: options.port,
      hostname: options.hostname || 'localhost',
      secure: options.secure
    };
  } else socketOptions = _constants.defaultSocketOptions;

  suppressConnectErrors = options.suppressConnectErrors !== undefined ? options.suppressConnectErrors : true;

  startOn = str2array(options.startOn);
  stopOn = str2array(options.stopOn);
  sendOn = str2array(options.sendOn);
  sendOnError = options.sendOnError;
  if (sendOn || sendOnError) {
    sendTo = options.sendTo || (socketOptions.secure ? 'https' : 'http') + '://' + socketOptions.hostname + ':' + socketOptions.port;
    instanceId = options.id;
  }
  if (sendOnError === 1) (0, _catchErrors2.default)(sendError);

  if (options.actionCreators) actionCreators = function actionCreators() {
    return (0, _remotedevUtils.getActionsArray)(options.actionCreators);
  };
  stateSanitizer = options.stateSanitizer;
  actionSanitizer = options.actionSanitizer;
}

function login() {
  socket.emit('login', 'master', function (err, channelName) {
    if (err) {
      console.log(err);return;
    }
    channel = channelName;
    socket.subscribe(channelName).watch(handleMessages);
    socket.on(channelName, handleMessages);
  });
  started = true;
  relay('START');
}

function stop(keepConnected) {
  started = false;
  isMonitored = false;
  if (!socket) return;
  socket.destroyChannel(channel);
  if (keepConnected) {
    socket.off(channel, handleMessages);
  } else {
    socket.off();
    socket.disconnect();
  }
}

function start() {
  if (started || socket && socket.getState() === socket.CONNECTING) return;

  socket = _socketclusterClient2.default.connect(socketOptions);

  socket.on('error', function (err) {
    // if we've already had this error before, increment it's counter, otherwise assign it '1' since we've had the error once.
    errorCounts[err.name] = errorCounts.hasOwnProperty(err.name) ? errorCounts[err.name] + 1 : 1;

    if (suppressConnectErrors) {
      if (errorCounts[err.name] === 1) {
        console.log('remote-redux-devtools: Socket connection errors are being suppressed. ' + '\n' + 'This can be disabled by setting suppressConnectErrors to \'false\'.');
        console.log(err);
      }
    } else {
      console.log(err);
    }
  });
  socket.on('connect', function () {
    console.log('connected to remotedev-server');
    errorCounts = {}; // clear the errorCounts object, so that we'll log any new errors in the event of a disconnect
    login();
  });
  socket.on('disconnect', function () {
    stop(true);
  });
}

function checkForReducerErrors() {
  var liftedState = arguments.length <= 0 || arguments[0] === undefined ? store.liftedStore.getState() : arguments[0];

  if (liftedState.computedStates[liftedState.currentStateIndex].error) {
    if (started) relay('STATE', (0, _filters.filterStagedActions)(liftedState, filters));else send();
    return true;
  }
  return false;
}

function monitorReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments[1];

  lastAction = action.type;
  if (!started && sendOnError === 2 && store.liftedStore) async(checkForReducerErrors);else if (action.action) {
    if (startOn && !started && startOn.indexOf(action.action.type) !== -1) async(start);else if (stopOn && started && stopOn.indexOf(action.action.type) !== -1) async(stop);else if (sendOn && !started && sendOn.indexOf(action.action.type) !== -1) async(send);
  }
  return state;
}

function handleChange(state, liftedState, maxAge) {
  if (checkForReducerErrors(liftedState)) return;

  if (lastAction === 'PERFORM_ACTION') {
    var nextActionId = liftedState.nextActionId;
    var liftedAction = liftedState.actionsById[nextActionId - 1];
    if ((0, _filters.isFiltered)(liftedAction.action, filters)) return;
    relay('ACTION', state, liftedAction, nextActionId);
    if (!isExcess && maxAge) isExcess = liftedState.stagedActionIds.length >= maxAge;
  } else {
    if (lastAction === 'JUMP_TO_STATE') return;
    if (lastAction === 'PAUSE_RECORDING') {
      paused = liftedState.isPaused;
    } else if (lastAction === 'LOCK_CHANGES') {
      locked = liftedState.isLocked;
    }
    if (paused || locked) {
      if (lastAction) lastAction = undefined;else return;
    }
    relay('STATE', (0, _filters.filterStagedActions)(liftedState, filters));
  }
}

function devToolsEnhancer() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  init(_extends({}, options, {
    hostname: (0, _rnHostDetect2.default)(options.hostname || 'localhost')
  }));
  var realtime = typeof options.realtime === 'undefined' ? "production" === 'development' : options.realtime;
  if (!realtime && !(startOn || sendOn || sendOnError)) return function (f) {
    return f;
  };

  var maxAge = options.maxAge || 30;
  return function (next) {
    return function (reducer, initialState) {
      store = (0, _configureStore2.default)(next, monitorReducer, {
        maxAge: maxAge,
        shouldCatchErrors: !!sendOnError,
        shouldHotReload: options.shouldHotReload,
        shouldRecordChanges: options.shouldRecordChanges,
        shouldStartLocked: options.shouldStartLocked,
        pauseActionType: options.pauseActionType || '@@PAUSED'
      })(reducer, initialState);

      if (realtime) start();
      store.subscribe(function () {
        if (isMonitored) handleChange(store.getState(), store.liftedStore.getState(), maxAge);
      });
      return store;
    };
  };
}

function preEnhancer(createStore) {
  return function (reducer, preloadedState, enhancer) {
    store = createStore(reducer, preloadedState, enhancer);
    return _extends({}, store, {
      dispatch: function dispatch(action) {
        return locked ? action : store.dispatch(action);
      }
    });
  };
}

devToolsEnhancer.updateStore = function (newStore) {
  console.warn('devTools.updateStore is deprecated use composeWithDevTools instead: ' + 'https://github.com/zalmoxisus/remote-redux-devtools#use-devtools-compose-helper');
  store = newStore;
};

var compose = function compose(options) {
  return function () {
    for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }

    return function () {
      return [preEnhancer].concat(funcs).reduceRight(function (composed, f) {
        return f(composed);
      }, devToolsEnhancer(options).apply(undefined, arguments));
    };
  };
};

function composeWithDevTools() {
  if (arguments.length === 0) {
    return devToolsEnhancer();
  }
  if (arguments.length === 1 && _typeof(arguments.length <= 0 ? undefined : arguments[0]) === 'object') {
    return compose(arguments.length <= 0 ? undefined : arguments[0]);
  }
  return compose({}).apply(undefined, arguments);
}

/***/ }),
/* 866 */
/***/ (function(module, exports, __webpack_require__) {

var pathGetter = __webpack_require__(584);
var utils = __webpack_require__(867);

var WMap = typeof WeakMap !== 'undefined'?
  WeakMap:
  function() {
    var keys = [];
    var values = [];
    return {
      set: function(key, value) {
        keys.push(key);
        values.push(value);
      },
      get: function(key) {
        for (var i = 0; i < keys.length; i++) {
          if (keys[i] === key) {
            return values[i];
          }
        }
      }
    }
  };

// Based on https://github.com/douglascrockford/JSON-js/blob/master/cycle.js

exports.decycle = function decycle(object, options, replacer) {
  'use strict';

  var map = new WMap()

  var hasCircular = Object.prototype.hasOwnProperty.call(options, 'circular');

  return (function derez(_value, path, key) {

    // The derez recurses through the object, producing the deep copy.

    var i,        // The loop counter
      name,       // Property name
      nu;         // The new object or array

    // typeof null === 'object', so go on if this value is really an object but not
    // one of the weird builtin objects.

    var value = replacer ? replacer(key || '', _value) : _value;

    if (options.date && value instanceof Date) {
      return {$jsan: 'd' + value.getTime()};
    }
    if (options.regex && value instanceof RegExp) {
      return {$jsan: 'r' + utils.getRegexFlags(value) + ',' + value.source};
    }
    if (options['function'] && typeof value === 'function') {
      return {$jsan: 'f' + utils.stringifyFunction(value, options['function'])}
    }
    if (options['nan'] && typeof value === 'number' && isNaN(value)) {
      return {$jsan: 'n'}
    }
    if (options['infinity']) {
      if (Number.POSITIVE_INFINITY === value) return {$jsan: 'i'}
      if (Number.NEGATIVE_INFINITY === value) return {$jsan: 'y'}
    }
    if (options['undefined'] && value === undefined) {
      return {$jsan: 'u'}
    }
    if (options['error'] && value instanceof Error) {
      return {$jsan: 'e' + value.message}
    }
    if (options['symbol'] && typeof value === 'symbol') {
      var symbolKey = Symbol.keyFor(value)
      if (symbolKey !== undefined) {
        return {$jsan: 'g' + symbolKey}
      }

      // 'Symbol(foo)'.slice(7, -1) === 'foo'
      return {$jsan: 's' + value.toString().slice(7, -1)}
    }

    if (options['map'] && typeof Map === 'function' && value instanceof Map && typeof Array.from === 'function') {
      return {$jsan: 'm' + JSON.stringify(decycle(Array.from(value), options, replacer))}
    }

    if (options['set'] && typeof Set === 'function' && value instanceof Set && typeof Array.from === 'function') {
      return {$jsan: 'l' + JSON.stringify(decycle(Array.from(value), options, replacer))}
    }

    if (value && typeof value.toJSON === 'function') {
      value = value.toJSON(key);
    }

    if (typeof value === 'object' && value !== null &&
      !(value instanceof Boolean) &&
      !(value instanceof Date)    &&
      !(value instanceof Number)  &&
      !(value instanceof RegExp)  &&
      !(value instanceof String)  &&
      !(typeof value === 'symbol')  &&
      !(value instanceof Error)) {

        // If the value is an object or array, look to see if we have already
        // encountered it. If so, return a $ref/path object.

      if (typeof value === 'object' && value !== null) {
        var foundPath = map.get(value);
        if (foundPath) {
          if (hasCircular && path.indexOf(foundPath) === 0) {
            return typeof options.circular === 'function'?
              options.circular(value, path, foundPath):
              options.circular;
          }
          return {$jsan: foundPath};
        }
        map.set(value, path);
      }


      // If it is an array, replicate the array.

      if (Object.prototype.toString.apply(value) === '[object Array]') {
          nu = [];
          for (i = 0; i < value.length; i += 1) {
              nu[i] = derez(value[i], path + '[' + i + ']', i);
          }
      } else {

        // If it is an object, replicate the object.

        nu = {};
        for (name in value) {
          if (Object.prototype.hasOwnProperty.call(value, name)) {
            var nextPath = /^\w+$/.test(name) ?
              '.' + name :
              '[' + JSON.stringify(name) + ']';
            nu[name] = name === '$jsan' ? [derez(value[name], path + nextPath)] : derez(value[name], path + nextPath, name);
          }
        }
      }
      return nu;
    }
    return value;
  }(object, '$'));
};


exports.retrocycle = function retrocycle($) {
  'use strict';


  return (function rez(value) {

    // The rez function walks recursively through the object looking for $jsan
    // properties. When it finds one that has a value that is a path, then it
    // replaces the $jsan object with a reference to the value that is found by
    // the path.

    var i, item, name, path;

    if (value && typeof value === 'object') {
      if (Object.prototype.toString.apply(value) === '[object Array]') {
        for (i = 0; i < value.length; i += 1) {
          item = value[i];
          if (item && typeof item === 'object') {
            if (item.$jsan) {
              value[i] = utils.restore(item.$jsan, $);
            } else {
              rez(item);
            }
          }
        }
      } else {
        for (name in value) {
          // base case passed raw object
          if(typeof value[name] === 'string' && name === '$jsan'){
            return utils.restore(value.$jsan, $);
            break;
          }
          else {
            if (name === '$jsan') {
              value[name] = value[name][0];
            }
            if (typeof value[name] === 'object') {
              item = value[name];
              if (item && typeof item === 'object') {
                if (item.$jsan) {
                  value[name] = utils.restore(item.$jsan, $);
                } else {
                  rez(item);
                }
              }
            }
          }
        }
      }
    }
    return value;
  }($));
};


/***/ }),
/* 867 */
/***/ (function(module, exports, __webpack_require__) {

var pathGetter = __webpack_require__(584);
var jsan = __webpack_require__(583);

exports.getRegexFlags = function getRegexFlags(regex) {
  var flags = '';
  if (regex.ignoreCase) flags += 'i';
  if (regex.global) flags += 'g';
  if (regex.multiline) flags += 'm';
  return flags;
};

exports.stringifyFunction = function stringifyFunction(fn, customToString) {
  if (typeof customToString === 'function') {
    return customToString(fn);
  }
  var str = fn.toString();
  var match = str.match(/^[^{]*{|^[^=]*=>/);
  var start = match ? match[0] : '<function> ';
  var end = str[str.length - 1] === '}' ? '}' : '';
  return start.replace(/\r\n|\n/g, ' ').replace(/\s+/g, ' ') + ' /* ... */ ' + end;
};

exports.restore = function restore(obj, root) {
  var type = obj[0];
  var rest = obj.slice(1);
  switch(type) {
    case '$':
      return pathGetter(root, obj);
    case 'r':
      var comma = rest.indexOf(',');
      var flags = rest.slice(0, comma);
      var source = rest.slice(comma + 1);
      return RegExp(source, flags);
    case 'd':
      return new Date(+rest);
    case 'f':
      var fn = function() { throw new Error("can't run jsan parsed function") };
      fn.toString = function() { return rest; };
      return fn;
    case 'u':
      return undefined;
    case 'e':
      var error = new Error(rest);
      error.stack = 'Stack is unavailable for jsan parsed errors';
      return error;
    case 's':
      return Symbol(rest);
    case 'g':
      return Symbol.for(rest);
    case 'm':
      return new Map(jsan.parse(rest));
    case 'l':
      return new Set(jsan.parse(rest));
    case 'n':
      return NaN;
    case 'i':
      return Infinity;
    case 'y':
      return -Infinity;
    default:
      console.warn('unknown type', obj);
      return obj;
  }
}


/***/ }),
/* 868 */
/***/ (function(module, exports, __webpack_require__) {

var SCSocket = __webpack_require__(585);
var SCSocketCreator = __webpack_require__(886);

module.exports.SCSocketCreator = SCSocketCreator;
module.exports.SCSocket = SCSocket;

module.exports.SCEmitter = __webpack_require__(546).SCEmitter;

module.exports.connect = function (options) {
  return SCSocketCreator.connect(options);
};

module.exports.destroy = function (options) {
  return SCSocketCreator.destroy(options);
};

module.exports.connections = SCSocketCreator.connections;

module.exports.version = '5.5.2';


/***/ }),
/* 869 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 870 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 871 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 872 */
/***/ (function(module, exports) {


/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),
/* 873 */
/***/ (function(module, exports) {

module.exports.create = (function () {
  function F() {};

  return function (o) {
    if (arguments.length != 1) {
      throw new Error('Object.create implementation only accepts one parameter.');
    }
    F.prototype = o;
    return new F();
  }
})();

/***/ }),
/* 874 */
/***/ (function(module, exports, __webpack_require__) {

var SCEmitter = __webpack_require__(546).SCEmitter;

var SCChannel = function (name, client, options) {
  var self = this;

  SCEmitter.call(this);

  this.PENDING = 'pending';
  this.SUBSCRIBED = 'subscribed';
  this.UNSUBSCRIBED = 'unsubscribed';

  this.name = name;
  this.state = this.UNSUBSCRIBED;
  this.client = client;

  this.options = options || {};
  this.setOptions(this.options);
};

SCChannel.prototype = Object.create(SCEmitter.prototype);

SCChannel.prototype.setOptions = function (options) {
  if (!options) {
    options = {};
  }
  this.waitForAuth = options.waitForAuth || false;
  if (options.data !== undefined) {
    this.data = options.data;
  }
};

SCChannel.prototype.getState = function () {
  return this.state;
};

SCChannel.prototype.subscribe = function (options) {
  this.client.subscribe(this.name, options);
};

SCChannel.prototype.unsubscribe = function () {
  this.client.unsubscribe(this.name);
};

SCChannel.prototype.isSubscribed = function (includePending) {
  return this.client.isSubscribed(this.name, includePending);
};

SCChannel.prototype.publish = function (data, callback) {
  this.client.publish(this.name, data, callback);
};

SCChannel.prototype.watch = function (handler) {
  this.client.watch(this.name, handler);
};

SCChannel.prototype.unwatch = function (handler) {
  this.client.unwatch(this.name, handler);
};

SCChannel.prototype.watchers = function () {
  return this.client.watchers(this.name);
};

SCChannel.prototype.destroy = function () {
  this.client.destroyChannel(this.name);
};

module.exports.SCChannel = SCChannel;


/***/ }),
/* 875 */
/***/ (function(module, exports) {

// Based on https://github.com/dscape/cycle/blob/master/cycle.js

module.exports = function decycle(object) {
// Make a deep copy of an object or array, assuring that there is at most
// one instance of each object or array in the resulting structure. The
// duplicate references (which might be forming cycles) are replaced with
// an object of the form
//      {$ref: PATH}
// where the PATH is a JSONPath string that locates the first occurance.
// So,
//      var a = [];
//      a[0] = a;
//      return JSON.stringify(JSON.decycle(a));
// produces the string '[{"$ref":"$"}]'.

// JSONPath is used to locate the unique object. $ indicates the top level of
// the object or array. [NUMBER] or [STRING] indicates a child member or
// property.

    var objects = [],   // Keep a reference to each unique object or array
        paths = [];     // Keep the path to each unique object or array

    return (function derez(value, path) {

// The derez recurses through the object, producing the deep copy.

        var i,          // The loop counter
            name,       // Property name
            nu;         // The new object or array

// typeof null === 'object', so go on if this value is really an object but not
// one of the weird builtin objects.

        if (typeof value === 'object' && value !== null &&
                !(value instanceof Boolean) &&
                !(value instanceof Date)    &&
                !(value instanceof Number)  &&
                !(value instanceof RegExp)  &&
                !(value instanceof String)) {

// If the value is an object or array, look to see if we have already
// encountered it. If so, return a $ref/path object. This is a hard way,
// linear search that will get slower as the number of unique objects grows.

            for (i = 0; i < objects.length; i += 1) {
                if (objects[i] === value) {
                    return {$ref: paths[i]};
                }
            }

// Otherwise, accumulate the unique value and its path.

            objects.push(value);
            paths.push(path);

// If it is an array, replicate the array.

            if (Object.prototype.toString.apply(value) === '[object Array]') {
                nu = [];
                for (i = 0; i < value.length; i += 1) {
                    nu[i] = derez(value[i], path + '[' + i + ']');
                }
            } else {

// If it is an object, replicate the object.

                nu = {};
                for (name in value) {
                    if (Object.prototype.hasOwnProperty.call(value, name)) {
                        nu[name] = derez(value[name],
                            path + '[' + JSON.stringify(name) + ']');
                    }
                }
            }
            return nu;
        }
        return value;
    }(object, '$'));
};


/***/ }),
/* 876 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var AuthEngine = function () {
  this._internalStorage = {};
};

AuthEngine.prototype._isLocalStorageEnabled = function () {
  var err;
  try {
    // Some browsers will throw an error here if localStorage is disabled.
    global.localStorage;
    
    // Safari, in Private Browsing Mode, looks like it supports localStorage but all calls to setItem
    // throw QuotaExceededError. We're going to detect this and avoid hard to debug edge cases.
    global.localStorage.setItem('__scLocalStorageTest', 1);
    global.localStorage.removeItem('__scLocalStorageTest');
  } catch (e) {
    err = e;
  }
  return !err;
};

AuthEngine.prototype.saveToken = function (name, token, options, callback) {
  if (this._isLocalStorageEnabled() && global.localStorage) {
    global.localStorage.setItem(name, token);
  } else {
    this._internalStorage[name] = token;
  }
  callback && callback(null, token);
};

AuthEngine.prototype.removeToken = function (name, callback) {
  var token;

  this.loadToken(name, function (err, authToken) {
    token = authToken;
  });

  if (this._isLocalStorageEnabled() && global.localStorage) {
    global.localStorage.removeItem(name);
  }
  delete this._internalStorage[name];

  callback && callback(null, token);
};

AuthEngine.prototype.loadToken = function (name, callback) {
  var token;

  if (this._isLocalStorageEnabled() && global.localStorage) {
    token = global.localStorage.getItem(name);
  } else {
    token = this._internalStorage[name] || null;
  }
  callback(null, token);
};

module.exports.AuthEngine = AuthEngine;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(532)))

/***/ }),
/* 877 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

var arrayBufferToBase64 = function (arraybuffer) {
  var bytes = new Uint8Array(arraybuffer);
  var len = bytes.length;
  var base64 = '';

  for (var i = 0; i < len; i += 3) {
    base64 += base64Chars[bytes[i] >> 2];
    base64 += base64Chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
    base64 += base64Chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
    base64 += base64Chars[bytes[i + 2] & 63];
  }

  if ((len % 3) === 2) {
    base64 = base64.substring(0, base64.length - 1) + '=';
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + '==';
  }

  return base64;
};

var binaryToBase64Replacer = function (key, value) {
  if (global.ArrayBuffer && value instanceof global.ArrayBuffer) {
    return {
      base64: true,
      data: arrayBufferToBase64(value)
    };
  } else if (global.Buffer) {
    if (value instanceof global.Buffer){
      return {
        base64: true,
        data: value.toString('base64')
      };
    }
    // Some versions of Node.js convert Buffers to Objects before they are passed to
    // the replacer function - Because of this, we need to rehydrate Buffers
    // before we can convert them to base64 strings.
    if (value && value.type === 'Buffer' && Array.isArray(value.data)) {
      var rehydratedBuffer;
      if (global.Buffer.from) {
        rehydratedBuffer = global.Buffer.from(value.data);
      } else {
        rehydratedBuffer = new global.Buffer(value.data);
      }
      return {
        base64: true,
        data: rehydratedBuffer.toString('base64')
      };
    }
  }
  return value;
};

// Decode the data which was transmitted over the wire to a JavaScript Object in a format which SC understands.
// See encode function below for more details.
module.exports.decode = function (input) {
  if (input == null) {
   return null;
  }
  // Leave ping or pong message as is
  if (input === '#1' || input === '#2') {
    return input;
  }
  var message = input.toString();

  try {
    return JSON.parse(message);
  } catch (err) {}
  return message;
};

// Encode a raw JavaScript object (which is in the SC protocol format) into a format for
// transfering it over the wire. In this case, we just convert it into a simple JSON string.
// If you want to create your own custom codec, you can encode the object into any format
// (e.g. binary ArrayBuffer or string with any kind of compression) so long as your decode
// function is able to rehydrate that object back into its original JavaScript Object format
// (which adheres to the SC protocol).
// See https://github.com/SocketCluster/socketcluster/blob/master/socketcluster-protocol.md
// for details about the SC protocol.
module.exports.encode = function (object) {
  // Leave ping or pong message as is
  if (object === '#1' || object === '#2') {
    return object;
  }
  return JSON.stringify(object, binaryToBase64Replacer);
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(532)))

/***/ }),
/* 878 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var SCEmitter = __webpack_require__(546).SCEmitter;
var Response = __webpack_require__(587).Response;
var querystring = __webpack_require__(588);
var WebSocket;
var createWebSocket;

if (global.WebSocket) {
  WebSocket = global.WebSocket;
  createWebSocket = function (uri, options) {
    return new WebSocket(uri);
  };
} else {
  WebSocket = __webpack_require__(881);
  createWebSocket = function (uri, options) {
    return new WebSocket(uri, null, options);
  };
}

var scErrors = __webpack_require__(547);
var TimeoutError = scErrors.TimeoutError;


var SCTransport = function (authEngine, codecEngine, options) {
  this.state = this.CLOSED;
  this.auth = authEngine;
  this.codec = codecEngine;
  this.options = options;
  this.connectTimeout = options.connectTimeout;
  this.pingTimeout = options.ackTimeout;
  this.callIdGenerator = options.callIdGenerator;

  this._pingTimeoutTicker = null;
  this._callbackMap = {};

  this.open();
};

SCTransport.prototype = Object.create(SCEmitter.prototype);

SCTransport.CONNECTING = SCTransport.prototype.CONNECTING = 'connecting';
SCTransport.OPEN = SCTransport.prototype.OPEN = 'open';
SCTransport.CLOSED = SCTransport.prototype.CLOSED = 'closed';

SCTransport.prototype.uri = function () {
  var query = this.options.query || {};
  var schema = this.options.secure ? 'wss' : 'ws';

  if (this.options.timestampRequests) {
    query[this.options.timestampParam] = (new Date()).getTime();
  }

  query = querystring.encode(query);

  if (query.length) {
    query = '?' + query;
  }

  var host;
  if (this.options.host) {
    host = this.options.host;
  } else {
    var port = '';

    if (this.options.port && ((schema == 'wss' && this.options.port != 443)
      || (schema == 'ws' && this.options.port != 80))) {
      port = ':' + this.options.port;
    }
    host = this.options.hostname + port;
  }

  return schema + '://' + host + this.options.path + query;
};

SCTransport.prototype.open = function () {
  var self = this;

  this.state = this.CONNECTING;
  var uri = this.uri();

  var wsSocket = createWebSocket(uri, this.options);
  wsSocket.binaryType = this.options.binaryType;
  this.socket = wsSocket;

  wsSocket.onopen = function () {
    self._onOpen();
  };

  wsSocket.onclose = function (event) {
    var code;
    if (event.code == null) {
      // This is to handle an edge case in React Native whereby
      // event.code is undefined when the mobile device is locked.
      // TODO: This is not perfect since this condition could also apply to
      // an abnormal close (no close control frame) which would be a 1006.
      code = 1005;
    } else {
      code = event.code;
    }
    self._onClose(code, event.reason);
  };

  wsSocket.onmessage = function (message, flags) {
    self._onMessage(message.data);
  };

  wsSocket.onerror = function (error) {
    // The onclose event will be called automatically after the onerror event
    // if the socket is connected - Otherwise, if it's in the middle of
    // connecting, we want to close it manually with a 1006 - This is necessary
    // to prevent inconsistent behavior when running the client in Node.js
    // vs in a browser.

    if (self.state === self.CONNECTING) {
      self._onClose(1006);
    }
  };

  this._connectTimeoutRef = setTimeout(function () {
    self._onClose(4007);
    self.socket.close(4007);
  }, this.connectTimeout);
};

SCTransport.prototype._onOpen = function () {
  var self = this;

  clearTimeout(this._connectTimeoutRef);
  this._resetPingTimeout();

  this._handshake(function (err, status) {
    if (err) {
      self._onError(err);
      self._onClose(4003);
      self.socket.close(4003);
    } else {
      self.state = self.OPEN;
      SCEmitter.prototype.emit.call(self, 'open', status);
      self._resetPingTimeout();
    }
  });
};

SCTransport.prototype._handshake = function (callback) {
  var self = this;
  this.auth.loadToken(this.options.authTokenName, function (err, token) {
    if (err) {
      callback(err);
    } else {
      // Don't wait for this.state to be 'open'.
      // The underlying WebSocket (this.socket) is already open.
      var options = {
        force: true
      };
      self.emit('#handshake', {
        authToken: token
      }, options, function (err, status) {
        if (status) {
          // Add the token which was used as part of authentication attempt
          // to the status object.
          status.authToken = token;
          if (status.authError) {
            status.authError = scErrors.hydrateError(status.authError);
          }
        }
        callback(err, status);
      });
    }
  });
};

SCTransport.prototype._onClose = function (code, data) {
  delete this.socket.onopen;
  delete this.socket.onclose;
  delete this.socket.onmessage;
  delete this.socket.onerror;

  clearTimeout(this._connectTimeoutRef);

  if (this.state == this.OPEN) {
    this.state = this.CLOSED;
    SCEmitter.prototype.emit.call(this, 'close', code, data);

  } else if (this.state == this.CONNECTING) {
    this.state = this.CLOSED;
    SCEmitter.prototype.emit.call(this, 'openAbort', code, data);
  }
};

SCTransport.prototype._onMessage = function (message) {
  SCEmitter.prototype.emit.call(this, 'event', 'message', message);

  var obj = this.decode(message);

  // If ping
  if (obj == '#1') {
    this._resetPingTimeout();
    if (this.socket.readyState == this.socket.OPEN) {
      this.sendObject('#2');
    }
  } else {
    var event = obj.event;

    if (event) {
      var response = new Response(this, obj.cid);
      SCEmitter.prototype.emit.call(this, 'event', event, obj.data, response);
    } else if (obj.rid != null) {

      var eventObject = this._callbackMap[obj.rid];
      if (eventObject) {
        clearTimeout(eventObject.timeout);
        delete this._callbackMap[obj.rid];

        if (eventObject.callback) {
          var rehydratedError = scErrors.hydrateError(obj.error);
          eventObject.callback(rehydratedError, obj.data);
        }
      }
    } else {
      SCEmitter.prototype.emit.call(this, 'event', 'raw', obj);
    }
  }
};

SCTransport.prototype._onError = function (err) {
  SCEmitter.prototype.emit.call(this, 'error', err);
};

SCTransport.prototype._resetPingTimeout = function () {
  var self = this;

  var now = (new Date()).getTime();
  clearTimeout(this._pingTimeoutTicker);

  this._pingTimeoutTicker = setTimeout(function () {
    self._onClose(4000);
    self.socket.close(4000);
  }, this.pingTimeout);
};

SCTransport.prototype.getBytesReceived = function () {
  return this.socket.bytesReceived;
};

SCTransport.prototype.close = function (code, data) {
  code = code || 1000;

  if (this.state == this.OPEN) {
    var packet = {
      code: code,
      data: data
    };
    this.emit('#disconnect', packet);

    this._onClose(code, data);
    this.socket.close(code);

  } else if (this.state == this.CONNECTING) {
    this._onClose(code, data);
    this.socket.close(code);
  }
};

SCTransport.prototype.emitObject = function (eventObject) {
  var simpleEventObject = {
    event: eventObject.event,
    data: eventObject.data
  };

  if (eventObject.callback) {
    simpleEventObject.cid = eventObject.cid = this.callIdGenerator();
    this._callbackMap[eventObject.cid] = eventObject;
  }

  this.sendObject(simpleEventObject);
  return eventObject.cid || null;
};

SCTransport.prototype._handleEventAckTimeout = function (eventObject) {
  var errorMessage = "Event response for '" + eventObject.event + "' timed out";
  var error = new TimeoutError(errorMessage);

  if (eventObject.cid) {
    delete this._callbackMap[eventObject.cid];
  }
  var callback = eventObject.callback;
  delete eventObject.callback;
  callback.call(eventObject, error, eventObject);
};

// The last two optional arguments (a and b) can be options and/or callback
SCTransport.prototype.emit = function (event, data, a, b) {
  var self = this;

  var callback, options;

  if (b) {
    options = a;
    callback = b;
  } else {
    if (a instanceof Function) {
      options = {};
      callback = a;
    } else {
      options = a;
    }
  }

  var eventObject = {
    event: event,
    data: data,
    callback: callback
  };

  if (callback && !options.noTimeout) {
    eventObject.timeout = setTimeout(function () {
      self._handleEventAckTimeout(eventObject);
    }, this.options.ackTimeout);
  }

  var cid = null;
  if (this.state == this.OPEN || options.force) {
    cid = this.emitObject(eventObject);
  }
  return cid;
};

SCTransport.prototype.cancelPendingResponse = function (cid) {
  delete this._callbackMap[cid];
};

SCTransport.prototype.decode = function (message) {
  return this.codec.decode(message);
};

SCTransport.prototype.encode = function (object) {
  return this.codec.encode(object);
};

SCTransport.prototype.send = function (data) {
  if (this.socket.readyState != this.socket.OPEN) {
    this._onClose(1005);
  } else {
    this.socket.send(data);
  }
};

SCTransport.prototype.serializeObject = function (object) {
  var str, formatError;
  try {
    str = this.encode(object);
  } catch (err) {
    formatError = err;
    this._onError(formatError);
  }
  if (!formatError) {
    return str;
  }
  return null;
};

SCTransport.prototype.sendObject = function (object) {
  var str = this.serializeObject(object);
  if (str != null) {
    this.send(str);
  }
};

module.exports.SCTransport = SCTransport;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(532)))

/***/ }),
/* 879 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 880 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 881 */
/***/ (function(module, exports) {

var global;
if (typeof WorkerGlobalScope !== 'undefined') {
  global = self;
} else {
  global = typeof window != 'undefined' && window || (function() { return this; })();
}

var WebSocket = global.WebSocket || global.MozWebSocket;

/**
 * WebSocket constructor.
 *
 * The third `opts` options object gets ignored in web browsers, since it's
 * non-standard, and throws a TypeError if passed to the constructor.
 * See: https://github.com/einaros/ws/issues/227
 *
 * @param {String} uri
 * @param {Array} protocols (optional)
 * @param {Object} opts (optional)
 * @api public
 */

function ws(uri, protocols, opts) {
  var instance;
  if (protocols) {
    instance = new WebSocket(uri, protocols);
  } else {
    instance = new WebSocket(uri);
  }
  return instance;
}

if (WebSocket) ws.prototype = WebSocket.prototype;

module.exports = WebSocket ? ws : null;


/***/ }),
/* 882 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(883);


/***/ }),
/* 883 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Constants.
 */

var errorMessage;

errorMessage = 'An argument without append, prepend, ' +
    'or detach methods was given to `List';

/**
 * Creates a new List: A linked list is a bit like an Array, but
 * knows nothing about how many items are in it, and knows only about its
 * first (`head`) and last (`tail`) items. Each item (e.g. `head`, `tail`,
 * &c.) knows which item comes before or after it (its more like the
 * implementation of the DOM in JavaScript).
 * @global
 * @private
 * @constructor
 * @class Represents an instance of List.
 */

function List(/*items...*/) {
    if (arguments.length) {
        return List.from(arguments);
    }
}

var ListPrototype;

ListPrototype = List.prototype;

/**
 * Creates a new list from the arguments (each a list item) passed in.
 * @name List.of
 * @param {...ListItem} [items] - Zero or more items to attach.
 * @returns {list} - A new instance of List.
 */

List.of = function (/*items...*/) {
    return List.from.call(this, arguments);
};

/**
 * Creates a new list from the given array-like object (each a list item)
 * passed in.
 * @name List.from
 * @param {ListItem[]} [items] - The items to append.
 * @returns {list} - A new instance of List.
 */
List.from = function (items) {
    var list = new this(), length, iterator, item;

    if (items && (length = items.length)) {
        iterator = -1;

        while (++iterator < length) {
            item = items[iterator];

            if (item !== null && item !== undefined) {
                list.append(item);
            }
        }
    }

    return list;
};

/**
 * List#head
 * Default to `null`.
 */
ListPrototype.head = null;

/**
 * List#tail
 * Default to `null`.
 */
ListPrototype.tail = null;

/**
 * Returns the list's items as an array. This does *not* detach the items.
 * @name List#toArray
 * @returns {ListItem[]} - An array of (still attached) ListItems.
 */
ListPrototype.toArray = function () {
    var item = this.head,
        result = [];

    while (item) {
        result.push(item);
        item = item.next;
    }

    return result;
};

/**
 * Prepends the given item to the list: Item will be the new first item
 * (`head`).
 * @name List#prepend
 * @param {ListItem} item - The item to prepend.
 * @returns {ListItem} - An instance of ListItem (the given item).
 */
ListPrototype.prepend = function (item) {
    if (!item) {
        return false;
    }

    if (!item.append || !item.prepend || !item.detach) {
        throw new Error(errorMessage + '#prepend`.');
    }

    var self, head;

    // Cache self.
    self = this;

    // If self has a first item, defer prepend to the first items prepend
    // method, and return the result.
    head = self.head;

    if (head) {
        return head.prepend(item);
    }

    // ...otherwise, there is no `head` (or `tail`) item yet.

    // Detach the prependee.
    item.detach();

    // Set the prependees parent list to reference self.
    item.list = self;

    // Set self's first item to the prependee, and return the item.
    self.head = item;

    return item;
};

/**
 * Appends the given item to the list: Item will be the new last item (`tail`)
 * if the list had a first item, and its first item (`head`) otherwise.
 * @name List#append
 * @param {ListItem} item - The item to append.
 * @returns {ListItem} - An instance of ListItem (the given item).
 */

ListPrototype.append = function (item) {
    if (!item) {
        return false;
    }

    if (!item.append || !item.prepend || !item.detach) {
        throw new Error(errorMessage + '#append`.');
    }

    var self, head, tail;

    // Cache self.
    self = this;

    // If self has a last item, defer appending to the last items append
    // method, and return the result.
    tail = self.tail;

    if (tail) {
        return tail.append(item);
    }

    // If self has a first item, defer appending to the first items append
    // method, and return the result.
    head = self.head;

    if (head) {
        return head.append(item);
    }

    // ...otherwise, there is no `tail` or `head` item yet.

    // Detach the appendee.
    item.detach();

    // Set the appendees parent list to reference self.
    item.list = self;

    // Set self's first item to the appendee, and return the item.
    self.head = item;

    return item;
};

/**
 * Creates a new ListItem: A linked list item is a bit like DOM node:
 * It knows only about its "parent" (`list`), the item before it (`prev`),
 * and the item after it (`next`).
 * @global
 * @private
 * @constructor
 * @class Represents an instance of ListItem.
 */

function ListItem() {}

List.Item = ListItem;

var ListItemPrototype = ListItem.prototype;

ListItemPrototype.next = null;

ListItemPrototype.prev = null;

ListItemPrototype.list = null;

/**
 * Detaches the item operated on from its parent list.
 * @name ListItem#detach
 * @returns {ListItem} - The item operated on.
 */
ListItemPrototype.detach = function () {
    // Cache self, the parent list, and the previous and next items.
    var self = this,
        list = self.list,
        prev = self.prev,
        next = self.next;

    // If the item is already detached, return self.
    if (!list) {
        return self;
    }

    // If self is the last item in the parent list, link the lists last item
    // to the previous item.
    if (list.tail === self) {
        list.tail = prev;
    }

    // If self is the first item in the parent list, link the lists first item
    // to the next item.
    if (list.head === self) {
        list.head = next;
    }

    // If both the last and first items in the parent list are the same,
    // remove the link to the last item.
    if (list.tail === list.head) {
        list.tail = null;
    }

    // If a previous item exists, link its next item to selfs next item.
    if (prev) {
        prev.next = next;
    }

    // If a next item exists, link its previous item to selfs previous item.
    if (next) {
        next.prev = prev;
    }

    // Remove links from self to both the next and previous items, and to the
    // parent list.
    self.prev = self.next = self.list = null;

    // Return self.
    return self;
};

/**
 * Prepends the given item *before* the item operated on.
 * @name ListItem#prepend
 * @param {ListItem} item - The item to prepend.
 * @returns {ListItem} - The item operated on, or false when that item is not
 * attached.
 */
ListItemPrototype.prepend = function (item) {
    if (!item || !item.append || !item.prepend || !item.detach) {
        throw new Error(errorMessage + 'Item#prepend`.');
    }

    // Cache self, the parent list, and the previous item.
    var self = this,
        list = self.list,
        prev = self.prev;

    // If self is detached, return false.
    if (!list) {
        return false;
    }

    // Detach the prependee.
    item.detach();

    // If self has a previous item...
    if (prev) {
        // ...link the prependees previous item, to selfs previous item.
        item.prev = prev;

        // ...link the previous items next item, to self.
        prev.next = item;
    }

    // Set the prependees next item to self.
    item.next = self;

    // Set the prependees parent list to selfs parent list.
    item.list = list;

    // Set the previous item of self to the prependee.
    self.prev = item;

    // If self is the first item in the parent list, link the lists first item
    // to the prependee.
    if (self === list.head) {
        list.head = item;
    }

    // If the the parent list has no last item, link the lists last item to
    // self.
    if (!list.tail) {
        list.tail = self;
    }

    // Return the prependee.
    return item;
};

/**
 * Appends the given item *after* the item operated on.
 * @name ListItem#append
 * @param {ListItem} item - The item to append.
 * @returns {ListItem} - The item operated on, or false when that item is not
 * attached.
 */
ListItemPrototype.append = function (item) {
    // If item is falsey, return false.
    if (!item || !item.append || !item.prepend || !item.detach) {
        throw new Error(errorMessage + 'Item#append`.');
    }

    // Cache self, the parent list, and the next item.
    var self = this,
        list = self.list,
        next = self.next;

    // If self is detached, return false.
    if (!list) {
        return false;
    }

    // Detach the appendee.
    item.detach();

    // If self has a next item...
    if (next) {
        // ...link the appendees next item, to selfs next item.
        item.next = next;

        // ...link the next items previous item, to the appendee.
        next.prev = item;
    }

    // Set the appendees previous item to self.
    item.prev = self;

    // Set the appendees parent list to selfs parent list.
    item.list = list;

    // Set the next item of self to the appendee.
    self.next = item;

    // If the the parent list has no last item or if self is the parent lists
    // last item, link the lists last item to the appendee.
    if (self === list.tail || !list.tail) {
        list.tail = item;
    }

    // Return the appendee.
    return item;
};

/**
 * Expose `List`.
 */

module.exports = List;


/***/ }),
/* 884 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
;(function(root) {

	// Detect free variables `exports`.
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`.
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code, and use
	// it as `root`.
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var InvalidCharacterError = function(message) {
		this.message = message;
	};
	InvalidCharacterError.prototype = new Error;
	InvalidCharacterError.prototype.name = 'InvalidCharacterError';

	var error = function(message) {
		// Note: the error messages used throughout this file match those used by
		// the native `atob`/`btoa` implementation in Chromium.
		throw new InvalidCharacterError(message);
	};

	var TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	// http://whatwg.org/html/common-microsyntaxes.html#space-character
	var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g;

	// `decode` is designed to be fully compatible with `atob` as described in the
	// HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob
	// The optimized base64-decoding algorithm used is based on @atk’s excellent
	// implementation. https://gist.github.com/atk/1020396
	var decode = function(input) {
		input = String(input)
			.replace(REGEX_SPACE_CHARACTERS, '');
		var length = input.length;
		if (length % 4 == 0) {
			input = input.replace(/==?$/, '');
			length = input.length;
		}
		if (
			length % 4 == 1 ||
			// http://whatwg.org/C#alphanumeric-ascii-characters
			/[^+a-zA-Z0-9/]/.test(input)
		) {
			error(
				'Invalid character: the string to be decoded is not correctly encoded.'
			);
		}
		var bitCounter = 0;
		var bitStorage;
		var buffer;
		var output = '';
		var position = -1;
		while (++position < length) {
			buffer = TABLE.indexOf(input.charAt(position));
			bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
			// Unless this is the first of a group of 4 characters…
			if (bitCounter++ % 4) {
				// …convert the first 8 bits to a single ASCII character.
				output += String.fromCharCode(
					0xFF & bitStorage >> (-2 * bitCounter & 6)
				);
			}
		}
		return output;
	};

	// `encode` is designed to be fully compatible with `btoa` as described in the
	// HTML Standard: http://whatwg.org/html/webappapis.html#dom-windowbase64-btoa
	var encode = function(input) {
		input = String(input);
		if (/[^\0-\xFF]/.test(input)) {
			// Note: no need to special-case astral symbols here, as surrogates are
			// matched, and the input is supposed to only contain ASCII anyway.
			error(
				'The string to be encoded contains characters outside of the ' +
				'Latin1 range.'
			);
		}
		var padding = input.length % 3;
		var output = '';
		var position = -1;
		var a;
		var b;
		var c;
		var d;
		var buffer;
		// Make sure any padding is handled outside of the loop.
		var length = input.length - padding;

		while (++position < length) {
			// Read three bytes, i.e. 24 bits.
			a = input.charCodeAt(position) << 16;
			b = input.charCodeAt(++position) << 8;
			c = input.charCodeAt(++position);
			buffer = a + b + c;
			// Turn the 24 bits into four chunks of 6 bits each, and append the
			// matching character for each of them to the output.
			output += (
				TABLE.charAt(buffer >> 18 & 0x3F) +
				TABLE.charAt(buffer >> 12 & 0x3F) +
				TABLE.charAt(buffer >> 6 & 0x3F) +
				TABLE.charAt(buffer & 0x3F)
			);
		}

		if (padding == 2) {
			a = input.charCodeAt(position) << 8;
			b = input.charCodeAt(++position);
			buffer = a + b;
			output += (
				TABLE.charAt(buffer >> 10) +
				TABLE.charAt((buffer >> 4) & 0x3F) +
				TABLE.charAt((buffer << 2) & 0x3F) +
				'='
			);
		} else if (padding == 1) {
			buffer = input.charCodeAt(position);
			output += (
				TABLE.charAt(buffer >> 2) +
				TABLE.charAt((buffer << 4) & 0x3F) +
				'=='
			);
		}

		return output;
	};

	var base64 = {
		'encode': encode,
		'decode': decode,
		'version': '0.1.0'
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return base64;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = base64;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (var key in base64) {
				base64.hasOwnProperty(key) && (freeExports[key] = base64[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.base64 = base64;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module), __webpack_require__(532)))

/***/ }),
/* 885 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var clone = (function() {
'use strict';

function _instanceof(obj, type) {
  return type != null && obj instanceof type;
}

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no `Map`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (_instanceof(parent, nativeMap)) {
      child = new nativeMap();
    } else if (_instanceof(parent, nativeSet)) {
      child = new nativeSet();
    } else if (_instanceof(parent, nativePromise)) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      child = new Buffer(parent.length);
      parent.copy(child);
      return child;
    } else if (_instanceof(parent, Error)) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (_instanceof(parent, nativeMap)) {
      parent.forEach(function(value, key) {
        var keyChild = _clone(key, depth - 1);
        var valueChild = _clone(value, depth - 1);
        child.set(keyChild, valueChild);
      });
    }
    if (_instanceof(parent, nativeSet)) {
      parent.forEach(function(value) {
        var entryChild = _clone(value, depth - 1);
        child.add(entryChild);
      });
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(586).Buffer))

/***/ }),
/* 886 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var SCSocket = __webpack_require__(585);
var scErrors = __webpack_require__(547);
var InvalidArgumentsError = scErrors.InvalidArgumentsError;

var _connections = {};

function getMultiplexId(options) {
  var protocolPrefix = options.secure ? 'https://' : 'http://';
  var queryString = '';
  if (options.query) {
    if (typeof options.query == 'string') {
      queryString = options.query;
    } else {
      var queryArray = [];
      var queryMap = options.query;
      for (var key in queryMap) {
        if (queryMap.hasOwnProperty(key)) {
          queryArray.push(key + '=' + queryMap[key]);
        }
      }
      if (queryArray.length) {
        queryString = '?' + queryArray.join('&');
      }
    }
  }
  var host;
  if (options.host) {
    host = options.host;
  } else {
    host = options.hostname + ':' + options.port;
  }
  return protocolPrefix + host + options.path + queryString;
}

function isUrlSecure() {
  return global.location && location.protocol == 'https:';
}

function getPort(options, isSecureDefault) {
  var isSecure = options.secure == null ? isSecureDefault : options.secure;
  return options.port || (global.location && location.port ? location.port : isSecure ? 443 : 80);
}

function connect(options) {
  var self = this;

  options = options || {};

  if (options.host && options.port) {
    throw new InvalidArgumentsError('The host option should already include the' +
      ' port number in the format hostname:port - Because of this, the host and port options' +
      ' cannot be specified together; use the hostname option instead');
  }

  var isSecureDefault = isUrlSecure();

  var opts = {
    port: getPort(options, isSecureDefault),
    hostname: global.location && location.hostname,
    path: '/socketcluster/',
    secure: isSecureDefault,
    autoConnect: true,
    autoReconnect: true,
    autoProcessSubscriptions: true,
    connectTimeout: 20000,
    ackTimeout: 10000,
    timestampRequests: false,
    timestampParam: 't',
    authEngine: null,
    authTokenName: 'socketCluster.authToken',
    binaryType: 'arraybuffer',
    multiplex: true,
    cloneData: false
  };
  for (var i in options) {
    if (options.hasOwnProperty(i)) {
      opts[i] = options[i];
    }
  }
  var multiplexId = getMultiplexId(opts);
  if (opts.multiplex === false) {
    return new SCSocket(opts);
  }
  if (_connections[multiplexId]) {
    _connections[multiplexId].connect();
  } else {
    _connections[multiplexId] = new SCSocket(opts);
  }
  return _connections[multiplexId];
}

function destroy(options) {
  var self = this;

  options = options || {};
  var isSecureDefault = isUrlSecure();

  var opts = {
    port: getPort(options, isSecureDefault),
    hostname: global.location && location.hostname,
    path: '/socketcluster/',
    secure: isSecureDefault
  };
  for (var i in options) {
    if (options.hasOwnProperty(i)) {
      opts[i] = options[i];
    }
  }
  var multiplexId = getMultiplexId(opts);
  var socket = _connections[multiplexId];
  if (socket) {
    socket.disconnect();
  }
  delete _connections[multiplexId];
}

module.exports = {
  connect: connect,
  destroy: destroy,
  connections: _connections
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(532)))

/***/ }),
/* 887 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = configureStore;

var _reduxDevtoolsInstrument = __webpack_require__(888);

var _reduxDevtoolsInstrument2 = _interopRequireDefault(_reduxDevtoolsInstrument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(next, subscriber, options) {
  return (0, _reduxDevtoolsInstrument2.default)(subscriber, options)(next);
}

/***/ }),
/* 888 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.INIT_ACTION = exports.ActionCreators = exports.ActionTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.liftAction = liftAction;
exports.liftReducerWith = liftReducerWith;
exports.unliftState = unliftState;
exports.unliftStore = unliftStore;
exports.default = instrument;

var _difference = __webpack_require__(889);

var _difference2 = _interopRequireDefault(_difference);

var _union = __webpack_require__(926);

var _union2 = _interopRequireDefault(_union);

var _isPlainObject = __webpack_require__(578);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = __webpack_require__(575);

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionTypes = exports.ActionTypes = {
  PERFORM_ACTION: 'PERFORM_ACTION',
  RESET: 'RESET',
  ROLLBACK: 'ROLLBACK',
  COMMIT: 'COMMIT',
  SWEEP: 'SWEEP',
  TOGGLE_ACTION: 'TOGGLE_ACTION',
  SET_ACTIONS_ACTIVE: 'SET_ACTIONS_ACTIVE',
  JUMP_TO_STATE: 'JUMP_TO_STATE',
  JUMP_TO_ACTION: 'JUMP_TO_ACTION',
  REORDER_ACTION: 'REORDER_ACTION',
  IMPORT_STATE: 'IMPORT_STATE',
  LOCK_CHANGES: 'LOCK_CHANGES',
  PAUSE_RECORDING: 'PAUSE_RECORDING'
};

/**
 * Action creators to change the History state.
 */
var ActionCreators = exports.ActionCreators = {
  performAction: function performAction(action) {
    if (!(0, _isPlainObject2.default)(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    return { type: ActionTypes.PERFORM_ACTION, action: action, timestamp: Date.now() };
  },
  reset: function reset() {
    return { type: ActionTypes.RESET, timestamp: Date.now() };
  },
  rollback: function rollback() {
    return { type: ActionTypes.ROLLBACK, timestamp: Date.now() };
  },
  commit: function commit() {
    return { type: ActionTypes.COMMIT, timestamp: Date.now() };
  },
  sweep: function sweep() {
    return { type: ActionTypes.SWEEP };
  },
  toggleAction: function toggleAction(id) {
    return { type: ActionTypes.TOGGLE_ACTION, id: id };
  },
  setActionsActive: function setActionsActive(start, end) {
    var active = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

    return { type: ActionTypes.SET_ACTIONS_ACTIVE, start: start, end: end, active: active };
  },
  reorderAction: function reorderAction(actionId, beforeActionId) {
    return { type: ActionTypes.REORDER_ACTION, actionId: actionId, beforeActionId: beforeActionId };
  },
  jumpToState: function jumpToState(index) {
    return { type: ActionTypes.JUMP_TO_STATE, index: index };
  },
  jumpToAction: function jumpToAction(actionId) {
    return { type: ActionTypes.JUMP_TO_ACTION, actionId: actionId };
  },
  importState: function importState(nextLiftedState, noRecompute) {
    return { type: ActionTypes.IMPORT_STATE, nextLiftedState: nextLiftedState, noRecompute: noRecompute };
  },
  lockChanges: function lockChanges(status) {
    return { type: ActionTypes.LOCK_CHANGES, status: status };
  },
  pauseRecording: function pauseRecording(status) {
    return { type: ActionTypes.PAUSE_RECORDING, status: status };
  }
};

var INIT_ACTION = exports.INIT_ACTION = { type: '@@INIT' };

/**
 * Computes the next entry with exceptions catching.
 */
function computeWithTryCatch(reducer, action, state) {
  var nextState = state;
  var nextError = void 0;
  try {
    nextState = reducer(state, action);
  } catch (err) {
    nextError = err.toString();
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && (typeof window.chrome !== 'undefined' || typeof window.process !== 'undefined' && window.process.type === 'renderer')) {
      // In Chrome, rethrowing provides better source map support
      setTimeout(function () {
        throw err;
      });
    } else {
      console.error(err);
    }
  }

  return {
    state: nextState,
    error: nextError
  };
}

/**
 * Computes the next entry in the log by applying an action.
 */
function computeNextEntry(reducer, action, state, shouldCatchErrors) {
  if (!shouldCatchErrors) {
    return { state: reducer(state, action) };
  }
  return computeWithTryCatch(reducer, action, state);
}

/**
 * Runs the reducer on invalidated actions to get a fresh computation log.
 */
function recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, shouldCatchErrors) {
  // Optimization: exit early and return the same reference
  // if we know nothing could have changed.
  if (!computedStates || minInvalidatedStateIndex === -1 || minInvalidatedStateIndex >= computedStates.length && computedStates.length === stagedActionIds.length) {
    return computedStates;
  }

  var nextComputedStates = computedStates.slice(0, minInvalidatedStateIndex);
  for (var i = minInvalidatedStateIndex; i < stagedActionIds.length; i++) {
    var actionId = stagedActionIds[i];
    var action = actionsById[actionId].action;

    var previousEntry = nextComputedStates[i - 1];
    var previousState = previousEntry ? previousEntry.state : committedState;

    var shouldSkip = skippedActionIds.indexOf(actionId) > -1;
    var entry = void 0;
    if (shouldSkip) {
      entry = previousEntry;
    } else {
      if (shouldCatchErrors && previousEntry && previousEntry.error) {
        entry = {
          state: previousState,
          error: 'Interrupted by an error up the chain'
        };
      } else {
        entry = computeNextEntry(reducer, action, previousState, shouldCatchErrors);
      }
    }
    nextComputedStates.push(entry);
  }

  return nextComputedStates;
}

/**
 * Lifts an app's action into an action on the lifted store.
 */
function liftAction(action) {
  return ActionCreators.performAction(action);
}

/**
 * Creates a history state reducer from an app's reducer.
 */
function liftReducerWith(reducer, initialCommittedState, monitorReducer, options) {
  var initialLiftedState = {
    monitorState: monitorReducer(undefined, {}),
    nextActionId: 1,
    actionsById: { 0: liftAction(INIT_ACTION) },
    stagedActionIds: [0],
    skippedActionIds: [],
    committedState: initialCommittedState,
    currentStateIndex: 0,
    computedStates: [],
    isLocked: options.shouldStartLocked === true,
    isPaused: options.shouldRecordChanges === false
  };

  /**
   * Manages how the history actions modify the history state.
   */
  return function (liftedState, liftedAction) {
    var _ref = liftedState || initialLiftedState;

    var monitorState = _ref.monitorState;
    var actionsById = _ref.actionsById;
    var nextActionId = _ref.nextActionId;
    var stagedActionIds = _ref.stagedActionIds;
    var skippedActionIds = _ref.skippedActionIds;
    var committedState = _ref.committedState;
    var currentStateIndex = _ref.currentStateIndex;
    var computedStates = _ref.computedStates;
    var isLocked = _ref.isLocked;
    var isPaused = _ref.isPaused;


    if (!liftedState) {
      // Prevent mutating initialLiftedState
      actionsById = _extends({}, actionsById);
    }

    function commitExcessActions(n) {
      // Auto-commits n-number of excess actions.
      var excess = n;
      var idsToDelete = stagedActionIds.slice(1, excess + 1);

      for (var i = 0; i < idsToDelete.length; i++) {
        if (computedStates[i + 1].error) {
          // Stop if error is found. Commit actions up to error.
          excess = i;
          idsToDelete = stagedActionIds.slice(1, excess + 1);
          break;
        } else {
          delete actionsById[idsToDelete[i]];
        }
      }

      skippedActionIds = skippedActionIds.filter(function (id) {
        return idsToDelete.indexOf(id) === -1;
      });
      stagedActionIds = [0].concat(stagedActionIds.slice(excess + 1));
      committedState = computedStates[excess].state;
      computedStates = computedStates.slice(excess);
      currentStateIndex = currentStateIndex > excess ? currentStateIndex - excess : 0;
    }

    function computePausedAction(shouldInit) {
      var _extends2;

      var computedState = void 0;
      if (shouldInit) {
        computedState = computedStates[currentStateIndex];
        monitorState = monitorReducer(monitorState, liftedAction);
      } else {
        computedState = computeNextEntry(reducer, liftedAction.action, computedStates[currentStateIndex].state, false);
      }
      if (!options.pauseActionType || nextActionId === 1) {
        return {
          monitorState: monitorState,
          actionsById: { 0: liftAction(INIT_ACTION) },
          nextActionId: 1,
          stagedActionIds: [0],
          skippedActionIds: [],
          committedState: computedState.state,
          currentStateIndex: 0,
          computedStates: [computedState],
          isLocked: isLocked,
          isPaused: true
        };
      }
      if (shouldInit) {
        if (currentStateIndex === stagedActionIds.length - 1) {
          currentStateIndex++;
        }
        stagedActionIds = [].concat(stagedActionIds, [nextActionId]);
        nextActionId++;
      }
      return {
        monitorState: monitorState,
        actionsById: _extends({}, actionsById, (_extends2 = {}, _extends2[nextActionId - 1] = liftAction({ type: options.pauseActionType }), _extends2)),
        nextActionId: nextActionId,
        stagedActionIds: stagedActionIds,
        skippedActionIds: skippedActionIds,
        committedState: committedState,
        currentStateIndex: currentStateIndex,
        computedStates: [].concat(computedStates.slice(0, stagedActionIds.length - 1), [computedState]),
        isLocked: isLocked,
        isPaused: true
      };
    }

    // By default, agressively recompute every state whatever happens.
    // This has O(n) performance, so we'll override this to a sensible
    // value whenever we feel like we don't have to recompute the states.
    var minInvalidatedStateIndex = 0;

    switch (liftedAction.type) {
      case ActionTypes.PERFORM_ACTION:
        {
          if (isLocked) return liftedState || initialLiftedState;
          if (isPaused) return computePausedAction();

          // Auto-commit as new actions come in.
          if (options.maxAge && stagedActionIds.length === options.maxAge) {
            commitExcessActions(1);
          }

          if (currentStateIndex === stagedActionIds.length - 1) {
            currentStateIndex++;
          }
          var actionId = nextActionId++;
          // Mutation! This is the hottest path, and we optimize on purpose.
          // It is safe because we set a new key in a cache dictionary.
          actionsById[actionId] = liftedAction;
          stagedActionIds = [].concat(stagedActionIds, [actionId]);
          // Optimization: we know that only the new action needs computing.
          minInvalidatedStateIndex = stagedActionIds.length - 1;
          break;
        }
      case ActionTypes.RESET:
        {
          // Get back to the state the store was created with.
          actionsById = { 0: liftAction(INIT_ACTION) };
          nextActionId = 1;
          stagedActionIds = [0];
          skippedActionIds = [];
          committedState = initialCommittedState;
          currentStateIndex = 0;
          computedStates = [];
          break;
        }
      case ActionTypes.COMMIT:
        {
          // Consider the last committed state the new starting point.
          // Squash any staged actions into a single committed state.
          actionsById = { 0: liftAction(INIT_ACTION) };
          nextActionId = 1;
          stagedActionIds = [0];
          skippedActionIds = [];
          committedState = computedStates[currentStateIndex].state;
          currentStateIndex = 0;
          computedStates = [];
          break;
        }
      case ActionTypes.ROLLBACK:
        {
          // Forget about any staged actions.
          // Start again from the last committed state.
          actionsById = { 0: liftAction(INIT_ACTION) };
          nextActionId = 1;
          stagedActionIds = [0];
          skippedActionIds = [];
          currentStateIndex = 0;
          computedStates = [];
          break;
        }
      case ActionTypes.TOGGLE_ACTION:
        {
          var _ret = function () {
            // Toggle whether an action with given ID is skipped.
            // Being skipped means it is a no-op during the computation.
            var actionId = liftedAction.id;

            var index = skippedActionIds.indexOf(actionId);
            if (index === -1) {
              skippedActionIds = [actionId].concat(skippedActionIds);
            } else {
              skippedActionIds = skippedActionIds.filter(function (id) {
                return id !== actionId;
              });
            }
            // Optimization: we know history before this action hasn't changed
            minInvalidatedStateIndex = stagedActionIds.indexOf(actionId);
            return 'break';
          }();

          if (_ret === 'break') break;
        }
      case ActionTypes.SET_ACTIONS_ACTIVE:
        {
          // Toggle whether an action with given ID is skipped.
          // Being skipped means it is a no-op during the computation.
          var start = liftedAction.start;
          var end = liftedAction.end;
          var active = liftedAction.active;

          var actionIds = [];
          for (var i = start; i < end; i++) {
            actionIds.push(i);
          }if (active) {
            skippedActionIds = (0, _difference2.default)(skippedActionIds, actionIds);
          } else {
            skippedActionIds = (0, _union2.default)(skippedActionIds, actionIds);
          }

          // Optimization: we know history before this action hasn't changed
          minInvalidatedStateIndex = stagedActionIds.indexOf(start);
          break;
        }
      case ActionTypes.JUMP_TO_STATE:
        {
          // Without recomputing anything, move the pointer that tell us
          // which state is considered the current one. Useful for sliders.
          currentStateIndex = liftedAction.index;
          // Optimization: we know the history has not changed.
          minInvalidatedStateIndex = Infinity;
          break;
        }
      case ActionTypes.JUMP_TO_ACTION:
        {
          // Jumps to a corresponding state to a specific action.
          // Useful when filtering actions.
          var _index = stagedActionIds.indexOf(liftedAction.actionId);
          if (_index !== -1) currentStateIndex = _index;
          minInvalidatedStateIndex = Infinity;
          break;
        }
      case ActionTypes.SWEEP:
        {
          // Forget any actions that are currently being skipped.
          stagedActionIds = (0, _difference2.default)(stagedActionIds, skippedActionIds);
          skippedActionIds = [];
          currentStateIndex = Math.min(currentStateIndex, stagedActionIds.length - 1);
          break;
        }
      case ActionTypes.REORDER_ACTION:
        {
          // Recompute actions in a new order.
          var _actionId = liftedAction.actionId;
          var idx = stagedActionIds.indexOf(_actionId);
          // do nothing in case the action is already removed or trying to move the first action
          if (idx < 1) break;
          var beforeActionId = liftedAction.beforeActionId;
          var newIdx = stagedActionIds.indexOf(beforeActionId);
          if (newIdx < 1) {
            // move to the beginning or to the end
            var count = stagedActionIds.length;
            newIdx = beforeActionId > stagedActionIds[count - 1] ? count : 1;
          }
          var diff = idx - newIdx;

          if (diff > 0) {
            // move left
            stagedActionIds = [].concat(stagedActionIds.slice(0, newIdx), [_actionId], stagedActionIds.slice(newIdx, idx), stagedActionIds.slice(idx + 1));
            minInvalidatedStateIndex = newIdx;
          } else if (diff < 0) {
            // move right
            stagedActionIds = [].concat(stagedActionIds.slice(0, idx), stagedActionIds.slice(idx + 1, newIdx), [_actionId], stagedActionIds.slice(newIdx));
            minInvalidatedStateIndex = idx;
          }
          break;
        }
      case ActionTypes.IMPORT_STATE:
        {
          if (Array.isArray(liftedAction.nextLiftedState)) {
            // recompute array of actions
            actionsById = { 0: liftAction(INIT_ACTION) };
            nextActionId = 1;
            stagedActionIds = [0];
            skippedActionIds = [];
            currentStateIndex = liftedAction.nextLiftedState.length;
            computedStates = [];
            committedState = liftedAction.preloadedState;
            minInvalidatedStateIndex = 0;
            // iterate through actions
            liftedAction.nextLiftedState.forEach(function (action) {
              actionsById[nextActionId] = liftAction(action);
              stagedActionIds.push(nextActionId);
              nextActionId++;
            });
          } else {
            var _liftedAction$nextLif = liftedAction.nextLiftedState;
            // Completely replace everything.

            monitorState = _liftedAction$nextLif.monitorState;
            actionsById = _liftedAction$nextLif.actionsById;
            nextActionId = _liftedAction$nextLif.nextActionId;
            stagedActionIds = _liftedAction$nextLif.stagedActionIds;
            skippedActionIds = _liftedAction$nextLif.skippedActionIds;
            committedState = _liftedAction$nextLif.committedState;
            currentStateIndex = _liftedAction$nextLif.currentStateIndex;
            computedStates = _liftedAction$nextLif.computedStates;


            if (liftedAction.noRecompute) {
              minInvalidatedStateIndex = Infinity;
            }
          }

          break;
        }
      case ActionTypes.LOCK_CHANGES:
        {
          isLocked = liftedAction.status;
          minInvalidatedStateIndex = Infinity;
          break;
        }
      case ActionTypes.PAUSE_RECORDING:
        {
          isPaused = liftedAction.status;
          if (isPaused) {
            return computePausedAction(true);
          }
          // Commit when unpausing
          actionsById = { 0: liftAction(INIT_ACTION) };
          nextActionId = 1;
          stagedActionIds = [0];
          skippedActionIds = [];
          committedState = computedStates[currentStateIndex].state;
          currentStateIndex = 0;
          computedStates = [];
          break;
        }
      case '@@redux/INIT':
        {
          if (options.shouldHotReload === false) {
            actionsById = { 0: liftAction(INIT_ACTION) };
            nextActionId = 1;
            stagedActionIds = [0];
            skippedActionIds = [];
            committedState = computedStates.length === 0 ? initialCommittedState : computedStates[currentStateIndex].state;
            currentStateIndex = 0;
            computedStates = [];
          }

          // Recompute states on hot reload and init.
          minInvalidatedStateIndex = 0;

          if (options.maxAge && stagedActionIds.length > options.maxAge) {
            // States must be recomputed before committing excess.
            computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, options.shouldCatchErrors);

            commitExcessActions(stagedActionIds.length - options.maxAge);

            // Avoid double computation.
            minInvalidatedStateIndex = Infinity;
          }

          break;
        }
      default:
        {
          // If the action is not recognized, it's a monitor action.
          // Optimization: a monitor action can't change history.
          minInvalidatedStateIndex = Infinity;
          break;
        }
    }

    computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, options.shouldCatchErrors);
    monitorState = monitorReducer(monitorState, liftedAction);
    return {
      monitorState: monitorState,
      actionsById: actionsById,
      nextActionId: nextActionId,
      stagedActionIds: stagedActionIds,
      skippedActionIds: skippedActionIds,
      committedState: committedState,
      currentStateIndex: currentStateIndex,
      computedStates: computedStates,
      isLocked: isLocked,
      isPaused: isPaused
    };
  };
}

/**
 * Provides an app's view into the state of the lifted store.
 */
function unliftState(liftedState) {
  var computedStates = liftedState.computedStates;
  var currentStateIndex = liftedState.currentStateIndex;
  var state = computedStates[currentStateIndex].state;

  return state;
}

/**
 * Provides an app's view into the lifted store.
 */
function unliftStore(liftedStore, liftReducer) {
  var _extends3;

  var lastDefinedState = void 0;

  function getState() {
    var state = unliftState(liftedStore.getState());
    if (state !== undefined) {
      lastDefinedState = state;
    }
    return lastDefinedState;
  }

  return _extends({}, liftedStore, (_extends3 = {

    liftedStore: liftedStore,

    dispatch: function dispatch(action) {
      liftedStore.dispatch(liftAction(action));
      return action;
    },


    getState: getState,

    replaceReducer: function replaceReducer(nextReducer) {
      liftedStore.replaceReducer(liftReducer(nextReducer));
    }
  }, _extends3[_symbolObservable2.default] = function () {
    return _extends({}, liftedStore[_symbolObservable2.default](), {
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = liftedStore.subscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    });
  }, _extends3));
}

/**
 * Redux instrumentation store enhancer.
 */
function instrument() {
  var monitorReducer = arguments.length <= 0 || arguments[0] === undefined ? function () {
    return null;
  } : arguments[0];
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  /* eslint-disable no-eq-null */
  if (options.maxAge != null && options.maxAge < 2) {
    /* eslint-enable */
    throw new Error('DevTools.instrument({ maxAge }) option, if specified, ' + 'may not be less than 2.');
  }

  return function (createStore) {
    return function (reducer, initialState, enhancer) {

      function liftReducer(r) {
        if (typeof r !== 'function') {
          if (r && typeof r.default === 'function') {
            throw new Error('Expected the reducer to be a function. ' + 'Instead got an object with a "default" field. ' + 'Did you pass a module instead of the default export? ' + 'Try passing require(...).default instead.');
          }
          throw new Error('Expected the reducer to be a function.');
        }
        return liftReducerWith(r, initialState, monitorReducer, options);
      }

      var liftedStore = createStore(liftReducer(reducer), enhancer);
      if (liftedStore.liftedStore) {
        throw new Error('DevTools instrumentation should not be applied more than once. ' + 'Check your store configuration.');
      }

      return unliftStore(liftedStore, liftReducer);
    };
  };
}

/***/ }),
/* 889 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(890),
    baseFlatten = __webpack_require__(596),
    baseRest = __webpack_require__(598),
    isArrayLikeObject = __webpack_require__(600);

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


/***/ }),
/* 890 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(555),
    arrayIncludes = __webpack_require__(592),
    arrayIncludesWith = __webpack_require__(593),
    arrayMap = __webpack_require__(594),
    baseUnary = __webpack_require__(595),
    cacheHas = __webpack_require__(559);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),
/* 891 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(892),
    ListCache = __webpack_require__(549),
    Map = __webpack_require__(558);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 892 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(893),
    hashDelete = __webpack_require__(898),
    hashGet = __webpack_require__(899),
    hashHas = __webpack_require__(900),
    hashSet = __webpack_require__(901);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 893 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(548);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 894 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(589),
    isMasked = __webpack_require__(895),
    isObject = __webpack_require__(557),
    toSource = __webpack_require__(590);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 895 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(896);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 896 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(540);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 897 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 898 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 899 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(548);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 900 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(548);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 901 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(548);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 902 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 903 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(550);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 904 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(550);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 905 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(550);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 906 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(550);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 907 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(551);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 908 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 909 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(551);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 910 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(551);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 911 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(551);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 912 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 913 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 914 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(915),
    baseIsNaN = __webpack_require__(916),
    strictIndexOf = __webpack_require__(917);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 915 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 916 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 917 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 918 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(545),
    isArguments = __webpack_require__(560),
    isArray = __webpack_require__(541);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 919 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(544),
    isObjectLike = __webpack_require__(542);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 920 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(921);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 921 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 922 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(923),
    shortOut = __webpack_require__(925);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 923 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(924),
    defineProperty = __webpack_require__(599),
    identity = __webpack_require__(561);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 924 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 925 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 926 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(596),
    baseRest = __webpack_require__(598),
    baseUniq = __webpack_require__(927),
    isArrayLikeObject = __webpack_require__(600);

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});

module.exports = union;


/***/ }),
/* 927 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(555),
    arrayIncludes = __webpack_require__(592),
    arrayIncludesWith = __webpack_require__(593),
    cacheHas = __webpack_require__(559),
    createSet = __webpack_require__(928),
    setToArray = __webpack_require__(563);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),
/* 928 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(602),
    noop = __webpack_require__(929),
    setToArray = __webpack_require__(563);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),
/* 929 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 930 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var defaultSocketOptions = exports.defaultSocketOptions = {
  secure: true,
  hostname: 'remotedev.io',
  port: 443,
  autoReconnect: true,
  autoReconnectOptions: {
    randomness: 30000
  }
};

/***/ }),
/* 931 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * It only for Debug Remotely mode for Android
 * When __DEV__ === false, we can't use window.require('NativeModules')
 */
function getByRemoteConfig(hostname) {
  var remoteModuleConfig = typeof window !== 'undefined' &&
    window.__fbBatchedBridgeConfig &&
    window.__fbBatchedBridgeConfig.remoteModuleConfig
  if (
    !Array.isArray(remoteModuleConfig) ||
    hostname !== 'localhost' && hostname !== '127.0.0.1'
  ) return hostname

  var constants = (
    remoteModuleConfig.find(getConstants) || []
  )[1]
  if (constants) {
    var serverHost = constants.ServerHost || hostname
    return serverHost.split(':')[0]
  }
  return hostname
}

function getConstants(config) {
  return config && (config[0] === 'AndroidConstants' || config[0] === 'PlatformConstants')
}

/*
 * Get React Native server IP if hostname is `localhost`
 * On Android emulator, the IP of host is `10.0.2.2` (Genymotion: 10.0.3.2)
 */
module.exports = function (hostname) {
  if (
    typeof __fbBatchedBridge !== 'object' ||  // Not on react-native
    hostname !== 'localhost' && hostname !== '127.0.0.1'
  ) {
    return hostname
  }
  hostname = getByRemoteConfig(hostname)
  var originalWarn = console.warn
  console.warn = function() {
    if (arguments[0] && arguments[0].indexOf('Requiring module \'NativeModules\' by name') > -1) return
    return originalWarn.apply(console, arguments)
  }

  var NativeModules
  var PlatformConstants
  var AndroidConstants
  if (typeof window === 'undefined' || !window.__DEV__ || typeof window.require !== 'function') {
    return hostname
  }
  NativeModules = window.require('NativeModules')
  console.warn = originalWarn
  if (
    !NativeModules ||
    (!NativeModules.PlatformConstants && !NativeModules.AndroidConstants)
  ) {
    return hostname
  }
  PlatformConstants = NativeModules.PlatformConstants
  AndroidConstants = NativeModules.AndroidConstants

  var serverHost = (PlatformConstants ?
    PlatformConstants.ServerHost :
    AndroidConstants.ServerHost
  ) || hostname
  return serverHost.split(':')[0]
}


/***/ }),
/* 932 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.generateId = generateId;
exports.getMethods = getMethods;
exports.getActionsArray = getActionsArray;
exports.evalAction = evalAction;
exports.evalMethod = evalMethod;
exports.stringify = stringify;
exports.getSeralizeParameter = getSeralizeParameter;

var _getParams = __webpack_require__(933);

var _getParams2 = _interopRequireDefault(_getParams);

var _jsan = __webpack_require__(582);

var _jsan2 = _interopRequireDefault(_jsan);

var _shortid = __webpack_require__(934);

var _shortid2 = _interopRequireDefault(_shortid);

var _serialize = __webpack_require__(942);

var _serialize2 = _interopRequireDefault(_serialize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateId(id) {
  return id || _shortid2.default.generate();
}

function flatTree(obj) {
  var namespace = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  var functions = [];
  Object.keys(obj).forEach(function (key) {
    var prop = obj[key];
    if (typeof prop === 'function') {
      functions.push({
        name: namespace + (key || prop.name || 'anonymous'),
        func: prop,
        args: (0, _getParams2.default)(prop)
      });
    } else if ((typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) === 'object') {
      functions = functions.concat(flatTree(prop, namespace + key + '.'));
    }
  });
  return functions;
}

function getMethods(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return undefined;
  var functions = void 0;
  var m = void 0;
  if (obj.__proto__) m = obj.__proto__.__proto__;
  if (!m) m = obj;

  Object.getOwnPropertyNames(m).forEach(function (key) {
    var propDescriptor = Object.getOwnPropertyDescriptor(m, key);
    if (!propDescriptor || 'get' in propDescriptor || 'set' in propDescriptor) return;
    var prop = m[key];
    if (typeof prop === 'function' && key !== 'constructor') {
      if (!functions) functions = [];
      functions.push({
        name: key || prop.name || 'anonymous',
        args: (0, _getParams2.default)(prop)
      });
    }
  });
  return functions;
}

function getActionsArray(actionCreators) {
  if (Array.isArray(actionCreators)) return actionCreators;
  return flatTree(actionCreators);
}

/* eslint-disable no-new-func */
var interpretArg = function interpretArg(arg) {
  return new Function('return ' + arg)();
};

function evalArgs(inArgs, restArgs) {
  var args = inArgs.map(interpretArg);
  if (!restArgs) return args;
  var rest = interpretArg(restArgs);
  if (Array.isArray(rest)) return args.concat.apply(args, rest);
  throw new Error('rest must be an array');
}

function evalAction(action, actionCreators) {
  if (typeof action === 'string') {
    return new Function('return ' + action)();
  }

  var actionCreator = actionCreators[action.selected].func;
  var args = evalArgs(action.args, action.rest);
  return actionCreator.apply(undefined, args);
}

function evalMethod(action, obj) {
  if (typeof action === 'string') {
    return new Function('return ' + action).call(obj);
  }

  var args = evalArgs(action.args, action.rest);
  return new Function('args', 'return this.' + action.name + '(args)').apply(obj, args);
}
/* eslint-enable */

function tryCatchStringify(obj) {
  try {
    return JSON.stringify(obj);
  } catch (err) {
    /* eslint-disable no-console */
    if (false) console.log('Failed to stringify', err);
    /* eslint-enable no-console */
    return _jsan2.default.stringify(obj, null, null, { circular: '[CIRCULAR]' });
  }
}

function stringify(obj, serialize) {
  if (typeof serialize === 'undefined') {
    return tryCatchStringify(obj);
  }
  if (serialize === true) {
    return _jsan2.default.stringify(obj, function (key, value) {
      if (value && typeof value.toJS === 'function') return value.toJS();
      return value;
    }, null, true);
  }
  return _jsan2.default.stringify(obj, serialize.replacer, null, serialize.options);
}

function getSeralizeParameter(config, param) {
  var serialize = config.serialize;
  if (serialize) {
    if (serialize === true) return { options: true };
    if (serialize.immutable) {
      return {
        replacer: (0, _serialize2.default)(serialize.immutable, serialize.refs).replacer,
        options: serialize.options || true
      };
    }
    if (!serialize.replacer) return { options: serialize.options };
    return { replacer: serialize.replacer, options: serialize.options || true };
  }

  var value = config[param];
  if (typeof value === 'undefined') return undefined;
  console.warn('`' + param + '` parameter for Redux DevTools Extension is deprecated. Use `serialize` parameter instead: https://github.com/zalmoxisus/redux-devtools-extension/releases/tag/v2.12.1'); // eslint-disable-line

  if (typeof serializeState === 'boolean') return { options: value };
  if (typeof serializeState === 'function') return { replacer: value };
  return value;
}

/***/ }),
/* 933 */
/***/ (function(module, exports) {

/* global window */
var GetParams = function (func) {
	'use strict';

	if (typeof func !== 'function') {
		return [];
	}

	var patternComments = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
	var patternArguments = /([^\s,]+)/g;

	var funcString = func
		.toString()
		.replace(patternComments, '');

	var result = funcString
		.slice(
			funcString.indexOf('(') + 1,
			funcString.indexOf(')')
		)
		.match(patternArguments);

	if (result === null) {
		return [];
	}

	return result;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = GetParams;
}

if (typeof window !== 'undefined') {
	window.GetParams = GetParams;
}


/***/ }),
/* 934 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(935);


/***/ }),
/* 935 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(552);
var encode = __webpack_require__(603);
var decode = __webpack_require__(938);
var build = __webpack_require__(939);
var isValid = __webpack_require__(940);

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(941) || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.decode = decode;
module.exports.isValid = isValid;


/***/ }),
/* 936 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),
/* 937 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

function randomByte() {
    if (!crypto || !crypto.getRandomValues) {
        return Math.floor(Math.random() * 256) & 0x30;
    }
    var dest = new Uint8Array(1);
    crypto.getRandomValues(dest);
    return dest[0] & 0x30;
}

module.exports = randomByte;


/***/ }),
/* 938 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(552);

/**
 * Decode the id to get the version and worker
 * Mainly for debugging and testing.
 * @param id - the shortid-generated id.
 */
function decode(id) {
    var characters = alphabet.shuffled();
    return {
        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
    };
}

module.exports = decode;


/***/ }),
/* 939 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var encode = __webpack_require__(603);
var alphabet = __webpack_require__(552);

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1459707606518;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 6;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {

    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + encode(alphabet.lookup, version);
    str = str + encode(alphabet.lookup, clusterWorkerId);
    if (counter > 0) {
        str = str + encode(alphabet.lookup, counter);
    }
    str = str + encode(alphabet.lookup, seconds);

    return str;
}

module.exports = build;


/***/ }),
/* 940 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(552);

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var characters = alphabet.characters();
    var len = id.length;
    for(var i = 0; i < len;i++) {
        if (characters.indexOf(id[i]) === -1) {
            return false;
        }
    }
    return true;
}

module.exports = isShortId;


/***/ }),
/* 941 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 0;


/***/ }),
/* 942 */
/***/ (function(module, exports, __webpack_require__) {

var helpers = __webpack_require__(943);
var mark = helpers.mark;
var extract = helpers.extract;
var refer = helpers.refer;

module.exports = function serialize(Immutable, refs) {
  return {
    replacer: function(key, value) {
      if (value instanceof Immutable.Record) return refer(value, 'ImmutableRecord', 'toObject', refs);
      if (value instanceof Immutable.Range) return extract(value, 'ImmutableRange');
      if (value instanceof Immutable.Repeat) return extract(value, 'ImmutableRepeat');
      if (Immutable.OrderedMap.isOrderedMap(value)) return mark(value, 'ImmutableOrderedMap', 'toObject');
      if (Immutable.Map.isMap(value)) return mark(value, 'ImmutableMap', 'toObject');
      if (Immutable.List.isList(value)) return mark(value, 'ImmutableList', 'toArray');
      if (Immutable.OrderedSet.isOrderedSet(value)) return mark(value, 'ImmutableOrderedSet', 'toArray');
      if (Immutable.Set.isSet(value)) return mark(value, 'ImmutableSet', 'toArray');
      if (Immutable.Seq.isSeq(value)) return mark(value, 'ImmutableSeq', 'toArray');
      if (Immutable.Stack.isStack(value)) return mark(value, 'ImmutableStack', 'toArray');
      return value;
    },

    reviver: function(key, value) {
      if (typeof value === 'object' && value !== null && '__serializedType__'  in value) {
        var data = value.data;
        switch (value.__serializedType__) {
          case 'ImmutableMap': return Immutable.Map(data);
          case 'ImmutableOrderedMap': return Immutable.OrderedMap(data);
          case 'ImmutableList': return Immutable.List(data);
          case 'ImmutableRange': return Immutable.Range(data._start, data._end, data._step);
          case 'ImmutableRepeat': return Immutable.Repeat(data._value, data.size);
          case 'ImmutableSet': return Immutable.Set(data);
          case 'ImmutableOrderedSet': return Immutable.OrderedSet(data);
          case 'ImmutableSeq': return Immutable.Seq(data);
          case 'ImmutableStack': return Immutable.Stack(data);
          case 'ImmutableRecord':
            return (refs && refs[value.__serializedRef__] || Immutable.Map)(data);
          default: return data;
        }
      }
      return value;
    }
  }   
};


/***/ }),
/* 943 */
/***/ (function(module, exports) {

function mark(data, type, transformMethod) {
  return {
    data: transformMethod ? data[transformMethod]() : data,
    __serializedType__: type
  };
}

function extract(data, type) {
  return {
    data: Object.assign({}, data),
    __serializedType__: type
  };
}

function refer(data, type, isArray, refs) {
  var r = mark(data, type, isArray);
  if (!refs) return r;
  for (var i = 0; i < refs.length; i++) {
    var ref = refs[i];
    if (typeof ref === 'function' && data instanceof ref) {
      r.__serializedRef__ = i;
      return r;
    }
  }
  return r;
}

module.exports = {
  mark: mark,
  extract: extract,
  refer: refer
};


/***/ }),
/* 944 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = catchErrors;
var ERROR = '@@remotedev/ERROR';

function catchErrors(sendError) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && _typeof(window.onerror) === 'object') {
    window.onerror = function (message, url, lineNo, columnNo, error) {
      var errorAction = { type: ERROR, message: message, url: url, lineNo: lineNo, columnNo: columnNo };
      if (error && error.stack) errorAction.stack = error.stack;
      sendError(errorAction);
      return false;
    };
  } else if (typeof global !== 'undefined' && global.ErrorUtils) {
    global.ErrorUtils.setGlobalHandler(function (error, isFatal) {
      sendError({ type: ERROR, error: error, isFatal: isFatal });
    });
  }

  if ((typeof console === 'undefined' ? 'undefined' : _typeof(console)) === 'object' && typeof console.error === 'function' && !console.beforeRemotedev) {
    console.beforeRemotedev = console.error.bind(console);
    console.error = function () {
      var errorAction = { type: ERROR };
      var error = arguments[0];
      errorAction.message = error.message ? error.message : error;
      if (error.sourceURL) {
        errorAction = _extends({}, errorAction, { sourceURL: error.sourceURL, line: error.line, column: error.column
        });
      }
      if (error.stack) errorAction.stack = error.stack;
      sendError(errorAction);
      console.beforeRemotedev.apply(null, arguments);
    };
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(532)))

/***/ }),
/* 945 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.FilterState = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.arrToRegex = arrToRegex;
exports.getLocalFilter = getLocalFilter;
exports.isFiltered = isFiltered;
exports.filterStagedActions = filterStagedActions;
exports.filterState = filterState;

var _mapValues = __webpack_require__(946);

var _mapValues2 = _interopRequireDefault(_mapValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterState = exports.FilterState = {
  DO_NOT_FILTER: 'DO_NOT_FILTER',
  BLACKLIST_SPECIFIC: 'BLACKLIST_SPECIFIC',
  WHITELIST_SPECIFIC: 'WHITELIST_SPECIFIC'
};

function arrToRegex(v) {
  return typeof v === 'string' ? v : v.join('|');
}

function filterActions(actionsById, actionsFilter) {
  if (!actionsFilter) return actionsById;
  return (0, _mapValues2.default)(actionsById, function (action, id) {
    return _extends({}, action, { action: actionsFilter(action.action, id) });
  });
}

function filterStates(computedStates, statesFilter) {
  if (!statesFilter) return computedStates;
  return computedStates.map(function (state, idx) {
    return _extends({}, state, { state: statesFilter(state.state, idx) });
  });
}

function getLocalFilter(config) {
  if (config.actionsBlacklist || config.actionsWhitelist) {
    return {
      whitelist: config.actionsWhitelist && config.actionsWhitelist.join('|'),
      blacklist: config.actionsBlacklist && config.actionsBlacklist.join('|')
    };
  }
  return undefined;
}

function getDevToolsOptions() {
  return typeof window !== 'undefined' && window.devToolsOptions || {};
}

function isFiltered(action, localFilter) {
  var _ref = action.action || action;

  var type = _ref.type;

  var opts = getDevToolsOptions();
  if (!localFilter && opts.filter && opts.filter === FilterState.DO_NOT_FILTER || type && typeof type.match !== 'function') return false;

  var _ref2 = localFilter || opts;

  var whitelist = _ref2.whitelist;
  var blacklist = _ref2.blacklist;

  return whitelist && !type.match(whitelist) || blacklist && type.match(blacklist);
}

function filterStagedActions(state, filters) {
  if (!filters) return state;

  var filteredStagedActionIds = [];
  var filteredComputedStates = [];

  state.stagedActionIds.forEach(function (id, idx) {
    if (!isFiltered(state.actionsById[id], filters)) {
      filteredStagedActionIds.push(id);
      filteredComputedStates.push(state.computedStates[idx]);
    }
  });

  return _extends({}, state, {
    stagedActionIds: filteredStagedActionIds,
    computedStates: filteredComputedStates
  });
}

function filterState(state, type, localFilter, stateSanitizer, actionSanitizer, nextActionId, predicate) {
  if (type === 'ACTION') return !stateSanitizer ? state : stateSanitizer(state, nextActionId - 1);else if (type !== 'STATE') return state;

  var _getDevToolsOptions = getDevToolsOptions();

  var filter = _getDevToolsOptions.filter;

  if (predicate || localFilter || filter && filter !== FilterState.DO_NOT_FILTER) {
    var _ret = function () {
      var filteredStagedActionIds = [];
      var filteredComputedStates = [];
      var sanitizedActionsById = actionSanitizer && {};
      var actionsById = state.actionsById;
      var computedStates = state.computedStates;


      state.stagedActionIds.forEach(function (id, idx) {
        var liftedAction = actionsById[id];
        var currAction = liftedAction.action;
        var liftedState = computedStates[idx];
        var currState = liftedState.state;
        if (idx) {
          if (predicate && !predicate(currState, currAction)) return;
          if (isFiltered(currAction, localFilter)) return;
        }

        filteredStagedActionIds.push(id);
        filteredComputedStates.push(stateSanitizer ? _extends({}, liftedState, { state: stateSanitizer(currState, idx) }) : liftedState);
        if (actionSanitizer) {
          sanitizedActionsById[id] = _extends({}, liftedAction, { action: actionSanitizer(currAction, id)
          });
        }
      });

      return {
        v: _extends({}, state, {
          actionsById: sanitizedActionsById || actionsById,
          stagedActionIds: filteredStagedActionIds,
          computedStates: filteredComputedStates
        })
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }

  if (!stateSanitizer && !actionSanitizer) return state;
  return _extends({}, state, {
    actionsById: filterActions(state.actionsById, actionSanitizer),
    computedStates: filterStates(state.computedStates, stateSanitizer)
  });
}

/***/ }),
/* 946 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(947),
    baseForOwn = __webpack_require__(948),
    baseIteratee = __webpack_require__(959);

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),
/* 947 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(599);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 948 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(949),
    keys = __webpack_require__(564);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 949 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(950);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 950 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 951 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(952),
    isArguments = __webpack_require__(560),
    isArray = __webpack_require__(541),
    isBuffer = __webpack_require__(604),
    isIndex = __webpack_require__(605),
    isTypedArray = __webpack_require__(606);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 952 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 953 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 954 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(544),
    isLength = __webpack_require__(562),
    isObjectLike = __webpack_require__(542);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 955 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(579);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }),
/* 956 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(957),
    nativeKeys = __webpack_require__(958);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 957 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 958 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(580);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 959 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(960),
    baseMatchesProperty = __webpack_require__(983),
    identity = __webpack_require__(561),
    isArray = __webpack_require__(541),
    property = __webpack_require__(993);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 960 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(961),
    getMatchData = __webpack_require__(982),
    matchesStrictComparable = __webpack_require__(611);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 961 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(607),
    baseIsEqual = __webpack_require__(608);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 962 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(549);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 963 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 964 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 965 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 966 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(549),
    Map = __webpack_require__(558),
    MapCache = __webpack_require__(556);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 967 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(607),
    equalArrays = __webpack_require__(609),
    equalByTag = __webpack_require__(969),
    equalObjects = __webpack_require__(972),
    getTag = __webpack_require__(978),
    isArray = __webpack_require__(541),
    isBuffer = __webpack_require__(604),
    isTypedArray = __webpack_require__(606);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 968 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 969 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(545),
    Uint8Array = __webpack_require__(970),
    eq = __webpack_require__(591),
    equalArrays = __webpack_require__(609),
    mapToArray = __webpack_require__(971),
    setToArray = __webpack_require__(563);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 970 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(540);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 971 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 972 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(973);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 973 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(974),
    getSymbols = __webpack_require__(975),
    keys = __webpack_require__(564);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 974 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(597),
    isArray = __webpack_require__(541);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 975 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(976),
    stubArray = __webpack_require__(977);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 976 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 977 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 978 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(979),
    Map = __webpack_require__(558),
    Promise = __webpack_require__(980),
    Set = __webpack_require__(602),
    WeakMap = __webpack_require__(981),
    baseGetTag = __webpack_require__(544),
    toSource = __webpack_require__(590);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 979 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(543),
    root = __webpack_require__(540);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 980 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(543),
    root = __webpack_require__(540);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 981 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(543),
    root = __webpack_require__(540);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 982 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(610),
    keys = __webpack_require__(564);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 983 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(608),
    get = __webpack_require__(984),
    hasIn = __webpack_require__(990),
    isKey = __webpack_require__(565),
    isStrictComparable = __webpack_require__(610),
    matchesStrictComparable = __webpack_require__(611),
    toKey = __webpack_require__(553);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 984 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(612);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 985 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(986);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 986 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(987);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 987 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(556);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 988 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(989);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 989 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(545),
    arrayMap = __webpack_require__(594),
    isArray = __webpack_require__(541),
    isSymbol = __webpack_require__(566);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 990 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(991),
    hasPath = __webpack_require__(992);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 991 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 992 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(613),
    isArguments = __webpack_require__(560),
    isArray = __webpack_require__(541),
    isIndex = __webpack_require__(605),
    isLength = __webpack_require__(562),
    toKey = __webpack_require__(553);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 993 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(994),
    basePropertyDeep = __webpack_require__(995),
    isKey = __webpack_require__(565),
    toKey = __webpack_require__(553);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 994 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 995 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(612);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 996 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(13), RootInstanceProvider = __webpack_require__(14), ReactMount = __webpack_require__(10), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var action_types = __webpack_require__(581);
var api = __webpack_require__(997);
var language = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;

var languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

var initialLanguage = languageWithoutRegionCode || 'gb';

var initialState = {
  content: api.getContent(initialLanguage) // Loads default language content (en) as an initial state
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case action_types.SWITCH_LANGUAGE:
      return {
        content: api.getContent(action.language)
      };
    default:
      return state;
  }
};

module.exports = reducer;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(15); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }),
/* 997 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(13), RootInstanceProvider = __webpack_require__(14), ReactMount = __webpack_require__(10), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _content = __webpack_require__(998);

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const translate = Ru.lookupFrom(content);

var api = {
    getContent: function getContent(language) {
        if (_content2.default.filter(function (obj) {
            return obj.lang === language;
        })[0]) {
            return _content2.default.filter(function (obj) {
                return obj.lang === language;
            })[0];
        } else {
            return _content2.default.filter(function (obj) {
                return obj.lang === 'gb';
            })[0];
        }
    }
}; //import Ru from "rutils";


module.exports = api;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(15); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }),
/* 998 */
/***/ (function(module, exports) {

module.exports = [{"lang":"gb","page":{"topBar":{"participate":"Participate","technologies":"Technologies","team":"Team","token":"Token","roadmap":"Roadmap","whitepaper":"Whitepaper"},"home":{"cover":{"title":"Decentralized browsing web services","subtitle":"Protocol powered Advanced Browsing Token (ABT)","tokenSale":"PUBLIC SALE START JANUARY 2018","tokenMaximun":"250,000,000 ABT","tokenMaximunText":"Maximun token sale supply","tokenPrice":"Token Price: 1 ETH = 3000 ABT","contactUs":"contact us","downloadWhitepaper":"download whitepaper","whitepaperLastUpdate":"last update 2017/11/17","termsAndConditions":"Token sale terms and conditions"},"ico":{"safetyTitle":"Blockchain Navigation Safety","safetyDescription":"Our blockchain multi browsing technology ensures the safety of your web navigation","safetySloganOne":"The ultimate protection to access your personalised navigation platform","safetySloganTwo":"Your digital identity saved on blockchain is provided only to services of your choice","safetySloganThree":"The multi web objects you copy, save and share are executed on blockchain","smarterTitle":"Browsing Smarter & Faster","smarterDescription":"Our multi browsing method and technology increase your navigation efficiency and speed","smarterSloganOne":"Selected web objects are simultaneously active & visible in batches, ready to be saved and shared in a blink of an eye","smarterSloganTwo":"Smart display allows instant switch between multi screening and full screen mode","featuresTitle":"Blockchain Features","featureOneTitle":"Digital Secure Identity & Login","featureOneDescription":"Create and update your digital identity from your ABT Wallet. Login to any service or compatible website with your ABT digital identity, securely, without any password. Your browsing environment is safe","featureTwoTitle":"Multi-web objects Boards Management","featureTwoDescription":"Save, duplicate and share your multi-web objects Boards and Bookmarks within the Blockchain. Keep your web space safe. Increase online navigation efficiency and speed. Promote various social browsing network activities","featureThreeTitle":"Domain Name System","featureThreeDescription":"Rent domains in a decentralised way and promote your multi-web objects Boards and Bookmarks through a dedicated URL such as ABT://best-restaurants-in-barcelona","featureFourTitle":"Automatic Payment Subscription","featureFourDescription":"Subscribe to services through your ABT wallet or suggest to your followers to subscribe to your services and pay through their ABT wallets"},"download":{"title":"download","downloadApp":"download app","forMac":"for mac","forLinux":"for linux ","forWindows":"for windows","availableOn":"available on"},"company":{"title":"Our Company","description":"ABT Technologies Limited is registered in Gibraltar. We operate with the highest level of business standards and integrity, work with reputable law firms to ensure compliance with international and local regulations. Our source-code is audited by open bounty program and Ethereum smart-contract experts."},"ourTeam":{"title":"Our Team","description":"With wide expertise in software and business development, we combine experienced management, skilled software engineers and talented international marketing team","team":[{"name":"Adi Sossover","office":"Co-founder, CEO","linkedin":"https://www.linkedin.com/in/adi-sossover-2252262","bio":"Adi graduated from the Hebrew University of Jerusalem in Economics and Finance. He has performed various executive functions in software companies throughout Europe, the USA and Asia (including: Tecnomatix/UGS, now part of Siemens AG; and KDS, now part of the American Express Group).  Adi specialises in ERP and CRM worldwide deployments. During the last three years adi is involved in deploying innovative browsing tools and related blockchain technologies. Prior to the ABT and Addap’s development projects, Daniel and Adi jointly orchestrated an international CRM/ERP development successfully delivered and deployed in Europe, Asia and the USA.","image":"assets/img/adi.jpg","type":"team"},{"name":"Daniel Febrero Martín","office":"Co-founder, COO & CTO, Blockchain developer","linkedin":"https://es.linkedin.com/in/daniel-febrero-martin-07b4b469","bio":"Daniel studied at the HEC University (École des hautes études commerciales) in Lausanne, Switzerland. Before joining ABT & Addap’s, he worked for hedge funds and brokers as a full-stack contractor. Daniel developed a set of custom tools and algorithms in order to improve brokers daily productivity and trading.  Daniel specialises in ERP and CRM full-scale development. He created the world’s first trading bots for wine markets in 2010, and a portable scanner that maps and gives statistics about all mobile phones in the vicinity in 2012. He has been programming since the age of 12. During the last three years, Daniel has specialised in browsing tools and blockchain development.","image":"assets/img/dani.jpg","type":"team"},{"name":"Emilio Soca Herrera","office":"Backend Team Leader, Blockchain developer","linkedin":"https://www.linkedin.com/in/emiliosoca/","bio":"He is a full stack web developer with over 5 years of experience building applications. Graduated with a Computer Networks Degree from Polytechnic University of Catalonia(Spain), he is an expert in Javascript, he is passionate about the design and implementation of scalable systems. In the last two years, he has been immersed in the blockchain space, contributing to the ABT blockchain protocol. When not coding he is reading about old battle-tested ideas and new disruptive ways to help the team.","image":"assets/img/emilio.jpg","type":"team"},{"name":"Daniel Tiati Dang","office":"Backend, Blockchain developer","linkedin":"https://www.linkedin.com/in/danieltiati","bio":"He is a passionate software developer with over 5 years experiences designing and implementing software systems. He hold Telecommunication Engineering degree from Polytechnic University of Catalonia(Spain), and he has served in multiple software positions before specializing in the last years as Data and Backend Engineer. Since the last year he is wroking on achieving expertise in the Blockchain technology and contributing to ABT protocol development. He love adventuring with cutting edge technologies, hoping to  contribute to the progress of society.","image":"assets/img/dani_tiati.jpg","type":"team"},{"name":"Ramón Raindo Portillo","office":"Desktop Frontend Team Leader","linkedin":"https://www.linkedin.com/in/jose-ramon-raindo-portillo-978b034b/","bio":"Full stack developer with over 12 years of experience designing and developing applications for different companies. Graduated in Computer Science Engineering from the Polytechnic University of Catalonia, he is passionate with new technologies, science and graphic design. He is always trying to learn new technologies to boldly go where no one has developed before.","image":"assets/img/ramon.jpg","type":"team"},{"name":"Gemma Ferreras Barrero","office":"Mobile Frontend Team Leader","linkedin":"https://www.linkedin.com/in/gferreras/?locale=en_US","bio":"A software engineer graduated in Polytechnic University of Catalonia with a International Master in Management from EADA business school. She is a Full stack developer with international development experience in London and Spain. She is currently leading the mobile development and frontend team in ABT.","image":"assets/img/gemma.jpg","type":"team"},{"name":"Alex Oviedo Tinoco","office":"UI/UX & DevOps","linkedin":"https://www.linkedin.com/in/alexovi","bio":"Over 6 years of experience as a Full stack web developer. He is currently the Lead of UI/UX and product development, graduated as Computer Network Engineer from Polytechnic University of Catalonia (Spain). He has specialized in cloud computing and is responsible for the infrastructure of several projects. He was born in Ecuador and is a passionate about new technologies mainly in software development, cloud computing and UX.","image":"assets/img/alex.jpg","type":"team"},{"name":"Laura Chacón","office":"Mobile developer","linkedin":"https://www.linkedin.com/in/laura-chac%C3%B3n-178a35119/","bio":"Laura is a software developer part of the mobile team and she is helping to build the ABT/Addaps mobile app for iOS and Android using React Native. She was born and raised in Barcelona and graduated in Software engineering at Polytechnic University of Catalonia. She also had the chance to study abroad in Stockholm for 6 months. She worked as an assistant professor giving a very introductory of HTML, CSS and Javascript course in university and as an automation tester of and app with more than 45 million users.","image":"assets/img/laura.jpg","type":"team"},{"name":"Marc Capdevila Canadell","office":"Desktop Developer","linkedin":"https://www.linkedin.com/in/marc-capdevila-canadell-354605114","bio":"Currently finalazing his Degree in Computer Science Engineer from the Polytechnic University of Catalonia (Spain), Marc has 2 years of development experience in developing Algorithms and Mobile/Desktop applications. He is a pro active, extroverted and optimistic software developer, shows interest in learning and applying new technologies.","image":"assets/img/marc.jpg","type":"team"},{"name":"Louise Andersson","office":"Marketing, USA, UK & Nordic countries","linkedin":"https://www.linkedin.com/in/louise-andersson-0/","bio":"Marketing specialist with a great passion for football. Graduated with a BBA in Marketing from Northwood University, USA, as Cum Laude of her class. She has represented worldwide known companies and brands, both in the US and Europe. Gathering years of experience within the marketing, social media and events field, both for small and big companies. When not in the office or on the football field, she loves to travel and discover new places.","image":"assets/img/louise.jpg","type":"team"},{"name":"Ewa Gruszka","office":"Marketing, Eastern Europe & Russia","linkedin":"https://www.linkedin.com/in/ewa-gruszka-ba942114a/","bio":"With a background in Marketing. She holds a BA degree with a management focus. She has a keen interest in consumer behavior and passionate about the innovative future of technology features. With experience in community management, she has contributed to different volunteering organizations inter alia in international community insuring the smooth execution of operational activities and events. Analytical and driven skills, she works with passion, meaning and purpose.","image":"assets/img/ewa.jpg","type":"team"},{"name":"Csilla Bendik","office":"Marketing, Western Europe & Asia","linkedin":"https://www.linkedin.com/in/csilla-bendik-630a62b5","bio":"Holding a master degree of Pázmány Péter University in Budapest, Hungary. She studied abroad and completed special courses in Warsaw for one semester. Her professional experience include managing all the marketing functions of the international department of Universidad CEU San Pablo in Madrid such as advertising, social media channels and events furthermore negotiated new bilateral contracts. Fluent in Hungarian, English, Spanish.","image":"assets/img/csilla.jpg","type":"team"},{"name":"Andrea Llamas Olmedo","office":"Marketing, South Europe & Central and South America","linkedin":"https://www.linkedin.com/in/andrea-llamas-olmedo/","bio":"Andrea is the local member in the marketing team. Original from Collbató, she loves dancing and the local traditions as being part of the groups of Diables and Bastoners. She studied her business degree in the University Pompeu Fabra and did few marketing courses in the University of Amsterdam. With over two years of previous experience in the digital marketing area, she takes care of social media channels for Barcelona and Spain.","image":"assets/img/andrea.jpg","type":"team"}],"boardMenberTile":"ABT Advisory Board Member","boardMenber":{"name":"Virginie Lazes","office":"Managing Partner Rothschild Global Advisory","linkedin":"https://www.linkedin.com/in/virginie-lazes-44a4355","bio":"Virginie graduated from Sciences PO University.  She has 20 years of highly successful track records in M&A specializing in Technology, Media, Telecom, Software and Digital. After exercising executive positions in Close Brothers & Bryan Gainer, Virginie is now a managing partner at Rothschild Global Advisory in Paris. Virginie is part of ABT advisory board team, and participate in advising the company for its international business development and growth strategy.","image":"assets/img/virginie.jpg"},"advisorsTitle":"ABT Blockchain strategy and Token sale Advisors","advisorsDescription":"ABT Blockchain strategy and Token sale Advisors","advisors":[{"name":"Eddy Travia","office":"CEO and Co-founder of Coinsilium GroupCo-founder at Block Chain Space","linkedin":"https://www.linkedin.com/in/startupeddy","bio":"Eddy Travia is a pioneer investor in blockchain technology startups and the CEO of Coinsilium, a London-based investment company that finances and manages the development of early-stage blockchain technology ventures. Coinsilium shares are quoted on NEX Exchange in London (NEX: COIN). In July 2013, Eddy co-founded Seedcoin, the world’s first global incubator of Bitcoin startups and, in November 2013, organized the first industry conference in Asia (in Singapore) and was named among the ‘Top three Most Influential Investors’ at the Blockchain Awards in May 2014.   Eddy has led early-stage investments in 17 blockchain companies around the world, including Factom, RSK, SatoshiPay, Minebox, CoinDash and Indorse. An early believer in the impact of blockchain technologies, Eddy delivers keynote speeches around the world, advises corporates and financial regulators, and also helps blockchain entrepreneurs to fund and grow their ventures.","image":"assets/img/eddy.jpg","type":"advisor"},{"name":"Yacine Teraï","office":"CEO StartupToken","linkedin":"https://www.linkedin.com/in/yacineterai","bio":"Yacine is a savvy entrepreneur with 15+ years in the global technology start-up space. Enriched by his sharped sense of business creation, he developed a capacity to discover cutting edge projects and game changers. Member of the Blockchain Investment Consortium, he is the founder of StartupToken, a global accelerator and consultancy guiding start-ups through every stage leading to the token generating event. He is the CEO of Tokens Capital Blockchain investment firm and VC for Consilium, the first ICAP ISDX Blockchain investment company to be publicly listed. He is also a speaker, angel investor and educator on Blockchain & crypto investment space.","image":"assets/img/yacine.jpg","type":"advisor"}]},"tokenSale":{"title":"Token sale","upToTitle":"Token sale up to","upToNumber":"250,000,000 ABT","priceTitle":"Price","priceNumber":"1 ETH = 3000 ABT","publicStartTile":"Public Sale start date","publicStartDate":"23 December 2017","publicEndTitle":"Public Sale end date","publicEndDate":"30 days after start date"},"joinAbt":{"title":"PUBLIC SALE START DATE JANUARY 2018","contactUs":"contact us","downloadWhitepaper":"download whitepaper","lastUpdate":"last update 2017/11/17","termsAndConditions":"Token sale terms and conditions"},"allocation":{"title":"Allocation of ETH","description":"Use funds will be under Gibraltar regulatory terms and supervised by the company directors and external certified auditors. The company intends to use the proceeds over a period of four years."},"roadmap":{"title":"Roadmap","description":"The main milestones on our development roadmap are:","roadmapOneTitle":"ABT wallet – January 2018","roadmapOneDescription":"The wallet will provide all features of the ERC223 standard.","roadmapTwoTitle":"ABT Subscription framework – April 2018","roadmapTwoDescription":"The framework will provide the necessary toolset to manage “Subscription with ABT Protocol” in a flexible plug-and-play mode for any website, app, company or an individual wishing to implement the ABT Protocol.","roadmapThreeTitle":"ABT Login framework – June 2018","roadmapThreeDescription":"The framework will provide a sufficient tool to integrate “Login with ABT” in a plug-and-play mode for any website, App, Company or an individual wishing to endorse the ABT Protocol and implement it.","roadmapFourTitle":"Digital Identity – June 2018","roadmapFourDescription":"Manage your online virtual identity from one unique interface: your ABT wallet. Visualise those websites and apps to which you are registered. View your last accesses. Your detailed identity is stored in the smart contract.","roadmapFiveTitle":"ABT Board Framework – September 2018","roadmapFiveDescription":"The framework will provide sufficient tools to open visualise and manage Boards through a plug-and-play mode for any website, app, company or individual who implement the ABT Board tool and implement it.","roadmapSixTitle":"ABT Domain Framework – December 2018","roadmapSixDescription":"We will provide tools to manage Domains through a plug-and-play mode for any website, app, company or individual who implement the ABT Domain Name System tool and implement it.","roadmapSevenTitle":"Promoting ABT through Addap’s Browser Premium Features","roadmapSevenDescription":"Through 2018 Addap’s Browser will test and implement the ABT Protocol as a pioneer partner. Addap’s Browser shall assist ABT in testing the go to market affectivity through various analysis of related users’ experiences and satisfaction level measures as well as other joint marketing initiatives."},"thePress":{"title":"The press talk about us","over":"Over 15.000 subscribers"},"footer":{"termsAndConditions":"Terms and Conditions","participate":"Participate","technologies":"Technologies","team":"Team","token":"Token","contact":"Contact"}}}},{"lang":"ro","page":{"topBar":{"participate":"Participate","technologies":"Technologies","team":"Echipa","token":"Token","roadmap":"Roadmap","whitepaper":"Whitepaper"},"home":{"cover":{"title":"Decentralized browsing web services","subtitle":"Protocol powered Advanced Browsing Token (ABT)","tokenSale":"DATA DE INCEPERE A VANZARII PUBLICE DE TOKEN-URI Ianuarie 2018","tokenMaximun":"250,000,000 ABT","tokenMaximunText":"Numarul maxim de token-uri pentru vanzare","tokenPrice":"Pretul Token-ului 1 ETH = 3000 ABT","contactUs":"CONTACTEAZA-NE","downloadWhitepaper":"DESCARCA WHITEPAPER-UL","whitepaperLastUpdate":"last update 2017/11/17","termsAndConditions":"Vanzare token-uri, termeni si conditii"},"ico":{"safetyTitle":"Blockchain Navigation Safety","safetyDescription":"Our blockchain multi browsing technology ensures the safety of your web navigation","safetySloganOne":"The ultimate protection to access your personalised navigation platform","safetySloganTwo":"Your digital identity saved on blockchain is provided only to services of your choice","safetySloganThree":"The multi web objects you copy, save and share are executed on blockchain","smarterTitle":"Browsing Smarter & Faster","smarterDescription":"Our multi browsing method and technology increase your navigation efficiency and speed","smarterSloganOne":"Selected web objects are simultaneously active & visible in batches, ready to be saved and shared in a blink of an eye","smarterSloganTwo":"Smart display allows instant switch between multi screening and full screen mode","featuresTitle":"Blockchain Features","featureOneTitle":"Digital Secure Identity & Login","featureOneDescription":"Create and update your digital identity from your ABT Wallet. Login to any service or compatible website with your ABT digital identity, securely, without any password. Your browsing environment is safe","featureTwoTitle":"Multi-web objects Boards Management","featureTwoDescription":"Save, duplicate and share your multi-web objects Boards and Bookmarks within the Blockchain. Keep your web space safe. Increase online navigation efficiency and speed. Promote various social browsing network activities","featureThreeTitle":"Domain Name System","featureThreeDescription":"Rent domains in a decentralised way and promote your multi-web objects Boards and Bookmarks through a dedicated URL such as ABT://best-restaurants-in-barcelona","featureFourTitle":"Automatic Payment Subscription","featureFourDescription":"Subscribe to services through your ABT wallet or suggest to your followers to subscribe to your services and pay through their ABT wallets"},"download":{"title":"download","downloadApp":"download app","forMac":"for mac","forLinux":"for linux ","forWindows":"for windows","availableOn":"available on"},"company":{"title":"Our Company","description":"ABT Technologies Limited is registered in Gibraltar. We operate with the highest level of business standards and integrity, work with reputable law firms to ensure compliance with international and local regulations. Our source-code is audited by open bounty program and Ethereum smart-contract experts."},"ourTeam":{"title":"Our Team","description":"With wide expertise in software and business development, we combine experienced management, skilled software engineers and talented international marketing team","team":[{"name":"Adi Sossover","office":"Co-founder, CEO","linkedin":"https://www.linkedin.com/in/adi-sossover-2252262","bio":"Adi graduated from the Hebrew University of Jerusalem in Economics and Finance. He has performed various executive functions in software companies throughout Europe, the USA and Asia (including: Tecnomatix/UGS, now part of Siemens AG; and KDS, now part of the American Express Group).  Adi specialises in ERP and CRM worldwide deployments. During the last three years adi is involved in deploying innovative browsing tools and related blockchain technologies. Prior to the ABT and Addap’s development projects, Daniel and Adi jointly orchestrated an international CRM/ERP development successfully delivered and deployed in Europe, Asia and the USA.","image":"assets/img/adi.jpg","type":"team"},{"name":"Daniel Febrero Martín","office":"Co-founder, COO & CTO, Blockchain developer","linkedin":"https://es.linkedin.com/in/daniel-febrero-martin-07b4b469","bio":"Daniel studied at the HEC University (École des hautes études commerciales) in Lausanne, Switzerland. Before joining ABT & Addap’s, he worked for hedge funds and brokers as a full-stack contractor. Daniel developed a set of custom tools and algorithms in order to improve brokers daily productivity and trading.  Daniel specialises in ERP and CRM full-scale development. He created the world’s first trading bots for wine markets in 2010, and a portable scanner that maps and gives statistics about all mobile phones in the vicinity in 2012. He has been programming since the age of 12. During the last three years, Daniel has specialised in browsing tools and blockchain development.","image":"assets/img/dani.jpg","type":"team"},{"name":"Emilio Soca Herrera","office":"Backend Team Leader, Blockchain developer","linkedin":"https://www.linkedin.com/in/emiliosoca/","bio":"He is a full stack web developer with over 5 years of experience building applications. Graduated with a Computer Networks Degree from Polytechnic University of Catalonia(Spain), he is an expert in Javascript, he is passionate about the design and implementation of scalable systems. In the last two years, he has been immersed in the blockchain space, contributing to the ABT blockchain protocol. When not coding he is reading about old battle-tested ideas and new disruptive ways to help the team.","image":"assets/img/emilio.jpg","type":"team"},{"name":"Daniel Tiati Dang","office":"Backend, Blockchain developer","linkedin":"https://www.linkedin.com/in/danieltiati","bio":"He is a passionate software developer with over 5 years experiences designing and implementing software systems. He hold Telecommunication Engineering degree from Polytechnic University of Catalonia(Spain), and he has served in multiple software positions before specializing in the last years as Data and Backend Engineer. Since the last year he is wroking on achieving expertise in the Blockchain technology and contributing to ABT protocol development. He love adventuring with cutting edge technologies, hoping to  contribute to the progress of society.","image":"assets/img/dani_tiati.jpg","type":"team"},{"name":"Ramón Raindo Portillo","office":"Desktop Frontend Team Leader","linkedin":"https://www.linkedin.com/in/jose-ramon-raindo-portillo-978b034b/","bio":"Full stack developer with over 12 years of experience designing and developing applications for different companies. Graduated in Computer Science Engineering from the Polytechnic University of Catalonia, he is passionate with new technologies, science and graphic design. He is always trying to learn new technologies to boldly go where no one has developed before.","image":"assets/img/ramon.jpg","type":"team"},{"name":"Gemma Ferreras Barrero","office":"Mobile Frontend Team Leader","linkedin":"https://www.linkedin.com/in/gferreras/?locale=en_US","bio":"A software engineer graduated in Polytechnic University of Catalonia with a International Master in Management from EADA business school. She is a Full stack developer with international development experience in London and Spain. She is currently leading the mobile development and frontend team in ABT.","image":"assets/img/gemma.jpg","type":"team"},{"name":"Alex Oviedo Tinoco","office":"UI/UX & DevOps","linkedin":"https://www.linkedin.com/in/alexovi","bio":"Over 6 years of experience as a Full stack web developer. He is currently the Lead of UI/UX and product development, graduated as Computer Network Engineer from Polytechnic University of Catalonia (Spain). He has specialized in cloud computing and is responsible for the infrastructure of several projects. He was born in Ecuador and is a passionate about new technologies mainly in software development, cloud computing and UX.","image":"assets/img/alex.jpg","type":"team"},{"name":"Laura Chacón","office":"Mobile developer","linkedin":"https://www.linkedin.com/in/laura-chac%C3%B3n-178a35119/","bio":"Laura is a software developer part of the mobile team and she is helping to build the ABT/Addaps mobile app for iOS and Android using React Native. She was born and raised in Barcelona and graduated in Software engineering at Polytechnic University of Catalonia. She also had the chance to study abroad in Stockholm for 6 months. She worked as an assistant professor giving a very introductory of HTML, CSS and Javascript course in university and as an automation tester of and app with more than 45 million users.","image":"assets/img/laura.jpg","type":"team"},{"name":"Marc Capdevila Canadell","office":"Desktop Developer","linkedin":"https://www.linkedin.com/in/marc-capdevila-canadell-354605114","bio":"Currently finalazing his Degree in Computer Science Engineer from the Polytechnic University of Catalonia (Spain), Marc has 2 years of development experience in developing Algorithms and Mobile/Desktop applications. He is a pro active, extroverted and optimistic software developer, shows interest in learning and applying new technologies.","image":"assets/img/marc.jpg","type":"team"},{"name":"Louise Andersson","office":"Marketing, USA, UK & Nordic countries","linkedin":"https://www.linkedin.com/in/louise-andersson-0/","bio":"Marketing specialist with a great passion for football. Graduated with a BBA in Marketing from Northwood University, USA, as Cum Laude of her class. She has represented worldwide known companies and brands, both in the US and Europe. Gathering years of experience within the marketing, social media and events field, both for small and big companies. When not in the office or on the football field, she loves to travel and discover new places.","image":"assets/img/louise.jpg","type":"team"},{"name":"Ewa Gruszka","office":"Marketing, Eastern Europe & Russia","linkedin":"https://www.linkedin.com/in/ewa-gruszka-ba942114a/","bio":"With a background in Marketing. She holds a BA degree with a management focus. She has a keen interest in consumer behavior and passionate about the innovative future of technology features. With experience in community management, she has contributed to different volunteering organizations inter alia in international community insuring the smooth execution of operational activities and events. Analytical and driven skills, she works with passion, meaning and purpose.","image":"assets/img/ewa.jpg","type":"team"},{"name":"Csilla Bendik","office":"Marketing, Western Europe & Asia","linkedin":"https://www.linkedin.com/in/csilla-bendik-630a62b5","bio":"Holding a master degree of Pázmány Péter University in Budapest, Hungary. She studied abroad and completed special courses in Warsaw for one semester. Her professional experience include managing all the marketing functions of the international department of Universidad CEU San Pablo in Madrid such as advertising, social media channels and events furthermore negotiated new bilateral contracts. Fluent in Hungarian, English, Spanish.","image":"assets/img/csilla.jpg","type":"team"},{"name":"Andrea Llamas Olmedo","office":"Marketing, South Europe & Central and South America","linkedin":"https://www.linkedin.com/in/andrea-llamas-olmedo/","bio":"Andrea is the local member in the marketing team. Original from Collbató, she loves dancing and the local traditions as being part of the groups of Diables and Bastoners. She studied her business degree in the University Pompeu Fabra and did few marketing courses in the University of Amsterdam. With over two years of previous experience in the digital marketing area, she takes care of social media channels for Barcelona and Spain.","image":"assets/img/andrea.jpg","type":"team"}],"boardMenberTile":"ABT Advisory Board Member","boardMenber":{"name":"Virginie Lazes","office":"Managing Partner Rothschild Global Advisory","linkedin":"https://www.linkedin.com/in/virginie-lazes-44a4355","bio":"Virginie graduated from Sciences PO University.  She has 20 years of highly successful track records in M&A specializing in Technology, Media, Telecom, Software and Digital. After exercising executive positions in Close Brothers & Bryan Gainer, Virginie is now a managing partner at Rothschild Global Advisory in Paris. Virginie is part of ABT advisory board team, and participate in advising the company for its international business development and growth strategy.","image":"assets/img/virginie.jpg"},"advisorsTitle":"ABT Blockchain strategy and Token sale Advisors","advisorsDescription":"ABT Blockchain strategy and Token sale Advisors","advisors":[{"name":"Eddy Travia","office":"CEO and Co-founder of Coinsilium GroupCo-founder at Block Chain Space","linkedin":"https://www.linkedin.com/in/startupeddy","bio":"Eddy Travia is a pioneer investor in blockchain technology startups and the CEO of Coinsilium, a London-based investment company that finances and manages the development of early-stage blockchain technology ventures. Coinsilium shares are quoted on NEX Exchange in London (NEX: COIN). In July 2013, Eddy co-founded Seedcoin, the world’s first global incubator of Bitcoin startups and, in November 2013, organized the first industry conference in Asia (in Singapore) and was named among the ‘Top three Most Influential Investors’ at the Blockchain Awards in May 2014.   Eddy has led early-stage investments in 17 blockchain companies around the world, including Factom, RSK, SatoshiPay, Minebox, CoinDash and Indorse. An early believer in the impact of blockchain technologies, Eddy delivers keynote speeches around the world, advises corporates and financial regulators, and also helps blockchain entrepreneurs to fund and grow their ventures.","image":"assets/img/eddy.jpg","type":"advisor"},{"name":"Yacine Teraï","office":"CEO StartupToken","linkedin":"https://www.linkedin.com/in/yacineterai","bio":"Yacine is a savvy entrepreneur with 15+ years in the global technology start-up space. Enriched by his sharped sense of business creation, he developed a capacity to discover cutting edge projects and game changers. Member of the Blockchain Investment Consortium, he is the founder of StartupToken, a global accelerator and consultancy guiding start-ups through every stage leading to the token generating event. He is the CEO of Tokens Capital Blockchain investment firm and VC for Consilium, the first ICAP ISDX Blockchain investment company to be publicly listed. He is also a speaker, angel investor and educator on Blockchain & crypto investment space.","image":"assets/img/yacine.jpg","type":"advisor"}]},"tokenSale":{"title":"Token sale","upToTitle":"Token sale up to","upToNumber":"250,000,000 ABT","priceTitle":"Price","priceNumber":"1 ETH = 3000 ABT","publicStartTile":"Public Sale start date","publicStartDate":"23 December 2017","publicEndTitle":"Public Sale end date","publicEndDate":"30 days after start date"},"joinAbt":{"title":"PUBLIC SALE START DATE 23 DECEMBER 2017","contactUs":"contact us","downloadWhitepaper":"download whitepaper","lastUpdate":"last update 2017/11/17","termsAndConditions":"Token sale terms and conditions"},"allocation":{"title":"Allocation of ETH","description":"Use funds will be under Gibraltar regulatory terms and supervised by the company directors and external certified auditors. The company intends to use the proceeds over a period of four years."},"roadmap":{"title":"Roadmap","description":"The main milestones on our development roadmap are:","roadmapOneTitle":"ABT wallet – January 2018","roadmapOneDescription":"The wallet will provide all features of the ERC223 standard.","roadmapTwoTitle":"ABT Subscription framework – April 2018","roadmapTwoDescription":"The framework will provide the necessary toolset to manage “Subscription with ABT Protocol” in a flexible plug-and-play mode for any website, app, company or an individual wishing to implement the ABT Protocol.","roadmapThreeTitle":"ABT Login framework – June 2018","roadmapThreeDescription":"The framework will provide a sufficient tool to integrate “Login with ABT” in a plug-and-play mode for any website, App, Company or an individual wishing to endorse the ABT Protocol and implement it.","roadmapFourTitle":"Digital Identity – June 2018","roadmapFourDescription":"Manage your online virtual identity from one unique interface: your ABT wallet. Visualise those websites and apps to which you are registered. View your last accesses. Your detailed identity is stored in the smart contract.","roadmapFiveTitle":"ABT Board Framework – September 2018","roadmapFiveDescription":"The framework will provide sufficient tools to open visualise and manage Boards through a plug-and-play mode for any website, app, company or individual who implement the ABT Board tool and implement it.","roadmapSixTitle":"ABT Domain Framework – December 2018","roadmapSixDescription":"We will provide tools to manage Domains through a plug-and-play mode for any website, app, company or individual who implement the ABT Domain Name System tool and implement it.","roadmapSevenTitle":"Promoting ABT through Addap’s Browser Premium Features","roadmapSevenDescription":"Through 2018 Addap’s Browser will test and implement the ABT Protocol as a pioneer partner. Addap’s Browser shall assist ABT in testing the go to market affectivity through various analysis of related users’ experiences and satisfaction level measures as well as other joint marketing initiatives."},"thePress":{"title":"The press talk about us","over":"Over 15.000 subscribers"},"footer":{"termsAndConditions":"Terms and Conditions","participate":"Participate","technologies":"Technologies","team":"Team","token":"Token","contact":"Contact"}}}},{"lang":"es","page":{"topBar":{"participate":"Participa","technologies":"Tehnologii","team":"Echipa","token":"Token","roadmap":"Roadmap","whitepaper":"Whitepaper"},"home":{"cover":{"title":"Navegador descentralizado y we servicios","subtitle":"Protocolo  por tcnología avanzada (ABT)","tokenSale":"PUBLIC SALE START DATE 23 DECEMBER 2017","tokenMaximun":"250,000,000 ABT","tokenMaximunText":"Maximun token sale supply","tokenPrice":"Token Price: 1 ETH = 3000 ABT","contactUs":"contact us","downloadWhitepaper":"download whitepaper","whitepaperLastUpdate":"last update 2017/11/17","termsAndConditions":"Token sale terms and conditions"},"ico":{"safetyTitle":"Blockchain Navigation Safety","safetyDescription":"Our blockchain multi browsing technology ensures the safety of your web navigation","safetySloganOne":"The ultimate protection to access your personalised navigation platform","safetySloganTwo":"Your digital identity saved on blockchain is provided only to services of your choice","safetySloganThree":"The multi web objects you copy, save and share are executed on blockchain","smarterTitle":"Browsing Smarter & Faster","smarterDescription":"Our multi browsing method and technology increase your navigation efficiency and speed","smarterSloganOne":"Selected web objects are simultaneously active & visible in batches, ready to be saved and shared in a blink of an eye","smarterSloganTwo":"Smart display allows instant switch between multi screening and full screen mode","featuresTitle":"Blockchain Features","featureOneTitle":"Digital Secure Identity & Login","featureOneDescription":"Create and update your digital identity from your ABT Wallet. Login to any service or compatible website with your ABT digital identity, securely, without any password. Your browsing environment is safe","featureTwoTitle":"Multi-web objects Boards Management","featureTwoDescription":"Save, duplicate and share your multi-web objects Boards and Bookmarks within the Blockchain. Keep your web space safe. Increase online navigation efficiency and speed. Promote various social browsing network activities","featureThreeTitle":"Domain Name System","featureThreeDescription":"Rent domains in a decentralised way and promote your multi-web objects Boards and Bookmarks through a dedicated URL such as ABT://best-restaurants-in-barcelona","featureFourTitle":"Automatic Payment Subscription","featureFourDescription":"Subscribe to services through your ABT wallet or suggest to your followers to subscribe to your services and pay through their ABT wallets"},"download":{"title":"descargar","downloadApp":"descargar app","forMac":"para mac","forLinux":"para linux ","forWindows":"para windows","availableOn":"disponible en"},"company":{"title":"Our Company","description":"ABT Technologies Limited is registered in Gibraltar. We operate with the highest level of business standards and integrity, work with reputable law firms to ensure compliance with international and local regulations. Our source-code is audited by open bounty program and Ethereum smart-contract experts."},"ourTeam":{"title":"Our Team","description":"With wide expertise in software and business development, we combine experienced management, skilled software engineers and talented international marketing team","team":[{"name":"Adi Sossover","office":"Co-founder, CEO","linkedin":"https://www.linkedin.com/in/adi-sossover-2252262","bio":"Adi graduated from the Hebrew University of Jerusalem in Economics and Finance. He has performed various executive functions in software companies throughout Europe, the USA and Asia (including: Tecnomatix/UGS, now part of Siemens AG; and KDS, now part of the American Express Group).  Adi specialises in ERP and CRM worldwide deployments. During the last three years adi is involved in deploying innovative browsing tools and related blockchain technologies. Prior to the ABT and Addap’s development projects, Daniel and Adi jointly orchestrated an international CRM/ERP development successfully delivered and deployed in Europe, Asia and the USA.","image":"assets/img/adi.jpg","type":"team"},{"name":"Daniel Febrero Martín","office":"Co-founder, COO & CTO, Blockchain developer","linkedin":"https://es.linkedin.com/in/daniel-febrero-martin-07b4b469","bio":"Daniel studied at the HEC University (École des hautes études commerciales) in Lausanne, Switzerland. Before joining ABT & Addap’s, he worked for hedge funds and brokers as a full-stack contractor. Daniel developed a set of custom tools and algorithms in order to improve brokers daily productivity and trading.  Daniel specialises in ERP and CRM full-scale development. He created the world’s first trading bots for wine markets in 2010, and a portable scanner that maps and gives statistics about all mobile phones in the vicinity in 2012. He has been programming since the age of 12. During the last three years, Daniel has specialised in browsing tools and blockchain development.","image":"assets/img/dani.jpg","type":"team"},{"name":"Emilio Soca Herrera","office":"Backend Team Leader, Blockchain developer","linkedin":"https://www.linkedin.com/in/emiliosoca/","bio":"He is a full stack web developer with over 5 years of experience building applications. Graduated with a Computer Networks Degree from Polytechnic University of Catalonia(Spain), he is an expert in Javascript, he is passionate about the design and implementation of scalable systems. In the last two years, he has been immersed in the blockchain space, contributing to the ABT blockchain protocol. When not coding he is reading about old battle-tested ideas and new disruptive ways to help the team.","image":"assets/img/emilio.jpg","type":"team"},{"name":"Daniel Tiati Dang","office":"Backend, Blockchain developer","linkedin":"https://www.linkedin.com/in/danieltiati","bio":"He is a passionate software developer with over 5 years experiences designing and implementing software systems. He hold Telecommunication Engineering degree from Polytechnic University of Catalonia(Spain), and he has served in multiple software positions before specializing in the last years as Data and Backend Engineer. Since the last year he is wroking on achieving expertise in the Blockchain technology and contributing to ABT protocol development. He love adventuring with cutting edge technologies, hoping to  contribute to the progress of society.","image":"assets/img/dani_tiati.jpg","type":"team"},{"name":"Ramón Raindo Portillo","office":"Desktop Frontend Team Leader","linkedin":"https://www.linkedin.com/in/jose-ramon-raindo-portillo-978b034b/","bio":"Full stack developer with over 12 years of experience designing and developing applications for different companies. Graduated in Computer Science Engineering from the Polytechnic University of Catalonia, he is passionate with new technologies, science and graphic design. He is always trying to learn new technologies to boldly go where no one has developed before.","image":"assets/img/ramon.jpg","type":"team"},{"name":"Gemma Ferreras Barrero","office":"Mobile Frontend Team Leader","linkedin":"https://www.linkedin.com/in/gferreras/?locale=en_US","bio":"A software engineer graduated in Polytechnic University of Catalonia with a International Master in Management from EADA business school. She is a Full stack developer with international development experience in London and Spain. She is currently leading the mobile development and frontend team in ABT.","image":"assets/img/gemma.jpg","type":"team"},{"name":"Alex Oviedo Tinoco","office":"UI/UX & DevOps","linkedin":"https://www.linkedin.com/in/alexovi","bio":"Over 6 years of experience as a Full stack web developer. He is currently the Lead of UI/UX and product development, graduated as Computer Network Engineer from Polytechnic University of Catalonia (Spain). He has specialized in cloud computing and is responsible for the infrastructure of several projects. He was born in Ecuador and is a passionate about new technologies mainly in software development, cloud computing and UX.","image":"assets/img/alex.jpg","type":"team"},{"name":"Laura Chacón","office":"Mobile developer","linkedin":"https://www.linkedin.com/in/laura-chac%C3%B3n-178a35119/","bio":"Laura is a software developer part of the mobile team and she is helping to build the ABT/Addaps mobile app for iOS and Android using React Native. She was born and raised in Barcelona and graduated in Software engineering at Polytechnic University of Catalonia. She also had the chance to study abroad in Stockholm for 6 months. She worked as an assistant professor giving a very introductory of HTML, CSS and Javascript course in university and as an automation tester of and app with more than 45 million users.","image":"assets/img/laura.jpg","type":"team"},{"name":"Marc Capdevila Canadell","office":"Desktop Developer","linkedin":"https://www.linkedin.com/in/marc-capdevila-canadell-354605114","bio":"Currently finalazing his Degree in Computer Science Engineer from the Polytechnic University of Catalonia (Spain), Marc has 2 years of development experience in developing Algorithms and Mobile/Desktop applications. He is a pro active, extroverted and optimistic software developer, shows interest in learning and applying new technologies.","image":"assets/img/marc.jpg","type":"team"},{"name":"Louise Andersson","office":"Marketing, USA, UK & Nordic countries","linkedin":"https://www.linkedin.com/in/louise-andersson-0/","bio":"Marketing specialist with a great passion for football. Graduated with a BBA in Marketing from Northwood University, USA, as Cum Laude of her class. She has represented worldwide known companies and brands, both in the US and Europe. Gathering years of experience within the marketing, social media and events field, both for small and big companies. When not in the office or on the football field, she loves to travel and discover new places.","image":"assets/img/louise.jpg","type":"team"},{"name":"Ewa Gruszka","office":"Marketing, Eastern Europe & Russia","linkedin":"https://www.linkedin.com/in/ewa-gruszka-ba942114a/","bio":"With a background in Marketing. She holds a BA degree with a management focus. She has a keen interest in consumer behavior and passionate about the innovative future of technology features. With experience in community management, she has contributed to different volunteering organizations inter alia in international community insuring the smooth execution of operational activities and events. Analytical and driven skills, she works with passion, meaning and purpose.","image":"assets/img/ewa.jpg","type":"team"},{"name":"Csilla Bendik","office":"Marketing, Western Europe & Asia","linkedin":"https://www.linkedin.com/in/csilla-bendik-630a62b5","bio":"Holding a master degree of Pázmány Péter University in Budapest, Hungary. She studied abroad and completed special courses in Warsaw for one semester. Her professional experience include managing all the marketing functions of the international department of Universidad CEU San Pablo in Madrid such as advertising, social media channels and events furthermore negotiated new bilateral contracts. Fluent in Hungarian, English, Spanish.","image":"assets/img/csilla.jpg","type":"team"},{"name":"Andrea Llamas Olmedo","office":"Marketing, South Europe & Central and South America","linkedin":"https://www.linkedin.com/in/andrea-llamas-olmedo/","bio":"Andrea is the local member in the marketing team. Original from Collbató, she loves dancing and the local traditions as being part of the groups of Diables and Bastoners. She studied her business degree in the University Pompeu Fabra and did few marketing courses in the University of Amsterdam. With over two years of previous experience in the digital marketing area, she takes care of social media channels for Barcelona and Spain.","image":"assets/img/andrea.jpg","type":"team"}],"boardMenberTile":"ABT Advisory Board Member","boardMenber":{"name":"Virginie Lazes","office":"Managing Partner Rothschild Global Advisory","linkedin":"https://www.linkedin.com/in/virginie-lazes-44a4355","bio":"Virginie graduated from Sciences PO University.  She has 20 years of highly successful track records in M&A specializing in Technology, Media, Telecom, Software and Digital. After exercising executive positions in Close Brothers & Bryan Gainer, Virginie is now a managing partner at Rothschild Global Advisory in Paris. Virginie is part of ABT advisory board team, and participate in advising the company for its international business development and growth strategy.","image":"assets/img/virginie.jpg"},"advisorsTitle":"ABT Blockchain strategy and Token sale Advisors","advisorsDescription":"ABT Blockchain strategy and Token sale Advisors","advisors":[{"name":"Eddy Travia","office":"CEO and Co-founder of Coinsilium GroupCo-founder at Block Chain Space","linkedin":"https://www.linkedin.com/in/startupeddy","bio":"Eddy Travia is a pioneer investor in blockchain technology startups and the CEO of Coinsilium, a London-based investment company that finances and manages the development of early-stage blockchain technology ventures. Coinsilium shares are quoted on NEX Exchange in London (NEX: COIN). In July 2013, Eddy co-founded Seedcoin, the world’s first global incubator of Bitcoin startups and, in November 2013, organized the first industry conference in Asia (in Singapore) and was named among the ‘Top three Most Influential Investors’ at the Blockchain Awards in May 2014.   Eddy has led early-stage investments in 17 blockchain companies around the world, including Factom, RSK, SatoshiPay, Minebox, CoinDash and Indorse. An early believer in the impact of blockchain technologies, Eddy delivers keynote speeches around the world, advises corporates and financial regulators, and also helps blockchain entrepreneurs to fund and grow their ventures.","image":"assets/img/eddy.jpg","type":"advisor"},{"name":"Yacine Teraï","office":"CEO StartupToken","linkedin":"https://www.linkedin.com/in/yacineterai","bio":"Yacine is a savvy entrepreneur with 15+ years in the global technology start-up space. Enriched by his sharped sense of business creation, he developed a capacity to discover cutting edge projects and game changers. Member of the Blockchain Investment Consortium, he is the founder of StartupToken, a global accelerator and consultancy guiding start-ups through every stage leading to the token generating event. He is the CEO of Tokens Capital Blockchain investment firm and VC for Consilium, the first ICAP ISDX Blockchain investment company to be publicly listed. He is also a speaker, angel investor and educator on Blockchain & crypto investment space.","image":"assets/img/yacine.jpg","type":"advisor"}]},"tokenSale":{"title":"Token sale","upToTitle":"Token sale up to","upToNumber":"250,000,000 ABT","priceTitle":"Price","priceNumber":"1 ETH = 3000 ABT","publicStartTile":"Public Sale start date","publicStartDate":"23 December 2017","publicEndTitle":"Public Sale end date","publicEndDate":"30 days after start date"},"joinAbt":{"title":"PUBLIC SALE START DATE 23 DECEMBER 2017","contactUs":"contáctanos","downloadWhitepaper":"descargar whitepaper","lastUpdate":"última actualización 2017/11/17","termsAndConditions":"Token sale terms and conditions"},"allocation":{"title":"Allocation of ETH","description":"Use funds will be under Gibraltar regulatory terms and supervised by the company directors and external certified auditors. The company intends to use the proceeds over a period of four years."},"roadmap":{"title":"Roadmap","description":"The main milestones on our development roadmap are:","roadmapOneTitle":"ABT wallet – January 2018","roadmapOneDescription":"The wallet will provide all features of the ERC223 standard.","roadmapTwoTitle":"ABT Subscription framework – April 2018","roadmapTwoDescription":"The framework will provide the necessary toolset to manage “Subscription with ABT Protocol” in a flexible plug-and-play mode for any website, app, company or an individual wishing to implement the ABT Protocol.","roadmapThreeTitle":"ABT Login framework – June 2018","roadmapThreeDescription":"The framework will provide a sufficient tool to integrate “Login with ABT” in a plug-and-play mode for any website, App, Company or an individual wishing to endorse the ABT Protocol and implement it.","roadmapFourTitle":"Digital Identity – June 2018","roadmapFourDescription":"Manage your online virtual identity from one unique interface: your ABT wallet. Visualise those websites and apps to which you are registered. View your last accesses. Your detailed identity is stored in the smart contract.","roadmapFiveTitle":"ABT Board Framework – September 2018","roadmapFiveDescription":"The framework will provide sufficient tools to open visualise and manage Boards through a plug-and-play mode for any website, app, company or individual who implement the ABT Board tool and implement it.","roadmapSixTitle":"ABT Domain Framework – December 2018","roadmapSixDescription":"We will provide tools to manage Domains through a plug-and-play mode for any website, app, company or individual who implement the ABT Domain Name System tool and implement it.","roadmapSevenTitle":"Promoting ABT through Addap’s Browser Premium Features","roadmapSevenDescription":"Through 2018 Addap’s Browser will test and implement the ABT Protocol as a pioneer partner. Addap’s Browser shall assist ABT in testing the go to market affectivity through various analysis of related users’ experiences and satisfaction level measures as well as other joint marketing initiatives."},"thePress":{"title":"La prensa habla de nosotros","over":"Más de 15.000 supscriptores"},"footer":{"termsAndConditions":"Terminos y condiciones","participate":"Participar","technologies":"Tecnologías","team":"Equipo","token":"Token","contact":"Contacto"}}}}]

/***/ })
]))
//# sourceMappingURL=0.42e6f01461db286a6901.hot-update.js.map