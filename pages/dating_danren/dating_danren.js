Page({
  /**
   * 页面的初始数据
   */
  data: {
    result: [],
    determine: "", //判定的结果
    tupian: [],
    // 骰子图片地址
    dices: [
      '/assets/images/dice/dongtu.gif',
      '/assets/images/dice/d1.png',
      '/assets/images/dice/d2.png',
      '/assets/images/dice/d3.png',
      '/assets/images/dice/d4.png',
      '/assets/images/dice/d5.png',
      '/assets/images/dice/d6.png',
    ],

    //博饼结果
    dicelist: [],

    result: {
      result: {
        name: '一秀',
        score: 0
      }
    }
  },

  click() {
    console.log("点击投掷")
    this.setData({
      tupian: "/assets/images/dice/dongtu.gif",
      dicelist: [],
      determine: ""
    })
    setTimeout(() => {
      this.setData({
        tupian: ""
      })
      this.result()
    }, 2000)//时间延迟
  },

  random(min, max) { //生成随机数
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  result() {
    var list = [];//初始化
    var listsrc = [];//初始化
    var countList=[0,0,0,0,0,0,0];//初始化
    for (var i = 0; i < 6; i++) {
      var t = this.random(1,6);
      list.push(t);
      countList[t]++;
  
    }
    this.setData({
      result: list
    })
    for (var i = 0; i < 6; i++) {
      var dicesrc = "/assets/images/dice/d" + this.data.result[i] + ".png"
      listsrc.push(dicesrc)
    }
    this.setData({
      dicelist: listsrc,
    })
    var flag = 0;
    if ( countList[1] == 1 &&  countList[2] == 1 &&  countList[3] == 1 &&  countList[4] == 1 &&  countList[5]== 1 &&  countList[6] == 1) {
      this.setData({
        determine: "对堂！",
      })
      flag = 1
    } else {
      if ( countList[1] == 6){
        this.setData({
          determine:"遍地锦！",
        })
      }
      if ( countList[4]== 1) {
        this.setData({
          determine: "一秀！",
        })
        flag = 1
      }
      if ( countList[4]== 2) {
        this.setData({
          determine: "二举！",
        })
        flag = 1
      }
      if ( countList[4] == 3) {
        this.setData({
          determine: "三红！",
        })
        flag = 1
      }
      if ( countList[4] == 5) {
        this.setData({
          determine: "五王！",
        })
        flag = 1
      }
      if ( countList[4] == 4) {
        if ( countList[1] == 2) {
          this.setData({
            determine: "状元插金花！",
          })
          flag = 1
        } else {
          this.setData({
            determine: "状元！",
          })
          flag = 1
        }
      }
      if ( countList[4] == 6) {
        this.setData({
          determine: "六杯红！",
        })
        flag = 1
      }
      if ( countList[1] == 4 ||  countList[2]== 4 || countList[3] == 4  ||  countList[5] == 4 ||  countList[6] == 4) {
        this.setData({
          determine: "四进！",
        })
        flag = 1
      }
      if ( countList[1] == 5 || countList[2] == 5 ||  countList[3] == 5  ||  countList[5] == 5 || countList[6] == 5) {
        this.setData({
          determine: "五子登科！",
        })
        flag = 1
      }
      if ( countList[2] == 6 ||  countList[3] == 6  || countList[5] == 6 ||  countList[6]== 6) {
        this.setData({
          determine: "六杯黑！",
        })
        flag = 1
      }
    }
    if (flag == 0) {
      this.setData({
        determine: "可惜",
      })
    }
    console.log("输出投掷结果:", this.data.determine)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

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
