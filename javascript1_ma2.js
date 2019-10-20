//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function Book () {
    this.name = "Pets"
}

Book.prototype.type = function () {
    console.log("This book is about" + this.name);
};

var pets = new animal();
pets.type();


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var myArray = [];
var numbersOneToTen = ['1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' '10']

console.log(myArray.slice(4 , 1));

//3. Delete the last number in the array that you created above.

myArray.pop();

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.



var p = 'Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.'

console.log(p.replace('strawberry', 'banana' ));

console.log(p.replace('strawberries' , 'bananas'));




//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var myArray = [];
var fotballClubs = ['United' , 'Chelsea' 'City' , 'York']

console.log(myArray[0] = 'x');
console.log(myArray[1] = 'prius');
console.log(myArray[2] = 'fiesta');
console.log(myArray[3] = 'octavia');



//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var names = ['ron' , 'ronny' , 'kevin'];
function checkName(name) {
  return name = 'ron';
}




//7. Create a simple function that logs the date.

var today = new Date();
var date = today.getDate();

 console.log("today is" + today.getDate);