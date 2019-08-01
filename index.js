// const calculator = {
// 	displayValue: '0'
// }




function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}


let displayBottomValue = "";
let equation = "";
 const displayBottom = document.querySelector('#displayBottom');
const displayTop = document.querySelector('#displayTop');

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
	btn.addEventListener('click', (e) => {
		if(btn.textContent == "AC") {
			equation = "";
			displayTop.innerHTML = "";
			displayBottom.innerHTML = "";
			displayBottomValue = "";
		} else if (btn.textContent == "=") {
			operate();
			displayTop.innerHTML += equation;
		} else {
			displayBottomValue += btn.textContent;
			display(displayBottomValue)
		}
	})
})

function display(str) {
	displayBottom.innerHTML += str
	displayBottomValue = ""
	equation += str
}

function operate() {
	displayBottom.innerHTML = "";
}



