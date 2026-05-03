let countdown;
let time = 90;
let count = time;

setInterval(go, time * 1000);
go();

function go() {
    console.log("playing");
    let sound = document.getElementById("sound");
    let face = document.getElementById("face");
    let countdownText = document.getElementById("countdown");
    sound.play();
    face.classList.remove("go");
    face.offsetWidth;
    face.classList.add("go");
    clearInterval(countdown);
    count = time;
    countdownText.innerText = count;
    countdown = setInterval(() => {
        count--;
        countdownText.innerText = count;
    }, 1000);
}

document.getElementById("face").addEventListener("animationstart", () => {
    document.getElementById("journal").classList.remove("blink");
});
document.getElementById("face").addEventListener("animationend", () => {
    document.getElementById("journal").classList.add("blink");
});