var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	delButton.innerHTML = "X";
	delButton.className = "delButton";
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	ul.appendChild(delButton);

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function taskDone(li) {
	li.target.classList.toggle("done");
}

ul.addEventListener("click", taskDone);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);