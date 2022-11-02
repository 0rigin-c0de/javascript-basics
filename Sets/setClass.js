let str = new Set("bookkeeper");
str.add(1);
str.add(2);
str.add(3);
str.add(2);
str.add("mike");
str.add("mike");

str.forEach(value => {
    console.log(value);
});
// find value in set:-
console.log(str.has("mike"));
console.log(str.has("Mike"));