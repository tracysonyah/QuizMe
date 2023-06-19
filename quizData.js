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
    options: ['a) 1995', 'b) 1998', 'c) 2001', 'd) 2004'],
    answer: 'b) 1998'
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
    answer: 'House of Cards'
},

{
    question: 'Which social media platform did Facebook acquire in 2012?',
    options: ['Twitter', 'Snapchat', 'instagram', 'LinkedIn'],
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
    answer: 'Warren buffet'
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
    options: ['Steve Ballmer', 'Bill Gates', 'Satya', 'Nadella'],
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
    options: [{text: 'PlayStation'}, 'Xbox', 'Nintendo Switch', 'GameCube'],
    answer: 'Xbox'
},

{
    question: 'The CEO Tracy loves the most amongst these select few?',
    options: ['Mark Zukerberg', 'Sundar Pichai', 'Bill Gates', 'Tim Cook'],
    answer: 'Sundar Pichai'
}

];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next');

let currentQuestionIndex = 0;
let score = 0;

function beginQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Forward';
    revealQuestion();
}

function revealQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionNUm = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNUm + '. ' + currentQuestion.question;

    for(let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].innerHTML = currentQuestion.options[i];
    }
}

function revealNextQuestion() {
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length) {
        revealQuestion();
    }
    else {
        const confirmMessage = confirm('End of Quiz, mylove. Wanna start over?')
        if(confirmMessage === 'ok') {
            onclick = "windows.location.href = 'index.html'";
        } 
        else {
            beginQuiz();
        }
    }
}

beginQuiz();
