(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/03_gameplay/02_actions/Rotation/RotationCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '325ba8DYO5K6Yfgi5UmP4+L', 'RotationCtrl', __filename);
// cases/03_gameplay/02_actions/Rotation/RotationCtrl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        rotationToNode: cc.Node,
        rotateByNode: cc.Node
    },

    onToClick: function onToClick() {
        var rotationTo = cc.rotateTo(1, 0, 100);
        this.rotationToNode.runAction(rotationTo);
    },

    onReverseToClick: function onReverseToClick() {
        var rotationTo = cc.rotateTo(1, 100, 0);
        this.rotationToNode.runAction(rotationTo);
    },

    onToRecoverClick: function onToRecoverClick() {
        this.rotationToNode.rotationX = 0;
        this.rotationToNode.rotationY = 0;
    },

    onByClick: function onByClick() {
        var rotateBy = cc.rotateBy(1, 0, 100);
        this.rotateByNode.runAction(rotateBy);
    },

    onReverseByClick: function onReverseByClick() {
        var rotateBy = cc.rotateBy(1, 100, 100);
        this.rotateByNode.runAction(rotateBy);
    },

    onByRecoverClick: function onByRecoverClick() {
        this.rotateByNode.rotationX = 0;
        this.rotateByNode.rotationY = 0;
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
        //# sourceMappingURL=RotationCtrl.js.map
        