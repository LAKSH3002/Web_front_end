var c = document.getElementById("content");
var b = document.getElementById("show_more");

b.onclick = function(){

    if(c.className == "open")
    {
        //shrink the box
        c.className = "";
        b.innerHTML = "Show more";
    }
    else{
        // expand the box
        c.className = "open";
        b.innerHTML = "Show less";
    }

};

// we use it to make sure that we dont find any js untill the window is totally loaded
// window.onload = function(){}