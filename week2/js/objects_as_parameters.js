var myObject = {
  "el" : document.getElementById("my-id"),
  "text" : "text to insert here"
}

function appendText(objArg) {
  obj.el.textContent = obj.text;
}

appendText(myObject);
