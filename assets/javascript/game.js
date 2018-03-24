var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
     



    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessedLetters = [];
    var lettersToGuess = null; 

    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
   

    
    
    //displaying the guessed letters made by the user seperating each letter with a comma
    var updateGuessesSoFar = function () {
        document.querySelector('#let').innerHTML = "Your guesses so far: " + guessedLetters.join(', ');
    };
    
    
    
    // Guesses limited to 9
    var updateGuessesLeft = function () {
        document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
    };

    var updateLettersToGuess = function () {
        this.lettersToGuess = this.computerChoice.Math.floor(Math.random() * this.computerChoice.length);
    };
    
    var reset = function() {
        guessesLeft = 9;
        guessedLetters = [];

        updateLettersToGuess;
        updateGuessesLeft;
        updateGuessesSoFar;
    }

    document.onkeyup = function(event) {
        guessesLeft--;
        var userGuess = event.key;

        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

            if (guessesLeft > 0){
                if (userGuess == lettersToGuess){                                             
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                reset();
             }
            }else if(guessesLeft == 0){ 

            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            reset();
            }
        };
    
