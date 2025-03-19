// my/index.js

Page({
  data: {
    hasPet: false,
    hasResult: false,
    petName: '',
    petType: '',
    result: {
      type: '',
      description: '',
      date: ''
    },
    qrCodeUrl: '',
    cpType: '', // 添加CP类型字段
    // 添加性格特质描述
    personalityTraits: {
      E: "热情迎宾",
      I: "静观其变",
      S: "脚踏实地",
      N: "灵机一动",
      T: "铁面判官",
      F: "暖心卫士",
      J: "令行禁止",
      P: "随遇而安"
    },
    // 默认描述，将在获取到真实数据后替换
    mockDescription: "",
    mockCpOwner: ""
  },
  
  onLoad: function (options) {
    // 获取小程序码
    this.getQrCode();
  },
  
  onShow() {
    // 每次页面显示时检查全局数据
    const app = getApp();
    if (app.globalData.petType) {
      this.setData({
        hasPet: true,
        petType: app.globalData.petType
      });
    }
    
    // 如果有测试结果，则显示
    if (app.globalData.testResult) {
      // 确保所有百分比数据都存在并且对立维度互为补集
      const percentages = app.globalData.testResult.percentages || {};
      
      // 如果百分比数据不完整，使用默认值
      if (!percentages.E) percentages.E = 50;
      // 确保对立维度互为补集
      percentages.I = 100 - percentages.E;
      
      if (!percentages.S) percentages.S = 50;
      percentages.N = 100 - percentages.S;
      
      if (!percentages.T) percentages.T = 50;
      percentages.F = 100 - percentages.T;
      
      if (!percentages.J) percentages.J = 50;
      percentages.P = 100 - percentages.J;
      
      const personalityType = app.globalData.testResult.type;
      const personalityInfo = getPersonalityInfo(personalityType);
      
      // 如果找到对应的性格数据，则使用配置文件中的描述
      if (personalityInfo) {
        this.setData({
          hasResult: true,
          result: {
            ...app.globalData.testResult,
            // 使用personality.js中的title作为显示标题
            title: personalityInfo.title
          },
          percentages: percentages,
          mockDescription: personalityInfo.description,
          mockCpOwner: personalityInfo.bestMatch.description,
          cpType: personalityInfo.bestMatch.type
        });
      } else {
        this.setData({
          hasResult: true,
          result: app.globalData.testResult,
          percentages: percentages
        });
      }
    }
  },
  
  // 在现有方法后添加下载报告的方法
  downloadReport: function() {
    const that = this;
    
    // 先请求授权
    wx.getSetting({
      success(res) {
        console.log(res)
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              that.startDrawCanvas();
            },
            fail() {
              wx.showModal({
                title: '提示',
                content: '需要您授权保存图片到相册',
                showCancel: false,
                success() {
                  wx.openSetting();
                }
              });
            }
          });
        } else {
          that.startDrawCanvas();
        }
      }
    });
  },
  
  // 使用 Canvas 2D 接口重构绘制逻辑
  // 添加获取小程序码的方法
  getQrCode: function() {
    const that = this;
    wx.cloud.callFunction({
      name: 'getQRCode', // 确保云函数名称正确
      data: {
        path: 'pages/index/index' // 扫码后打开的页面路径
      },
      success: res => {
        console.log('获取小程序码成功', res);
        if (res.result && res.result.qrcodeUrl) {
          that.setData({
            qrCodeUrl: res.result.qrcodeUrl
          });
        } else {
          console.error('返回的二维码数据格式不正确', res);
        }
      },
      fail: err => {
        console.error('获取小程序码失败', err);
      }
    });
  },
  
  // 修改startDrawCanvas方法，确保正确显示性格标题
  startDrawCanvas: function() {
    console.log('开始绘图')
    const that = this;
    wx.showLoading({
      title: '生成报告中...',
      mask: true
    });
  
    try {
      console.log('进入try')
      const query = wx.createSelectorQuery();
      query.select('#reportCanvas')
        .fields({ node: true, size: true })
        .exec((res) => {
          const canvas = res[0].node;
          const ctx = canvas.getContext('2d');
          
          // 设置画布尺寸
          canvas.width = 750;
          canvas.height = 1800;
          
          // 设置背景
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, 750, 1800);
          
          // 绘制标题
          ctx.fillStyle = '#333333';
          ctx.font = '40px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('狗狗MBTI性格报告', 375, 80);
          
          // 绘制类型
          ctx.font = '36px sans-serif';
          ctx.fillStyle = '#6ECEDA';
          ctx.fillText(that.data.result.type, 375, 140);
          
          // 获取性格信息并绘制标题
          const personalityType = that.data.result.type;
          const personalityInfo = getPersonalityInfo(personalityType);
          
          if (personalityInfo && personalityInfo.title) {
            ctx.font = '28px sans-serif';
            ctx.fillStyle = '#333333';
            ctx.fillText(personalityInfo.title, 375, 190);
            // 调整后续内容的起始位置
            currentY = 240;
          } else {
            currentY = 200;
          }
          
          // 绘制描述
          ctx.font = '28px sans-serif';
          ctx.fillStyle = '#666666';
          ctx.textAlign = 'left';
          
          // 文本换行处理
          const description = that.data.result.description;
          let lastSubStrIndex = 0;
          let currentY = 200;
          for (let i = 0; i < description.length; i++) {
            if (i - lastSubStrIndex > 18) {
              ctx.fillText(description.substring(lastSubStrIndex, i), 50, currentY);
              currentY += 45;
              lastSubStrIndex = i;
            }
          }
          ctx.fillText(description.substring(lastSubStrIndex, description.length), 50, currentY);
          
          // 绘制百分比标题
          currentY += 80;
          ctx.font = '32px sans-serif';
          ctx.fillStyle = '#333333';
          ctx.fillText('性格维度分析', 50, currentY);
          
          // 绘制百分比条
          const dimensions = ['E/I', 'S/N', 'T/F', 'J/P'];
          const percentages = that.data.percentages;
          const colors = ['#FF6B6B', '#FFD166', '#06D6A0', '#118AB2'];
          
          currentY += 50;
          for (let i = 0; i < dimensions.length; i++) {
            const y = currentY + i * 60;
            
            // 绘制维度名称
            ctx.font = '28px sans-serif';
            ctx.fillStyle = '#333333';
            ctx.fillText(dimensions[i], 50, y);
            
            // 绘制进度条背景
            ctx.fillStyle = '#EEEEEE';
            ctx.fillRect(150, y - 20, 500, 30);
            
            // 绘制进度条
            const dim = dimensions[i].split('/');
            const percent1 = percentages[dim[0]];
            const percent2 = percentages[dim[1]];
            
            ctx.fillStyle = colors[i];
            ctx.fillRect(150, y - 20, 5 * percent1, 30);
            
            // 绘制百分比文字
            ctx.font = '24px sans-serif';
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText(`${percent1}%`, 150 + 5 * percent1 / 2, y + 5);
            ctx.fillStyle = '#666666';
            ctx.fillText(`${percent2}%`, 150 + 5 * percent1 + 5 * percent2 / 2, y + 5);
          }
          
          // 绘制性格解读标题
          currentY += 280;
          ctx.font = '32px sans-serif';
          ctx.fillStyle = '#333333';
          ctx.fillText('性格解读', 50, currentY);
          
          // 绘制性格解读内容
          currentY += 50;
          const analysis = that.data.mockDescription;
          lastSubStrIndex = 0;
          for (let i = 0; i < analysis.length; i++) {
            if (i - lastSubStrIndex > 18) {
              ctx.fillText(analysis.substring(lastSubStrIndex, i), 50, currentY);
              currentY += 45;
              lastSubStrIndex = i;
            }
          }
          ctx.fillText(analysis.substring(lastSubStrIndex, analysis.length), 50, currentY);
          
          // 添加最佳CP铲屎官部分
          currentY += 100;
          ctx.font = '32px sans-serif';
          ctx.fillStyle = '#333333';
          ctx.fillText('最佳CP铲屎官', 50, currentY);
          
          // 绘制CP类型
          currentY += 50;
          ctx.font = '30px sans-serif';
          ctx.fillStyle = '#333333';
          ctx.fillText(that.data.cpType, 50, currentY);
          currentY += 50;
          const cpContent = that.data.mockCpOwner;
          lastSubStrIndex = 0;
          for (let i = 0; i < cpContent.length; i++) {
            if (i - lastSubStrIndex > 18) { 
              ctx.fillText(cpContent.substring(lastSubStrIndex, i), 50, currentY);
              currentY += 45;
              lastSubStrIndex = i;
            }
          }
       
            ctx.fillText(cpContent.substring(lastSubStrIndex,cpContent.length), 50, currentY);
          
          
          // 绘制日期
          currentY += 80;
          ctx.font = '24px sans-serif';
          ctx.fillStyle = '#999999';
          ctx.textAlign = 'right';
          ctx.fillText(`测试日期: ${that.data.result.date}`, 700, currentY);
          
          // 绘制水印
          ctx.font = '24px sans-serif';
          ctx.fillStyle = '#DDDDDD';
          ctx.textAlign = 'center';
          ctx.fillText('狗狗MBTI性格测试', 375, 1750);
          
          console.log('准备绘制二维码', that.data.qrCodeUrl);
          
          // 添加绘制二维码的逻辑
          if (that.data.qrCodeUrl) {
            // 创建图片对象
            const qrImg = canvas.createImage();
            
            // 图片加载完成后绘制
            qrImg.onload = () => {
              console.log('二维码图片加载成功');
              // 绘制二维码
              const qrSize = 150; // 二维码大小
              const qrX = (canvas.width - qrSize) / 2; // 居中放置
              const qrY = 1600; // 放在底部位置
              
              ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);
              
              // 绘制二维码说明文字
              ctx.font = '24px sans-serif';
              ctx.fillStyle = '#333333';
              ctx.textAlign = 'center';
              ctx.fillText('扫码测试您家狗狗的MBTI性格', 375, qrY + qrSize + 30);
              
              // 完成绘制后生成图片
              finishDrawingAndSave();
            };
            
            // 处理图片加载错误
            qrImg.onerror = (err) => {
              console.error('二维码图片加载失败', err);
              // 即使二维码加载失败，也继续生成报告
              finishDrawingAndSave();
            };
            
            // 设置图片源 - 直接使用base64格式的图片
            qrImg.src = that.data.qrCodeUrl;
          } else {
            console.log('没有二维码URL，跳过绘制二维码');
            // 如果没有二维码URL，直接生成报告
            finishDrawingAndSave();
          }
          
          // 封装生成图片并保存的逻辑
          function finishDrawingAndSave() {
            wx.canvasToTempFilePath({
              canvas: canvas,
              success: function(res) {
                console.log('生成图片成功');
                wx.hideLoading();
                // 保存图片到相册
                wx.saveImageToPhotosAlbum({
                  filePath: res.tempFilePath,
                  success: function() {
                    wx.showToast({
                      title: '报告已保存到相册',
                      icon: 'success',
                      duration: 2000
                    });
                  },
                  fail: function(err) {
                    console.log(err);
                    that.handleSaveError(err);
                  }
                });
              },
              fail: function(err) {
                wx.hideLoading();
                console.log(err);
                wx.showToast({
                  title: '生成图片失败',
                  icon: 'none'
                });
              }
            });
          }
        });
  } catch (err) {
    wx.hideLoading();
    console.error('绘制异常:', err);
    wx.showToast({ 
      title: '生成失败', 
      icon: 'none' 
    });
  }
},

handleSaveError: function(err) {
  if (err.errMsg.includes("auth deny")) {
    wx.showModal({
      title: '权限提示',
      content: '需要相册权限保存报告',
      success(res) {
        if (res.confirm) wx.openSetting();
      }
    });
  } else {
    wx.showToast({ title: '保存失败，请重试', icon: 'none' });
  }
} , // Add comma here
});  // Change from ) to });

// 在文件顶部引入getPersonalityInfo函数
import { getPersonalityInfo } from '../../config/personality';
