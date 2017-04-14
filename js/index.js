window.addEventListener("load", init);

var dumDa = [];
var nono = [];

function init() {
  dumDa = ["Dum", "Dam", "Da", "Dum", "Da", "Da", "Da", "Dum", "That's", "The", "Way", "You've", "Got", "To", "GO!"];
  nono = ["No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "There's", "No", "Limit"];

  showButtons();
}

function showButtons() {
  for (var index = 0; index < dumDa.length; index++) {
    var button = createButton();
    button.innerHTML = dumDa[index];
    button.index = index;
    document.body.appendChild(button);
  }
}

function createButton() {
  var button = document.createElement("button");

  button.addEventListener("click", function(e) { 
    console.log("Change");
    e.target.innerHTML = nono[e.target.index]; 
  });
  
  return button;
}