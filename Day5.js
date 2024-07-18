// Activity 1

// Task 1

let num;

function findEvenOrOdd (num) {
    if(num%2===0) {
        console.log(`${num} is Even`);
    }

    else {
        console.log(`${num} is Odd`);

    }
}

findEvenOrOdd(25);
findEvenOrOdd(28);


 // Task 2

 function squarenum(num) {
    let result = num*num;
    console.log(result);
 }

 squarenum(5);
 squarenum(12);


 // Activity 2

 // Task 1
 let a,b;

 function maxnum (a,b) {
    if(a>b) {
        console.log(`${a} is greater than b`);
    }

    else {
        console.log(`${b} is greater than a`);
    }
 }

 maxnum(55,22);
 maxnum(31,64);


 // Task 3


 function concatenatestrings (x,y) {
    let result = x + y;
    console.log(result);
 }

 concatenatestrings("Hello"," Javascript");

 // Activity 3

 // Task 5

 const sumofnum = (a,b) => {
    let result = a + b;
    console.log(result);

 }

sumofnum(32,53);

 // Task 6 

 const checkstr = (str,char) => str.includes(char);
    let str = "RohanVohra";
    let char = "n";
    let result = checkstr(str,char);

    console.log(`Does str "${str}" contains "${char}" ? ${result}`);


 // Activity 4

 // Task 7

 let product = (x,y=4) => x*y;

 let result1 = product(5);

 console.log(result1);


 // Task 8

 let person = (name,age=21) => {
       console.log(`Hello Mr "${name}" your age is ${age}`);
 }

 person("Ron");


 // Activity 5 



 // Task 9 

 let repeatfunc = (func,num) => {
    for(let i=0;i<num;i++) {
        func();
    }


    
 }

 const func = () => console.log("hello");

 repeatfunc(func,5);


 // Task 10

 function highorder (func1,func2,val) {
    let result1=func1(val);
    let result2=func2(result1);

    return result2;
 }


 let firstfunc = (val) => (
    val+5
 )

 let Secondfunc = (result) => (
    result+2
 )

 let final_result = highorder(firstfunc,Secondfunc,5);

 console.log(final_result);


 