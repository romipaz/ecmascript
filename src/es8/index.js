//Object entries returns the values of the array.

const data ={
    front:'Alej',
    back: 'Rel'
};

//Transform object into an array
const entries =Object.entries(data);
console.log(entries);
//length to check the quantity of elements within an array
console.log(entries.length);



//Objetc Values: return the object values as array elements. 
const data= {
    front:'Alej',
    back: 'Rel'
}
const values = Object.values(data);
console.log(values);

// Padding: adds characters or empty space into a string.
conststring ='hello';
console.log(string.padStart(7,'hi')) // adds 'hi' at the start
console.log(string.padEnd(12,'hi')) // adds 'hi' at the end


//Trailing comas,to keep assigning elements into the object
const data= {
    front:'Alej', 
    back: 'Rel'
}
