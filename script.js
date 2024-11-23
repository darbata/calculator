const displayEquation = document.querySelector(".equation");
const displayResult = document.querySelector(".result");
const numBtns = document.querySelector(".buttons");

for (let i = 10; i > -1; i--) {
	let btn = document.createElement("button");
	btn.textContent = i;
	numBtns.prepend(btn);
}

const btns = document.querySelectorAll("button");

for (const btn of btns) {
	btn.addEventListener("click", () => {
		let output = btn.textContent;
		if (output === "clear") {
			displayEquation.textContent = "";
		} else if (output === "=") {
			let result = eval(displayEquation.textContent).toString();
			displayResult.textContent = result;
			displayEquation.textContent = "";
		} else {
			displayEquation.textContent += output;
		}
	});
}

