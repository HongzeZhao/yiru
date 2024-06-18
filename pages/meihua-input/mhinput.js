// pages/meihua-input/mhinput.js

// https://6tail.cn/calendar/api.html
const {getAgreements} = require('../../resources/agreements');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    number1: '',
    number2: '',
    number3: '',
    numberValid: true,
    agreements: getAgreements()
  },

  onGenRandomTapped(e) {
    this.setData({
        number1: Math.floor(Math.random() * 10000).toString(),
        number2: Math.floor(Math.random() * 10000).toString(),
        number3: Math.floor(Math.random() * 10000).toString(),
        numberValid: true
      });
  },

  onInputIntegersOnly: function(e) {
    let value = e.detail.value;
    const inputId = e.currentTarget.dataset.inputId; // 通过dataset获取自定义的input-id值
    // 移除小数点，确保只剩整数
    if (inputId === '1') {
        this.setData({
            number1: value.replace(/[^\d]/g, '')
        });
    } else if (inputId === '2') {
        this.setData({
            number2: value.replace(/[^\d]/g, '')
        });
    } else if (inputId === '3') {
        this.setData({
            number3: value.replace(/[^\d]/g, '')
        });
    }
    let n1 = this.data.number1 !== undefined && this.data.number1.length > 0;
    let n2 = this.data.number2 !== undefined && this.data.number2.length > 0;
    let n3 = this.data.number3 !== undefined && this.data.number3.length > 0;
    this.setData({
        numberValid: n1 && n2 && n3
    });
  },

  ondivineTapped(e) {
    let n1 = this.data.number1 != undefined && this.data.number1.length > 0;
    let n2 = this.data.number2 != undefined && this.data.number2.length > 0;
    let n3 = this.data.number3 != undefined && this.data.number3.length > 0;
    this.setData({
        showModal: false,
        numberValid: n1 && n2 && n3
    });
    if (this.data.numberValid) {
        let data = {
            rand1: parseInt(this.data.number1),
            rand2: parseInt(this.data.number2),
            rand3: parseInt(this.data.number3)
        };
        let encodedData = encodeURIComponent(JSON.stringify(data));
        if (wx.getStorageSync('meihua.agree') === true) {
            wx.navigateTo({
                url: `/pages/meihua/meihua?data=${encodedData}`,
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
    wx.setStorageSync('meihua.agree', true);

    this.setData({
        showModal: false
      });
    wx.navigateTo({
        url: `/pages/meihua/meihua?data=${this.data.encodedData}`,
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