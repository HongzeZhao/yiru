// pages/meihua-input/minput.js
const {Solar, Lunar, HolidayUtil} = require('../../resources/lunar')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    lunarText: '',
    date: '请选择日期',
    hour: '请选择时间',
    gender: '请选择性别',
    genderRange: ['男', '女'],
    number1: '',
    number2: '',
    number3: ''
  },
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    });
    this.onBirthdayChange(e.detail.value, this.data.hour);
  },

  onGenRandomTapped(e) {
    this.setData({
        number1: Math.floor(Math.random() * 10000),
        number2: Math.floor(Math.random() * 10000),
        number3: Math.floor(Math.random() * 10000),
      });
  },

  onBirthdayChange(dtStr, timeStr) {
    let solar = this.getSolarObject(dtStr, timeStr);
    if (solar != null) {
        this.setData({
            lunarText: solar.getLunar().toFullString()
          });
        console.log(solar.getLunar().toFullString());
    }
  },

  getSolarObject(dtStr, timeStr) {
    if (!dtStr) return null;
    const dts = dtStr.split('-');
    if (dts.length !== 3) return null;
    const year = parseInt(dts[0]);
    const month = parseInt(dts[1]);
    const day = parseInt(dts[2]);

    const ts = timeStr.split(':');
    if (ts != undefined && ts.length === 2) {
        const hour = parseInt(ts[0]);
        const minute = parseInt(ts[1]);
        return Solar.fromYmdHms(year, month, day, hour, minute, 0);
    } else {
        return Solar.fromYmd(year, month, day);
    }
  },

  bindHourChange(e) {
    this.setData({
      hour: e.detail.value
    });
    this.onBirthdayChange(this.data.date, e.detail.value);
  },
  bindGenderChange(e) {
    this.setData({
      gender: this.data.genderRange[e.detail.value]
    })
  },

  onInputIntegersOnly: function(e) {
    let value = e.detail.value;
    const inputId = e.currentTarget.dataset.inputId; // 通过dataset获取自定义的input-id值
    // 移除小数点，确保只剩整数
    if (inputId === '1') {
        this.setData({
            number1: value.replace(/[^\d]/g, '')
        });
        console.log('input value1:' + value);
    } else if (inputId === '2') {
        this.setData({
            number2: value.replace(/[^\d]/g, '')
        });
        console.log('input value2:' + value);
    } else if (inputId === '3') {
        this.setData({
            number3: value.replace(/[^\d]/g, '')
        });
        console.log('input value3:' + value + ' \t ' + value.replace(/[^\d]/g, ''));
    }
  },

  onDevineTapped(e) {
    wx.navigateTo({
        url: '/pages/meihua/meihua',
    })
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