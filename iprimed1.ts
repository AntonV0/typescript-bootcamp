// ! -------------------------------------------------------------------------------------------------------

// ! TYPESCRIPT INTRODUCTION:

// ! -------------------------------------------------------------------------------------------------------

// ? What is TypeScript?

// TypeScript is a superset of JavaScript that adds static typing and other features to the language. 
// It was developed by Microsoft and is designed to help developers write more robust and maintainable code. 
// TypeScript compiles down to plain JavaScript, which can run in any environment that supports JavaScript,
// such as web browsers and Node.js.

// TypeScript mainly helps in catching errors at compile time (adds static typing to find errors early), 
// improving code readability, and providing better tooling support.

// It is commonly used with frameworks like Angular, React, and Vue.js, and is also popular for 
// server-side development with Node.js.

// ? -------------------------------------------------------------------------------------------------------

// ? Why use TypeScript?

// 1. Static Typing: TypeScript allows you to define types for variables, function parameters, and return
//    values. This helps catch type-related errors during development, making your code more robust and 
//    less prone to bugs.

// 2. Improved Tooling: TypeScript provides better tooling support, including autocompletion, type 
//    checking, and refactoring tools. This can enhance developer productivity and make it easier to 
//    maintain large codebases.

// 3. Enhanced Code Readability: By explicitly defining types, TypeScript can make your code more
//    self-documenting and easier to understand for other developers (or even yourself in the future).

// 4. Compatibility with JavaScript: Since TypeScript is a superset of JavaScript, you can gradually
//    adopt it in your existing JavaScript projects.

// 5. Support for Modern JavaScript Features: TypeScript supports the latest JavaScript features, 
//    allowing you to use modern syntax and capabilities while still maintaining compatibility with older 
//    environments.

// 6. Large Community and Ecosystem: TypeScript has a large and active community, which means there are
//    plenty of resources, libraries, and frameworks that support TypeScript. This can make it easier to
//    find solutions to problems and integrate with other tools.

// ? -------------------------------------------------------------------------------------------------------

// ? TypeScript Setup:

// To get started with TypeScript, you can follow these steps:
// 1. Install TypeScript: You can install TypeScript globally using npm (Node Package Manager) with the
//    following command:
// !      npm install -g typescript

// 2. Check the installation and version of TypeScript by running:
// !      tsc --version

// 3. Create a TypeScript file: You can create a new file with the .ts extension, for example,
// !      app.ts

// 4. Write TypeScript code: You can start writing TypeScript code in your .ts file. For example:
// !      let message: string = "Hello, TypeScript!";

// 5. Compile TypeScript to JavaScript: You can compile your TypeScript code to JavaScript using the
//    tsc command followed by the name of your TypeScript file:
// !      tsc app.ts
//    This will generate a corresponding JavaScript file (app.js) that you can run in any JavaScript
//    environment.

// 6. Run the JavaScript file: You can run the generated JavaScript file using Node.js or in a web
//    browser. For example, if you're using Node.js, you can run:
// !      node app.js

// 7. Optional: You can also set up a TypeScript configuration file (tsconfig.json) to specify compiler
//    options and manage your TypeScript project more efficiently.
// !      tsc --init

// The JavaScript file can be empty if you only have TypeScript code, but it will be generated when
// you compile the TypeScript file.

// ? -------------------------------------------------------------------------------------------------------

// ? Problems with JavaScript:

// JavaScript is a dynamically typed language, which means that variables can hold values of any type and
// the type can change at runtime. This flexibility can lead to certain issues:

// 1. Type Errors: Since JavaScript does not enforce type checking, it is easy to accidentally assign
//    values of the wrong type to variables, which can lead to runtime errors. For example:
// !      let x = 5;
// !      x = "Hello"; // Allowed in JavaScript, but can cause issues when you try to use 'x' as a number.

// 2. Lack of Tooling Support: The dynamic nature of JavaScript can make it difficult for development
//    tools to provide accurate autocompletion, type checking, and refactoring support. This can lead to
//    a less efficient development experience, especially in larger codebases.

// 3. Code Readability: Without explicit types, it can be harder for developers to understand the
//    intended use of variables and functions, especially for those who are new to programming or are not
//    familiar with JavaScript's quirks.

// 4. Maintenance Challenges: As JavaScript projects grow in size and complexity, it can become
//    increasingly difficult to maintain the codebase, as it may be unclear how different parts of the code
//    interact with each other, and type-related bugs can be harder to track down.

// ? -------------------------------------------------------------------------------------------------------

// ? In JavaScript, the lack of static typing can lead to situations where you might accidentally perform 
// ? operations on incompatible types, which can result in unexpected behavior or errors at runtime. 

// ? For example:
// function add(a, b) {
//     return a + b;
// }

// add(5, "10");

// ? Output:
// 510

// ? Using TypeScript, you can catch this type of error at compile time by defining the types of 
// ? the parameters:
function add(a: number, b: number): number {
    return a + b;
}

// ? To run the code, you would compile the TypeScript file to JavaScript and then execute the resulting 
// ? JavaScript file. Type in terminal:
// !      tsc iprimed1.ts
// !      node iprimed1.js

console.log(add(5, 10)); // ? Output: 15
// console.log(add(5, "10")); // This will cause a compile-time error because "10" is not a number

// ? -------------------------------------------------------------------------------------------------------

// ? Example 2: Calling a function without providing the required arguments

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet();

// ? Output in terminal after using tsc iprimed1.ts and node iprimed1.js:
// iprimed1.ts:139:1 - error TS2554: Expected 1 arguments, but got 0.

// 139 greet();
//     ~~~~~

//   iprimed1.ts:135:16
//     135 function greet(name) {
//                        ~~~~
//     An argument for 'name' was not provided.


// Found 1 error in iprimed1.ts:139

// ? Output in JavaScript (if you ignore the TypeScript error and run the compiled JavaScript):
// Hello, undefined!

// ? In this example, the greet function expects a name parameter, but it is called without any arguments. 
// ? In JavaScript, this would result in the name being undefined, which can lead to unexpected behavior. 
// ? In TypeScript, this will cause a compile-time error, alerting you to the issue before you run the code.

// ? -------------------------------------------------------------------------------------------------------

// ? Example 3:

let user1: { name: String } = { name: "Alice" };
console.log(user1.name); // ? Output in JS: Alice
console.log(user1.age); // ? Output in JS: undefined

// ? In this example, we have an object user with a name property. When we try to access the age property, 
// ? which does not exist on the user object, JavaScript will return undefined. This can lead to bugs if 
// ? you are expecting age to be a number and try to perform operations on it.

// ? In TypeScript, you can define an interface to specify the structure of the user object, which would
// ? help catch this type of error at compile time:

interface User {
    name: string;
    age?: number; // age is optional
}

