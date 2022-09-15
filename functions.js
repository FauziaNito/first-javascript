//function: Is a group of statement related to one another that are performing a given task. names of functions follow the same rules of a variable
//When creating a function the process is called defining a function.

// ********Check the last Module/file "Loop.js" for first examples

//function are self-contained, anything (variables & values) within the function cannot be accessed outside unless **you do atrick** which is (Return)
//defined a function called sum
function sum(){
let num1 = 20;
var num2 = 5;
let ans = num1 + num2;
console.log(ans);
 return ans;// The return type helps the function to expose(return) a value given to it in the fucntion whenever its called
}
// An function call is also technically refered to as a function invocation ( to invoke);
// sum();
// console.log(ans);//Error cause you cant access ans variable outside the function
console.log(sum());

// A function that prints even numbers % multiples of 10 from 0 to 100
// function evenNumbers(){
//     for(let num = 0; num <= 100; num += 10){
//         if(num % 2 == 0){
//             // console.log(num);
//         }
//     }
// }
// evenNumbers();

// function netPay(){
//     let grossSalary = 500000;
//     let paye = grossSalary* 0.3;
//     let netSalary = grossSalary - paye;
//     return netSalary;
// }

// function welFare(){
//     let welFare = 50000;
//     let takeHome = netPay() - welFare;

//     console.log(takeHome);
// }

// takeHome();

//NEXT FUNCTION 2