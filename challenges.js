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

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
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
