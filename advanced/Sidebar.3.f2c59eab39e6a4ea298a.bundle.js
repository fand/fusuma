(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(445);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(463);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(352);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95);
var styles={sidebar:{minWidth:150,zIndex:1001},overlay:{backgroundColor:'rgba(0, 0, 0, .5)',zIndex:1000}};var url=null;var sns=["twitter"];var title="slide";var formatStr=function formatStr(num){return"".concat(num).padStart(2,'0');};var Sidebar=Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function(_ref){var isOpen=_ref.isOpen,onStateChange=_ref.onStateChange,goTo=_ref.goTo,currentIndex=_ref.currentIndex,runPresentationMode=_ref.runPresentationMode,contents=_ref.contents;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_burger_menu__WEBPACK_IMPORTED_MODULE_1__["slide"],{isOpen:isOpen,disableAutoFocus:true,onStateChange:onStateChange,outerContainerId:"root",pageWrapId:"webslides"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"sidebar-social"},Array.isArray(sns)&&url&&title&&sns.map(function(s){if(s==='twitter'){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{key:"twitter",href:"https://twitter.com/intent/tweet","aria-label":"".concat(title," ").concat(url)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[/* FaTwitter */ "l"],null));}if(s==='hatena'){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{key:"hatena",href:"http://b.hatena.ne.jp/entry/".concat(url),className:"fa fa-hatena"});}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"sidebar-control"},window.slide&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_4__[/* MdFirstPage */ "c"],{onClick:function onClick(){return goTo(0);},className:"sidebar-cursor"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,"".concat(formatStr(currentIndex+1)," / ").concat(formatStr(window.slide.slides.length))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_4__[/* MdLastPage */ "e"],{onClick:function onClick(){return goTo(window.slide.slides.length-1);},className:"sidebar-cursor"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"sidebar-tools"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_4__[/* MdFullscreen */ "d"],{style:{width:26,height:26},onClick:function onClick(){screenfull__WEBPACK_IMPORTED_MODULE_2___default.a.enabled?screenfull__WEBPACK_IMPORTED_MODULE_2___default.a.toggle():undefined;},className:"sidebar-cursor"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_4__[/* MdAirplay */ "a"],{onClick:function onClick(){return runPresentationMode();},style:{width:19,height:19,marginTop:1},className:"sidebar-cursor"}), true&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://github.com/hiroppy/fusuma.git",target:"_blank",rel:"noopener","aria-label":"github"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[/* FaGithub */ "d"],{style:{width:20,height:20,marginTop:3,color:'#f5f5f5'}}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"sidebar-contents"},contents.map(function(content,i){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:i},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"#slide=".concat(content.index)},content.title));})));});

/***/ })

}]);