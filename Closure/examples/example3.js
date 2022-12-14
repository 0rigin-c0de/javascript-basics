function counter(step = 1) {
  var count = 0;
  return function increaseCount() {
    count = count + step;
    return count;
  };
}

var increaseBy1 = counter(1);
var increaseBy3 = counter(3);

increaseBy1(); // 1
increaseBy1(); // 2

increaseBy3(); // 3
increaseBy3(); // 6
increaseBy3(); // 9
