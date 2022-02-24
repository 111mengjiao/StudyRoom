// pages/gender/gender.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    area: ''
  },

  areaInput: function (e) {
    this.setData({
      area: e.detail.value
    })
  },

  submit: function () {
    var area = this.data.area;
    if (area == '') {
      wx.showToast({
        title: '请重新输入',
      })
    } else {
      wx.request({
        url: 'https://www.cloudykz.top/unlone/user/addUser',
        method: 'post',
        data: {
          'city': area,
          'userId': 1
        },
        
        success(res) {
          console.log(res.data);
          if (res.data.status == 0) {
            wx.showToast({
              title: '提交成功',
            })
          } else {
            wx.showToast({
              title: '提交失败',
            })
          }
        },
        fail: function () {
          console.log('err')
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userId = this.data.userId;
    var that = this;
    wx.request({
      url: 'https://www.cloudykz.top/unlone/user/getuser?userId='+1,
      method: 'get',
      success(res) {
        console.log(res.data);
        var result = res.data.result;
        if (res.data.status == 0) {
          console.log('ok');
          console.log(result.area);
          that.setData({
            area:result.city
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