const setting =  document.querySelector(".setting");
const playSection = document.querySelector(".play");
const language = document.getElementsByName("language");
const difficulty = document.getElementsByName("difficulty");
const okBtn = document.querySelector(".setting__ok");
const settingValueArr = [];

function switchPlayScreen() {
    setting.style.display = "none";
    playSection.style.display = "block";
    document.querySelector(".play__input").focus();
    runFrame();
}

function clickOkBtn(e) {
    language.forEach((node) => {
        if(node.checked)  {
          settingValueArr.push(node.value);
        }
    });

    difficulty.forEach((node) => {
        if(node.checked)  {
            settingValueArr.push(node.value);
        }
    });

    switchPlayScreen();
}

okBtn.addEventListener("click", clickOkBtn);