//----Convert Celsius to Fahrenheit-------
/*
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
*/
//question
/*
You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
*/

//solve>>>>
function convertToF(celsius) {
  let fahrenheit =celsius*(9/5)+32;
  return fahrenheit;
}

convertToF(30);

//---Reverse a String----
/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

/*
Our goal is to take the input, str, and return it in reverse. Our first step is to split the string by characters using split(''). Notice that we don’t leave anything in between the single quotes, this tells the function to split the string by each character.

Using the split() function will turn our string into an array of characters, keep that in mind as we move forward.

Next we chain the reverse() function, which takes our array of characters and reverses them.

Finally, we chain join('') to put our characters back together into a string. Notice once again that we left no spaces in the argument for join, this makes sure that the array of characters is joined back together by each character.
*/

//-----Factorialize a Number-------
/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/

var factorial= 1;
function factorialize(num) {
  var x = num;
  for(let i= num; i>0; i--){
    //console.log(x);
    factorial = factorial * x;
    //console.log(factorial);
    x--;
  }
  console.log(factorial);
  return factorial;
}

factorialize(20);

//or
function factorialize(num) {
  for (var product = 1; num > 0; num--) {
    product *= num;
  }
  return product;
}

factorialize(5);

//--Find the Longest Word in a String-----

//Return the length of the longest word in the provided sentence.

//Your response should be a number.

function findLongestWordLength(str) {
  let x = str.split(' ');
  var maxLength = 0;
  for(let i = 0; i < x.length; i++){
    if(x[i].length > maxLength){
      maxLength=x[i].length;
    }
  }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//----Return Largest Numbers in Arrays-----
/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/
function largestOfFour(arr) {
  var solve = [];
  for(let i = 0; i<arr.length; i++){
    var maxNum =arr[i][0];
    for(let j =1; j< arr[i].length; j++){
      if(arr[i][j] > maxNum){
         maxNum = arr[i][j];
      }
    }
    solve[i]= maxNum;
  }
  return solve;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//----Confirm the Ending-----

/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

  // we can solve like this ;)
 // if(str.endsWith(target)== true){
 //   return true;
 // }
 // else{
  //  return false;
 // }
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");

//-----Repeat a String Repeat a String--------
function repeatStringNumTimes(str, num) {
  var result ="";
  for(let i =0; i<num; i++){
    result =result + str;
  }
  return result;
}

repeatStringNumTimes("abc", 3);

//----Truncate a String-------
/*
Truncate a string (first argument) if it is longer than the given maximum
 string length (second argument). Return the truncated string with a ... ending.*/

 function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

//-----Finders Keepers------
/*
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

*/
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

//-----Boo who-------
/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

*/


function booWho(bool) {
  return typeof bool === "boolean";
}

// test here
booWho(null);

// or
function booWho(bool) {
  if(bool === true){
    return true;
  }
  else if(bool === false){
    return true;
  }
  else{return false;}
}

booWho(null);

//-----Title Case a Sentence----------
/*
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");

//------Slice and Splice------
function frankenSplice(arr1, arr2, n) {

  let x = arr1;
  var y = arr2.slice(0,arr2.length);
  console.log(arr2);
  for(var i =0; i<x.length; i++){
   y.splice(n+i, 0, x[i]);
  }

  console.log(y);
  return y;
}

frankenSplice([1, 2, 3], [4, 5], 1);

//---------Falsy Bouncer------ 
/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/
function bouncer(arr) {
  return arr.filter(Boolean);
}

//or
function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}

//------Where do I Belong------
/*
Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}

//-----Mutations------
/* 
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}

//---Chunky Monkey------
/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
