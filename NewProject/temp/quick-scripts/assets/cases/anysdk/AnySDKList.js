(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/anysdk/AnySDKList.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4e6b2pY7RBI3KPyFA1iin3p', 'AnySDKList', __filename);
// cases/anysdk/AnySDKList.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        itemPrefab: {
            default: null,
            type: cc.Prefab
        },
        scrollView: cc.ScrollView,
        bufferZone: 0, // when item is away from bufferZone, we relocate it
        interfaceList: [cc.String],
        scriptName: ""
    },

    onLoad: function onLoad() {
        if (typeof anysdk === 'undefined') {
            return;
        }
        var tips = this.scrollView.node.parent.getChildByName('Tips');
        var exampleComp = this.scrollView.node.getComponent('BaseAnySDKExample');
        var isSupported = exampleComp.hasSupport();
        if (!isSupported) return;
        tips.opacity = 0;
        this.node.parent.parent.opacity = 255;
        this.initItemCount = this.interfaceList.length;
        this.itemList = [];
        this.updateTimer = 0;
        this.updateInterval = 0.2;
        this.lastContentPosY = 0; // use this variable to detect if we are scrolling up or down
        this.initList();
        this.system = this.scrollView.getComponent(this.scriptName);
    },


    // use this for initialization
    initList: function initList() {
        var y = 0;
        this.node.height = (this.interfaceList.length + 1) * 50;
        for (var i = 0; i < this.initItemCount; ++i) {
            var item = cc.instantiate(this.itemPrefab).getComponent('AnySDKItem');
            var itemName = this.interfaceList[i];
            item.init(this);
            this.node.addChild(item.node);
            y -= 50;
            item.updateItem(i, y, itemName);
            this.itemList.push(item);
        }
    },


    invoke: function invoke(index) {
        if (index >= this.interfaceList.length) return;
        this.system[this.interfaceList[index]]();
    },

    getPositionInView: function getPositionInView(item) {
        // get item position in scrollview's node space
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    },

    update: function update(dt) {
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) {
            return; // we don't need to do the math every frame
        }
        this.updateTimer = 0;
        var items = this.itemList;
        var buffer = this.bufferZone;
        var isDown = this.node.y < this.lastContentPosY; // scrolling direction
        var offset = 50 * (this.initItemCount - 1);
        for (var i = 0; i < this.initItemCount; ++i) {
            var item = items[i];
            var itemNode = item.node;
            var viewPos = this.getPositionInView(itemNode);
            if (isDown) {
                // if away from buffer zone and not reaching top of content
                if (viewPos.y < -buffer && itemNode.y + offset < 0) {
                    var newIdx = item.index - (this.initItemCount - 1);
                    var newInfo = this.interfaceList[newIdx];
                    item.updateItem(newIdx, itemNode.y + offset, newInfo);
                }
            } else {
                // if away from buffer zone and not reaching bottom of content
                if (viewPos.y > buffer && itemNode.y - offset > -this.node.height) {
                    var _newIdx = item.index + (this.initItemCount - 1);
                    var _newInfo = this.interfaceList[_newIdx];
                    item.updateItem(_newIdx, itemNode.y - offset, _newInfo);
                }
            }
        }
        // update lastContentPosY
        this.lastContentPosY = this.node.y;
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
        //# sourceMappingURL=AnySDKList.js.map
        