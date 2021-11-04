var showingSourceCode = false;
var isInEditMode = true;

function enableDesignMode() {
	richTextField.document.designMode = "On";
	console.log("Passou");
}

function changeTo(command) {
	richTextField.document.execCommand(command, false, null);
}

function changeToWithValue(command, value) {
	richTextField.document.execCommand(command, false, value);
}

function toggleSource() {
	if (showingSourceCode) {
		richTextField.document.getElementsByTagName("body")[0].innerHTML =
			richTextField.document.getElementsByTagName("body")[0].textContent;
		showingSourceCode = false;
	} else {
		richTextField.document.getElementsByTagName("body")[0].textContent =
			richTextField.document.getElementsByTagName("body")[0].innerHTML;
		showingSourceCode = true;
	}
}

function toggleEdit() {
	if (isInEditMode) {
		richTextField.document.designMode = "Off";
		isInEditMode = false;
	} else {
		richTextField.document.designMode = "On";
		isInEditMode = true;
	}
}
