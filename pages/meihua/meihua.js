// index.js
let devine = require("../../resources/devine")

Page({
  data: {
    modelExplain: ""
  },
  onDevineTapped(e) {
    let devined = devine.devineByRandomNumber();
    console.log("tapped:", devined);
    this.setData(devined);
      /*
      wx.navigateTo({
        url: '/pages/gua/gua',
        fail: function(data) {
            console.log(data.errMsg);
        }
      })
      */
  },
  onLoad() {
    this.onDevineTapped(undefined);
  },
})
