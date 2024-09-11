// let i=0;
// while(i<=5){
//     console.log(2**i);
//     i++;
// }

//----------------------------------------------reverse--------------------------------------------------
// let i=234;
// let rev=0;
// while(i>0){
//     var n=i%10;
//     rev = (rev * 10) + n;
//     i=Math.floor(i/10);
// }
// console.log(rev);

//--------------------------------------binary to decimal------------------------------------------------
// let bin=1101;
// let k=0,dec=0;
// while(bin>0){
//     let n=bin%10;
//     dec+=(n * 2**k);
//     bin=Math.floor(bin/10);
//     k++;
// }
// console.log(dec);

//-------------------------------------decimal to binary-------------------------------------------------
// let dec = 15;
// let bin = "";
// // let bin = 0;
// // let i = 1;
// while (dec > 0) {
//   let n = dec % 2;
//   bin = n + bin;
//   // bin += n * i;
//   // i *= 10;
//   dec = Math.floor(dec / 2);
// }
// console.log(Number(bin));

// let pin =1234,n;
// do{
//     n=prompt("Enter Pin")
// }while(n!=pin);

// let n=Number(prompt("Enter number"));
// let flag=1,i=2;
// while(i<n){
//     if(n%i==0){
//         flag=0;
//         break;
//     }
//     i++
// }
// if(flag==1)
//     console.log("Prime");
// else
//     console.log("Not Prime");

// let n=Number(prompt("Enter number"));
// let a=0;b=1,c,i=1;
// while(i<=n){
//     console.log(a);
//     c=a+b;
//     a=b;
//     b=c;
// }

// let n=Number(prompt("Enter number"));
// let a=0;b=1,c
// while(a<=n);{
//     console.log(a);
//     c=a+b;
//     a=b;
//     b=c;
// }