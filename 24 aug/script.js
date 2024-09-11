// let Letters=['a','b','c','d'];
// console.log(Letters);
// Letters[2]="e";
// console.log(Letters);

// let nums=[22,44,55,99,66];
// console.log(nums);
// nums.push(33)
// console.log(nums);
// nums.pop();
// p=nums.pop();
// console.log(nums);

// nums.unshift(77); // Adds elements at starting
// console.log(nums);

// nums.shift(); // Removes first element
// console.log(nums);

// let arr=[23,34,45,67,78,90]
// let brr=[23,34,45,67,78,90]
// console.log(arr.concat(brr)); //arr.concat(brr,crr,drr,...)

// let arr=[2,3,5,6,9,4,5,0,6,2,9,8,5]
// console.log(arr);
// arr.splice(2,5);
// console.log(arr);
// console.log(arr.indexOf(9));

// let nums=[2,3,8,9,6,5];
// for(let i=0;i<nums.length;i++)
//     console.log(nums[i]);

//For of loop
// for(let num of nums) // num takes the values in nums not index
//     console.log(num);

//Foreach
// nums.forEach(function(value){
//     console.log(value);
// })

// nums.forEach(value => console.log(value)); // By Using Arrow Function

// let book = new Array("Eng","Math","Sci")
// console.log(book);
// book.length=0 // Clears the array
// console.log(book);

// let arr=[2.13,45,"Hello",true,35,78];
// console.log(arr);

let book=[
    ["Eng",200],
    ["Math",300],
    ["Sci",400],
    ["His",500]
];

console.log(book[1][1]);

book[2][1] = 700;
console.log(book);