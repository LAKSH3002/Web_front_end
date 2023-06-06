var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

var tablink;
var tabcontent;
function opentab(tabname)
{
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    } 
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    } 
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var side = document.getElementById('sidemenu');

function openmenu()
{
  side.style.right = "0px";
}
function closemenu()
{
  side.style.right = '-200px';
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwvyc-TiWnyctL_9mx0-6KvYU-RM9vGrbOkdkTmcttI-kgqyzaj1KMaFs80vW8WZEbJtQ/exec'
  const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('Msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML = "Message submitted successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

