const obj = {
    name: 'Makoto',
    age: 18,
    country: 'JP'
};

//extracts element from an object
let { name, ...all1 } = obj;
console.log(name, all1);
let { country,  ...all2 } = obj;
console.log(all2);
//shows the extracted element and the object with the rest of elements.


//uses of spread for nesting objects
const obj3 = {
    name: 'Akira',
    age: 22,
}

const obj4 = {
    ...obj3,
    country: 'JP'
}

console.log(obj4);


//when the promise is resolved, execute something

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('ENDED'))



//grouping regex and how to match them

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
constmatch = regexData.exec('2018-04-20');
constyear = match[1];
constmonth = match[2];
constday = match[3];
console.log(year, month, day);
console.log(match);