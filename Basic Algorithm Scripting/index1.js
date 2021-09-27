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

