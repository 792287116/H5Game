"use strict";
cc._RF.push(module, '1638cyvHWlJ5p3M05Ulzh9Q', 'Crash');
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