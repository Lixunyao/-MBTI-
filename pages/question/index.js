Page({
  data: {
    currentQuestion: 1,
    totalQuestions: 24,
    isAllQuestionsAnswered: false,
    question: [
      {
      id: 1,
      text: '当带狗狗去宠物聚会时，相比于安静地待在你边观察，它更喜欢积极地与其他狗狗互动玩耍吗？',
      endency:'e',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },{
      id: 2,
      text: '当快递员敲门发出声响时，相比于警觉地吠叫并冲到门口守护，它更倾向于默默退到房间角落观察吗？',
      endency:'i',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },
    {
      id: 3,
      text: '当家里有陌生人到访时，相比于躲在沙发下暗中警惕，它更喜欢主动凑近嗅闻、摇尾巴示好吗？',
      endency:'e',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },{
      id: 4,
      text: '当散步途中遇到其他狗狗时，相比于绕道避开或紧贴你的腿，它更喜欢摇尾靠近试图邀玩吗？',
      endency:'e',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },{
      id: 5,
      text: '当在公园长椅上休息时，相比于蜷缩在你脚边打盹，它更喜欢在周围草地来回奔跑探索新气味吗？',
      endency:'e',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },{
      id: 6,
      text: '当你在家中工作时，相比于独自趴在窝里发呆，它更喜欢反复叼玩具过来拱你的手要求互动吗？',
      endency:'e',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },{
      id: 7,
      text: '当收到一个新玩具时，相比于先绕圈嗅闻、用爪子试探研究结构，它更喜欢直接扑咬甩动并投入玩耍吗？',
      endency:'n',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },{
      id: 8,
      text: '当训练中你举起零食时，相比于专注盯着你手中的食物，它更喜欢观察你的表情或手势变化来预判指令吗？',
      endency:'n',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },{
      id: 9,
      text: '当散步路过每天经过的灌木丛时，相比于严格按照惯例完成气味标记，它更喜欢突然转向去追踪风中飘来的陌生气味吗？',
      endency:'n',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },{
      id: 10,
      text: '当玩抛接球游戏时，相比于紧盯飞行的球调整跑动路线，它更喜欢提前预判落点并抄近路拦截吗？',
      endency:'n',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },{
      id: 11,
      text: '当你更换客厅家具布局后，相比于立刻察觉沙发位置偏移并绕道走，它更喜欢无视变化、轻松跳上原定点位等待投喂吗？',
      endency:'n',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },{
      id: 12,
      text: '当发现你藏起零食袋时，相比于通过细微声响锁定具体位置，它更喜欢观察你的行为模式推测藏匿逻辑吗？',
      endency:'n',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },{
      id: 13,
      text: '当你批评它偷吃零食时，相比于低头躲避眼神并发出委屈呜咽声，它更喜欢冷静端坐观察你的手势等待指令吗？',
      endency:'t',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },{
      id: 14,
      text: '当与其他狗狗争夺玩具时，相比于撒娇哼唧吸引你主持公道，它更喜欢用假动作绕后突袭智取目标吗？',
      endency:'t',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },{
      id: 15,
      text: '当你假装哭泣时，相比于急切贴脸舔舐安慰，它更喜欢叼来玩具或毯子放在你脚边吗？',
      endency:'t',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },{
      id: 16,
      text: '当训练中多次重复指令失败时，相比于焦虑转圈或趴下示弱，它更喜欢调整姿势重新尝试直至成功吗？',
      endency:'t',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },{
      id: 17,
      text: '当你同时抚摸其他宠物时，相比于挤进你怀里争宠哼叫，它更喜欢默默用鼻子推开对方宣告主权吗？',
      endency:'t',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },{
      id: 18,
      text: '当遭遇雷雨等恐惧场景时，相比于寻求你抱抱颤抖，它更喜欢躲进封闭空间自我冷静吗？',
      endency:'t',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },{
      id: 19,
      text: '当每天早晨到达固定饭点时，相比于提前5分钟端坐食盆旁盯你催促，它更喜欢悠闲等待直到你偶然想起投喂吗？',
      endency:'p',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },{
      id: 20,
      text: '当你想调整散步路线时，相比于固执地拽绳子坚持走熟悉道路，它更喜欢兴奋地扑向岔路探索新区域吗？',
      endency:'p',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },{
      id: 21,
      text: '当玩“你扔我捡”游戏时，相比于严格按规则叼回球交到你手里，它更喜欢中途发明新玩法（如埋球挑衅）吗？',
      endency:'p',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },{
      id: 22,
      text: '当遇到下雨打乱日常散步计划时，相比于焦躁扒门要求按原时间外出，它更喜欢淡定趴窗台欣赏雨景吗？',
      endency:'p',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },
    {
      id: 23,
      text: '当整理它的玩具箱时，相比于把每件玩具放回固定格子，它更喜欢随机刨出旧玩具并摊满地板吗？',
      endency:'p',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },
    {
      id: 24,
      text: '当准备出门前戴牵引绳时，相比于端坐等你按标准流程操作，它更喜欢蹦跳转圈？',
      endency:'p',
      options:
       [
        { value: 'A', text: '是我家狗' },
        { value: 'B', text: '比较像' },
        { value: 'C', text: '不太像' },
        { value: 'D', text: '完全不是' }
      ]
    },
  ],
    answers: [],
    valueE:0,
    valueI:0,
    valueS:0,
    valueN:0,
    valueT:0,
    valueF:0,
    valueJ:0,
    valueP:0,
    currentQuestionData: null  // Add initial value
  },

  onLoad() {
    // Initialize the first question
    this.setData({
      currentQuestionData: this.data.question[0],
      totalQuestions: this.data.question.length
    });
  },

  // Remove this duplicate data object
  /* Remove this block
  data: {
    isAllQuestionsAnswered: false,
  },
  */

  onSelectOption(e) {
    const { value } = e.currentTarget.dataset;
    // 保存答案
    const answers = [...this.data.answers];
    answers[this.data.currentQuestion - 1] = value;
  
    // 计算分数
    this.calculateScore(value, this.data.currentQuestionData.endency);
  
    this.setData({ answers });
  
    // 如果是最后一题，显示生成报告按钮
    if (this.data.currentQuestion === this.data.totalQuestions) {
      this.setData({
        isAllQuestionsAnswered: true
      });
    } else {
      // 否则加载下一题
      this.loadNextQuestion();
    }
  },
  
  // 添加生成结果的函数
  generateResult() {
    this.calculateResult();
  },
  
    // 新增计算分数的函数
    calculateScore(option, endency) {
      // 根据选项计算分数：A=3分, B=2分, C=1分, D=0分
      let score = 0;
      switch(option) {
        case 'A': score = 3; break;
        case 'B': score = 2; break;
        case 'C': score = 1; break;
        case 'D': score = 0; break;
      }
      
      // 根据题目倾向分配分数
      switch(endency) {
        case 'e':
          this.setData({
            valueE: this.data.valueE + score,
            valueI: this.data.valueI + (3 - score)
          });
          break;
        case 'i':
          this.setData({
            valueI: this.data.valueI + score,
            valueE: this.data.valueE + (3 - score)
          });
          break;
        case 'n':
          this.setData({
            valueN: this.data.valueN + score,
            valueS: this.data.valueS + (3 - score)
          });
          break;
        case 's':
          this.setData({
            valueS: this.data.valueS + score,
            valueN: this.data.valueN + (3 - score)
          });
          break;
        case 't':
          this.setData({
            valueT: this.data.valueT + score,
            valueF: this.data.valueF + (3 - score)
          });
          break;
        case 'f':
          this.setData({
            valueF: this.data.valueF + score,
            valueT: this.data.valueT + (3 - score)
          });
          break;
        case 'j':
          this.setData({
            valueJ: this.data.valueJ + score,
            valueP: this.data.valueP + (3 - score)
          });
          break;
        case 'p':
          this.setData({
            valueP: this.data.valueP + score,
            valueJ: this.data.valueJ + (3 - score)
          });
          break;
      }
    },

  loadNextQuestion() {
    // 加载下一题的逻辑
    const nextQuestion = this.data.currentQuestion + 1;
    this.setData({
      currentQuestion: nextQuestion,
      currentQuestionData: this.data.question[nextQuestion - 1]
    });
  },

  loadPreviousQuestion() {
    // 加载上一题的逻辑
    if (this.data.currentQuestion > 1) {
      const previousQuestion = this.data.currentQuestion - 1;
      this.setData({
        currentQuestion: previousQuestion,
        currentQuestionData: this.data.question[previousQuestion - 1]
      });
    }
  },

  calculateResult() {
    // 计算MBTI结果的逻辑
    const app = getApp();
    
    // 计算各维度的总分
    const totalEI = this.data.valueE + this.data.valueI;
    const totalSN = this.data.valueS + this.data.valueN;
    const totalTF = this.data.valueT + this.data.valueF;
    const totalJP = this.data.valueJ + this.data.valueP;
    
    // 计算各维度的百分比
    const percentE = Math.round((this.data.valueE / totalEI) * 100);
    const percentI = Math.round((this.data.valueI / totalEI) * 100);
    const percentS = Math.round((this.data.valueS / totalSN) * 100);
    const percentN = Math.round((this.data.valueN / totalSN) * 100);
    const percentT = Math.round((this.data.valueT / totalTF) * 100);
    const percentF = Math.round((this.data.valueF / totalTF) * 100);
    const percentJ = Math.round((this.data.valueJ / totalJP) * 100);
    const percentP = Math.round((this.data.valueP / totalJP) * 100);
    
    // 根据分数确定各维度的倾向
    const e_i = this.data.valueE >= this.data.valueI ? 'E' : 'I';
    const s_n = this.data.valueS >= this.data.valueN ? 'S' : 'N';
    const t_f = this.data.valueT >= this.data.valueF ? 'T' : 'F';
    const j_p = this.data.valueJ >= this.data.valueP ? 'J' : 'P';
    
    // 组合成MBTI类型
    const mbtiType = e_i + s_n + t_f + j_p;
    
    // 根据MBTI类型设置描述
    let description = '';
    
    const result = {
      type: mbtiType,
      description: description,
      date: new Date().toLocaleDateString(),
      scores: {
        E: this.data.valueE,
        I: this.data.valueI,
        S: this.data.valueS,
        N: this.data.valueN,
        T: this.data.valueT,
        F: this.data.valueF,
        J: this.data.valueJ,
        P: this.data.valueP
      },
      percentages: {
        E: percentE,
        I: percentI,
        S: percentS,
        N: percentN,
        T: percentT,
        F: percentF,
        J: percentJ,
        P: percentP
      }
    };
    
    app.globalData.testResult = result;
    wx.switchTab({
      url: '/pages/my/index'
    });
  }
})