// Helper Methods TODO Convert to arrow functions TODO
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
//////// TODO Question TODO ////////
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

  // Doing a more manual way
  const wordScoreCollection = [];

  words.forEach(function(word) {
    wordScoreCollection.push(Adagrams.scoreWord(word));
  });
  return wordScoreCollection;
}; // End of wordScores

// Getting highest score
const highScore = function highScore(words) {
  let maxScore = 0;
  words.forEach(function(word) {
    if (word.score > maxScore) {
      maxScore = word.score;
    }
  });
  return maxScore;
};
// Getting smallest count of letters in words
// To be used if there's a tie/none of the letters are 10 length
const wordWithLeastLetters = function wordWithLeastLetters(words) {
  let minLetterCount = 0;
  words.forEach(function(word) {
    if (word.letterCount < minLetterCount) {
      minLetterCount = word.letterCount;
    }
  });
};
// Creates an array of word objects with the top score
const wordsWithHighScore = function wordsWithHighScore(words) {
  const topScoredWords = [];
  const maxScore = highScore(words);
  // Push any words with the top score to the array
  words.forEach(function(word) {
    if (word.score === maxScore) {
      topScoredWords.push(word);
    }
  });
  return topScoredWords;
};

// Checks length of array of word objects with high score
// If greater than one, return true (will call tieBreaker helper)
const tieChecker = function tieChecker(words) {
  if (words.length > 1) {
    return true;
  } else {
    return false;
  }
};
// Removes extra value letterCount from hash for final result
const resultFormatter = function resultFormatter(word) {
  delete word["letterCount"];
  return word;
};
// To be applied in the event of a tie
// Would be passed array of words with top score
// Creates an array of the word objects have a length greater than 10
const lengthOfTen = function lengthOfTen(words) {
  const wordsWithTenLength = [];
  words.forEach(function(word) {
    if (word.letterCount === 10) {
      wordsWithTenLength.push(word);
    }
  });
  return wordsWithTenLength;
};
// To be applied if there is a tie to break the tie
const tieBreaker = function tieBreaker(words) {
  // To be used if tie checker is true
  // Get array of any words that have 10 letters
  const tenLetterWords = lengthOfTen(words);
  let winner = undefined;
  // If there is any ten letter words, return the first one
  // This account for if there's just one ten letter word (automatic win)
  // And if there's multiple ten letter words
  if (tenLetterWords.length > 0) {
    winner = tenLetterWords[0];
  } else {
    // If not, return word with fewest letters
    words.forEach(function(word) {
      if (word.letterCount === wordWithLeastLetters(words)) {
        winner = word;
      }
    });
  }
  return winner;
};
const createWordHashes = function createWordHashes(words) {
  // Take array of words and create array of hashes
  // Where each word has word, score, num of letters
  const wordCollection = [];
  words.forEach(function(word) {
    wordCollection.push({
      word: word,
      score: Adagrams.scoreWord(word),
      letterCount: word.length
    });
  });
  return wordCollection;
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
    // Check for bonus points
    totalPoints = bonusPoints(word, totalPoints);
    // Return  points
    return totalPoints;
  },
  // words is an array of strings
  highestScoreFrom(words) {
    // Creating array of word hashes with word, score, and length of word
    const wordData = createWordHashes(words);
    // Getting words with the top score
    const wordsWithTopScore = wordsWithHighScore(wordData);
    let topWord = undefined;
    // Check if there is a tie
    if (tieChecker(wordsWithTopScore)) {
      // If there's a tie, find the winner
      topWord = tieBreaker(wordsWithHighScore);
    } else {
      // If there is no tie you just have one element in array
      topWord = wordsWithTopScore[0];
    }
    return resultFormatter(topWord);
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
