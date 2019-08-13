const buttons = document.querySelectorAll('button');
let displayBottom = document.querySelector('#displayBottom');
let displayTop = document.querySelector('#displayTop');
const operators = ['+', '-', '*', '/'];
let operandFlag = false;
let firstOperator = '';
let secondOperator = '';
let displayValue = "";
let a = '';
let b = '';


function add(a, b) {return parseInt(a) + parseInt(b)};
function subtract(a, b) {return parseInt(a) - parseInt(b)};
function multiply(a, b) {return parseInt(a) * parseInt(b)};
function divide(a, b) {return parseInt(a) / parseInt(b)};
function operate(a, b, operator) {
	switch (operator) {
		case '+':
			displayValue = add(a, b);
			display(displayValue)
			a = displayValue;
			b = '';
			console.log('a', a)
			console.log('b', b)
			firstOperator = secondOperator;
			secondOperator = '';
			displayValue += firstOperator
			console.log('firstOperator', firstOperator)
			console.log('secondOperator', secondOperator)
			console.log('displayValue', displayValue)
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
				b += text;
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
				operate(a, b, firstOperator)
				// displayValue += text;
			} else {
				console.log('there is now one operator')
				a = displayValue;
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


