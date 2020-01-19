//index.js
//获取应用实例


Page({
  data: {
    titArr: [{
      tit: '综合信息',
      content: [{
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

    }, {
      tit: '通知公告',
      content: [{
        id: 5,
        title: '小榄镇绩东一社区农村集体资产交易管理办法',
        time: '2015-03-06 16:07:08.0',
        region: '竹源5'
      }, {
        id: 6,
        title: '小榄镇绩东一社区农村集体资产交易管理办法',
        time: '2015-03-06 16:07:08.0',
        region: '竹源6'
      }]
    },
    {
      tit: '公开',
      content: [{
        id: 5,
        title: '村干部及村工作人员待遇补贴情况表',
        time: '2015-03-06 16:07:08.0',
        region: '竹源6'
       
      }, {
        id: 6,
        title: '收入支出情况表',
        time: '2015-03-06 16:07:08.0',
        region: '竹源6'
      },
      {
        id: 6,
        title: '现金/银行收支明细表',
        time: '2015-03-06 16:07:08.0',
        region: '竹源6'
      },]
    }  
  ],
    searchRes:[],
    // 测试表1
    zonghe:[
      {
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
      },
      {
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
      },{
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
      },{
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
      },{
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
      },{
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
      }
      
    ],
    zhengce:[
      {
        id: 4,
        title: '小榄镇绩东一社区农村集体资产交易管理办法',
        time: '2015-03-06 16:07:08.0',
        region: '竹源4'
      }
    ],
    tongzhi:[
      {
        id: 5,
        title: '小榄镇绩东一社区农村集体资产交易管理办法',
        time: '2015-03-06 16:07:08.0',
        region: '竹源5'
      }, {
        id: 6,
        title: '小榄镇绩东一社区农村集体资产交易管理办法',
        time: '2015-03-06 16:07:08.0',
        region: '竹源6'
      }
    ]
  },
  //事件处理函数
  wxSearchConfirm:function(e){
     console.log(e.detail.value)
  },
  gourl(e){
    console.log(e.currentTarget.dataset.url)
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },
  //跳转页面详情
  details:function(e){
    //console.log(e.currentTarget.dataset.id)
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/details/details?id='+id,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onLoad: function() {
      // wx.request({
      //   url: 'http://localhost:3000/banner',
      //   success:function(res){
      //     console.log(res)
      //   }
      // })
  },

})