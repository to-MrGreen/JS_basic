//------Explore Differences Between the var and let Keywords-------
let camper = 'James';
let camper = 'David';
//This error can be seen in the console of your browser. 
//So unlike var, when using let, a variable with the same 
//name can only be declared once. Note the "use strict". 
//This enables Strict Mode, which catches common coding
 //mistakes and "unsafe" actions. For instance:
 "use strict";
  x = 3.14;
  //This will display an error that x is not defined.
  let catName;
  let quote;
  function catTalk() {
    "use strict";
  
    catName = "Oliver";
    quote = catName + " says Meow!";
  
  }
  catTalk();
  //............Compare Scopes of the var and let Keywords..................
  let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
//----------------
function checkScope() {
  let i = 'function scope';
  //if (true) {
    //i = 'block scope';
    //console.log('Block scope i is: ', i);
 // }
  console.log('Function scope i is: ', i);
  return i;
}
//----Declare a Read-Only Variable with the const Keyword------
function printManyTimes(str) {

  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");
//----------Mutate an Array Declared with const---------
const s = [5, 7, 2];
function editInPlace(n) {
  // Only change code below this line
  
  // Using s = [2, 5, 7] would be invalid
  "use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  // Only change code above this line
}
editInPlace();

//-----Prevent Object Mutation------
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//-------Use Arrow Functions to Write Concise Anonymous Functions--------------
const magic = () => new Date();

//---------Write Arrow Functions with Parameters------------

const myConcat =(arr1, arr2)=>arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

//------Use the Rest Parameter with Function Parameters---
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

//---------Use the Spread Operator to Evaluate Arrays In-Place---------
//ex
//Copy all contents of arr1 into another array arr2 using the spread operator.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

 arr2 =[...arr1];  // Change this line

console.log(arr2);
