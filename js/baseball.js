const record = document.querySelector(".play-board__record")
const display = document.querySelector(".play-board__display");
const buttons = Array.from(document.querySelectorAll(".play-board__btns"));
const circle = document.getElementsByClassName("play-board__circle");

let answer;
let result = [0, 0, 0];
let isFill = false;
let gameCount = 0;

// 게임 초기화 시키는 함수
function init() {
    answer = [];
    makingAnswer();
    // answer=[1,2,3,4];
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
        
        // 중복된 수가 있는지 체크하는 함수 없으면 true 있으면 false
        function notSame(n) {
            return answer.every((e) => n !==e);
        }
    }
}


// 정답과 사용자가 입력한 값을 비교하는 함수
function compareAnswer(inputValue) {
    // result 요소 차례대로 strike, ball, out
    result = [0, 0, 0];
    for(let i=0; i<4; i++) {
        if(inputValue.indexOf(answer[i])+1) {
            if(inputValue.charAt(i) == answer[i]) {
                result[0]++;
            } else {
                result[1]++;
            }
        } else {
            result[2]++;
        }
    }
    colorizeCircles();
    writeRecord(inputValue);
}

// 결과를 통해 원 색깔 칠하는 함수
function colorizeCircles() {
    for(let i=0; i<result[0]; i++) {
        circle[i].style.backgroundColor = "yellow";
    }
    for(let i=0; i<result[1]; i++) {
        circle[i+4].style.backgroundColor = "green";
    }
    for(let i=0; i<result[2]; i++) {
        circle[i+8].style.backgroundColor = "red";
    }
}


// 결과를 화면에 작성하는 함수
function writeRecord(inputValue) {
    if(gameCount < 14) {
        record.innerHTML += `<p>${inputValue} &nbsp; S: ${result[0]}, B: ${result[1]}, O: ${result[2]}</p>`
        gameCount++;
    }
}


// 원 색깔 초기화
function initCircleColor() {
    for(let i=0; i<result[0]; i++) {
        circle[i].style.backgroundColor = "#505156";
    }
    for(let i=0; i<result[1]; i++) {
        circle[i+4].style.backgroundColor = "#505156";
    }
    for(let i=0; i<result[2]; i++) {
        circle[i+8].style.backgroundColor = "#505156";
    }
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
            if(set.length == 4 && valueArr.length == 4) {
                compareAnswer(display.value);
                isFill = true;
                display.value = "";
            }
            break;
        default:
            if(isFill) {
                initCircleColor();
            }
            // 전에 입력한 수와 다를 때만 입력되도록 만들어야함
            // 네자리까지만 입력되도록 만들어야함
            if(display.value.length < 4) {
                display.value += buttonValue;
            }
            break;
    }
}

buttons.map(button => {
    button.addEventListener("click", handleOutput);
});

init();