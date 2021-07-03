// // This is my first JavaScript code!
// console.log('Hello World'); // statement

let name = 'Alisa';
console.log(name);
// VARIBLE NAME CONDITIONS:
// Cannot be a reserved keyword, eg. let, if, var, typeof, return, ..
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive (preferably use camelcase)

let firstName = 'Alisa';
let lastName = 'Zarina';
console.log(firstName, lastName);

let interestRate = 0.3;
// const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
// Value of a variable can change, but value of a constant can't.
// So, if you don't want the input to change/be reassigned, use CONST (throw error)
// Hence, if YES reassign => variable (let) | if NO reassign => constant (const)


// Primitives or Value Types //
// string, number, boolean, undefined, null //

let names = 'Alisa'; // String Literal
let age = 25; // Number Literal
let isApproved = true; // Boolean Literal (true or false only)
let firstNames = undefined;
let selectedColor = null; // explicitly clear the value of variable or remove selection from user


// Dynamic Typing -> values can be changed, even via console directly //

// Reference Types //
// object, array, function //

// Object example - start
let person = {
    name: 'Alisa',
    age: 25
};

// Dot Notation
person.name = 'John'; // change property value

// Bracket Notation
person['name'] = 'Mary'; // change property value

console.log(person);
// Object example - end


// Array example | An array is a data structure used to represent a list of items
let selectedColors = ['red', 'blue'];    // Array Literal
selectedColors[2] = 'green';    // add more elements
console.log(selectedColors);


// Function | A set of statements that perform a task or calculate a value
// Performing a task example:
function greet(name, lastName) {  // name = parameter
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Smith');    // to call the function | 'John' is an argument, to fill the 'name' parameter
greet('Mary', 'Shelley');

// Calcuting a value, example:
function square(number) {
    return number * number;
}
let number = square(2);
console.log(number);
// OR:
console.log(square(2));    // two function calls in one line!
