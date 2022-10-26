/* The some(); function will take a Boolean function and return true if at least one of the
elements in the array meets the criterion of the boolean function */
  
  function isEven (num){
     return num % 2 == 0;
  }
  var nums = [1,2,3,4,5,6,7,7,8,9];
  var someEven = nums.some(isEven);
  if(someEven){
   console.log("Some numbers  are even");
  }
  else{
   console.log("No numbers are even")
  }