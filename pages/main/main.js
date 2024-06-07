// pages/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onMeihuaClick(e) {
    wx.navigateTo({
      url: '/pages/meihua-input/mhinput',
    })
    console.log(e);
  },

  onZiweiClick(e) {
    wx.showToast({
      title: '开发中哦，敬请期待', // 提示的内容
      icon: 'none', // 图标，默认success，可选值success | loading | none
      duration: 2000 // 提示的延迟时间，默认1500毫秒
    });
    console.log(e);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})