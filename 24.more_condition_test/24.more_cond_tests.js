"use strict";
// Equality and Inequality Test 1
console.log("Equality test with strings: ", "Mango" === "Mango");
// Equality and Inequality Test 2 
console.log("Inequality test with strings: ", "Mango" != "Banana");
// Tests using the lower case function
console.log("Lower Case function test: ", "MANGO".toLowerCase() === "Mango");
//Numerical tests involving equality
console.log("Equality test with numbers: ", 30 === 30);
//Numerical tests involving inequality
console.log("Inequality test with numbers: ", 30 != 42);
//greater than test
console.log("Greater than test: ", 30 > 10);
//less  than test
console.log("Less than than test: ", 10 < 30);
//greater than or equal to 
console.log("greater than and equal to test : ", 30 >= 30);
//less than or equal to 
console.log("less than and equal to test : ", 10 <= 30);
//Tests using "and" operator
console.log("And operator test: ", 30 === 30 && 30 > 10);
//Tests using "and" operator
console.log("or operator test: ", 30 === 30 || false);
//Tests whether an item is in array
const fruits = ['Mango', 'Banana', 'Apple'];
console.log('test "Banana" in the array:', fruits.includes("banana"));
//Tests whether an item is not in array
console.log('test"Orange" is not in the array:', !fruits.includes('orange'));
