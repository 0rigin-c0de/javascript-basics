// The Scope variable inside the function is not declared with the var keyboard, when the string "local" is assigned to the variable, 
//we are actually changing the value of the scope variable in the main program;


// JavaScript does not have block scope, we pretend like it does when we write for loops in javaScript;
for (var i = 1; i <= 10; ++i ) {
    console.log("Hello, world!");
   }
   