let user: User = { name: "Alice" };
console.log(user.name); // ? Output: Alice
console.log(user.age); // ? Output: undefined, but TypeScript knows that age is optional and can be undefined

// ? -------------------------------------------------------------------------------------------------------

// ? TypeScript variables

// ? In TypeScript, you can declare variables using the let and const keywords, just like in JavaScript.
// ? However, TypeScript allows you to specify the type of the variable, which can help catch errors and
// ? improve code readability.

let a: number = 3;
console.log(a); // ? Output: 3
let b: string = "Hello, TypeScript!";
let c: boolean = true;

let name1: String = "Alice";
console.log(name1); // ? Output: Alice

// ? Union types allow you to specify that a variable can hold values of multiple types. For example:
let value: number | string;

value = 67
console.log(value); // ? Output: 67

value = "Hello";
console.log(value); // ? Output: Hello

value = true; // This will cause a compile-time error because 'true' is not a number or a string
console.log(value); // ? Output: true (if you ignore the TypeScript error and run the compiled JavaScript)

// ? Intersection types allow you to combine multiple types into one. For example:
// A type is created by combining two or more types, and it must satisfy all of the combined types.
// This can be useful for creating complex types that share properties from multiple sources.

type A = { name: string }; // Define a type A with a name property of type string
type B = { age: number }; // Define a type B with an age property of type number

type Person = A & B; // Define a type Person that combines A and B

let person: Person = { name: "Alice", age: 30 };
console.log(person); // ? Output: { name: "Alice", age: 30 }

// ? What is this type in TypeScript?
// This type is used to create a custom datatype:

type ID = number;
let userId: ID = 101;
console.log(userId); // ? Output: 101
// This can be useful for improving code readability and maintainability, as it allows you to give meaningful
// names to types and can help prevent errors by ensuring that variables of a certain type are used 
// consistently throughout your code.

let u1: { name: string; age: number } = {
    name: "Bob",
    age: 35
}

console.log(u1); // ? Output: { name: "Bob", age: 35 }

type User1 = { name: string; age: number };
let u2: User1 = {
    name: "Charlie",
    age: 28
}

console.log(u2); // ? Output: { name: "Charlie", age: 28 }

// ? Keywords:
// All keywords in JS are also keywords in TS, but TS has some additional keywords that are TS-specific.

// ? These include:
// - type: Used to define custom types.
// - interface: Used to define interfaces, which are a way to describe the shape of an object.
// - enum: Used to define enumerations, which are a way to define a set of named constants.
// - namespace: Used to organize code into logical groups and prevent name collisions.
// - module: Used to define modules, which are a way to organize code into separate files and namespaces.

// ? Operators:
// All operators in JS are also available in TS, but TS has some additional operators that are TS-specific.

// - as: Used for type assertions, allowing you to tell the compiler to treat a value as a specific type.
// - keyof: Used to get the keys of a type as a union of string literal types.
// - typeof: Used to get the type of a variable or expression at compile time.
// - in: Used to check if a property exists in an object type.
// - instanceof: Used to check if an object is an instance of a specific class or constructor function.
// - ? : Used for optional chaining, allowing you to safely access nested properties of an object without
//       having to check for null or undefined values at each level.
// - ?? : Used for nullish coalescing, allowing you to provide a default value when a variable is null or undefined.
// - ! : Used for non-null assertion, allowing you to tell the compiler that a value is not null or undefined,
//       even if it cannot be determined at compile time.

// ? any operator:
// The any type is a special type in TypeScript that allows you to opt out of type checking for a variable.
// When you declare a variable with the any type, it can hold values of any type, and you can perform any
// operations on it without TypeScript raising any errors. This can be useful in certain situations where
// you need to work with dynamic data or when you are migrating existing JavaScript code to TypeScript.
// However, using the any type can also lead to potential issues, as it effectively disables the benefits
// of static typing and can make your code more prone to runtime errors if not used carefully.

let val: any = "Hello";
val = 42; // No error, val can hold any type
val = "Hello"
console.log(val); // ? Output: Hello

// While the any type can be useful in certain situations, it is generally recommended to use more
// specific types whenever possible to take advantage of TypeScript's type checking and improve code
// maintainability.

// ? as operator:
// The as operator in TypeScript is used for type assertions, which allow you to tell the compiler to
// treat a value as a specific type. This can be useful when you have information about the type of a value
// that the compiler cannot infer on its own, or when you want to override the inferred type for a 
// variable.

// ? Example without as:
let val2: any = 67
let len = val2.length; 
// This will cause a compile-time error because val2 is of type any and does not have a length property

console.log(len); // ? Output: undefined (if you ignore the TypeScript error and run the compiled JavaScript)

// ? Example with as:
let val3: any = 67
let len2 = (val3.toString() as string).length; // ? Output: 2

// This will not cause a compile-time error because we are asserting that val3.toString() is of type string,
// which does have a length property.

// To get the error:
// ? let len2 = val3.length; // This will cause a compile-time error because val3 is not a string

console.log(len2); // ? Output: 2

// ? typeof
let x: number = 10;
if (typeof x === "number") {
    console.log("x is a number");
}

// ? keyof
// The keyof operator is used to get the keys of a type as a union of string literal types. For example:

// ? Without keyof:

type user = {
    name: string;
    age: number;
}

function getValue1(obj: user, key: string) {
    return obj[key];
}

let user3 = { name: "Charlie", age: 40 };
console.log(getValue1(user3, "name")); // ? Output: Charlie
console.log(getValue1(user3, "age")); // ? Output: 40
console.log(getValue1(user3, "email")); 
// This will not cause a compile-time error because the key parameter is of type string, which can be 
// any string, including "email".
// However, it will return undefined at runtime because "email" is not a key of the user3 object.

// ? With keyof:
function getValue2(obj: user, key: keyof user) {
    return obj[key];
}

let user4 = { name: "Dave", age: 25 };
console.log(getValue2(user4, "name")); // ? Output: Dave
console.log(getValue2(user4, "age")); // ? Output: 25
console.log(getValue2(user4, "email"));
// This will cause a compile-time error because "email" is not a key of the user4 object

// ? instanceof operator:
class Person1 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

let person1 = new Person1("Alice");
console.log(person1 instanceof Person1); // ? Output: true
console.log(person1 instanceof Object); // ? Output: true
console.log(person1 instanceof Array); // ? Output: false

// console.log(person2 instanceof Person1); // ? Output: false 
// (gives error in JS because person2 is not defined)

let x1 = new Number(5)
console.log(x1 instanceof Number); // ? Output: true
console.log(x1 instanceof Object); // ? Output: true
console.log(x1 instanceof String); // ? Output: false

