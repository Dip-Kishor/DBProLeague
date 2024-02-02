const questions=[
    {
        question:"Who is the founder of Efootball?",
        answers:[
            {text: "Apple", correct: false},
            {text: "EA Sports", correct: false},
            {text: "Konami Digital Entertainment", correct: true},
            {text: "Samsung", correct: false},
        ]
    },
    {
        question:"How many times you can switch an account in a single month?",
        answers:[
            {text: "5", correct: false},
            {text: "10", correct: true},
            {text: "15", correct: false},
            {text: "20", correct: false},
        ]
    },
    {
        question:"When was efootball mobile released?",
        answers:[
            {text: "30 September 2022", correct: true},
            {text: "29 September 2022", correct: false},
            {text: "28 September 2022", correct: false},
            {text: "01 october 2022", correct: false},
        ]
    },
    {
        question:"Which country made efootball?",
        answers:[
            {text: "USA", correct: false},
            {text: "China", correct: false},
            {text: "Nepal", correct: false},
            {text: "Japan", correct: true},
        ]
    },
    {
        question:"When was the first Pro Evolution Soccer(currently Known as EFootball) released?",
        answers:[
            {text: "1993", correct: false},
            {text: "1994", correct: false},
            {text: "1995", correct: true},
            {text: "1996", correct: false},
        ]
    },
    {
        question:"Who is the ambassador of EFootball?",
        answers:[
            {text: "Lionel Messi", correct: true},
            {text: "Cristiano Ronaldo", correct: false},
            {text: "Iker Casillas", correct: false},
            {text: "David Beckham", correct: false},
        ]
    },
];
const questionElemnent=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML= "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElemnent.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
};
function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElemnent.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display= "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();