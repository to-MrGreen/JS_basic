// After 25% ----Appending Variables to Strings------
var someAdjective = "love";
var myStr = "Learning to code is ";
myStr+= someAdjective;

//--- Find the Length of a String
var lastNameLength = 0;
var lastName = "Lovelace";
console.log(lastName.length);// 1st way

lastNameLength = lastName.length;// 2nd way

//---Use Bracket Notation [] to Find the First Character in a String------
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0]; 

//-----Use Bracket Notation to Find the Last Character in a String-------

var lastName = "Lovelace";

var lastLetterOfLastName = lastName[lastName.length - 1]; 

//------Word Blanks------
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "My "+myNoun+" is "+myAdjective+" and "+myVerb+" very "+myAdverb; // Change this line
// Only change code above this line


//------Store Multiple Values in one Variable using JavaScript Arrays--------
var myArray = ["My", 20, "taka"];

//---Nest one Array within Another Array---
var myArray = [["I", "am"], ["Tanu", "you?"]];

//-----------
var myArray = [50,60,70];
var myData = myArray[0];

//-------Modify Array Data With Indexes---------
var myArray = [18,64,99];
myArray[0] =45;

//--------Access Multi-Dimensional Arrays With Indexes------------

var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3];
arr[3][0];
arr[3][0][1];
/*
arr[3] is [[10, 11, 12], 13, 14], 
arr[3][0] is [10, 11, 12], and 
arr[3][0][1] is 11.
*/ 
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[2][1];
console.log(myData);

//-------Manipulate Arrays With push()------------

var arr1 = [1,2,3];
arr1.push(4);

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
/*
arr1 now has the value [1, 2, 3, 4] and 
arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].
*/
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
console.log("--- Push() test~~~~~");
console.log(myArray);

//-----Manipulate Arrays With pop()----------
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
/*
The first console.log will display the value 6, and
the second will display the value [1, 4]. 
*/
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();

//-------Manipulate Arrays With shift()---------
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();

/*
removedFromOurArray would have a value of the string Stimpson, and 
ourArray would have ["J", ["cat"]]. 
*/
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();


