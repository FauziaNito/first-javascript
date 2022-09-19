// //
// class Order{
//     //constructor--is special a method where we define properties of our class
//         constructor(id){
//             this.id = id; 
//     }
// }

//Note keep the parameters and the property names(this.something)
function Cat(name, gender, color, DoB, food){//Note a class is like a katiba(mold)
    this.name1 = name; //this.name1 is the property of the class and name is the value
    this.gender1 = gender;//proterties are nouns(name)
    this.color1 = color;
    this.DoB1 = DoB;
    this.food1 = food;
    this.feed = function(){//A method is what a class does(doing verbs or actions)
        // console.log("A cat feeds on Milk")
        return "A cat feeds on Milk";
    }
}

let cat1 = new Cat("Kitty","female","white","2009","milk");
console.log(cat1.planet);
cat1.feed();
// console.log(cat1);


//Mosh oop Explanation
//Object literal--way of defining an object
let circle = {
    radius:1,
    loction:{
        x:1,
        y:1
    },
    draw: function(){
        console.log("draw the circle1")
    }
}

circle.draw();

//Factory function
function creatCircle(radius){
    return{
        radius:radius,
       
        draw: function(){
            console.log("draw the circle2")
        }
    }
}
const circle1 = creatCircle(1);

console.log(circle1.draw());

//Constructor -Function

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("drawing");
    }

}
const anotherCircle = new Circle(1);

console.log(anotherCircle.constructor);
console.log(circle.constructor);//Every ojbect has a constructor property that reference the function that was used to create that object
