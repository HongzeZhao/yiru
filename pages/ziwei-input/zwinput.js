// pages/meihua-input/mhinput.js

const {getAgreements} = require('../../resources/agreements');
const {Solar} = require('lunar-javascript');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonText: '点击我开始分析',
    showModal: false,
    dateValid: true,
    hourValid: true,
    genderValid: true,
    agreements: getAgreements()
  },



  onInputChanged(e) {
      console.log(e.detail);
      this.setData(e.detail)
  },

  ondivineTapped(e) {
    this.setData({
        showModal: false,
        dateValid: this.data.date != undefined && this.data.date.split('-').length == 3,
        hourValid: this.data.hour != undefined && parseInt(this.data.hour) >= 0,
        genderValid: this.data.gender === '男' || this.data.gender === '女',
    });
    return;
    if (this.data.dateValid && this.data.hourValid && this.data.genderValid) {
        let encodedData = encodeURIComponent(JSON.stringify(this.data));
        if (wx.getStorageSync('ziwei.agree') === true) {
            wx.navigateTo({
                url: `/pages/ziwei/ziwei?data=${encodedData}`,
            });
        } else {
            this.setData({
                encodedData: encodedData,
                showModal: true
            });
        }
    }
  },

  onAgree(e) {
    wx.setStorageSync('ziwei.agree', true);

    this.setData({
        showModal: false
      });
    wx.navigateTo({
        url: `/pages/ziwei/ziwei?data=${this.data.encodedData}`,
    });
  },

  onRefuse(e) {
      this.setData({
        showModal: false
      });
      wx.navigateBack();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.createAnimation()
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