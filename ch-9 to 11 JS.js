// <!-- 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
//  “Welcome to city of lights” -->

function checkCity() {

    let input1 = document.querySelector('#city').value;
    console.log("input1", input1);

    // let cityName = "karachi";

    let result = "";

    if (input1 == "karachi" || input1 == "Karachi" || input1 == "Khi" || input1 == "khi" ) {
        result = "Welcome to city of lights";
    }else {
        result = "One Of the city of Pakistan"
    }

    console.log("result", result);

    let ResultElement = document.querySelector('#Result');

    ResultElement.innerText = result;

}

// <!-- 2. Write a program to take “gender” as input from user. If the
//     user is male, give the message: Good Morning Sir. If the
//     user is female, give the message: Good Morning Ma’am. -->
 
function checkCity() {

    let input1 = document.querySelector('#city').value;
    console.log("input1", input1);

    // let cityName = "karachi";

    let result = "";

    if (input1 == "karachi" || input1 == "Karachi" || input1 == "Khi" || input1 == "khi" ) {
        result = "Welcome to city of lights";
    }else {
        result = "One Of the city of Pakistan"
    }

    console.log("result", result);

    let ResultElement = document.querySelector('#Result');

    ResultElement.innerText = result;

}

