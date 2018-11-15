// Pool of letters - Used to check count of letters later
const allLetters = [
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "B",
  "B",
  "C",
  "C",
  "D",
  "D",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "F",
  "F",
  "G",
  "G",
  "G",
  "H",
  "H",
  "I",
  "I",
  "I",
  "I",
  "I",
  "I",
  "I",
  "I",
  "I",
  "J",
  "K",
  "L",
  "L",
  "L",
  "L",
  "M",
  "M",
  "N",
  "N",
  "N",
  "N",
  "N",
  "N",
  "O",
  "O",
  "O",
  "O",
  "O",
  "O",
  "O",
  "O",
  "P",
  "P",
  "Q",
  "R",
  "R",
  "R",
  "R",
  "R",
  "R",
  "S",
  "S",
  "S",
  "S",
  "T",
  "T",
  "T",
  "T",
  "T",
  "T",
  "U",
  "U",
  "U",
  "U",
  "V",
  "V",
  "W",
  "W",
  "X",
  "Y",
  "Y",
  "Z"
];

// Helper Methods
// Returns random sample of array
const sample = function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
};
// Returns count of item in array
const occurenceCounter = function(array, value) {
  return array.filter(v => v === value).length;
};
// Adds 8 points to score if length of word is 7..10
const bonusPoints = function bonusPoints(word, score) {
  const length = word.length;
  if (length > 6 && length < 11) {
    return (score += 8);
  } else {
    return score;
  }
};
// Calculates point of a letter
const letterScore = function letterScore(letter) {
  let score = 0;
  switch (letter.toUpperCase()) {
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
    case "L":
    case "N":
    case "R":
    case "S":
    case "T":
      return (score = 1);
    case "D":
    case "G":
      return (score = 2);
    case "B":
    case "C":
    case "M":
    case "P":
      return (score = 3);
    case "F":
    case "H":
    case "V":
    case "W":
    case "Y":
      return (score = 4);
    case "K":
      return (score = 5);
    case "J":
    case "X":
      return (score = 8);
    case "Q":
    case "Z":
      return (score = 10);
  }
};
//////// TODO HELP TODO ////////
//// How can I make an array of hashes (objects?) via map/the wordScore method from Adagrams?
const wordScores = function wordScores(words) {
  // Map through words to create array of hashes
  // words.map(function(word){
  //   // Create a hash for the word
  //   // TODO Not sure how to do this in JavaScript
  //   { word: word,
  //     score: Adagrams.wordScore(word),
  //     letterCount: word.length
  //    };
  // }); // End of .map
  const wordScoreCollection = [];

  // Doing a more manual way
  words.forEach(function(word){
    wordScoreCollection.push(scoreWord(word));
  });
  return wordScoreCollection; 
}; // End of wordScores

// Go through array of hashes
// Return the high score
const highScore = function highScore(words){
  let maxScore = 0;
  words.forEach(function(word){
    if (word.score > maxScore) {
      maxScore = word.score;
    }
  });
  return maxScore;
};
const wordsWithHighScore = function wordsWithHighScore(words){
  const topScoredWords = [];
  // Push any words with the top score to the array
  words.forEach(function(word){
    if ( word.score === maxScore(words) ){
      topScoredWords.push(word);
    }
  });
};
const tieChecker= function tieChecker(words){
  if ( wordsWithHighScore(words).length > 1 ) {
    return true;
  } else {
    return false;
  }
};
const lengthOfTen = function lengthOfTen(word){
  const wordsWithTenLength = [];
  words.forEach(function(word){
    if (word.length === 10) {
      wordsWithTenLength.push(word)
    };
  });
  return wordsWithTenLength;
};
const Adagrams = {
  // Method to draw 10 random letters
  // Remove letters from availableLettersToDraw as they're being drawn
  drawLetters() {
    // Implement this method for wave 1
    let drawnLetters = [];

    let availableLettersToDraw = [
      "A",
      "A",
      "A",
      "A",
      "A",
      "A",
      "A",
      "A",
      "A",
      "B",
      "B",
      "C",
      "C",
      "D",
      "D",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "F",
      "F",
      "G",
      "G",
      "G",
      "H",
      "H",
      "I",
      "I",
      "I",
      "I",
      "I",
      "I",
      "I",
      "I",
      "I",
      "J",
      "K",
      "L",
      "L",
      "L",
      "L",
      "M",
      "M",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "O",
      "O",
      "O",
      "O",
      "O",
      "O",
      "O",
      "O",
      "P",
      "P",
      "Q",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "S",
      "S",
      "S",
      "S",
      "T",
      "T",
      "T",
      "T",
      "T",
      "T",
      "U",
      "U",
      "U",
      "U",
      "V",
      "V",
      "W",
      "W",
      "X",
      "Y",
      "Y",
      "Z"
    ];

    // Looping to draw letters
    for (let i = 0; i < 10; i += 1) {
      // Draw a random letter
      const letter = sample(availableLettersToDraw);
      // Add it to the drawn letters array
      drawnLetters.push(letter);
      // Remove the letter from the availableLetters
      for (let i = 0; i < availableLettersToDraw.length - 1; i += 1) {
        if (availableLettersToDraw[i] === letter) {
          availableLettersToDraw.splice(i, 1);
        }
      }
    }
    return drawnLetters;
  },

  usesAvailableLetters(input, lettersInHand) {
    // Validating quantity
    // Making input an array of uppercase letters
    // Check input against letters in hand
    let result = true;
    input
      .toUpperCase()
      .split("")
      .forEach(function(letter) {
        // Counting number of occurrences of the letter in player's hand
        const countOfLetterInHand = occurenceCounter(lettersInHand, letter);
        // Counting number of occurrences of the letter in player's input
        const countOfLetterInInput = occurenceCounter(
          input.toUpperCase().split(""),
          letter
        );
        // Return false if player input more than what is in player's hand
        if (countOfLetterInInput > countOfLetterInHand) {
          result = false;
        }
      });
    // All letter counts have been checked, is valid
    return result;
  },
  // Returns number of points for the word
  scoreWord(word) {
    let totalPoints = 0;
    if (word.split("").length > 0) {
      // Go through each letter
      word.split("").forEach(function(letter) {
        // Add to totalPoints
        totalPoints += letterScore(letter);
        // console.log(`${letter}: points is now ${totalPoints}`);
      });
    }
    // Apply bonus point method at end
    // console.log("Applying bonus points");
    totalPoints = bonusPoints(word, totalPoints);
    // console.log(`Final Result: ${totalPoints}`);
    // Return total points
    return totalPoints;
  },

    // Find the top two scores (to check for ties)
    // Iterate through hash tracking a max/comparing max against each value
    // Iterate through hash again shoveling words with max into a hash
    // If hash has more than one value
    // If multiple words have the same length, return the first one
    // If one of the words is 10 letters, choose that one over the one with less tiles
    // If words are different lengths/none of them are 10, return the one with fewer letters
    // Maybe make a helper method to return the letter count? Could store as another key/value pair for that word...
  },
  highestScoreFrom(words) {
    // Get word with highest score
    // Return word hash with word and score
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
