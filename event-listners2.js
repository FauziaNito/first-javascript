 
//Callback is a name of a function that is being used as a parameter in another function
//clickDemo is  Call back cse it is being as a parameter in the function addEventListener

// document.querySelector('.btn').addEventListener('click', clickDemo);

document.querySelector(".btn").addEventListener("click", clickDemo);
//handler
const myButton = document.querySelector('#btn-alert');


let clickDemo = () =>{
    alert("Hi There!");
}

// function clickDemo() {
//     alert("Hi There!");
// }

const showAlert = () =>{
    alert('Button Alert was clicked');
}

// function showAlert(){
//     alert('Button Alert was clicked');
// }

myButton.addEventListener('click',showAlert);