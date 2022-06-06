
    // Write a program that takes a character (number or string)
    // in a variable & checks whether the given input is a
    // number, uppercase letter or lower case letter
        
    let character = prompt("Enter character");
    
    if (character == "" || character == null || character == " " || character == "  " || character == "   " || character == "    " || character == "     ") {
        alert("Empty String");
    }
    else if (!isNaN(character)) {
     alert (character + ' is a Number');
    }
    else if (character == character.toUpperCase()) {
     alert (character + ' is Upper Case');
    }
    else if (character == character.toLowerCase()){
     alert (character + ' is Lower Case');
    }
    else {
     alert ('Please enter an Alphabet or a Number');
    }
