//Demonstrate how split function works on a simple string :

  var sentence = "Do you even code bruh";
  var words = sentence.split(" ");
  for (var i = 0; i < words.length;++i){
    console.log("word " + i + ": " + words[i]);
  }
  