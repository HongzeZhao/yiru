const { astro } = require("iztro");

Page({
  data: {
    modelExplain: "",
    loadingModel: true
  },
  onLoad(options) {
    const parsedData = JSON.parse(decodeURIComponent(options.data));
    const date = parsedData.date;
    const gender = parsedData.gender;

    //console.log(data);
    var astrolabe = astro.bySolar(date, 2, gender);
    console.log(JSON.stringify(astrolabe));

    this.setData(astrolabe);
    this.setData({
        loadingModel: true
    });

    return;

    let that = this;
    wx.request({
        url: 'https://uireal.com/divine', // 必须是HTTPS
        method: 'POST',
        data: {
          secret: '911',
          channel: 'ziwei',
          ziwei: {
              birthday: parsedData,
              desc: '',
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
