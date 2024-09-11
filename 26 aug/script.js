// let str="Hello, Good Morning!";
// let Name="Om";

// console.log(str+" "+Name);
// console.log(str.concat(" ",Name));
// console.log(`${str} ${Name}`);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let msg="Have a nice day";

// console.log(msg.indexOf('a'));
// console.log(msg.indexOf('a',2));
// console.log(msg.lastIndexOf('a'));
// console.log(msg.includes('nice'));

// console.log(msg.replace('nice','best'));

// console.log(msg.slice(2,6)); // Takes starting index and length of new string(i.e. sliced)
// console.log(msg.substring(2,6)); // Takes starting and ending index of the neew substring
// console.log(msg.split(" "));

// let word="   bye bye    ";
// console.log(word);
// console.log(word.trimStart());
// console.log(word.trimEnd());
// console.log(word.trim());

// let person = {
//     name: "Om",
//     age: 20,
//     city: "Pune",
//     sayBye (){
//         console.log("Bye Bye");
//     }
//     // sayBye: function (){
//     //     console.log("Bye Bye");
//     // }
// };

// console.log(person);
// console.log(person.age);
// console.log(person["age"]);

// person.DOB= "25/10/2003";
// console.log(person.DOB);

// console.log("age" in person);

// delete person.city;
// console.log(person);

// person.addr= "Ambegaon"
// for(let key in person){
//     console.log(person[key]);
// }

let car = {
    brand: "Mercedes",
    model: "Benz",
    year: 2029
}

// person.sayHello= function (){
//     console.log("Hello");
// }

// person.sayHello();
// console.log(person);

let person={
    name: "Om",
    age: 20,
    data:function (){
        console.log(`${this.name} have a car, ${car.brand} ${car.model}`);
    }
};
person.data();