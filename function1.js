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

