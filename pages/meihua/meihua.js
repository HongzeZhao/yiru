// index.js
const {divineByRandomNumbers} = require("../../resources/divine");

Page({
  data: {
    modelExplain: "",
    loadingModel: true
  },
  onLoad(options) {
    const data = JSON.parse(decodeURIComponent(options.data));
    let divined = divineByRandomNumbers(data.rand1, data.rand2, data.rand3);
    this.setData(divined);
    this.setData({
        loadingModel: true
    });

    let text = `##我是一名${data.gender}\n\n##我的生日相关信息\n${data.birthdayText}\n\n##当前起卦的时间相关信息\n${data.nowText}\n\n##梅花易数的起卦信息\n${divined.desc}\n`;

    let that = this;
    wx.request({
        url: 'https://uireal.com/divine', // 必须是HTTPS
        method: 'POST',
        data: {
          secret: '911',
          channel: 'meihua',
          text: text
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
      })
  },
})
