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
function add(a, b) {
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
var user1 = { name: "Alice" };
console.log(user1.name); // ? Output in JS: Alice
console.log(user1.age); // ? Output in JS: undefined
var user = { name: "Alice" };
console.log(user.name); // ? Output: Alice
console.log(user.age); // ? Output: undefined, but TypeScript knows that age is optional and can be undefined
// ? -------------------------------------------------------------------------------------------------------
// ? TypeScript variables
// ? In TypeScript, you can declare variables using the let and const keywords, just like in JavaScript.
// ? However, TypeScript allows you to specify the type of the variable, which can help catch errors and
// ? improve code readability.
var a = 3;
console.log(a); // ? Output: 3
var b = "Hello, TypeScript!";
var c = true;
var name1 = "Alice";
console.log(name1); // ? Output: Alice
// ? Union types allow you to specify that a variable can hold values of multiple types. For example:
var value;
value = 67;
console.log(value); // ? Output: 67
value = "Hello";
console.log(value); // ? Output: Hello
value = true; // This will cause a compile-time error because 'true' is not a number or a string
console.log(value); // ? Output: true (if you ignore the TypeScript error and run the compiled JavaScript)
var person = { name: "Alice", age: 30 };
console.log(person); // ? Output: { name: "Alice", age: 30 }
var userId = 101;
console.log(userId); // ? Output: 101
// This can be useful for improving code readability and maintainability, as it allows you to give meaningful
// names to types and can help prevent errors by ensuring that variables of a certain type are used 
// consistently throughout your code.
var u1 = {
    name: "Bob",
    age: 35
};
console.log(u1); // ? Output: { name: "Bob", age: 35 }
var u2 = {
    name: "Charlie",
    age: 28
};
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
var val = "Hello";
val = 42; // No error, val can hold any type
val = "Hello";
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
var val2 = 67;
var len = val2.length;
// This will cause a compile-time error because val2 is of type any and does not have a length property
console.log(len); // ? Output: undefined (if you ignore the TypeScript error and run the compiled JavaScript)
// ? Example with as:
var val3 = 67;
var len2 = val3.toString().length; // ? Output: 2
// This will not cause a compile-time error because we are asserting that val3.toString() is of type string,
// which does have a length property.
// To get the error:
// ? let len2 = val3.length; // This will cause a compile-time error because val3 is not a string
console.log(len2); // ? Output: 2
// ? typeof
var x = 10;
if (typeof x === "number") {
    console.log("x is a number");
}
function getValue1(obj, key) {
    return obj[key];
}
var user3 = { name: "Charlie", age: 40 };
console.log(getValue1(user3, "name")); // ? Output: Charlie
console.log(getValue1(user3, "age")); // ? Output: 40
console.log(getValue1(user3, "email"));
// This will not cause a compile-time error because the key parameter is of type string, which can be 
// any string, including "email".
// However, it will return undefined at runtime because "email" is not a key of the user3 object.
// ? With keyof:
function getValue2(obj, key) {
    return obj[key];
}
var user4 = { name: "Dave", age: 25 };
console.log(getValue2(user4, "name")); // ? Output: Dave
console.log(getValue2(user4, "age")); // ? Output: 25
console.log(getValue2(user4, "email"));
// This will cause a compile-time error because "email" is not a key of the user4 object
// ? instanceof operator:
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    return Person1;
}());
var person1 = new Person1("Alice");
console.log(person1 instanceof Person1); // ? Output: true
console.log(person1 instanceof Object); // ? Output: true
console.log(person1 instanceof Array); // ? Output: false
// console.log(person2 instanceof Person1); // ? Output: false 
// (gives error in JS because person2 is not defined)
var x1 = new Number(5);
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
var value2 = "Hello";
console.log(value2.length); // ? Output: 5
console.log(value2.toFixed()); // ? Output: TypeError: value2.toFixed is not a function (error in JavaScript)
var value3 = "Hello";
console.log(value3.length); // This will cause a compile-time error because value3 is of type unknown and does not have a length property
console.log(value3.toFixed()); // This will also cause a compile-time error because value3 is of type unknown and does not have a toFixed method.
// To use value3, you would need to perform type checking or type assertions to ensure that it is of the expected type before accessing its properties or methods. For example:
if (typeof value3 === "string") {
    console.log(value3.length); // ? Output: 5
    console.log(value3.toFixed()); // This will still cause a runtime error because toFixed is not a method of string, but it will not cause a compile-time error because we have checked that value3 is a string.
}
var value4 = 234;
if (typeof value4 === "string") {
    console.log(value4.length); // This will not be executed because value4 is not a string
}
// ? void:
// The void type is used to represent the absence of a value, typically for functions that do not return anything. For example:
function logMessage(message) {
    console.log(message);
}
logMessage("Hello, TypeScript!"); // ? Output: Hello, TypeScript!
// The void type indicates that the logMessage function does not return any value. If you try to return a value from a void function, you will get a compile-time error. For example:
function logMessageWithReturn(message) {
    console.log(message);
    return "This will cause a compile-time error"; // This will cause a compile-time error because a void function cannot return a value
}
function greet() {
    return hello; // This will also cause a compile-time error because a void function cannot return a value
}
greet(); // This will not cause a compile-time error, but it will return undefined at runtime because the function does not return anything.
function greet() {
    return;
} // This is valid because it does not return any value, it simply exits the function.
console.log(greet()); // ? Output: undefined (because the greet function does not return anything)
// ? never:
// The never type represents a value that never occurs. It is typically used for functions that always throw an error or have an infinite loop. For example:
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        // This function will never return because it has an infinite loop
    }
}
// The never type indicates that the throwError function will never return a value because it always throws an error, and the infiniteLoop function will never return because it has an infinite loop. If you try to return a value from a never function, you will get a compile-time error. For example:
function throwErrorWithReturn(message) {
    throw new Error(message);
    return "This will cause a compile-time error"; // This will cause a compile-time error because a never function cannot return a value
}
function looping() {
    while (true) {
        console.log("Running..."); // This will not cause a compile-time error, but it will never stop running because it has an infinite loop.
    }
}
function handleStatus(s) {
    switch (s) {
        case "success": return "Operation was successful!";
        case "error": return "An error occurred.";
        case "loading": return "Loading...";
        default: return assertNever(s); // This will cause a compile-time error if there is an unhandled case
    }
}
function assertNever(x) {
    throw new Error("Unexpected value: " + x);
}
// ? Tuple data type:
// A tuple is a fixed-length array with specified types for each element. 
// It is a mutable data structure that can hold a fixed number of values of different types.
// For example:
var tuple = ["Alice", 30];
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
var tuple2 = ["Alice", 30]; // This will cause a compile-time error because the types are in the wrong order
// Making the tuple immutable:
var tuple3 = ["Alice", 30];
tuple3[0] = "Bob"; // This will cause a compile-time error because the tuple is readonly and cannot be modified
console.log(tuple3); // ? Output: ["Alice", 30]
// To not show the error:
var tuple4 = ["Alice"];
var tuple5 = ["Bob", 30];
console.log(tuple4); // ? Output: ["Alice"]
console.log(tuple5); // ? Output: ["Bob", 30]
// To delete element:
var user5 = ["Charlie", 40];
user5.pop(); // This will remove the second element (age) from the tuple
console.log(user5); // ? Output: ["Charlie"] (the age has been removed)
// We should not use pop() on tuples because it goes against the fixed-length nature of tuples and can lead to unexpected behavior. If you need a data structure that can hold a variable number of elements, you should use an array instead.
// To remove the first element:
var user6 = ["Dave", 25];
user6.shift(); // This will remove the first element (name) from the tuple
console.log(user6); // ? Output: [25] (the name has been removed)
// Again, we should not use shift() on tuples for the same reasons as pop(). If you need a data structure that can hold a variable number of elements, you should use an array instead.
// To add element at the beginning:
var user7 = ["Eve", 22];
user7.unshift("Alice"); // This will add "Alice" at the beginning of the tuple
console.log(user7); // ? Output: ["Alice", "Eve", 22] (this goes against the fixed-length nature of tuples and can lead to unexpected behavior)
// We should not use unshift() on tuples for the same reasons as pop() and shift(). If you need a data structure that can hold a variable number of elements, you should use an array instead.
// Tuple is designed to be a fixed structure with fixed positions
// Using array methods will break the intended use of tuples and can lead to bugs and unexpected behavior. It is best to use tuples for their intended purpose of representing a fixed structure with known types at specific positions, and to use arrays when you need a collection of values that can grow or shrink in size.
// enum data type:
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
function checkRole(role) {
    if (role === Role.Admin) {
        console.log("You have admin privileges.");
    }
    else if (role === Role.User) {
        console.log("You are a regular user.");
    }
    else if (role === Role.Guest) {
        console.log("You are a guest.");
    }
    else {
        console.log("Unknown role.");
    }
}
checkRole(Role.Admin); // ? Output: You have admin privileges.
checkRole(Role.User); // ? Output: You are a regular user.
checkRole(Role.Guest); // ? Output: You are a guest.
