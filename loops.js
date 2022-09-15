//z........ Continuation of conditional statments
//Loops-- tell the computer to reaptedly do something untill the results are meant || For loop


//Forloop
function firstLoop(){
for(var item = 0; item <= 10; item++){
    // console.log(item);
}
}

function secondLoop(){
for(let num = 0; num >= 10; ++num){// The keyword let makes num a local variable
    // console.log(num);
}
}
// console.log(num);// Error cse num is only limited to thr forloop block. Unless you use var when declaring num (itwill be global)
//for expects three things

function thirdLoop(){
for(let num1 = 0; num1 <= 10; num1++){// The keyword let makes num1 a local variable so you can't access num1 outside the forloop code block
    if(num1 % 2 == 0){
        // console.log(num1);
    }
}
}


//While loop-Is another kind of loop that does the same thing as for loop (Remember that this is the least used loop)
var num = 0;
while(num < 100){
    num += 10;
    // console.log (num)
}

// var num = 0;
// while(num <= 100){
//     if(num % 2 == 0){
//         console.log(num)
//     }
//     num++;
// }
//Function call (Function Invoke)
firstLoop();

//foreach Loop
let numbers = [1,20,35,43,56,93]
numbers.forEach(item => console.log(item++));

//Functions Next
