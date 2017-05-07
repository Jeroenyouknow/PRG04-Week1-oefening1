// start when the document is loaded
console.log("starting...");

// create data
  let wordsStart = "Dum,Dam,Da,Dum,Da,Da,Da,Dum,Thats,The,Way,You've,Got,To,GO!";
  let arrayStart = wordsStart.split(",");
  let wordsEnd = "No,No,No,No,No,No,No,No,No,No,No,No,There's,No,Limit";  
  let arrayEnd = wordsEnd.split(",");

window.addEventListener("load", init);  


function init() {
   buildButtons();
}

// build the row of buttons. each button has one label from the list of words
function buildButtons() {
  for (let i = 0; i < arrayStart; i++) {
    let button = createButton(arrayStart[i], arrayEnd[i]);
  }
}

// build one button that changes its label when clicked
function createButton(start, end) {
  let button = document.createElement("button");
  button.innerHTML = start;
  button.endText = end;

  

  button.addEventListener("click", function(e) {
    e.target.innerHTML = this.endText;
  });
  
  document.body.appendChild(button);
}