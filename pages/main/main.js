// pages/main.js
const {Solar} = require('lunar-javascript');

// 引入插件安装器
import plugin from '../../component/calendar-v2/plugins/index'

// 农历相关功能
import solarLunar from '../../component/calendar-v2/plugins/solarLunar/index'
import holidays from '../../component/calendar-v2/plugins/holidays/index'

// 开始安装，支持链式调用
plugin.use(holidays).use(solarLunar)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    calendarConfig: {
        showLunar: true, // 是否显示农历，此配置会导致 setTodoLabels 中 showLabelAlways 配置失效
        markToday: '今', // 当天日期展示不使用默认数字，用特殊文字标记
        emphasisWeek: true, // 是否高亮显示周末日期
        showHolidays: true, // 显示法定节假日班/休情况，需引入holidays插件
        showFestival: true, // 显示节日信息（如教师节等），需引入holidays插件
        highlightToday: true, // 是否高亮显示当天，区别于选中样式（初始化时当天高亮并不代表已选中当天）
        defaultDate: '2024-06-10', // 默认选中指定某天，如需选中需配置 autoChoosedWhenJump: true
        firstDayOfWeek: 'Mon', // 每周第一天为周一还是周日，默认按周日开始
    }
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
                year: bazi.getYear() + '年(' + lunar.getYearShengXiao() + ')',
                month: bazi.getMonth() + '月(' + lunar.getMonthShengXiao() + ')',
                day: bazi.getDay() + '日(' + lunar.getDayShengXiao() + ')',
                time: bazi.getTime() + '时(' + lunar.getTimeShengXiao() + ')',
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

  onMeihuaClick(e) {
    wx.navigateTo({
      url: '/pages/ziwei-input/zwinput',
    })
    console.log(e);
  },

  onZiweiClick(e) {
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