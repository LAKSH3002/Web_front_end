const endDate = "5 September 2023 6:00 PM";

document.getElementById("endDate").innerText = endDate;
const inputs = document.querySelectorAll("input")
// query selector all - returns all the values that matches the css selector.

function clock()
{
    const end = new Date(endDate)
    const now = new Date()
    console.log(end);
    const diff = (end-now)/1000;
    console.log(diff);

    if(diff<0)
    {
        return;
    }
    // for days counting:
    inputs[0].value = (Math.floor(diff/3600/24));
    // for hours counting:
    inputs[1].value = (Math.floor(diff/3600)%24);
    // for minutes counting
    inputs[2].value = (Math.floor(diff/60)%60);
    // for seconds counting
    inputs[3].value = (Math.floor(diff) %60 );
}

// initial call
clock()

setInterval(
    () => {
    clock()
    },
    1000
)

var color = document.getElementsByClassName("Overlay");
var colours = ["red", "blue", "green", "pink"];
var counter = 0;

function changecolour()
{

    if(counter ==  colours.length){
        counter = 0;
    }
    color.style.background = colours[counter];
    counter++;
}

var mytimer = setInterval(changecolour,3000);
// setinterval - calls the function after every specific interval
// in this case the clock function will be called after every 1 second.