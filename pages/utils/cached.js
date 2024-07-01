function getCachedUserInfo() {
  return {
    gender: wx.getStorageSync('gender'),
    birthday: wx.getStorageSync('birthday.date'),
    birthhour: wx.getStorageSync('birthday.hour')
  };
}

module.exports = {
  getCachedUserInfo: getCachedUserInfo
}