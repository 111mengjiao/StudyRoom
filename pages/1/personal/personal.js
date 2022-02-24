// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar:'',
    nickname:'',
    userId:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userId = this.data.userId;
    var that = this;
    wx.request({
      url: 'https://www.cloudykz.top/unlone/user/getuser?userId=' + 1,
      method: 'get',
      success(res) {
        console.log(res.data);
        var result = res.data.result;
        if (res.data.status == 0) {
          console.log('ok');
          that.setData({
            avatar: result.avatarurl,
            userId:result.userId,
            nickname:result.nickname
          })
          console.log('ok')
        } else {
          console.log('false')
        }
      },
      fail: function () {
        console.log('err')
      }
    })
  },

  goGender:function(){
    wx.navigateTo({
      url: "gender/gender"
    })
  },

  goArea:function(){
    wx.navigateTo({
      url: 'area/area',
    })
  },

  goStatus:function(){
    wx.navigateTo({
      url: 'status/status',
    })
  },

  goSchool:function(){
    wx.navigateTo({
      url: 'school/school',
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