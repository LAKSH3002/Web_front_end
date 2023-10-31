// Arrow function with no parameters
const hello = () =>
{
    console.log("Hey guys this is an arrow function with no parameters")
}
hello()

// Arrow function with a single parameter
const arrow2 = (x) =>
{
console.log(x)
}
arrow2(24)

// Arrow function with multiple parameters
const arrow3 = (x,y)=>{
    console.log(x+y+x+y)

}
arrow3(22,22)

// Arrow Function as an Expression
let age = 15
const allowed = (age>18)
? ()=> console.log("You can drive and apply for license.")
: ()=> console.log("You cannot get a license");

allowed()

// Multiline Arrow Functions
let sum = (a, b) => 
{
    let result = a + b;
    return result; 
}
let result1 = sum(5,7);
console.log(result1); // 12