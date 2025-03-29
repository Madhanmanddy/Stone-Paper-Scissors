let userscore = 0;
let compscore = 0;


const choices = document.querySelectorAll(".choice1");
let msg = document.getElementById("msg");

let uscore = document.getElementById("u-score");
let cscore = document.getElementById("c-score");

const gencompchoice = ()=>{
    const options = ["stone", "paper", "scissor"];
    const random = Math.floor(Math.random()*3);
    return options[random];
}

const drawgame = ()=>{
    // console.log("Game was draw");
    msg.innerText = "Game was Draw, Play again";
    msg.style.backgroundColor = "black";

}

const showwinner = (userwin, userchoice, compchoice)=>{
    if(userwin){
        // console.log("you win!");
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userscore++;
        uscore.innerText = userscore;

    }
    else{
        // console.log("you Lose");
        msg.innerText = `You Loss ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
        compscore++;
        cscore.innerText = compscore;
    }
}

const playgame = (userchoice)=>{
    // console.log("userchoice" , userchoice);
    const compchoice = gencompchoice();
    // console.log("computer choice" , compchoice);

    if(userchoice == compchoice){
          drawgame();
    }
    else{
        userwin = true;
        if(userchoice ==="stone"){
            // scissors , paper
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            // rock , scissors
            userwin = compchoice === "scissor" ? false : true;
        }
        else{
            userwin = compchoice === "stone" ? false : true;
        }
        // console.log("userwin" , userwin);
        showwinner(userwin , userchoice, compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
});