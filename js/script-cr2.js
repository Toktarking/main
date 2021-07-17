

var user = sessionStorage.getItem('user');



//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_c2`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_c2`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_c2`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_c2`);  //change a>c or 1>2



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
        question: 'Үш санының қосындысының мәні 111-ге тең. Осы сандардың ең кішісі ең үлкенінен 15 есе кем, ал үшінші сан мен ең кіші санның айырмасы 9-ға тең. Осы сандарды тап',
        options: [
            'A. 6800',
            'B. 8600',
            'C. 6500',
            "D. 9200",
            'E. 7200',
        ],
        rightAnswer: 4
    },
    {    //question 2
        question: 'Барыс хоккей командасында қарсыластарын негізгі уақытта жеңсе 3 ұпай, қосымша уақытта жеңсе 2 ұпай, негізгі уақытта жеңілсе 0 ұпай, қосымша уақытта жеңілсе 1 ұпай алады. Негізгі уақытта ешкімге жеңілмегені және негізгі уақытта ешкімді жеңбегені белгілі. Кестені салыстыр. <img class="math-pictures" src="img/2.2.png">',
        options: [
            'А. А=2В-6',
            'В. А=2В',
            'С. 2А=2В-1',
            'D. 2А=В-2',
            'Е.  А=2В+6',
        ],
        rightAnswer: 1
    },
    {        //question 3
        question: 'Радиусы 2 см шеңберге іштей сызылған квадраттың ауданы',
        options: [
            'А. 2 см&sup2;',
            'В. 4 см&sup2',
            'С. 8 см&sup2',
            'D. 6 см&sup2',
            'Е. 7 см&sup2',
        ],
        rightAnswer: 2
    },
    {          //question 4

        question: 'Шаршы матадан өлшемі 36*48 (см&sup2;) болатын қима кесіп дайындау керек. Артық қиық қалмайтын болу үшін матаның ең кем дегендегі өлшемі қандай болуы керек?',
        options: [
            'А. 48 см',
            'В. 144 см',
            'С. 1728 см',
            'D. 168 см',
            'Е. 288 см',
        ],
        rightAnswer: 1
    },

    {          //question 5
        question: 'Кестеде мектеп оқушыларының оқу үлгерімі туралы деректер келтірілген <img class="math-pictures" src="img/2.5.png"><img class="math-pictures" src="img/2.5a.png"> ',
        options: [
            'А. А=2В',
            'В. 2A=3B',
            'С. A=4B',
            'D. 2A=B',
            'Е. A=B',
        ],
        rightAnswer: 4
    },
    {          //question 6
        question: 'А мен В шамасын салыстыр.<img class="math-pictures" src="img/2.6.png">',
        options: [
            'А. А шамасы В шамасынан кіші',
            'В. А шамасы В шамасынан үлкен',
            'С. Екі еселенген А шамасы В шамасына тең',
            'D. А шамасы мен В шамасын салыстыруға мәлімет жеткіліксіз',
            'Е. А шамасы В шамасына тең',
        ],
        rightAnswer: 1
    },
    {          //question 7 .
        question: ' 8-дің х% -і 12 болса, х-тің мәні',
        options: [
            'А. 40',
            'В. 80',
            'С. 100',
            'D. 120',
            'Е. 150',
        ],
        rightAnswer: 4
    },
    {         //question 8
        question: '0 < х &le; 5 теңсіздігін қанағаттандыратын аралық',
        options: [
            'А. (-1; 6)',
            'В. (0; 15)',
            'С. (6; 15)',
            'D. [-5; 5]',
            'Е. [3; 4]',
        ],
        rightAnswer: 4
    },
    {          //question 9
        question: 'Суретте көрсетілген егістік жердің ауданы <img class="math-pictures" src="img/2.9.png">',
        options: [
            'А. 2300 м&sup2;',
            'В. 2400 м&sup2;',
            'С. 2500 м&sup2;',
            'D. 2600 м&sup2;',
            'Е. 2700 м&sup2;',
        ],
        rightAnswer: 4
    },
    {         //question 10
        question: 'Қайсы санның 20%-ы 0,2-ге тең?',
        options: [
            'А. 3',
            'В. 4',
            'С. 1',
            'D. 12',
            'Е. 15',
        ],
        rightAnswer: 2
    },
    {         //question 11
       question: 'Электр фендерінің орта бағасын Р, функцияларының көптігін F, сапасын Q және дизайнын D бойынша бағалауға болады. Сонда бағалау рейтінгі келесі формула бойынша жүргізіледі R = 3(F + Q) + D - 0,001Р. Келесі кестеде 4 түрлі феннің маркаларының көрсеткіштері келтірілген: <img class="math-pictures" src="img/2.11.png"> Қай маркалы феннің рейтінгісі ең жоғары',
       options: [
            'А. Б маркасы',
            'В. А маркасы',
            'С. Г маркасы',
            'D. В маркасы',
            'Е. А,Б маркалары',
        ],
        rightAnswer: 0
    },
    {         //question 12
        question: '2 кәмпит және 3 шоколад 100 теңге тұрады, 4 кәмпит және 1 шоколад 50 теңге тұрады. Кәмпит қанша теңге, шоколад қанша теңге тұрады? ',
        options: [
            'А. Кәмпит 5 теңге, шоколад 40 теңге тұрады',
            'В. Кәмпит 2 теңге, шоколад 32 теңге тұрады',
            'С. Кәмпит 30 теңге, шоколад 5 теңге тұрады',
            'D. Кәмпит 20 теңге, шоколад 20 теңге тұрады',
            'Е. Кәмпит 5 теңге, шоколад 30 теңге тұрады',
        ],
        rightAnswer: 4
    },
    {         //question 13
        question: 'Егер а+1 жұп сан болса, онда төмендегі сандардың ішінен тақ емес санды табыңыз',
        options: [
            'А. (4а-3)&sup3;',
            'В. a',
            'С. a+2',
            'D. a&sup3;+4',
            'Е. a-5',
        ],
        rightAnswer: 4
    },
    {         //question 14
        question: ' АВС үшбұрышының СК биіктігі жүргізілген және АК = ВК = 8см. Егер үшбұрыштың периметрі 40 см-ге тең болса, АС және ВС қабырғаларының ұзындықтары қандай?',
        options: [
            'А. 13',
            'В. 12',
            'С. 14',
            'D. 25',
            'Е. 20',
        ],
        rightAnswer: 1
    },
    {         //question 15
        question: ' Тік төртбұрыштың ұзындығы енінен 1,25 есе ұзын. Оның ұзындығы 20% -ке кемітіп, енін 20% -ке арттырғанда, периметрі 2 см-ге кемиді. Тік төртбұрыштың алғашқы ұзындығын табыңыз',
        options: [
            'А. 25',
            'В. 20',
            'С. 24',
            'D. 10',
            'Е. 18',
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
        let score = localStorage.getItem(`${user}_score_c2`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_c2`, score);   //change a>c or 1>2

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
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_c2`);  //change a>c or 1>2
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
















