// 1.Create a function that reverses an array. Start small here and work your way up. Begin
// with an array of 5 numbers, and then try your program with a larger array to verify its
// success.
function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
const array5 = [1, 2, 3, 4, 5];
console.log("Original array of 5 numbers:", array5);
console.log("Reversed array of 5 numbers:", reverseArray(array5));
const largeArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Original large array:", largeArray);
console.log("Reversed large array:", reverseArray(largeArray));
// 2. Create a function that filters out negative numbers. In this challenge, you’ll have a
// function that takes an array as an input and returns an array. But if all goes according
// to plan, it’ll remove the negative numbers. This is another example of a task that’ll be
// useful when combing through data and looking for clever ways to eliminate “bad
// data.”
function filterOutNegatives(arr) {
    return arr.filter(number => number >= 0);
}
let negArray = [10, -5, 3, -2, 0, 7, -8];
console.log("Original array:", negArray);
console.log("Filtered array (no negative numbers):", filterOutNegatives(negArray));
// 3. Return the number of vowels in a string. Create a function that’ll return an integer of
// the number of vowels found in a string. This is a great way to practice determining the
// features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared
// to determine what datasets (or just strings) consist of.
function countVowels(str) {
    
    let vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    for (let char of str) {
    
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    
    
    return vowelCount;
}


const sampleString = "Hi! its a code jam test";
console.log("Original string:", sampleString);
console.log("Number of vowels:", countVowels(sampleString));
// 4. Check if a string is a palindrome. A palindrome is a word, phrase, number, or other
// sequences of characters that reads the same forward and backward (like the words
// “kayak,” “mom,” “radar,” and “refer”). Create a function that takes a string as input
// and returns a Boolean indicating whether the string is a palindrome. Test your
// function with different strings to ensure it works correctly.
function isPalindrome(str) {
    let phrase = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let reversedStr = phrase.split('').reverse().join('');
    
    
    return phrase === reversedStr;
}

const testStrings = [
    "A man, a plan, a canal, Panama!",
    "racecar",
    "hello",
    "Able was I ere I saw Elba",
    "No lemon, no melon"
];

testStrings.forEach(str => {
    console.log(`Is "${str}" a palindrome?`, isPalindrome(str));
});

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
// 6. Write a JavaScript program to get the minimum value of an array, after mapping each
// element to a value using the provided function.
function getMinValueAfterMapping(arr, mapFn) {
   
    let mappedArr = arr.map(mapFn);
    const minValue = Math.min(...mappedArr);
    
    return minValue;
}


function exampleMapFn(x) {
    return x * x;  
}

const numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);
console.log("Minimum value after mapping:", getMinValueAfterMapping(numbers, exampleMapFn));

// 7. Write a JavaScript program to create an updated string of 4 copies of the last 3
// characters of a given original string. The string length must be 3 and above.
function createUpdatedString(original) {
    
    if (original.length < 3) {
        throw new Error("The original string must have a length of 3 or more.");
    }
    
    let lastThreeChars = original.slice(-3);

   let updatedString = lastThreeChars.repeat(4);
    
    return updatedString;
}


const exampleString = "JavaScript";
console.log("Original string:", exampleString);
console.log("Updated string:", createUpdatedString(exampleString));
// 8. Write a JavaScript program to find the types of a given angle.
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.
function findAngleType(angle) {
    
    if (angle < 0 || angle > 180) {
        return 'Invalid angle';
    }
    
    
    if (angle === 90) {
        return 'Right angle';
    } else if (angle === 180) {
        return 'Straight angle';
    } else if (angle > 90 && angle < 180) {
        return 'Obtuse angle';
    } else if (angle > 0 && angle < 90) {
        return 'Acute angle';
    } else {
        return 'Invalid angle';  
    }
}

const testAngles = [45, 90, 120, 180, -10, 200, 0];

testAngles.forEach(angle => {
    console.log(`Angle ${angle} degrees is a: ${findAngleType(angle)}`);
});

// 9. Write a JavaScript program to find the smallest round number not less than a given
// value. Note: A round number is informally considered to be an integer that ends with
// one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600.
function findSmallestRoundNumber(value) {
    if (value < 0) {
        throw new Error("The value must be a non-negative number.");
    }
    if (value % 10 === 0) {
        return value;
    }
    
    let roundNum = Math.ceil(value / 10) * 10;
    
    return roundNum;
}


const testValues = [123, 590, 652, 29, 1000];

testValues.forEach(value => {
    console.log(`The smallest round number not less than ${value} is ${findSmallestRoundNumber(value)}`);
});
// 10. Write a JavaScript program to find the index of an array item in a for loop.
function findIndexOfItem(arr, target) {
    
    for (let i = 0; i < arr.length; i++) {
       
        if (arr[i] === target) {
            return i; 
        }
    }
    
   
    return -1;
}

const array1 = [10, 20, 30, 40, 50];
const target1 = 30;
console.log(`Index of ${target1} in array1:`, findIndexOfItem(array1, target1));

const array2 = ['apple', 'banana', 'cherry'];
const target2 = 'banana';
console.log(`Index of '${target2}' in array2:`, findIndexOfItem(array2, target2));

const array3 = [5, 15, 25];
const target3 = 10;
console.log(`Index of ${target3} in array3:`, findIndexOfItem(array3, target3));