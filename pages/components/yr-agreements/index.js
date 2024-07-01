// pages/components/yr-agreements/index.js
const {
  getAgreements
} = require('../../utils/agreements');

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    agreed: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    agreements: getAgreements()
  },

  observers: {
    // 属性的观察者，当 myProperty 发生变化时，执行该函数
    'show': function (newVal, oldVal) {
      if (newVal) {
        const agreed = wx.getStorageSync('agreements');
        if (agreed) {
          this.triggerEvent('agreed', {
            value: true
          });
        } else {
          this.setData({
            showModal: newVal
          });
        }
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onAgree(e) {
      wx.setStorageSync('agreements', true);
      this.setData({
        showModal: false
      });
      this.triggerEvent('agreed', {
        value: true
      });
    },

    onRefuse(e) {
      this.setData({
        showModal: false
      });
      this.triggerEvent('agreed', {
        value: false
      });
    },
  }
})