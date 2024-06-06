// pages/gua.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this;
    wx.startAccelerometer({
        interval: 'game',
        success: (data) => {
            console.log('acc success:', data);
            wx.onAccelerometerChange((res) => {
                that.setData({
                    acc_x: res.x,
                    acc_y: res.y,
                    acc_z: res.z
                });
            });
        }
      });

      wx.startCompass({
          success: function(data) {
              console.log("compass success:", data);
              wx.onCompassChange((res) => {
                  that.setData({
                      compass_direction: res.direction,
                      compass_accuracy: res.accuracy
                  });
              })
          }
      });

      wx.startGyroscope({
          interval: "game",
          success: (data) => {
              console.log("gyroscope success:", data);
              wx.onGyroscopeChange((res) => {
                  that.setData({
                      gyro_x: res.x,
                      gyro_y: res.y,
                      gyro_z: res.z
                  });
              })
          }
      });
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