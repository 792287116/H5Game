"use strict";
cc._RF.push(module, 'e31f0yL3HBBTbV2OWMTVMCx', 'AnySDKItem');
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