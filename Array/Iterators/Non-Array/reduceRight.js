function concat(accumulatedString, item) {
    return accumulatedString + item;
   }
   var words = ["Eat ","Sleep ","Code ","Repeat "];
   var sentence = words.reduceRight(concat);
   console.log(sentence); 