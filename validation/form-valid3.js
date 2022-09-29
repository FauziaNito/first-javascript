
// Accessing element using the parent element(form) name(attrb) in the form element
// The form name attrb will be able to access all the other child element inside it.

const userName = document.registration.username;
const date = document.registration.date;
const country = document.registration.country;
const form = document.registration.signup;
const password = document.registration.password;
const firstName = document.registration.firstname;
const phoneNumber = document.registration.phonenumber;
const gender = document.registration.gender;
const luganda = document.registration.lug;
const english = document.registration.eng;
const kiswahili= document.registration.kiswa;


const checkPhone = () =>{
 
    let phoneValidate = /^\d{10}$/;
    let phoneValidate2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let phoneValidate3 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  
    // check if empty
    if(phoneNumber.value === ''){
        phoneNumber.style.border = '2px solid red';
        phoneNumber.focus();

        return false;
    }

    // check whether value is in the specified digits
    if(phoneNumber.value.match(phoneValidate2)){
        phoneNumber.style.border = "2px solid green";
        date.focus();
        return true;

    } else {
        phoneNumber.style.border = '2px solid red';
        phoneNumber.focus();
    }


}
// /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/

const checkPassword = () =>{
    let passwdValidate = /^[A-Za-z]\w{7,14}$/;
    let passwdValidate2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if(password.value === ""){
        password.style.border = "2px solid red";
        password.focus();
        return false;
    }
    if(password.value.match(passwdValidate)){
        password.style.border = "2px solid green";
        return true;
    }
    else{
        password.style.border = "2px solid red";
    }
   
   }

