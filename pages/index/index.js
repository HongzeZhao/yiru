// index.js
let devine = require("../../resources/devine")

Page({
  data: {},
  onDevineTapped(e) {
    let devined = devine.devineByRandomNumber();
    console.log("tapped:", devined);
    this.setData(devined);
  },
  onLoad() {
    this.onDevineTapped(undefined);
  },
})
