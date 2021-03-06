"use strict";
cc._RF.push(module, 'ea8108bpl9ErIGOELI2Fezi', 'GoldBeatingAnime');
// cases/02_ui/02_label/BitmapFontLabel/GoldBeatingAnime.js

"use strict";

var i18n = require('i18n');

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 50,
        gold_label: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.curGold = 0;
        this.curIndex = 0;
    },

    update: function update(dt) {
        this.curIndex += dt * this.speed;
        if (this.curIndex > 10) {
            this.curIndex = 0;
            this.curGold++;
            this.gold_label.string += this.curGold;
            if (this.gold_label.string.length > 10) {
                this.gold_label.string = i18n.t("cases/02_ui/02_label/GoldBeatingAnime.js.1");
                this.curGold = 0;
            }
        }
    }
});

cc._RF.pop();