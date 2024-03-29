// Fetch through promise to be typed down here

// Creation of a promise. 
var dummyPromise = new Promise((resolve, reject) => 
{
    const success = true; // or false
    if (success) {
      resolve("Promise was fulfilled with dummy data!");
    } else {
      reject("Promise was rejected with dummy error!");
    }
});
  
  
dummyPromise.then(result => {
  console.log(result);
  }).catch(error => {
  console.error(error);
  });

// Using Promises
// fetching data from API
function fetchData() 
{
    return new Promise((resolve, reject) => 
    {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=b4e4303afb773dc8cf9dd9e2889b6757&language=en-US&page=1')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  // Calling the fetchData function
  fetchData()
    .then(data => {
      console.log('Fetched data:', data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
