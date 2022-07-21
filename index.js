let btns = document.querySelectorAll(".drum");

btns.forEach(btn => {
    btn.addEventListener('click',
    e =>{
        let buttonInnerHTML = btn.innerHTML;
        playSound(buttonInnerHTML);
        playAnimation(buttonInnerHTML);
    })
});

document.addEventListener('keydown', e =>{
    playSound(e.key);
    playAnimation(e.key);
})

function playAnimation(key) {
    let currentKey = document.querySelector("."+key);
    currentKey.classList.add("pressed");
    setTimeout(() => {
        currentKey.classList.remove("pressed");
    }, 100);
}

function playSound(key){
    switch (key) {
        case "w":
            playThisInstrument("sounds/tom-1.mp3");
            break;
        case "a":
            playThisInstrument("sounds/tom-2.mp3");
            break;
        case "s":
            playThisInstrument("sounds/tom-3.mp3");
            break;
        case "d":
            playThisInstrument("sounds/tom-4.mp3");
            break;
        case "j":
            playThisInstrument("sounds/snare.mp3");   
            break;
        case "k":
            playThisInstrument("sounds/crash.mp3");
            break;            
        case "l":
            playThisInstrument("sounds/kick-bass.mp3");
            break;            
        default: console.log(buttonInnerHTML)
    }
}

function playThisInstrument(instrumentName){
    let audio = new Audio(instrumentName);
    audio.play();
}
