// Activity 1

// Task 1

for(let i=1;i<=10;i++) {
    console.log(i);
}


// Task 2

for(let i=1;i<=10;i++) {
    console.log("5 *",i +" = "+5*i);
}


// Activity 2

// Task 3

 let n=10;
 let sum=0;

 while (n>0) {
    sum+=n;
    n--;
 }

 console.log(sum);


 // Task 4
/*
 let j=10;

 while(j<=10 && j>0) {
    console.log(j);
    j--;
 }
    */

// Activity 3

 // Task 5
 /*

 let k=1;

 do {
    console.log(k);
    k++;
 } while(k>0 && k<=5);
*/

 // Task 6


function factorial(x) {
    if(x==0 || x==1) {
        return 1;
    }

    var result = x;
    do {
        result=result * (x-1);
        x=x-1;
    } while(x>1);

    return result;

}

console.log(factorial(5));

// Activity 4

// Task 7

let pattern="";

for(let i=1;i<=5;i++) {
    for(let j=1;j<=i;j++) {
        pattern+="*";
    }
    pattern+="\n";
}

console.log(pattern);

 // Activity 5

  // Task 8

 for(let i=1;i<=10;i++) {
    if(i===5) {
        continue;
    }
    console.log(i);
}

// Task 9

for(let i=1;i<=10;i++) {
    if(i===7) {
        break; 
    }
    console.log(i);
}
