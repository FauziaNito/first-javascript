// The entry point of the user to the website is through a form
// !!!!!!Most IMPORTANT- understanding web forms
// We do form validation to prevent garbage collection from a users (garbage in, garbage out)
// Js will sanitize (data validation) the data but it can take it in the databse, you can do that in Node Js
// Verification is comparing data
// Authentication 

const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passConfirm = document.querySelector('#confirm-password');
const form = document.querySelector('#signup');

const checkUserName = () =>{
let valid = false;

const min = 3 ;
const max = 25;
let user_name = userName.value.trim();//cuts off unnecessary space from username

if(user_name == ''){
    alert("Username is empty!");

    userName.style.border = "1px solid red";
    return false;
}
}





