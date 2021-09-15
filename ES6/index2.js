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
