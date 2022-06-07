
// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter

function checkCharacter(){
let character = document.querySelector(`#value`).value;

if (character == "" || character == null || character == " " || character == "  " || character == "   " || character == "    " || character == "     ") {
    alert("Empty String");
}
else if (!isNaN(character)) {
    alert(character + ' is a Number');
}
else if (character == character.toUpperCase()) {
    alert(character + ' is Upper Case');
}
else if (character == character.toLowerCase()) {
    alert(character + ' is Lower Case');
}
else {
    alert('Please enter an Alphabet or a Number');
}
}

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.


function checkValue(){
    let num1 = document.querySelector(`#num1`).value;
    let num2 = document.querySelector(`#num2`).value;
    if (num1 > num2) {
        alert(`${num1} is greater than ${num2}`);
    }
    else if (num1 < num2) {
        alert(`${num2} is greater than ${num1}`);
    }
    else {
        alert(`${num1} and ${num2} are equal`);
    }
}

    // <!-- 3. Write a program that takes input a number from user &
    // state whether the number is positive, negative or zero. -->

function checkP_N() {

let value1 = document.querySelector(`#value1`).value;

if (value1 > 0) {
    alert("The number is positive");
}

else if (value1 == 0) {
  alert("The number is zero");
}

else {
     alert("The number is negative");
}
}

    // 4. Write a program that takes a character (i.e. string of
    // length 1) and returns true if it is a vowel, false otherwise
    

function checkVowel() {

let value2 = document.querySelector(`#value2`).value;

if (value2 == "a" || value2 == "e" || value2 == "i" || value2 == "o" || value2 == "u" || value2 == "A" || value2 == "E" || value2 == "I" || value2 == "O" || value2 == "U") {
    alert(`${value2} is a vowel`);
}
else {
    alert(`${value2} is not a vowel`);
}
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise

function checkPassword() {

let pass1 = document.querySelector(`#pass1`).value;
let pass2 = document.querySelector(`#pass2`).value;

if(pass1 == ""){
    alert(`Please Enter Your Password`)
}else if (pass2 == ""){
    alert(`Please Your Confirm Password`)
}else if(pass1 == pass2){
    alert(`Correct! The password you entered matches the original password`)
}else if (pass1 != pass2)
    alert(`Incorrect password`)


}