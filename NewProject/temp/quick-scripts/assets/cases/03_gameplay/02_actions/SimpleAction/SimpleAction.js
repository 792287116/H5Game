(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/03_gameplay/02_actions/SimpleAction/SimpleAction.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b6067a1+J5FW4G30nmVLU/d', 'SimpleAction', __filename);
// cases/03_gameplay/02_actions/SimpleAction/SimpleAction.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        jumper: {
            default: null,
            type: cc.Node
        },
        colorNode: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.squashAction = cc.scaleTo(0.2, 1, 0.6);
        this.stretchAction = cc.scaleTo(0.2, 1, 1.2);
        this.scaleBackAction = cc.scaleTo(0.1, 1, 1);
        this.moveUpAction = cc.moveBy(1, cc.v2(0, 200)).easing(cc.easeCubicActionOut());
        this.moveDownAction = cc.moveBy(1, cc.v2(0, -200)).easing(cc.easeCubicActionIn());
        var seq = cc.sequence(this.squashAction, this.stretchAction, this.moveUpAction, this.scaleBackAction, this.moveDownAction, this.squashAction, this.scaleBackAction, cc.callFunc(this.callback.bind(this)));
        // this is a temp api which will be combined to cc.Node
        this.jumper.runAction(seq);

        this.colorNode.runAction(cc.sequence(cc.tintTo(2, 255, 0, 0), cc.delayTime(0.5), cc.fadeOut(1), cc.delayTime(0.5), cc.fadeIn(1), cc.delayTime(0.5), cc.tintTo(2, 255, 255, 255)).repeat(2));
    },

    callback: function callback() {
        this.node.removeFromParent();
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
        //# sourceMappingURL=SimpleAction.js.map
        