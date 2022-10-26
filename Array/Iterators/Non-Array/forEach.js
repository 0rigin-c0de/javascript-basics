/*This function takes a function as an argument 
 and applies the called function to each element of an array */
/*this functions doubles the value of an array */
function square(num) {
    console.log(num, num * num);
   }
var nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12 ];
nums.forEach(square);
