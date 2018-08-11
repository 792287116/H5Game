"use strict";
cc._RF.push(module, '04525pyYBlN26SWawaUF3dA', 'Menu');
// scripts/Global/Menu.js

'use strict';

var i18n = require('i18n');
var SceneList = require('SceneList');

cc.Class({
    extends: cc.Component,

    properties: {
        text: {
            default: null,
            type: cc.Label
        },
        readme: {
            default: null,
            type: cc.ScrollView
        },
        btnInfo: {
            default: null,
            type: cc.Button
        },
        btnBack: {
            default: null,
            type: cc.Button
        },
        testList: {
            default: null,
            type: cc.ScrollView
        },

        uiCamera: {
            default: null,
            type: cc.Camera
        }
    },

    onLoad: function onLoad() {
        var _this = this;

        this._isLoadingScene = true;
        this.showDebugDraw = false;
        cc.game.addPersistRootNode(this.node);
        this.currentSceneUrl = 'TestList.fire';
        this.contentPos = null;
        this.isMenu = true;
        this.btnBack.node.active = false;
        this.loadInstruction(this.currentSceneUrl);
        this.node.zIndex = 999;

        cc.game.addPersistRootNode(this.testList.node);
        if (this.testList && this.testList.content) {
            // in main scene
            this.sceneList = this.testList.content.getComponent('SceneList');
            this.sceneList.init(this);
        }
        if (typeof cocosAnalytics !== 'undefined' && cocosAnalytics.isInited && cocosAnalytics.isInited()) {
            // Cocos Analytics service, to learn more please visit:
            // https://analytics.cocos.com/docs/
            cocosAnalytics.CAEvent.onEvent({
                eventName: "打开范例"
            });
        }

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
            if (event.keyCode === cc.macro.KEY.b) {
                _this.backToList();
            }
        }, this);

        this._updateInfoButton();

        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, this._onSceneLaunched, this);
    },

    _onSceneLaunched: function _onSceneLaunched() {
        var cameras = cc.Camera.cameras;
        for (var i = 0, l = cameras.length; i < l; i++) {
            var camera = cameras[i];
            if (camera === this.uiCamera) {
                camera.cullingMask = 1 << this.node.groupIndex;
            } else {
                camera.cullingMask = camera.cullingMask & ~(1 << this.node.groupIndex);
            }
        }
    },


    backToList: function backToList() {
        if (this._isLoadingScene) {
            return;
        }
        this._isLoadingScene = true;
        this.showReadme(null, false);
        this.currentSceneUrl = 'TestList.fire';
        this.isMenu = true;
        cc.director.loadScene('TestList', this.onLoadSceneFinish.bind(this));
    },

    loadScene: function loadScene(url) {
        this._isLoadingScene = true;
        this.contentPos = this.testList.getContentPosition();
        this.currentSceneUrl = url;
        this.isMenu = false;
        this.testList.node.active = false;
        cc.director.loadScene(url, this.onLoadSceneFinish.bind(this));
        if (typeof cocosAnalytics !== 'undefined' && cocosAnalytics.isInited && cocosAnalytics.isInited()) {
            // Cocos Analytics service, to learn more please visit:
            // https://analytics.cocos.com/docs/
            cocosAnalytics.CALevels.begin({
                level: url
            });
        }
    },

    onLoadSceneFinish: function onLoadSceneFinish() {
        var url = this.currentSceneUrl;
        this.loadInstruction(url);
        if (this.isMenu && this.contentPos) {
            this.btnBack.node.active = false;
            this.testList.node.active = true;
            this.testList.setContentPosition(this.contentPos);
        } else {
            this.btnBack.node.active = true;
            this.testList.node.active = false;
        }
        this._isLoadingScene = false;
    },

    loadInstruction: function loadInstruction(url) {
        var self = this;
        var urlArr = url.split('/');
        var fileName = urlArr[urlArr.length - 1].replace('.fire', '');
        cc.loader.loadRes('readme/' + fileName, cc.TextAsset, function (err, asset) {
            if (err) {
                self.text.string = i18n.t("scripts/Global/Menu.js.1");
                return;
            }
            self.text.string = asset.text;
        });
    },

    _updateInfoButton: function _updateInfoButton() {
        var labelTxt = i18n.t("scripts/Global/Menu.js." + (this.readme.node.active ? "view" : "hide") + ".info");
        cc.find('label', this.btnInfo.node).getComponent(cc.Label).textKey = labelTxt;
    },

    showReadme: function showReadme(event, active) {
        if (active === undefined) {
            this.readme.node.active = !this.readme.node.active;
        } else {
            this.readme.node.active = active;
        }
        if (this.readme.node.active) {
            this.readme.scrollToTop();
        }
        this._updateInfoButton();

        // en: fix Collider DebugDraw always displayed on top of the problem.
        // zh：解决 Collider DebugDraw 一直显示在最上层的问题。
        var enabledDebugDraw = cc.director.getCollisionManager().enabledDebugDraw;
        if (this.readme.node.active) {
            this.showDebugDraw = enabledDebugDraw;
            cc.director.getCollisionManager().enabledDebugDraw = false;
        } else {
            cc.director.getCollisionManager().enabledDebugDraw = this.showDebugDraw;
        }
        // en: fix Video Player always displayed on top of the problem.
        // zh：修复 Video Player 一直显示在最上层的问题。
        var videoPlayer = cc.find('Canvas/VideoPlayer');
        if (videoPlayer) {
            videoPlayer.active = !this.readme.node.active;
        }
    },

    restart: function restart() {
        cc.game.restart();
    },

    gc: function gc() {
        cc.sys.garbageCollect();
    }
});

cc._RF.pop();