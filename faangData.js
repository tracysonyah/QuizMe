const questions = [

    {
        question: "What year was Apple founded?",
        options: ['1974', '1976', '1980', '1984'],
        answer:'1976'
    },


    {
        question: 'When was Amazon founded?',
        options: ['1995', '1998', '2001', '2004'],
        answer: '1995'
    },

    {
        question: 'When one was Facebook founded?',
        options: ['2001', '2003', '2005', '2007'],
        answer: '2003'
    },

    {
        question: 'When was Google founded?',
        options: ['1995', '1998', '2001', '2004'],
        answer: '1998'
    },

    {
        question: 'In which year was Netflix founded?',
        options: ['1995', '1997', '2000', '2002'],
        answer: '1997'
    },

    {
        question: 'The web browser developed by Google is?',
        options: ['Safari', 'Firefox', 'Chrome', 'Edge'],
        answer: 'Chrome'
    },

    {
        question: 'What was the original business model of Netflix??',
        options: ['Online shopping', 'Social networking', 'DVD rental by mail', 'Video game Streaming'],
        answer: 'DVD rental by mail'
    },

    {
        question: 'Which social media platform did Facebook acquire in 2012?',
        options: ['Twitter', 'Snapchat', 'Instagram', 'LinkedIn'],
        answer: 'Instagram'
    },

    {
        question: 'The name of Amazon e-reader device?',
        options: ['Kindle', 'Fire Tablet', 'Echo Dot', 'Fire TV Stick'],
        answer: 'Kindle'
    },

    {
        question: 'The name of Apple storage cloud service?',
        options: ['iCloud', 'Apple Drive', 'iStorage', 'Apple Cloud'],
        answer: 'iCloud'
    },

    {
        question: 'Apple became the first two-trillion-dollar publicly traded company?',
        options: ['2016', '2017', '2018', '2019'],
        answer: '2018'
    },
    
    {
        question: 'What is the market capitalization of Apple as of september 2021?',
        options: ['$500 billion', '$1 trillion', '$2 trillion', '$5 trillion'],
        answer: '$2 trillion'
    },

    {
        question: 'Which famous investor is known for his large holdings of Apple stock?',
        options: ['Warren Buffet', 'Elon Musk', 'Jeff Bezos', 'Mark Zukerberg'],
        answer: 'Warren Buffet'
    },

    {
        question: 'Who is the co-founder of Apple along with Steve Jobs?',
        options: ['Tim Cook', 'Bill Gates', 'Steve Wozniak', 'Mark Zukerberg'],
        answer: 'Steve Wozniak'
    },

    {
        question: 'Who is the current CEO of Apple?',
        options: ['Tim Cook', 'Jeff Bezos', 'Sundar Pichai', 'Elon Musk'],
        answer: 'Tim Cook'
    },

    {
        question: 'Who is the current CEO of Microsoft?',
        options: ['Steve Ballmer', 'Bill Gates', 'Tim Berners-Lee', 'Staya Nadella'],
        answer: 'Staya Nadella'
    },

    {
        question: 'The programming console widely used for Windows development?',
        options: ['Python', 'Java', 'C#', 'Ruby'],
        answer: 'C#'
    },

    {
        question: 'What year was Microsoft founded?',
        options: ['1975', '1980', '1985', '1990'],
        answer: '1975'
    },

    {
        question: 'Which gaming console is developed by Microsoft?',
        options: ['PlayStation', 'Xbox', 'Nintendo Switch', 'GameCube'],
        answer: 'Xbox'
    },

    {
        question: 'The name of Microsoft cloud computing platform is?',
        options: ['SharePoint', 'OneDrive', 'Microsoft Azure', 'Microsoft 365'],
        answer: 'Microsoft Azure'
    }
];
localStorage.setItem('questions', JSON.stringify(questions));

// const storedQuestions = localStorage.getItem('questions');
// const questions = JSON.parse(storedQuestions);


const questionElement = document.getElementById('question');
const nextButton = document.getElementById('next');
const timer = document.getElementById('time-left');
const result = document.getElementById('result');
const restartButton = document.getElementById('restart');


let currentQuestionIndex = 0;
let score = 0;
let timeInterval;
let seconds = 0;


function restartQuiz() { 
    beginQuiz();

    // revealQuestion();
    // revealNextQuestion();
}

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
            score += 5;
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
    let seconds = 30 * 20;
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
    const questionsAnswered = score / 5;
    const percentage = (score); // .toFixed(2);
    const resultMessage = `You answered ${questionsAnswered} out of ${totalQuestions} correctly. (${percentage}%)`;
    

    result.innerHTML = resultMessage;

    document.getElementById('back').style.display = 'none'

    result.style.background = '#CA054D';
    result.style.color = '#fff';
    result.style.padding = '4rem';
    result.style.fontSize = 'xx-large'

    restartButton.style.display = 'block';
    restartButton.addEventListener('click', restartQuiz);


    const answerButtons = document.querySelectorAll('.answer-buttons button');
    answerButtons.forEach(button => {
        button.style.display = 'none'
    })

    questionElement.style.display = 'none';
    nextButton.style.display = 'none';
    timer.style.display = 'none';
    // timerimg.style.display = 'none'
}

beginQuiz();

