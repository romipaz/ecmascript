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


// Parameters within objects
// Before es6
let obj = { name: name, age: age }

// After es6
let obj2 = { name, age}

console.log(obj)
console.log(obj2)

// Arrow Functions (new add-on)
const names = [
  { name: 'Mich', age: 35 },
  { name: 'Yesica', age: 38}
]

//Before
let items = names.map( function(item) {
  console.log(item.name + ' - ' + item.age)
})

//ES6
let items2 = names.map( item => console.log(`${item.name} ~ ${item.age}`) )

console.log(items)
console.log(items2)

// Promises (new add-on)
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey !!!')
    } else {
      reject('Upsss!!! :(')
    }
  })
}

helloPromise()
  .then( response => console.log(response) )
  .then( ()=> console.log('Hola'))
  .catch( error => console.error(error) )


// Classes
class Calculator{
    constructor() {
      this.valueA = 0
      this.valueB = 0
    }
    sum(valueA, valueB) {
      return valueA + valueB
    }
  }
  
const calc = new Calculator()
  
  console.log(calc.sum(4,5))
  
  
// Modules 
  import { hello } from'./module'
  
  hello()
  
  
// Generators
  function* helloworld () {
    if (true) {
      yield'Hello'
    }
    if (true) {
      yield'World'
    }
  }
  
  const generatorHello = helloworld()
  console.log(generatorHello.next().value)
  console.log(generatorHello.next().value)
  console.log(generatorHello.next().value)