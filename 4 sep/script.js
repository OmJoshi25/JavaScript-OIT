// Event bubbling : 1st child gets clicked and then parent
// Event capurting : 1st parent gets clicked and then child

let body = document.body;
let con = document.querySelector(".container");
let link = document.querySelector("#link");

// link.addEventListener("click", function(e){
//     console.log("Link Clicked");
//     e.preventDefault() // Breaks default behaviour---------------------
//     e.stopPropagation(); // Breaks event bubbling and event capturing. Only the element is clicked not the parents
// },false);

// 3rd parameter is by default false which means event bubbling. Setting it's value to true means event capurting

// con.addEventListener("click", function(e){
//     console.log("Container Clicked");
//     e.stopPropagation();
// },false);
// body.addEventListener("click", function(){
//     console.log("Body Clicked");
// },false);

// setTimeout(function(){
//     console.log("hello");
// },3000)// Runs function only once after specified time 

// let stopId = setTimeout(function(){
//     console.log("hello");
// },3000);
// link.addEventListener("click",(e) => {
//     e.preventDefault();
//     clearTimeout(stopId);// To stop the setTimout function
// });

// setInterval(function(){
//     console.log("bye");
// },2000)// Runs function multiple times after the specified interval

// let intervalId = setInterval(function(){
//     console.log("bye");
// },500);
// link.addEventListener("click",function(e){
//     e.preventDefault();
//     clearInterval(intervalId);// To stop setInterval function
// });

// BOM :
// window
// navigator
// location
// screen

// let url = "https://www.google.com";
// let features = "height=300;weight=300";

// window.open(url,"om",features); //2nd argument is name and can take any value
// link.addEventListener("click",function(e){
//     e.preventDefault();
//     newWindow = window.open(url,"google",features);
// });