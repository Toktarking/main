

var user = sessionStorage.getItem('user');



//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_g4`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_g4`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_g4`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_g4`);  //change a>c or 1>2



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
        question: "We need to peel the ___.",
        options: [
            'A. potatoes',
            'B. potates',
            'C. potatos',
            "D. potatooes",

        ],
        rightAnswer: 0
    },
    {    //question 2
        question: 'Ann went to the library because she wanted _________.',
        options: [
            'А. an information',
            'В. the informations',
            'С. pieces of an information',
            'D. some information',

        ],
        rightAnswer: 3
    },
    {        //question 3
        question: "The correct variant is: Have you still got ________?",
        options: [
            'А. yesterday newspaper',
            "В. yesterdays’ newspaper",
            'С. the newspaper of yesterday',
            'D. yesterday’s newspaper',

        ],
        rightAnswer: 3
    },
    {          //question 4

        question: " Many visitors to ____Grand Canyon approach ___edge for _____view.",
        options: [
            'А. - / the / the',
            'В. the / the / a',
            'С. the / an / a',
            'D. the / an / -',

        ],
        rightAnswer: 1
    },

    {
        question: "__ Europe and __ Asia are separated by __ Atlantic Ocean.",
        options: [
            'А. the/the/ -',
            'В.  -/ -/ the',
            'С. the/ the/ the',
            'D. -/ -/ an',

        ],
        rightAnswer: 1
    },
    {          //question 6
        question: 'The twenty-second of December is _______day of the year',
        options: [
            'А. shortest',
            'В. the most short',
            'С. the shortest',
            'D. shorter',

        ],
        rightAnswer: 2
    },
    {          //question 7 .
        question: 'Today the weather is ____ than it was yesterday.',
        options: [
            'А. the coldest',
            'В. most coldest',
            'С. cold',
            'D. colder',

        ],
        rightAnswer: 3
    },
    {         //question 8
        question: 'Jane is ___ because her job is ___.',
        options: [
            'А. bored / boring',
            'В. boring / boring',
            'С. boring / bored',
            'D. bored / bored',

        ],
        rightAnswer: 0
    },
    {          //question 9
        question: 'These are not good books. I don’t like ___.',
        options: [
            'А. him',
            'В. them',
            'С. its',
            'D. their',

        ],
        rightAnswer: 1
    },
    {         //question 10
        question: "Don't eat ____ ice cream before dinner",
        options: [
            'А. too many',
            'В. few',
            'С. a few',
            'D. too much',

        ],
        rightAnswer: 3
    },
    {         //question 11
       question: "The man _____ is sitting in the car is Marat’s driver.",
       options: [
            'А. when',
            'В. which',
            'С. whose',
            'D. who',

        ],
        rightAnswer: 3
    },
    {         //question 12
        question: "_____of the students in your group works hardest of all?",
        options: [
            'А. whose',
            'В. Whom',
            'С. Where',
            'D. Which',

        ],
        rightAnswer: 3
    },
    {         //question 13
        question: "The company has sold 6,082 cars.",
        options: [
            'А. six thousands eighty two',
            'В. six thousand point eighty two',
            'С. sixty eighty two',
            'D. six thousand and eighty two',

        ],
        rightAnswer: 3
    },
    {         //question 14
        question: "What time is it? – It’s 10:14. It’s _____ten.",
        options: [
            'А. just after quarter past',
            'В. nearly quarter past',
            'С. nearly quarter to',
            'D. exactly quarter past',

        ],
        rightAnswer: 1
    },
    {         //question 15
        question: "The athlete’s result in high-jump was 2.105 cm",
        options: [
            'А. two points one zero five',
            'В. two point one hundred five',
            'С. two point one zero five',
            'D. two point’s one zero five',

        ],
        rightAnswer: 2
    },
    {         //question 16
        question: "Jane ___ tea very often.",
        options: [
            "А. isn’t drinking",
            'В. not drinks',
            "С. hasn’t drank",
            "D. doesn’t drink",

        ],
        rightAnswer: 3
    },
    {         //question 17
        question: "I___ to the cinema but I ___ the film yesterday.",
        options: [
            'А. had been going / was not enjoying',
            "В. had gone / didn’t enjoy",
            "С. went / didn’t enjoy",
            "D. was going / wasn’t enjoying",

        ],
        rightAnswer: 2
    },
    {         //question 18
        question: "I ______ in Britain two years ago but I _____ to France yet.",
        options: [
            "А. was/ haven’t been",
            'В. was/ was',
            'С. have been / was',
            'D. have been/ have not been',

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

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = false;

    if(indexOfPage == questions.length) {
        quizOver();
    } else {
        if(completedAnswers.length > 0) {
            completedAnswers.forEach(item => {
                if(item == randomNumber) {
                    hitDuplicate = true;
                }
            });
            if(hitDuplicate) {
                randomQuestion();
            } else {
                indexOfQuestion = randomNumber;
                load();
            }
        };
        if(completedAnswers.length == 0) {
            indexOfQuestion = randomNumber;
            load();
        }
    };
    completedAnswers.push(indexOfQuestion);
};



const checkAnswer = el => {
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('correct');
        let score = localStorage.getItem(`${user}_score_g4`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_g4`, score);   //change a>c or 1>2

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
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_g4`);  //change a>c or 1>2
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
















