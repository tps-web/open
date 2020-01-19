// pages/me/me.js
const app = getApp()
var that
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo:false,
    userInfo:""
  },
  goTo:function(){
    wx.navigateTo({
      url: '/pages/introduced/introduced',
    })
  },
  goToContact:function(){
      wx.navigateTo({
        url: '/pages/contact/contact',
      })
  },
  gourl(e){
    console.log(e.currentTarget.dataset.url)
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },
  out:function(){
    wx.showModal({
      title: '提示',
      content: '确定要退出？',
      success(res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          wx.clearStorage();
          that.setData({
            hasUserInfo:false
          })
        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
    })
 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      that=this;
      that.onShow()
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
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        //console.log(res.data)
        that.setData({
          userInfo: res.data,
          hasUserInfo: true
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
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