var num = ""
var p=1
var determine = ""

Page({
    /**
     * 页面的初始数据
     */
    data: {
      p:1, //第几个玩家在游戏中  0表示都投掷完毕
      statu:0, //状态：0创建房间界面，1未开始，2投掷中, 3出结果
      result:[],
      determine:"",//成绩
      determine1:"",
      determine2:"",
      determine3:"",
      score1:"",
      score2:"",
      score3:"",
      score4:"",
      select:false,
      nums: [
        '2人',
        '3人',
        '4人',
       ],

       userName:[
        '玩家1',
        '玩家2',
        '玩家3',
        '玩家4'
       ],

      // 骰子数组
      dices: [
        '/assets/images/dice/dongtu.gif',
        '/assets/images/dice/d1.png',
        '/assets/images/dice/d2.png',
        '/assets/images/dice/d3.png',
        '/assets/images/dice/d4.png',
        '/assets/images/dice/d5.png',
        '/assets/images/dice/d6.png',
      ],
      
      //博饼成绩图
      dicelist:[
        '/assets/images/dice/d1.png',
        '/assets/images/dice/d2.png',
        '/assets/images/dice/d3.png',
        '/assets/images/dice/d4.png',
        '/assets/images/dice/d5.png',
        '/assets/images/dice/d6.png',
      ],
    },

    /*下拉框*/
    bindShowMsg() {
      this.setData({
      select: !this.data.select
      })
    },
    mySelect(myse) {
      console.log(myse)
      var name = myse.currentTarget.dataset.name
      console.log("选择人数",name)
      this.setData({
      num: name,
      select: false
      })
      num = name
    },

      //开始游戏
     click(){
      console.log("确定房间人数：", num)
        if(!this.data.num){
            this.setData({
              infoMess:'请选择玩家人数！',
            })
          }else{
            this.setData({
                infoMess:'',
                statu:1
            })
            console.log("创建成功！")
          }
      },

    click1(){
        console.log("点击投掷")
        this.setData({
          statu: 2,
          finallydetermine:[]
        })
    },

    click2(){
      console.log("停！")
      this.setData({
        statu: 3
      })
      this.result();
  },

    random(min,max){//随机数函数
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()*(max-min+1)+min);
    },

    result(){
      var list=[];
      var listsrc=[];
      var countList=[0,0,0,0,0,0,0];//数组用于存储一到六
      for(var i=0;i<6;i++){
          var t=this.random(1,6);
          list.push(t);
         countList[t]++;
        }
      this.setData({
        result:list
      })
      for(var i=0;i<6;i++){
        var dicesrc = "/assets/images/dice/d" + this.data.result[i] + ".png"
        listsrc.push(dicesrc)
      }
      this.setData({
        dicelist:listsrc,
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
          determine: "倒霉蛋！",
        })
      }
      // console.log(this.data.result)
      console.log("输出投掷结果:",this.data.determine)
      determine=this.data.determine
    },

    click3(){
      this.setData({
        statu:1
      })
    },
  
  next2(){ //轮到玩家2
    this.setData({
      p:2,
      statu:1,
      determine1:determine,
    })
  },
  next3(){ //轮到玩家3
    this.setData({
      p:3,
      statu:1,
      determine2:determine,
    })
  },
  next4(){//轮到玩家4
    this.setData({
      p:4,
      statu:1,
      determine3:determine,
    })
  },

  finish(){ //点击生成结果
    this.setData({
      p:0
    })
    if(num=='2人'){
      this.setData({
        determine2:determine,
      })
    }
    if(num=='3人'){
      this.setData({
        determine3:determine,
      })
    }
    if(num=='4人'){
      this.setData({
        determine4:determine,
      })
    }
    console.log("排名完成")
  },
}
)