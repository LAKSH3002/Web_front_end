let p1 = new Promise(function(resolve,reject)
{
    console.log("Promise is pending")
    // Promise is either fulfilled or rejected.
    setTimeout(()=>{
        // console.log("I am a promise and i am fulfilled")
        resolve(true)
        // reject(new Error("I am an error"))
    },5000)
});

let p2 = new Promise(function(resolve,reject)
{
    console.log("Promise is pending")
    // Promise is either fulfilled or rejected.
    setTimeout(()=>{
       //  console.log("I am a promise and i am rejected")
        // resolve(true)
        reject(new Error("I am an error"))
    },5000)
});

// the following methods notifies the user about the value and error that will come up.
p1.then((value)=>{
    console.log(value)
})

// this is to catch the error which will be coming in console.
p2.catch((error)=>{
    console.log("Some error occured in p2")
})