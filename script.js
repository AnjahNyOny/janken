/*
    GET a random number between 0 and 2
    MAP the number to rock, paper and scisors
*/

function getComputerChoice() {
    cChoice.setAttribute("style", "")
    let res = Math.floor(Math.random() * 3);
    switch (res) {
        case 0:
            cChoice.setAttribute("style",
                `height: 80px; width: 80px; cursor: pointer;
                background: url('./img/rock-svgrepo-com.svg');
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;`)
            return "rock";
            break;
        case 1:
            cChoice.setAttribute("style",
                `height: 80px; width: 80px;
                background: url('./img/paper-sheet-svgrepo-com.svg');
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;`)
            return "paper";
            break;
        case 2:
            cChoice.setAttribute("style",
                `height: 80px; width: 80px;
                background: url('./img/scissors_1230737.svg');
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;`)
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

const hChoice = document.querySelector("#humanChoice")
const cChoice = document.querySelector("#compChoice")


const cScore = document.querySelector("#computerScore");
const robotText = document.querySelector("#robotText");
const hScore = document.querySelector("#humanScore");
const humanText = document.querySelector("#humanText");
humanText.textContent = `Nenareo : ${humanScore}`;
hScore.setAttribute("style",
    `height: 80px; width: 80px;
    background: url('./img/face-with-rolling-eyes-svgrepo-com.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;`)
robotText.textContent = `Robot : ${computerScore}`;
cScore.setAttribute("style",
    `height: 80px; width: 80px;
        background: url('./img/robot-svgrepo-com.svg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;`)
const updateScore = () => {
    robotText.textContent = `Robot : ${computerScore}`;
    humanText.textContent = `Nenareo : ${humanScore}`;
}

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
    let res = playRound("rock", getComputerChoice());
    hChoice.setAttribute("style",
        `height: 80px; width: 80px; cursor: pointer;
    background: url('./img/rock-svgrepo-com.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;`)
    if (res === "win") {
        result.textContent = "Nandresy an!";
        humanScore++;
    } else if (res === "lost") {
        result.textContent = "Hehe resy kkk!";
        computerScore++;
    } else {
        result.textContent = "Mba kely tsa resy oe zay!"
    }
    updateScore();
    checkWinner();
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
    let res = playRound("paper", getComputerChoice());
    hChoice.setAttribute("style",
        `height: 80px; width: 80px; cursor: pointer;
        background: url('./img/paper-sheet-svgrepo-com.svg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;`)
    if (res === "win") {
        result.textContent = "Nandresy an!";
        humanScore++;
    } else if (res === "lost") {
        result.textContent = "Hehe resy kkk!";
        computerScore++;
    } else {
        result.textContent = "Mba kely tsa resy oe zay!"
    }
    updateScore();
    checkWinner();
});

const scisorsBtn = document.querySelector("#scisors");
scisorsBtn.addEventListener("click", () => {
    let res = playRound("scisors", getComputerChoice());
    hChoice.setAttribute("style",
        `height: 80px; width: 80px; cursor: pointer;
    background: url('./img/scissors_1230737.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;`)
    if (res === "win") {
        result.textContent = "Nandresy an!";
        humanScore++;
    } else if (res === "lost") {
        result.textContent = "Hehe resy kkk!";
        computerScore++;
    } else {
        result.textContent = "Mba kely tsa resy oe zay!"
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
const restart = document.querySelector(".restart")

const checkWinner = () => {

    const resetBtn = document.createElement("button");
    const main = document.querySelector("main")
    if (humanScore === 3) {
        disableButtons();
        finalRes.textContent = "Eny e, kely mba nandresy!";
        restart.appendChild(resetBtn);
        resetBtn.textContent = "Ao mamerena";
        resetBtn.setAttribute("style",
            `background: #878585;
            cursor: pointer;
            padding: 5px;
            color: #ebebeb;
            border: 1px solid #ebebeb;`)
        resetBtn.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            enableButtons();
            updateScore();
            resetBtn.remove();
            finalRes.textContent = "";
            result.textContent = "";
            hChoice.setAttribute("style", "")
            cChoice.setAttribute("style", "")
        });
    } else if (computerScore === 3) {
        disableButtons();
        finalRes.textContent = "Mba nandra koa ka !!!";
        restart.appendChild(resetBtn);
        resetBtn.textContent = "Ao mamerena";
        resetBtn.setAttribute("style",
            `background: #878585;
                cursor: pointer;
            padding: 5px;
            color: #ebebeb;
            border: 1px solid #ebebeb;`)
        resetBtn.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            enableButtons();
            updateScore();
            resetBtn.remove();
            finalRes.textContent = "";
            result.textContent = "";
            cChoice.setAttribute("style", "")
            hChoice.setAttribute("style", "")
        });
    } else {
        finalRes.textContent = "";
    }

}

