//-----Use Destructuring Assignment to Extract Values from Objects-----
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
// Only change code below this line

const {today, tomorrow} = HIGH_TEMPERATURES;
//const tomorrow = HIGH_TEMPERATURES.tomorrow;


//----Use Destructuring Assignment to Assign Variables from Objects---------
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
//const highTomorrow = HIGH_TEMPERATURES.tomorrow; 


//-----Use Destructuring Assignment to Assign Variables from Nested Objects----
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
//Here's how to extract the values of object properties and 
//assign them to variables with the same name:
const { johnDoe: { age, email }} = user;
//And here's how you can assign an object properties' 
//values to variables with different names:
const { johnDoe: { age: userAge, email: userEmail }} = user;
//Ex
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const {today: {low: lowToday, high: highToday}}=LOCAL_FORECAST;
  
//const lowToday = LOCAL_FORECAST.today.low;
//const highToday = LOCAL_FORECAST.today.high;

//----Use Destructuring Assignment to Assign Variables from Arrays-------

//Destructuring an array lets us do exactly that:
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
//The console will display the values of a and b as 1, 2.
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
//The console will display the values of a, b, and c as 1, 2, 5.

//Ex
let a = 8, b = 6;
// Only change code below this line 
 [a, b] = [b, a];

//----Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements---
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a,b, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);

//--Use Destructuring Assignment to Pass an Object as a Function's Parameters------
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
console.log(half);
// Only change code above this line

//---Create Strings using Template Literals-----
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  "use strict";
  const failureItems=[];
  for(let i = 0; i<arr.length; i++){
   failureItems.push (`<li class="text-warning">${arr[i]}</li>`);
  // Only change code above this line
  }
  return failureItems;
}

const failuresList = makeList(result.failure);

//------Write Concise Object Literal Declarations Using Object Property Shorthand-----

//old
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};
//New ES6
const createPerson = (name, age, gender) => ({name, age, gender});

 //----------
 // Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear){
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);


//-----Use class Syntax to Define a Constructor Function------
//Ex
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
//// new way with constructor

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
/* It should be noted that the class keyword declares a new function,
to which a constructor is added. This constructor is invoked when new is called to create a new object.
Note: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.
>>The constructor method is a special method for creating and initializing an object created with a class.
You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms
And Data Structures Certification.*/

// Problem solve
// Only change code below this line
class  Vegetable{
  constructor (name){
  this.name = name; 
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

//---Use getters and setters to Control Access to an Object----
// Only change code below this line
class Thermostat{
  constructor(fahrenheit){
    this.fahrenheit = fahrenheit;
  }
  get temperature (){
    return (5/9) * (this.fahrenheit - 32);
  }
  set temperature(celsius){
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

//---Create a Module Script-------
<html>
  <body>
    
<script type ="module" src="index.js"></script>
    
  </body>
</html>

//-----Use export to Share a Code Block-----
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export{uppercaseString,lowercaseString};

//------------Reuse JavaScript Code Using import---------------
import {uppercaseString, lowercaseString} from './string_functions.js';
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

//-------Use * to Import Everything from a File----------
import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

//-----Create an Export Fallback with export default--------

export default function subtract(x, y) {
  return x - y;
}
//----Import a Default Export------
import subtract from "./math_functions.js";
// Only change code above this line

subtract(7,4);

//-------Create a JavaScript Promise------
const makeServerRequest = new Promise((resolve, reject) => {

});

//----Complete a Promise with resolve and reject---------
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    resolve("We got the data");
  } else {	
    reject("Data not received");
  }
});

//-----Handle a Fulfilled Promise with then-------------
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
	
  if(responseFromServer) {
    resolve("We got the data");
  } else {	
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

//-------Handle a Rejected Promise with catch-------
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
 makeServerRequest.catch(error => {
  console.log(error);
});