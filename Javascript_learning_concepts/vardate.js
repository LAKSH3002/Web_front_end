var d = new Date();
console.log(d);

var pastd = new Date(1545,10,4,10,30,15);
console.log(pastd);

var bday = new Date(2003,3,4,11,15,25);

// displays the month
console.log(bday.getMonth());
// displays the year
console.log(bday.getFullYear());
// displays the date
console.log(bday.getDate());
// displays the day
console.log(bday.getDay());
// displays the hours
console.log(bday.getHours());
// displays the time
console.log(bday.getTime());