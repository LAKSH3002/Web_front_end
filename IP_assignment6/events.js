// on change event 
function myFunction0() 
{
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo2").innerHTML = "You Selected: "+x;
  }

// Keyboard Event
function myFunction1() 
{
    document.getElementById("demo3").innerHTML = "You pressed a key inside the input field";
  }

// OnSubmit Event
function myFunction2() {
    alert("The form was submitted");
  }