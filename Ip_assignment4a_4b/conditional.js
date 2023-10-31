// Conditional statements
// if else block
let a = 10;
let b = 20;
let c = 30;
let largest = 0 ;
if (a>b && b>c) 
{
    largest = a;
    console.log("The largest number among the three are: a");
    console.log(largest);
} 
else if (b>a && b>c) 
{
    largest = b;
    console.log("The largest number among the three are: b");
    console.log(b);
}
else 
{
    largest = c;
    console.log("The largest number among the three are: c");
    console.log(largest);
}

// Switch Case statements
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log();
console.log("The output of switch case statement is:");
console.log(day);
