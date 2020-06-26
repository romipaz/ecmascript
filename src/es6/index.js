// Defaul values before ECMASCript 6

function newFunction (name, age, country) {
    var name = name || 'Megan';
    var age = age || 20;
    var country = country || 'USA';

    console.log(name, age, country);
}

// Default values after ECMAScript 6

function newFunction2 (name = 'Megan', age = 20, country = 'United States') {
    console.log(name, age, country);
}

newFunction2() // Outputs default values
newFunction2('Megan E.', 20, 'USA');

// Template literals before ECMAScript 6

let hello = 'Hello';
let world = 'World';

let greeting = hello + ' ' + world;
console.log(greeting);

// Template literals after ECMAScript 6

let greeting2 = `${hello} ${world}`;
console.log(greeting2);

//Multiline in es6
let lorem = `Uncle Sam
WANTS YOU`;

console.log(lorem);

//Destructuring in es6
let person = {
    "name": "Mads",
    "age": 32,
    "country": "DK"
}

console.log(person.name, person.age);

let { name, age, country} = person; //same as upper console.log 
console.log(name);

//Spread Operator in es6
let team1 = ["Sara", "Toby", "Nina"];
let team2 = ["Juan", "Mikkel", "Agos"];

let education = ["Ale", ...team1, ...team2];//Call for elements within an array

console.log(education);

//Scoping

var hola = "hola" //global scope

{
    var global = "Global Var";
}

{
    let globalLet = "Global let"; //block scope
    console.log(globalLet);
}

console.log(global);

const a = "b";
a = "a";
console.log(a);