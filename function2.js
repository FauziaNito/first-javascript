//Static Function-- Whenever invoked, it will give you the same value
//note--A return statement in the function marks the end of of execution in a function
function sum(){
    let num1 = 5;
    let num2 = 10;
    let num3 = num1 + num2;
    console.log(num3);
}

sum();

//Dynamic functions--
function sum2(a, b){
    let c = a + b;
    console.log(c);
}
sum(10, 20,30);
sum2(100,200);
//Dynamic function or parameterized function that means it takes on paramenters in the function paranthensis
// or formal parameters or  formal arguments

function paye(gross, tax){
    
        let netSalary = gross - (gross*tax);
        console.log(netSalary);

}

// the values given to function when invoking or calling it are arguments
paye(800000, 0.5);

//Define three parameterized functions that are calling one another. 2 Github assignment
