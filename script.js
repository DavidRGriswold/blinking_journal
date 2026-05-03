let countdown;
let paused = false;
let time = 90;
let count = time;
let pauseButton = document.getElementById("pauseButton");
let faceImg = document.getElementById("face");
let journal = document.getElementById("journal");

faceImg.addEventListener("animationstart", () => {
    journal.classList.remove("blink");
});
faceImg.addEventListener("animationend", () => {
    journal.classList.add("blink");
});

pauseButton.addEventListener("click", () => {
    clearInterval(countdown);
    pauseButton.innerHTML = "▶";
    journal.classList.remove("blink");
    if (paused) {
        clearInterval(countdown);
        countdown = setInterval(go, 1000);
        pauseButton.innerHTML = "⏸";
        journal.classList.add("blink");
    }
    paused = !paused;
});

countdown = setInterval(go, 1000);
go();

function go() {
    let countdownText = document.getElementById("countdown");
    count--;
    if (count <= 0) {
        console.log("playing");
        let sound = document.getElementById("sound");
        let face = document.getElementById("face");
        sound.play();
        face.classList.remove("go");
        face.offsetWidth;
        face.classList.add("go");
        count = time;
    }
    countdownText.innerText = count;
}

