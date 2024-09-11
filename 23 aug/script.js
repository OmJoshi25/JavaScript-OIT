// function fibonacci(n){
//     if(n===0)
//         return;
//     if(n===1)
//         return 0;
//     if(n===2)
//         return 1;
//     return fibonacci(n-1) + fibonacci(n-2)
// }
// for(let i=1;i<=10;i++){
//     console.log(fibonacci(i));
// }

//Anonymous function
// let sum=function (a,b){
//     return a+b;
// };
// console.log(sum(2,3));

//Immediately Invoked Function Expressions(IIFE)
// let msg="hello";
// function say(){
//     console.log(msg);
// }
// say();

// (function giveMsg(){
//     let msg="Chalo Ghumne";
//     console.log(msg);
// })()

// Arguments Object
function add(){
    sum=0;
    for(let i=0;i<arguments.length;i++)
        sum += arguments[i];
    return sum;
}
console.log(add(1,2,5,6,5));
// console.log(add(1,2,5));
// console.log(add(1,2,5,6,5,55,12,14));