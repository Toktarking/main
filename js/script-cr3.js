

var user = sessionStorage.getItem('user');



//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_c3`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_c3`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_c3`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_c3`);  //change a>c or 1>2



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
        question: 'АВС үшбұрышында: АС = ВС және С бұрышы = 70 градус СВD сыртқы бұрышын табыңыз.',
        options: [
            'А. 125&deg;',
            'В. 115&deg;',
            'С. 120&deg;',
            'D. 130&deg;',
            'Е. 90&deg;',
        ],
        rightAnswer: 0
    },
    {    //question 2
        question: 'Оқушы 16 есепті шығару керек еді. Әрбір шығарылған есебі үшін 5 ұпай қосылады, ал шығарылмаған есебі үшін 3 ұпай азайтылады. Нәтижесінде оқушы 0 ұпай алған болса, оқушы неше есепті шығарған?',
        options: [
            'А. 5',
            'В. 6',
            'С. 7',
            'D. 8',
            'Е. 9',
        ],
        rightAnswer: 1
    },
    {        //question 3
        question: 'Теңбүйірлі тікбұрышты үшбұрыштың ауданы 2см&sup2; болса,онда оның бүйір қабырғасының ұзындығы?',
        options: [
            'А. 0,6 см',
            'В. 0,8 см',
            'С. 2 см',
            'D. 1,6 см',
            'Е. 4 см',
        ],
        rightAnswer: 2
    },
    {          //question 4

        question: 'Егер 567 * 92 = р болса 567 * 91 өрнегінің мәнін табыңыз?',
        options: [
            'А. p + 567',
            'В. p + 1',
            'С. p - 567',
            'D. p - 67',
            'Е. p - 1',
        ],
        rightAnswer: 2
    },

    {          //question 5 Егер шаршының а см қабырғасы мына аралықта жатса 0,9 < а < 1,2; онда периметрі қай аралықта жатады?
        question: 'Анасының жасы 34-те, қызының жасы 8-де. Неше жылдан кейін анасының жасы қызының жасынан екі есесіндей болады.',
        options: [
            'А. 8',
            'В. 18',
            'С. 16',
            'D. 34',
            'Е. 20',
        ],
        rightAnswer: 1
    },
    {          //question 6
        question: 'Түбінің өлшемі 36 х 48 (см&sup2;) болатын қорапқа, бос орын қалмайтындай етіп, қабырғасының ұзындығы қандай кубтерді салған дұрыс',
        options: [
            'А. 9',
            'В. 10',
            'С. 12',
            'D. 11',
            'Е. 13',
        ],
        rightAnswer: 2
    },
    {          //question 7 .
        question: 'В, С, D, Е - натурал сандар. Егер Е+5=С-9=D+2=В-3 теңдігі орындалса, онда сандардың ең үлкені',
        options: [
            'А. B',
            'В. A,C',
            'С. A',
            'D. C',
            'Е. D',
        ],
        rightAnswer: 1
    },
    {         //question 8
        question: 'Төмендегі фигурадағы шаршының ауданы 3 см? болса, фигураның ауданын табыңыз <img class="math-pictures" src="img/3.8.png">',
        options: [
            'А. 75 cм&sup2',
            'В. 90 cм&sup2',
            'С. 102 cм&sup2',
            'D. 105 cм&sup2',
            'Е. 112 cм&sup2',
        ],
        rightAnswer: 3
    },
    {          //question 9
        question: 'Ылғалды бөлмеде тұрған бір қап қанттың бастапқы салмағы 30% артық. Осы қапты қайтадан салмағы 30% кемігенге дейін кептірілген. Сонда ол бастапқы салмағына қаншалықты жуықтайды?',
        options: [
            'А. бастапқы салмағынан 5% кем',
            'В. бастапқы салмағынан 6% кем',
            'С. бастапқы салмағынан 9% кем',
            'D. бастапқы салмағынан 5% артық',
            'Е. бастапқы салмағынан 9% артық',
        ],
        rightAnswer: 2
    },
    {         //question 10
        question: 'Егер 2Х-3 > 1 болса, х-тің ең кіші бүтін мәні',
        options: [
            'А. 2',
            'В. 4',
            'С. 5',
            'D. 3',
            'Е. 6',
        ],
        rightAnswer: 3
    },
    {         //question 11
       question: 'Жоба жасаушы шебер өз тапсырмасын 3 сағатта орындайды,ал оның шәкірті бұл істі 6 сағатта орындайды. Егер шәкірті мен шебер бұл жұмысты бірігіп орындаса неше сағатта бітеді.',
       options: [
            'А. 4',
            'В. 6',
            'С. 1',
            'D. 5',
            'Е. 2',
        ],
        rightAnswer: 4
    },
    {         //question 12
        question: 'Бірінші ыдыста екінші ыдысқа қарағанда 2 есе аз су болған. Бірінші ыдыстан 500г су, ал екінші ыдыстан 6 л су алғаннан кейін, екінші ыдыста бірінші ыдысқа қарағанда 60% артық су қалды. Алғашқы бірінші ыдыста неше литр су болған?',
        options: [
            'А. 18 л',
            'В. 20 л',
            'С. 13 л',
            'D. 26 л',
            'Е. 28 л',
        ],
        rightAnswer: 2
    },
    {         //question 13
        question: 'Көлемдері 60 мл және 90 мл болатын шәй кеселірінің қоюлығы сәйкесінше 15% және 30%. Оларды араластырылған кезде пайда болған стакан шәйінің қоюлығы қандай?',
        options: [
            'А. 29 %',
            'В. 49 %',
            'С. 69 %',
            'D. 39 %',
            'Е. 59 %',
        ],
        rightAnswer: 3
    },
    {         //question 14
        question: '100-ден аспайтын неше натурал сан 2-ге де, 3-ке де, 5-ке де қалдықсыз бөлінетінін табыңыз?',
        options: [
            'А. 7',
            'В. 6',
            'С. 4',
            'D. 8',
            'Е. 3',
        ],
        rightAnswer: 4
    },
    {         //question 15
        question: 'Екпінді ауылы 1999жылы, 1995-2000жылдар арасындағы халық санағының неше пайызын құрайды? <img class="math-pictures" src="img/3.15.png">',
        options: [
            'А. 14,5',
            'В. 12,9',
            'С. 16,7',
            'D. 13,4',
            'Е. 15,6',
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
        let score = localStorage.getItem(`${user}_score_c3`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_c3`, score);   //change a>c or 1>2

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
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_c3`);  //change a>c or 1>2
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
















