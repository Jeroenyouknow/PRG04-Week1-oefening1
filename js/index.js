window.addEventListener("load", init);

function init() {
  let wordsStart = "Dum,Dam,Da,Dum,Da,Da,Da,Dum,Thats,The,Way,You've,Got,To,GO!";
  let wordsEnd = "No,No,No,No,No,No,No,No,No,No,No,No,There's,No,Limit";  
  buildButtons(wordsStart);
}

function buildButtons() {
  for (let i = 0; i < text1.length; i++) {
    let button = createButton(i);
  }
}

function createButton() {
  let button = document.createElement("button");
  button.innerHTML = wordsStart[i];
  button.endText = wordsEnd[i];

  button.addEventListener("click", function(e) {
    console.log("Change text in " + e.target);
    e.target.innerHTML = e.target.endText; 
  });
  
  document.body.appendChild(button);
}