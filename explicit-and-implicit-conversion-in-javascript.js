/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

//PART 1
//Bug #1: Unexpected string concatenation
//original
let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

//fixed
let firstNumber = Number('5'); //Explicitly string to number
let secondNumber = 2;
let mathResult = firstNumber - secondNumber;
console.log("After fix - explicit conversion:", mathResult);
console.log("Type of result:", typeof mathResult);
/*
EXPLANATION: The original subtraction actually worked due to implicit conversion, 
but using Number() makes our intent clear and prevents confusion. The real issue 
was that the output message could be misleading in other contexts.
*/

//Bug #: String "false" is truhy
console.log('BEFORE fix - Boolean("false"):', Boolean("false"));
console.log('This evaluates to:', Boolean("false") ? "TRUE" : "FALSE");

//Fixed version
let validityString = "false";
let isValidFixed = validityString.toLowerCase() === "true"; // Convert string content to actual boolean
console.log("AFTER fix - proper string to boolean:", isValidFixed);
console.log('This evaluates to:', isValidFixed ? "TRUE" : "FALSE");

/*
EXPLANATION: Boolean("false") returns true because any non-empty string is truthy.
To properly convert a string representation of "false" to boolean false, we need
to compare the string content, not just wrap it in Boolean().
*/

//Bug #3: String concatenation insteas of addition
let ageString = "25";
let yearsToAdd = 5;
let wrongTotal = ageString + yearsToAdd; // This concatenates: "255"
console.log("BEFORE fix - concatenation:", wrongTotal, "| Type:", typeof wrongTotal);

//Fixed version
let currentAge = Number(ageString); // Explicitly convert string to number
let correctTotalAge = currentAge + yearsToAdd; // Now this adds mathematically
console.log("AFTER fix - proper addition:", correctTotalAge, "| Type:", typeof correctTotalAge);

/*
EXPLANATION: The + operator performs concatenation when one operand is a string.
Using Number() explicitly converts the string to a number, ensuring mathematical
addition instead of string concatenation.
*/

//PART 2
// Eample 1: Implicit type conversion

// Demonstrating various implicit conversions
let implicitExample1 = "10" * 2; // String multiplied by number
console.log('"10" * 2 =', implicitExample1, "| Type:", typeof implicitExample1);

let implicitExample2 = true + 1; // Boolean converted to number
console.log('true + 1 =', implicitExample2, "| Type:", typeof implicitExample2);

let implicitExample3 = "Hello" + 42; // Number converted to string
console.log('"Hello" + 42 =', implicitExample3, "| Type:", typeof implicitExample3);
console.log();

//Example 2: Exlicit type conversion

// Demonstrating explicit conversions
let numberString = "123.45";
let explicitNumber = Number(numberString);
console.log(`Number("${numberString}") =`, explicitNumber, "| Type:", typeof explicitNumber);

let someNumber = 456;
let explicitString = String(someNumber);
console.log(`String(${someNumber}) =`, explicitString, "| Type:", typeof explicitString);

let truthyValue = "hello";
let explicitBoolean = Boolean(truthyValue);
console.log(`Boolean("${truthyValue}") =`, explicitBoolean, "| Type:", typeof explicitBoolean);
console.log();
