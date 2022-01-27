const display = document.querySelector(".board__display");
const buttons = Array.from(document.querySelectorAll(".board__btns"));

// 게임 초기화 시키는 함수
function init() {}

// 서로 다른 네자리 랜덤 수 생성하는 함수
function makingAnswer() {}

// 정답과 사용자가 입력한 값을 비교하는 함수
function compareAnswer() {}

// 결과를 화면에 나타내는 함수
function showResult() {}

// 버튼들의 이벤트 처리하는 함수
function handleOutput(e) {
    let buttonValue = e.target.innerText;
    switch(buttonValue) {
        case 'C':
            // 입력한 문자 초기화
            display.value = "";
            break;
        case 'CE':
            // 마지막 문자열 지우기
            break;
        case 'OK':
            // display.value 값을 전달해줘야함
            // ok버튼은 입력한 수가 네자리 일 때만 누를 수 있도록 만들어야함
            break;
        default:
            // 전에 입력한 수와 다를 때만 입력되도록 만들어야함
            display.value += buttonValue;
            break;
    }
}

buttons.map(button => {
    button.addEventListener("click", handleOutput);
});