const inquirer = require("inquirer");
const chalk = require("chalk");


class Employee {

  constructor(name, id, title) {
    this.name = name;
    this.id = id;
    this.title = title;
  }

  getName() {
      return this.name;
  }

  getId() {
      return this.id
  }

  getEmail() {}

  getRole() {
      // if(this.title) {
      //     return this.title
      // }else{
      //     return "Not defined"
      // }
    return "employee"
  }
}

  module.exports = Employee;
  // Sets the guesses to 10 and gets the next word
  //play() {
  //  this.guessesLeft = 10;
  //  this.nextWord();
 // }

  // Creates a new Word object using a random word from the array, asks the user for their guess
  //nextWord() {
   // const randWord = words[Math.floor(Math.random() * words.length)];
  //  this.currentWord = new Word(randWord);
  //  console.log("\n" + this.currentWord + "\n");
  //  this.makeGuess();
  //}

  // Uses inquirer to prompt the user for their guess
  //makeGuess() {
   // this.askForLetter().then(() => {
      // If the user has no guesses remaining after this guess, show them the word, ask if they want to play again
   //   if (this.guessesLeft < 1) {
    //    console.log(
   //       'No guesses left! Word was: "' +
     //       this.currentWord.getSolution() +
     //       '"\n'
     //   );
    //    this.askToPlayAgain();

        // If the user guessed all letters of the current word correctly, reset guessesLeft to 10 and get the next word
     // } else if (this.currentWord.guessedCorrectly()) {
     //   console.log("You got it right! Next word!");
     //   this.guessesLeft = 10;
     //   this.nextWord();

        // Otherwise prompt the user to guess the next letter
     // } else {
      //  this.makeGuess();
     // }
   // });
  //}

  // Asks the user if they want to play again after running out of guessesLeft
//   askToPlayAgain() {
//     inquirer
//       .prompt([
//         {
//           type: "confirm",
//           name: "choice",
//           message: "Play Again?"
//         }
//       ])
//       .then(val => {
//         // If the user says yes to another game, play again, otherwise quit the game
//         if (val.choice) {
//           this.play();
//         } else {
//           this.quit();
//         }
//       });
//   }

//   // Prompts the user for a letter
//   askForLetter() {
//     return inquirer
//       .prompt([
//         {
//           type: "input",
//           name: "choice",
//           message: "Guess a letter!",
//           validate: function(val) {
//             // The users guess must be a number or letter
//             return /[a-z1-9]/gi.test(val);
//           }
//         }
//       ])
//       .then(val => {
//         // If the user's guess is in the current word, log that they chose correctly
//         const didGuessCorrectly = this.currentWord.guessLetter(val.choice);
//         if (didGuessCorrectly) {
//           console.log(chalk.green("\nCORRECT!!!\n"));

//           // Otherwise decrement `guessesLeft`, and let the user know how many guesses they have left
//         } else {
//           this.guessesLeft--;
//           console.log(chalk.red("\nINCORRECT!!!\n"));
//           console.log(this.guessesLeft + " guesses remaining!!!\n");
//         }
//       });
//   }

//   // Logs goodbye and exits the node app
//   quit() {
//     console.log("\nGoodbye!");
//     process.exit(0);
//   }
// }

// module.exports = Game;onst inquirer = require("inquirer");
// const chalk = require("chalk");


// class Employee {

  // constructor(name, id, title) {
    // this.name = name;
    // this.id = id;
    // this.title = title;
  // }

  // getName() {
      // return this.name;
  // }

  // getId() {
      // return this.id
  // }

  // getEmail() {}

  // getRole() {
      // if(this.title) {
          // return this.title
      // }else{
          // return "Not defined"
      // }
  // }
}
// 
  // module.exports = Employee;
  // Sets the guesses to 10 and gets the next word
  //play() {
  //  this.guessesLeft = 10;
  //  this.nextWord();
 // }

  // Creates a new Word object using a random word from the array, asks the user for their guess
  //nextWord() {
   // const randWord = words[Math.floor(Math.random() * words.length)];
  //  this.currentWord = new Word(randWord);
  //  console.log("\n" + this.currentWord + "\n");
  //  this.makeGuess();
  //}

  // Uses inquirer to prompt the user for their guess
  //makeGuess() {
   // this.askForLetter().then(() => {
      // If the user has no guesses remaining after this guess, show them the word, ask if they want to play again
   //   if (this.guessesLeft < 1) {
    //    console.log(
   //       'No guesses left! Word was: "' +
     //       this.currentWord.getSolution() +
     //       '"\n'
     //   );
    //    this.askToPlayAgain();

        // If the user guessed all letters of the current word correctly, reset guessesLeft to 10 and get the next word
     // } else if (this.currentWord.guessedCorrectly()) {
     //   console.log("You got it right! Next word!");
     //   this.guessesLeft = 10;
     //   this.nextWord();

        // Otherwise prompt the user to guess the next letter
     // } else {
      //  this.makeGuess();
     // }
   // });
  //}

  // Asks the user if they want to play again after running out of guessesLeft
//   askToPlayAgain() {
//     inquirer
//       .prompt([
//         {
//           type: "confirm",
//           name: "choice",
//           message: "Play Again?"
//         }
//       ])
//       .then(val => {
//         // If the user says yes to another game, play again, otherwise quit the game
//         if (val.choice) {
//           this.play();
//         } else {
//           this.quit();
//         }
//       });
//   }

//   // Prompts the user for a letter
//   askForLetter() {
//     return inquirer
//       .prompt([
//         {
//           type: "input",
//           name: "choice",
//           message: "Guess a letter!",
//           validate: function(val) {
//             // The users guess must be a number or letter
//             return /[a-z1-9]/gi.test(val);
//           }
//         }
//       ])
//       .then(val => {
//         // If the user's guess is in the current word, log that they chose correctly
//         const didGuessCorrectly = this.currentWord.guessLetter(val.choice);
//         if (didGuessCorrectly) {
//           console.log(chalk.green("\nCORRECT!!!\n"));

//           // Otherwise decrement `guessesLeft`, and let the user know how many guesses they have left
//         } else {
//           this.guessesLeft--;
//           console.log(chalk.red("\nINCORRECT!!!\n"));
//           console.log(this.guessesLeft + " guesses remaining!!!\n");
//         }
//       });
//   }

//   // Logs goodbye and exits the node app
//   quit() {
//     console.log("\nGoodbye!");
//     process.exit(0);
//   }
// }

// module.exports = Game;