
var ProblemCode = cc.Class({
    extends: cc.Component,

    properties: () => ({
        isBoy:true,
        num:1,
        /*
        acode: {
            default: null,
            type: require("AnswerCode")
        },
        */
        numText:{
            default:null,
            type: cc.Label
        },

        problem:{
            default:null,
            type: cc.Node
        },
        Answer:{
            default:null,
            type: cc.Node
        },

        gameOver: {
            default: null,
            type: cc.Node
        },

        proTextureArray1:{
            default:[],
            type: [cc.SpriteFrame]
        },
        proTextureArray2:{
            default:[],
            type: cc.SpriteFrame
        },
        proTextureArray3:{
            default:[],
            type: cc.SpriteFrame
        },
        proTextureArray4:{
            default:[],
            type: cc.SpriteFrame
        },
        proTextureArray5:{
            default:[],
            type: cc.SpriteFrame
        },

        abc:{
            default: [],
            type: ["String"]
        },

        trueAnswer:{
            default:[],
            type: cc.SpriteFrame
        },
    }),

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.num = 1;
        this.numText.getComponent(cc.Label).string = String(this.num);
    },

    option(event, customEventData) {
        console.log(this.num);
        

        if (this.num >= 1 && this.num <= 5) {
            this.Answer.active = true;
        } else if (this.num >= 6) {
            this.gameOver.active = true;
            this.problem.active = false;
        }
        
        if (customEventData == this.abc[this.num]) {
            console.log("true");
            this.Answer.getComponent("AnswerCode").setJieXi(true, this.trueAnswer[this.num], this.isBoy);
        } else {
            console.log("false");
            console.log("heheheheh");
            this.Answer.getComponent("AnswerCode").setJieXi(false, this.trueAnswer[this.num], this.isBoy);
        }
        
    },

    setNum() {
        this.num++;
        this.numText.getComponent(cc.Label).string = String(this.num);
    },
});

module.exports = ProblemCode;
