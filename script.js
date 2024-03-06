//EXER.1:Declare a variable 
// for your age and display it in console

let age=37;
console.log(`varsta mea este ${age}`);

//Calculates the sum of two numbers 
// and display the result

let numberA=12;
let numberB=20;
let sum= numberA + numberB;
console.log(`Rezultatul sumei dintre ${numberA} si ${numberB} este ${sum}`);

//Declare a variable for temperature in
// Celsius degrees and convert it to Fahrenheit temperature
 //(celsiusTemperature * 9/5) + 32;


let temperatureC = 10;
let temperatureF = temperatureC * 9/5 + 32;
console.log(`temperatura in grade celsius: ${temperatureC} echivaleaza cu ${temperatureF} Farenheit`);


// Assign to a string the value
// "Hello," then add your name and display the Result

let myMessage = "Hello ";
let myName = "Claudia";
let fullGreeting = myMessage + myName;
console.log(`Mesaj de salut ${fullGreeting}`);

// Check if a number is even or odd and display the result

let numberD = 24;
let isEven= numberD % 2 ==0;

console.log("24 este par", isEven);

// Declare a Boolean variable to check if you are a student or not

let isStudent = true;
console.log(isStudent);

// Declare two string variables and concatenate them

let firstCourseName = 'Java';
let secondCourseName = 'Script';
let fullName = firstCourseName + ' ' + secondCourseName;
console.log(fullName);

// Calculate the remainder of the division of two numbers and display the result.

let N = 36;
let M = 3;
let result = N/M;
console.log(result);

let dividend = 60;
let divisor = 4;
let remainder = dividend / divisor;
console.log(remainder);

// Declare a variable and assign it the "undefined" value, then display the result

let mySurname = undefined;
console.log(mySurname);

//Calculates the area of a rectangle using it's length and width

let length = 10;
let width = 4;
let area = length * width;
console.log(area);

//Check if two strings are identical and display the result

let sirA = '112233';
let sirB = '111222';
console.log(`sir A este identic cu sir B? =  ${sirA === sirB}`);

// Declare two Boolean variables and perform logical operations on them 
// &&- returns TRUE, if both expressions are true
// || - returns True if at least one expression is true
//  ! - Reverses the value of an expression;

let conditionA = true;
let conditionB = true;

console.log(conditionA && conditionB);
console.log(conditionA || conditionB);
console.log(!conditionA);


//Declare a variable for the birth year and calculate the age 

let birthYear = 1986;
let varsta = 2024 - birthYear;
console.log(varsta);

// Concatenates two strings and converts the result to uppercase 

let character1 = 'curs';
let character2 = 'JavaScript';
let fullText = character1 + ' '+ character2;
let upperCaseName = fullText.toUpperCase();
console.log(upperCaseName);

// Check if a number is greater than or equal to 100 and display the result

let numberE = 112;
console.log((numberE >=100));

// Declare a variable for distance in kilometers and convert it to miles
// formula:  distanceInKm * 0.621371

let kmDistance = 85;
let mileDistance = kmDistance * 0.621371;
console.log(`If Km distance is ${kmDistance}, then Mile Distance equals ${mileDistance}`);

//Assign to a number a null value and verify the data type

let nullNumber = null;
console.log(typeof nullNumber);

// Declare two numbers and check if they are equal 

let numberX = 25;
let numberZ = 22;
console.log(`Numbers ${numberX} and ${numberZ} are equal?, ${numberX === numberZ}`);

// Declare a variable for the price of a product then apply a discount
// then display the discounted price

let chocolatePrice = 12;
let discount = 0.08;
let reducedPrice =chocolatePrice - (chocolatePrice * discount);
console.log(reducedPrice);