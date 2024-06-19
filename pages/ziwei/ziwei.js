const { getZiweiAstrolabe } = require('../../resources/ziwei_prompt');

Page({
  data: {
    modelExplain: "",
    loadingModel: true
  },
  onLoad(options) {
    const parsedData = JSON.parse(decodeURIComponent(options.data));
    const date = parsedData.date;
    const time = parsedData.hour;
    const gender = parsedData.gender;

    const astro = getZiweiAstrolabe(date, time, gender);
    console.log(astro.desc);

    this.setData(astro);
    this.setData({
        loadingModel: true
    });

    let that = this;
    wx.request({
        url: 'https://uireal.com/divine', // 必须是HTTPS
        method: 'POST',
        data: {
          secret: '911',
          channel: 'ziwei',
          ziwei: {
              birthday: date,
              time: time,
              gender: gender,
              desc: astro.desc,
          },
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
