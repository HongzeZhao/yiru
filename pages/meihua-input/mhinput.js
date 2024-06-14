// pages/meihua-input/mhinput.js

// https://6tail.cn/calendar/api.html
const {Solar, Lunar} = require('../../resources/lunar')

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
    number1: '',
    number2: '',
    number3: '',
    dateValid: true,
    hourValid: true,
    genderValid: true,
    numberValid: true,
    lunarValid: false
  },

  onGenRandomTapped(e) {
    this.setData({
        number1: Math.floor(Math.random() * 10000).toString(),
        number2: Math.floor(Math.random() * 10000).toString(),
        number3: Math.floor(Math.random() * 10000).toString(),
        numberValid: true
      });
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
            yearWuxing: bazi.getYearWuXing(),
            monthWuxing: bazi.getMonthWuXing(),
            dayWuxing: bazi.getDayWuXing(),
            timeWuxing: bazi.getTimeWuXing(),
            yearNaYin: bazi.getYearNaYin(),
            monthNaYin: bazi.getMonthNaYin(),
            dayNaYin: bazi.getDayNaYin(),
            timeNaYin: bazi.getTimeNaYin()
        },
        taisui: {
            year: lunar.getYearPositionTaiSuiDesc(),
            month: lunar.getMonthPositionTaiSuiDesc(),
            day: lunar.getDayPositionTaiSuiDesc(),
        },
        week: lunar.getWeekInChinese(),
        xiu: lunar.getXiu() + lunar.getAnimal() + lunar.getXiuLuck(),
        yuexiang: lunar.getYueXiang()
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
        dateValid: this.data.date != undefined && this.data.date.split('-').length == 3,
        hourValid: this.data.hour != undefined && this.data.hour.split(':').length == 2,
        genderValid: this.data.gender === '男' || this.data.gender === '女',
        numberValid: n1 && n2 && n3
    });
    if (this.data.dateValid && this.data.hourValid && this.data.genderValid && this.data.numberValid) {
        let curLunar = Lunar.fromDate(new Date());
        let data = {
            birthdayData: this.data,
            nowData: this.getLunarData(curLunar),
            rand1: parseInt(this.data.number1),
            rand2: parseInt(this.data.number2),
            rand3: parseInt(this.data.number3),
            gender: this.data.gender
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