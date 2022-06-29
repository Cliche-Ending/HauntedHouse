      function initialize() {
        // Elements
        comboDisplay = document.getElementById("combination");
        resultDisplay = document.getElementById("result");

        resultDisplay.innerHTML = "";
        // Logic
        guess = "";
        mystery = "3412";
        finished = false;
        display();
      }
      function enterDigit(digit) {
        if(!finished) {
          guess += digit;
          resultDisplay.innerHTML = "";
          if(guess.length === 4) {
            checkGuess();
          }
          display();
        }
      }
      function clearGuess() {
        guess = "";
        display();
      }
      function checkGuess() {
        if(guess == mystery) {
          resultDisplay.innerHTML = "Congratulations, you found your way out!"; 
          finished = true;
          window.location.href = "end.html";
        }
        else {
          clearGuess();
        }
      }

      function display() {
        comboDisplay.innerHTML = guess;
        while(comboDisplay.innerHTML.length < 4) {
          comboDisplay.innerHTML += "_";
        }
      }
    