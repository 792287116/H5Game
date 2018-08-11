"use strict";
cc._RF.push(module, 'fbc3e0HnD1NP7p7Ek1n8IQe', 'Tracking');
// cases/anysdk/08_adtracking/Tracking.js

'use strict';

var SuspensionTips = require('SuspensionTips');
cc.Class({
	extends: require('BaseAnySDKExample'),

	properties: {},

	start: function start() {
		if (this.hasSupport()) {
			this.adTrackingPlugin = anysdk.agentManager.getAdTrackingPlugin();
		}
	},

	onRegister: function onRegister() {
		if (!this.adTrackingPlugin) {
			SuspensionTips.init.showTips(' this.adTrackingPlugin is null ');
			return;
		}
		this.adTrackingPlugin.onRegister("userid");
	},

	onLogin: function onLogin() {
		if (!this.adTrackingPlugin) {
			SuspensionTips.init.showTips(' this.adTrackingPlugin is null ');
			return;
		}
		var info = {
			"User_Id": "123456",
			"Role_Id": "test",
			"Role_Name": "test"
		};
		this.adTrackingPlugin.onLogin(info);
	},

	onPay: function onPay() {
		if (!this.adTrackingPlugin) {
			SuspensionTips.init.showTips(' this.adTrackingPlugin is null ');
			return;
		}
		var myDate = new Date();
		var info = {
			"User_Id": "123456",
			"Order_Id": myDate.toLocaleTimeString(),
			"Currency_Amount": "5",
			"Currency_Type": "CNY",
			"Payment_Type": "test",
			"Payment_Time": myDate.toLocaleTimeString()
		};
		this.adTrackingPlugin.onPay(info);
	},

	trackEvent: function trackEvent() {
		if (!this.adTrackingPlugin) {
			SuspensionTips.init.showTips(' this.adTrackingPlugin is null ');
			return;
		}
		this.adTrackingPlugin.trackEvent("event_1");
		this.adTrackingPlugin.trackEvent("event_2");
	},

	onCreateRole: function onCreateRole() {
		if (!this.adTrackingPlugin || !this.adTrackingPlugin.onCreateRole) {
			SuspensionTips.init.showTips(' this.adTrackingPlugin is null or onCreateRole is not supported ');
			return;
		}
		var info = {
			"User_Id": "123456",
			"Role_Id": "test",
			"Role_Name": "test"
		};
		this.adTrackingPlugin.trackEvent("onCreateRole", info);
	},

	onLevelUp: function onLevelUp() {
		if (!this.adTrackingPlugin || !this.adTrackingPlugin.onLevelUp) {
			SuspensionTips.init.showTips(' this.adTrackingPlugin is null  or onLevelUp is not supported');
			return;
		}
		var info = {
			"User_Id": "123456",
			"Role_Id": "test",
			"Role_Name": "test",
			"Level": "10"
		};
		this.adTrackingPlugin.trackEvent("onLevelUp", info);
	},

	onStartToPay: function onStartToPay() {
		if (!this.adTrackingPlugin || !this.adTrackingPlugin.onStartToPay) {
			SuspensionTips.init.showTips(' this.adTrackingPlugin is null or onStartToPay is not supported');
			return;
		}
		var myDate = new Date();
		var info = {
			"User_Id": "123456",
			"Order_Id": myDate.toLocaleTimeString(),
			"Currency_Amount": "5",
			"Currency_Type": "CNY",
			"Payment_Type": "test",
			"Payment_Time": myDate.toLocaleTimeString()
		};
		this.adTrackingPlugin.trackEvent("onStartToPay", info);
	}

});

cc._RF.pop();