function greeting(msg) {
  return function hey(name) {
    console.log(`${msg}, ${name}!`);
  };
}

var hello = greeting("Hello");

var howdy = greeting("Howdy");

hello("Shunnu"); // Hello, Shunnu!
hello("Virat"); // Hello, Virat!
