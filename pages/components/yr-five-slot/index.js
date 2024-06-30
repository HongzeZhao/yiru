// pages/components/yr-five-slot/index.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {
        slots: {
            type: Array,
            value: [{
                icon: "taohua.png",
            }]
        },
        color: {
            type: String,
            value: "blue"
        },
        tipsHeadText: {
            type: String,
            value: "恋爱建议"
        },
        tipsTextList: {
            type: Array,
            value: ["优秀的猎手都以猎物的形式出现", "我不是黄蓉，我不会武功", "飞檐走壁莫奇怪"]
        },
        text: {
            type: String,
            value: "xxx"
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    lifetimes: {
        ready: function () {
            this.onTouchAnyFlower();

            let _this = this;
            setInterval(function () {
                _this.onTouchAnyFlower();
            }, 15000);
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onTouchAnyFlower(e) {
            const index = Math.floor(Math.random() * this.data.tipsTextList.length);
            this.setData({
                tipsText: this.data.tipsTextList[index]
            });
        }
    }
})