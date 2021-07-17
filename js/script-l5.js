

var user = sessionStorage.getItem('user');



//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_l5`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_l5`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_l5`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_l5`);  //change a>c or 1>2



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
        question: "They want the mural to be about_____.",
        options: [
            "A. nature",
            "B. space",
            "C. Hollywood",
            "D. University",

        ],
        rightAnswer: 0
    },
    {    //question 2
        question: "It's that big wall on the side of the ______ library.",
        options: [
            "A. personal",
            "B. private",
            "C. school",
            "D. public",

        ],
        rightAnswer: 3
    },
    {        //question 3
        question: "The project is being discussed by Jeff and Lisa_______",
        options: [
            "A. Drawing on the fence.",
            "B. Creating a mural.",
            "C. Designing a window.",
            "D. Drafting a wall.",

        ],
        rightAnswer: 1
    },
    {          //question 4

        question: "They've been planting so many trees and plants along the streets and in the _____.",
        options: [
            "A. store",
            "B. picture",
            "C. cinema",
            "D. park",

        ],
        rightAnswer: 3
    },

    {          //question 5 Егер шаршының а см қабырғасы мына аралықта жатса 0,9 < а < 1,2; онда периметрі қай аралықта жатады?
        question: "Jeff agrees to help design a mural because he_______.",
        options: [
            "A. is in trouble",
            "B. is upset",
            "C. wants to earn",
            "D. likes the idea",

        ],
        rightAnswer: 3
    },
    {          //question 6
        question: "According to the text, both friends are good at______",
        options: [
            "A. studying",
            "B. schooling",
            "C. drafting",
            "D. painting",

        ],
        rightAnswer: 3
    },
    {          //question 7 .
        question: "Lisa guesses all the design ideas students come up with should have a ______ theme.",
        options: [
            "A. country",
            "B. climate",
            "C. business",
            "D. nature",

        ],
        rightAnswer: 3
    },
    {         //question 8
        question: "A big project implies in the conversation between two friends________",
        options: [
            "A. A painting on the entire wall of the public library.",
            "B. A big picture on the entire wall of the mall.",
            "C. A drawing on the entire side of the train.",
            "D. An advertisement on the entire wall of the business centre.",

        ],
        rightAnswer: 0
    },
    {          //question 9
        question: "Brasilia was chosen to be an American Capital of _________.",
        options: [
            "A. Theatre",
            "B. Language",
            "C. Culture",
            "D. Art",

        ],
        rightAnswer: 2
    },
    {         //question 10
        question: "The most _______ buildings are in the middle.",
        options: [
            "A. important",
            "B. attractive",
            "C. expensive",
            "D. exciting",

        ],
        rightAnswer: 0
    },
    {         //question 11
       question: "In Brasilia one can see different kinds of cultural events: from traditional _________ to fashion shows.",
        options: [
            "A. ballets",
            "B. puppet shows",
            "C. festivals",
            "D. masquerades",

        ],
        rightAnswer: 2
    },
    {         //question 12
        question: "So there are a lot of different cultural events: from traditional festivals to exhibitions of contemporary art and ___________.",
        options: [
            "A.  old manuscripts",
            "B. modern ballet",
            "C. big monuments",
            "D. fashion shows",

        ],
        rightAnswer: 3
    },
    {         //question 13
        question: "Lots of foreign citizens come to Brasilia _______.",
        options: [
            "A. to study",
            "B. to concerts",
            "C. for competition",
            "D. on business",

        ],
        rightAnswer: 3
    },
    {         //question 14
        question: "So there are a lot of different cultural events from traditional festivals to _______ of contemporary art.",
        options: [
            "A. exhibitions",
            "B. discussions",
            "C. depictions",
            "D. counterfeits",

        ],
        rightAnswer: 0
    },
    {         //question 15
        question: "Today Niemeyer’s ________ are the most admired tourist attractions.",
        options: [
            "A. novels",
            "B. offices",
            "C. buildings",
            "D. paintings",

        ],
        rightAnswer: 2
    },
    {         //question 16
        question: "Today Niemeyer’s ________ are the most admired tourist attractions.",
        options: [
            "A. Ingmar Bergman",
            "B. Antonio Gaudi",
            "C. Richard Rogers",
            "D. Oscar Niemeyer",
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
        let score = localStorage.getItem(`${user}_score_l5`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_l5`, score);   //change a>c or 1>2

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
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_l5`);  //change a>c or 1>2
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
















