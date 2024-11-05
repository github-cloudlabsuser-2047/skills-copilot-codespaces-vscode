class Calculator {
    constructor() {
        this.display = '';
        this.currentOperation = null;
        this.firstOperand = null;
    }

    appendNumber(number) {
        this.display += number;
        this.updateDisplay();
    }

    setOperation(operation) {
        if (this.display === '') return;
        this.firstOperand = parseFloat(this.display);
        this.currentOperation = operation;
        this.display = '';
    }

    clearDisplay() {
        this.display = '';
        this.currentOperation = null;
        this.firstOperand = null;
        this.updateDisplay();
    }

    calculateResult() {
        if (this.currentOperation === null || this.display === '') return;
        let secondOperand = parseFloat(this.display);
        let result;
        switch (this.currentOperation) {
            case '+':
                result = this.firstOperand + secondOperand;
                break;
            case '-':
                result = this.firstOperand - secondOperand;
                break;
            case '*':
                result = this.firstOperand * secondOperand;
                break;
            case '/':
                result = this.firstOperand / secondOperand;
                break;
            default:
                return;
        }
        this.display = result.toString();
        this.currentOperation = null;
        this.firstOperand = null;
        this.updateDisplay();
    }

    updateDisplay() {
        console.log(this.display);
    }
}

// Example usage:
const calculator = new Calculator();
calculator.appendNumber('5');
calculator.setOperation('+');
calculator.appendNumber('3');
calculator.calculateResult(); // Output: 8
calculator.clearDisplay();