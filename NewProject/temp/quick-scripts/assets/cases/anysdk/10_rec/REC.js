(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/anysdk/10_rec/REC.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f2295koIwFChZh8D60Ws2f/', 'REC', __filename);
// cases/anysdk/10_rec/REC.js

'use strict';

var SuspensionTips = require('SuspensionTips');
cc.Class({
    extends: require('BaseAnySDKExample'),

    properties: {},

    start: function start() {
        if (this.hasSupport()) {
            this.recPlugin = anysdk.agentManager.getRECPlugin();
            if (this.recPlugin) {
                this.recPlugin.setListener(this.onRECResult, this);
            }
        }
    },

    startRecording: function startRecording() {
        if (!this.recPlugin) {
            SuspensionTips.init.showTips(' this.recPlugin is null ');
            return;
        }
        this.recPlugin.startRecording();
    },

    stopRecording: function stopRecording() {
        if (!this.recPlugin) {
            SuspensionTips.init.showTips(' this.recPlugin is null ');
            return;
        }
        this.recPlugin.stopRecording();
    },

    share: function share() {
        if (!this.recPlugin) {
            SuspensionTips.init.showTips(' this.recPlugin is null ');
            return;
        }
        var info = {
            Video_Title: "RECSDK",
            Video_Desc: "RECSDK是一个神奇的SDK"
        };
        this.recPlugin.share(info);
    },

    pauseRecording: function pauseRecording() {
        if (!this.recPlugin || !this.recPlugin.pauseRecording) {
            SuspensionTips.init.showTips(' this.recPlugin is null or pauseRecording is not supported ');
            return;
        }
        this.recPlugin.pauseRecording();
    },

    resumeRecording: function resumeRecording() {
        if (!this.recPlugin || !this.recPlugin.resumeRecording) {
            SuspensionTips.init.showTips(' this.recPlugin is null or resumeRecording is not supported ');
            return;
        }
        this.recPlugin.resumeRecording();
    },

    isAvailable: function isAvailable() {
        if (!this.recPlugin || !this.recPlugin.isAvailable) {
            SuspensionTips.init.showTips(' this.recPlugin is null or isAvailable is not supported ');
            return false;
        }
        var flag = this.rec.isAvailable();
        SuspensionTips.init.showTips(' isAvailable ########## code: ' + flag);
        return flag;
    },

    showToolBar: function showToolBar() {
        if (!this.recPlugin || !this.recPlugin.showToolBar) {
            SuspensionTips.init.showTips(' this.recPlugin is null or showToolBar is not supported ');
            return;
        }
        this.recPlugin.showToolBar();
    },

    hideToolBar: function hideToolBar() {
        if (!this.recPlugin || !this.recPlugin.hideToolBar) {
            SuspensionTips.init.showTips(' this.recPlugin is null or hideToolBar is not supported ');
            return;
        }
        this.recPlugin.hideToolBar();
    },

    isRecording: function isRecording() {
        if (!this.recPlugin || !this.recPlugin.isRecording) {
            SuspensionTips.init.showTips(' this.recPlugin is null or isRecording is not supported ');
            return false;
        }
        var flag = this.rec.isRecording();
        SuspensionTips.init.showTips(' isRecording ########## code: ' + flag);
        return flag;
    },

    showVideoCenter: function showVideoCenter() {
        if (!this.recPlugin || !this.recPlugin.showVideoCenter) {
            SuspensionTips.init.showTips(' this.recPlugin is null or showVideoCenter is not supported ');
            return;
        }
        this.recPlugin.showVideoCenter();
    },

    enterPlatform: function enterPlatform() {
        if (!this.recPlugin || !this.recPlugin.enterPlatform) {
            SuspensionTips.init.showTips(' this.recPlugin is null or enterPlatform is not supported ');
            return;
        }
        this.recPlugin.enterPlatform();
    },

    setMetaData: function setMetaData() {
        if (!this.recPlugin || !this.recPlugin.setMetaData) {
            SuspensionTips.init.showTips(' this.recPlugin is null or setMetaData is not supported ');
            return;
        }
        var data = { ext: "login" };
        this.recPlugin.setMetaData(data);
    },

    onRECResult: function onRECResult(code, msg) {
        cc.log(' REC RESULT ########## code: ' + code + ',msg: ' + msg);
        switch (code) {
            case anysdk.RECResultCode.kRECInitSuccess:
                //初始化成功
                SuspensionTips.init.showTips(' kRECInitSuccess ');
                break;
            case anysdk.RECResultCode.kRECInitFail:
                //初始化失败
                SuspensionTips.init.showTips(' kRECInitFail ');
                break;
            case anysdk.RECResultCode.kRECStartRecording:
                //开始录制
                SuspensionTips.init.showTips(' kRECStartRecording ');
                break;
            case anysdk.RECResultCode.kRECStopRecording:
                //结束录制
                SuspensionTips.init.showTips(' kRECStopRecording ');
                break;
            case anysdk.RECResultCode.kRECPauseRecording:
                //暂停录制
                SuspensionTips.init.showTips(' kRECPauseRecording ');
                break;
            case anysdk.RECResultCode.kRECResumeRecording:
                //恢复录制
                SuspensionTips.init.showTips(' kRECResumeRecording ');
                break;
            case anysdk.RECResultCode.kRECEnterSDKPage:
                //进入SDK页面
                SuspensionTips.init.showTips(' kRECEnterSDKPage ');
                break;
            case anysdk.RECResultCode.kRECQuitSDKPage:
                //退出SDK页面
                SuspensionTips.init.showTips(' kRECQuitSDKPage ');
                break;
            case anysdk.RECResultCode.kRECShareSuccess:
                //视频分享成功
                SuspensionTips.init.showTips(' kRECShareSuccess ');
                break;
            case anysdk.RECResultCode.kRECShareFail:
                //视频分享失败
                SuspensionTips.init.showTips(' kRECShareFail ');
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
        //# sourceMappingURL=REC.js.map
        