// ? Data Types in TypeScript:
// TypeScript has several built-in data types, including:
// - number: Represents numeric values, including integers and floating-point numbers.
// - string: Represents text values.
// - boolean: Represents true/false values.
// - array: Represents a collection of values of the same type.
// - tuple: Represents a fixed-length array with specified types for each element.
// - enum: Represents a set of named constants.
// - any: Represents any type of value, effectively opting out of type checking.
// - void: Represents the absence of a value, typically used for functions that do not return anything.
// - null and undefined: Represents the absence of a value or an uninitialized variable.
// - object: Represents non-primitive types, such as arrays, functions, and custom objects.
// - unknown: Represents a value that could be of any type, but is safer than any because it requires type checking before being used.
// - never: Represents a value that never occurs, typically used for functions that always throw an error or have an infinite loop.
// - bigint: Represents large integers that cannot be represented by the number type.
// - symbol: Represents unique identifiers, often used for object property keys.

// ? TypeScript also allows you to define custom types using interfaces and type aliases, which can help
// ? improve code readability and maintainability by giving meaningful names to complex types.

let value2: any = "Hello";
console.log(value2.length); // ? Output: 5
console.log(value2.toFixed()) // ? Output: TypeError: value2.toFixed is not a function (error in JavaScript)

let value3: unknown = "Hello";
console.log(value3.length); // This will cause a compile-time error because value3 is of type unknown and does not have a length property
console.log(value3.toFixed()); // This will also cause a compile-time error because value3 is of type unknown and does not have a toFixed method.

// To use value3, you would need to perform type checking or type assertions to ensure that it is of the expected type before accessing its properties or methods. For example:
if (typeof value3 === "string") {
    console.log(value3.length); // ? Output: 5
    console.log(value3.toFixed()); // This will still cause a runtime error because toFixed is not a method of string, but it will not cause a compile-time error because we have checked that value3 is a string.
}

let value4: unknown = 234;
if (typeof value4 === "string") {
    console.log(value4.length); // This will not be executed because value4 is not a string
}

// ? void:
// The void type is used to represent the absence of a value, typically for functions that do not return anything. For example:
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Hello, TypeScript!"); // ? Output: Hello, TypeScript!

// The void type indicates that the logMessage function does not return any value. If you try to return a value from a void function, you will get a compile-time error. For example:
function logMessageWithReturn(message: string): void {
    console.log(message);
    return "This will cause a compile-time error"; // This will cause a compile-time error because a void function cannot return a value
}

function greet(): void {
    return hello; // This will also cause a compile-time error because a void function cannot return a value
}

greet(); // This will not cause a compile-time error, but it will return undefined at runtime because the function does not return anything.

function greet(): void {
    return;
} // This is valid because it does not return any value, it simply exits the function.

console.log(greet()); // ? Output: undefined (because the greet function does not return anything)

// ? never:
// The never type represents a value that never occurs. It is typically used for functions that always throw an error or have an infinite loop. For example:
function throwError(message: string): never {
    throw new Error(message);
}
function infiniteLoop(): never {
    while (true) {
        // This function will never return because it has an infinite loop
    }
}

// The never type indicates that the throwError function will never return a value because it always throws an error, and the infiniteLoop function will never return because it has an infinite loop. If you try to return a value from a never function, you will get a compile-time error. For example:
function throwErrorWithReturn(message: string): never {
    throw new Error(message);
    return "This will cause a compile-time error"; // This will cause a compile-time error because a never function cannot return a value
}

function looping(): never {
    while (true) {
        console.log("Running..."); // This will not cause a compile-time error, but it will never stop running because it has an infinite loop.

    }
}
// looping(); // This will not cause a compile-time error, but it will never stop running because it has an infinite loop.

// ? To ensure all cases are handled:

type status = "success" | "error" | "loading";
function handleStatus(s: status): string {
    switch (s) {
        case "success": return "Operation was successful!";
        case "error": return "An error occurred.";
        case "loading": return "Loading...";
        default: return assertNever(s); // This will cause a compile-time error if there is an unhandled case
    }
}

function assertNever(x: never): never {
    throw new Error("Unexpected value: " + x);
}

// ? Tuple data type:
// A tuple is a fixed-length array with specified types for each element. 
// It is a mutable data structure that can hold a fixed number of values of different types.
// For example:
let tuple: [string, number] = ["Alice", 30];
console.log(tuple); // ? Output: ["Alice", 30]
// The first element of the tuple is a string (the name), and the second element is a number (the age).
// You can access the elements of the tuple using their index:
console.log(tuple[0]); // ? Output: Alice
console.log(tuple[1]); // ? Output: 30
console.log(tuple[2]); // This will cause a compile-time error because the tuple only has two elements

// Replacing the value:
tuple[0] = "Bob";
tuple[1] = 35;
console.log(tuple); // ? Output: ["Bob", 35]

// Adding elements:
tuple.push("Charlie"); // This will cause a compile-time error because the tuple is defined to have only two elements
console.log(tuple); // ? Output: ["Bob", 35] (if you ignore the TypeScript error and run the compiled JavaScript)
// This is not recommended because it goes against the fixed-length nature of tuples and can lead to unexpected behavior.

// If you change the order of the types in the tuple, you will get a compile-time error. For example:
let tuple2: [number, string] = ["Alice", 30]; // This will cause a compile-time error because the types are in the wrong order

// Making the tuple immutable:
let tuple3: readonly [string, number] = ["Alice", 30];
tuple3[0] = "Bob"; // This will cause a compile-time error because the tuple is readonly and cannot be modified
console.log(tuple3); // ? Output: ["Alice", 30]

// To not show the error:
let tuple4: [string, number?] = ["Alice"];
let tuple5: [string, number?] = ["Bob", 30];
console.log(tuple4); // ? Output: ["Alice"]
console.log(tuple5); // ? Output: ["Bob", 30]

// To delete element:
let user5: [string, number] = ["Charlie", 40];
user5.pop(); // This will remove the second element (age) from the tuple
console.log(user5); // ? Output: ["Charlie"] (the age has been removed)
// We should not use pop() on tuples because it goes against the fixed-length nature of tuples and can lead to unexpected behavior. If you need a data structure that can hold a variable number of elements, you should use an array instead.

// To remove the first element:
let user6: [string, number] = ["Dave", 25];
user6.shift(); // This will remove the first element (name) from the tuple
console.log(user6); // ? Output: [25] (the name has been removed)
// Again, we should not use shift() on tuples for the same reasons as pop(). If you need a data structure that can hold a variable number of elements, you should use an array instead.

// To add element at the beginning:
let user7: [string, number] = ["Eve", 22];
user7.unshift("Alice"); // This will add "Alice" at the beginning of the tuple
console.log(user7); // ? Output: ["Alice", "Eve", 22] (this goes against the fixed-length nature of tuples and can lead to unexpected behavior)
// We should not use unshift() on tuples for the same reasons as pop() and shift(). If you need a data structure that can hold a variable number of elements, you should use an array instead.

