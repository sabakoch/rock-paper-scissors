//map of the images
const choisOption = {
    "rock": "rock.png",
    "paper": "paper.png",
    "sisers": "sisors.png"
}

let points = 0;

function choise(hand){

    //hide the div withe choises 
    let game = document.querySelector(".game");
    game.style.display = "none";

    //show the div withe result
    let result = document.querySelector(".results");
    result.style.display = "grid";

    //what user picked
    document.getElementById('userPiced').src = choisOption[hand];

    let pchand = pcChoise();

    //this tells who wins
    whoWins(hand, pchand);

    //  this is animacion of scrambling images
    scramble();
    
    // after scrambling this function is seting image of that what pc piced
    setTimeout(() => {
      document.getElementById('pcPiced').src = choisOption[pchand];
      showButton();
    }, 3019);
    
    console.log(choisOption[pchand])
}

// this function scrambles images for wisual efect
function scramble(){
  
  //აქ დავამატე წინასწარ სურათები წინა თამაშის სურათი რომ არ ჩნდეს თვიდან 300 მილიწამის განმავლობაში
  document.getElementById('pcPiced').src = choisOption['rock'];
  setTimeout(() => {
    document.getElementById('pcPiced').src = choisOption['paper'];
  }, 200);
  setTimeout(() => {
    document.getElementById('pcPiced').src = choisOption['sisers'];
  }, 300);

  var startTime = new Date().getTime();
var interval = setInterval(function(){
    if(new Date().getTime() - startTime > 3000){
        clearInterval(interval);
        return;
    }
      setTimeout(() => {
        document.getElementById('pcPiced').src = choisOption['rock'];
      }, 100);
      setTimeout(() => {
        document.getElementById('pcPiced').src = choisOption['paper'];
      }, 200);
      setTimeout(() => {
        document.getElementById('pcPiced').src = choisOption['sisers'];
      }, 300);

}, 300);  

}

//here pc mackes his choise
function pcChoise(){
  let hand = ["rock", "paper", "sisers"];
  let pchand = hand[Math.floor(Math.random() * 3)];

  //what pc picked
  document.getElementById('pcPiced').src = choisOption[pchand];

  return pchand;
}


//this function is adding a shadows if pc wins
function pcWinnShadow(){
  setTimeout(() => {
      var pcchois = document.getElementById("pcPiced");
      pcchois.classList.add('winnerShadow');
  }, 3000);
  
}

//this function is adding shadow if user wins
function userWinnShadow(){
  setTimeout(() => {
      var userchois = document.getElementById("userPiced");
      userchois.classList.add('winnerShadow');
  }, 3000);
  
}

// in his function i see who wins, adding points and some visual efects
function whoWins(hand, pchand){

  // this comand firts hide play agayin button
  playBTN.classList.remove('showPlayButton');

    if (hand == "paper" && pchand == "sisers") {
        youAreA("LOSSER!");
        setScore(points-1);

        deleteStyle();
        pcWinnShadow();
    }
    if (hand == "paper" && pchand == "rock") {
      youAreA("WINNER!");
      setScore(points+1);

      deleteStyle();
      userWinnShadow();
    }
    if (hand == "paper" && pchand == "paper") {
      youAreA("It's a tie!");

      deleteStyle();
      userWinnShadow();
      pcWinnShadow();
    }
    if (hand == "rock" && pchand == "sisers") {
      youAreA("WINNER!");
      setScore(points+1);

      deleteStyle();
      userWinnShadow();
    }
    if (hand == "rock" && pchand == "paper") {
      youAreA("LOSSER!");
      setScore(points-1);

      deleteStyle();
      pcWinnShadow();
    }
    if (hand == "rock" && pchand == "rock") {
      youAreA("It's a tie!");

      deleteStyle();
      userWinnShadow();
      pcWinnShadow();
    }
    if (hand == "sisers" && pchand == "sisers") {
      youAreA("It's a tie!");

      deleteStyle();
      userWinnShadow();
      pcWinnShadow();
    }
    if (hand == "sisers" && pchand == "rock") {
      youAreA("LOSSER!");
      setScore(points-1);

      deleteStyle();
      pcWinnShadow();
    }
    if (hand == "sisers" && pchand == "paper") {
      youAreA("WINNER!");
      setScore(points+1);

      deleteStyle();
      userWinnShadow();
    }
}

//this function changes text to that you win or lose
function youAreA(desision){

  document.querySelector(".winOrLose").innerText = "and you are a...";
  setTimeout(() => {
    document.querySelector(".winOrLose").innerText = desision;
  }, 3000);
}


//this function counts your points
function setScore (point){
  setTimeout(() => {
    points = point
    document.querySelector(".points").innerText = point;
    if (points < -5){
        document.querySelector(".winOrLose").innerText = "you are wery bad at this game";
    }
  }, 3000);
    
}

//this punction starts game agayin
function playAgayn(){
    let game = document.querySelector(".game");
    game.style.display = "grid";

    let result = document.querySelector(".results");
    result.style.display = "none";
}

// this function is showing play again button
let playBTN = document.querySelector(".hiddenPlayButton");
function showButton(){
    playBTN.classList.add('showPlayButton');
}

//this function removes preius winner styles 
function deleteStyle(){

  var userchois = document.getElementById("userPiced");
  var pcchois = document.getElementById("pcPiced");

  userchois.classList.remove('winnerShadow');
  pcchois.classList.remove('winnerShadow');
}


// this function set score to zero
function startAgayn(){
      points = 0;
      document.querySelector(".points").innerText = points;

      //hide the div withe choises 
      let game = document.querySelector(".game");
      game.style.display = "grid";
  
      //show the div withe result
      let result = document.querySelector(".results");
      result.style.display = "none";
}