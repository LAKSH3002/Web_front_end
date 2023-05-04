console.log(this);

// object declartion

// METHOD 1 of creating object
var mycar = new Object();
mycar.maximum = 135;
mycar.name = 'audi r8';
// mycar.drive = function(){}
// printing statements
console.log(mycar.maximum);


// this refers to a particular object
// METHOD 2 of creating an object
 var mycar2 = {

    max:70,
    driver:"laksh doshi",
    drive: function(speed,time){
        console.log(speed+time);    
    },
    test: function(){
        console.log(this);
    },
    logdriver:function()
    {
        console.log(this.driver);
    }
};

mycar2.test();
mycar2.logdriver();
console.log(mycar2.max);
mycar2.drive(10,20);
