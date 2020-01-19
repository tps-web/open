var wxCharts = require('../../utils/wxcharts-min.js');
Page({

  /**
   * 页面的初始数据
   */

  data: {
   id:'',
    listData: [
      { "code": "01", "text": "text1", "type": "type1" },
      { "code": "02", "text": "text2", "type": "type2" },
      { "code": "03", "text": "text3", "type": "type3" },
      { "code": "04", "text": "text4", "type": "type4" },
      { "code": "05", "text": "text5", "type": "type5" },
      { "code": "06", "text": "text6", "type": "type6" },
      { "code": "07", "text": "text7", "type": "type7" }
    ],
    listData1: [
      { "code": "01", "text": "text1", "type": "type1", "codeq": "01", "textq": "text1", "typeq": "type1" },
      { "code": "02", "text": "text2", "type": "type2", "codeq": "02", "textq": "text2", "typeq": "type2"},
      { "code": "03", "text": "text3", "type": "type3", "codeq": "02", "textq": "text2", "typeq": "type2" },
      { "code": "04", "text": "text4", "type": "type4", "codeq": "02", "textq": "text2", "typeq": "type2" },
      { "code": "05", "text": "text5", "type": "type5", "codeq": "02", "textq": "text2", "typeq": "type2"},
      { "code": "06", "text": "text6", "type": "type6", "codeq": "02", "textq": "text2", "typeq": "type2"},
      { "code": "07", "text": "text7", "type": "type7", "codeq": "02", "textq": "text2", "typeq": "type2"}
    ]

  },
 
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.setData({
      id: options.id
    }),
      new wxCharts({
        canvasId: 'lineCanvas',
        type: 'line',
        categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
        series: [{
          name: '成交量1',
          data: [0.15, 0.2, 0.45, 0.37, 0.4, 0.8],
          format: function (val) {
            return val.toFixed(2) + '万';
          }
        }, {
          name: '成交量2',
          data: [0.30, 0.37, 0.65, 0.78, 0.69, 0.94],
          format: function (val) {
            return val.toFixed(2) + '万';
          }
        }],
        yAxis: {
          title: '成交金额 (万元)',
          format: function (val) {
            return val.toFixed(2);
          },
          min: 0
        },
        width: 350,
        height: 200
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