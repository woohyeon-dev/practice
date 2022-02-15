const initSection = document.querySelector(".init");
const settingSection = document.querySelector(".setting");

const text = document.querySelector(".init__text");
const keyboardIcon = document.querySelector(".init__keyboard");


// icon을 눌렀을때 화면전환
function handleIconButton(e) {
    initSection.style.display = "none";
    settingSection.style.display = "block";
}
keyboardIcon.addEventListener('click', handleIconButton);

// 타이핑 초기화
function resetTyping() {
    const textArr = ["Typing Game", "Press icon to start"];
    let textStrArr;
    if(text.textContent === "") {
        textStrArr = textArr[0].split("");
    } else {
        if(text.textContent === textArr[1]) {
            return;
        } else {
            text.textContent = "";
            textStrArr = textArr[1].split("");
        }
    } 
    setTimeout(function() {
        dynamic(textStrArr);
    }, 500);
}

// 한글자씩 텍스트 출력 함수
function dynamic(strArr) {
    if(strArr.length > 0) {
        text.textContent += strArr.shift();
        setTimeout(function() {
            dynamic(strArr);
        }, 200);
    } else {
        setTimeout(resetTyping, 1000);
    }
}
setTimeout(resetTyping, 1000);


// 커서 깜빡임 효과
function blink() {
    text.classList.toggle("active");
}
setInterval(blink, 500);