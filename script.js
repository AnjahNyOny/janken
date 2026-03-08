/*
    GET a random number between 0 and 2
    MAP the number to rock, paper and scisors
*/

function getComputerChoice() {
    let res = Math.floor(Math.random() * 3);
    switch (res) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scisors";
            break;
        default:
            return "Nisy erreur";
            break;
    }
}
// console.log(getComputerChoice());

/*
    GET the user's input
*/


// function getHumanChoice() {
//     let res = window.prompt("Enter your choice");
//     console.log(`Your choice ${res}`);

//     return res;
// }
// console.log(
//     getHumanChoice()
// );


/*
    MAKE the user's choice case insensitive -> to lowercase
    SET two choices by CALLING the two functions for choices
    COMPARE the choices using condition
    RETURN the result 
*/



function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    console.log(`human: ${humanChoice} VS robot: ${computerChoice}`);
    let res = "";

    if (humanChoice === "rock" && computerChoice === "scisors") {
        console.log("Rocks beats scisors, You Win!");
        return res = "win";

    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Rocks loses to paper, You Lost!");
        return res = "lost";

    } else if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Both Rock : Draw!");
        return res = "draw";

    } else if (humanChoice === "paper" && computerChoice === "scisors") {
        console.log("Paper loses to scisors, You Lost");
        return res = "lost";
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Both Paper : Draw!");
        return res = "draw";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Paper beats Rock, You Win!");
        return res = "win";
    }

    else if (humanChoice === "scisors" && computerChoice === "paper") {
        console.log("Paper beats Rock, You Win!");
        return res = "win";
    }
    else if (humanChoice === "scisors" && computerChoice === "rock") {
        console.log("Scisors loses to Rock, You Lose!");
        return res = "lost";
    }
    else if (humanChoice === "scisors" && computerChoice === "scisors") {
        console.log("Both Scisors: Draw");
        return res = "draw";
    } else {
        return ("Erreur");
    };
}

const result = document.querySelector("#roundRes");


let humanScore = 0;
let computerScore = 0;

const cScore = document.querySelector("#computerScore");
const hScore = document.querySelector("#humanScore");
const updateScore = () => {
    cScore.textContent = `Your Score : ${humanScore}`;
    hScore.textContent = `Computer Score : ${computerScore}`;
}

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
    let res = playRound("rock", getComputerChoice());
    if (res === "win") {
        result.textContent = "win";
        humanScore++;
    } else if (res === "lost") {
        result.textContent = "lost";
        computerScore++;
    } else {
        result.textContent = "draw"
    }
    updateScore();
    checkWinner();
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
    let res = playRound("paper", getComputerChoice());
    if (res === "win") {
        result.textContent = "win";
        humanScore++;
    } else if (res === "lost") {
        result.textContent = "lost";
        computerScore++;
    } else {
        result.textContent = "draw"
    }
    updateScore();
    checkWinner();
});

const scisorsBtn = document.querySelector("#scisors");
scisorsBtn.addEventListener("click", () => {
    let res = playRound("scisors", getComputerChoice());
    if (res === "win") {
        result.textContent = "win";
        humanScore++;
    } else if (res === "lost") {
        result.textContent = "lost";
        computerScore++;
    } else {
        result.textContent = "draw"
    }
    updateScore();
    checkWinner();
});

const disableButtons = () => {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scisorsBtn.disabled = true;
}

const enableButtons = () => {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scisorsBtn.disabled = false;
}

const finalRes = document.querySelector("#res");

const checkWinner = () => {

    const resetBtn = document.createElement("button");
    const main = document.querySelector("main")
    if (humanScore===3) {
        disableButtons();
        finalRes.textContent = "Congrats! You won";
        main.appendChild(resetBtn);
        resetBtn.textContent = "Recommancer";
        resetBtn.addEventListener("click", () => {
            humanScore = 0; 
            computerScore = 0; 
            enableButtons(); 
            updateScore(); 
            resetBtn.remove();
            finalRes.textContent = "";
            result.textContent = "";
        });    
    } else if (computerScore===3) {
        disableButtons();
        finalRes.textContent = "Mba nandra koa ka !!!";
        main.appendChild(resetBtn);
        resetBtn.textContent = "Recommancer";
        resetBtn.addEventListener("click", () => {
            humanScore = 0; 
            computerScore = 0; 
            enableButtons(); 
            updateScore(); 
            resetBtn.remove();
            finalRes.textContent = "";
            result.textContent = "";
        });
    } else {
        finalRes.textContent = "";
    }
    
}

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;


//     for (let i = 0; i < 5; i++) {
//         console.log(`Round: ${i + 1}`);

//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         let res = playRound(humanSelection, computerSelection);
//         // console.log(`Result: ${res}`);

//         switch (res) {
//             case "win":
//                 humanScore++;
//                 console.log(`HumanScore: ${humanScore}`);
//                 console.log(`ComputerScore: ${computerScore}`);

//                 break;
//             case "lost":
//                 computerScore++;
//                 console.log(`HumanScore: ${humanScore}`);
//                 console.log(`ComputerScore: ${computerScore}`);
//                 break;
//             default:
//                 console.log(`HumanScore: ${humanScore}`);
//                 console.log(`ComputerScore: ${computerScore}`);
//                 break;
//         }

//     }

//     if (humanScore > computerScore) {
//         console.log(`Final result: You win ${humanScore} - ${computerScore}`);
//     } else if (humanScore < computerScore) {
//         console.log(`Final result: You lose ${humanScore} - ${computerScore}`);
//     } else {
//         console.log(`Draw: ${humanScore} - ${computerScore}`);
//     }
// }
