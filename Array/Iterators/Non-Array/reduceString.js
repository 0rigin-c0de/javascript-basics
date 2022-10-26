/* We can also use reduce() with strings to perform concatenation */

function concat(accumulatedString, item){
    return accumulatedString + item;
}

 var words =["Do ", "you ", "even ","code ", "bro"];
 var sentence = words.reduce(concat);
 console.log(sentence);