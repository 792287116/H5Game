(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/anysdk/BaseAnySDKExample.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd37ccfYxiBMOY/HmgUl9L9W', 'BaseAnySDKExample', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=BaseAnySDKExample.js.map
        