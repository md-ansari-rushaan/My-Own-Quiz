class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("yellow");
    //write code to show a heading for showing the result of Quiz
    textSize(25);
    fill("black");
    text("Result Of Quiz",300,30);
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants!=undefined){
      //write code to add a note here
      for(var plr in allContestants){
        console.log("it is going");
        var correctAnswer = "2";
        if(correctAnswer == allContestants[plr].answer){
          textSize(20);
          fill("Green");
          text(allContestants[plr].name+" = Enter "+allContestants[plr].answer+" which is correct",150,300);
        }
        else{
          textSize(20);
          fill("red");
          text(""+allContestants[plr].name+" = Enter "+allContestants[plr].answer+" which is not correct",150,350);
        }
      }
    }

    //write code to highlight contest who answered correctly
    
  }

}
