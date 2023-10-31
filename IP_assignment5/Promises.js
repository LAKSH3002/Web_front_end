let myPromise = new Promise(function(myResolve, myReject) 
{
    // "Producing Code" (May take some time)
      myResolve(); // when successful
      myReject();  // when error
});
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then
(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
);


let promise2 = new Promise(function (resolve, reject) {
	resolve('Geeks For Geeks');
})

promise2
	.then(function (successMessage) {
		//success handler function is invoked 
		console.log(successMessage);
	}, function (errorMessage) {
		console.log(errorMessage);
	});


let promise = new Promise(function (resolve, reject) {
	reject('Promise Rejected')
})
// Promises .catch method
promise
	.then(function (successMessage) {
		console.log(successMessage);
	})
	.catch(function (errorMessage) {
		//error handler function is invoked 
		console.log(errorMessage);
	});
