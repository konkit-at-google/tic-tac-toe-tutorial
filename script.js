/**
Scenario

* 1. Create 9 buttons in 3 rows, with numbers as contents
* 2. Setting value as "X" on click
* 3. Toggling between "O" and "X"
* 4. Do not let clicks overwrite the fields
* 5. Add reset button
* 6. Add Win detection for one case
* 7. Add "game finished" flag
* 8. Add Win detection for all cases
* 9. (Optional) add draw detection
* 10. (Optional) beautify the app with CSS
* 11. (Optional) Modal instead of an alert
**/

sign = "X";
gameFinished = false;
buttons = document.querySelectorAll("button");

function setField(i) {
  if (!gameFinished && notSet(i)) {
    buttons[i].innerHTML = sign;
    
    hasWon = checkIfFinished(sign);
    if (hasWon) {
        alert(sign + " has won");
        gameFinished = true;
        return;
    } 
    
    isDraw = checkDraw();
    if (isDraw) {
        alert("Draw");
        gameFinished = true;
        return;
    } 
      
    toggleSign();
  }
}

function checkIfFinished(sign) {
	if (getValue(0) == sign && getValue(1) == sign && getValue(2) == sign) {
    return true;
  }
  
  if (getValue(3) == sign && getValue(4) == sign && getValue(5) == sign) {
    return true;
  }
  
  if (getValue(6) == sign && getValue(7) == sign && getValue(8) == sign) {
    return true;
  }
  
  if (getValue(0) == sign && getValue(3) == sign && getValue(6) == sign) {
    return true;
  }
  
  if (getValue(1) == sign && getValue(4) == sign && getValue(7) == sign) {
    return true;
  }
  
  if (getValue(2) == sign && getValue(5) == sign && getValue(8) == sign) {
    return true;
  }
  
  if (getValue(0) == sign && getValue(4) == sign && getValue(8) == sign) {
    return true;
  }
  
    if (getValue(2) == sign && getValue(4) == sign && getValue(6) == sign) {
    return true;
  }
  
  return false;
}

function checkDraw() {
  for (i=0; i<9; i++) {
    if (notSet(i)) {
      return false;
    }
  }
  return true;
}

function getValue(i) {
  return buttons[i].innerHTML;
}

function notSet(i) {
  return buttons[i].innerHTML != "X" && buttons[i].innerHTML != "O";
}

function toggleSign() {
	if (sign == "X") {
    sign = "O";
  } else {
    sign = "X";
  }
}

function reset() {
  for (i=0; i<9; i++) {
    buttons[i].innerHTML = i;
  }
  gameFinished = false;
  sign = "X";
}
