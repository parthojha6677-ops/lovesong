const intro = document.getElementById("intro");
const hero = document.getElementById("hero");
const story = document.getElementById("story");
const whyYou = document.getElementById("whyYou");
const memories = document.getElementById("memories");
const letter = document.getElementById("letter");


// Hide sections initially

story.style.display = "none";
whyYou.style.display = "none";
memories.style.display = "none";
letter.style.display = "none";



// INTRO → HERO

document.getElementById("continueBtn").onclick = () => {

    hero.classList.remove("hidden");

    intro.style.opacity = "0";


    setTimeout(() => {

        intro.style.display = "none";

    }, 800);

};




// HERO → STORY

document.getElementById("startBtn").onclick = () => {

    hero.style.display = "none";

    story.style.display = "flex";

};




// STORY → WHY YOU

document.getElementById("storyNext").onclick = () => {

    story.style.display = "none";

    whyYou.style.display = "flex";

};




// WHY YOU → MEMORIES

document.getElementById("memoryBtn").onclick = () => {

    whyYou.style.opacity = "0";


    setTimeout(() => {

        whyYou.style.display = "none";

        memories.style.display = "flex";

    }, 800);

};




// MEMORIES → LOVE LETTER

document.getElementById("letterBtn").onclick = () => {

    memories.style.display = "none";

    letter.style.display = "flex";

};




// MUSIC CONTROL

const song = document.getElementById("loveSong");
const musicBtn = document.getElementById("musicBtn");
const stopBtn = document.getElementById("stopBtn");



musicBtn.onclick = () => {

    song.play()
    .then(() => {

        musicBtn.innerHTML = "🎵 Playing Our Song ❤️";

    })
    .catch((error) => {

        console.log("Audio error:", error);

    });

};



stopBtn.onclick = () => {

    song.pause();

    song.currentTime = 0;

    musicBtn.innerHTML = "🎵 Play Our Song ❤️";

};