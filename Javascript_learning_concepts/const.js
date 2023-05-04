// constructor program

var car = function(maxspeed,driver){

    this.maxspeed = maxspeed;
    this.driver = driver;
    this.drive = function(speed,time)
    {
        console.log(speed+time);
    };
    this.logdriver = function()
    {
        console.log("driver name is "+ this.driver);
    };
}

var mycar = new car(70,'Laksh');
var mycar2 = new car(7,'Lak');
var mycar3 = new car(0,"ksh");
var mycar4 = new car(07,'sh');

mycar.drive(30,5);
mycar3.logdriver();