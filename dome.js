// The html Document we are working on is dom-nodes.html
// document.body.style.backgroundColor = "fuchsia";

// const html = document.documentElement;
// console.log(html.parentNode);
// console.log(document.getElementsByTagName('ul').childNodes);

const h1 = document.getElementsByTagName("h1")[0];
const p = document.getElementsByTagName("p")[0];
const ul = document.getElementsByTagName("ul")[0];
const html = document.documentElement;


// Accessing the different sections of the code, where the section belong
console.log(p.parentNode);
console.log(p.parentNode.parentNode.parentNode.parentNode);
console.log(html.parentNode);
console.log(ul.childNodes);

ul.firstElementChild.style.background = "pink";

//Looping through the child elements(li) of unordered list  
for(let element of ul.children){
    element.style.background = "gold";//This color over rides the bg pink color of the 1 child
}

document.body.children[3].lastElementChild.style.background = "fuchsia"

const tiger = ul.children[1];

tiger.nextElementSibling.style.background = "coral";
tiger.previousElementSibling.style.background = "aquamarine";

// document.body.ul[0].children[0].style.background = "green";


// *****Assignment*****
// Add other types of sharks in the list using Js in dom-nodes
const newShark = document.createElement("li");
const anotherShark = document.createElement("li");

newShark.textContent = "Angel sharks";
anotherShark.textContent = "BullHead sharks";

ul.appendChild(newShark);
ul.appendChild(anotherShark);

