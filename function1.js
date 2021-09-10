//---Write Reusable JavaScript with Functions
function functionName() {
  console.log("Hello World");
}
//>>>
function reusableFunction(){
  console.log("Hi World");
}
reusableFunction();

//-----Passing Values to Functions with Arguments-------
function testFun(param1, param2) {
  console.log(param1, param2);
}
/*
Then we can call testFun like this: testFun("Hello", "World");. 
We have passed two string arguments, Hello and World. 
Inside the function, param1 will equal the string
Hello and param2 will equal the string World. 
Note that you could call testFun again with different 
arguments and the parameters would take on the value of the new arguments
*/
function functionWithArgs(num1, num2){
  console.log(num1 + num2);
}
functionWithArgs(10,20);

//----Global Scope and Function-----
// Declare the myGlobal variable below this line
var myGlobal =10;

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
//-----Local Scope and Functions
function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest();
//console.log(loc); // this loc can't be access cause loc is local

//---Global vs. Local Scope in Functions-----
//It is possible to have both local and global variables with the same name.
// When you do this, the local variable takes precedence over the global variable.

var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}

//----Return a Value from a Function with Return----
function timesFive(num){
  return 5*num;
}
console.log(timesFive(2));

//--Understanding Undefined Value returned from a Function--
// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum += 5;
}

// Only change code above this line

addThree();
addFive();

//--Assignment with a Returned Value----
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
var processed= processArg(7);

//------Stand in Line----------
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  item = arr.shift(); 
  return item;
  // Only change code above this line
  }

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//-Understanding Boolean Values--

//--Use Conditional Logic with If Statements--
//EX.
function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);
test(false);
//
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if (wasThatTrue){
  return "Yes, that was true";
}
return "No, that was false";
}
trueOrFalse(true);
trueOrFalse(false);

//--Comparison with the Equality Operator--


function testEqual(val) {
  if (val==12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);

//--Comparison with the Strict Equality Operator----
function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);

//---Comparison with the Inequality Operator---
// Setup
function testNotEqual(val) {
  if (val!=99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);
//--Comparison with the Strict Inequality Operator--
// Setup
function testStrictNotEqual(val) {
  if (val!==17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);

//---Comparison with the Greater Than Operator----

function testGreaterThan(val) {
  if (val>100) {  // Change this line
    return "Over 100";
  }

  if (val>10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

//---Comparison with the Greater Than Or Equal To Operator------
function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

//-----Comparison with the Less Than Operator------
function testLessThan(val) {
  if (val<25) {  // Change this line
    return "Under 25";
  }

  if (val<55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

//-----Comparisons with the Logical And Operator--------
function testLogicalAnd(val) {
  // Only change code below this line

  if (val<=50 && val>=25) {
    
      return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

//-----Comparisons with the Logical Or Operator-------
function testLogicalOr(val) {
  // Only change code below this line

  if (val>10 || val<20) {
    return "Outside";
  }
 // Only change code above this line
  return "Inside";
}
testLogicalOr(15);

//---------

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  }
else if(val>=5 && val<=10){
  return "Between 5 and 10";
}
}
testElseIf(7);

//-------Chaining If Else Statements---------
function testSize(num) {
  // Only change code below this line
if(num<5){
  return "Tiny";
}
else if(num<10){
  return "Small";
}
else if(num<15){
  return "Medium";
}
else if(num<20){
  return "Large";
}
else{
  return "huge";
}
  return "Change Me";
  // Only change code above this line
}
testSize(7);

//------Golf Code------

