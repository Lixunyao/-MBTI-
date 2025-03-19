// app.js
App({
  globalData: {
    userInfo: null,
    testResult: null
  },
  onLaunch() {
    // 小程序启动时执行的逻辑
    wx.cloud.init({
      env: 'cloud1-1gn4qp0s43919c14', // 替换为你的云环境ID
      traceUser: true // 记录用户访问日志
    })
    console.log('App launched');
  }
})