// setting timeout time
var mess = document.getElementById("message");

function showmessage(){
    mess.className = "show";
}

setTimeout(showmessage,4000);


// Setting interval time
var color = document.getElementById("colour_changer");
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

color.onclick = function() {

clearInterval(mytimer);
color.innerHTML = "TIMER STOPPED"; 

}