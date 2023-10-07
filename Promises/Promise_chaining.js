let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Resolved after 2 seconds")
        resolve(56)
    }, 2000);
})

p1.then((value)=>{
    console.log(value)
    let p2 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("promise 2")
        }, 2000);
    })
    return p2
}).then((value)=>{
    console.log("We are done")
}).then((value)=>{
    console.log("Now we are pakka done")
})


const loadScript = (src)=>{
    return new Promise(resolve =>{
    let script = document.createElement("Script")
    script.type = "text/javascript"
    script.src = "https://www.youtube.com/iframe_api"
    document.body.appendChild(script)
    script.onload = ()=>{
        resolve(1)

    }
    script.onerror = ()=>{reject(0)}
})
} 

// Video to be seen from 12 minutes onwards