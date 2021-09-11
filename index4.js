//------Build JS objects--------
//EX
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
//ex
var myDog = {
   "name" :"Tom",
   "legs": 4,
   "tails": 1,
   "friends": ["Don", "Mau"]
  };
  //---Accessing Object Properties with Dot Notation---
  //EX
  var myObj = {
    prop1: "val1",
    prop2: "val2"
  };
  var prop1val = myObj.prop1;
  var prop2val = myObj.prop2;
  //EX
  // Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line

//---Accessing Object Properties with Bracket Notation---
//EX
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
//EX
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line

//-----Accessing Object Properties with Variables-----
//EX
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed);
//The string Doberman would be displayed in the console.
//ex
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name");
console.log(someObj[someProp]);
//someProp would have a value of the string propName, 
//and the string John would be displayed in the console.

//---Updating Object Properties------
// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name ="Happy Coder";

// ---------Add New Properties to a JavaScript Object------
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
//EX
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog["bark"] = ["woof"];

//--Delete Properties from a JavaScript Object------
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};
delete ourDog["bark"];

//----Using Objects for Lookups-----
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",


  25:"B",
  26:"A"
};
alpha[2];
alpha[24];

var value = 2;
alpha[value];
//alpha[2] is the string Y, alpha[24] is the string C, 
//and alpha[value] is the string Y.
//// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
      "bravo":"Boston",
    "charlie": "Chicago",
     "delta": "Denver",
      "echo":"Easy",
     "foxtrot":"Frank",

  }

  // Only change code above this line
  
  result =lookup[val];
  return result;
}
phoneticLookup("charlie");

//---Testing Objects for Properties----

var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
//The first hasOwnProperty returns true, while the second returns false.
// Setup
var Obj = {
  gift: "poney",
  pet: "kitten",
  bed: "sleigh",
  city: "Seattle",
}
 
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
//--Manipulating Complex Objects----
//within one Object we can add multiple proparies>>>
var myMusic = [
  {

    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true,
  },
  {
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
];
//---Accessing Nested Objects----
//ex
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
//ourStorage.cabinet["top drawer"].folder2 would be the string secrets, 
//and ourStorage.desk.drawer would be the string stapler.
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

//--Accessing Nested Arrays----
//ex
var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1];
ourPets[1].names[0];
//ourPets[0].names[1] would be the string Fluffy, 
//and ourPets[1].names[0] would be the string Spot.
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1];

//-----Record Collection--------
