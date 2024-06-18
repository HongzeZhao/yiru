// pages/meihua-input/mhinput.js

const {getAgreements} = require('../../resources/agreements');
const {Solar} = require('lunar-javascript');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    lunarText: '',
    date: '请选择日期',
    hour: '请选择时间',
    gender: '请选择性别',
    genderRange: ['男', '女'],
    dateValid: true,
    hourValid: true,
    genderValid: true,
    lunarValid: false,
    agreements: getAgreements()
  },


  onBirthdayChange(dtStr, timeStr) {
    let solar = this.getSolarObject(dtStr, timeStr);
    if (solar != null) {
        let lunar = solar.getLunar();
        let lunarData = this.getLunarData(lunar);
        lunarData['lunarValid'] = true;
        this.setData(lunarData);
        console.log(lunar.toFullString());
    }
  },

  getLunarData(lunar) {
    let bazi = lunar.getEightChar();
    return {
        lunarText: lunar.toFullString(),
        yearText: lunar.getYearInChinese(),
        monthText: lunar.getMonthInChinese() + '月',
        dayText: lunar.getDayInChinese() + '日',
        hourText: lunar.getTimeZhi() + '时',
        bazi: {
            year: bazi.getYear() + '(' + lunar.getYearShengXiao() + ')',
            month: bazi.getMonth() + '(' + lunar.getMonthShengXiao() + ')',
            day: bazi.getDay() + '(' + lunar.getDayShengXiao() + ')',
            time: bazi.getTime() + '(' + lunar.getTimeShengXiao() + ')',
            yearNaYin: bazi.getYearNaYin(),
            monthNaYin: bazi.getMonthNaYin(),
            dayNaYin: bazi.getDayNaYin(),
            timeNaYin: bazi.getTimeNaYin()
        },
      };
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

  bindDateChange(e) {
    this.setData({
      date: e.detail.value,
      dateValid: e.detail.value != undefined && e.detail.value.split('-').length == 3,
    });
    this.onBirthdayChange(e.detail.value, this.data.hour);
  },

  bindHourChange(e) {
    this.setData({
        hour: e.detail.value,
        hourValid: e.detail.value != undefined && e.detail.value.split(':').length == 2,
      });
    this.onBirthdayChange(this.data.date, e.detail.value);
  },
  bindGenderChange(e) {
    let gender = this.data.genderRange[e.detail.value];
    this.setData({
      gender: gender,
      genderValid: gender === '男' || gender === '女'
    })
  },

  ondivineTapped(e) {
    this.setData({
        showModal: false,
        dateValid: this.data.date != undefined && this.data.date.split('-').length == 3,
        hourValid: this.data.hour != undefined && this.data.hour.split(':').length == 2,
        genderValid: this.data.gender === '男' || this.data.gender === '女',
    });
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