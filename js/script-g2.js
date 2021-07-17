

var user = sessionStorage.getItem('user');



//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_g2`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_g2`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_g2`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_g2`);  //change a>c or 1>2



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
        question: "The spaghetti _____ ready and there _____ a lot of ______.",
        options: [
            'A. is / are / it',
            'B. are / are / them',
            'C. are / is / them',
            "D. is / is / it",

        ],
        rightAnswer: 3
    },
    {    //question 2
        question: '_____ people were already on the beach, and there were a ______ empty spaces.',
        options: [
            'А. many / few',
            'В. few / lot',
            'С. lots of / little',
            'D. much / little',

        ],
        rightAnswer: 0
    },
    {        //question 3
        question:  "The right variant of the sentence is ______",
        options: [
            "А. The boys' clothes's",
            "В. The clothes of the boys’s",
            "С. The boys's clothes",
            "D. The boys' clothes",

        ],
        rightAnswer: 3
    },
    {          //question 4

        question: " ___ Seychelles are a group of islands in ___ Indian Ocean.",
        options: [
            'А. The, the',
            'В. -, the',
            'С. The, -',
            'D. -, an',

        ],
        rightAnswer: 0
    },

    {          //question 5 Егер шаршының а см қабырғасы мына аралықта жатса 0,9 < а < 1,2; онда периметрі қай аралықта жатады?
        question: "There is ___ splendid ___ view of ___ Lake Geneva from this hotel.",
        options: [
            'А. a /- / -',
            'В. the / - / the',
            'С. - / - /the',
            'D. the / a / -',

        ],
        rightAnswer: 0
    },
    {          //question 6
        question: "Men aged 60 to 68 run on average four minutes ___ than women.",
        options: [
            'А. fastly',
            'В. the fastest',
            'С. faster',
            'D. more fast',

        ],
        rightAnswer: 2
    },
    {          //question 7 .
        question: 'The state examination was ______ than we expected',
        options: [
            'А. more tiring',
            'В. tiring',
            'С. most tiring',
            'D. tiringer',

        ],
        rightAnswer: 0
    },
    {         //question 8
        question: 'Julia is very ___ in politics.',
        options: [
            'А. exciting',
            'В. delighted',
            'С. interested',
            'D. worried',

        ],
        rightAnswer: 2
    },
    {          //question 9
        question: 'I think your flowers are more beautiful than ____.',
        options: [
            'А. her',
            'В. our',
            'С. theirs',
            'D. us',

        ],
        rightAnswer: 2
    },
    {         //question 10
        question: "____ tables are designed for preschool children.",
        options: [
            'А. Those',
            'В. That',
            'С. There',
            'D. This',

        ],
        rightAnswer: 0
    },
    {         //question 11
       question: 'The play station ______ I bought last month has been broken.',
       options: [
            'А. when',
            'В. who',
            'С. which',
            'D. whom',

        ],
        rightAnswer: 2
    },
    {         //question 12
        question: 'At the end of the party there was ____ ice left in the tin.',
        options: [
            'А. no any',
            'В. nothing',
            'С. not',
            'D. no',

        ],
        rightAnswer: 3
    },
    {         //question 13
        question: "Fifty-three plus sixty-eight is ______.",
        options: [
            'А. one hundred and twenty one',
            'В. one hundred and one',
            'С. hundred and thirty one',
            'D. one hundred two one',

        ],
        rightAnswer: 0
    },
    {         //question 14
        question: "It’s on Monday 15th of September",
        options: [
            'А. fifth',
            'В. fifteenth',
            'С. fiftieth',
            'D. fifteenths',

        ],
        rightAnswer: 1
    },
    {         //question 15
        question: 'The athlete’s result in high-jump was 2.105 cm',
        options: [
            'А. two point one hundred five',
            'В. two points one zero five',
            'С. two point one zero five',
            'D. two point’s one zero five',

        ],
        rightAnswer: 2
    },
    {         //question 16
        question: 'Please don’t make so much noise! I _____.',
        options: [
            'А. am working',
            'В. ’s worked',
            'С. work',
            'D. ’m not working',

        ],
        rightAnswer: 0
    },
    {         //question 17
        question: 'The house-maid ______ the window when it ______ raining.',
        options: [
            'А. cleaned/ started',
            'В. was cleaning/ was starting',
            'С. was cleaning/ started',
            'D. cleaned/ had started',

        ],
        rightAnswer: 2
    },
    {         //question 18
        question: 'I ______ what I’m looking for.',
        options: [
            'А. haven’t found',
            'В. ’m not finding',
            'С. didn’t found',
            'D. will be finding',

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
        let score = localStorage.getItem(`${user}_score_g2`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_g2`, score);   //change a>c or 1>2

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
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_g2`);  //change a>c or 1>2
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
















