const setting =  document.querySelector(".setting");
const playSection = document.querySelector(".play");
const language = document.getElementsByName("language");
const difficulty = document.getElementsByName("difficulty");
const okBtn = document.querySelector(".setting__ok");
const settingValueArr = [];

let gameSpeed;
let multiplier;
let wordArr;

function switchPlayScreen() {
    setting.style.display = "none";
    playSection.style.display = "block";
    document.querySelector(".play__input").focus();
    runFrame();
}

function applySetting() {

    // language setting
    switch(settingValueArr[0]) {
        case "korean":
            wordArr = JSON.parse(JSON.stringify(koreanWords));
            multiplier = 5;
            break;
        case "english":
            wordArr = JSON.parse(JSON.stringify(englishWords));
            multiplier = 3;
            break;
        case "japanese":
            wordArr = JSON.parse(JSON.stringify(japaneseWords));
            multiplier = 2;
            break;
    }
    // difficulty setting
    switch(settingValueArr[1]) {
        case "easy":
            gameSpeed = 1;
            break;
        case "normal":
            gameSpeed = 1.4;
            break;
        case "hard":
            gameSpeed = 1.8;
            break;
    }
}

function clickOkBtn(e) {
    language.forEach((node) => {
        if(node.checked)  {
          settingValueArr[0] = node.id;
        }
    });

    difficulty.forEach((node) => {
        if(node.checked)  {
            settingValueArr[1] = node.id;
        }
    });

    applySetting();
    switchPlayScreen();
}

okBtn.addEventListener("click", clickOkBtn);