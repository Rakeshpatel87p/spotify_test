// Problem #1
var string = "Hola Spotify, I'm Rakesh, a big fan of yours";
reverseInput(string);


function reverseInput(string) {
    console.log(string);
    var reversedString = "";
    for (var i = string.length - 1; i >= 0; i--) {
        reversedString += string.charAt(i)
    }
    return reversedString;
};

// Problem #2
var inputArray = [42, 8, 13, 79, 5, 2, 18];

var newArray = inputArray.sort((a, b) => {return a - b})

var secondLowestNumber = newArray[1]