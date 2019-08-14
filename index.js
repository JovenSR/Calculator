const buttons = document.querySelectorAll('button');
let displayBottom = document.querySelector('#displayBottom');
let displayTop = document.querySelector('#displayTop');
const operators = ['+', '-', '*', '/'];
let operandFlag = false;
let firstOperator = '';
let secondOperator = '';
let displayValue = "";
let aA = '';
let bB = '';


function add(a, b) {return parseFloat(aA) + parseFloat(bB)};
function subtract(a, b) {return parseFloat(aA) - parseFloat(bB)};
function multiply(a, b) {return parseFloat(aA) * parseFloat(bB)};
function divide(a, b) {return parseFloat(aA) / parseFloat(bB)};
function operate(a, b, operator) {
	switch (operator) {
		case '+':
			displayValue = add(aA, bB);
			display(displayValue);
			aA = displayValue;
			bB = '';
			firstOperator = secondOperator;
			secondOperator = '';
			displayValue += firstOperator;
			break;
		case '-':
			displayValue = subtract(aA, bB);
			display(displayValue);
			aA = displayValue;
			bB = '';
			firstOperator = secondOperator;
			secondOperator = '';
			displayValue += firstOperator;
			break;
		case '*':
			displayValue = multiply(aA, bB);
			display(displayValue);
			aA = displayValue;
			bB = '';
			firstOperator = secondOperator;
			secondOperator = '';
			displayValue += firstOperator;
			break;
		case '/':
			displayValue = divide(aA, bB);
			display(displayValue);
			aA = displayValue;
			bB = '';
			firstOperator = secondOperator;
			secondOperator = '';
			displayValue += firstOperator;
			break;
		default:   
			console.log('not a plus')
	}
};
function display(str) {
	displayBottom.innerHTML = str;
}

buttons.forEach(function(btn) {
	btn.addEventListener('click', (e) => {
		let text = btn.textContent;
		if(parseInt(text) > -1 && parseInt(text) < 10) {
			if(firstOperator !== '') {
				bB += text;
				displayValue += text;
				display(displayValue);
			} else {
				displayValue += text;
				display(displayValue)
			}
		} else if(text === ".") {
			console.log(text)
		} else if(operators.indexOf(text) !== -1) {
			if(firstOperator !== '') {
				secondOperator = text;
				operate(aA, bB, firstOperator)
			} else {
				console.log('there is now one operator')
				aA = displayValue;
				firstOperator = text;
				displayValue += text;
				display(displayValue)
			}
		} else if(text === "AC") {
			console.log('Clear')
		} else {
			console.log("operating")
		}
	})
})


