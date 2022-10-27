# **Iterator Functions**

The final set of array functions we examine are iterator functions. These functions apply a function to each element of an array, either returning a value, a set of values, or a new array after applying the function to each element of an array.

## **Non Array Generating Iterator Functions**

The first group of iterator functions we’ll discuss do not generate a new array; instead, they either perform an operation on each element of an array or generate a single value from an array.

```jsx
/* Non Array Generating Functions */
every();
forEach();
reduce();
reduceRight();
reduceString();
some();
```

## New Array Generating Iterator Functions

There are two iterator functions that return new arrays: ``` map() ``` and ``` filter().``` The map() function works like the foreach() function, applying a function to each element of an array. The difference between the two functions is that map() returns a new array with the results of the function application