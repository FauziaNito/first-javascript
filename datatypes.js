//A computer needs to know which kind of data it is dealing with so to prepare enough space for storage without wastge.
//in doing so, we create datatypes
//Data types define the grouping of data to be stored in memory
//e.g in C they declare like int c = 10; remember js is intelligent enough to know the type of data based on the value of a variable

//Examples of data types

let firstName = "Naava"; //1.String data type
let myAge = "20"; //1.String data type
let myNumber = 16;//2. Number data type

console.log(typeof(firstName));
console.log(typeof(myNumber));
console.log(firstName / myNumber);//3.NaN- Returns not a Number(NaN) --cant divide a string & a number

//4.Big Int datatype = any number more than 53 characters in length
//You cannot add Big Int and number (or small int)

const dataChecked = true; //5. boolean data type evaluates to true or false
console.log(typeof(dataChecked));

//6.Undefined Datatypes
var name;
console.log(typeof(name));

//7.Object--has several types, one of them being null
let notEmpty = null;
console.log(typeof(notEmpty));

//Note 7 data types: number||string||big int||undefined||NaN||boolean||object but Most commonly used are only 5

