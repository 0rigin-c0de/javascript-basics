// For loop assigns the value 1 through 100 to an array  :
  var nums = [ ];
  for (var i = 0 ;  i < 100; ++i){
    nums[i] += i+1;
  }

// Accessed elements using [ ] this operator :

  var numbers = [1,2,3,4,5];
  var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] +
  numbers[4];
  console.log(sum); // displays 15

// Easiest way using for loop :
  var numbers = [1,2,3,5,8,13,21];
  var sum = 0;
  for (var i = 0; i < numbers.length; ++i) {
  sum += numbers[i];
 }
  console.log(sum); // displays 53

// For loop is controlled using length property rather than an integer literal ;