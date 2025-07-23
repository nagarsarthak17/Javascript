console.log("Sarthak")
// We can run this on the Node server by node test.js command

// How to push code to Github
// 1. git init
// 2. git status
// 3. git add .
// 4. git commit -m "Your message"
// 5. git remote add origin pasteTheHTTPLinkFromGithub
// 6. git push origin master

// Let, Const and Var
const accountID = 14523
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

console.table[accountID, accountEmail, accountPassword, accountCity, accountState];

//1. const -> Which can never be changed
//2. let and var -> can be changed or mdified byut nowadays we do not use var (It has issue in block scope and function scope). So use let
//3. We can dot it with even assigning the variable but its not good.
//4. If we simply leave the variable without assinging the value its default value assigned would be undefined.


// Datatypes and ECMA
// 1. Number
// 2. String
// 3. Boolean
// 4. Null -> Standlone Value 
let temperature = null
// 5. Undefined -> variable is created but empty.
let schoolName;
// 6. Symbols -> (Used in React) Uniqueness
// All these are primitive datatypes

console.log(typeof accountEmail)
console.log(typeof undefined)
console.log(typeof temperature) // This is defined a sobject not null


// Datatype Conversion
let score = "33"
console.log(typeof score)

// Its a string so lets convert it to number

let toNumber = Number(score)
console.log(typeof toNumber);

// Here it displays as number now what if

let scores = "33aa"

// Will it be converted as 'aa' is there 

let toNumbers = Number(scores);
console.log(toNumbers);

// Here the answer is NaN means Not a Number. Thats something JS has different

// So conversions are Anything to Number
/* 33 => 33
   33aa => NaN
   null => 0
   undefined => NaN 
   sarthak => NaN
   true => 1
   false => 0 


   So conversions are Anything to Boolean
   1 => true
   0 => false
   "" => false
   sarthak => true


   So conversions are Anything to String


   Operations :
   2+2=4 This is a operation
*/
/*
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/2)
console.log(8%7);

let str1 = "Sarthak"
let str2 = " Nagar"
let str3 = str1 + str2
console.log(str3)

*/

/* Some speical conversions
    console.log(2+"2") => 22
    console.log("2"+2) => 22
    console.log("2"+2+2) => 222
    console.log(2+2+"2") => 42  This is because jo type sabse phle hogi ussi mai convert ho jyegi value.

*/

let counter = 100
counter++
console.log(counter); // 101

// COMPARISION
/* console.log(1 > 2)
   console.log(1 >= 2)
   console.log(1 < 2)
   console.log(1 <= 2) 
   console.log(1 == 2)
   console.log(1 != 2)
*/

// console.log("2" === 2)
// === checks the data type as well therefore would return false as one is string and other is number

/* Primitive Datatype: Number, String, Boolean, Undefined, Null, BigNumber, Symbol
   Refernece (Non-Primitive): Array, Objects, Functions
*/

const id = Symbol('123')

const players = [Rohit, Virat, Dhwan, Gill];
let myObj = {
    name: "Sarthak",
    age: 25,
}

const myFunction = function() {
    console.log("Hello Wrld")
}


/* How Memory Work in the Javascript
There are two types of memory 1.Stack  2.Heap
Stack => primitive
Heap => Non Primitive

In stack memory we get the copy of the variable
Where as in the heap memory we get the reference of the original value.
