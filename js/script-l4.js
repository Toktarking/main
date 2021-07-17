

var user = sessionStorage.getItem('user');



//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_l4`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_l4`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_l4`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_l4`);  //change a>c or 1>2



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
        question: "________ are talking about sport and job.",
        options: [
            "A. Two friends",
            "B. Father and daughter",
            "C. Mother and daughter",
            "D. Father and son",

        ],
        rightAnswer: 0
    },
    {    //question 2
        question: "Susan`s job is ________.",
        options: [
            "A. excellent",
            "B. brilliant",
            "C. the worst",
            "D. boring",

        ],
        rightAnswer: 3
    },
    {        //question 3
        question: "Conversation takes place in the _________.",
        options: [
            "A. saloon",
            "B. canteen",
            "C. cinema",
            "D. stadium",

        ],
        rightAnswer: 1
    },
    {          //question 4

        question: "Christine has an _________.",
        options: [
            "A. computer",
            "B. idea",
            "C. job",
            "D. ability",
        ],
        rightAnswer: 1
    },


    {          //question 5 Егер шаршының а см қабырғасы мына аралықта жатса 0,9 < а < 1,2; онда периметрі қай аралықта жатады?
        question: "Christine can play ________, Susan can play _________",
        options: [
            "A. tennis, table tennis",
            "B. tennis, golf",
            "C. golf, guitar",
            "D. golf, tennis",

        ],
        rightAnswer: 3
    },
    {          //question 6
        question: "Christine is going to start a new ________.",
        options: [
            "A. game",
            "B. job",
            "C. project",
            "D. role",

        ],
        rightAnswer: 1
    },
    {          //question 7 .
        question: "Christine`s new job is in the __________ department.",
        options: [
            "A. computer",
            "B. banking",
            "C. marketing",
            "D. accounting",

        ],
        rightAnswer: 3
    },
    {         //question 8
        question: "Christine suggests playing _______ next weekend.",
        options: [
            "A. tennis",
            "B. chess",
            "C. golf",
            "D. game",

        ],
        rightAnswer: 2
    },
    {          //question 9
        question: "Christine suggests playing _______ next weekend.",
        options: [
            "A. clerk of",
            "B. chairman of",
            "C. servant of",
            "D. chauffeur of",

        ],
        rightAnswer: 1
    },
    {         //question 10
        question: "His favorite place to relax with clients is __________.",
        options: [
            "A. restaurants",
            "B. night houses",
            "C. his office",
            "D. Madame JoJo's",

        ],
        rightAnswer: 3
    },
    {         //question 11
       question: "Sales go up every year because _________.",
        options: [
            "A. business is successful",
            "B. sales reports are good",
            "C. clients are jealous",
            "D. business is bad",

        ],
        rightAnswer: 0
    },
    {         //question 12
        question: "Sales rise continually because _________ is good.",
        options: [
            "A. client",
            "B. manager",
            "C. directory",
            "D. business",

        ],
        rightAnswer: 3
    },
    {         //question 13
        question: "Every morning James has his _______ in bed.",
        options: [
            "A. lunch",
            "B. dinner",
            "C. breakfast",
            "D. milk",

        ],
        rightAnswer: 2
    },
    {         //question 14
        question: "James Cash lives in a big house in the _________.",
        options: [
            "A. farm",
            "B. city",
            "C. country",
            "D. village",

        ],
        rightAnswer: 2
    },
    {         //question 15
        question: "With important business clients they drink ________.",
        options: [
            "A. champagne and watch a cabaret",
            "B. tea and watch TV news",
            "C. coffee and watch a cabaret",
            "D. champagne and discuss sales",

        ],
        rightAnswer: 0
    },
    {         //question 16
        question: "According to the text James Cash is a ___________.",
        options: [
            "A. a millionaire",
            "B. a trillionaire",
            "C. a billionaire",
            "D. a multi-millionaire",

        ],
        rightAnswer: 3
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
        let score = localStorage.getItem(`${user}_score_l4`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_l4`, score);   //change a>c or 1>2

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
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_l4`);  //change a>c or 1>2
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
















