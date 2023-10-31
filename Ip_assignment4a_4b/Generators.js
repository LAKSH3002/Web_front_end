// Generator function to generate even numbers
function* generateEvenNumbers() 
{
    let number = 0;
    while (true) {
    yield number;
    number += 2;
    }
}
   // Create a generator instance
   const evenGenerator = generateEvenNumbers();
   // Generate and print the first 5 even numbers using inbuilt functions
   const firstFiveEvenNumbers = [...evenGenerator].slice(0, 5);
   console.log(firstFiveEvenNumbers);