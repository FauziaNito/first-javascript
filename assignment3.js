// Assignment.
//Define seven parameterized classes with at least 5 parameters using <this> keyword and
//with at least 3 instances using the <new> keyword.:Due Tue 4pm on github

// Defined first Class Electronic
function Electronic(name,size,brand,countryOfOrigin){
    this.name = name;
    this.size = size;
    this.brand = brand;
    this.country = countryOfOrigin
    this.storage = storage;
}
let storage = Electronic.this.storage = 64;

// Objects Instatiated from Class Electronic
let smartTvScreen = new Electronic("Samsung 4K QLED",52,"Samsung","South Korea");
let smartPhone = new Electronic("Tecno Camon 17pro",6.8,"Tecno","Hong Kong",storage);
let percolator = new Electronic("Alessi",2.5,"Moka","Italy");

console.log(smartPhone);

// Defined second Class Building
function Building(type,size,location,value,rooms){
    this.type = type;
    this.size = size;
    this.loaction = location;
    this.buildingValue = value;
    this.numberOfRooms = rooms;
}
// Objects Instatiated from Class Building
let house = new Building("Bungalow", 1500, "Mulago",10000000,5);
let flat = new Building("Two Story Flat", 1800, "Kajjansi",40000000,25);
let office = new Building("Five Story Flat", 20000, "Nakasero",40000000,35);

// Defined third Class Person
function Person(name,age,dob,gender,nationality){
    this.name = name;
    this.age = age;
    this.dob = dob;
    this.gender = gender;
    this.nationality = nationality;


}
//Please Instatiate 3 Objects from Class Person


// Defined fourth Class Order
let Order = (number,date,price,itemName,status)=>{
    this.number = number;
    this.date = date;
    this.price = price;
    this.itemName = itemName;
    this.status = status;

}
//Please Instatiate 3 Objects from Class Order



// Defined fifith Class Student
function Student(name,sClass,age,stream,gender){
    this.name = name;
    this.sClass = sClass;
    this.age = age;
    this.stream = stream;
    this.gender = gender;
}

//Please Instatiate 3 Objects from Class Student



// Defined sixth Class Student
function Product(name,size,color,price,){
    this.name = name;
    this.size = size;
    this.color = color;
    this.price = price;
    this.discount = discount;

}
//Please Define the last Class and Instatiate 3 Objects
