__require=function e(t,r,n){function s(c,u){if(!r[c]){if(!t[c]){var a=c.split("/");if(a=a[a.length-1],!t[a]){var i="function"==typeof __require&&__require;if(!u&&i)return i(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+c+"'")}}var p=r[c]={exports:{}};t[c][0].call(p.exports,function(e){return s(t[c][1][e]||e)},p,p.exports,e,t,r,n)}return r[c].exports}for(var o="function"==typeof __require&&__require,c=0;c<n.length;c++)s(n[c]);return s}({"test-subpackage.js":[function(e,t,r){"use strict";cc._RF.push(t,"912795WyhhNJ7ssdtf4at3V","test-subpackage.js");var n=e("i18n");cc.Class({extends:cc.Component,properties:{},start:function(){this.getComponent(cc.Label).textKey="cases/subpackage.loaded",console.log(n.t("cases/subpackage.loaded"))},update:function(e){}}),cc._RF.pop()},{i18n:void 0}]},{},["test-subpackage.js"]);