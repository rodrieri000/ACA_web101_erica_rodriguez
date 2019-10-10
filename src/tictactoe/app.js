

// find location of click and add x or o
//determimne player1 or player2
//keep score
//find winner via 3 in a row

console.log('hey app.js here')

let previousGamePiece = null

function addGamePiece(selectedElement) {
  //create new element
  let newElement = document.createElement('h1')
  if (previousGamePiece ==='x') {
  // text to element
  newElement.innerHTML = 'o'
  //set previousGamePiece
  previousGamePiece = 'o'
  } else {
    //add text to element
  newElement.innerHTML = 'x'
  //set previous game piece
  previousGamePiece = 'x'
  }
  //add element with text to selected ELement on page
  selectedElement.appendChild(newElement)
  selectedElement.attribute
  console.log('show clicked div', selectedElement)
}
