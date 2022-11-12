// Assignment code here
//create variables for each type of character that can be used
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var lowerCaseChoice = false;
var upperCaseChoice = false;
var numbersChoice = false;
var specialCharsChoice = false;

//write functions to select variables

function selectLength() {
    var length = 0;
    while ((length<8 || length>128)) {
        length = prompt("Please select a password lenght between 8 and 128 characters.");
        if (length<8 || length>128)
        alert("Please choose a number between 8 and 128.");
    }
        lowerCaseChoice = false;
        upperCaseChoice = false;
        numbersChoice = false;
        specialCharsChoice = false;
        while ((!lowerCaseChoice)&&(!upperCaseChoice)&&(!numbersChoice)&&(!specialCharsChoice)) {
            lowerCaseChoice = confirm("Do you want to include lowercase letters?");
            upperCaseChoice = confirm("Do you want to include uppercase letters?");
            numbersChoice = confirm("Do you want to include numbers?");
            specialCharsChoice = confirm("Do you want to include special characters?");
            if ((!lowerCaseChoice)&&(!upperCaseChoice)&&(!numbersChoice)&&(!specialCharsChoice))
            alert("Please select at least one of the character options.");
    }
    return length;
}






function generatePassword() {
    var charChoices = selectLength();
    var charCombo = "";
    var passwordChoice = "";
    console.log(charChoices)
    if (lowerCaseChoice) {
        charCombo += lowerCase;
        
    }
    if (upperCaseChoice) {
        charCombo += upperCase;
        
    }
    if (numbersChoice) {
        charCombo += numbers;
        
    }
    if (specialCharsChoice) {
        charCombo += specialChars;
        
    }
    console.log(charCombo)
    for (var i = 0; i < charChoices; i++) {
        passwordChoice += charCombo[Math.floor(Math.random()* charCombo.length)];
    }
    console.log(passwordChoice)
    return passwordChoice;
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);