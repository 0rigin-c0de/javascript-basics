load("dictionary.Class.js");
var code = new Dictionary();
code.add("Mike","123");
code.add("David", "345");
code.add("Cynthia", "456");
console.log("David's extension: " + code.find("David"));
code.remove("David");
code.showAll();
