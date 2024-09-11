let btn = document.querySelector("button");
let input = document.querySelector("#in");
let box=document.querySelector("#box");

// function Display(){
//     console.log("Button is Clicked!");
//     // btn.style.backgroundColor = "red";
//     btn.classList.toggle("bg-red");
// }

//When writing internal js add "on" keyword before every event listner

//button event
// btn.addEventListener("click",Display); // External js

// btn.addEventListener("dblclick",Display);

btn.addEventListener("dblclick",function (){
    console.log("Button is Clicked!");
    btn.classList.toggle("bg-red");
});

//input event
input.addEventListener("focus",function(){
    // input.classList.toggle("bg-yellow");
    input.classList.add("bg-yellow");
    // input.style.backgroundColor = "yellow";
}); // when clicked on input till yo go out of that field

input.addEventListener("blur",function(){
    // input.style.backgroundColor = "white";
    // input.classList.toggle("bg-yellow");
    input.classList.remove("bg-yellow");
});// when you clicked out of input

// input.addEventListener("change",function(){
//     console.log("input content change to : "+this.value);
// });

input.addEventListener("input",function(){
    console.log("input content change to : "+this.value);
});

//mouse event
//It also have click and dblclick
box.addEventListener("mouseenter",function(e){
    console.log("Mouse is Entered in box");
    console.log("Mouse position : "+e.clientX+" "+e.clientY);
});

box.addEventListener("mouseleave",function(){
    console.log("Mouse is Exited from box");
});

box.addEventListener("mouseover",function(e){
    console.log("Mouse is Over the box");
    console.log("Mouse position : "+e.clientX+" "+e.clientY);
});

box.addEventListener("mouseup",function(){
    console.log("Mouse is up");
});

box.addEventListener("mousedown",function(){
    console.log("Mouse is down");
});