/*The reduce() function, in conjunction with the add() function,works from left to right,
computing a running sum of the array elements */

function add(runningTotal, currentTotal){
    return runningTotal + currentTotal;
}

var nums = [1,2,3,4,5,6,7,8,9,10];
var sum = nums.reduce(add);
console.log(sum);
