function first(word){
    return word[0];
}
var words = ["For","Your","Information"];
var  word1 = words.map(first);
console.log(word1.join(" "));