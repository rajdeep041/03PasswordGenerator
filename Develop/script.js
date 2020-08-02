// Assignment Code
var generateBtn = document.querySelector("#generate"); //generate button
var passwordText = document.querySelector("#password"); //password field


// DOM elements
const resultEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numericEl = document.getElementById('numeric');
const specialEl = document.getElementById('specialCharacters');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getNumeric,
  symbol: getSpecial
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}


// Add event listener to generate button
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numericEl.checked;
  const hasSpecial = specialEl.checked;

  resultEl.innerText = generatePassword (
    hasLower,
    hasUpper,
    hasNumber,
    hasSpecial,
    length
  );
});

function generatePassword(lower, upper,  number, symbol, length) {
  let generatePassword = '';
  const typesCount = lower + upper + symbol + number;
   console.log('typeCount: ', typesCount);
  const typesArr = [{ lower }, { upper }, { symbol }, { number }].filter(item => Object.values(item)[0]);
   console.log('typesArr: ', typesArr);

  if(typesCount === 0) {
    return '';
  }
  
  for(let i=0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatePassword += randomFunc[funcName]();
    });
  }
  finalPassword = generatePassword.substring(0, length)
  return finalPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getSpecial() {
const symbols = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~"';
return symbols[Math.floor(Math.random() * symbols.length)];
}

function getNumeric() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}