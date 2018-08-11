(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/anysdk/04_ads/Ads.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5260bXDtylBwYTkP2GSV9zc', 'Ads', __filename);
// cases/anysdk/04_ads/Ads.js

'use strict';

var SuspensionTips = require('SuspensionTips');
cc.Class({
    extends: require('BaseAnySDKExample'),

    properties: {},

    start: function start() {
        if (this.hasSupport()) {
            this.adsPlugin = anysdk.agentManager.getAdsPlugin();
            if (this.adsPlugin) {
                this.adsPlugin.setListener(this.onAdsResult, this);
            }
        }
    },

    preloadAds: function preloadAds() {
        if (!this.adsPlugin || !this.adsPlugin.isAdTypeSupported(anysdk.AdsType.AD_TYPE_BANNER)) {
            SuspensionTips.init.showTips(' this.adsPlugin is null or banner is not supported ');
            return;
        }
        this.adsPlugin.preloadAds(anysdk.AdsType.AD_TYPE_BANNER);
    },

    showAds: function showAds() {
        if (!this.adsPlugin || !this.adsPlugin.isAdTypeSupported(anysdk.AdsType.AD_TYPE_BANNER)) {
            SuspensionTips.init.showTips(' this.adsPlugin is null or banner is not supported ');
            return;
        }
        this.adsPlugin.showAds(anysdk.AdsType.AD_TYPE_BANNER);
    },

    hideAds: function hideAds() {
        if (!this.adsPlugin || !this.adsPlugin.isAdTypeSupported(anysdk.AdsType.AD_TYPE_BANNER)) {
            SuspensionTips.init.showTips(' this.adsPlugin is null or banner is not supported ');
            return;
        }
        this.adsPlugin.hideAds(anysdk.AdsType.AD_TYPE_BANNER);
    },

    queryPoints: function queryPoints() {
        if (!this.adsPlugin) {
            SuspensionTips.init.showTips(' this.adsPlugin is null ');
            return;
        }
        var point = this.adsPlugin.queryPoints();
        SuspensionTips.init.showTips(' queryPoints : ' + point);
    },

    spendPoints: function spendPoints() {
        if (!this.adsPlugin) {
            SuspensionTips.init.showTips(' this.adsPlugin is null ');
            return;
        }
        this.adsPlugin.spendPoints(1);
    },

    onAdsResult: function onAdsResult(code, msg) {
        cc.log(' ADS RESULT ########## code: ' + code + ',msg: ' + msg);
        switch (code) {
            case anysdk.AdsResultCode.kAdsReceived:
                SuspensionTips.init.showTips(' kAdsReceived ');
                break;
            case anysdk.AdsResultCode.kAdsShown:
                SuspensionTips.init.showTips(' kAdsShown ');
                break;
            case anysdk.AdsResultCode.kAdsDismissed:
                SuspensionTips.init.showTips(' kAdsDismissed ');
                break;
            case anysdk.AdsResultCode.kPointsSpendSucceed:
                SuspensionTips.init.showTips(' kPointsSpendSucceed ');
                break;
            case anysdk.AdsResultCode.kPointsSpendFailed:
                SuspensionTips.init.showTips(' kPointsSpendFailed ');
                break;
            case anysdk.AdsResultCode.kNetworkError:
                SuspensionTips.init.showTips(' kNetworkError ');
                break;
            case anysdk.AdsResultCode.kUnknownError:
                SuspensionTips.init.showTips(' kUnknownError ');
                break;
            case anysdk.AdsResultCode.kOfferWallOnPointsChanged:
                SuspensionTips.init.showTips(' kOfferWallOnPointsChanged ');
                break;
            default:
                break;
        }
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
        //# sourceMappingURL=Ads.js.map
        