"use strict";

///////////////////////////////////////

/* 
ЗАДАЧА: 
Создайте игру в угадай число.


Удачи)
*/

const number = document.querySelector(".number")
const score = document.querySelector(".score")
const highScore = document.querySelector(".highscore")

let scoreValue = score.innerHTML
let highScoreValue = highScore.innerHTML

// btn
const check = document.querySelector(".check")
const again = document.querySelector(".again")


// input
let guess = document.querySelector(".guess")

// получаем рандомное число

let randomNumber = Math.round(Math.random() * 20 + 1)
console.log(randomNumber)


again.addEventListener('click', () => {
    randomNumber = Math.round(Math.random() * 20 + 1)
    scoreValue= 20
    score.innerHTML = scoreValue

    console.log(randomNumber)
})

check.addEventListener("click", () => {

    const guessValue = Number(guess.value)

    if (guessValue === randomNumber) {
        console.log("ты выиграл")

        highScoreValue = (20 - scoreValue) + 1
        highScore.innerHTML = highScoreValue

        if(scoreValue){

        }
        scoreValue = scoreValue - 1
        score.innerHTML = scoreValue
    } else {

        if (scoreValue > 0) {

            scoreValue = scoreValue - 1
            score.innerHTML = scoreValue
            console.log("Попробуй снова")

        } else {

            score.innerHTML = scoreValue
            console.log("ты проиграл")

        }

    }
})



