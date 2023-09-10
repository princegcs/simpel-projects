const firstNumber = Math.ceil(Math.random()*10);
const secondNumber = Math.ceil(Math.random()*10);

const question = document.getElementById("question");
const form = document.getElementById("form");
const input =document.getElementById("input");
const IDscore = document.getElementById("score");
const IDpop = document.getElementById("pop");

// IDpop.innerText = ``;
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

IDscore.innerText = `Score: ${score}`

question.innerText = `What is ${firstNumber} multiply by ${secondNumber}?`

const correctAnswer = firstNumber * secondNumber;


form.addEventListener("submit", ()=>{
    const userAnswer = input.value;
    if(userAnswer == correctAnswer){
        score++;
        updateScore()
        
        
        alert("correct answer");
        
        
        
    }else{
        score--;
        updateScore()
        alert("wrong answer")
       
        
    }

});

function updateScore(){
    localStorage.setItem("score", JSON.stringify(score))
}