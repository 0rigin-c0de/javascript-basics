function ksack(values, weights, capacity) {
  var load = 0;
  var i = 0;
  var w = 0;
  while (load < capacity && i < 4) {
    if (weights[i] <= capacity - load) {
      w += values[i];
      load += weights[i];
    }
  }
}