// Tuple is designed to be a fixed structure with fixed positions
// Using array methods will break the intended use of tuples and can lead to bugs and unexpected behavior. It is best to use tuples for their intended purpose of representing a fixed structure with known types at specific positions, and to use arrays when you need a collection of values that can grow or shrink in size.

// enum data type:
enum Role {
    Admin,
    User,
    Guest
}

function checkRole(role: Role): void {
    if (role === Role.Admin) {
        console.log("You have admin privileges.");
    } else if (role === Role.User) {
        console.log("You are a regular user.");
    } else if (role === Role.Guest) {
        console.log("You are a guest.");
    } else {
        console.log("Unknown role.");
    }
}

checkRole(Role.Admin); // ? Output: You have admin privileges.
checkRole(Role.User); // ? Output: You are a regular user.
checkRole(Role.Guest); // ? Output: You are a guest.

// ? Functions in TypeScript:
// Functions are a fundamental building block in TypeScript, just like in JavaScript. 
// However, TypeScript allows you to specify the types of function parameters and return values,
// which can help catch errors and improve code readability.


// ? 1. Functions with parameter type annotations:
function add(a: number, b: number) {
    return a + b;
}

console.log(add(5, 10)); // ? Output: 15
// console.log(add(5, "10")); // This will cause a compile-time error because "10" is not a number

// ? 2. Function with return type annotation
function add(a: number, b: number): number {
    return a + b;
    // This will cause a compile-time error because the function is declared to return a number
    // return 'Hello'
}

console.log(add(3,6)); // ? Output: 9

// ? 3. Optional parameters:
// The ? symbol is used to indicate that a parameter is optional. Optional parameters can be omitted
// when calling the function, and they will be undefined if not provided.
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greet("Alice")); // ? Output: Hello, Alice!
console.log(greet("Bob", "Hi")); // ? Output: Hi, Bob!
// console.log(greet("Charlie", 456)); // This will cause a compile-time error because 456 is not a string

// ? 4. Default parameters:
// Like in JS, you can also provide default values for parameters in TypeScript. If a parameter is not provided
// when calling the function, it will take on the default value.
// Default parameters should be placed after all required parameters in the function signature. 
// If you try to place a default parameter before a required parameter, you will get a compile-time error
function greet(age: number, name: string = "Guest") {
    return `Hello, ${name}! You are ${age} years old.`;
}

// ? 5. Function type:
// You can also define the type of a function itself, which includes the types of its parameters and return value.
// This has no function body, and also defines the return type of the function. For example:
let add: (a: number, b: number) => number;
add = (x, y) => x + y;
console.log(add(4, 5)); // ? Output: 9

// ? 6. Keyword argumenmts:
function profile({place, name, age}:{place:string; name:string, age:number}) {
    console.log(place)
    console.log(name)
    console.log(age)
}
profile("UK", "Alice", 30); // This will cause a compile-time error because the function expects an object with properties place, name, and age, but it is being called with separate arguments instead.

function profile({
    place,
    name,
    age
}: {
    place: string;
    name: string;
    age: number;
}) {
    console.log(place);
    console.log(name);
    console.log(age);
}

profile({place: "UK", name: "Alice", age: 30}); 
// ? Output:        
// UK
// Alice
// 30

// You dont need the order of the properties in the object to match the order of the 
// parameters in the function signature, as long as the property names and types are correct.
profile({name: "Alice", age: 30, place: "UK"}); 
// ? Output:
// UK
// Alice
// 30

// ? Combination of default and keyword arguments:
type user3 = {
    name: string;
    colour?: string;
    price?: number;
}

function Mango({name, colour="yellow", price=34.45}:user3):void {
    console.log(name, colour, price);
}

// You can call the Mango function with just the name property, and it will use the default values for colour and price.
// But default parameters should be optional in the type definition (?), otherwise you will get a compile-time error because
// the function expects all properties to be provided.
Mango({name: "Alphonso"});
// ? Output: Alphonso yellow 34.45



// ? Combination of default and keyword arguments with a separate type definition for the options object:
type Options = {
    place?: string;
    salary?: number;
}

function Employee(name: string, {place = "UK", salary = 40000}: Options) {
    console.log(name);
    console.log(place);
    console.log(salary);
}

Employee("Alice", {}); // Use empty brackets to indicate that you are providing an options object, even though it is empty. This will allow the function to use the default values for place and salary.
// ? Output:
// Alice
// UK
// 40000

// ? Arrow functions:
const add = (a: number, b: number): number => {
    console.log("Adding numbers...");
    return a + b;
}
console.log(add(4, 6)); // ? Output: Adding numbers... 10

// ? Using type aliases to define the shape of the parameters for an arrow function:
type Numbers = {
    a1: number;
    b1: number;
}

const add = ({ a1, b1 }: Numbers): number => {
    return a1 + b1;
}

console.log(add({ a1: 4, b1: 6 })); // ? Output: 10

// ? Rest parameters:
function sum(...numbs: number[]) {
    console.log(numbs);
}
sum(1, 2, 3, 4, 5);
// ? Output: [1, 2, 3, 4, 5]


// ? To find the max value in an array using rest parameters:
function maximum(...nums: number[]): number {
    // No need to import Math.max, it is available globally in JavaScript and TypeScript
    return Math.max(...nums);
}

console.log(maximum(3, 7, 2, 9, 5)); // ? Output: 9

// ? TypeScript Interfaces:
// An interface in TypeScript is a way to define the shape of an object. It is a contract that specifies the properties and 
// methods that an object must have. Interfaces are used to enforce a certain structure on objects and can help catch errors
// at compile time by ensuring that objects conform to the defined shape.

interface Person {
    name: string;
    age: number;
}

// Creating an object that has to follow the Person interface:
let person: Person = {
    name: "Alice",
    age: 30
};

console.log(person); // ? Output: { name: "Alice", age: 30 }

// If you try to create an object that does not conform to the Person interface, you will get a compile-time error. For example:
let person2: Person = {
    name: "Bob"
    // This will cause a compile-time error because the age property is missing and the object does not conform to the Person interface
};

// ? Function type
interface Add {
    (a: number, b: number): number;
}

let sums: Add = (x, y) => x + y;
console.log(sums(4, 5)); // ? Output: 9

// ? Interface as a function parameter:
interface User {
    name: string;
    age: number;
}

function fn1(user: User) {
    console.log(user.name, user.age);
}

fn1({ name: "Charlie", age: 40 }); // ? Output: Charlie 40
// fn1({ name: "Charlie" }); // This will cause a compile-time error because the age property is missing and the object does not conform to the User interface

// ? Interface as a return type:
interface Product {
    id: number;
    name: string;
}

function getProduct(): Product {
    return {
        id: 101,
        name: "Laptop"
    }
}

let p = getProduct();
console.log(p.id, p.name); // ? Output: 101 Laptop
console.log(getProduct()); // ? Output: { id: 101, name: "Laptop" }

// ? Interface with methods:
interface Person {
    name: string;
    greet(): string;
}

