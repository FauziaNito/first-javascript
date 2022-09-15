//Operators are thing or characters/ symbols that tells a computer what to do with an operand
//Operands are values
//A symbol btwn a variable name and a value is an operator say (=)

//Types of Operators
// 1.Arithmetic Operators, are for mathematical operations

var num1 = 20;
var num2 = 1000;

var num3 = 50, num4 = 200;
//Additional Operator (+)
console.log(num1 + num2);// This statement is called an expression because it results to something(value) 

//Subtraction Operator (-)
console.log(num1 - num2);

//Multiplication Operator (-)
console.log(num1 * num2);

//Division Operator (/)
console.log(num1 / num2);

//Remainder Operator (%)
//Note if you tell a computer to give out two oranges to three people,
//--it will remain with all the two oranges cause its so mean, it can't give out two oranges to Three people
console.log(num1 % num2);

//Examples
let  first_name = "Naava\n";// Escape squence characters \n put the next output on a newline
let lastName = "Fauzia";

//2.Concatenating operator (Combining two variables)--Note you cant concatenate a string & a Value
console.log(first_name + lastName);

//3. Assignment Operators
const taxRate = 10;
let naavaAge = 20;

console.log(naavaAge += 10);//naavaAge = naavaAge + 10 which at this point naavaAge is 30
console.log(naavaAge -= 2);//But at this point naavaAge is 28 because 30-2 =30 [naavaAge = naavaAge - 2]
console.log(naavaAge *= 2);
console.log(naavaAge /= 2);
console.log(naavaAge %= 2);

//4.Logical Operators-- Mostly Output boolean values-- true or false value
//Note
// Logical Not (!) // You can't use this operator alone make sure to use it with an assignment operator
var number1 = 5;
var number2 = 10;
console.log(number1 != number2);
//Logical And (&&)  
console.log((number1 < number2) && (number2 > number1));// This statement is true cause all conditions are true
console.log((number1 < number2) && (number2 < number1));

//Logical Or (||)-- In this case, one of the conditions should be true for the statement to be true
console.log((number1 < number2) || (number2 < number1));
console.log((number1 < number2) || (number2 > number1));
console.log((number1 > number2) || (number2 < number1));

//5. Comparision Operator

let firstNumber = 500;
let secondNumber = "500";
let gender = "female";

// Equal Operator
console.log(firstNumber == secondNumber);
console.log(firstNumber == gender);
console.log(firstNumber == secondNumber);// this is true cause Js compires identity not datatype

//Strict Equal Operator (===) Variable should be of the same kind and should be identical (Checks whether the operands are identical)
console.log(firstNumber === secondNumber);//Strict Operator

console.log(firstNumber < secondNumber);// Less than
console.log(firstNumber > secondNumber);//Greater than
console.log(firstNumber >= secondNumber);//Greater than equal to
console.log(firstNumber <= secondNumber);//Less than equal to
console.log(firstNumber != secondNumber);//Not Equal to

//6.Ternary Operator

var a = 8, b = 7; 
var c = a > b? b:a; // The value of c will depend on condition being true, if a > b is true, so the value of c is a otherwise its b
console.log(c);//Condition? if true: if false

//7. Increament Operators
let xNum = 5;
let dNum = 10;
// console.log(xNum++); //Post Increment// Add 1 to the value of xNum after using xNum. at this point the output is 7
// console.log(xNum); // But at this point the output is 8, cause the value of has increased by 1 after use in line 92
// console.log(++xNum);// Pre Increment--- The value

// console.log(xNum--);//Post Decrement
// console.log(--xNum);//Pre Decrement
console.log(xNum+=10);// This means xNum = xName + 10;
console.log(xNum-=10);