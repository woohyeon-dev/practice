const output = document.querySelector(".calculator__output");

const buttons = Array.from(document.getElementsByClassName("calculator__btns"));
 
let operatorCheck = false;
let equalsCheck = false;
let dotCheck = true;

function handleOutput(event) {
    const className = event.target.className;

    if(className.includes("clear")) {
        output.value = "";
    } else if(className.includes("result")) {
        if(operatorCheck) {
            equalsCheck = true;
            dotCheck = true;
            output.value = eval(output.value.replace(/×/g, "*").replace(/÷/g, "/"));
        }
    } else if(className.includes("operator")) {
        if(equalsCheck) {
            equalsCheck = false;
        }
        if(operatorCheck) {
            operatorCheck = false;
            dotCheck = true;
            output.value += event.target.value;
        }
    } else if(className.includes("dot")) {
        if(equalsCheck) {
            equalsCheck = false;
        }
        if(operatorCheck) {
            operatorCheck = false;
            if(dotCheck) {
                dotCheck = false;
                output.value += event.target.value;
            }
        }
    } else {
        if(output.value === '0' || equalsCheck) {
            equalsCheck = false;
            output.value = "";
        }
        if(output.value.length+1 <= output.maxLength) {
            operatorCheck = true;
            output.value += event.target.value;
        }
    }
}

function checkExpression() {

}

buttons.map(button => {
    button.addEventListener('click', handleOutput);
});