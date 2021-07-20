

var user = sessionStorage.getItem('user');


//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_c1`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_c1`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_c1`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_c1`);  //change a>c or 1>2



/* All answer options */
const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4'),
      option5 = document.querySelector('.option5');

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
        question: 'АВСЕ шаршының қабырғасы 4 см, ал оның ауданы СЕD үшбұрышының ауданына тең. D нүктесінен а түзуіне дейінгі қашықтықты тап.<img class="math-pictures" src="img/1.1.png">',
        options: [
            'A. 11 см',
            'B. 12 см',
            'C. 14 см',
            "D. 13 см",
            'E. 10 см',
        ],
        rightAnswer: 1
    },
    {    //question 2
        question: 'Теңсіздікті шешіңіз. <img class="math-pictures" src="img/1.2.png">',
        options: [
            'А. x>1',
            'В. x&le;1',
            'С. x&ge;1',
            'D. x<0',
            'Е. x&le;1;',
        ],
        rightAnswer: 1
    },
    {        //question 3
        question: 'Суретте АN=ВС, АВС - түзу, &ang;АNС=54&deg; ; АNВ бұрышының шамасы <img class="math-pictures" src="img/1.3.png">',
        options: [
            'А. 15&deg;',
            'В. 16&deg;',
            'С. 20&deg;',
            'D. 12&deg;',
            'Е. 14&deg;',
        ],
        rightAnswer: 3
    },
    {          //question 4

        question: 'Төмендегі фигурадағы шаршының ауданы 4см? болса, фигураның ауданын табыңыз. <img class="math-pictures" src="img/1.4.png">',
        options: [
            'А. 80 см&sup2;',
            'В. 82 см&sup2;',
            'С. 90 см&sup2;',
            'D. 88 см&sup2;',
            'Е. 84 см&sup2;',
        ],
        rightAnswer: 4
    },

    {          //question 5 Егер шаршының а см қабырғасы мына аралықта жатса 0,9 < а < 1,2; онда периметрі қай аралықта жатады?
        question: 'Егер шаршының <em>а</em> см қабырғасы мына аралықта жатса <em>0,9 < а < 1,2;</em> онда периметрі қай аралықта жатады?',
        options: [
            'А. 1,8 < P < 2,4',
            'В. 3,9 < P < 4,2',
            'С. 2,7 < P < 3,6',
            'D. 3,6 < P < 4,8',
            'Е. 4,5 < P < 6',
        ],
        rightAnswer: 3
    },
    {          //question 6
        question: '3(х-5)-5(х+3)=6 теңдеуінің шешімі',
        options: [
            'А. 18',
            'В. 20',
            'С. 17',
            'D. -18',
            'Е. -20',
        ],
        rightAnswer: 3
    },
    {          //question 7 .
        question: 'Үш қасқыр екі қойды 40 минутта жесе, алты қасқыр бір қойды жейтін уақыт',
        options: [
            'А. 4 минут',
            'В. 40 минут',
            'С. 20 минут',
            'D. 10 минут',
            'Е. 240 минут',
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
    option5.innerHTML = questions[indexOfQuestion].options[4];

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
        let score = localStorage.getItem(`${user}_score_c1`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_c1`, score);   //change a>c or 1>2

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
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_c1`);  //change a>c or 1>2
    numberOfAllQuestions2.innerHTML = questions.length;

}

const tryAgain = () => {
    window.location.href = `${user}.html`;
}

btnTryAgain.addEventListener('click', tryAgain);

counterSec = 10;
counterSec2 = 5;
counterMin = 4;
counterMin2 = 1;



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
















