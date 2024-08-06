 // Activity 1

 // Task 1
/*
function outer () {
    let digit = 5;
    function inner () {
        console.log(digit);
    }
    return innerfunction;
}

var a = outer();
console.log(a);

a();*/




// Task 2

function counter () {
    let count = 0;

    return {
        increment: function () {
            count++;
        },

        getvalue: function () {
            return count;
        }
    }
}

const pcounter = counter();

pcounter.increment();
console.log(pcounter.getvalue());

pcounter.increment();
console.log(pcounter.getvalue());

// Activity 2

// Task 3

function i () {
    let lastId=555;
    return function () {
        lastId++;
        return lastId;
        
    }
    
}

const uniqueidgenerator = i();

console.log(uniqueidgenerator());
console.log(uniqueidgenerator());
console.log(uniqueidgenerator());



// Task 4

function greetusername(username) {
    let inputusername = username;
    
    if(typeof username !== 'string') {
        console.log("Please Enter a Valid Username");
    }

    return function () {
        console.log(`Hello ${inputusername} great to see you !`);
    }

}

const greetuser = greetusername('Ron');

console.log(greetuser());


// Activity 3

// Task 5

 const arr =  ()=> {

    const arroffunc = [];

    for(let i=0;i<5;i++) {
        arroffunc.push(() => {
            console.log(i);

        })
    }

    return arroffunc

 }

 const functions  = arr();
 functions.forEach(func => func());

// Activity 4
 // Task 6


 let Modulelist = ()=>
 {  
    const items = []

    const addItem = (item)=>{
        items.push(item)
    }

    const removeItem = (item)=>{
        const index = items.indexOf(item)
        if(index > -1){
            items.splice(index,1)
        }
    }

    const listItems = () =>{
        console.log(items)
    }


    return {addItem,removeItem,listItems}

 }

const Modulefunctions = Modulelist();

Modulefunctions.addItem("item1");
Modulefunctions.addItem("item2");
Modulefunctions.removeItem("item1");
Modulefunctions.listItems();



// Activity 5

// Task 7
const memoize = (fn) => {
    const cache = {}

    return (n) => {
        if (n in cache) {
            console.log('Fetching from cache')
            return cache[n]
        } else {
            console.log('Calculating result')
            const result = fn(n)
            cache[n] = result
            return result
        }
    }
}



// Task 8


const factorial = (n) => {
    if (n === 0) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

const memoizedFactorial = memoize(factorial)

console.log(memoizedFactorial(5))
console.log(memoizedFactorial(5))
console.log(memoizedFactorial(4))





