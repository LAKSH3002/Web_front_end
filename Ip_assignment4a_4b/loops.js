/* Following are the types of for loops
1 - for loop
2 - for of
3 - for in
*/

// 1 - for loop
let i;
const cars = ["saab","volvo","fortuner","mercedes","Baleno","Suzuki"];
for(i=0;i<cars.length;i++)
{
 console.log(cars[i]);   
}
console.log();

// 2 - for in loop - not to use in case index order is important
let text = "";
for(let x in cars){
    text += cars[x]+" ";
    console.log(text);
}
console.log();

// 3 - for of loop
let n = [10,33,41,46,51];

for (const j of n) {
    console.log(j);
}