let user: Person = {
    name: "Dave",
    greet() {
        return `Hello, my name is ${this.name}`;
    }
}

console.log(user.greet()); // ? Output: Hello, my name is Dave

// ? Arrays:
// In TypeScript, you can define the type of an array using square brackets [] or the Array<T> syntax.
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers); // ? Output: [1, 2, 3, 4, 5]

let strings: Array<string> = ["Hello", "TypeScript", "Arrays"];
console.log(strings); // ? Output: ["Hello", "TypeScript", "Arrays"]

// Creating array with a tuple type:
let tupleArray: [string, number][] = [
    ["Alice", 30],
    ["Bob", 25],
    ["Charlie", 40]
];
console.log(tupleArray); // ? Output: [["Alice", 30], ["Bob", 25], ["Charlie", 40]]

// Creating empty array with a specific type:
let emptyArray: string[] = [];
console.log(emptyArray); // ? Output: []
emptyArray.push("Hello");
console.log(emptyArray); // ? Output: ["Hello"]

// ? You can also use the any type for arrays, but it is generally recommended to use more specific types to take advantage of TypeScript's type checking and improve code maintainability.
let anyArray: any[] = [1, "Hello", true];
console.log(anyArray); // ? Output: [1, "Hello", true]
anyArray.push({ name: "Alice" });
console.log(anyArray); // ? Output: [1, "Hello", true, { name: "Alice" }]

// Creating Union type array:
let unionArray: (number | string)[] = [1, "Hello", 2, "TypeScript"];
console.log(unionArray); // ? Output: [1, "Hello", 2, "TypeScript"]

// Creating readonly array:
let readonlyArray: ReadonlyArray<string> = ["Alice", "Bob", "Charlie"];
console.log(readonlyArray); // ? Output: ["Alice", "Bob", "Charlie"]
// readonlyArray.push("Dave"); // This will cause a compile-time error because the array is readonly and cannot be modified

// Create array using Array constructor:
let nums = new Array();
console.log(nums); // ? Output: []

let nums = new Array(3);
console.log(nums); // ? Output: [ <3 empty items> ]

let nums = new Array(1, 2, 3);
console.log(nums); // ? Output: [1, 2, 3]

// ? Methods of arrays:
// You can use all the standard array methods in TypeScript, such as push, pop, shift, unshift, map, filter, reduce, etc. For example:
let arr: number[] = [1, 2, 3];
arr.push(4);
console.log(arr); // ? Output: [1, 2, 3, 4]

arr.pop();
console.log(arr); // ? Output: [1, 2, 3]

arr.shift();
console.log(arr); // ? Output: [2, 3]

arr.unshift(0);
console.log(arr); // ? Output: [0, 2, 3]

let mappedArr = arr.map(x => x * 2);
console.log(mappedArr); // ? Output: [0, 4, 6]

let filteredArr = arr.filter(x => x > 1);
console.log(filteredArr); // ? Output: [2, 3]

let reducedValue = arr.reduce((acc, x) => acc + x, 0);
console.log(reducedValue); // ? Output: 5

// To remove from the middle of the array:
let arr1: number[] = [1, 2, 3, 4, 5];
arr1.splice(2, 1); // This will remove the element at index 2 (the number 3) from the array, and it will shift the remaining elements to fill the gap. The first parameter (2) is the starting index, and the second parameter (1) is the number of elements to remove.
console.log(arr1); // ? Output: [1, 2, 4, 5]

// Slice or splice
// The slice method can be used to create a new array that excludes the element at index 2, without modifying the original array:
let arr3: number[] = [1, 2, 3, 4, 5];
let newArr = arr3.slice(0, 2).concat(arr3.slice(3));

console.log(newArr); // ? Output: [1, 2, 4, 5]
console.log(arr3); // ? Output: [1, 2, 3, 4, 5] (the original array remains unchanged)

// The splice method can be used to remove the element at index 2 and modify the original array:
let arr4: number[] = [1, 2, 3, 4, 5];
arr4.splice(2, 1);
console.log(arr4); // ? Output: [1, 2, 4, 5] (the original array is modified and the element at index 2 is removed)


// Delete based on index:
let arr2: number[] = [1, 2, 3, 4, 5];
delete arr2[2]; // This will remove the element at index 2 (the number 3) from the array, but it will not change the length of the array or shift the remaining elements. Instead, it will leave an empty slot at index 2.
console.log(arr2); // ? Output: [1, 2, <1 empty item>, 4, 5]

// Using includes method to check if an element exists in the array:
let arr3: number[] = [1, 2, 3, 4, 5];
console.log(arr3.includes(3)); // ? Output: true    
// This might cause a compile-time error if you are using an older version of TypeScript that does not support the includes method on arrays. In that case, you can use the indexOf method instead:
console.log(arr3.indexOf(3) !== -1); // ? Output: true (this checks if the index of 3 is not -1, which means it exists in the array)

// Iterating through an array using for...of loop:
let arr4: number[] = [1, 2, 3, 4, 5];
for (let num of arr4) {
    console.log(num);
}

// ? Output:
// 1
// 2
// 3
// 4
// 5    

// ! TypeScript Objects:
// In TypeScript, you can define the type of an object using an interface or a type alias. This allows you to specify the properties and their types that an object should have, which can help catch errors at compile time and improve code readability.
// It is similar to a dictionary in Python, where you can have key-value pairs, but in TypeScript, you can also specify the types of the keys and values.

// ? Defining user object without an interface:
let user = {
    name: "Sid",
    age: 31
}

console.log(user); // ? Output: { name: "Sid", age: 31 }
console.log(user.name); // ? Output: Sid
console.log(user.age); // ? Output: 31

// ? Defining user object with type annotation:
let user1: { name: string; age: number } = {
    name: "Alice",
    age: 30
};
console.log(user1); // ? Output: { name: "Alice", age: 30 }
console.log(user1.name); // ? Output: Alice
console.log(user1.age); // ? Output: 30

// ? Defining user object with an interface:
interface User {
    name: string;
    age: number;
}
let user2: User = {
    name: "Bob",
    age: 25
};
console.log(user2); // ? Output: { name: "Bob", age: 25 }
console.log(user2.name); // ? Output: Bob
console.log(user2.age); // ? Output: 25

// ? Creating an object using a constructor:
let user5 = new Object();
user5.name = "Charlie";
user5.age = 40;
console.log(user5);
// This would work in JavaScript, but doesn't in TypeScript without a type annotation, because the Object constructor does not have a defined shape for the properties name and age.

// Alternate way:
let user = new Object() as { name: string; age: number }
user.name = "abc"
user.age = 45
 
console.log(user) // ? Output: { name: "abc", age: 45 }
// This works because we are using a type assertion to tell the TypeScript compiler that the object we are creating with new Object() should be treated as having the shape { name: string; age: number }. 
// This allows us to assign properties name and age to the user object without causing a compile-time error. 
// However, this approach is not recommended because it bypasses the benefits of TypeScript's type checking and can lead to potential runtime errors if the object does not actually conform to the asserted type.

