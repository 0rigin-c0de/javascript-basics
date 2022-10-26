/* this function returns true if the function can return true for every element in the array */
function isEven(num){
    return num%2 ==0;
}
  var nums =   [2, 4, 6, 8, 10 ];
  var even =nums.every(isEven);
         if(even){
            console.log( "all numbers are even")
         }else{
            console.log("not all numbers are even")
         }

/*    The program displays :- all numbers are even;
       If we change the array to:-  var nums = [2,4,6,7,8,10];
      the program displays:-  not all numbers are even;
 */