// index.js
Page({
  data: {
    petType: ''
  },
  onLoad() {
    // 页面加载时执行的逻辑
  },
  petTypeChange(e) {
    this.setData({
      petType: e.detail.value
    });
  },
  startTest() {
    wx.navigateTo({
      url: '/pages/question/index'
    });
  }
})