// Or:
let user = {} as any;
user["name"] = "abc";
user["age"] = 45;
console.log(user); // ? Output: { name: "abc", age: 45 }
// This works because we are using a type assertion to tell the TypeScript compiler that the object we are creating should be treated as having the any type, which allows us to assign properties name and age to the user object without causing a compile-time error. 
// However, this approach is not recommended because it effectively disables TypeScript's type checking for the user object and can lead to potential runtime errors if the object does not actually conform to the expected shape.

// Or:
let user = Object.create({});
user.name = "abc";
user.age = 45;
console.log(user); // ? Output: { name: "abc", age: 45 }
// This works because Object.create({}) creates a new object with an empty object as its prototype, and we can then assign properties name and age to the user object without causing a compile-time error. 
// However, this approach is not recommended because it does not provide any type safety or structure for the user object, and it can lead to potential runtime errors if the object does not actually conform to the expected shape.


// ? Using Object.create to create an object with a sp5ecific prototype:
let proto = { greet() { return "Hello!"; } };
let user = Object.create(proto);
user.name = "Dave";
user.age = 35;
console.log(user); // ? Output: { name: "Dave", age: 35 }
console.log(user.greet()); // ? Output: Hello!

// ? Methods of objects:
let user: { name: string} = {
    name: "Eve",
    greet() {
        return `Hello, my name is ${this.name}`;
    }
}
console.log(user.greet()); // ? Output: Hello, my name is Eve

// ? Add a new key to an object:
let user: { name: string; age: number } = {
    name: "Frank",
    age: 28
}
user.email = "frank@example.com";
console.log(user); // ? Output: { name: "Frank", age: 28, email: "frank@example.com" }
// Replace the object with a new one:
user["name"] = "Grace";
user["age"] = 32;
console.log(user); // ? Output: { name: "Grace", age: 32, email: "frank@example.com" }

// Delete a key from an object:
delete user.email;
console.log(user); // ? Output: { name: "Grace", age: 32 }

// Combine two objects:
let obj1 = { name: "Heidi", age: 27 };
let obj2 = { email: "heidi@example.com" };
let combined = { ...obj1, ...obj2 };
console.log(combined); // ? Output: { name: "Heidi", age: 27, email: "heidi@example.com" }

// Using Object.assign to combine two objects:
let obj3 = { name: "Ivan", age: 31 };
let obj4 = { email: "ivan@example.com" };
let combined2 = Object.assign({}, obj3, obj4);
console.log(combined2); // ? Output: { name: "Ivan", age: 31, email: "ivan@example.com" }

// Making objects immutable:
let user: { name: string; age: number } = {
    name: "Judy",
    age: 29
};
Object.freeze(user);
console.log(user); // ? Output: { name: "Judy", age: 29 }
user.name = "Karl"; // This will not change the name property because the object is frozen and cannot be modified
console.log(user); // ? Output: { name: "Judy", age: 29 }

// Iterating through the keys of an object using for...in loop:
let user = { place: "UK", salary: 80000 };
for (let key in user) {
    console.log(key, user[key]);
}

// ! TypeScript Classes:
// In TypeScript, you can define classes using the class keyword. A class is a blueprint for creating objects with specific properties and methods. 
// TypeScript classes support features such as inheritance, access modifiers, and static members, which can help you write more organised and maintainable code.

// ? Defining a class:
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
let person1 = new Person("Alice", 30);
console.log(person1); // ? Output: Person { name: "Alice", age: 30 }
console.log(person1.name); // ? Output: Alice
console.log(person1.age); // ? Output: 30
console.log(person1.greet()); // ? Output: Hello, my name is Alice and I am 30 years old.

// You cannot use `let` or `const` to declare a class, because classes are not variables, they are templates for creating objects.

// Static keyword:
// Static members of a class are shared among all instances of the class, and they can be accessed without creating an instance of the class.
class MyClass {
    static staticProperty: string = "I am a static property"
    static staticMethod() {
        return "I am a static method";
    }
}
console.log(MyClass.staticProperty); // ? Output: I am a static property
console.log(MyClass.staticMethod()); // ? Output: I am a static method

// Static methods can be called on the class itself, without needing to create an instance of the class.
// Using static keyword to define a static method:
class MathUtils {
    static add(a: number, b: number): number {
        return a + b;
    }
    static multiply(a: number, b: number): number {
        return a * b;
    }
}
console.log(MathUtils.add(5, 10)); // ? Output: 15
console.log(MathUtils.multiply(5, 10)); // ? Output: 50
// Without the static keyword, output would be TypeError: MathUtils.add is not a function, because add would be an instance method
// and you would need to create an instance of MathUtils to call it.

// ? Example 2: Using a class to implement a type (similar to an interface):
type profileType = {
    name: string;
    age: number;
}

class Profile implements profileType {
    name: string = "Sid";
    age: number = 31;
    place: string = "UK";
}

const p = new Profile();
console.log(p); // ? Output: Profile { name: "Sid", age: 31, place: "UK" }
console.log(p.name); // ? Output: Sid
console.log(p.age); // ? Output: 31
console.log(p.place); // ? Output: UK

// ? Example 3: Using interfaces to define the shape of a class:
interface Vehicle {
    make: string;
    model: string;
    year: number;
    getInfo(): string;
}

class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}
const myCar = new Car("Toyota", "Camry", 2020);
console.log(myCar.getInfo()); // ? Output: 2020 Toyota Camry
console.log(myCar.make); // ? Output: Toyota
console.log(myCar.model); // ? Output: Camry
console.log(myCar.year); // ? Output: 2020

// ! CHANGE NOTES LATER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ? ---------------------> March-5 2026
// ! diff between type and interface

// // interface Person1 {
// //   name: string
// // }

// // interface Person1 {
// //   email: string
// // }

// // class User3 implements Person1 {
// //   name: string = 'kevin'
// //   email: string = 'kev@gmai.com'
// // }

// // const u = new User3()
// // console.log(u.name, u.email)

// // ? same above using type
// // type Person1 = {
// //   name: string
// // }

// // type Person1 = {
// //   email: string
// // }

// // class User3 implements Person1 {
// //   name: string = 'kevin'
// //   email: string = 'kev@gmai.com'
// // }

// // const u = new User3()
// // console.log(u.name, u.email)

// // ? Eg:2
// // type Status = 'success' | 'error'

// // class Response_API {
// //   status: Status = 'success'
// // }

// // const res = new Response_API()
// // console.log(res.status)

// // interface Status {'success' | 'error'}

// // class Response_API {
// //   status: Status = 'success'
// // }

// // const res = new Response_API()
// // console.log(res.status)

// // ? Eg:3

