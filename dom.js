var button = document.getElementById("enter");
var refresh = document.getElementById("refresh");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul")
var li = document.querySelector("li")
var list = document.getElementById("list")

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
  // remove.shift();
}

// function removeList(){
//     for (var i=0; i < list.length(); i--){
//         list.pop();
//       }
// }

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

// refresh.addEventListener("click", refreshList)

input.addEventListener("keypress", addListAfterKeypress)

ul.addEventListener("click", removeListItems)
