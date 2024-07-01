// pages/components/yr-user-info/index.js
const {
  Solar
} = require('lunar-javascript');

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    color: {
      type: String,
      value: "green"
    },
    headColor: {
      type: String,
      value: "blue"
    },
    dateValid: {
      type: Boolean,
      value: true
    },
    hourValid: {
      type: Boolean,
      value: true
    },
    genderValid: {
      type: Boolean,
      value: true
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    date: '请选择日期',
    hourInputText: '请选择时间',
    hourRange: [
      '早子时(00:00~01:00)',
      '丑时(01:00~03:00)',
      '寅时(03:00~05:00)',
      '卯时(05:00~07:00)',
      '辰时(07:00~09:00)',
      '巳时(09:00~11:00)',
      '午时(11:00~13:00)',
      '未时(13:00~15:00)',
      '申时(15:00~17:00)',
      '酉时(17:00~19:00)',
      '戌时(19:00~21:00)',
      '亥时(21:00~23:00)',
      '晚子时(23:00~24:00)'
    ],
    gender: '请选择性别',
    genderRange: ['男', '女'],
    lunarValid: false
  },

  lifetimes: {
    attached: function () {
      const cachedDate = wx.getStorageSync('birthday.date');
      const cachedHour = wx.getStorageSync('birthday.hour');
      const gender = wx.getStorageSync('gender');
      if (cachedDate || cachedHour) {
        if (cachedHour) {
          let hourInputText = this.data.hourRange[cachedHour];
          this.setData({
            hourInputText: hourInputText
          });
        }
        this.onBirthdayChange(cachedDate, cachedHour);
      }
      if (gender) {
        this.setData({
          gender: gender,
        });
        this.triggerEvent('gender', {
          gender: gender
        });
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onBirthdayChange(dtStr, timeIndex) {
      let solar = this.getSolarObject(dtStr, timeIndex);
      if (solar != null) {
        let lunar = solar.getLunar();
        let lunarData = this.getLunarData(lunar);

        this.setData(lunarData);
        this.setData({
          lunarValid: true,
          date: dtStr,
          hour: timeIndex,
          hourValid: timeIndex && timeIndex >= 0,
          dateValid: dtStr && dtStr.split('-').length === 3
        });
        console.log(lunar.toFullString());
        this.triggerEvent('birthday', {
          date: dtStr,
          hour: timeIndex
        });
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

    getSolarObject(dtStr, timeIndex) {
      if (!dtStr) return null;
      const dts = dtStr.split('-');
      if (dts.length !== 3) return null;
      const year = parseInt(dts[0]);
      const month = parseInt(dts[1]);
      const day = parseInt(dts[2]);

      if (timeIndex != undefined) {
        let hour = timeIndex * 2;
        let minute = 0;
        if (timeIndex === 0) {
          minute = 30;
        } else if (timeIndex >= 12) {
          hour = 23;
          minute = 30;
        }

        return Solar.fromYmdHms(year, month, day, hour, minute, 0);
      } else {
        return Solar.fromYmd(year, month, day);
      }
    },

    bindDateChange(e) {
      wx.setStorageSync('birthday.date', e.detail.value);
      this.onBirthdayChange(e.detail.value, this.data.hour);
    },

    bindHourChange(e) {
      let hourInputText = this.data.hourRange[e.detail.value];
      this.setData({
        hour: e.detail.value,
        hourInputText: hourInputText
      });
      wx.setStorageSync('birthday.hour', e.detail.value);
      this.onBirthdayChange(this.data.date, e.detail.value);
    },
    bindGenderChange(e) {
      let gender = this.data.genderRange[e.detail.value];
      this.setData({
        gender: gender,
        genderValid: gender.length > 0
      });
      wx.setStorageSync('gender', gender);
      this.triggerEvent('gender', {
        gender: gender
      });
    },
  }
})