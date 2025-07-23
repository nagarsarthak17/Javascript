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