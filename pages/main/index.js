// pages/main.js
const {
  Solar
} = require('lunar-javascript');

Page({

  /**
   * 页面的初始数据
   */
  data: {},

  onUpdateTodayDate() {
    let solar = Solar.fromDate(new Date());
    let lunar = solar.getLunar();
    let bazi = lunar.getEightChar();
    this.setData({
      lunarText: lunar.toFullString(),
      yearText: lunar.getYearInChinese(),
      monthText: lunar.getMonthInChinese(),
      dayText: lunar.getDayInChinese(),
      hourText: lunar.getTimeZhi() + '时',
      bazi: {
        year: bazi.getYear() + lunar.getYearShengXiao() + '年',
        month: bazi.getMonth() + lunar.getMonthShengXiao() + '月',
        day: bazi.getDay() + lunar.getDayShengXiao() + '日',
        time: bazi.getTime() + lunar.getTimeShengXiao() + '时',
        yearWuxing: bazi.getYearWuXing(),
        monthWuxing: bazi.getMonthWuXing(),
        dayWuxing: bazi.getDayWuXing(),
        timeWuxing: bazi.getTimeWuXing(),
        yearNaYin: bazi.getYearNaYin(),
        monthNaYin: bazi.getMonthNaYin(),
        dayNaYin: bazi.getDayNaYin(),
        timeNaYin: bazi.getTimeNaYin(),
      },
      dayYi: lunar.getDayYi().join(" "),
      dayJi: lunar.getDayJi().join(" "),
      week: lunar.getWeekInChinese(),
      yuexiang: lunar.getYueXiang(),
      lunarValid: true,
    });

    console.log(lunar.toFullString());
  },

  onChannelClick(e) {
    const channel = e.target.dataset.channel;
    wx.navigateTo({
      url: `/pages/${channel}/index`,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.onUpdateTodayDate();
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