
// Activity 1

// Task 1


const promiseOne = new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve("Message Is Resolved")    
    },2000)
}).then((result) => {
    console.log(result);
})


// Task 2

const promisetwo = new Promise(function (resolve,reject) {
    setTimeout(function () {
       reject("Message is not Resolved")
    },2000)
}).catch((result) =>{
    console.log(result);
})


// Activity 2

// Task 3

