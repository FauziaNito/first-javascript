
// Accessing element using the parent element(form) name(attrb) in the form element
// The form name attrb will be able to access all the other child element inside it.

const userName = document.registration.username;
const email = document.registration.email;
const country = document.registration.country;
const form = document.registration.signup;
const firstName = document.registration.firstname;
const phoneNumber = document.registration.phonenumber;
const gender = document.registration.gender;
const luganda = document.registration.lug;
const english = document.registration.eng;
const kiswahili= document.registration.kiswa;


const checkPhone = () =>{
    
    // let numberRegex = /^[0-9]+$/;

    // let alphaNumber = /^[0-9a-zA-Z]+$/ ;
    let alphabet = /^[A-Za-z]+$/;
    let telNumber = /^\+\d{12}$/; 

    // check if empty
    if(phoneNumber.value === ''){
        phoneNumber.style.border = '2px solid red';
        phoneNumber.focus();

        return false;
    }

    // check whether value is a number within 12 digits that is specified in the regex
    if(phoneNumber.value.match(telNumber)){
        phoneNumber.style.border = "2px solid green";
        email.focus();
        return true;

    } else {
        phoneNumber.style.border = "2px solid red";
        phoneNumber.focus();
        return false;
    }

    // // check whether value is a number or does not match string
    // if(phoneNumber.value.match(numberRegex)){
    //     email.focus();
    //     return true;

    // } else {
    //     phoneNumber.style.border = '2px solid red';
    //     phoneNumber.focus();
    // }

//   let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
//     // check if empty
//  if(email.value === ''){
//         email.style.border = '2px solid red';
//         email.focus();
//         return false;
//     }
// // 
//     if(email.value.match(emailRegex)){
//         country.focus();
//     } else {
//         email.style.border = '2px solid red';
//         return false;
//     }
}

const checkEmail = () =>{
 let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
//  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})*(\.\w{2,3})+$/; ==to cater for CIU emails
//  osman.buyondo@gmail.com  
// f.nakacwa@student.ciu.ac.ug
    // check if empty
    // const let a = e ? b : c;
 if(email.value === ''){
        email.style.border = '2px solid red';
        email.focus();
        return false;
    }
// 
    if(email.value.match(emailRegex)){
        email.style.border = '2px solid green';
        country.focus();
    } else {
        email.style.border = '2px solid red';
        email.focus();
        return false;
    }
}

    // Alphanumeric == /^[0-9a-zA-Z]+$/
    // Alphabets == /^[A-Za-z]+$/
    // Numbers == /^[0-9]+$/
    // Emails == /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
/****************************************************************************** */


    // Note: note that its good practice to write all the validation function under one function.
    // To properly validate  onsubmit (onsubmit='()' one of html event attbb)
