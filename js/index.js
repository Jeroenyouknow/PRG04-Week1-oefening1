// start when the document is loaded
console.log("starting...");

function init() {
  // create data
  let wordsStart = "Dum,Dam,Da,Dum,Da,Da,Da,Dum,Thats,The,Way,You've,Got,To,GO!";
  let wordsEnd = "No,No,No,No,No,No,No,No,No,No,No,No,There's,No,Limit";  

  buildButtons();
}

// build the row of buttons. each button has one label from the list of words
function buildButtons() {
  for (let i = 0; i < wordsStart.length; i++) {
    let button = createButton();
  }
}

// build one button that changes its label when clicked
function createButton() {
  let button = document.createElement("button");
  button.innerHTML = "start word here";
  button.endText = "end word here";

  button.addEventListener("click", function(e) {
    e.target.innerHTML = "new word here";
  });
  
  document.body.appendChild(button);
}