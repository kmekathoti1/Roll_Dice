const buttonEl=document.getElementById("roll-dice")

const historyList=[]
const diceHistoryEl=document.getElementById("dice-history")

function getDiceFace(randomNum) {
    switch(randomNum){
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
            
    }
}
function updateRollHistory(){
    diceHistoryEl.innerHTML=""
    for (let i=0;i<historyList.length;i++){
        const listItem=document.createElement("li")
        listItem.innerHTML=`Roll ${i+1}: <span> ${getDiceFace(historyList[i])}</span>`
        diceHistoryEl.appendChild(listItem)
    }
    
}
function rollDice(){
let randomNum=Math.floor(Math.random()*6)+1
const diceFace=getDiceFace(randomNum)
diceEl.innerHTML=diceFace
historyList.push(randomNum)
updateRollHistory()
}

const diceEl=document.getElementById("dice")
buttonEl.addEventListener("click",()=>{
    diceEl.classList.add("roll-animation")
    setTimeout(()=>{
        diceEl.classList.remove("roll-animation")
        rollDice()
    },1000)
})