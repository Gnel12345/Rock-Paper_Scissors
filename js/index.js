const handOptions = {
"rock" : "/assets/Rock.png",
"paper" : "/assets/Paper.png",
"scissors" : "/assets/Scissors.png"
}
const winmusic = new Audio('audio/winner.mp3');
const losemusic = new Audio('audio/loser.mp3');
const tryagain = new Audio("audio/try_again.mp3");

let Score = 0;


const pickUserHand = (hand) => {
    console.log(hand);

    //hide current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    //show New Game
    let contest = document.querySelector(".contest");
    contest.style.display="flex";

    //set User pick
   
    document.getElementById('userPickImage').src = handOptions[hand];

    let house = pickHouseHand(hand);
    
    
}

const  pickHouseHand = (hand) => {
    let hands = ["rock", "paper", "scissors"]
    let house = hands[Math.floor(Math.random() * hands.length)]
console.log("House",house);

    document.getElementById('housePicked').src = handOptions[house];
    referee(hand,house);
    
}

const referee = (hand,house) => {
if(hand == "paper" && house == "scissors"){
    setDecision("You Lose");
    losemusic.play();

} if (hand == "paper" && house =="rock") {
 setDecision("You Win");
 setScore(Score + 1); 
winmusic.play();
}if (hand == "paper" && house == "paper") {
    setDecision("It's a tie!");
    tryagain.play();
  }
  if (hand == "rock" && house == "scissors") {
    setDecision("YOU WIN!");
    setScore(Score + 1);
    winmusic.play();
  }
  if (hand == "rock" && house == "paper") {
    setDecision("YOU LOSE!");
    losemusic.play();
  }
  if (hand == "rock" && house == "rock") {
    setDecision("It's a tie!");
    tryagain.play();
  }
  if (hand == "scissors" && house == "scissors") {
    setDecision("It's a tie!");
    tryagain.play();
  }
  if (hand == "scissors" && house == "rock") {
    setDecision("YOU LOSE!");
    losemusic.play();
  }
  if (hand == "scissors" && house == "paper") {
    setDecision("YOU WIN!");
    setScore(Score + 1);
    winmusic.play();
  }



}

const setDecision = (decision) => {
//console.log(decision);

document.querySelector(".decision h1").innerText = decision;

}

const setScore = (score) => {
  Score = score;
    document.querySelector(".score h1").innerText = score;
}

const restartGame = () => {
  let hands = document.querySelector(".hands");
  hands.style.display = "flex";

  //show New Game
  let contest = document.querySelector(".contest");
  contest.style.display="none";
}





