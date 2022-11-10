function knapsack(values, weights, capacity) {
  var grab = 0;
  var i = 0;
  var w = 0;
  while (grab < capacity && i < 4) {
    if (weights[i] <= capacity - grab) {
      w += values[i];
      grab += weights[i];
    } else {
      var r = (capacity - grab) / weights[i];
      w += r * values[i];
      grab += weights[i];
    }
    ++i;
  }
  return w;
}

var items = ["A", "B", "C", "D"];
var values = [50, 140, 60, 60];
var weights = [5, 20, 10, 12];
var capacity = 30;
console.log(knapsack(values, weights, capacity));
