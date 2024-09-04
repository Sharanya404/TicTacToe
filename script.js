let box= document.querySelectorAll(".boxes");
let resetBtn= document.querySelector(".resetbtn");
let msgContainer= document.querySelector(".msg-container");
let msgshow= document.querySelector("#msg");
let btnreset= document.querySelector(".resetbtn");

let turnX= true;

const winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

box.forEach((boxes) => {
    boxes.addEventListener("click",() => {
        if(turnX){
            boxes.innerText= "X";
            turnX= false;
        }
        else{
            boxes.innerText= "O";
            turnX= true;
        }
        boxes.disabled=true;

        checkWinner();
    })
});

const checkWinner= () => {
    for(let pattern of winPatterns){
        let pos1Val= box[pattern[0]].innerText;
        let pos2Val= box[pattern[1]].innerText;
        let pos3Val= box[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" &&pos3Val != "" ){
            if(pos1Val=== pos2Val 
                && pos2Val=== pos3Val){
                showWinner(pos1Val);
            }
            // else{
            //     matchDraw();
            // }
        }
    }
}

const disableBoxes= () =>{
    for(let boxes of box){
        boxes.disabled=true;
    }
}
const enableBoxes= () =>{
    for(let boxes of box){
        boxes.disabled=false;
        boxes.innerText="";
    }
}
const matchDraw =() =>{
    msg.innerText= ` Match is Draw `;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const showWinner=(winner) => {
    msg.innerText= ` Congratulations, Winner is ${winner} `;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const restartGame=() =>{
    turnX=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
btnreset.addEventListener("click",restartGame);