// pages/meihua-input/mhinput.js
const {
  astro
} = require('iztro');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonText: '点击我开始分析',
    showAgreements: false,
    showContentArea: false,
    dateValid: true,
    hourValid: true,
    genderValid: true
  },

  onInputChanged(e) {
    this.setData(e.detail);
  },

  onAgreementsUpdated(e) {
    if (e.detail.value) {
      this.setData({
        loadingModel: true,
        showContentArea: true
      });
      const date = this.data.date;
      const hour = this.data.hour;
      const gender = this.data.gender;
      const astrolabe = astro.bySolar(date, parseInt(hour), gender, true, 'zh-CN');
      const horoscope = astrolabe.horoscope(new Date());
      let payload = {
        secret: '911',
        channel: 'ziwei',
        birthday: date,
        birthhour: hour,
        gender: gender,
        astrolabe: astrolabe,
        horoscope: horoscope
      };
      let that = this;
      wx.request({
        url: 'https://uireal.com/yiru/ziwei', // 必须是HTTPS
        method: 'POST',
        data: payload,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          that.setData({
            modelExplain: res.data.text,
            loadingModel: false
          });
          console.log(res.data);
          wx.setStorageSync('ziwei.data', res.data);
        },
        fail(err) {
          that.setData({
            modelExplain: err.toString(),
            loadingModel: false
          })
          console.log(err)
        }
      });
    }
    this.setData({
      showAgreements: false,
    });
  },

  onDivineTapped(e) {
    this.setData({
      dateValid: this.data.date != undefined && this.data.date.split('-').length == 3,
      hourValid: this.data.hour != undefined && parseInt(this.data.hour) >= 0,
      genderValid: this.data.gender === '男' || this.data.gender === '女',
    });

    if (this.data.dateValid && this.data.hourValid && this.data.genderValid) {
      this.setData({
        showAgreements: true
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const ziweiData = wx.getStorageSync('ziwei.data');
    if (ziweiData && ziweiData.text) {
      this.setData({
        modelExplain: ziweiData.text,
        showContentArea: true
      });
    }
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
    this.setData({
      showShareGuide: false
    });
  }
})