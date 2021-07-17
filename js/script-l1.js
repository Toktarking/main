

var user = sessionStorage.getItem('user');



//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_l1`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_l1`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_l1`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_l1`);  //change a>c or 1>2



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
        question: "He has to get the train to London at__________.",
        options: [
            'A. 7.30',
            'B. 11.00',
            'C. 6.00',
            "D. 9.00",

        ],
        rightAnswer: 0
    },
    {    //question 2
        question: "Simon has a morning _________ at work.",
        options: [
            'A. tea',
            'B. meal',
            'C. coffee',
            "D. milk",

        ],
        rightAnswer: 2
    },
    {        //question 3
        question: "Simon has a __________ for lunch.",
        options: [
            'A. substantial meal',
            'B. main course',
            'C. snack',
            "D. cup of coffee",

        ],
        rightAnswer: 2
    },
    {          //question 4

        question: "His daughters are ________ when he gets up.",
        options: [
            'A. in bed',
            'B. on the train',
            'C. at school',
            "D. in the kindergarten",

        ],
        rightAnswer: 0
    },

    {          //question 5 Егер шаршының а см қабырғасы мына аралықта жатса 0,9 < а < 1,2; онда периметрі қай аралықта жатады?
        question: "Simon mostly drinks _________at work.",
        options: [
            'A. tea',
            'B. cocoa',
            'C. cola',
            "D. coffee",

        ],
        rightAnswer: 3
    },
    {          //question 6
        question: "Simon __________ for a computer company.",
        options: [
            'A. looks',
            'B. applies',
            'C. works',
            "D. leaves",
        ],
        rightAnswer: 2
    },
    {          //question 7 .
        question: "Simon doesn`t have breakfast not to miss the train to _________.",
        options: [
            'A. Brighton',
            'B. Bordeaux',
            'C. Britain',
            "D. London",

        ],
        rightAnswer: 3
    },
    {         //question 8
        question: "He doesn`t get home until ________.",
        options: [
            'A. 7.45',
            'B. 9.00',
            'C. 11.00',
            "D. 6.00",

        ],
        rightAnswer: 0
    },
    {          //question 9
        question: "Adam likes his age at the moment of speech because _____________",
        options: [
            'A. has grey hair',
            'B. he gets up early',
            'C. he has no children',
            "D. he is retired",

        ],
        rightAnswer: 3
    },
    {         //question 10
        question: "Nora thinks that old age is _____________ .",
        options: [
            'A. blessing',
            'B. advantageous',
            'C. favorable',
            "D. problematic",

        ],
        rightAnswer: 3
    },
    {         //question 11
       question: "Adam really likes ____________.",
        options: [
            'A. his teenage years',
            'B. problems he faces now',
            'C. the age he is now',
            "D. his early twenties",

        ],
        rightAnswer: 2
    },
    {         //question 12
        question: "In her early thirties Nora had _____________ .",
        options: [
            'A. adult children',
            'B. many friends',
            'C. free time',
            "D. young children",

        ],
        rightAnswer: 3
    },
    {         //question 13
        question: "Nora hated being _______.",
        options: [
            'A. teenager',
            'B. mother',
            'C. teacher',
            "D. doctor",

        ],
        rightAnswer: 0
    },
    {         //question 14
        question: "The least favorite period in life for Nora is ___________.",
        options: [
            'A. as an adult',
            'B. late twenties',
            'C. early thirties',
            "D. her childhood",

        ],
        rightAnswer: 3
    },
    {         //question 15
        question: "Adam and Nora are mainly talking about ________",
        options: [
            'A. the best and worst times of Adam’s life',
            'B. the best and worst times of their lives',
            'C. problems they are having now',
            "D. the best and worst times of their children’s life",

        ],
        rightAnswer: 1
    },
    {         //question 16
        question: "Adam’s children are ___________ their own lives.",
        options: [
            'A. responsible for',
            'B. distracted by',
            'C. dissatisfied with',
            "D. not in charge of",

        ],
        rightAnswer: 0
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
        let score = localStorage.getItem(`${user}_score_l1`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_l1`, score);   //change a>c or 1>2

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
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_l1`);  //change a>c or 1>2
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
















