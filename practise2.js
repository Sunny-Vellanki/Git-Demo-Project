console.log(2**1);
console.log(2**2);
console.log(2**3-2);
console.log(2**3);
console.log(2**4-6);
console.log(2**4-4);
console.log(2**4-2);
console.log(2**4);
console.log(2**4+2);
console.log(2**4+4);

let num0 = 35;
if (num0 % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}
// ## Question 7. Take a number and check if number is divisible by 10 && 5. If yes then print Yes else print No.


let num1 = 60;
if (num1 % 10 === 0 && num1 % 5 === 0) {
    console.log("Yes");
} else {
    console.log("No");
}
// ### Question 9. Calculate your 10th percentage and print Pass or Fail. If marks are more than 70 then print Pass else print Fail.
let marks = 880;
let totalMarks = 1000;
let percentage = (marks / totalMarks) / 100;
if (percentage > 70) {
    console.log("Pass");
} else {
    console.log("Fail");
}
// ### Question 10. Take your age and check if your age is greater than 21 or not. If yes then print Adult else print Minor.

let year = 2000;
let today = 2023;
let age = today - year;
console.log(age);
// ### Question 1. Create a variable marks and assign any number. If marks are greater than 60 then print Pass else print Fail.
let marks1 = 59;
if (marks1 >= 60) {
    console.log("Pass");
} else {
    console.log("Fail");
}