// Syntax of promise is given below
let promise = new Promise(function(resolve,reject){
    resolve(56)
    // The promise can either be resolved or rejected.
    // Two properties of promise - state and result.
})

// This code was to show output on basis to timeout set in code.
console.log('hello one');

setTimeout(function(){
    console.log("Hello two in 2 seconds")
},2000)

console.log("My name is "+"hello 3")
console.log(promise)

// fetch google.com home page
// fetch data from data api
// fetch pictures from the server
// print downloading
// promise is used for parallel execution


// syntax of promise is as follows:
// let promise = new promise(function(resolve,reject){
// })