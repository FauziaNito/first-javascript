//OOP We use Oop to have reusable code
//Is a concept or an idea in programming that advocates developing software on real world objects.
//Concepts: classes vs Objects
// A class is a blue print of an object
//An object is an instance of a class
//***Ojects have properties--Classes give us properties that***
//Class names are singular
//Syntax
//Sub-Classes(example subaru)
//x-tics of objects in a class--
// 1.inheritance-- the ability of an object to take on 1 or more(all) properties from a class
//In inheritance there is *
// 2.Abstraction --is the level of representation in a class hierarchy (example of students, which students, from which schools)
// 3.Polymorphism -- objects of class taking on different/many forms 
// --(example--how we use knife for different purpose)--(Ozzy belongs to class Instuctor & Class Father)
// 4.Encapsulation- the ability of a class/objects to group/control their properties and methods(More like Hiding)

// Declaring a class in js

//created class-called dance having one object called butterfly.
// Note what we used to call variables in structured programming are called properties in OOP.
 let dance = {

    style: "rhythm",
    tempo: 5,
    name: "butterfly",
    music: "rnb",
    age: 30,
    type: "cultural"

 }
 //When you want to access a property in a class, call the class dot the property name
// In structured programming Functions but in Oop functions are called methods 
// Log() is a function/method that belongs to console class.
 console.log(dance.name);
 console.log(dance.style);

 let school = {
    teachers: 14,
    students: 10,
    subjects: 2,
    buildings: 5,
    name: "Green Hill",
    performance:() =>{
        console.log("We always pass our students infirst class");
    },
    sports: function(){
        console.log("we are the current champions of kampla")
    }
 }
 console.log(school.sports());
 //Ojects have behaviours and methods
// A method define what an object do to its self or to others
// Behaviours -are found in the methods(Behaviours are inside methods).
//--In an example above (students--methods can be performs, graduates).