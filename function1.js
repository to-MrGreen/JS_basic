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

