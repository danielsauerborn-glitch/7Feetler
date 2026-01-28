const box = document.getElementById("box");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const gameArea = document.getElementById("gameArea");

let score = 0;
let time = 30;

function moveBox() {
    const x = Math.random() * (gameArea.clientWidth - 50);
    const y = Math.random() * (gameArea.clientHeight - 50);
    box.style.left = x + "px";
    box.style.top = y + "px";
}

box.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveBox();
});

const timer = setInterval(() => {
    time--;
    timeDisplay.textContent = time;

    if (time <= 0) {
        clearInterval(timer);
        box.style.display = "none";
        alert("⏱️ Zeit vorbei! Dein Score: " + score);
    }
}, 1000);

moveBox();
