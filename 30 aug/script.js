let para = document.createElement("p");
para.textContent = "New Text Content";
let box = document.querySelector(".box");
box.appendChild(para);

let para2 = document.getElementById("para-2");
box.insertBefore(para, para2);

// box.removeChild(para);

para.id = "para-4";
para.className = "class1";
para.className = "class1 class2";

// para.setAttribute("name","v1");
// console.log(para.getAttribute("class"));
// para.removeAttribute("class");

let myCss = getComputedStyle(box);//only retrieves value doesn't allow to modify them (read only)
console.log(myCss.backgroundColor);

box.style.backgroundColor='red';// modifies the values, style.{property name in camel case}
box.style.border="2px solid black";

box.firstElementChild.style.color="white";
box.firstElementChild.style.fontSize="25px";

// box.style.cssText = "background-color:yellow; color:red; font-size:20px";
// box.style.cssText += "font-weight:700;"

box.classList // gives the list of class named as DOMTokenList
box.classList.add("pc");
// box.classList.remove("pc");
box.classList.replace("pc","pb");

console.log(box.classList);

//----------------additional------------------
// function style() {
//   para.setAttribute("class", "bg");
//   setTimeout(() => {
//     para.removeAttribute("class");
//   }, 10000);
// }
// style();
