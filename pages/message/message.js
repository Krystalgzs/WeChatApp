// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageList: [
      {
        id: 1,
        title: "免费送票!超有内涵的门票。",
        date: "2017-12-05",
        image: "https://image4.suning.cn/uimg/cms/img/151247459585376869.jpg",
        desc: "越努力，越幸运~"
      },
      {
        id: 2,
        title: "免费送票!超有内涵的门票。",
        date: "2017-12-05",
        image: "https://image.suning.cn/uimg/aps/material/151245593926524449.jpg?from=mobile",
        desc: "最糟糕的，也许就是最幸运的。"
      },
      {
        id: 3,
        title: "免费送票!超有内涵的门票。",
        date: "2017-12-05",
        image: "https://image3.suning.cn/uimg/cms/img/151246531867057145.jpg?from=mobile",
        desc: "最糟糕的，也许就是最幸运的。"
      },
      {
        id: 4,
        title: "免费送票!超有内涵的门票。",
        date: "2017-12-05",
        image: "https://image5.suning.cn/uimg/cms/img/151236422366513287.jpg?from=mobile",
        desc: "最糟糕的，也许就是最幸运的。"
      },
      {
        id: 5,
        title: "免费送票!超有内涵的门票。",
        date: "2017-12-05",
        image: "https://image.suning.cn/uimg/aps/material/151246212259006492.jpg?from=mobile",
        desc: "最糟糕的，也许就是最幸运的。"
      }
    ],
    newMessage:[
      {
        id: 6,
        title: "免费送票!超有内涵的门票。111",
        date: "2017-12-06",
        image: "https://m.360buyimg.com/mobilecms/s1125x549_jfs/t15871/337/106506641/197237/299f8eca/5a276477N9e2d59d6.jpg!q70.jpg",
        desc: "越努力，越幸运~****"
      },
      {
        id: 7,
        title: "免费送票!超有内涵的门票。111",
        date: "2017-12-06",
        image: "https://img1.360buyimg.com/da/jfs/t12214/351/1524941677/96956/802a2a89/5a20e27dN1d9dce8d.jpg",
        desc: "越努力，越幸运~****"
      }, 
      {
        id: 8,
        title: "免费送票!超有内涵的门票。111",
        date: "2017-12-06",
        image: "https://img1.360buyimg.com/da/jfs/t15331/317/211196342/188655/30a99c6f/5a266feeNde6595b3.jpg",
        desc: "越努力，越幸运~****"
      }, 
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.data.messageList);
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
    console.log(this.data.messageList);
    var newMessage = this.data.messageList.concat(this.data.newMessage);
    this.setData({
      messageList:newMessage
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})