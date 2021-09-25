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

