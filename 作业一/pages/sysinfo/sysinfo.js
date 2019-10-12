// pages/sysinfo/sysinfo.js
Page({

   /**
    * 页面的初始数据
    */
   data: {

   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      wx.getSystemInfo({
         success: (res) => {
            this.setData({
               brand: res.brand,
               model: res.model,
               version: res.version,
               system: res.system,
               platform: res.platform
            });
         },
      });
      wx.getBatteryInfo({
         success: (res) => {
            this.setData({
               level: res.level,
               inCharging: res.isCharging ? '正在充电' : '未充电'
            });
         },
      });
      wx.getNetworkType({
         success: (res) => {
            this.setData({
               coonStat: res.networkType == 'none' ? '未连接' : '已连接',
               netType: res.networkType
            });
         },
      });
      wx.onNetworkStatusChange((res) => {
         this.setData({
            connected: res.isConnected ? '已连接' : '未连接',
            networkType: res.networkType
         });
      });

   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function () {

   },

   /**
    * 生命周期函数--监听页面显示
    */
   onShow: function () {

   },

   /**
    * 生命周期函数--监听页面隐藏
    */
   onHide: function () {

   },

   /**
    * 生命周期函数--监听页面卸载
    */
   onUnload: function () {

   },

   /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
   onPullDownRefresh: function () {

   },

   /**
    * 页面上拉触底事件的处理函数
    */
   onReachBottom: function () {

   },

   /**
    * 用户点击右上角分享
    */
   onShareAppMessage: function () {

   }
})