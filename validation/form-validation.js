// The entry point of the user to the website is through a form
// !!!!!!Most IMPORTANT- understanding web forms
// We do form validation to prevent garbage collection from a users (garbage in, garbage out)
// Js will sanitize (data validation) the data but it can't take it in the database, this is possible in Node Js
// Verification is comparing data
// Authentication 

const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passConfirm = document.querySelector('#confirm-password');
const form = document.querySelector('#signup');
const firstName = document.querySelector('#firstname');
const phoneNumber = document.querySelector('#phonenumber');



const checkUserName = () => {
    let valid = false;
    // Alphanumeric == /^[0-9a-zA-Z]+$/
    // Alphabets == /^[A-Za-z]+$/
    // Numbers == /^[0-9]+$/
    // == /^[0-9]+$/
    // Emails == /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    // Regular expression or regx [/^[0-9a-zA-Z]+$/]. Used to manipulate strings. Don't put regx in quotes 
    let alpha = /^[0-9a-zA-Z]+$/;
    console.log(typeof (alpha));

    const min = 3;
    const max = 25;
    // The value is the input value from the form where someone enters from the form elements ie username input
    let user_name = userName.value.trim();//cuts off unnecessary space from username

    // console.log(user_name);

    if (user_name == '') {
        alert("Username is empty!");

        userName.style.border = "1px solid red";
        return false;
    }
    if (user_name.length < min || user_name.length > max) {
        alert("This doesn't look like a proper name");
        userName.style.border = "3px solid red";
        return false;
    }

    if (user_name.match(alpha)) {
        firstName.focus(); //Call the next felid to be focused on
        return true;
    } else {
        alert("User Name should not have numbers");
        userName.style.border = "3px solid red";
        return false;
    }
}
// Function checking the if first name only has Alphabets

const checkFirstName = () => {
    let first_name = firstName.value.trim();
    let alphabet = /^[A-Za-z]+$/;

    console.log(first_name);

    if (first_name.match(alphabet)) {
        phoneNumber.focus();
        return true
    } else {
        firstName.style.border = "2px solid red";
        alert("First Name should have only Alphabets");
        return false;
    }
}

//Checking if Password is not empty Confirm password is the same as password
const checkPasswd = () => {
    let pass_wd = password.value;
    let confirm_pwd = passConfirm.value;

    if (pass_wd == "" || confirm_pwd == "") {
        alert("Password cannot be empty");
        password.style.border = "3px solid red";
        passConfirm.style.border = "3px solid red";
        return false;
    }
    if (pass_wd != confirm_pwd) {
        alert("Password did not match");
        passConfirm.style.border = "3px solid red";
        return false;

    }
}





