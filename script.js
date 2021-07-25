const quizData=[
    {
        question:"who made highest individual score in odi's?",
        "a":"Rohit Sharma",
        "b":"Sachin Tendulkar",
        "c":"Ms Dhoni",
        "d":"Kane Williamson",
        correct:"a"
    },
    {
        question:"who is the top hero in tollywood?",
        "a":"Nani",
        "b":"Mahesh Babu",
        "c":"Jr NTR",
        "d":"David Warner",
        correct:"c"
    },
    {
        question:"which country won the last odi world cup?",
        "a":"India",
        "b":"England",
        "c":"New Zealand",
        "d":"Australia",
        correct:"b"
    },
    {
        question:"who is superman?",
        "a":"Narendra Modi",
        "b":"Donald trump",
        "c":"Joe Biden",
        "d":"Kim Jong-un",
        correct:"a"
    },
];

let currentQuestion = 0;
let score=0;

const questionEl=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const quiz = document.getElementById("quiz");

loadquiz();

function loadquiz(){
    deselect();
    const currentQuestionData = quizData[currentQuestion];

    questionEl.innerText = currentQuestionData.question; 
    a_text.innerText = currentQuestionData.a;
    b_text.innerText = currentQuestionData.b;
    c_text.innerText = currentQuestionData.c;
    d_text.innerText = currentQuestionData.d;   
    
    // currentQuestion++;
}


submitBtn.addEventListener('click',() =>{
    let anwsered = getSelected();
    if(anwsered){
        if(anwsered === quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        if(currentQuestion < quizData.length){
            loadquiz();
        }else{
            // alert(`You scored ${score}/${quizData.length}`)
            quiz.innerHTML = `
            <h3>You scored ${score}/${quizData.length} questions.</h3>
            <button onclick="location.reload()">Reattempt the quiz</button>
            `
        }
    }
});


function getSelected(){
    let selectedAnwser=undefined;
    let anwsersEls= document.querySelectorAll(".anwser");

    anwsersEls.forEach((anwserel)=>{
        if(anwserel.checked){
            selectedAnwser = anwserel.id;
        }
    })
    return selectedAnwser;
}


function deselect(){
    let anwsersEls= document.querySelectorAll(".anwser");
    anwsersEls.forEach((anwserel)=>{
        if(anwserel.checked){
            anwserel.checked = false;
        }
    })
}