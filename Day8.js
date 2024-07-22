// Activity 1

// Task 1

const name="Ron";
let age=21;

let str =`${name} & ${age}`;

console.log(str);


// Task 2

let multiline = `This is a 
  multiline str`;

console.log(multiline);


// Activity 2

// Task 3

const arr = [1,3,5,6,7,8,9,12];

const [first,second] = arr;

console.log(first,second);

// Task 4


let book = {
    title:"Harry Potter The Deadly Shawdows",
    author:"Jk Rowling",
    year:2007,
}

const {title,author} = book;

console.log(title,author);


// Activity 3

// Task 5

 // using spread operation
const arr1 = [1,2,3,4,5];
const arr2 = [...arr1,6,7,8,9];

console.log(arr2);

// Task 6

// using rest operator

const sum = (...number) => {
    return number.reduce((acc,current) => acc + current , 0);

}

console.log(sum(1,2,3,4,5));


// Activity 4

// Task 7

const product = (first,second=5) => {
    return first*second;
}

console.log(product(1,5));
console.log(product(5));

// Activity 5

// Task 8

let p_name="Ron",
    p_age=21,
    city ="New Delhi";

const person = {
    p_name,
    p_age,
    city,

    greetperson () {
        return `Hi , My name is ${name}`;
    },

    getpersonDetails () {
        return `Name:${name},Age:${age} & City:${city}`;
    }
};

console.log(person.greetperson());
console.log(person.getpersonDetails());

 // Task 9

 let prop_name="name",
    prop_age="age",
    prop_city ="location";

const new_person = {
    [prop_name]:"random",
    [prop_age]:undefined,
    [city]:"Heaven",
};

console.log(new_person);

