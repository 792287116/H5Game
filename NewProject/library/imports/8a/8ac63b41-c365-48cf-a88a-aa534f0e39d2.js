"use strict";
cc._RF.push(module, '8ac63tBw2VIz6iKqlNPDjnS', 'Tips');
// cases/anysdk/tips/Tips.js

"use strict";

cc.Class({
    extends: cc.Component,
    // 做完动画后删除自身
    onFinish: function onFinish() {
        this.node.destroy();
    }
});

cc._RF.pop();