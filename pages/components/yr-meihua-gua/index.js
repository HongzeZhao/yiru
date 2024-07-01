// pages/components/yr-meihua-gua/index.js
const {
    divineByMeihuaNumbers
} = require("../../utils/meihua");

function getRands() {
    console.log("rands called");
    return [
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000)
    ];
}

Component({

    /**
     * 组件的属性列表
     */
    properties: {
        show: {
            type: Boolean,
            value: false
        },
        rands: {
            type: Array,
            value: getRands()
        }
    },

    /**
     * 组件的初始数据
     */
    data: divineByMeihuaNumbers(...getRands()),

    observers: {
        // 属性的观察者，当 myProperty 发生变化时，执行该函数
        'rands': function (newVal, oldVal) {
            this.onDivine(newVal);
        }
    },

    lifetimes: {
        ready() {
            this.onDivine(this.data.rands);
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onDivine(rands) {
            if (rands && rands.length === 3) {
                const divined = divineByMeihuaNumbers(...rands);
                this.setData(divined);
                this.triggerEvent('divined', divined);
            }
        }
    }
})