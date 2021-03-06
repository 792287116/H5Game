"use strict";
cc._RF.push(module, 'f7722zlKP5HoKMY5VvWPCON', 'MotionStreakCtrl');
// cases/motionStreak/MotionStreak/MotionStreakCtrl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        motionStreak: cc.MotionStreak,
        newTexture: {
            default: null,
            type: cc.Texture2D
        }
    },

    onLoad: function onLoad() {
        this._changed = true;
        this.oldTexture = this.motionStreak.texture;
    },

    onClick: function onClick() {
        if (this._changed) {
            this.setMotionStreak(2, 3, 20, this.newTexture);
        } else {
            this.setMotionStreak(0.5, 1, 30, this.oldTexture);
        }
        this._changed = !this._changed;
    },

    setMotionStreak: function setMotionStreak(fadeTime, minSeg, stroke, texture) {
        this.motionStreak.fadeTime = fadeTime;
        this.motionStreak.minSeg = minSeg;
        this.motionStreak.stroke = stroke;
        this.motionStreak.texture = texture;
    }

});

cc._RF.pop();