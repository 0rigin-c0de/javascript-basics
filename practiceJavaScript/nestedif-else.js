// this piece of code illustrate the nested if-else statements in javascript;


var mid = 25;
var high = 50;
var low = 1;
var current = 13;
var found = -1;
if (current < mid) {
 mid = (current-low) / 2;
}
else if (current > mid) {
    mid = (current+high) / 2;
   }
   else {
    found = current;
   }