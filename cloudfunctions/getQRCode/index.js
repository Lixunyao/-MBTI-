const cloud = require('wx-server-sdk')
cloud.init({ env: 'cloud1-1gn4qp0s43919c14' })
exports.main = async (event, context) => {
  console.log(process.env.CLOUD_ID)
  console.log('云函数开始执行')
  // 生成小程序码
  const wxacodeResult = await cloud.openapi.wxacode.get({
    path: event.path || 'pages/index/index',
    width: 300
  })

  // 将Buffer转为base64字符串直接返回给前端
  const base64 = wxacodeResult.buffer.toString('base64')
  
  return {
    qrcodeUrl: 'data:image/png;base64,' + base64
  }
}