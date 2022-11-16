let number = Math.trunc(Math.random() * 20) + 1
const dnumber = document.querySelector(".number")
const checkbtn = document.querySelector(".check")
const guessnumber = document.querySelector(".guess")
const msg = document.querySelector(".message")
const score = document.querySelector(".score")
const again = document.querySelector(".again")
const hs = document.querySelector(".highscore")
let point = 20
let highscore = 0
checkbtn.addEventListener("click", guess)
again.addEventListener("click", reset)
console.log(number)

function guess() {
    if (!guessnumber.value) {
        msg.innerHTML = "you haven't  guess any  number"
    } else if (guessnumber.value > number) {
        if (point > 1) {
            msg.innerHTML = " you guess high number"
            point = point - 1
            score.innerHTML = point
        } else {
            msg.innerHTML = " you loss"

        }
    } else if (guessnumber.value < number) {
        if (point > 1) {
            msg.innerHTML = " you guess low number"
            point = point - 1
            score.innerHTML = point
        } else {
            msg.innerHTML = " you loss"

        }


    } else {
        msg.innerHTML = " correct number"
        dnumber.innerHTML = number
        checkbtn.style.display = "none"
        score.innerHTML = 20
        if (highscore < point) {
            highscore = point
            hs.innerHTML = highscore
        }

    }
}

function reset() {
    console.log(number)

    number = Math.trunc(Math.random() * 20) + 1
    point = 20
    score.innerHTML = 20
    msg.innerHTML = "Start guessing"
    dnumber.innerHTML = "?"
    checkbtn.style.display = "block"
    guessnumber.value = ""

}