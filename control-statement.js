//Control (Conditional )statements. (Assist with decision making based on certain conditions.)
//The condition specified in the conditional statement can either be true or false. The statements execute piece of code 
//--only if the condition is true
let weight = 10;

//1.If Statement--(executes a specified code segment if the given condition is ''true.'')
if(weight < 50){// If condition is true then 
    console.log("You're Underweight to donate blood");//This statment will be outputed
}
//A group of code/statements that are related to one another & doing the same thing is called a "Block of code"
//From 5 to 7 is one statement which can have many 
//Note ()--these are pair of parentheses & {}--these are pair of braces- noramlly used to enclose a block of code

let salary = 700000;
let paye = 30;
// if your salary is less than 300000, the output should be your salary is not taxable
//if your salary is above 300000, 0.3 is deducted and the actual tax is printed for you
if(salary < 300000){
    console.log("Your Salary is not taxable");
}

if(salary > 300000){
    
     console.log(0.3*salary);
}
//2.Else--Incases whwere a condition expects two conditions than jst one, we use else statement
//Else statement executes a block of code if the condition in the If statement is false
let price = 2000;

if(price <= 2000){
    console.log("This product is entitled for VAT");
}

else{
    console.log("This product is not entitled for VAT");
}
//Nested if-- Statement a condition thats based on other condition
const number = 1;

if(number >= 0)
{
  if(number == 0){
     console.log("Your Number is 0");
    }
    else{
        console.log("Your number is positive");
    }
}// All the conditions above have to be exhausted and if non meets the condition then it will print the else code below
else{
    console.log("Your Number is negative");
}

//3.If.... else if-- Incase of many conditions
var mysalary = 700000;
var yoursalary = 500000;

if(mysalary > yoursalary){
console.log("I will buy us lunch");
}
else if(mysalary < yoursalary){
    console.log("You will buy us lunch");
}

else if(mysalary == yoursalary){
    console.log("Everyone buys themselves Lunch")
}



//4.Switch (Asignment)--Used when you have many conditions to test
let day = ("holiday"); //Use the paranthensis on this value to
switch(day){
    case "Monday":
        // console.log("Do dishes");
        break;
    case "Tuesday":

}
//Example 2-- We look at different cases (real life examples are telecom companies customer care call)
switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        console.log("Lets go Shopping");
        break;
    case 1:
            day = "Monday";
            console.log("Offical work starts");
            break;
    case 2:
                day = "Tuesday";
                console.log("Presentation Day");
                break;
    case 2:
                day = "Wednesday";
                console.log("Planning Next big thing");
                break;
    default:
        console.log("Lets go parting")
}
//Another example of switch

let selected = 5;

switch(selected){
    case 1:
        console.log("");
        break;
    default:
        console.log();
}


//Next LOOPS