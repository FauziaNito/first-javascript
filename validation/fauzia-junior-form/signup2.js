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
const name = document.registration.name;
const relationship = document.registration.relation;


function validate(){
    // Validating Phone Number1
        let mobileDigits = /^\d{4}$/;

    // check if empty
    if(phoneNumber1.value == ''){
        phoneNumber1.style.border = '3px solid red';
        phonenumber1.focus();

        return false;
    }
    // check if Phone Number is 10 digits
    if(!(phoneNumber1.value.match(mobileDigits))){

        phoneNumber1.style.border = '3px solid red';
        phonenumber1.focus();

        return false;
    } 

// Validating Phone Number2

let mobileDigits2 = /^\d{4}$/;
     // check if empty
     if(phoneNumber2.value == ''){
        phoneNumber2.style.border = '3px solid red';
        phonenumber2.focus();

        return false;
    }
    // check if Phone Number is 10 digits
    if(phoneNumber2.value.match(mobileDigits2)){
        phoneNumber2.style.border = '3px solid green';
        regcenter.focus();
        return true;
    } else{
        phoneNumber2.style.border = '3px solid red';
        phonenumber2.focus();

        return false;
    }

// Validating Date
let dateRegex = /^(0?[1-9]|[12][0-9]|3[01]).*(0?[1-9]|[1][0-2]).*[0-9]+$/;
    
    
    let invalidDate = 'mm/dd/yyyy';

    if(dateOfBirth.value == invalidDate){
        dateOfBirth.style.border = '3px solid red';
        dateOfBirth.focus();

        return false;
    }
    
    if(dateOfBirth.value.match(dateRegex)){
        dateOfBirth.style.border = '3px solid green';
        country.focus();

        return true;
    }else{
        dateOfBirth.style.border = '3px solid red';
        dateOfBirth.focus();

        return false;
    }

    // Validating surname
let alpha2 = /^[A-Za-z]+$/;
const min2 = 3;
const max2 = 10;

let mySurname = surname.value.trim();

if(mySurname == ''){
surName.style.border ='3px solid red';
surName.focus();

return false;
}

if(mySurname.length < min2 || mySurname.length > max2){
    surName.style.border = '3px solid red';
    surName.focus();
    return false;

} 

if(mySurname.match(alpha2)){
    surName.style.border = '3px solid green';
    firstName.focus();
    return true;
} else{
    surName.style.border = '3px solid red';
    surName.focus();
    return false;
}

// Validating first name

let alpha3 = /^[A-Za-z]+$/;
    const min3 = 3;
    const max3 = 10;
    
    let first_name = firstName.value.trim();
    
    if(first_name == ''){
    firstName.style.border ='3px solid red';
    firstName.focus();
    
    return false;
    }
    
    if(first_name.length < min3 || first_name.length > max3){
        firstName.style.border = '3px solid red';
        firstName.focus();
        return false;
    
    } 
    
    if(first_name.match(alpha3)){
        firstName.style.border = '3px solid green';
        dateOfBirth.focus();
        return true;
    } else{
        firstName.style.border = '3px solid red';
        firstName.focus();
        return false;
    }

// Validating Next of Kin Name

  let alpha4 = /^[A-Za-z]+$/;
    const min = 3;
    const max4 = 10;
    
    let trimmed_name = name.value.trim();
    
    if(trimmed_name == ''){
    name.style.border ='3px solid red';
    name.focus();
    
    return false;
    }
    
    if(trimmed_name.length < min4 || trimmed_name.length > max4){
        name.style.border = '3px solid red';
        name.focus();
        return false;
    
    } 
    
    if(trimmed_name.match(alpha4)){
        name.style.border = '3px solid green';
        relationship.focus();
        return true;
    } else{
        name.style.border = '3px solid red';
        name.focus();
        return false;
    }

  // Validating NIN Number
  let ninregex = /^[a-zA-Z]+[0-9]+[a-zA-Z]+$/;
        const max = 14;

        let trimmed_nin = ninNumber.value.trim();
        if(trimmed_nin == ''){
            ninNumber.style.border = '3px solid red';
            ninNumber.focus();

        return false;
        }

        if(trimmed_nin.length < max || trimmed_nin.length > max){
            ninNumber.style.border = '3px solid red';
            ninNumber.focus();

            return false;
        }

        if(trimmed_nin.match(ninregex)){
            ninNumber.style.border = '3px solid green';
            phoneNumber1.focus();

            return true;
        }else{
            ninNumber.style.border = '3px solid red';
            ninNumber.focus();

            return false;
        }


    }
    //********************

