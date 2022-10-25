/*Sort function works very well with strings */
let  names = ['Brooklyn', 'Anthony', 'Steve','Elon', 'Virat', 'Ronaldo'];
  names.sort();
  console.log(names);

/*But sort function do not work so well with numbers */
  var nums = [3,1,2,100,4,200];
nums.sort();
console.log(nums); // 1,100,2,200,3,4