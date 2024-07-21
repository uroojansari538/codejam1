// 1. Create a function that reverses an array. Start small here and work your way up. Begin
// with an array of 5 numbers, and then try your program with a larger array to verify its
// success.
let array = ["1", "2", "3", "4", "5"]
console.log(array.reverse())
let array2 = ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
console.log(array2.reverse())
// 2. Create a function that filters out negative numbers. In this challenge, you’ll have a function that takes an array as an input and returns an array. But if all goes according to plan, it’ll remove the negative numbers. This is another example of a task that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.”

let num = [1, -2, 3, -4, 5, -6];
const filteredNumbers = filterOutNegativeNumbers(num);
  
function filterOutNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
  }
  
  
  
 
  
  console.log(filteredNumbers);
  
  
  
// Return the number of vowels in a string. Create a function that’ll return an integer of the number of vowels found in a string. This is a great way to practice determining the features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared to determine what datasets (or just strings) consist of.
let vowels = ["apple","banana","red","blue","green"]


// 5. Write a JavaScript program to check whether two given integer values are in the range 50 - 99 (inclusive). Return true if either of them falls within the range

function checkRange(num1, num2) {
    if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)) {
      return true;
    } else {
      return false;
    }
  }
  
 
  const number1 = 45;
  const number2 = 75;
  
  console.log(checkRange(number1, number2)); 
  
  
  
  
  

// Write a JavaScript program to get the minimum value of an array, after mapping each element to a value using the provided function.

let new1 = ["0","1","2","4","6"]
let smallest=new1[0]
for (let i = 1; i < new1.length; i++) {
    if (new1[i] < smallest) {
        smallest = new1[i];
    }
}

console.log("The smallest number in the array is: " + smallest);

// // 8. Write a JavaScript program to find the types of a given angle. 
// Acute angle:  An angle between 0 and 90 degrees.
//  Right angle: An 90 degree angle. 
//  Obtuse angle: An angle between 90 and 180 degrees.
//   Straight angle: A 180 degree angle.
function findAngleType(angle) {
    if (angle > 0 && angle < 90) {
      return "Acute angle";
    } else if (angle === 90) {
      return "Right angle";
    } else if (angle > 90 && angle < 180) {
      return "Obtuse angle";
    } else if (angle === 180) {
      return "Straight angle";
    } else {
      return "Invalid angle. Please enter an angle between 0 and 180 degrees.";
    }
  }
  
  
  console.log(findAngleType(angle1)); 
  console.log(findAngleType(angle2)); 
  console.log(findAngleType(angle3)); 
  console.log(findAngleType(angle4)); 

//   9. Write a JavaScript program to find the smallest round number not less than a given value. Note: A round number is informally considered to be an integer that ends with one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600.
function findSmallestRoundNumber(value) {
    if (value % 10 === 0) {
      return value; 
      return Math.ceil(value / 10) * 10; 
    }
  }
  
  
  const value1 = 590;
  const value2 = 592;
  const value3 = 600;
  
  console.log(findSmallestRoundNumber(value1)); 
  console.log(findSmallestRoundNumber(value2));
  console.log(findSmallestRoundNumber(value3)); 
  