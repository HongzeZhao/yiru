// pages/components/yr-share-button/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    showShareGuide: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  lifetimes: {
    ready: function () {
      wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage', 'shareTimeline'],
        success: function () {
          console.log('分享菜单显示成功')
        },
        fail: function (err) {
          console.error('分享菜单显示失败', err)
        }
      });
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function (e) {
      this.setData({
        showShareGuide: true
      });
    },
    onTapOverlay: function (e) {
      this.setData({
        showShareGuide: false
      });
    }
  }
})