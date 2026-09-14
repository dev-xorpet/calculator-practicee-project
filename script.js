let currentNumber = "";
let previousNumber = "";
let operation = undefined;

const currentDisplay = document.getElementById("current-number");
const previousDisplay = document.getElementById("previous-number");


function appendNumber(number) {

    // جلوگیری از وارد کردن چند نقطه
    if (number === "." && currentNumber.includes(".")) {
        return;
    }

    // اگر عدد با صفر شروع شده باشد
    if (currentNumber === "0" && number !== ".") {
        currentNumber = "";
    }

    currentNumber += number;

    updateDisplay();
}


function chooseOperation(selectedOperation) {

    if (currentNumber === "" && previousNumber === "") {
        return;
    }

    if (currentNumber !== "" && previousNumber !== "") {
        calculate();
    }

    operation = selectedOperation;

    previousNumber = currentNumber;

    currentNumber = "";

    updateDisplay();
}


function calculate() {

    const previous = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    if (isNaN(previous) || isNaN(current)) {
        return;
    }

    let result;

    switch (operation) {

        case "+":
            result = previous + current;
            break;

        case "-":
            result = previous - current;
            break;

        case "×":
            result = previous * current;
            break;

        case "÷":

            if (current === 0) {
                alert("تقسیم بر صفر امکان‌پذیر نیست!");

                clearCalculator();

                return;
            }

            result = previous / current;
            break;

        default:
            return;
    }

    currentNumber = result.toString();

    previousNumber = "";

    operation = undefined;

    updateDisplay();
}


function clearCalculator() {

    currentNumber = "";
    previousNumber = "";

    operation = undefined;

    updateDisplay();
}


function deleteNumber() {

    currentNumber = currentNumber.slice(0, -1);

    updateDisplay();
}


function updateDisplay() {

    currentDisplay.innerText =
        currentNumber || "0";

    if (operation && previousNumber !== "") {

        previousDisplay.innerText =
            `${previousNumber} ${operation}`;

    } else {

        previousDisplay.innerText = "";

    }
}
