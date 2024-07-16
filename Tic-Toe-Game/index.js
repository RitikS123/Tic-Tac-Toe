let boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let cnt = 0;

let winner = [
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];



function disableBoxes(){
    for(let box of boxes){
        box.disabled = true;
    }
};


function showWinner(winner){
    msg.innerText = `Congratulations!, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
};

function checkWinner(){
    for(let pattern of winner){
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if(posval1!="" && posval2!="" && posval3!=""){
            if(posval1===posval2 && posval2==posval3){
                showWinner(posval1);
                return true;
            }
        }
    }
};

function gameDraw(){
    msg.innerText = `Oops! Game Got Drawn`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText = "O";
            box.disabled = true;
            turn0 = false;
        }
        else{
            box.innerText = "X";
            box.disabled = true;
            turn0 = true;
        }
        cnt++;
        let isWinner = checkWinner();

        if(cnt===9 && !isWinner){
            gameDraw();
        }
    })
});

function enableBtn(){
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

function resetGame(){
    turn0 = true;
    enableBtn();
    msgContainer.classList.add("hide");
}

resetbtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);