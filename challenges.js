///////////////////////////////////
// JavaScript Fundamentals – Part 1
// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

const marksWeight1 = 78;
const marksHeight1 = 1.69;
const johnWeight1 = 92;
const johnHeight1 = 1;

const marksBmi1 = marksWeight1 / marksHeight1 ** 2;
console.log(marksBmi1);
const johnBmi1 = johnWeight1 / johnHeight1 ** 2;
console.log(johnBmi1);

const marksWeight2 = 95;
const marksHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1;

const marksBmi2 = marksWeight2 / marksHeight2 ** 2;
console.log(marksBmi2);
const johnBmi2 = johnWeight2 / johnHeight2 ** 2;
console.log(johnBmi2);

const markHigherBMI1 = marksBmi1 > johnBmi1;
console.log(markHigherBMI1);

const markHigherBMI2 = marksBmi2 > johnBmi2;
console.log(markHigherBMI2);

console.log(`Hi!
I'm Kavya..`);

////////////////////////////////////////
// Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement

if (marksBmi1 > johnBmi1) {
  console.log(`Marks's BMI (${marksBmi1}) is higher than John's (${johnBmi1})`);
} else {
  console.log(
    `John's BMI (${johnBmi1}) is higher than Marks's (${Math.round(marksBmi1)})`
  );
}

////////////////////////////////////////////////////
// Coding Challenge #3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 101;

const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 106;

const dolphinsAverageScore =
  (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100)
  console.log("Yay! Dolphins are the winner..");
else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100)
  console.log("Yay! Koalas are the winner..");
// else console.log("Match is draw!");
else if (
  dolphinsAverageScore === koalasAverageScore &&
  dolphinsAverageScore >= 100 &&
  koalasAverageScore >= 100
)
  console.log("Match is draw!");
else console.log("No team wins the trophy!");
