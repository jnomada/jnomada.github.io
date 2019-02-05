//Declare the variables

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


// Checks the length of the user input.

function inputLength() {
	return input.value.length;
}

//Creates an item in the list

function createListElement() {
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	delButton.innerHTML = "X";
	delButton.className = "delButton";
	delButton.onclick = taskDel;
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.appendChild(delButton);
	li.className = "animated fadeIn";
}

// Checks if there is text in the box and if so adds it to the list.

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//Adds the item to the list when the ENTER key is pressed

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//When a list item is clicked on it changes the BG colour and strikes through the text.

function taskDone(li) {
	li.target.classList.toggle("done");
	li.target.classList.toggle("doneColor");

}

//Removes the element from the list.

function taskDel(e) {
	e.target.parentElement.parentElement.removeChild(e.target.parentElement);

}

//Event listeners.

ul.addEventListener("click", taskDone);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);