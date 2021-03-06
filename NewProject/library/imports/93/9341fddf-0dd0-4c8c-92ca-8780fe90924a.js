"use strict";
cc._RF.push(module, '9341f3fDdBMjJLKh4D+kJJK', 'ReferenceTypeProperties');
// cases/05_scripting/01_properties/ReferenceTypeProperties.js

'use strict';

var MyCustomComponent = require('MyCustomComponent');

cc.Class({
    extends: cc.Component,

    properties: {
        myNode: {
            default: null,
            type: cc.Node
        },
        mySprite: {
            default: null,
            type: cc.Sprite
        },
        myLabel: {
            default: null,
            type: cc.Label
        },
        myComponent: {
            default: null,
            type: MyCustomComponent
        },
        mySpriteFrame: {
            default: null,
            type: cc.SpriteFrame
        },
        myAtlas: {
            default: null,
            type: cc.SpriteAtlas
        },
        myPrefab: {
            default: null,
            type: cc.Prefab
        },
        myAudioClip: {
            default: null,
            type: cc.AudioClip
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.myLabel.string = this.myComponent.getPower().toString();
    },

    // called every frame
    update: function update(dt) {}
});

cc._RF.pop();