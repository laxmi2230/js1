
var button = document.getElementById("enter");
var button = document.getElementById("remove");

var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
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
function loadDataList(selecteditemsName)
    {
        var options = '';
        document.getElementById("remove").remove();
        for(var i = 0; i < selecteditemName.length; i++)
        {
            options += '<option value="'+ selecteditemsName[i] +'" >';
        }
        document.getElementById("remove").innerHTML = options;
    }

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);