function sayHello(){
  var response=prompt("请输入你的姓名");
  alert(response+"，你好啊！不知不觉，《集合啦！动物森友会》已经在任天堂Switch平台上发售两年多了。无论是否已经上岛，都可以来这里测测你的岛民等级狸！")
};


function scorecounting(){
  var score=0;
  var question=document.getElementsByClassName("q");
  for(var i=0;i<question.length;i++){
    var result=0;
    var answer=document.getElementsByName("A"+(i+1));
    for(var j=0;j<answer.length;j++){
      if (answer[j].checked){
        if (answer[j].value==1)
        result=1
        score+=result
        }
      }
    }

  if (score==0){
    alert("【你做对了"+score+"道题。岛民状态是：还没上岛】\n尽管你对《集合啦！动物森友会》还不太熟悉，但没有关系！期待你玩到游戏，上岛开始新生活的那天。")
    }
  else if (score==1){
    alert("【你做对了"+score+"道题。岛民等级是：预备岛民】\n你已经对《集合啦！动物森友会》有了初步的了解，慢慢来，一定会越来越熟悉岛上的生活。")
    }
  else if (score==2){
    alert("【你做对了"+score+"道题。岛民状态是：新手岛民】\n你已经对《集合啦！动物森友会》的生活有了一定体验，享受这里的日子吧。加油！")
    }
  else if (score==3){
    alert("【你做对了"+score+"道题。岛民状态是：成长岛民】\n你正在掌握更多《集合啦！动物森友会》的知识，加油让自己的无人岛生活更美好呀！")
    }
  else if (score==4){
    alert("【你做对了"+score+"道题。岛民状态是：代表岛民】\n你对《集合啦！动物森友会》了解很多了，小动物居民们都想推荐你成为岛民代表啦！")
    }
  else{
    alert("【你做对了"+score+"道题。岛民状态是：专家岛民】\n你对《集合啦！动物森友会》非常了解，甚至知道小动物的秘密了。你就是动森专家！")
  }
}
