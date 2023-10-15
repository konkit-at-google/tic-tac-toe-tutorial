/**
Scenario

* Create 9 buttons in 3 rows, with numbers as contents
* Setting value as "X" on click
* Toggling between "O" and "X"
* Do not let clicks overwrite the fields
* Add reset button
* Add Win detection for one case
* Add "game finished" flag
* Add Win detection for all cases
* (Optional) add draw detection
* (Optional) beautify the app with CSS
* (Optional) Modal instead of an alert
**/

sign = "X"
gameFinished = false
buttons = document.querySelectorAll("button")

function setField(i) {
  if (!gameFinished && notSet(i)) {
    buttons[i].innerHTML = sign
    
    hasWon = checkIfFinished(sign);
    if (hasWon) {
        alert(sign + " has won")
        gameFinished = true;
        return
    } 
    
    isDraw = checkDraw();
    if (isDraw) {
        alert("Draw")
        gameFinished = true;
        return
    } 
      
    toggleSign()
  }
}

function checkIfFinished(sign) {
  /*
    The looks like this:
    0 | 1 | 2
    ---------
    3 | 4 | 5
    ---------
    6 | 7 | 8

    One winning position:
    X | X | X
    ---------
    . | . | .
    ---------
    . | . | .
  */
	if (getValue(0) == sign && getValue(1) == sign && getValue(2) == sign) {
    return true
  }
  
  if (getValue(3) == sign && getValue(4) == sign && getValue(5) == sign) {
    return true
  }
  
  if (getValue(6) == sign && getValue(7) == sign && getValue(8) == sign) {
    return true
  }
  
  if (getValue(0) == sign && getValue(3) == sign && getValue(6) == sign) {
    return true
  }
  
  if (getValue(1) == sign && getValue(4) == sign && getValue(7) == sign) {
    return true
  }
  
  if (getValue(2) == sign && getValue(5) == sign && getValue(8) == sign) {
    return true
  }
  
  if (getValue(0) == sign && getValue(4) == sign && getValue(8) == sign) {
    return true
  }
  
  if (getValue(2) == sign && getValue(4) == sign && getValue(6) == sign) {
    return true
  }
  
  return false
}

function checkDraw() {
  for (i=0; i<9; i++) {
    if (notSet(i)) {
      return false;
    }
  }
  return true
}

function getValue(i) {
  return buttons[i].innerHTML
}

function notSet(i) {
  return buttons[i].innerHTML != "X" && buttons[i].innerHTML != "O"
}

function toggleSign() {
	if (sign == "X") {
    sign = "O"
  } else {
    sign = "X"
  }
}

function reset() {
  for (i=0; i<9; i++) {
    buttons[i].innerHTML = i
  }
  gameFinished = false;
}
