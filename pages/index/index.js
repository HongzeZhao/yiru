// index.js
let devine = require("../../resources/devine")

Page({
  data: {
    buttons: [{text: '取消'}, {text: '确认'}],
    showDialog: false
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
    // this.setData({
    //    showDialog: true
    // });
  },
  tapDialogButton(e) {
      console.log(e);
      this.setData({
        showDialog: false
    });
    if (e.detail.index === 1) {
        
    }
  },
  onLoad() {
      wx.request({
          url: "https://typename.net",
          success(e) {
              console.log(e);
          },
          fail(e) {
              console.log(e.errMsg);
          }
      })
    this.onDevineTapped(undefined);
  },
})
