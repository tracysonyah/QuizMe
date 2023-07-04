const questions = [
    {
        question: 'Which is a correct way to comment a single line in python?',
        options: ['/* comment */', '// comment', '# comment', '<!-- comment -->'],
        answer: '# comment'
    },
        
    {
        question: 'print("Hello, + "World!") outputs what?',
        options: ['Hello, World!', 'Hello,', 'World!', 'Error'],
        answer: 'Hello, World!'
    },
        
    {
        question: 'How do you check the length of a list in python?',
        options: ['length(list)', 'len(list)', 'list.length()', 'list.len()'],
        answer: 'len(list)'
    },
        
    {
        question: 'Which data type in python is mutable?',
        options: ['int', 'float', 'str', 'list'],
        answer: 'list'
    },
        
    {
        question: 'print(3 * 2 ** 3) outputs what?',
        options: ['48', '12', '18', '24'],
        answer: '48'
    },

    // {
    //     question: 'The keyword to define a function in python is?',
    //     options: ['define', 'function', 'def', 'func'],
    //     answer: 'def'
    // },

    // {
    //     question: 'Which operator is used for exponentiation in python?',
    //     options: ['^', '**', '//', '%'],
    //     answer: '**'
    // },

    // {
    //     question: 'What is the purpose of the `if` statement in python?',
    //     options: ['It defines a loop', 'It checks a condition and executes code based on the result', 'It defines a function', 'It performs mathematical calculations'],
    //     answer: 'It checks a condition and executes code based on the result'
    // },

    // {
    //     question: 'print("Python".find("on")) outputs what?',
    //     options: ['0', '1', '2', '3'],
    //     answer: '3'
    // },

    // {
    //     question: 'How do you convert a string to uppercase in Python?',
    //     options: ['string.upper()', 'string.toUpperCase()', 'string.uppercase', 'string.toUpper()'],
    //     answer: 'string.upper()'
    // },
        
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

    result.style.background = 'rgb(185, 27, 27)                                                                                                                                     ';
    result.style.color = '#fff';
    result.style.padding = '4rem';
    result.style.fontSize = 'xx-large'
    

    restartButton.style.display = 'block';
    document.querySelector(".button").style.flexDirection = 'column';
    

    const answerButtons = document.querySelectorAll('.answer-buttons button');
    answerButtons.forEach(button => {
        button.style.display = 'none'
    })

    questionElement.style.display = 'none';
    nextButton.style.display = 'none';
    timer.style.display = 'none';
}

beginQuiz();
