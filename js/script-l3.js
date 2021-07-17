

var user = sessionStorage.getItem('user');



//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_l3`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_l3`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_l3`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_l3`);  //change a>c or 1>2



/* All answer options */
const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');


/* All our options */
const optionElements = document.querySelectorAll('.option');


const question = document.getElementById('question'),
      numberOfQuestion = document.getElementById('number-of-question'),
      numberOfAllQuestion = document.getElementById('number-of-all-questions');


let indexOfQuestion, //index of current question
    indexOfPage = 0; //index of page



const answersTracker = document.getElementById('answers-tracker');



const btnNext = document.getElementById('btn-next');







const correctAnswer = document.getElementById('correct-answer'),
      numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'),
      btnTryAgain = document.getElementById('btn-try-again');

const questions = [
    {       //question 1
        question: "At the end of the conversation Harry invites them to go _______ at once.",
        options: [
            "A. to a cafe",
            "B. upstairs",
            "C. to the office",
            "D. to the last house",

        ],
        rightAnswer: 2
    },
    {    //question 2
        question: "After they were shown the house, the couple ______.",
        options: [
            "A. went to the last house they saw",
            "B. returned home",
            "C. went to the office",
            "D. stayed there",

        ],
        rightAnswer: 2
    },
    {        //question 3
        question: "In the office Daniel is going to _______.",
        options: [
            "A. refuse to buy the expensive house",
            "B. offer $10,000 less",
            "C. give $10,000 more",
            "D. make an offer to buy the house",


        ],
        rightAnswer: 3
    },
    {          //question 4

        question: "Harry suggests using one of the bedrooms as a ___________.",
        options: [
            "A. living room",
            "B. dining area",
            "C. kitchen",
            "D. guest bedroom",

        ],
        rightAnswer: 3
    },

    {
        question: "Daniel has a_____ study at home.",
        options: [
            "A. big",
            "B. convenient",
            "C. noisy",
            "D. very small",

        ],
        rightAnswer: 3
    },
    {          //question 6
        question: "As the kitchen is very big, they may __________ .",
        options: [
            "A. eat there",
            "B. make it a guest bedroom",
            "C. use it as a study for Daniel",
            "D. use it as a study for Susan",

        ],
        rightAnswer: 0
    },
    {          //question 7 .
        question: "One of the bedrooms may be used as a ______.",
        options: [
            "A. dining area",
            "B. living room",
            "C. kitchen",
            "D. study",

        ],
        rightAnswer: 3
    },
    {         //question 8
        question: "The agent thinks that many people like to _______.",
        options: [
            "A. have meals upstairs",
            "B. eat in the kitchen",
            "C. eat in the dining room",
            "D. have a separate space for eating",
        ],
        rightAnswer: 3
    },
    {          //question 9
        question: "The passengers are expected to fill in the immigration ______ given out by the flight attendants.",
        options: [
            "A. forms",
            "B. cards",
            "C. shapes",
            "D. lists",

        ],
        rightAnswer: 0
    },
    {         //question 10
        question: "Before leaving the plane the passengers are asked to look around to make sure they haven’t left any of their_________ behind them",
        options: [
            "A. tickets",
            "B. luggage",
            "C. sun glasses",
            "D. possessions",

        ],
        rightAnswer: 3
    },
    {         //question 11
       question: "Passengers are requested to remain seated until the plane has come to a complete _________ .",
        options: [
            "A. turbulence",
            "B. vibrancy",
            "C. darkness",
            "D. standstill",

        ],
        rightAnswer: 3
    },
    {         //question 12
        question: "Immigration forms will be collected while passengers go through ________ control.",
        options: [
            "A. passport",
            "B. luggage",
            "C. registration",
            "D. face",

        ],
        rightAnswer: 0
    },
    {         //question 13
        question: "The cabin crew will serve _________during the flight.",
        options: [
            "A. possessions",
            "B. refreshments",
            "C. pilots",
            "D. bed shapes",

        ],
        rightAnswer: 1
    },
    {         //question 14
        question: "The plane will be in Rome in time for ________.",
        options: [
            "A. sleep",
            "B. breakfast",
            "C. dinner",
            "D. lunch",

        ],
        rightAnswer: 3
    },
    {         //question 15
        question: "The crew will be coming round with _______ goods.",
        options: [
            "A. duty free",
            "B. fresh",
            "C. raw",
            "D. boiled",

        ],
        rightAnswer: 0
    },
    {         //question 16
        question: "When the plane has reached ______ speed of 550 miles an hour, it will be flying at 35,000 feet",
        options: [
            "A. flying",
            "B. shooting",
            "C. cruising",
            "D. landing",

        ],
        rightAnswer: 2
    },

];

