// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: '',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var phone = e.detail.value.phone
    var pwd = e.detail.value.password
    if (!phone){
      console.log('请输入手机号')
      wx.showToast({
        title: '请输入手机号',
        icon: 'none',
        duration: 2000
      })
    }else if (!pwd) {
      console.log('请输入密码')
      wx.showToast({
        title: '请输入密码',
        icon: 'none',
        duration: 2000
      })
    }
  },
  // formReset: function () {
  //   console.log('form发生了reset事件')
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              //console.log(res.userInfo)
            },
            fail: function () {
              console.log('没有授权')
            }
          })
        }
      }
    })
  },
  //获取用户信息
  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
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