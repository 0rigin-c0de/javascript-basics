// this example of code demonstrate the if-else statement in javascript;

var mid = 25;
var high = 50;
var low = 1;
var current = 13;
var found = -1;
if (current < mid) {
 mid = (current-low) / 2;
}
else {
    mid = (current+high) / 2;
   }