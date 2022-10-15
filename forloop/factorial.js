//this piece of code demonstrates how value-returning functions are defined and called in Javascript

function factorial(number) {
    var product = 1;
    for (var i = number; i >= 1; --i) {
    product *= i;
    }
    return product;
   }
   console.log(factorial(4)); // displays 24
   console.log(factorial(5)); // displays 120
   console.log(factorial(10)); // displays 3628800