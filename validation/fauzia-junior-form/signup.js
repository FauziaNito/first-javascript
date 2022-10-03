// Accessing DOM elements
const form = document.getElementById('signup');
const surName = document.registration.surname;
const country = document.registration.country;
const ninNumber = document.registration.ninnumber;
const gender = document.registration.gender;
const firstName = document.registration.firstname;
const permanentAddress = document.registration.paddress;
const phoneNumber1 = document.registration.phonenumber1;
const phoneNumber2 = document.registration.phonenumber2;
const dateOfBirth = document.registration.dob;
const residentAddress = document.registration.raddress;
const regCenter = document.registration.regcenter;
const kinName = document.registration.kinname;
const relationship = document.registration.relation;


// Validating Phone Number1
const checkPhone = () =>{
    let mobileDigits = /^\d{10}$/;

    // check if empty
    if(phoneNumber1.value == ''){
        phoneNumber1.style.border = '2px solid red';
        phonenumber1.focus();

        return false;
    }
    // check if Phone Number is 10 digits
    if(phoneNumber1.value.match(mobileDigits)){
        phoneNumber1.style.border = '2px solid green';
        regCenter.focus();
        return true;
    } else{
        phoneNumber1.style.border = '2px solid red';
        phonenumber1.focus();

        return false;
    }

}
// Validating Phone Number2
const checkPhone2 = () =>{
    let mobileDigits = /^\d{10}$/;
     // check if empty
     if(phoneNumber2.value == ''){
        phoneNumber2.style.border = '2px solid red';
        phonenumber2.focus();

        return false;
    }
    // check if Phone Number is 10 digits
    if(phoneNumber2.value.match(mobileDigits)){
        phoneNumber2.style.border = '2px solid green';
        regcenter.focus();
        return true;
    } else{
        phoneNumber2.style.border = '2px solid red';
        phonenumber2.focus();

        return false;
    }
}

// Validating Date
const checkDate = () =>{
    let dateRegex = /^(0?[1-9]|[12][0-9]|3[01]).*(0?[1-9]|[1][0-2]).*[0-9]+$/;
    
    
    let invalidDate = 'mm/dd/yyyy';

    if(dateOfBirth.value == invalidDate){
        dateOfBirth.style.border = '2px solid red';
        dateOfBirth.focus();

        return false;
    }
    
    if(dateOfBirth.value.match(dateRegex)){
        dateOfBirth.style.border = '2px solid green';
        country.focus();

        return true;
    }else{
        dateOfBirth.style.border = '2px solid red';
        dateOfBirth.focus();

        return false;
    }
}
// Validating surname
const checkSurname = () =>{
let alpha = /^[A-Za-z]+$/;
const min = 3;
const max = 15;

let mySurname = surname.value.trim();

if(mySurname == ''){
surName.style.border ='2px solid red';
surName.focus();

return false;
}

if(mySurname.length < min || mySurname.length > max){
    surName.style.border = '2px solid red';
    surName.focus();
    return false;

} 

if(mySurname.match(alpha)){
    surName.style.border = '2px solid green';
    firstName.focus();
    return true;
} else{
    surName.style.border = '2px solid red';
    surName.focus();
    return false;
}

}
// Validating first name
const checkFirstName = () =>{
    let alpha = /^[A-Za-z]+$/;
    const min = 3;
    const max = 15;
    
    let first_name = firstName.value.trim();
    
    if(first_name == ''){
    firstName.style.border ='2px solid red';
    firstName.focus();
    
    return false;
    }
    
    if(first_name.length < min || first_name.length > max){
        firstName.style.border = '2px solid red';
        firstName.focus();
        return false;
    
    } 
    
    if(first_name.match(alpha)){
        firstName.style.border = '2px solid green';
        dateOfBirth.focus();
        return true;
    } else{
        firstName.style.border = '2px solid red';
        firstName.focus();
        return false;
    }
    
    }

// Validating Next of Kin Name

const checkName = () =>{
    let alpha = /^[A-Za-z]+$/;
    const min = 3;
    const max = 25;
    
    let trimmed_name = kinName.value.trim();
    
    if(trimmed_name == ''){
    kinName.style.border ='2px solid red';
    kinName.focus();
    
    return false;
    }
    
    if(trimmed_name.length < min || trimmed_name.length > max){
        kinName.style.border = '2px solid red';
        kinName.focus();
        return false;
    
    } 
    
    if(trimmed_name.match(alpha)){
        kinName.style.border = '2px solid green';
        relationship.focus();
        return true;
    } else{
        kinName.style.border = '2px solid red';
        kinName.focus();
        return false;
    }
    
    }

    // Validating NIN Number

    const checkNin = () =>{
        let ninregex = /^[a-zA-Z]+[0-9]+[a-zA-Z]+$/;
        const max = 14;

        let trimmed_nin = ninNumber.value.trim();
        if(trimmed_nin == ''){
            ninNumber.style.border = '2px solid red';
            ninNumber.focus();

        return false;
        }

        if(trimmed_nin.length < max || trimmed_nin.length > max){
            ninNumber.style.border = '2px solid red';
            ninNumber.focus();

            return false;
        }

        if(trimmed_nin.match(ninregex)){
            ninNumber.style.border = '2px solid green';
            phoneNumber1.focus();

            return true;
        }else{
            ninNumber.style.border = '2px solid red';
            ninNumber.focus();

            return false;
        }
    }

//  Event Listeners for each input Filed

phoneNumber1.addEventListener('focusout',checkPhone);
phoneNumber2.addEventListener('focusout',checkPhone2);
dateOfBirth.addEventListener('focusout',checkDate);
surName.addEventListener('focusout',checkSurname);
firstName.addEventListener('focusout',checkFirstName);
kinName.addEventListener('focusout',checkName);
ninNumber.addEventListener('focusout',checkNin);