// // type ID = number

// // class employee {
// //   id: ID = 101
// // }
// // const e = new employee()
// // console.log(e.id)

// // interface ID = number

// // class employee {
// //   id: ID = 101
// // }
// // const e = new employee()
// // console.log(e.id)

// // ? Eg:4
// // ? Methods inside class

// // while creating method should not use keyword function
// // class Profile {
// //   // let place:string="UK" // error

// //   display(): void {
// //     // instance method
// //     let name: string = 'Jim'
// //     let age: number = 29
// //     console.log(name, age)
// //   }
// // }

// // const p = new Profile()
// // p.display()
// // Profile.display() // error

// // ? static method
// // class Profile {
// //   // let place:string="UK" // error

// //   static display(): void {
// //     // instance method
// //     let name: string = 'Jim'
// //     let age: number = 29
// //     console.log(name, age)
// //   }
// // }

// // const p = new Profile()
// // p.display() // error
// // Profile.display()

// // ? Method with params
// // class veg {
// //   carrot(name: string, color: string) {
// //     let fname = name
// //     let fcolor = color
// //     console.log(fname, fcolor)
// //   }
// // }

// // const v = new veg()
// // v.carrot('Carrot', 'Orange')

// // ? to use return
// // class veg {
// //   carrot(name: string, color: string): string[] {
// //     let fname = name
// //     let fcolor = color
// //     return [fname, fcolor]
// //   }
// // }

// // const v = new veg()
// // console.log(v.carrot('Carrot', 'Orange'))

// // ? to access class atributes with in method
// // class fruits {
// //   name: string = 'apple'
// //   color: string = 'red'
// //   isFruit: boolean = true
// //   price: undefined = undefined

// //   show(): void {
// //     console.log(this.name, this.color, this.isFruit, this.price)
// //   }
// // }

// // const f = new fruits()
// // f.show()

// // ?  static+class method
// // class fruits {
// //   static name1: string = 'berry'
// //   static price: number = 45.32

// //   show(): void {
// //     console.log(fruits.name1, fruits.price)
// //   }
// // }

// // const f = new fruits()
// // f.show()

// // ? M1 -->. Top access attributed from one method to another
// // class Proile {
// //   details(): [string, number] {
// //     let name: string = 'sid'
// //     let age: number = 1
// //     return [name, age]
// //   }

// //   display(): void {
// //     console.log(this.details())
// //   }
// // }
// // const p = new Proile()
// // p.display()

// // ? M2
// // class Profile {
// //   name!: string
// //   age!: number

// //   details(): void {
// //     this.name = 'sid'
// //     this.age = 1
// //   }

// //   display(): void {
// //     console.log(this.name, this.age)
// //   }
// // }

// // const p = new Profile()
// // p.details()
// // p.display()

// // ! -----------> constructor
// // constructors are secial methods which has the ability o execute itself through the process of instantation

// // create  constructors with constructor keyword

// // ?  Non-parameter constructor
// // class Myclass {
// //   constructor() {
// //     console.log('Iam constructor')
// //   }
// // }

// // const obj = new Myclass()

// // ? parameter constructor
// // class MyClass {
// //   constructor(name: string, mark: number) {
// //     console.log(name, mark)
// //   }
// // }

// // const obj = new MyClass('Mike', 97)

// // ? to define multiple constructors
// // class MyClass {
// //   constructor(name: string, mark: number) {
// //     console.log(name, mark)
// //   }
// //   constructor() {
// //     console.log('Iam 2nd contructor')
// //   }
// // }

// // const obj = new MyClass('Mike', 97) // error

// // ? using optional parameter
// // class bank {
// //   constructor(name?: string) {
// //     if (name) {
// //       console.log('Contructor with name', name)
// //     } else {
// //       console.log('constructor without name')
// //     }
// //   }
// // }

// // const SBI = new bank('sbi')

// //  ! ---> Life time access to the canvas
// //  ! -----> recordings have not got after week 4
// //  ! -----> Krithika --> cannot login to portal
// //  ! ---> Bhavyatha --> Pls try to contact her once
// // ? Passing dynamic data
// // class Student {
// //   fname: string
// //   fage: number

// //   constructor(name: string, age: number) {
// //     this.fname = name
// //     this.fage = age
// //   }

// //   display(): void {
// //     console.log(this.fname, this.fage)
// //   }
// // }

// // const obj = new Student('sid', 31)
// // obj.display()

// // ? can change the attribute value outside the class
// // class Person {
// //   id: number
// //   constructor(id: number) {
// //     this.id = id
// //   }

// //   show() {
// //     console.log(this.id)
// //   }
// // }

// // let p1 = new Person(1)
// // p1.show() // 1
// // p1.id = 34
// // p1.show() // 34

// // readonly
// // It just allows you t read the value
// // class Person {
// //   readonly id: number

// //   constructor(id: number) {
// //     this.id = id
// //   }

// //   show() {
// //     console.log(this.id)
// //   }
// // }

// // let p1 = new Person(1)
// // p1.show() // 1
// // p1.id = 34
// // p1.show() // error

// // ? last eg
// // type profile_type = {
// //   name: string
// //   age: string | number
// //   display(): void
// // }

// // class profile implements profile_type {
// //   name!: string
// //   age!: string | number

// //   setDeails(name: string, age: number) {
// //     this.name = name
// //     this.age = age
// //   }
// //   display(): void {
// //     console.log(this.name, this.age)
// //   }
// // }
// // const p = new profile()
// // p.setDeails('sidhu', 31)
// // p.display()

// // ! inheritance
// // Single
// // multi level
// // multiple
// // heirarichal
// // hybrid

// // ? single inheritance
// // ? single parent and single child
// // ? Eg:1
// // class animal {
// //   eat(): void {
// //     console.log('Animal eating')
// //   }
// // }

// // class Dog extends animal {
// //   bark(): void {
// //     console.log('Dog barks')
// //   }
// // }

// // const d = new Dog()
// // d.eat()
// // d.bark()

// // ? Eg:2
// // class Animal {
// //   static animalType: string = 'carnivore'
// //   name = 'Lion'
// // }

// // class Lion extends Animal {
// //   // console.log(Animal.animalType); // error
// //   // console.log(name); // error
// //   roar(): void {
// //     console.log(Animal.animalType)
// //   }
// // }

// // const l1 = new Lion()
// // l1.roar()
// // console.log(l1.name)

// // ? Eg:3
// // class Animal {
// //   name: string

// //   constructor(name: string) {
// //     this.name = name
// //   }
// // }

// // class Cow extends Animal {
// //   breed: string

// //   constructor(name: string, breed: string) {
// //     super(name)
// //     this.breed = breed
// //   }

// //   display() {
// //     console.log(this.breed)
// //     console.log(this.name)
// //   }
// // }

// // const d = new Cow('cow', 'Jercy')
// // d.display()

