
//Callback is a name of a function that is being used as a parameter in another function
//clickDemo is  Call back cse it is being as a parameter in the function addEventListener

// document.querySelector('.btn').addEventListener('click', clickDemo);

document.querySelector(".btn").addEventListener("click", clickDemo);
//handler

const clickDemo = () =>{
    alert("Hi There!");
}

// function clickDemo() {
//     alert("Hi There!");
// }