const paragraph = document.createElement("p");
paragraph.textContent = "Am a brand new paragraph";
paragraph.innerHTML = "I am the paragraph with <strong>bold text</strong>."
console.log(paragraph);

const toDolist = document.querySelector("ul");
const newDoList = document.createElement("li");

// Adding element in the html(make-changes) list using Js
newDoList.textContent = "Do home work";
toDolist.appendChild(newDoList);

anotherToDo = document.createElement("li");
anotherToDo.textContent = "Pay bills";
toDolist.insertBefore(anotherToDo, toDolist.firstElementChild);

//Replacing element in the html(make-changes) list using js
const modifyToDo = document.createElement("li")

modifyToDo.textContent = "Feed the dog";
toDolist.replaceChild(modifyToDo, toDolist.children[2]);

//Removing One Element in the html(make-changes) list
toDolist.removeChild(toDolist.lastElementChild);