// // ! Multilevel inhertance
// // class Vehicle {
// //   brand: string

// //   constructor(brand: string) {
// //     this.brand = brand
// //   }

// //   showBrand(): void {
// //     console.log('Brand', this.brand)
// //   }
// // }
// // class Car extends Vehicle {
// //   model: string

// //   constructor(model: string, brand: string) {
// //     super(brand)
// //     this.model = model
// //   }

// //   showModel(): void {
// //     console.log('Model: ', this.model)
// //   }
// // }

// // class sportscar extends Car {
// //   speed: number

// //   constructor(speed: number, model: string, brand: string) {
// //     super(brand, model)
// //     this.speed = speed
// //   }

// //   showdetails(): void {
// //     this.showBrand()
// //     this.showModel()
// //     console.log('Top speed:', this.speed)
// //   }
// // }

// // const sc = new sportscar(300, 'M3', 'BMW')
// // sc.showdetails()

// // ?  Hybrid inheritance
// // 1 class will act as parent for all  child classes
// // class c1 {
// //   c1_method(): void {
// //     console.log('cl class')
// //   }
// // }

// // class c2 extends c1 {
// //   c2_method(): void {
// //     console.log('c2 class')
// //   }
// // }

// // class c3 extends c1 {
// //   c3_method(): void {
// //     console.log('c3 method')
// //   }
// // }

// // const c3_obj = new c3()
// // c3_obj.c1_method()
// // c3_obj.c3_method()

// // const c2_obj = new c2()
// // c2_obj.c1_method()
// // c2_obj.c2_method()

// //?  Multiple inheritance
// // single child and multiple parents

// // interface()
// // ? Eg:1
// // interface MusicPlayer {
// //   playMusic(): void
// // }

// // interface camera {
// //   takePhoto(): void
// // }

// // class phone implements camera, MusicPlayer {
// //   takePhoto(): void {
// //     console.log('taking photoes')
// //   }

// //   playMusic(): void {
// //     console.log('Playing fun music')
// //   }
// // }

// // const s = new phone()
// // s.playMusic()
// // s.takePhoto()

// // ? Hybrid
// // combination of 2 or  more type of inheritance is hybrid inheritance
// class product {
//   show(): void {
//     console.log('Product details')
//   }
// }

// class Electroics extends product {
//   brand(): void {
//     console.log('Electronics brtand  method')
//   }
// }

// class mobiles extends Electroics {
//   mobileFeatures(): void {
//     console.log('Mobile feature')
//   }
// }

// class clothing extends product {
//   size(): void {
//     console.log('cloth size method')
//   }
// }

// const m = new mobiles()
// m.brand()
// m.mobileFeatures()

// const c = new clothing()
// c.size()
// c.show()

// ! Polymorphism
// Polymorphism is a fundamental concept in object-oriented programming that allows objects of different classes to be treated as objects of a common superclass.
// It enables a single interface to represent different underlying data types, allowing for flexibility and extensibility in code design.

// If the same method is defined in multiple classes, the method that gets called will depend on the type of the object that is being used to call the method. This is known as method overriding, and it allows for polymorphism in TypeScript.

// ? Example of polymorphism using method overriding:
class Product {
    show(): void {
        console.log('Product details')
    }
}

class Electronics {
    show(): void {
        console.log('Electronics details')
    }
}

class Sports extends Product {
    show(): void {
        console.log('Sports details')
    }
}

let p = new Product();
let e = new Electronics();
let s = new Sports();
p.show(); // ? Output: Product details
e.show(); // ? Output: Electronics details
s.show(); // ? Output: Sports details
// Same method name but different implementation based on the class, this is polymorphism through method overriding.

let items: any = [p, e, s];  
items.forEach((item: any) => {
    item.show();
});
// Another way to write the above code using for...of loop:
for (let item of items) {
    item.show();
}

// ? Output:
// Product details
// Electronics details
// Sports details
// This demonstrates polymorphism because we are treating all items as type product, but the actual method that gets called is determined by the runtime type of the object (Product, Electronics, or Sports).

// ? Method overloading:
// Method overloading is a feature that allows a class to have multiple methods with the same name but different parameters. However, TypeScript does not support method overloading in the traditional sense like some other programming languages do. Instead, you can achieve similar functionality using optional parameters or by using union types for the parameters.

class Calculator {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
        return a + b;
    }
}

const calc = new Calculator();
console.log(calc.add(5, 10)); // ? Output: 15
console.log(calc.add("Hello, ", "world!")); // ? Output: Hello, world!
// In this example, we have defined two overloads for the add method: one that takes two numbers and returns a number, and another that takes two strings and returns a string. The actual implementation of the add method uses the any type for the parameters, which allows it to handle both cases.

class C1 {
    c2(): void {
        console.log('Hello there')
    }
    c2(name: string): void {
        console.log('Hello there', name)
    }
}

const c = new C1()
c.c2() // error
c.c2('Sid') // error
// This will cause a compile-time error because TypeScript does not support method overloading in the traditional sense, and the second definition of the c2 method will overwrite the first one.

// To achieve similar functionality, you can use optional parameters or union types:
class C1 {
    c2(name?: string): void {
        if (name) {
            console.log('Hello there', name)
        } else {
            console.log('Hello there')
        }
    }
}

const c = new C1()
c.c2() // Output: Hello there
c.c2('Sid') // Output: Hello there Sid
// In this example, we have defined a single c2 method with an optional parameter name. The method checks if the name parameter is provided and behaves accordingly, allowing us to achieve similar functionality to method overloading.

// Another way to achieve method overloading using union types:
class C1 {
    c2(name: string): void;
    c2(name: number): void;
    c2(name: any): void {
        if (typeof name === 'string') {
            console.log('Hello there', name)
        } else if (typeof name === 'number') {
            console.log('Hello there', name)
        }
    }
}

const c = new C1()
c.c2('Sid') // Output: Hello there Sid
c.c2(123) // Output: Hello there 123
// In this example, we have defined two overloads for the c2 method: one that takes a string and another that takes a number. The actual implementation of the c2 method uses the any type for the parameter, and it checks the type of the parameter at runtime to determine how to handle it.

// Another way to achieve method overloading using optional parameters and union types: 

class c1 {
    c2(name: string): void;
    c2(name: string, place: string): void

    c2(name: string, place?: string): void {
        if (place) {
            console.log('Hello there', name, 'from', place)
        } else {
            console.log('Hello there', name)
        }
    }  
}

const c = new c1()
c.c2('Sid') // Output: Hello there Sid
c.c2('Sid', 'UK') // Output: Hello there Sid from UK
// In this example, we have defined two overloads for the c2 method: one that takes a single string parameter and another that takes two string parameters. The actual implementation of the c2 method uses an optional parameter place, which allows it to handle both cases. The method checks if the place parameter is provided and behaves accordingly, allowing us to achieve similar functionality to method overloading.

