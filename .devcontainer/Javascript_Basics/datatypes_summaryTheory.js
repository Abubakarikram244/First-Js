//There are 2 types of datatypes based on how they are stored and how to acess them.
//1)Primitive Datatypes:
//-->string
//-->Number 
let num = 3;
let num2 = 34.4;

//-->null
let variable = null;

//-->undefined
let a = undefined
//-->boolen
isloggedin = true
//-->Symbol(to make some value unique)
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid)
//-->Bigint(to handle very large/sceintific values)
let Bignum = 453463636454664n

//2)Non Pimitive/Reference Datatypes:
//--> Array
let subjects = ["english", "urdu", "math"]
//--> Object
let myobj = {
    neame: "Abubackar",
    classes: 2,

};

//--> Functions
const myFunction = function () {
    console.log("this is Function")
}

// Question: Is js dynamically typed langauge or statically typed?
// dynamically

/*JavaScript has two categories of data types:
 Primitive Data Types and Non-Primitive (Reference) Data Types. 
 Primitive types include String (e.g., let name = "John";), Number (e.g., let num = 3;), 
 Null (e.g., let variable = null;), Undefined (e.g., let a = undefined;), 
 Boolean (e.g., let isLoggedIn = true;), Symbol (e.g., const id = Symbol('123');),
  and BigInt (e.g., let bigNum = 453463636454664n;).
  
  Non-primitive types include Array (e.g., let subjects = ["English", "Urdu", "Math"];),
   Object (e.g., let myObj = {name: "Abubackar", classes: 2};), 
   and Function (e.g., const myFunction = function()
    { console.log("This is a function"); };).
      JavaScript is a dynamically typed language, 
      meaning the type of a variable is determined at runtime and 
      can change during the program's execution
       (e.g., let x = 10; x = "Hello";).*/