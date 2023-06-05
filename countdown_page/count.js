const endDate = "6 June 2023 6:00 PM";

document.getElementById("endDate").innerText = endDate;
const inputs = document.querySelectorAll("input")
// query selector all?

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
// setinterval??
// query selector all??