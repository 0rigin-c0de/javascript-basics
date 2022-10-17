//illustrates how to write a function that is used not for its return value,but for the operations it performs;
function curve(arr, amount) {
    for (var i = 0; i < arr.length; ++i) {
    arr[i] += amount;
    }
   }
   var grades = [77, 73, 74, 81, 90];
   curve(grades, 5);
   console.log(grades); // displays 82,78,79,86,95