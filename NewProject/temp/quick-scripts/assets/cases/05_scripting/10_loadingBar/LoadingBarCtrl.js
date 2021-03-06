(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/10_loadingBar/LoadingBarCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '102a9wU40RJd4SnQqQQzQT9', 'LoadingBarCtrl', __filename);
// cases/05_scripting/10_loadingBar/LoadingBarCtrl.js

"use strict";

var i18n = require('i18n');

//
// 本教程主要还是体现如何使用Loader的进度条。
//

cc.Class({
    extends: cc.Component,

    properties: {
        progressBar: {
            default: null,
            type: cc.ProgressBar
        },

        progressTips: {
            default: null,
            type: cc.Label
        },

        laodBg: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this._urls = [cc.url.raw("resources/audio/ding.wav"), cc.url.raw("resources/audio/cheering.wav"), cc.url.raw("resources/audio/music_logo.mp3"), cc.url.raw("resources/test_assets/audio.mp3"), cc.url.raw("resources/loadingBar/font.png"), cc.url.raw("resources/loadingBar/mikado_outline_shadow.png"), cc.url.raw("resources/loadingBar/enligsh-chinese.png")];
        this.resource = null;
        this.progressBar.progress = 0;
        this._clearAll();
        this.progressTips.textKey = i18n.t("cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.3");
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            if (this.resource) {
                return;
            }
            cc.loader.load(this._urls, this._progressCallback.bind(this), this._completeCallback.bind(this));
        }, this);
    },

    _clearAll: function _clearAll() {
        for (var i = 0; i < this._urls.length; ++i) {
            var url = this._urls[i];
            cc.loader.release(url);
        }
    },

    _progressCallback: function _progressCallback(completedCount, totalCount, res) {
        this.progress = completedCount / totalCount;
        this.resource = res;
        this.completedCount = completedCount;
        this.totalCount = totalCount;
    },

    _completeCallback: function _completeCallback(error, res) {},

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (!this.resource) {
            return;
        }
        var progress = this.progressBar.progress;
        if (progress >= 1) {
            this.progressTips.textKey = i18n.t("cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.1");
            this.laodBg.active = false;
            this.progressBar.node.active = false;
            this.enabled = false;
            return;
        }
        if (progress < this.progress) {
            progress += dt;
        }
        this.progressBar.progress = progress;
        this.progressTips.textKey = i18n.t("cases/05_scripting/10_loadingBar/LoadingBarCtrl.js.2") + this.resource.id + " (" + this.completedCount + "/" + this.totalCount + ")";
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
        //# sourceMappingURL=LoadingBarCtrl.js.map
        