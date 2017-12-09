// pages/list/list.js
Page({
  data: {
    shops:[],
    page:1,
    limit:10,
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.name
    })
    // console.log(options.id);
    console.log(options.name);
    wx.request({
      url: 'https://locally.uieee.com/categories/' + options.id +'/shops?_page={{page}}&_limit={{limit}}',
      data:{},
      method:"GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      dataType:"json",
      success:res=>{
        console.log(res.data);
        this.setData({
          shops:res.data
        })
        console.log(this.data.shops);
      }
    })
  },
  onReady: function () {
  
  },
  onShow: function () {
  
  },
  onHide: function () {
  
  },
  onUnload: function () {
  
  },
  onPullDownRefresh: function () {
  
  },
  onReachBottom: function () {
  
  },
  onShareAppMessage: function () {
  
  }
})