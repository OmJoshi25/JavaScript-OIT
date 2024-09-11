//Resursion

//let add = 0;
// function sum(n){
//     if(n===0)
//         return 0;
//     // add += n;
//     // sum(n-1);
//     // return add;
//     return sum(n-1) + n;
// }
// console.log(sum(5));

// function fact(n){
//     if(n===1)
//         return 1;
//     return fact(n-1) * n;
// }
// console.log(fact(5));

function fibonacci(n, a=0, b=1){
    if(n===1)
        return [a];
    return [a].concat(fibonacci(n-1,b,a+b));
}
console.log(fibonacci(8));