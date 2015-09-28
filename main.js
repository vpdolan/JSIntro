/*=========================================================
    Part 1: Variables
*/
var givenName;
// Q: What does `givenName` equal right now?
// A: givenName is not yet defined.


givenName = "Tim";
// Q: What is `givenName` set to right now?
// A: text string Tim


givenName = "JD";
// Q: What is `givenName` set to right now?
// A: text string JD


var greeting = "Hello, how are you?";
// Q: What is `greeting` set to?
// A: text string Hello, how are you?


/*=========================================================
     Part 2: Simple Math
*/

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: 40

math = high - "5";
// Q: What is `math` set to?
// A: 45.  The text string 5 will be interpreted as a number in this example. Thus, 50-5= 45


/* =========================================================
     Part 3: Expressions
*/

// Create a variable to calculate Tim's age
// The answer should read "Tim is 32 years old"
// The answer shoud not be written in a comment.
var born = 1983;
var today = 2015;

// Answers Below
var a = today - born;
var b = "Tim is " + a + " years old."
b; //("Tim is 32 years old")



// Store some information following in variables.
var yourName; 
var instructorName;

// Update the variables above so the expression reads correctly.
// Answers Below:


// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
var yourName = "Vince";
undefined
var instructorName = "Tim and JD";
undefined
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName; 
undefined
statement;
"Vince is taking a class at The Iron Yard, my instructor's name is Tim and JD"