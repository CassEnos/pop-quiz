let score = 0;

const userGuess = prompt(`True or False:
    The sky is blue?`);
if (userGuess === "True") {
  score += 1;
  alert("Correct! Your score is " + score);
} else {
  alert("Incorrect. Your score is " + score);
}

const userGuess2 = prompt(`True or False:
    The grass is red?`);
if (userGuess2 === "False") {
  score += 1;
  alert("Correct! Your score is " + score);
} else {
  alert("Incorrect. Your score is " + score);
}

const userGuess3 = prompt(`True or False:
    The Earth orbits the Sun?`);
if (userGuess3 === "True") {
  score += 1;
  alert("Correct! Your score is " + score);
} else {
  alert("Incorrect. Your score is " + score);
}
alert("Your final score is " + score);
if (score === 3) {
  alert("Excellent work!");
} else if (score === 2) {
  alert("Good job!");
} else if (score === 1) {
  alert("You can do better!");
} else {
  alert("Better luck next time!");
}
