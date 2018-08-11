(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/anysdk/AnySDKItem.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e31f0yL3HBBTbV2OWMTVMCx', 'AnySDKItem', __filename);
// cases/anysdk/AnySDKItem.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        bg: cc.Sprite,
        btn: cc.Button
    },

    init: function init(menu) {
        this.index = -1;
        this.menu = menu;
    },


    invoke: function invoke() {
        this.menu.invoke(this.index);
    },

    updateItem: function updateItem(idx, y, name) {
        this.index = idx;
        this.node.y = y;
        this.node.x = 100;
        this.label.string = name;
        this.bg.enabled = true;
        this.btn.interactable = true;
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
        //# sourceMappingURL=AnySDKItem.js.map
        