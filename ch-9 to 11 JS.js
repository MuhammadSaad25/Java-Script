// <!-- 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
//  “Welcome to city of lights” -->

function checkCity() {

    let input1 = document.querySelector('#city').value;

    let result = "";

    if (input1 == "karachi" || input1 == "Karachi" || input1 == "Khi" || input1 == "khi" ) {
        result = "Welcome to city of lights";
    }else {
        result = "One Of the city of Pakistan"
    }

    let ResultElement = document.querySelector('#Result');

    ResultElement.innerText = result;

}

// <!-- 2. Write a program to take “gender” as input from user. If the
//     user is male, give the message: Good Morning Sir. If the
//     user is female, give the message: Good Morning Ma’am. -->
 
function checkGander() {

    let input2 = document.querySelector('#Gander').value;

    console.log(input2)

    let result1 = "";

    if (input2 == "Male" || input2 == "male") {
        result1 = "Good Morniing Sir";
    }else if(input2 == "Female" || input2 == "female"){
        result1 = "Good Morning Ma'am"
    }else {
        result1 = "Please Type Your Gender"
    }

    let Result1Element = document.querySelector('#Result1');

    Result1Element.innerText = result1;

}

// <!-- 3. Write a program to take input color of road traffic signal
//     from the user & show the message according to this table:
//     Signal color Message
//     Red Must Stop
//     Yellow Ready to move
//     Green Move now -->

function checkColorMean() {

    let colorInput1 = document.querySelector('#color1').value;
    let colorInput2 = document.querySelector('#color2').value;
    let colorInput3 = document.querySelector('#color3').value;

    console.log(colorInput1 , colorInput2 ,colorInput3); 

    

    let msg1 = "";
    let msg2 = "";
    let msg3 = "";
    let erorHeading = "";

    if (colorInput1 == "Red" || colorInput1 == "red") {
        msg1 = "Red Must Stop";
    }
    if(colorInput2 == "Yellow" || colorInput2 == "yellow"){
        msg2 = "Yellow Ready to move"
    }
    if(colorInput3 == "Green" || colorInput3 == "green"){
        msg3 = "Green Move now"
    }else {
        erorHeading = "Please Fill Like This 1.Red 2.Yellow 3.Green"
    }

    let msg1Element = document.querySelector('#msg1');

    msg1Element.innerText = msg1;
    
    let msg2Element = document.querySelector('#msg2');

    msg2Element.innerText = msg2;
    
    let msg3Element = document.querySelector('#msg3');

    msg3Element.innerText = msg3;
    
    let erorHeadingElement = document.querySelector('#erorHeading');

    erorHeadingElement.innerText = erorHeading;

}

