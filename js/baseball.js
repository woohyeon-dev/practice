const display = document.querySelector(".board__display");
const buttons = Array.from(document.querySelectorAll(".board__btns"));

let answer;

// 게임 초기화 시키는 함수
function init() {
    answer = [];
    makingAnswer();
    display.value = "";
}

// 서로 다른 네자리 랜덤 수 생성하는 함수
function makingAnswer() {
    let i=0;
    while(i<4) {
        let n = Math.floor(Math.random()*10);
        if(notSame(n)) {
            answer.push(n);
            i++;
        }
    }
}

// 중복된 수가 있는지 체크하는 함수 없으면 true 있으면 false
function notSame(n) {
    return answer.every((e) => n !==e);
}

// 정답과 사용자가 입력한 값을 비교하는 함수
function compareAnswer(value) {
    // result 요소 차례대로 strike, ball, out
    let result = [0, 0, 0];
    for(let i=0; i<4; i++) {
        if(value.indexOf(answer[i])) {
            if(value.charAt[i] == answer[i]) {
                result[0]++;
            } else {
                result[1]++;
            }
        } else {
            result[2]++;
        }
    }
    showResult(result);
}

// 결과를 화면에 나타내는 함수
function showResult(result) {
    console.log(result);
}

// 버튼들의 이벤트 처리하는 함수
function handleOutput(e) {
    let buttonValue = e.target.innerText;
    switch(buttonValue) {
        case 'C':
            // 문자열 초기화
            display.value = "";
            break;
        case 'CE':
            // 마지막 문자열 자르기
            display.value = display.value.slice(0, -1);
            break;
        case 'OK':
            // display.value 값을 전달하고 초기화
            // ok버튼은 입력한 수가 서로 다른 네자리 수 일 때만 누를 수 있도록 만들어야함
            const valueArr = display.value.split("");
            const set = Array.from(new Set(valueArr));
            if(set.length == 4) {
                compareAnswer(display.value);
            }
            display.value = "";
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

init();