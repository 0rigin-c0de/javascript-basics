// Demonstrate the ramifications of leaving off the var keyboard when defining variables

function showScope() {
    scope = "local";
    return scope;
   }
   // Global variables can be declared at any place in a program, either before or after function definitions

   scope = "global";
   console.log(scope); // displays "global"
   console.log(showScope()); // displays "local"
   console.log(scope); // displays "local"

   