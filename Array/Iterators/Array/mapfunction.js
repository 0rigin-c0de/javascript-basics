/* map(); function returns a new array with the result of the function application */

function curve(grade){
    return grade +=5;
}
var grades = [77,65,81,92,83];
var newgrades =grades.map(curve);
console.log(newgrades);
