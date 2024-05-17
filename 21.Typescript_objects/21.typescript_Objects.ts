// Write a program that creates objects contaianing these itemes.

//let person_Name :string = 'Kishor';

//const personName_Array :(string | number)[] = ['Ali','9','Ahmed'];

//const personName_Array :string[] = ['person','car',' cold Drink'];

//Data type of person object.
interface person {
    age : number,
    name : string ,
    nationality : string ,
    student : Boolean
}

// person object
let person : person = {
    age : 20 ,
    name : 'Kishor' ,
    nationality : 'Pakistan' ,
    student : true

}
//print person 
console.log(person);

//Data type of car object.
interface person {
    maker : string,
    clore : string ,
    automatic : boolean 
}

// car object

let car ={
    maker : 'toyota',
    color : 'White',
    automatic : true
}

//print car 
console.log(car);