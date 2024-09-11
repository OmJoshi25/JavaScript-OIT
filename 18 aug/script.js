// Math Module
// =============
// The math module is a built-in module in JavaScript that provides mathematical functions for trigonometry, exponential, logarithmic, and other mathematical operations.

console.log(Math.PI);
// output: 3.141592653589793 (22/7)

console.log(Math.E);
// output: 2.718281828459045

a = 2.50;
console.log(a);
// output: 2.75

console.log(Math.floor(a));
// output: 2

console.log(Math.ceil(a));
// output: 3

console.log(Math.trunc(a));
// output: 2

console.log(Math.round(a));
// output: 3

console.log(Math.max(23, 14, 94, 74, 84));
// output: 94

console.log(Math.min(23, 45, 67, 2, 9));
// output: 2

console.log(Math.pow(5, 4));
// output: 625

console.log(Math.random());
// output: a random number between 0 and 1

console.log(Math.random() * 10);
// output: a random number between 0 and 10

console.log(Math.floor(Math.random() * 10));
// output: a random integer between 0 and 10

console.log(Math.floor(Math.random() * 10) + 1);
// output: a random integer from 1 to 10

console.log(Math.floor(Math.random() * (30 - 20)) + 20);
// console.log(Math.floor(Math.random() * (max - min)) + min);
// output: a random integer from 20 to 30

console.log(Math.floor(Math.random() * (9999 - 1000) + 1000));
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// output: a random integer from 45 to 95

console.log(Math.sqrt(225));
// output: 5

console.log(Math.abs(-34));
// output: 34

console.log(Math.hypot(60,11))  // 60, 11 ---> 61
// output: 61

console.log(Math.log(10))
// output: 2.302585092994046

console.log(Math.exp(5))
// output: 7.38905609893065

console.log(Math.sin(Math.PI/2))
// output: 1

console.log(Math.cos(0))
// output: 1

console.log(Math.tan(0));
// output: 0