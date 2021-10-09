Page({
  /**
   * 页面的初始数据
   */
  data: {
    resultList: [],
    rank: "", //判定的结果
    img: [],
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
      img: "/assets/images/dice/dongtu.gif",
      dicelist: [],
      rank: ""
    })
    setTimeout(() => {
      this.setData({
        img: ""
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
    var list = [];
    var listsrc = [];
    var one = 0; //统计投掷结果
    var two = 0;
    var three = 0;
    var four = 0;
    var five = 0;
    var six = 0;
    for (var i = 0; i < 6; i++) {
      var t = this.random(1, 6);
      list.push(t);
      if (t == 1) one++;
      if (t == 2) two++;
      if (t == 3) three++;
      if (t == 4) four++;
      if (t == 5) five++;
      if (t == 6) six++;
    }
    this.setData({
      resultList: list
    })
    for (var i = 0; i < 6; i++) {
      var dicesrc = "/assets/images/dice/d" + this.data.resultList[i] + ".png"
      listsrc.push(dicesrc)
    }
    this.setData({
      dicelist: listsrc,
    })
    var flag = 0;
    if (one == 1 && two == 1 && three == 1 && four == 1 && five == 1 && six == 1) {
      this.setData({
        rank: "对堂！",
      })
      flag = 1
    } else {
      if (four == 1) {
        this.setData({
          rank: "一秀！",
        })
        flag = 1
      }
      if (four == 2) {
        this.setData({
          rank: "二举！",
        })
        flag = 1
      }
      if (four == 3) {
        this.setData({
          rank: "三红！",
        })
        flag = 1
      }
      if (four == 4) {
        if (one == 2) {
          this.setData({
            rank: "状元插金花！",
          })
          flag = 1
        } else {
          this.setData({
            rank: "状元！",
          })
          flag = 1
        }
      }
      if (four == 6) {
        this.setData({
          rank: "六杯红！",
        })
        flag = 1
      }
      if (three == 4) {
        this.setData({
          rank: "四进！",
        })
        flag = 1
      }
      if (three == 5) {
        this.setData({
          rank: "五王！",
        })
        flag = 1
      }
      if (six == 6) {
        this.setData({
          rank: "六杯黑！",
        })
        flag = 1
      }
    }
    if (flag == 0) {
      this.setData({
        rank: "可惜",
      })
    }
    console.log("输出投掷结果:", this.data.rank)
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