// let b = document.getElementById("btn");

//window object-------------------------------------
// b.addEventListener("click",function(){
//     // window.open("https://www.google.com","_self") // _blank opens website in a new tab whereas _self,_parent,_top opens website on same tab.
//     // window.open("https://www.google.com","_blank") // default value is _blank, anything can be written instead of _blank but other parameters should be written in same format
//     // window.open("https://www.google.com","_blank","width=200,height=150,top=200,left=400");
//     console.log(window.innerHeight);
//     console.log(window.outerHeight);
//     console.log(window.innerWidth);
//     console.log(window.outerWidth);
// });

//Location Object-----------------------------------

// b.addEventListener("click",function(){
//     // location.href="https://www.example.com";
//     // location means website, location can be seen as subset of or is inside of a window
//     // location.assign("https://www.example.com"); // href internally calls this assign function
//     // location.replace("https.www.example.com"); // this function chnages the page/website but the history is cleared i.e. we cannot use back button
//     // location.reload(); // reloads the page
// });

//navigator object----------------------------------

// b.addEventListener("click",function(){
//     console.log(navigator.userAgent);
//     console.log(navigator.cookieEnabled); // Can be used in if-else to make user accept cookies
// });

//screen object--------------------------------------

// b.addEventListener("click",function(){
//     console.log(screen);// used to get details of user device
// });

import {a,say} from "./user.js"

console.log(a);
say();