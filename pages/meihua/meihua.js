// index.js
const {divineByMeihuaNumbers: divineByMeihuaNumbers} = require("../../resources/divine");

Page({
  data: {
    modelExplain: "",
    loadingModel: true
  },
  onLoad(options) {
    const data = JSON.parse(decodeURIComponent(options.data));
    let divined = divineByMeihuaNumbers(data.rand1, data.rand2, data.rand3);
    this.setData(divined);
    this.setData({
        loadingModel: true
    });

    let that = this;
    wx.request({
        url: 'https://uireal.com/divine', // 必须是HTTPS
        method: 'POST',
        data: {
          secret: '911',
          channel: 'meihua',
          meihua: divined,
          gender: data.gender,
          birthdayData: data.birthdayData,
          nowData: data.nowData
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
            that.setData({
                modelExplain: res.data.text,
                loadingModel: false
            })
          console.log(res.data)
        },
        fail(err) {
            that.setData({
                modelExplain: err.toString(),
                loadingModel: false
            })
          console.log(err)
        }
      });
  },
})
