// ### Question 2. Take two numbers and check if both numbers are odd or not. If yes then print Odd otherwise print Even

let num12 = 35;
let num2 = 34;
if (num12 % 2 === 1 && num2 % 2 === 1) {
    console.log("Odd");
} else {
    console.log("Even");
}
// ### Question 1. Take two numbers and take a value which should be the sum of the two numbers plus some other number. Now findout the 3rd number.

 let a = 50;
 let b = 20;
 let sum = 100;
 console.log(sum - (a + b));
//  ### Question 3. In which century were your born? find out by asking birth year. Use Math.floor function to remove decimal portion of the century. If you are born in any year after 1999 then century will be 20 and in the same way if you are born after 1899 then century will be 19th.
   let year1 = 2002;
   let century = Math.floor(year1 / 100) + 1;
   console.log(century);
//    ### Question 4. Add 20 in your name and check value in console.
//    Add true to your name and check output
//    Add 30+"learnjavascript" and check type of the final value.
console.log("learnjavascript" + 20);
console.log(true + "learnjavascript");
console.log(30 + "learnjavascript");
// ### Question 6. Test below conditions using &&, || and not logical operators. Take any number check if number is even and also check if number is multiple of 4 or not. If both conditions are true then check if number is less than 100 or number is 84 or not.


   let num11 = 20;
   if (num11 % 2 === 0 && num11 % 4 === 0 && (num11< 100 || num11 === 84)) {
      console.log("yes");
   } else {
      console.log("no");
   }
//    ### Question 5. Create Reverse Game. Ask any question with 2 possible answers. If user selects first option then show second option in alert and vice versa.

// For example: Do you drink coffee or tea? and If user says coffee then show Tea in alert and if user says tea then show coffee.

   let ans = Prompt("Do you drink coffee or tea?");
   if (ans === "coffee") {
   console.log("Tea");
   } else if (ans === "tea") {
   console.log("coffee");
   } else {
   console.log("Wrong choice");
   }
//    ### Question 6. Test below conditions using &&, || and not logical operators. Take any number check if number is even and also check if number is multiple of 4 or not. If both conditions are true then check if number is less than 100 or number is 84 or not.

   let num = 20;
   if (num % 2 === 0 && num % 4 === 0 && (num < 100 || num === 84)) {
      console.log("yes");
   } else {
      console.log("no");
   }
//    ### Question 7. Take city temprature. If temp is less than 10 degree then print very cold. If city temp is less than 30 and greater than equal to 10 then print cold. If temp is between 30 to 40 then print Hot. Else print Very hot.


let temp  = 30;
if(temp < 10) {
   console.log("Very Cold");
} else if(temp < 30 && temp >= 10 ) {
   console.log("Cold")
} else if(temp <= 40 && temp >= 30) {
   console.log("Hot")
} else {
   console.log("Very Hot");
}