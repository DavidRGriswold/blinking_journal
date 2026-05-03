setInterval(() => {
    console.log("playing");
    let sound = document.getElementById("sound");
    let face = document.getElementById("face");
    sound.play();
    face.classList.remove("go");
    face.offsetWidth;
    face.classList.add("go");
}, 90000);

document.getElementById("face").addEventListener("animationstart", () => {
    document.getElementById("journal").classList.remove("blink");
});
document.getElementById("face").addEventListener("animationend", () => {
    document.getElementById("journal").classList.add("blink");
});