// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
    	playGameBtn:{
    		default:null,
    		type: cc.Button
    	},
    	boyBtn:{
    		default:null,
    		type: cc.Button
    	},
    	girlBtn:{
    		default:null,
    		type: cc.Button
    	},

    	sceneMainNode:{
    		default:null,
    		type: cc.Node
    	},

    	problemBoy:{
    		default:null,
    		type: cc.Node
    	},
    	problemGirl:{
    		default:null,
    		type: cc.Node
    	},
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {},

    start() {

    },

    PlayGame (){
    	//this.node.active = false;
    	this.playGameBtn.node.active = false;
    	this.boyBtn.node.active = true;
    	this.girlBtn.node.active = true;
    },

    ToBoy () {
    	//开启problem
    	this.sceneMainNode.active = false;
    	this.problemBoy.active = true;
    	
    },

    ToGirl(){
    	//开启problem
    	this.sceneMainNode.active = false;
    	this.problemGirl.active = true;
    	
    },

    // update (dt) {},
});
