// let a = document.querySelector("#hero");
// console.log(a.innerText);

// let b = a.nextElementSibling;
// console.log(b.innerText);

// let p = a.parentElement;
// console.log(p);

// let p = document.querySelector("ul");

// let l = p.lastElementChild;
// console.log(l.textContent); //l.innerText

// let f = p.firstElementChild;
// console.log(f.textContent);

// let ch = p.children;
// console.log(ch[1].textContent);

let list = document.querySelector("#list");

// let newItem = document.createElement("li");
// newItem.textContent = "list item 4";

// list.appendChild(newItem);

// let elem = list.firstElementChild;

// list.insertBefore(newItem,elem);

// let item = document.createElement("li");
// item.textContent = "This is a new item";

// list.append(item);
// list.prepend(item);

let para = document.createElement("p");
para.textContent = "This is a new paragraph";

list.before(para);
list.after(para);