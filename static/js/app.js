const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
let timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');
let finalScore = document.getElementById("final-hit");

let result = 0;
let currentTime = 60;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole');
    });

    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole');

    hitPosition = randomPosition.id;
}


square.forEach(id=>{
    id.addEventListener('mouseup' , () => {
        if(id.id == hitPosition){
            result = result + 1;
            score.textContent = "Your Score: " + result;
        }
    })
})

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 800)
}

moveMole() 

function countDown(){
    currentTime-- ;
    timeLeft.textContent = "Seconds left: " + currentTime;

    if(currentTime == 0){
        
        alert(`You hit ${result} moles`);   
        currentTime = 60;
        result = 0;
        score.textContent = "Your Score: " + result;

    }
}

let timerId = setInterval(countDown, 1000);