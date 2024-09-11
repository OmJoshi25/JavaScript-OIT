// document.body.style.backgroundColor = "red";

// document.body.firstElementChild.firstElementChild.children[1].style.backgroundColor = "yellow";

// let box = document.querySelector("#box");

// let boxCopy = box.cloneNode();// Create a duplicate html entity without it's inner content
// let boxCopy = box.cloneNode(true);// Create a duplicate html entity with it's inner content

// document.body.appendChild(boxCopy);

// let list = document.querySelector("#list");
// console.log(list);
// console.log(list.classList.contains("p30"));
// list.classList.add("bg-pri");
// list.classList.remove("bg-pri");
// list.classList.toggle("bg-pri");// removes if present, add if absent
// list.classList.replace("bg-pri","bg-sec");

// let box = document.querySelector("#box")
// console.log("Height:",box.clientHeight); //Excludes border and padding
// console.log("Width:",box.clientWidth); //Excludes border and padding
// console.log("Offset Top:",box.offsetHeight); //Includes border and padding
// console.log("Offset Left:",box.offsetWidth); //Includes border and padding

let d = new Date();
console.log(d);

let new_date = new Date(2002,5,18,3,15,25,40);// year,month(array wise),day,hour,minutes,seconds,milliseconds
// If only 1 argumnet is passed then it is considered as milliseconds from 1 Jan 1970 
console.log(new_date);
console.log("H:",new_date.getHours());
console.log("Day in week:",new_date.getDay());
console.log("Month:",new_date.getMonth());

let new_d = new Date("2003 October");
console.log(new_d);