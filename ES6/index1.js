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
