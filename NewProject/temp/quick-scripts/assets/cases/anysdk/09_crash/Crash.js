(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/anysdk/09_crash/Crash.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1638cyvHWlJ5p3M05Ulzh9Q', 'Crash', __filename);
// cases/anysdk/09_crash/Crash.js

'use strict';

var SuspensionTips = require('SuspensionTips');
cc.Class({
    extends: require('BaseAnySDKExample'),

    properties: {},

    start: function start() {
        if (this.hasSupport()) {
            this.crashPlugin = anysdk.agentManager.getCrashPlugin();
        }
    },

    setUserIdentifier: function setUserIdentifier() {
        if (!this.crashPlugin) {
            SuspensionTips.init.showTips(' this.crashPlugin is null ');
            return;
        }
        this.crashPlugin.setUserIdentifier('AnySDK');
    },

    reportException: function reportException() {
        if (!this.crashPlugin) {
            SuspensionTips.init.showTips(' this.crashPlugin is null ');
            return;
        }
        this.crashPlugin.reportException('error', 'AnySDK');
    },

    leaveBreadcrumb: function leaveBreadcrumb() {
        if (!this.crashPlugin) {
            SuspensionTips.init.showTips(' this.crashPlugin is null ');
            return;
        }
        this.crashPlugin.leaveBreadcrumb('AnySDK');
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
        //# sourceMappingURL=Crash.js.map
        