numberOfAllQuestion.innerHTML = questions.length; // all questions number




const load = () => {
    question.innerHTML = questions[indexOfQuestion].question; //question

    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3];


    numberOfQuestion.innerHTML = indexOfPage + 1;   // setting page
    indexOfPage++; // increasing index of page
};

let completedAnswers = [];



let numbers = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17
    ];

let numberPumber = 0;


const randomQuestion = () => {



    let randomNumber = numbers[numberPumber];
    if(indexOfPage == questions.length) {
        quizOver();
    }
    if(completedAnswers.length > 0) {

        indexOfQuestion = randomNumber;
        load();
    }
    if(completedAnswers.length == 0) {

            indexOfQuestion = randomNumber;

            load();
    };
    completedAnswers.push(indexOfQuestion);
};





const checkAnswer = el => {
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('correct');
        let score = localStorage.getItem(`${user}_score_l3`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_l3`, score);   //change a>c or 1>2

    } else {
        el.target.classList.add('wrong');
        updateAnswerTracker('wrong');

    };
    disabledOptions();
}

const disabledOptions = () => {
    optionElements.forEach(item => {
        item.classList.add('disabled');
        if(item.dataset.id == questions[indexOfQuestion].rightAnswer) {
            item.classList.add('correct');
        }
    })
};

const enableOptions = () => {
    optionElements.forEach(item => {
        item.classList.remove('disabled', 'correct', 'wrong');
        })
};

const answerTracker = () => {
    questions.forEach(() => {
        const div = document.createElement('div');
        answersTracker.appendChild(div);
    })
};

const updateAnswerTracker = status => {
    answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
};

const validate = () => {

    if (!optionElements[0].classList.contains('disabled')) {
        alert('Жауаптардың біреуін таңдау керек');
    } else {
        numberPumber++;
        randomQuestion();
        enableOptions();
    }
};

btnNext.addEventListener('click', validate);

for (option of optionElements) {
    option.addEventListener('click', e => checkAnswer(e));


}

const quizOver = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_l3`);  //change a>c or 1>2
    numberOfAllQuestions2.innerHTML = questions.length;

}

const tryAgain = () => {
    window.location.href = `${user}.html`;
}

btnTryAgain.addEventListener('click', tryAgain);

counterSec = 10;
counterSec2 = 5;
counterMin = 9;
counterMin2 = 0;



function countSeconds() {
    counterSec--;
    document.querySelector('#counter-seconds').innerHTML = counterSec;
    document.querySelector('#counter-seconds2').innerHTML = counterSec2;
    document.querySelector('#counter-minutes').innerHTML = counterMin;
    document.querySelector('#counter-minutes2').innerHTML = counterMin2;
    if (counterSec < 0 && counterSec2 != 0) {
        counterSec2--;
        counterSec = 10;
        countSeconds();


        //quizOver();
    } else if (counterSec2 == 0 && counterSec < 0) {
        counterMin--;
        document.querySelector('#counter-minutes').innerHTML = counterMin;
        counterSec = 10;
        counterSec2= 5;
        countSeconds();
        if (counterMin < 0) {
            counterMin = 9;
            counterMin2--;
            document.querySelector('#counter-minutes').innerHTML = counterMin2;
        }




        //quizOver();
        //document.querySelector('#counter-seconds').innerHTML = "Время вышло";
        //document.querySelector('#counter-seconds').style.color = "red";
        //document.querySelector('#counter-seconds2').innerHTML = "";
    } else if (counterMin < 0 && counterMin2 == 0) {
           document.querySelector('#counter-seconds').innerHTML = "Уақыт аяқталды";
           counterSec = 0;
           counterSec2 = 0;
           counterMin = 0;
           counterMin2 = 0;
           document.querySelector('#counter-seconds').style.color = "red";
           document.querySelector('#counter-seconds2').innerHTML = "";
           document.querySelector('#counter-minutes').innerHTML = "";
           document.querySelector('#counter-minutes2').innerHTML = "";
           document.querySelector('#double-points').innerHTML = "";
           quizOver();
        }
}




setInterval(countSeconds, 1000);






window.addEventListener('load', () => {
    randomQuestion();
    answerTracker();



});



window.onbeforeunload = function() {
    return false;
}
















