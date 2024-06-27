// pages/main.js
const {Solar} = require('lunar-javascript');

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  afterTapDate(e) {
      console.log(e.detail);
      const nowDt = `${e.detail.year}-${e.detail.month}-${e.detail.date}`;
      const now = new Date();
      const nowTime = `${now.getHours()}:${now.getMinutes()}`;
      this.onBirthdayChange(nowDt, nowTime);
  },

  onBirthdayChange(dtStr, timeStr) {
    let solar = this.getSolarObject(dtStr, timeStr);
    if (solar != null) {
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
            taisui: {
                year: lunar.getYearPositionTaiSuiDesc(),
                month: lunar.getMonthPositionTaiSuiDesc(),
                day: lunar.getDayPositionTaiSuiDesc(),
            },
            chongsha: {
                day: lunar.getDayChongDesc(),
                time: lunar.getTimeChongDesc()
            },
            dayYi: lunar.getDayYi().join(" "),
            dayJi: lunar.getDayJi().join(""),
            week: lunar.getWeekInChinese(),
            xiu: lunar.getXiu() + lunar.getAnimal() + lunar.getXiuLuck(),
            yuexiang: lunar.getYueXiang(),
            lunarValid: true,
          });

        console.log(lunar.toFullString());
    } else {
        console.log("solar object null");
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

  onZiweiClick(e) {
    wx.navigateTo({
      url: '/pages/ziwei-input/zwinput',
    })
    console.log(e);
  },

  onMeihuaClick(e) {
    wx.navigateTo({
      url: '/pages/meihua-input/mhinput',
    })
    console.log(e);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      const now = new Date();
      const nowDt = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;
      const nowTime = `${now.getHours()}:${now.getMinutes()}`;
      this.onBirthdayChange(nowDt, nowTime);
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