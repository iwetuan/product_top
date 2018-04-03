// pages/product_top/product_top.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      cc:"yy",
      loops: [...Array(1).keys()],
      //iphone:"../../utils/timg.jpg",
      iphone:'https://iwetuan-1256141198.cos.ap-chengdu.myqcloud.com/video/father.mp4',
      move:{},
      imgurl: [ "../../utils/timg.jpg", 
                "../../utils/timg.jpg",
                "../../utils/timg.jpg"]
  },
  change:function(){
    this.setData({cc:this.data.cc =="xx"?"yy":"xx"})
  },
  play:function(){
    this.videoContext.play()
  },
  
  transform_s:function(){
    var move = wx.createAnimation({
      timingFunction:"linear",
      delay:0,
      transformOrigin:"50% 50% 0",
      duration:1000
    })
    //this.animation= move
    move.scale(0.1, 0.2).rotate(45).step()
    move.delay=5000;
    move.scale(1,1).rotate(360).step()
    this.setData({move:move.export()})
  },
  addr:function(){
    wx.chooseAddress({
      success:function(res){
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    /*this.videoContext= wx.createVideoContext('myvideo', this)
    var that = this;
    wx.getNetworkType({
      success: function(res) {
        console.log(res.networkType)
        that.videoContext.play()
        console.log("yyyy")
      },
    })*/
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("xxx")
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