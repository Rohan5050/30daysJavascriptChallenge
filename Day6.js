// Activity 1

// Task 1

const arr = [1,2,3,4,5];
console.log(arr);


// Task 2

console.log(arr[0]);
console.log(arr[4]);


// Activity 2

// Task 3 , 4 , 5 ,6

arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(1);
console.log(arr);


// Task 7

const myarr=[23,21,32,26,43,25,52];
let result1=myarr.map(item => item + 2);
console.log(result1);


// Task 8

let result2=myarr.filter(item => item%2==0);
console.log(result2);


// Task 9

let result3=myarr.reduce(function (add,item) {
    return add+item;
})

console.log(result3);


// Activity 4

// Task 10

let n=myarr.length;

function iteratemyarr (myarr,n)  {
    for(let i=0;i<=n;i++) {
        let result=myarr[i];
        console.log(result);

    }
    
}

iteratemyarr(myarr,n);


// Task 11

const mynum=[2,3,4,5,6,7,8];

mynum.forEach((element) => console.log(element));


// Activity 5

// Task 12

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
    }
  }


  // Task 13
  console.log("\n");
  console.log(matix[1][2]);
  console.log(matrix[0][2]);
