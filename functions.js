/**
 * Write a function called add7 that takes one number and returns that number + 7.
Write a function called multiply that takes 2 numbers and returns their product.
Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
Write a function called lastLetter that takes a string and returns the very last letter of that string:
lastLetter("abcd") should return "d" */

function add7(number){
    return number + 7
}

function multiply(number1, number2){
    return number1 * number2
}

function capitalize(text){
    firstLetter = text.slice(0,1)
    firstLetter = firstLetter.toUpperCase()
    restOfText = text.slice(2)
    restOfText = restOfText.toLowerCase()
    return firstLetter + restOfText
}

function lastLetter(text){
    return text.substr(-1,1)
}

console.log(add7(3)); 
        console.log(multiply(3,4))
        console.log(capitalize("I WANT TO CAPITALIZE THIS"))
        console.log(lastLetter("RETURN THE LAST LETTER OF STRING"))