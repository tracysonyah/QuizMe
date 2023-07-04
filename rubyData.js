const questions = [
    {
        question: 'What is the syntax to define a method in Ruby?',
        options: ['define_method', 'def_method', 'define', 'def'],
        answer: 'def'
    },
        
    {
        question: 'Which data structure in Ruby stores elements in a key-value pair format?',
        options: ['Array', 'Hash', 'Set', 'Tuple'],
        answer: 'Hash'
    },
        
    {
        question: 'puts 10 + "20".to_i outputs what?',
        options: ['1020', '30', '102', 'Error'],
        answer: '30'
    },
        
    {
        question: 'How do you check if a variable is in nil in Ruby?',
        options: ['variable.nil?', 'variable.is_nil?', 'variable == nil', 'All of the above'],
        answer: 'All of the above'
    },
        
    {
        question: 'The method in Ruby used to iterate over each element of an array or collection?',
        options: ['each', 'loop', 'for', 'iterate'],
        answer: 'each'
    },

    // {
    //     question: 'puts "Hello, World!".length outputs what?',
    //     options: ['13', '12', '11', '10'],
    //     answer: '11'
    // },

    // {
    //     question: 'In Ruby, what does the `self` keyword refer to?',
    //     options: ['The current class', 'The current object', 'The parent object', 'The parent class'],
    //     answer: 'The current object'
    // },

    // {
    //     question: 'What is the purpose of the `attr_accessor` method in Ruby?',
    //     options: ['It defines a class-level attribute?', 'It defines a read-only attribute', 'It defines both getter and setter methods for an attribute', 'It defines only the getter method for an attribute'],
    //     answer: 'It defines both getter and setter methods for an attribute'
    // },

    // {
    //     question: 'The purpose of the `require` keyword in Ruby is?',
    //     options: ['It imports a library or external file', 'It defines a new class', 'It creates a new instance of a class', 'It declares a module'],
    //     answer: 'It imports a library or external file'
    // },

    // {
    //     question: 'puts [1,2,3,4].map { |x| * 2 } outputs what?',
    //     options: ['[1,2,3,4]', '[2,4,6,8]', '[1,4,9,16', '1,3,5,7'],
    //     answer: '[2,4,6,8]'
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

    const answerButtons = document.querySelectorAll('.answer-buttons button');
    answerButtons.forEach(button => {
        button.style.display = 'none'
    })

    questionElement.style.display = 'none';
    nextButton.style.display = 'none';
    timer.style.display = 'none';
}

beginQuiz();
