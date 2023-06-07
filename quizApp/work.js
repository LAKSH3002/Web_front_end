const qn = [
    {
        'que':'Which is the markup language',
        'a':'HTML',
        'b':'CSS',
        'c':'Javascript',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que' : "What does HTML stand for?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "Helicopters Terminals Motorboats Lamborginis",
        'correct': "a",
    },
    {
        'que': "What year was JavaScript launched?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "none of the above",
        'correct': "b",
    },
    {
        'que': "What does CSS stands for?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "Helicopters Terminals Motorboats Lamborginis",
        'correct': "b",
    },
    {
        'que': "Who is the prime Minister Of India",
        'a': "Narendra Modi",
        'b': "Ramnath Kovind",
        'c': "Arun Jetli",
        'd': "Manmohan SIngh",
        'correct': "a",
    }
]

let index=0;
let total = qn.length;
let right=0;
let wrong=0;
const quesBox = document.getElementById("quesBox")
const options = document.querySelectorAll(".options")

const load = ()=> 
{
    if(index === total){
    return endquiz()
    }
    reset()
    const data = qn[index]
    quesBox.innerText = data.que;
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
}

const nextQuestion = ()=>{
    const data = qn[index];
    const ans = getAnswer()
    if(ans === data.correct)
    {
        right++;
    }
    else{
        wrong++;
    }
    index++;
    load();
    return;
}

// doubt here
const getAnswer = ()=>{
    let answer;
    options.forEach(
        (input) =>
        {
            if(input.checked){
               answer =  input.value;
            }
        }
    )
    return answer;
}
// doubt here
const reset = ()=>
{
    options.forEach(
        (input) =>
        {
            input.checked = false;
        }
    )
}

const endquiz = ()=>
{
document.getElementById("box").innerHTML = 
'THANK YOU FOR PLAYING'
}
load();