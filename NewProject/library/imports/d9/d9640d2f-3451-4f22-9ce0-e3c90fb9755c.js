"use strict";
cc._RF.push(module, 'd96400vNFFPIpzg48kPuXVc', 'follow');
// cases/collider/Platform/follow.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        target: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        // 由于需要键盘操作所以只能在 PC 才可用
        this.node.active = !cc.sys.isMobile;

        if (!this.target) {
            return;
        }
        var follow = cc.follow(this.target, cc.rect(0, 0, 2000, 2000));
        this.node.runAction(follow);
    }
});

cc._RF.pop();