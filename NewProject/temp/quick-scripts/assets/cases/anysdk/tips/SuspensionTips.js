(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/anysdk/tips/SuspensionTips.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '98e89C4yltIAq8FYwHi/ux9', 'SuspensionTips', __filename);
// cases/anysdk/tips/SuspensionTips.js

"use strict";

var SuspensionTips = cc.Class({
    extends: cc.Component,

    properties: {
        tipsPrefab: cc.Prefab
    },

    statics: {
        init: null
    },

    onLoad: function onLoad() {
        SuspensionTips.init = this;
        var screen = cc.view.getVisibleSize();
        this.node.x = screen.width / 2;
        this.node.y = screen.height / 2;
        cc.game.addPersistRootNode(this.node);
    },

    showTips: function showTips(message) {
        var node = cc.instantiate(this.tipsPrefab);
        node.parent = this.node;
        node.position = cc.v2(0, 0);
        var label = node.getComponent(cc.Label);
        label.string = message || "没有添加消息！";
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
        //# sourceMappingURL=SuspensionTips.js.map
        