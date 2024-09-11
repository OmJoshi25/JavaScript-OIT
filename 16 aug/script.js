//var and functions can be declared and defined any where in the program at any line even after function call or after use of var variable
//Only declaration of var and functions are shifted at top of the script at the time of interpretation. This property is called as hoisting.

// function Double(a){
//     return 2*a;
// }
// console.log(Double(25));

function gcd(x, y) {
  let gcd = 1;
  for (let i = 2; i <= (x < y ? x : y); i++) {
    if (x % i == 0 && y % i == 0) {
      g = i;
    }
  }
  return g;
}
console.log("GCD", gcd(18, 12));

function lcm(x, y) {
  let g = gcd(x, y);
  return (x * y) / g;
}
console.log("LCM", lcm(18, 12));
