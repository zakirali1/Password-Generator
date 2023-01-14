// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Global Variables

const passwd = prompt("How many characters do you want to be in your password?");

let lowercase;
let uppercase;
let numeric;
let special;

// Function to start the password generation process, using a Regex pattern to restrict values to be within range of 10-64

const start = () => {
  const re = /^(1[0-9]|[2-5][0-9]|6[0-4])$/

  if(re.test(passwd)) {
    getPasswordOptions();
  } else {
     alert("must be select between 10-64 characters long");
     location.reload();
  }
}

// start program when page has loaded

window.addEventListener("load", (event) => {
  start();
});


// Function to prompt user for password options
function getPasswordOptions() {

 lowerCase = confirm("do you want lower case characters?");
 upperCase = confirm("do you want upper case characters?");
 numeric = confirm("do you want numeric characters?");
 special = confirm("do you want special characters?");

 if (lowerCase|| upperCase || numeric || special ) {
  
  generatePassword();

 } else {

alert("You need to select at least 1 type of character to generate a password.")
location.reload();
 }

}

// Function for getting a random element from an array
function getRandom(arr) {

  const check = Math.floor(Math.random() * arr.length);
  
  return arr[check];
 
}

// Function to generate password with user input
 function generatePassword() {
  let newstring = "";
  const numericPasswd = Number.parseInt(passwd, 10)

   for(let i = 0; i < numericPasswd; i++)  {
     if(lowerCase) {
      newstring += getRandom(lowerCasedCharacters);
     }
      if(upperCase) {
        newstring += getRandom(upperCasedCharacters);
      }
      if(numeric) {
        newstring += getRandom(numericCharacters);
      }
      if(special) {
        newstring += getRandom(specialCharacters);
      }

       
   }
   
   return newstring.substring(0,numericPasswd);
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword) ;