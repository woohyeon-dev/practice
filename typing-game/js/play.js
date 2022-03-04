// play
const playTime = document.querySelector(".play__play-time");
const stamina = document.querySelector(".play__current-stamina");
const canvas = document.querySelector(".play__game-board");
const input = document.querySelector(".play__input");
const pause = document.querySelector(".play__pause");
// play-modal
const pauseModal = document.querySelector(".pause-modal");
const pauseModalBtns = Array.from(document.querySelectorAll(".pause-modal__buttons"));

const ctx = canvas.getContext("2d");
const GAME_WIDTH = 566;
const GAME_HEIGHT= 266;
canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

const FRAME = 60;
let animation;
let movingWordArr = [];
let timer = 0;
let currentStamina = 100;
let second = 0;
let minuate = 0;
let wordCnt = 0;
let correct = false;
let godMode = false;

class MovingWord {
    constructor(word, x, y) {
        this.word = word;
        this.x = x;
        this.y = y;
    }
    draw() {
        ctx.font = '15px Open Sans Condensed';
        ctx.fillStyle = "#DDC6B6";
        ctx.fillText(this.word, this.x, this.y);
    }
}

function addPlayScreenEvent() {
    pause.addEventListener('click', handlePause);
    pauseModalBtns.map(button => {
        button.addEventListener('click', handlePauseBtns);
    });
    input.addEventListener('keyup', handleEnter);
}


function handlePause(e) {
    pauseModal.classList.toggle("hidden");
    cancelAnimationFrame(animation);
}

function handlePauseBtns(e) {
    switch(e.target.innerText) {
        case "CONTINUE":
            pauseModal.classList.toggle("hidden");
            runFrame();
            break;
        case "MENU":
            pauseModal.classList.toggle("hidden");
            switchSettingScreen();
            resetGame();
            break;
    }
}

function resetGame() {
    movingWordArr = [];
    timer = 0;
    currentStamina = 100;
    stamina.style.width = currentStamina + '%';
    second = 0;
    minuate = 0;
    wordCnt = 0;
    playTime.innerText = `${String(minuate).padStart(2, "0")}:${String(second).padStart(2,"0")}`;
}

function switchSettingScreen() {
    setting.style.display = "block";
    playSection.style.display = "none";
}

function handleEnter(e) {
    let key = e.key || e.keyCode;
    if (key === 'Enter' || key === 13) {
        if(input.value === "무적" || input.value === "invincible" || input.value === "むてき") {
            invincible();
        } else if (input.value === "회복" || input.value === "heal" || input.value === "かいふく") {
            heal();
        } else if (input.value === "정지" || input.value === "freeze" || input.value === "ていし") {
            screenFreeze();
        } else {
            movingWordArr.forEach((a, i, o) => {
                if(input.value === a.word) {
                    o.splice(i, 1);
                    input.value = "";
                    correct = true;
                    wordCnt++;
                }
            });
        }
        skill.innerText = skillText + skillArr.join(", ") + " )";
        
        if(correct) {
            input.style.boxShadow = "0 0 5px darkgreen"
            input.style.borderColor= "darkgreen";
            correct = false;
        } else {
            input.style.boxShadow = "0 0 5px red";
            input.style.borderColor= "red";
        }
        input.value = "";
    }
}

function invincible() {
    if(skillArr.includes(input.value) && currentStamina != 0) {
        godMode = true;
        stamina.style.backgroundColor = "goldenrod";
        canvas.style.borderColor = "goldenrod";
        setTimeout(() => {
            godMode = false;
            stamina.style.backgroundColor = "rgba(151,188,98,0.7)";
            canvas.style.borderColor = "#DDC6B6";
        }, 4000);
        skillArr = skillArr.filter(word => word != input.value);
    }
}

function heal() {
    if(skillArr.includes(input.value) && currentStamina != 0) {
        currentStamina += 50;
        if(currentStamina > 100) {
            currentStamina = 100;
        }
        skillArr = skillArr.filter(word => word != input.value);
        stamina.style.width = currentStamina + '%';
    }
}

function screenFreeze() {
    if(skillArr.includes(input.value) && currentStamina != 0) {
        cancelAnimationFrame(animation);
        setTimeout(runFrame, 4000);
        skillArr = skillArr.filter(word => word != input.value);
    }
}

function runFrame() {
    animation = requestAnimationFrame(runFrame);
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if(timer%FRAME == 0) {
        controlPlayTime();

        let index = timer/FRAME - 1;
        if(index === wordArr.length - 1) {
            timer = 0;
        }
        shuffle(wordArr);
        // x축은 0 고정, y축은 18~265의 랜덤 수
        let movingWord = new MovingWord(wordArr[index], 0, Math.floor((Math.random()*247)+18));
        movingWordArr.push(movingWord);
    }

    checkCollision();
}

function controlPlayTime() {
    second++;
    if(second == 60) {
        minuate++;
        second = 0;
    }
    playTime.innerText = `${String(minuate).padStart(2, "0")}:${String(second).padStart(2,"0")}`;
    if(minuate === 3) {
        openResultModal();
    }
}

function checkCollision() {
    movingWordArr.forEach((a, i, o)=>{
        if(a.x > GAME_WIDTH) {
            o.splice(i, 1);
            if(!godMode) {
                controlStamina(a);
                invincible
            }
        }
        a.x += gameSpeed;
        a.draw();
    });
}

function controlStamina(a) {
    currentStamina -= multiplier * a.word.length;
    if(currentStamina <= 0) {
        currentStamina = 0;
        openResultModal();
    }
    stamina.style.width = currentStamina + '%';
}

function shuffle(arr) { 
    for (let i = arr.length - 1; i > 0; i--) {
        const randomPos = Math.floor(Math.random()*(i + 1));
        const temporary = arr[i];
        arr[i] = arr[randomPos];
        arr[randomPos] = temporary; 
    }
}