 // the variable is said to have global scope, which means its value can be accessed by any part of a program, including functions.
// The following short program demonstrates how global scope works:

function showScope() {
    return scope;
   }
   var scope = "global";
   console.log(scope); // displays "global"
   console.log(showScope()); // displays "global"

   //Now watch what happens when we define a second scope variable within the show Scope() function:
   function showScope() {
    var scope = "local";
    return scope;
   }
   var scope = "global";
   print(scope); // displays "global"
   print(showScope()); // displays "local"

