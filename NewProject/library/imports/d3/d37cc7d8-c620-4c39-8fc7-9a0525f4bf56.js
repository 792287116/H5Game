"use strict";
cc._RF.push(module, 'd37ccfYxiBMOY/HmgUl9L9W', 'BaseAnySDKExample');
// cases/anysdk/BaseAnySDKExample.js

'use strict';

var i18n = require('i18n');

cc.Class({
    extends: cc.Component,

    properties: {
        plugin: ''
    },

    onLoad: function onLoad() {
        this.tips = cc.find("Canvas/Tips").getComponent(cc.Label);
    },

    hasSupport: function hasSupport() {
        if (typeof anysdk === 'undefined') {
            this.tips.textKey = i18n.t("cases/anysdk/3");
            return false;
        }
        if (!cc.sys.isMobile) {
            return false;
        }
        return cc.sys.isMobile && anysdk.agentManager[this.plugin];
    }
});

cc._RF.pop();