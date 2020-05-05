var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul")

function inputLength(){
  return input.value.length
}

function removeListItems(){
  var target = getEventTarget()
  target.classList.toggle("done")
}

function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}

function refreshList(){
  var remove = document.getElementById("list")
  remove.removeChild(remove.childNodes[1])
}

function addListAfterClick (){
    if (inputLength() > 0) {
    createListElement()
  }
}

function addListAfterKeypress(event){
   if (inputLength() > 0 && event.which === 13) {
   createListElement()
  }
}

function createListElement(){
  var li = document.createElement("li")
  li.appendChild(document.createTextNode(input.value))
  ul.appendChild(li)
  input.value = "";
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress)

ul.addEventListener("click", removeListItems)
