//--Iterate with JavaScript While Loops---
// Setup
var myArray = [];
var i =5;
while(i > 5) {
  myArray.push(i);
  i--;
}
// Only change code below this line
//---Iterate with JavaScript For Loops-----
// Setup
var myArray = [];
for (var i = 1; i <= 5; i++) {
  myArray.push(i);
}
// Only change code below this line

//-----------
// Setup
var myArr = [ 2, 3, 4, 5, 6];
var total =0;
for (var i = 0; i < myArr.length; i++) {
   console.log(myArr[i]);
   total+=myArr[i];
}
// Only change code below this line

//------Nesting For Loops-------------
var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
//------function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
    product*=arr[i][j];
  }
}
  // Only change code above this line
  return product;


multiplyAll([[1,2],[3,4],[5,6,7]]);
//------Iterate with JavaScript Do...While Loops----------
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);

//--------Replace Loops using Recursion---------
function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}
//-----recur-------
function sum(arr, n) {
  // Only change code below this line
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }
  // Only change code above this line
//-------Profile Lookup-----------
// Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop) {
// Only change code below this line
for (var i = 0; i < contacts.length; i++) {
  if (contacts[i].firstName === name) {
    if (contacts[i].hasOwnProperty(prop)) {
      return contacts[i][prop];
    } else {
      return "No such property";
    }
  }
}
return "No such contact";
}
// Only change code above this line


lookUpProfile("Akira", "likes");

//--------Generate Random Fractions with JavaScript-----------
function randomFraction() {

  // Only change code below this line

  return Math.random();

  // Only change code above this line
}

//-------Generate Random Whole Numbers with JavaScript-----------
function randomWholeNum() {

  // Only change code below this line
for(var i=0;i<=9;i++){
  return Math.floor(Math.random() * 10);
}
}
//-------Generate Random Whole Numbers within a Range-----------

function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}
//---Use the parseInt Function------
function convertToInteger(str) {
  return parseInt(str);
  }
  
  convertToInteger("56");

  //------Use the parseInt Function with a Radix-------
  function convertToInteger(str) {
    return parseInt(str, 2);
    }
    
    convertToInteger("10011");
    //-----Use the Conditional (Ternary) Operator-------

function checkEqual(a, b) {
 return a == b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

//----------------
function checkSign(num) {
  return (num === 0) ? "zero" 
     : (num >= 0) ? "positive" 
     : "negative";
 }
 
 checkSign(10);

 //------------------
