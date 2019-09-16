console.log("Let's Play Rock! Paper! Scissors!\n");
let compChoice = Math.random(); 
let compMove = "";
if(compChoice <= 0.34){
  compMove = "Rock";
}else if(compChoice <= 0.67){
  compMove = "Scissors";
}else if(compChoice <= 1){
  compMove = "Paper";
}

//Creating a While loop for user input (not functioning properly under JSbin at the moment)
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
  } // For some reason, there appears to be a slight issue with this while loop in JSBin, not sure why, but it only checks once for this, I am unsure why.
}

console.log("Your Move: " + userMove + ".\nComputer Move: " + compMove + "\n");

if (userMove === "Rock" && compMove === "Rock"){
  console.log("Draw!, It's a tie");
}else if(userMove === "Paper" && compMove === "Paper"){
  console.log("Draw!, It's a tie");
}else if(userMove === "Scissors" && compMove === "Scissors"){
    console.log("Draw!, It's a tie");
}

if (userMove === "Rock"){
    if(compMove === "Paper"){
        console.log("Computer Wins!");
    }else if(compMove === "Scissors"){
        console.log("You Win!");
    }
} else if (userMove === "Paper"){
    if(compMove === "Scissors"){
        console.log("Computer Wins!");
    }else if(compMove === "Rock"){
        console.log("You Win!");
    }
}else if(userMove === "Scissors"){
    if(compMove === "Rock"){
        console.log("Computer Wins!");
    }else if(compMove === "Paper"){
        console.log("You Win!");
    }
}//a bit of a block of code, but it does function, I could have simplified a bit, but it is functional
