// the two button of player one and player two
let b1 = document.querySelector("#b1")
let b2 = document.querySelector("#b2")
let resetButton = document.getElementById("reset")
let winScoreDisplay = document.querySelector("#result")

// the content on the head of the page
let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")
let score1 = 0;
let score2 = 0;
let gameOver = false;

//operate the value on the input text box
let finalNum = document.querySelector("input")
let winningScore = 5


b1.addEventListener("click", function () {
    if (!gameOver) {
        score1++;
        if (winningScore === score1) {
            gameOver = true;
            p1.classList.add("winner")
             alert("The winner is player one")
        }

        p1.textContent = score1;
    }
})

b2.addEventListener("click", function () {
    if (!gameOver) {
        score2++;
        if (winningScore === score2){
            gameOver = true;
             p2.classList.add("winner")
             alert("The winner is player two")
        }
        p2.textContent = score2;
    }
})

resetButton.addEventListener("click", function () {
   reset()
})
function reset() {
     p1.textContent = 0;
     p2.textContent = 0;
     score1 = 0;
     score2 = 0;
     p1.classList.remove("winner")
     p2.classList.remove("winner")
     gameOver = false;
}

finalNum.addEventListener("change", function () {
    winScoreDisplay.textContent = finalNum.value;
    winningScore = Number(finalNum.value)
    reset();
})