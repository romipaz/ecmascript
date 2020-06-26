//--------------method flat---------------/
//returns an array with subarray flattened, 
//take the deepness as arguments
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))

//-------------flatMap---------------------------/
//map element, then pass a func and flat it

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

//----------------trim---------------------------/
let hello = '         hello world';
console.log(hello);
console.log(hello.trimStart()); // start

let hello = 'hello world          ';
console.log(hello);
console.log(hello.trimEnd()); // final

//-------------optional catch biding-------------/

try {
    
} catch/*(error) no need to add it*/ {
    error
}

//-------------fromEntries----------------------/
// array to object
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))

//-------------symbol object--------------------/
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);