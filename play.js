function Car(name, model, chasisNo, numOfSeats){
this.name =name;
this.model =model;
this.chasisNo=chasisNo;
this.numOfSeats=numOfSeats;
}

let car1=new Car("Subaru","2010","iixi", 6);
let car2 = new Car("BMW","2022","MMXII",7);

//New Example

function Book(name,author,year){
    //this.name is parameter, name is parameter value
    //key word "this" is used to define/identify the properties of a class
    this.name = name //name is the value,author is value too, year is value too but respective palces i.e
    this.author = author //author here is value. author can be anything ie fauzia
    //author = "Fauzia"
    this.year = year
    this.publisher = "Ozzy Man"// this ensures that every instance of this clss has the same publisher
}


let book1= new Book("Guardians of the Galaxy", "Marvel", 2017);// This is an instance or object of class book
let book2 = new Book("7 Habits of Highly Effective People","Steve Covy","1997");

// console.log(book1.author);// to specify an output value(class property) = "object.parameter"
// console.log(book1);
// console.log("");
// console.log(book1.year);
// console.log(book1.publisher);

// console.log(book2);

//Another Example
function Shoe(name,color,label){
    this.name= name;
    this.color= color;
    this.label = label;
}
//One instance of Shoe
let firstShoe = new Shoe("Open", "Black","Bata");
//Another instance of Shoe
let anotherShoe = new Shoe("Canvas", "White","Balenciaga");

// console.log(firstShoe, anotherShoe);
// console.log(firstShoe.label);
console.log("Shoe type: "+ anotherShoe.label, "Shoe color: " + anotherShoe.color);

//Serious Notes
//1.Remember to use capital letter for class name
//2."this" is a keyword for definig parameter of the class 
//3."new" is a keyword for instatiating a class object ie let object = new Class(class-parameters/properties)
// return marks the end of execution

function add(){
    var a = 2;
    var b = 4;
    var c = 2;
    var d = 5
    let x = a+b;
    let f = c+ d;
   // return a + b; //this marks the end
    return [x,f]; //to return multiple values from a method, return as an array 
    // return "value1 : " + (a + b); //Note: this line can't print both string and Number unless you turn the expression to Number 
    
    
}

console.log(add());
