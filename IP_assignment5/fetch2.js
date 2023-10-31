// create a promise

const { rejects } = require("assert");
const { resolve } = require("path");

var dummyPromise = new Promise((resolve,reject)=>{
    const success = true;
    if(success)
    {resolve('Promises Accepeted')}
    else
    {reject('Promise Rejected')}
});

// .then and .catch functions of promises with result as parameter.
dummyPromise.then(result=>
{
console.log(result);
}).catch(error=>{
    console.log(error)
});

function fetchData()
{
    // create new promise and fetch data from the API with .then and take response as parameter.
    return new Promise((resolve,reject)=>
    {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=b4e4303afb773dc8cf9dd9e2889b6757&language=en-US&page=1')
        .then(response=>{
            if(!response.ok)
            {
                throw new Error('Error')
            }
            // returning response.json
            return response.json();
        })
        // .then with data as the parameter.
        .then(data=>{
            console.log(data)
        })
        .catch(error=>{
            console.log(error)
        })
    })
}

// calling fetch data function with .then and .catch and data as the parameter.
fetchData()
    .then(data => {
      console.log('Fetched data:', data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });