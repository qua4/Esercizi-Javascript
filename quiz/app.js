const quizData = [
    {
        question:"Di che colore è Tassorosso?",
        a:"Rosso",
        b:"Verde",
        c:"Giallo",
        d:"Blu",
        correct: "c",
    },
    {
        question:"Di che colore è Grifondoro?",
        a:"Rosso",
        b:"Verde",
        c:"Giallo",
        d:"Blu",
        correct: "a",
    },
    {
        question:"Di che colore è Corvonero?",
        a:"Rosso",
        b:"Verde",
        c:"Giallo",
        d:"Blu",
        correct: "d",
    },
    {
        question:"Di che colore è Serpeverde?",
        a:"Rosso",
        b:"Verde",
        c:"Giallo",
        d:"Blu",
        correct: "b",
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", ()=> {
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>Hai risposto correttamente a ${score} domande su ${quizData.length}</h2>
            
            <button onclick="location.reload()">Riprova </button>`
        }
    }
})