const text = document.querySelector(".text");

// 타이핑 초기화
function resetTyping() {
    const textStr = "Typing Game"
    const textStrArr = textStr.split("");
    text.textContent = "";
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
        setTimeout(resetTyping, 3000);
    }
}

setTimeout(resetTyping, 3000);


// 커서 깜빡임 효과
function blink() {
    text.classList.toggle("active");
}

setInterval(blink, 500);