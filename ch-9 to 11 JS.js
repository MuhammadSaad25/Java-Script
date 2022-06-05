// <!-- 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
//  “Welcome to city of lights” -->

function checkCity() {

    let input1 = document.querySelector('#city').value;

    let result = "";

    if (input1 == "karachi" || input1 == "Karachi" || input1 == "Khi" || input1 == "khi") {
        result = "Welcome to city of lights";
    } else {
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
    } else if (input2 == "Female" || input2 == "female") {
        result1 = "Good Morning Ma'am"
    } else {
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

    console.log(colorInput1, colorInput2, colorInput3);



    let msg1 = "";
    let msg2 = "";
    let msg3 = "";
    let erorHeading = "";

    if (colorInput1 == "Red" || colorInput1 == "red") {
        msg1 = "Red Must Stop";

    } else if (colorInput1 == "Yellow" || colorInput1 == "yellow") {
        msg1 = "Yellow Ready to move";

    } else if (colorInput1 == "Green" || colorInput1 == "green") {
        msg1 = "Green Move now";

    } else if (colorInput1 != "Red" || colorInput1 != "red") {
        msg1 = "Error ! Please fill correct color name";

    }

    if (colorInput2 == "Red" || colorInput2 == "red") {
        msg2 = "Red Must Stop";

    } else if (colorInput2 == "Yellow" || colorInput2 == "yellow") {
        msg2 = "Yellow Ready to move";

    } else if (colorInput2 == "Green" || colorInput2 == "green") {
        msg2 = "Green Move now";

    } else if (colorInput2 != "Red" || colorInput2 != "red") {
        msg2 = "Error ! Please fill correct color name";

    }

    if (colorInput3 == "Red" || colorInput3 == "red") {
        msg3 = "Red Must Stop";

    } else if (colorInput3 == "Yellow" || colorInput3 == "yellow") {
        msg3 = "Yellow Ready to move";

    } else if (colorInput3 == "Green" || colorInput3 == "green") {
        msg3 = "Green Move now";

    } else if (colorInput3 != "Red" || colorInput3 != "red") {
        msg3 = "Error ! Please fill correct color name";

    } else {
        erorHeading = "Please Fill Creack Colour Name In Above Three Empaty Colums "
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

// <!-- 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car” -->


function checkFuel() {

    let fuelInput = document.querySelector('#fuelInput').value;
    // let fuelInput = number()
    console.log(fuelInput)

    let fuelResult = "";

    if (fuelInput == parseFloat("0.25") ) {
        fuelResult = "Good Morniing Sir";
    } else {
        fuelInput = "Please Type Your Gender"
    }

    let fuelResultElement = document.querySelector('#fuelResult');

    fuelResultElement.innerText = fuelResult;

}

// 5. Run this script, & check whether alert message would be
// displayed or not.Record the outputs.

    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true");
    }
    var b = 82;
    if (b++ === 83) {
        alert("given condition for variable b is true");
    }
    var c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
    }
    if (c === 13) {
        alert("condition 2 is true");
    }
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    }
    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }
    if ("car" < "cat") {
        alert("car is smaller than cat");
    }

