
// question/1
// 1. Create a function that reverses an array. Start small here and work your way up. Begin
// with an array of 5 numbers, and then try your program with a larger array to verify its
// success.

function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
let array1 = [1, 2, 3, 4, 5];
console.log("Original Array:", array1);
console.log("Reversed Array:", reverseArray(array1));
let array2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Original Array:", array2);
console.log("Reversed Array:", reverseArray(array2));
// question/2
// 2. Create a function that filters out negative numbers. In this challenge, you’ll have a
// function that takes an array as an input and returns an array. But if all goes according
// to plan, it’ll remove the negative numbers. This is another example of a task that’ll be
// useful when combing through data and looking for clever ways to eliminate “bad
// data.”
function filterNegativeNumbers(arr) {
    let filteredArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}
let array = [-1, 2, -3, 4, -5, 6, -7, 8];
console.log("Original Array:", array);
console.log("Filtered Array (Non-negative numbers only):", filterNegativeNumbers(array));

// // question/3
// 3. Return the number of vowels in a string. Create a function that’ll return an integer of
// the number of vowels found in a string. This is a great way to practice determining the
// features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared
// to determine what datasets (or just strings) consist of.
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    let vowelCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }


    return vowelCount;
}
    let inputString = "Hi students";
    console.log("Number of vowels in '" + inputString + "':", countVowels(inputString));
    
    inputString = "This is code jam test of javascript";
    console.log("Number of vowels in '" + inputString + "':", countVowels(inputString));

// question/4
// 4. Check if a string is a palindrome. A palindrome is a word, phrase, number, or other
// sequences of characters that reads the same forward and backward (like the words
// “kayak,” “mom,” “radar,” and “refer”). Create a function that takes a string as input
// and returns a Boolean indicating whether the string is a palindrome. Test your
// function with different strings to ensure it works correctly.
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '');

    return str === str.split('').reverse().join('');
}

let string1 = "kayak";
console.log(`Is "${string1}" a palindrome?`, isPalindrome(string1)); // Output: true

let string2 = "hello";
console.log(`Is "${string2}" a palindrome?`, isPalindrome(string2)); // Output: false
function checkRange(num1, num2) {
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
}
console.log(checkRange(55, 75)); 
console.log(checkRange(30, 40)); 
console.log(checkRange(80, 99));
// question/5
// 5. Write a JavaScript program to check whether two given integer values are in the
// range 50 - 99 (inclusive). Return true if either of them falls within the range.
function isInRange(num1, num2) {
    const lowerBound = 50;
    const upperBound = 99;
    
    return (num1 >= lowerBound && num1 <= upperBound) || (num2 >= lowerBound && num2 <= upperBound);
}


const test = [
    [45, 55],  
    [50, 100], 
    [40, 30],  
    [99, 99],  
    [101, 75]  
];

test.forEach(([val1, val2]) => {
    console.log(`Are ${val1} and ${val2} in the range?`, isInRange(val1, val2));
});
// question/6
// 6. Write a JavaScript program to get the minimum value of an array, after mapping each
// element to a value using the provided function.
function getMinValue(arr, mapFunc) {
    let mappedArray = arr.map(mapFunc);

    return Math.min(...mappedArray);
}

function square(x) {
    return x * x;
}
let numbers = [1, 2, 3, 4, 5];
console.log("Original Array:", numbers);
console.log("Minimum value after squaring each element:", getMinValue(numbers, square));

// question/7
// 7. Write a JavaScript program to create an updated string of 4 copies of the last 3
// characters of a given original string. The string length must be 3 and above.
function createUpdatedString(str) {
    if (str.length >= 3) {
        let lastThreeChars = str.slice(-3);
        return lastThreeChars.repeat(4);
    } else {
        return "String length must be 3 and above.";
    }
}
let originalString = "Hello";
console.log("Original String:", originalString);
console.log("Updated String:", createUpdatedString(originalString));
// question/8
// 8. Write a JavaScript program to find the types of a given angle.
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.
function angleType(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle. Angle must be between 0 and 180 degrees.";
    }
}
console.log(angleType(45));   
console.log(angleType(90));   
console.log(angleType(120));  
console.log(angleType(180));  
console.log(angleType(200));
// question/9
// 9. Write a JavaScript program to find the smallest round number not less than a given
// value. Note: A round number is informally considered to be an integer that ends with
// one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600.
function smallestRoundNumber(value) {
    let roundNumber = Math.ceil(value / 10) * 10;
    return roundNumber;
}

console.log(smallestRoundNumber(590));  
console.log(smallestRoundNumber(592));  
console.log(smallestRoundNumber(600));   
console.log(smallestRoundNumber(605));
// question/10
// 10. Write a JavaScript program to find the index of an array item in a for loop.
const arr = ['apple', 'banana', 'cherry', 'date'];
const itemToFind = 'cherry';

function findIndex(arr, itemToFind) {
  for (let i = 0; i < arr.length; i++) {
    if (array[i] === itemToFind) {
      return i; 
    }
  }
  return -1; 
}

const index = findIndex(arr/']', itemToFind);
console.log(`The index of '${itemToFind}' is ${index}.`);
