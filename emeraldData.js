const questions = [
    {
        question: 'Which is a key feature of Emerald?',
        options: ['Dynamic typing', 'Single-threaded execution', 'Lack of exception handing', 'Support for concurrency'],
        answer: 'Support for concurrency'
    },
        
    {
        question: 'How does Emerald handle concurrency?',
        options: ['Manual memory allocation and deallocation', 'Automatic garbage collection', 'Using pointers and references', 'By limiting the memory usage'],
        answer: 'Automatic garbage collection'
    },
        
    {
        question: 'What is Emerald?',
        options: ['A gemstone', 'A video game', 'A programming language', 'A movie'],
        answer: 'A programming language'
    },
        
    {
        question: 'Who developed Emerald?',
        options: ['Google', 'Microsoft', 'University of Washington', 'Apple'],
        answer: 'University of Washington'
    },
        
    {
        question: 'How are classes defined in Emerald?',
        options: ['Using the def keyword', 'Using the class keyword', 'Using the struct keyword', 'Using the new keyword'],
        answer: 'Using the class keyword'
    },
        
];
localStorage.setItem('questions', JSON.stringify(questions));


const questionElement = document.getElementById('question');
const nextButton = document.getElementById('next');
const timer = document.getElementById('time-left');
const result = document.getElementById('result');
const restartButton = document.getElementById('restart');


let currentQuestionIndex = 0;
let score = 0;
let timeInterval;
let seconds = 0;


function beginQuiz() {
    restartButton.style.display = 'none'
    currentQuestionIndex = 0;
    seconds = 0;
    timer.textContent = '30:00'
    nextButton.innerHTML = 'Forward';
    result.innerHTML = '';
    startTimer();
    revealQuestion.innerHTML = '';
    revealQuestion();

    restartButton.addEventListener('click', restartQuiz);
}

function revealQuestion() {
    const answerButtons = document.querySelectorAll('.answer-buttons button');
    const currentQuestion = questions[currentQuestionIndex];
    const questionNUm = currentQuestionIndex + 1;
    const totalQuestions = questions.length;
    const questionText = `${questionNUm}. ${currentQuestion.question}`;
    const positionText = `${questionNUm}/${totalQuestions}`;

    document.getElementById('position').textContent = positionText;
    questionElement.textContent = questionText;
 
    for(let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].innerText = currentQuestion.options[i];

        answerButtons[i].removeEventListener('click', checkAnswer);
        answerButtons[i].addEventListener('click', checkAnswer);

        answerButtons[i].style.backgroundColor = '';
        answerButtons[i].style.color = '';
        answerButtons[i].disabled = false;
    }
}

function checkAnswer(event) {
    const selectedOPtion = event.target.innerHTML;
    const currentQuestion = questions[currentQuestionIndex];

    const answerButtons = document.querySelectorAll('.answer-buttons button');
    for (i = 0; i < answerButtons.length; ++i) {
        answerButtons.disabled = true;
        document.getElementById('next').style.display = 'none'

        if (answerButtons[i].innerHTML === currentQuestion.answer){
            answerButtons[i].style.background = "#9aeabc";
        }

        if (selectedOPtion === answerButtons[i].innerHTML  && selectedOPtion === currentQuestion.answer) {
            answerButtons[i].style.background = "#9aeabc";
            score += 10;
        }

        else if (selectedOPtion === answerButtons[i].innerHTML  && selectedOPtion !== currentQuestion.answer) {
            answerButtons[i].style.background = '#ff9393';
        }

        answerButtons[i].disabled = true;
        // console.log(i)  

    }
    nextButton.style.display = 'block';
    nextButton.disabled = false;
}

function revealNextQuestion() {
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length) {
        revealQuestion();
    }
    else {
        stopTimer();
        const confirmMessage = confirm('End of Quiz. Wanna start over?')
        if(confirmMessage === true) {
            beginQuiz();
        } 
        displayResult();
    }
}

function startTimer() {
    let seconds = 30 * 5;
    timeInterval = setInterval(() => {
        seconds --;
        const minutes = Math.floor(seconds / 60);
        const formattedSeconds = String(seconds % 60).padStart(2, '0');
        timer.textContent = `${minutes}:${formattedSeconds}`;

        if (seconds === 0) {
            stopTimer();
            displayResult();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timeInterval);
}


function displayResult() {
    const totalQuestions = questions.length;
    const questionsAnswered = score / 10;
    const percentage = (score);
    const resultMessage = `You answered ${questionsAnswered} out of ${totalQuestions} correctly. (${percentage}%)`;
    

    result.innerHTML = resultMessage;

    document.getElementById('back').style.display = 'none'

    result.style.background = 'green';
    result.style.color = '#fff';
    result.style.padding = '4rem';
    result.style.fontSize = 'xx-large'

    restartButton.style.display = 'block';

    const answerButtons = document.querySelectorAll('.answer-buttons button');
    answerButtons.forEach(button => {
        button.style.display = 'none'
    })

    questionElement.style.display = 'none';
    nextButton.style.display = 'none';
    timer.style.display = 'none';
}

beginQuiz();
