let btn = document.querySelector("#btn");

// btn.addEventListener("click",() => {
//     btn.style.backgroundColor = "orange";
// });

// Right Click
// btn.addEventListener("contextmenu",() => {
//     btn.style.backgroundColor = "orange";
// });

// btn.addEventListener("mouseover",() => {
//     btn.style.backgroundColor = "orange";
// });

// btn.addEventListener("mouseout",() => {
//     btn.style.backgroundColor = "white";
// });

//Mouse Moving
// btn.parentNode.addEventListener("mousemove", function(event){
//     console.log("Mouse is Moving\nX :",event.x,"Y :",event.y);
// });

// window.addEventListener("mousemove", function(event){
//     console.log("Mouse is Moving\nX :",event.x,"Y :",event.y);
// });

// Scroll Event ------------------------------------------------

// window.addEventListener("scroll",()=>{
//     console.log("Scrolling performed");
// });

// window.addEventListener("scroll",()=>{
//     if(this.window.pageYOffset > 500){
//         document.body.style.backgroundColor = "red";
//     }
//     else{
//         document.body.style.backgroundColor = "white";
//     }
// });

// window.addEventListener("scrollend",()=>{
//     console.log("Scrolling ended");
// });

//Wheel Event----------------------------------------------------
// window.addEventListener("wheel",(e) => {
//     if(e.deltaY > 0)
//         console.log("Scrolling Up");
//     else if(e.deltaY < 0)
//         console.log("Scrolling down");
// });

//Load Event-------------------------------------------------------
window.addEventListener("DOMContentLoaded",function(){
    console.log("Document Loaded");
}); // Executes when only document is loaded not the html content in it

window.addEventListener("load",function(){
    console.log("Content Loaded");
}); // Executes when document and html content both are loaded