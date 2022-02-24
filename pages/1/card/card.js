// pages/card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '2018-11-11',
    week: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    lastMonth: 'lastMonth',
    nextMonth: 'nextMonth',
    selectVal: '',
    mes:''
  },

  //组件监听事件
  select(e) {
    this.setData({
      selectVal: e.detail,
      'mes':''
    })
    var selectYear = this.data.selectVal.split('-')[0];
    var selectMonth = this.data.selectVal.split('-')[1];
    var selectDay = this.data.selectVal.split('-')[2];
    var userId = this.data.userId;
    var that = this;
    wx.request({
      url: 'http://www.cloudykz.top/unlone/card/getcard?id=' + 1,
      method: 'get',
      success(res) {
        if (res.data.status == 0) {
          var result = res.data.result;
          for (var i = 0; i < result.length; i++) {
            if (result[i].createTime.split('-')[0] == that.data.selectVal.split('-')[0]) {
              if (result[i].createTime.split('-')[1] == that.data.selectVal.split('-')[1]) {
                if (result[i].createTime.split('-')[2].split('T')[0] == that.data.selectVal.split('-')[2]) {
                  console.log(result[i].msg)
                  var mes = result[i].msg;
                  that.setData({
                    'mes': mes
                  })
                }
              }
            }
          }
        } else {
          console.log('false')
        }
      },
      fail: function () {
        console.log('err')
      }
    })
  },

  toggleType() {
    this.selectComponent('#Calendar').toggleType();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = new Date();
    let day = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    this.setData({
      'day':day,
      'year':year,
      'month':month,
      'selectVal':year+'-'+month+'-'+day
    })
    var selectYear = this.data.selectVal.split('-')[0];
    var selectMonth = this.data.selectVal.split('-')[1];
    var selectDay = this.data.selectVal.split('-')[2];
    var userId = this.data.userId;
    var that = this;
    wx.request({
      url: 'http://www.cloudykz.top/unlone/card/getcard?id=' + 1,
      method: 'get',
      success(res) {
        // console.log(res.data);
        if (res.data.status == 0) {
          var result = res.data.result;
          for( var i = 0; i < result.length; i++){
            if (result[i].createTime.split('-')[0] == that.data.selectVal.split('-')[0]){
              if (result[i].createTime.split('-')[1] == that.data.selectVal.split('-')[1]){
                if (result[i].createTime.split('-')[2].split('T')[0] == that.data.selectVal.split('-')[2]){
                  console.log(result[i].msg)
                  var mes = result[i].msg;
                  that.setData({
                    'mes':mes
                  })
                  console.log('ok')
                }else{
                  console.log('false')
                }
              }else{
                console.log('false')
              }
            }else{
              console.log('false')
            }
          }
        }
      },
      fail: function () {
        console.log('err')
      }
    })
  },

  mesInput:function(e){
    this.setData({
      mes:e.detail.value
    })
  },

  submit:function(e){
    // console.log(this.data.mes)
    var mes = this.data.mes;
    // console.log(this.data.selectVal)
    // console.log(this.data.year)
    if(this.data.selectVal.split('-')[0] == this.data.year){
      if (this.data.selectVal.split('-')[1] == this.data.month){
        if (this.data.selectVal.split('-')[2].split('T')[0] == this.data.day){
          wx.request({
            url: 'https://www.cloudykz.top/unlone/card/addcard',
            method: 'post',
            data: {
              'userId': 1,
              'msg': mes
            },
            success(res) {
              // console.log(res.data);
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
            fail(err) {
              console.log(err)
            }
          })
        }else{
          wx.showToast({
            title: '添加失败',
          })
        }
      }else{
        wx.showToast({
          title: '添加失败',
        })
      }
    }else{
      wx.showToast({
        title: '添加失败',
      })
    }
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