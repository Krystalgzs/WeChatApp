Page({
  data: {
    swiperList:[],
    categories:[]
  },
  onLoad: function (options) {
    wx.request({
      url: 'https://locally.uieee.com/slides', //仅为示例，并非真实的接口地址
      data: {
      },
      method:"GET",
      dataType:"json",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        // console.log(res.data);
       this.setData({
         swiperList:res.data
       })
      //  console.log(this.data.swiperList);
      }
    }),
      wx.request({
        url: 'https://locally.uieee.com/categories', //仅为示例，并非真实的接口地址
        data: {
        },
        method: "GET",
        dataType: "json",
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: res => {
          // console.log(res.data);
          this.setData({
            categories: res.data
          })
          // console.log(this.data.categories);
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