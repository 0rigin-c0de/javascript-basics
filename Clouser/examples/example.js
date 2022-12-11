function sayHello() {
  var say = function () {
    console.log(hello);
  };
  // Local variable that ends up within the closure
  var hello = "Hello, World!";
  return say;
}
var sayHelloClouser = sayHello();

sayHelloClouser(); // Hello, World!
