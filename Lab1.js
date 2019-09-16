console.log("Let's Play Rock! Paper! Scissors!\n");
let compChoice = Math.Random();
let compMove = "";
if(compChoice <= 0.34){
  compMove = "Rock";
}else if(compChoice <= 0.67){
  compMove = "Scissors";
}else if(compChoice <= 1){
  compMove = "Paper";
}
let check = false;
let userMove = "blank";
let userChoice = prompt("Rock, Paper, or Scissors?");
while(check === false){
  if (userChoice === "Rock" || userChoice === "rock"){
    userMove = "Rock";
    check = true;
  } else if (userChoice === "Paper" || userChoice === "paper"){
    userMove = "Paper";
    check = true;
  } else if (userChoice === "Scissors" || userChoice === "scissors"){
    userMove = "Scissors";
    check = true;
  }
  else{
    userChoice = prompt("Error: Please enter Rock, Paper, or Scissors");
  }
}

console.log("Your Move: " + userMove + ".\nComputer Move: " + computerMove + "\n");

if (userMove === "Rock" && computerMove === "Rock"){
  console.log("Draw!, It's a tie");
}else if(userMove === "Paper" && computerMove === "Paper"){
  console.log("Draw!, It's a tie");
}else if(userMove === "Scissors" && computerMove === "Scissors"){
    console.log("Draw!, It's a tie");
}

if (userMove === "Rock"){
    if(computerMove === "Paper"){
        console.log("Computer Wins!");
    }else if(computerMove === "Scissors"){
        console.log("You Win!");
    }
} else if (userMove === "Paper"){
    if(computerMove === "Scissors"){
        console.log("Computer Wins!");
    }else if(computerMove === "Rock"){
        console.log("You Win!");
    }
}else if(userMove === "Scissors"){
    if(computerMove === "Rock"){
        console.log("Computer Wins!");
    }else if(computerMove === "Paper"){
        console.log("You Win!");
    }
}
