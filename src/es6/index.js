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

newFunction2() // Output default values
newFunction2('Megan E.', 20, 'USA');

// Template literals before ECMAScript 6

let hello = 'Hello';
let world = 'World';

let greeting = hello + ' ' + world;
console.log(greeting);

// Template literals after ECMAScript 6

let greeting2 = `${hello} ${world}`;
console.log(greeting2);
