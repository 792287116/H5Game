(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/anysdk/07_push/Push.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '48510+xGvVMBapIXNyrCMz/', 'Push', __filename);
// cases/anysdk/07_push/Push.js

'use strict';

var SuspensionTips = require('SuspensionTips');
cc.Class({
    extends: require('BaseAnySDKExample'),

    properties: {},

    start: function start() {
        if (this.hasSupport()) {
            this.pushPlugin = anysdk.agentManager.getPushPlugin();
            if (this.pushPlugin) {
                this.pushPlugin.setListener(this.onPushResult, this);
            }
        }
    },

    startPush: function startPush() {
        if (!this.pushPlugin) {
            SuspensionTips.init.showTips(' this.pushPlugin is null ');
            return;
        }
        this.pushPlugin.startPush();
    },

    closePush: function closePush() {
        if (!this.pushPlugin) {
            SuspensionTips.init.showTips(' this.pushPlugin is null ');
            return;
        }
        this.pushPlugin.closePush();
    },

    setAlias: function setAlias() {
        if (!this.pushPlugin) {
            SuspensionTips.init.showTips(' this.pushPlugin is null ');
            return;
        }
        this.pushPlugin.setAlias("ivenKill");
    },

    delAlias: function delAlias() {
        if (!this.pushPlugin) {
            SuspensionTips.init.showTips(' this.pushPlugin is null ');
            return;
        }
        this.pushPlugin.delAlias("ivenKill");
    },

    setTags: function setTags() {
        if (!this.pushPlugin) {
            SuspensionTips.init.showTips(' this.pushPlugin is null ');
            return;
        }
        this.pushPlugin.setTags(["easy", "fast", "qwe"]);
    },

    delTags: function delTags() {
        if (!this.pushPlugin) {
            SuspensionTips.init.showTips(' this.pushPlugin is null ');
            return;
        }
        this.pushPlugin.delTags(["easy", "qwe"]);
    },

    onPushResult: function onPushResult(code, msg) {
        cc.log(' PUSH RESULT ########## code: ' + code + ',msg: ' + msg);
        switch (code) {
            case anysdk.PushActionResultCode.kPushReceiveMessage:
                SuspensionTips.init.showTips(' kPushReceiveMessage ');
                break;
            default:
                break;
        }
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
        //# sourceMappingURL=Push.js.map
        