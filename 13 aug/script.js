// let a=3;
// let b=Number(null);
// let c=Boolean("");
// console.log(b);
// console.log(c);

// let a=3.5;
// console.log("a =",a); //3.5
// console.log("Floor a =",Math.floor(a)); //3
// console.log("Ceil a =",Math.ceil(a)); //4
// console.log("Round a =",Math.round(a)); //4
// console.log("trunc a =",Math.trunc(a)); //3

let i = 2;
while (i <= 10) {
  let j = 1;
  while (j <= 10) {
    // console.log(i, "*", j, "=", i * j);
    console.log(`${i} X ${j} = ${i*j}`);
    j++;
  }
  console.log("\n");
  i++;
}
