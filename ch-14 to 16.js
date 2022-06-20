let studentName = [] ; 
let oNArr = [] ;
let sArr = [ "a" , "b" , "c" , "d" , "e" , "f"] ;
let nArr = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ;

let mixArr = [ 1 , 2 , "a" , "b" , 3 , "f"] ;

let quali = [ " SSC " , " HSC " , " BSC " , " BS " , " BCOM " , " MS " , " M. Phil " , " PhD " ] ;

let list =  document.getElementById("myList") ;

quali.forEach((item) => {
    let li = document.createElement("li") ;
    li.innerHTML = item ;
    list.appendChild(li) ;
})


//document.querySelector("#quali").innerHTML = ` Qualifications : <br> <ol> ${quali} <ol/> <br>`;

// Question 8
// Write a program to store 3 students name in an array. Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
function qEight() {
    var student = ["Michael", "John", "Tony"];
    var score = [320, 230, 480];
    var total = 500;
    var percentage = [];
    document.write(`<h3>Q 8: Write a program to store 3 students name in an array. Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students.</h3><br><br>`);
    for (var i = 0; i < student.length; i++) {
        percentage[i] = (score[i] / total) * 100;
        document.write(`Score of ${student[i]} is ${score[i]}. Percentage: ${percentage[i]}%<br>`);
    }
    document.write(`<br></br><a href="./ch-14 to 16.html"><button>Back</button></a>`);
}

// Question 9
// Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.. Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. Display the updated array in your browser.
function qNine() {
    var color = ["Red", "Green", "Blue", "White", "Black"];
    document.write(`<h3>Q 9: Initialize an array with color names. Display the array elements in your browser.</h3>`);
    document.write(`<h5>A. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.</h5>`);
    var addColor = prompt("Enter a color to add to the beginning of the array");
    color.unshift(addColor);
    document.write(`<h5>B. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.</h5>`);
    var addColor = prompt("Enter a color to add to the end of the array");
    color.push(addColor);
    document.write(`<h5>C. Add two more color to the beginning of the array. Display the updated array in your browser.</h5>`);
    var addColor = prompt("Enter a color to add to the beginning of the array");
    color.unshift(addColor);
    var addColor = prompt("Enter a color to add to the beginning of the array");
    color.unshift(addColor);
    document.write(`<h5>D. Delete the first color in the array. Display the updated array in your browser.</h5>`);
    color.shift();
    document.write(`<h5>E. Delete the last color in the array. Display the updated array in your browser.</h5>`);
    color.pop();
    document.write(`<h5>F. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.. Display the updated array in your browser.</h5>`);
    var addColor = prompt("Enter a color to add to the beginning of the array");
    var index = prompt("Enter the index where you want to add the color");
    color.splice(index, 0, addColor);
    document.write(`<h5>G. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. Display the updated array in your browser.</h5>`);
    var index = prompt("Enter the index where you want to delete the color");
    var num = prompt("Enter the number of colors you want to delete");
    color.splice(index, num);
    document.write(`<h4>Updated Array: ${color}</h4>`);
    document.write(`<br></br><a href="./ch-14 to 16.html"><button>Back</button></a>`);
}

// Question 10
// Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

function qTen() {
    let studentScore = [320, 230, 480, 120];
    document.write(`<h3>Q 10:  Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.</h3><br><br>`);
    document.write(`Score of students: ${studentScore}<br>`);
    document.write(`Ordered Score of students: ${studentScore.sort()}<br>`);
    document.write(`<br></br><a href="./ch-14 to 16.html"><button>Back</button></a>`);
}

// Question 11
// Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. Cities list: Karachi, Lahore, Islamabad, Quetta, Peshawar. Selected cities list: [Islamabad, Quetta].
function qEleven() {
    let city = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    let selectedCities = [];
    selectedCities[0] = city[2];
    selectedCities[1] = city[3];
    document.write(`<h3>Q 11:  Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. <br><br>Cities list: Karachi, Lahore, Islamabad, Quetta, Peshawar. <br><br>Selected cities list: Islamabad, Quetta.</h3><br><br>`);
    document.write(`Cities list: ${city}<br>`);
    document.write(`Selected cities list: ${selectedCities}<br>`);
    document.write(`<br></br><a href="./index.html"><button>Back</button></a>`);
}

// Question 12
// Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
function qTwelve() {
    let arr = ["This ", " is ", " my ", " cat"];
    let str = arr.join("");
    document.write(`<h3>Q 12:  Write a program to create a single string from the below mentioned array: <br><br>let arr = [“This ”, “ is ”, “ my ”, “ cat”];</h3><br><br>`);
    document.write(`Array: ${arr}<br>`);
    document.write(`String: ${str}<br>`);
    document.write(`<br></br><a href="./ch-14 to 16.html"><button>Back</button></a>`);
}

// Question 13
// Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out). Using foreach loop.
// Devices: Keyboard, Mouse, Printer, Monitor
function qThirteen() {
    let devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
    let i = 0;
    document.write(`<h3>Q 13:  Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out). Using foreach loop.</h3><br><br>`);
    document.write(`Devices: ${devices}<br><br>`);
    devices.forEach(function (item) {
        document.write(`${item}<br>`);
    });
    document.write(`<br></br><a href="./ch-14 to 16.html"><button>Back</button></a>`);    
}

// Question 14
// Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In First Out). Using foreach loop.
// Devices: Keyboard, Mouse, Printer, Monitor in reverse order.
function qFourteen() {
    let devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
    let i = 0;
    document.write(`<h3>Q 14:  Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In First Out). Using foreach loop.</h3><br><br>`);
    document.write(`Devices: ${devices}<br><br>`);
    devices.reverse();
    devices.forEach(function (item) {
        document.write(`${item}<br>`);
    });
    document.write(`<br></br><a href="./ch-14 to 16.html"><button>Back</button></a>`);
}

// Question 15
// Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:

function qFifteen() {
    let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
    document.write(`<h3>Q 15:  Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. <br>Display the following dropdown/select menu in your browser using document.write() method:</h3><br><br>`);
    document.write(`<select>`);
    phoneManufacturers.forEach(function (item) {
        document.write(`<option>${item}</option>`);
    });
    document.write(`</select>`);
    document.write(`<br></br><a href="./ch-14 to 16.html"><button>Back</button></a>`);
}