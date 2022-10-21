// The simplest way of declare array by creating a array variable using [ ] this operator :
    var numbers =[ ] ;
    console.log(numbers.length); 

// Another way :
   var numbers = [1, 2, 3, 4, 5];
   console.log(numbers.length);

// Calling Array constructors 
  var numbers = new Array(1, 2, 3, 4, 5);
  console.log(numbers.length);

// Calling Array.isArray(); function:
   var numbers = 3;
   var arr = [7, 4, 1776];
   console.log(Array.isArray(numbers));  // display false;
   console.log(Array.isArray(arr));  // displays true;

