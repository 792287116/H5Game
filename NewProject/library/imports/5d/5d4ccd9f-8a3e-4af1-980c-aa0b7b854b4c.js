"use strict";
cc._RF.push(module, '5d4cc2fij5K8ZgMqgt7hUtM', 'Social');
// cases/anysdk/06_social/Social.js

'use strict';

var SuspensionTips = require('SuspensionTips');
cc.Class({
	extends: require('BaseAnySDKExample'),

	properties: {},

	start: function start() {
		if (this.hasSupport()) {
			this.socialPlugin = anysdk.agentManager.getSocialPlugin();
			if (this.socialPlugin) {
				this.socialPlugin.setListener(this.onSocialResult, this);
			}
		}
	},

	submitScore: function submitScore() {
		if (!this.socialPlugin) {
			SuspensionTips.init.showTips(' this.socialPlugin is null ');
			return;
		}
		var score = 131;
		this.socialPlugin.submitScore("friend", score);
	},

	showLeaderboard: function showLeaderboard() {
		if (!this.socialPlugin) {
			SuspensionTips.init.showTips(' this.socialPlugin is null ');
			return;
		}
		this.socialPlugin.showLeaderboard("friend");
	},

	unlockAchievement: function unlockAchievement() {
		if (!this.socialPlugin) {
			SuspensionTips.init.showTips(' this.socialPlugin is null ');
			return;
		}
		var achInfo = { "rank": "friends" };
		this.socialPlugin.unlockAchievement(achInfo);
	},

	showAchievements: function showAchievements() {
		if (!this.socialPlugin) {
			SuspensionTips.init.showTips(' this.socialPlugin is null ');
			return;
		}
		this.socialPlugin.showAchievements();
	},

	signIn: function signIn() {
		if (!this.socialPlugin) {
			SuspensionTips.init.showTips(' this.socialPlugin is null ');
			return;
		}
		this.socialPlugin.signIn();
	},

	signOut: function signOut() {
		if (!this.socialPlugin) {
			SuspensionTips.init.showTips(' this.socialPlugin is null ');
			return;
		}
		this.socialPlugin.signOut();
	},

	onSocialResult: function onSocialResult(code, msg) {
		cc.log(' SOCIAL RESULT ########## code: ' + code + ',msg: ' + msg);
		switch (code) {
			case anysdk.SocialRetCode.kScoreSubmitSucceed:
				SuspensionTips.init.showTips(' kScoreSubmitSucceed ');
				break;
			case anysdk.SocialRetCode.kScoreSubmitfail:
				SuspensionTips.init.showTips(' kScoreSubmitfail ');
				break;
			case anysdk.SocialRetCode.kAchUnlockSucceed:
				SuspensionTips.init.showTips(' kAchUnlockSucceed ');
				break;
			case anysdk.SocialRetCode.kAchUnlockFail:
				SuspensionTips.init.showTips(' kAchUnlockFail ');
				break;
			case anysdk.SocialRetCode.kSocialSignInSucceed:
				SuspensionTips.init.showTips(' kSocialSignInSucceed ');
				break;
			case anysdk.SocialRetCode.kSocialSignOutSucceed:
				SuspensionTips.init.showTips(' kSocialSignOutSucceed ');
				break;
			case anysdk.SocialRetCode.kSocialSignOutFail:
				SuspensionTips.init.showTips(' kSocialSignOutFail ');
				break;
				break;
			case anysdk.SocialRetCode.kSocialGetGameFriends:
				SuspensionTips.init.showTips(' kSocialGetGameFriends ');
				break;
		}
	}
});

cc._RF.pop();