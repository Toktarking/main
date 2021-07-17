

var user = sessionStorage.getItem('user');



//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_g1`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_g1`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_g1`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_g1`);  //change a>c or 1>2



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
        question: 'The ____ was good.',
        options: [
            'A. news',
            'B. newses',
            "C. news'",
            "D. new's",

        ],
        rightAnswer: 0
    },
    {    //question 2
        question: 'My father works at the university. He is a ____.',
        options: [
            'А. mathematic',
            'В. mathematics',
            'С. maths',
            'D. mathematician',

        ],
        rightAnswer: 3
    },
    {        //question 3
        question: 'He had a ______ holiday last summer.',
        options: [
            'А. month’s',
            'В. monthes',
            'С. months’',
            'D. monthly’',

        ],
        rightAnswer: 0
    },
    {          //question 4

        question: ' __ Altai Mountains are higher than __ Urals.',
        options: [
            'А. The / the',
            'В. The / -',
            'С. - / the',
            'D. - / -',

        ],
        rightAnswer: 0
    },

    {          //question 5
        question: ' ____Lake Baikal is ____deepest of all ___lakes in ___world.',
        options: [
            'А.  a / a / the / a',
            'В. - / the / the / the',
            'С. - /the / - / the',
            'D. - / the / the / a',

        ],
        rightAnswer: 1
    },
    {          //question 6
        question: 'A ‘four’ is a good mark, but a ‘five’ is ____',
        options: [
            'А. better',
            'В. best',
            'С. gooder',
            'D. good',

        ],
        rightAnswer: 0
    },
    {          //question 7 .
        question: 'The weather was _____ than we had expected.',
        options: [
            'А. more good',
            'В. good',
            'С. the best',
            'D. better',

        ],
        rightAnswer: 3
    },
    {         //question 8
        question: 'There’s been some very _____ news lately.',
        options: [
            'А. suprised',
            'В. suprises',
            'С. suprise',
            'D. suprising',

        ],
        rightAnswer: 3
    },
    {          //question 9
        question: 'My name is Frank Stone. I am ___ teacher of English.',
        options: [
            'А. my',
            'В. your',
            'С. our',
            'D. they',

        ],
        rightAnswer: 1
    },
    {         //question 10
        question: 'Can I help you? Yes, please. Help me with ___ question.',
        options: [
            'А. this',
            'В. these',
            'С. those',
            "D. that's",

        ],
        rightAnswer: 0
    },
    {         //question 11
       question: 'That is the house ___ I was born.',
       options: [
            'А. where',
            'В. whom',
            'С. whose',
            'D. which',

        ],
        rightAnswer: 0
    },
    {         //question 12
        question: '________ completed the assignment?',
        options: [
            'А. which',
            'В. whom',
            'С. whose',
            'D. who',

        ],
        rightAnswer: 3
    },
    {         //question 13
        question: 'He changed his phone number to 66-95-43',
        options: [
            'А. sixty six ninety five forty three',
            'В. six and six nine and five four and three',
            'С. six six nine five forty three',
            'D. double six nine five four three',

        ],
        rightAnswer: 3
    },
    {         //question 14
        question: 'Glasgow is _____ largest city in Britain.',
        options: [
            'А. the third',
            'В. three',
            'С. the thirteen',
            'D. the three',

        ],
        rightAnswer: 0
    },
    {         //question 15
        question: '3/9 of the auditoriums in our university are provided with all necessary equipment',
        options: [
            'А. Three nine',
            'В. Three and nine',
            'С. Third nine',
            'D. Three ninths',

        ],
        rightAnswer: 3
    },
    {         //question 16
        question: 'Tom ___ coffee very often.',
        options: [
            'А. is drink',
            'В. is drink',
            'С. drinks',
            'D. is drinking',

        ],
        rightAnswer: 2
    },
    {         //question 17
        question: 'Bob was really happy because he _______ an important business contract.',
        options: [
            'А. had signed',
            'В. has signed',
            'С. has been signing',
            'D. was signed',

        ],
        rightAnswer: 0
    },
    {         //question 18
        question: 'I ______ a few encouraging responses in today’s newspapers to my speech which I ____ last Thursday.',
        options: [
            'А. received / have delivered',
            'В. has received / has delivered',
            'С. have received / delivered',
            'D. have received / have delivered',

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
        let score = localStorage.getItem(`${user}_score_g1`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_g1`, score);   //change a>c or 1>2

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
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_g1`);  //change a>c or 1>2
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
















