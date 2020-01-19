// pages/notice/notice.js
var that
var list = []
Page({

  /**
   * 页面的初始数据
   */

  data: {
    multiIndex: [0,0],
    multiArray: [['小榄镇', '东区'], ['永宁', '九洲基', '东区', '西区', '盛丰','沙口']],
    titArr: [{
      tit: '综合信息',
      content: [{
        id: 1,
        title: '小榄镇绩东一社区农村集体资产交易管理办法',
        time: '2015-03-06 16:07:08.0',
        region: '开始'
      },
      {
        id: 2,
        title: '小榄镇绩东一社区农村集体资产交易管理办法',
        time: '2015-03-06 16:07:08.0',
        region: '竹源2'
      }, {
        id: 3,
        title: '小榄镇绩东一社区农村集体资产交易管理办法',
        time: '2015-03-06 16:07:08.0',
        region: '竹源3'
        }, {
          id: 1,
          title: '小榄镇绩东一社区农村集体资产交易管理办法',
          time: '2015-03-06 16:07:08.0',
          region: '竹源1'
        },
        {
          id: 2,
          title: '小榄镇绩东一社区农村集体资产交易管理办法',
          time: '2015-03-06 16:07:08.0',
          region: '竹源2'
        }, {
          id: 3,
          title: '小榄镇绩东一社区农村集体资产交易管理办法',
          time: '2015-03-06 16:07:08.0',
          region: '竹源3'
        }, {
          id: 1,
          title: '小榄镇绩东一社区农村集体资产交易管理办法',
          time: '2015-03-06 16:07:08.0',
          region: '竹源1'
        },
        {
          id: 2,
          title: '小榄镇绩东一社区农村集体资产交易管理办法',
          time: '2015-03-06 16:07:08.0',
          region: '竹源2'
        }, {
          id: 3,
          title: '小榄镇绩东一社区农村集体资产交易管理办法',
          time: '2015-03-06 16:07:08.0',
          region: '竹源3'
        }, {
          id: 1,
          title: '小榄镇绩东一社区农村集体资产交易管理办法',
          time: '2015-03-06 16:07:08.0',
          region: '竹源1'
        },
        {
          id: 2,
          title: '小榄镇绩东一社区农村集体资产交易管理办法',
          time: '2015-03-06 16:07:08.0',
          region: '竹源2'
        }, {
          id: 3,
          title: '小榄镇绩东一社区农村集体资产交易管理办法',
          time: '2015-03-06 16:07:08.0',
          region: '竹源3'
        }, {
          id: 1,
          title: '小榄镇绩东一社区农村集体资产交易管理办法',
          time: '2015-03-06 16:07:08.0',
          region: '竹源1'
        },
        {
          id: 2,
          title: '小榄镇绩东一社区农村集体资产交易管理办法',
          time: '2015-03-06 16:07:08.0',
          region: '竹源2'
        }, {
          id: 3,
          title: '小榄镇绩东一社区农村集体资产交易管理办法',
          time: '2015-03-06 16:07:08.0',
          region: '竹源3'
        }, {
          id: 1,
          title: '小榄镇绩东一社区农村集体资产交易管理办法',
          time: '2015-03-06 16:07:08.0',
          region: '竹源1'
        },
        {
          id: 2,
          title: '小榄镇绩东一社区农村集体资产交易管理办法',
          time: '2015-03-06 16:07:08.0',
          region: '竹源2'
        }, {
          id: 3,
          title: '小榄镇绩东一社区农村集体资产交易管理办法',
          time: '2015-03-06 16:07:08.0',
          region: '最后一个'
        }
      ]
    }, {
      tit: '政策法规',
      content: [{
        id: 4,
        title: '小榄镇绩东一社区农村集体资产交易管理办法',
        time: '2015-03-06 16:07:08.0',
        region: '竹源4'
      }]

    }]
  },
  //跳转页面详情
  details: function (e) {
    //console.log(e.currentTarget.dataset.id)
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/details/details?id=' + id,
    })
  },
  //下拉菜单
  bindMultiPickerChange:function(e){
    // console.log(e.detail.value)
    console.log(this.data.multiArray[1][this.data.multiIndex[1]])
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    //console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['永宁', '九洲基', '东区', '西区', '盛丰', '沙口'];
            break;
          case 1:
            data.multiArray[1] = ['东1', '东2', '东3'];
            break;
        }
        data.multiIndex[1] = 0;
       
        break;
    }
    //console.log(data.multiIndex);
    this.setData(data);
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that=this
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