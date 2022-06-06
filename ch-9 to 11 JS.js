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

    let fuelResult = 0.25;

    if (fuelInput == 0.25) {
        fuelResult = 'Fill your fuel';
    }
    else {
        fuelResult = `Your Fuel Is upto ${fuelResult} liters`;
    }
    let fuelResultElement = document.querySelector('#fuelResult');

    fuelResultElement.innerText = fuelResult;

}

// 5. Run this script, & check whether alert message would be
// displayed or not.Record the outputs.

// let a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// let b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// let c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// let materialCost = 20000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// <!-- 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table: -->


function markSheet() {

    let subName1 = document.querySelector('#subName1').value;
    let subName2 = document.querySelector('#subName2').value;
    let subName3 = document.querySelector('#subName3').value;

    let totalMarks1 = document.querySelector('#totalMarks1').value;
    let totalMarks2 = document.querySelector('#totalMarks2').value;
    let totalMarks3 = document.querySelector('#totalMarks3').value;

    totalMarks1 = Number(totalMarks1)
    totalMarks2 = Number(totalMarks2)
    totalMarks3 = Number(totalMarks3)

    let obtainMarks1 = document.querySelector('#obtainMarks1').value;
    let obtainMarks2 = document.querySelector('#obtainMarks2').value;
    let obtainMarks3 = document.querySelector('#obtainMarks3').value;

    obtainMarks1 = Number(obtainMarks1);
    obtainMarks2 = Number(obtainMarks2);
    obtainMarks3 = Number(obtainMarks3);

    let totalMarks = (totalMarks1 + totalMarks2 + totalMarks3);
    let obtainMarks = (obtainMarks1 + obtainMarks2 + obtainMarks3);
    let percent = ((obtainMarks / totalMarks) * 100);
    let result = "";
    let result2 = "";

    totalMarks = Number(totalMarks);
    obtainMarks = Number(obtainMarks);
    percent = Number(percent);


    if (percent < 60) {
        result = "Fail"

    } else if (percent > 59 && percent < 70) {
        result = "B"

    } else if (percent > 69 && percent < 80) {
        result = "A"

    } else {
        result = "A1"
    }


    if (percent < 60) {
        result2 = "Sorry"

    } else if (percent > 59 && percent < 70) {
        result2 = "You Need To Improve"

    } else if (percent > 69 && percent < 80) {
        result2 = "Good"

    } else {
        result2 = "Excellent"
    }



    let showTotalMarks = "Total Marks : " + totalMarks;
    let showObtainMarks = "Obtained Marks : " + obtainMarks;
    let showPercent = `Percentage : ${percent} %`;
    let showGrade = `Grade :  ${result}`;
    let showRemarks = `Remarks : ${result2}`;

    let showTotalMarksElement = document.querySelector('#showTotalMarks');

    showTotalMarksElement.innerText = showTotalMarks;

    let showObtainMarksElement = document.querySelector('#showObtainMarks');

    showObtainMarksElement.innerText = showObtainMarks;

    let showPercentElement = document.querySelector('#showPercent');

    showPercentElement.innerText = showPercent;

    let showGradeElement = document.querySelector('#showGrade');

    showGradeElement.innerText = showGrade;

    let showRemarksElement = document.querySelector('#showRemarks');

    showRemarksElement.innerText = showRemarks;


}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


let value = prompt('Gusss the number')

if (value <= 10) {
    alert('Bingo! Correct answer')
} else if (value <= 10 + 1) {
    alert('Close enough to the correct answer')
} else {
    alert('Bater Luck Next Time')
}

//    8. Write a program to check whether the given number is
//     divisible by 3. Show the message to the user if the number
//     is divisible by 3.

// let value2 = prompt('Gusss the number')
// if (value2 / 3)
//     alert(value2 + " is an Even Number");
// else
//     alert(value2 + " is an Odd Number");


// 9. Write a program that checks whether the given input is an
// even number or an odd number.

let value1 = prompt('Check Even Or Odd Number')
if (value1 % 2 == 0)
    alert(value1 + " is an Even Number");
else
    alert(value1 + " is an Odd Number");


    // 10. Write a program that takes temperature as input and
    // shows a message based on following criteria
    // a. T > 40 then “It is too hot outside.”
    // b. T > 30 then “The Weather today is Normal.”
    // c. T > 20 then “Today’s Weather is cool.”
    // d. T > 10 then “OMG! Today’s weather is so Cool.”

let tem = prompt('Type Temperature Centigrade Hare')
if (tem > 40){
    alert('It is too hot outside.')
}else if(tem > 30 ){
    alert('The Weather today is Normal.')
}else if(tem > 20){
    alert('Today’s Weather is cool.')
}else if(tem > 10){
    alert('OMG! Today’s weather is so Cool.')
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// Calculator
let a = prompt("Select an operator"," +  - / * ");
if(a == `+`)
{
    let b = + prompt("Enter 1st number");
    let c = + prompt("Enter 2st number");
    let d = + b+c;
    alert(`${b} + ${c} = ${d}`)
    document.write(`${b} + ${c} = ${d}`)

}
if(a == `-`)
{
    let b = + prompt("Enter 1st number");
    let c = + prompt("Enter 2st number");
    let d = + b-c;
    alert(`${b} - ${c} = ${d}`)
    document.write(`${b} - ${c} = ${d}`)
  
}
if(a == `*`)
{
    let b = + prompt("Enter 1st number");
    let c = + prompt("Enter 2st number");
    let d = + b*c;
    alert(`${b} x ${c} = ${d}`);
    document.write(`${b} x ${c} = ${d}`);

}
if(a == `/`)
{
    let b = + prompt("Enter 1st number");
    let c = + prompt("Enter 2st number");
    let d = + b/c;
    alert(`${b} / ${c} = ${d}`);
    document.write(`${b} / ${c} = ${d}`);
 
}
else{
    

}