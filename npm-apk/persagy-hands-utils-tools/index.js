/*!
 * 
 *     Project name:hand-utils-tools
 *     Branch:main
 *     Version:1c6be77
 *     Author:Evan-Pei
 *     Recent edit by Evan-Pei/1075247853@qq.com on 2023/3/31 16:16:28
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.EHands=t():e.EHands=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";let o,r;n.r(t);let u=null;const i={version(){console.log("hand-utils-tools version:1.0.0")},throttle:function(e,t=500,n=!0){n?r||(r=!0,"function"==typeof e&&e(),o=setTimeout(()=>{r=!1},t)):r||(r=!0,o=setTimeout(()=>{r=!1,"function"==typeof e&&e()},t))},debounce:function(e,t=500,n=!1){if(null!==u&&clearTimeout(u),n){var o=!u;u=setTimeout((function(){u=null}),t),o&&"function"==typeof e&&e()}else u=setTimeout((function(){"function"==typeof e&&e()}),t)},uniqueBySet:e=>{let t=[];if(e){t=[...new Set(e)]}return t}};t.default=i}])}));