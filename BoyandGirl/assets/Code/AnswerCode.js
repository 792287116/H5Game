// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var AnswerCode = cc.Class({
    extends: cc.Component,

    properties: () => ({
        isBoy:true,
        problemBoy: {
            default: null,
            type: cc.Node
        },
        problemGirl: {
            default: null,
            type: cc.Node
        },

        bg:{
            default:null,
            type: cc.Node
        },
        TAF:{
            default:null,
            type: cc.Node
        },
        jiexi:{
            default:null,
            type: cc.Node
        },

        tafSprite:{
        	default:[],
        	type: cc.SpriteFrame
        },
        
    }),

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    bgBtn(){
        this.node.active = false;
        if (this.isBoy) {
            this.problemBoy.getComponent("ProblemCode").setNum();
        } else {
            this.problemGirl.getComponent("ProblemCode").setNum();
        }
    },

    setJieXi(b, sF, isboy) {
        console.log(b + ",");
        this.isBoy = isboy;
    	this.jiexi.getComponent(cc.Sprite).spriteFrame = sF;
        if (b) {
        	this.TAF.getComponent(cc.Sprite).spriteFrame = this.tafSprite[0];
        }else{
			this.TAF.getComponent(cc.Sprite).spriteFrame = this.tafSprite[1];
        }
        
    },

    // update (dt) {},

});

module.exports = AnswerCode;
