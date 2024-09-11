// let n=Number(prompt("Enter number"));
// let f=1;
// for(let i=n;i>0;i--){
//     f *= i;
// }
// console.log(`Factorial of ${n} is ${f}`);

// let n=Number(prompt("Enter number"));
// for(let i=1;i<=5;i++){
//     console.log(i*i*i);
// }

// let x = Number(prompt("Enter x"));
// let y = Number(prompt("Enter y"));
// let gcd = 1;
// for (let i = 2; i <= (x < y ? x : y); i++) { //for(let i=0;i<=x && i<=y;i++)
//   if (x % i == 0 && y % i == 0)
//     gcd = i;
// }
// if(gcd === 1)
//     console.log("Given x and y are coprime");
// else
//     console.log(`GCD is ${gcd}`);

// let sum=0;
// let n=Number(prompt("Enter a number"))
// for(let i=1;i<=n;i=i+0.1){
//   sum += i;
// }
// console.log(sum);

// let sum=0;
// let n=Number(prompt("Enter a number"))
// for(let i=1;i<=n;i++){
//   sum += i**2;
// }
// console.log("Sum of squares",sum);

// let str="";
// for(i=1;i<=5;i++){
//   for(j=1;j<=5;j++){
//     if(i+j>=5+1)
//       str+="* ";
//     else
//       str+="  ";
//   }
//   str+="\n";
// }
// for(i=1;i<=5;i++){
//   for(j=1;j<=5;j++){
//     if(i<j)
//       str+="* ";
//     else
//       str+="  ";
//   }
//   str+="\n";
// }
// console.log(str);

// let n=Number(prompt("Enter number"))
// let sum=0;
// for(i=1;i<=n;i++){
//   sum += i**i;
// }
// console.log(sum);

// let str = "";
// for (i = 1; i <= 5; i++) {
//   for (j = 1; j <= 5; j++) {
//     if (i + j >= 5 + 1) 
//       str += "* ";
//     else 
//     str += "  ";
//   }
//   for (j = 1; j <= 5; j++) {
//     if (i > j) 
//       str += "* ";
//     else 
//     str += "  ";
//   }
//   str += "\n";
// }
// console.log(str);

// let n=Number(prompt("Enter number of terms "))
// let sum=0;
// j=1;
// for(i=1;i<=n;i++){
//   sum += 1/(j);
//   j+=2;
// }
// console.log(sum);