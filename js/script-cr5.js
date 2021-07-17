

var user = sessionStorage.getItem('user');



//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_c5`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_c5`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_c5`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_c5`);  //change a>c or 1>2



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
        question: '(х + 18) : 3 = 20 - 12',
        options: [
            'A. x = 6',
            'B. x = 4',
            'C. x = 8',
            "D. x = 10",
            'E. x = 12',
        ],
        rightAnswer: 0
    },
    {    //question 2
        question: 'Функцияның графиктарының қиылысу нүктелерінің координаталарын табыңдар </br> у = 3.2х + 6 және у = 2.1х - 5',
        options: [
            'А. (-10; 26)',
            'В. (10; -26)',
            'С. (-10; -26)',
            'D. (10; 26)',
            'Е. (10; -24)',
        ],
        rightAnswer: 2
    },
    {        //question 3
        question: 'Сымнан қабырғасы 16 см теңқабырғалы үшбұрыш құрастырылды, егер осы сымды жазып, одан шаршы жасаған болса, осы шаршының ауданын табыңыз',
        options: [
            'А. 144 см&sup2;',
            'В. 81 см&sup2;',
            'С. 100 см&sup2;',
            'D. 256 см&sup2;',
            'Е. 12 см&sup2;',
        ],
        rightAnswer: 0
    },
    {          //question 4

        question: '(х + 3)&sup2; + х + 3 = 0 теңдеуінің шешімі бола алатын сан',
        options: [
            'А. -6',
            'В. -8',
            'С. -10',
            'D. -12',
            'Е. -4',
        ],
        rightAnswer: 4
    },

    {          //question 5 Егер шаршының а см қабырғасы мына аралықта жатса 0,9 < а < 1,2; онда периметрі қай аралықта жатады?
        question: 'Екі компьютердің біреуі 20% пайдамен, ал екіншісі осынша шығынмен сатылғандағы жалпы бағасы 264 мың теңге болды. Нәтижесінде пайда 10% болды. Пайдамен сатылған компьютердің бастапқы бағасы қандай?',
        options: [
            'А. 60 мың',
            'В. 79.2 мың',
            'С. 180 мың',
            'D. 105.6 мың',
            'Е. 211.2 мың',
        ],
        rightAnswer: 2
    },
    {          //question 6
        question: 'Егер 1 < х < у < z болса, онда келесі өрнектердің ішіндегі ең үлкен мән қабылдайтын өрнекті табыңыз',
        options: [
            'А. z(x + 1)',
            'В. x(y + z)',
            'С. y(x + z)',
            'D. z(x + y)',
            'Е. z(y + 1)',
        ],
        rightAnswer: 3
    },
    {          //question 7 .
        question: '1 сағатта Мақсат 10 кг алма, Ербол одан 2 есе, ал Айбек 3 есе артық жинады. Жиналған алмаларын тең бөліп алса, әрқайсына қанша кг алма келеді.',
        options: [
            'А. 12',
            'В. 17',
            'С. 15',
            'D. 29',
            'Е. 20',
        ],
        rightAnswer: 4
    },
    {         //question 8
        question: 'Картоптың бағасы қаңтар айында 30%-ға, ақпан айында 20%-ға көтерілді. Осы екі айдың ішінде картоптың бағасы неше пайызға көтерілді?',
        options: [
            'А. 40%',
            'В. 60%',
            'С. 65%',
            'D. 50%',
            'Е. 56%',
        ],
        rightAnswer: 4
    },
    {          //question 9
        question: 'Екі таңбалы ең үлкен жай санды екі таңбалы ең кіші жай санға бөлгендегі қалдық',
        options: [
            'А. 6',
            'В. 11',
            'С. 7',
            'D. 9',
            'Е. 8',
        ],
        rightAnswer: 3
    },
    {         //question 10
       question: 'Бірінші командада 15, екінші командада 18, үшінші командада 30 адам бар. Жарыс нәтижесінде жеңіп шыққан командада мүшелеріне бірдей етіп сыйлық таратылады және таратылмай қалып қойған сыйлықтар болмауы керек. Сонда ұйымдастырушы кем дегенде қанша сыйлық алуы керек?',
       options: [
            'А. 63',
            'В. 45',
            'С. 90',
            'D. 270',
            'Е. 36',
        ],
        rightAnswer: 2
    },
    {         //question 11
       question: '<img class="math-pictures" src="img/5.11.png">',
       options: [
            'А. В шамасы үлкен',
            'В. А шамасы үлкен',
            'С. Екі шама тең',
            'D. Екі еселенген А шамасы В шамасына тең',
            'Е. Берілген ақпараттан жауабын табу мүмкін емес',
        ],
        rightAnswer: 1
    },
    {         //question 12
        question: '<img class="math-pictures" src="img/5.12.png">',
        options: [
            'А. А шамасы үлкен',
            'В. В шамасы үлкен',
            'С. Екі шама тең',
            'D. Екі еселенген А шамасы В шамасына тең',
            'Е. Берілген ақпараттан жауабын табу мүмкін емес',
        ],
        rightAnswer: 1
    },
    {         //question 13
        question: 'Нүктелердің арақашықтығы бірдей және фигураның периметірі (6&radic;2+28) см болса, онда нүктелердің арақашықтығы .<img class="math-pictures" src="img/5.13.png">',
        options: [
            'А. 1 см',
            'В. 3 см',
            'С. 2 см',
            'D. 4 см',
            'Е. 5 см',
        ],
        rightAnswer: 2
    },
    {         //question 14
        question: '<b>А-1 = В+2 = С-3 = D+4 = Е-5</b> шарты орындалатын болса, А, В, С, D, Е, сандарын салысырыңыз.',
        options: [
            'А. D > А > В < Е < С',
            'В. D > B > A > C > E',
            'С. D > B > A < C < E',
            'D. А < B < C < D < E',
            'Е. D < В < A < C < E',
        ],
        rightAnswer: 4
    },
    {         //question 15
        question: 'Қосындысы 21 және ең кіші ортақ еселігі 36 болатын екі санды табыңыз',
        options: [
            'А. 9; 12',
            'В. 4; 17',
            'С. 6; 18',
            'D. 3; 18',
            'Е. 19; 2',
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
        let score = localStorage.getItem(`${user}_score_c5`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_c5`, score);   //change a>c or 1>2

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
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_c5`);  //change a>c or 1>2
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
















