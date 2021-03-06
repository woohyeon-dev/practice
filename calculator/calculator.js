const output = document.querySelector(".calculator__output");

const buttons = Array.from(document.getElementsByClassName("calculator__btns"));
 
let operatorCheck = false;
let equalsCheck = false;
let dotCheck = true;

function handleOutput(event) {
    const buttonName = event.target.className;
    const buttonValue = event.target.value;
    
    if(buttonName.includes("clear")) {
        output.value = "";
    } else if(buttonName.includes("result")) {
        if(operatorCheck) {
            operatorCheck = true;
            equalsCheck = true;
            dotCheck = true;
            output.value = eval(output.value.replace(/×/g, "*").replace(/÷/g, "/"));
        }
    } else if(buttonName.includes("operator")) {
        if(operatorCheck) {
            if(equalsCheck) {
                equalsCheck = false;
            }
            operatorCheck = false;
            dotCheck = true;
            output.value += buttonValue;
        }
    } else if(buttonName.includes("dot")) {
        if(operatorCheck) {
            if(equalsCheck) {
                equalsCheck = false;
            }
            operatorCheck = false;
            if(dotCheck) {
                output.value += buttonValue;
                dotCheck = false;
            }
        }
            
    } else {
        if(output.value.length+1 <= output.maxLength) {
            if(output.value === '0') {
                output.value = "";
            }
            if(equalsCheck) {
                equalsCheck = false;
                operatorCheck = false;
                output.value = "";
            } 
            output.value += buttonValue;
            operatorCheck = true;
        }    
    }
}

buttons.map(button => {
    button.addEventListener('click', handleOutput);
});