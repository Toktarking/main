

var user = sessionStorage.getItem('user');



//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_c4`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_c4`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_c4`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_c4`);  //change a>c or 1>2



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
        question: '3х-5=х-5, бұл есептің шешімі. ',
        options: [
            'A. 0',
            'B. 1',
            'C. 2',
            "D. 3",
            'E. 4',
        ],
        rightAnswer: 0
    },
    {    //question 2
        question: 'Егер 3х - 4 &le; 5 болса, х -тің ең үлкен бүтін мәні',
        options: [
            'А. 1',
            'В. 6',
            'С. 2',
            'D. 3',
            'Е. 5',
        ],
        rightAnswer: 3
    },
    {        //question 3
        question: '3 саны мен 2 санының ең болмағанда біреуіне бөлінетін 100 санынан кіші болатын қанша натурал сан бар? ',
        options: [
            'А. 65',
            'В. 66',
            'С. 64',
            'D. 56',
            'Е. 55',
        ],
        rightAnswer: 1
    },
    {          //question 4

        question: 'Сыбайлас бұрыштарының шамасы сәйкесінше 3х және 6х болса, х- тің мәні',
        options: [
            'А. 30 &deg;',
            'В. 40 &deg;',
            'С. 20 &deg;',
            'D. 60 &deg;',
            'Е. 50 &deg;',
        ],
        rightAnswer: 2
    },

    {          //question 5
        question: 'Қазір әкесі 34 жаста, баласы 11 жаста, неше жылдан кейін әкесінің жасы баласының жасынан 2 есе артық болады? ',
        options: [
            'А. 14',
            'В. 15',
            'С. 12',
            'D. 16',
            'Е. 18',
        ],
        rightAnswer: 4
    },
    {          //question 6
        question: 'Трактордың дөңгелегі 900 метр қашықтықты өту үшін 150 айналым жасайды, ал жеңіл мәшиненің дөңгелегі 2 есе көп айналады. Жеңіл мәшине дөңгелегіне 300 метр қашықтықты өтуге керекті айналым саны.',
        options: [
            'А. 150',
            'В. 200',
            'С. 300',
            'D. 50',
            'Е. 100',
        ],
        rightAnswer: 4
    },
    {          //question 7 .
        question: 'Жүзім кебу барысында мейізге айналатыны белгілі. Жүзімнің құрамында 86 пайыз су бар екені белгілі болса, 60 кг жүзімнен алынатын мейіз мөлшері',
        options: [
            'А. 8.2 кг',
            'В. 8.4 кг',
            'С. 8.2 кг',
            'D. 8.8 кг',
            'Е. 8.6 кг',
        ],
        rightAnswer: 1
    },
    {         //question 8
        question: 'Егер 3х - 2 &le; 4 болса, х-тің ең үлкен бүтін мәні ',
        options: [
            'А. 3',
            'В. 4',
            'С. 5',
            'D. 6',
            'Е. 2',
        ],
        rightAnswer: 4
    },
    {          //question 9
        question: 'Берілген дөңгелектің ауданы 12см&sup2; болса боялған бөліктің ауданы неге тең?<img class="math-pictures" src="img/4.9.png">',
        options: [
            'А. 7 cм&sup2;',
            'В. 7.5 cм&sup2;',
            'С. 4.5 cм&sup2;',
            'D. 3 cм&sup2;',
            'Е. 4 cм&sup2;',
        ],
        rightAnswer: 2
    },
    {         //question 10
        question: ' Біреуі екіншісінен 8 ге артынан натурал санның көбейтіндісі 240 қа тең. Екі санды табыңыз.',
        options: [
            'А. 14; 22',
            'В. 16; 24',
            'С. 18; 26',
            'D. 20; 28',
            'Е. 12; 20',
        ],
        rightAnswer: 4
    },
    {         //question 11
       question: 'Тең бүйірлі үшбұрыштың табаны бүйір қабырғасынан 15 см-ге артық, ал периметірі 75 см. Үшбұрыштың табанының ұзындығын табыңыз',
       options: [
            'А. 20',
            'В. 35',
            'С. 17',
            'D. 15',
            'Е. 18',
        ],
        rightAnswer: 1
    },
    {         //question 12
        question: 'Лабораторияда қандай да бір сұйықты 200 миллилитрлік құтыға құятын екі өлшеуіш прибор бар. Екі прибордың қаншалықты дәл екенін анықтау үшін, Лабораторияда қандай да бір сұйықты 200 милилитрлік жұмыс істеуін тексеру мақсатында, әрқайсымен 10 реттен алып өлшегенде нәтиже төмендегідей болған <img class="math-pictures" src="img/4.12.png">',
        options: [
            'А. А шамасы мен В шамасын салыстыруға мәлімет жеткіліксіз',
            'В. Екі еселенген А шамасы В шамасына тең',
            'С. А шамасы В шамасынан тең',
            'D. А шамасы В шамасынан кіші',
            'Е. А шамасы В шамасынан үлкен',
        ],
        rightAnswer: 2
    },
    {         //question 13
        question: 'Көлемдері 105 см&sup3; және 30 см&sup3; қораптың табан аудандары бірдей және барлық өлшемдері жай сандар. Қораптардың биіктіктері қандай?',
        options: [
            'А. 5 cм, 2 cм',
            'В. 5 cм, 3 cм',
            'С. 7 cм, 3 cм',
            'D. 7 cм, 5 cм',
            'Е. 7 cм, 2 cм',
        ],
        rightAnswer: 4
    },
    {         //question 14
        question: 'Әкесі 450 метр қашықтықты өту үшін 500 қадам, ал баласы одан 3 есе көп қадам жасаса, баланың бір қадамының өлшемі',
        options: [
            'А. 31 cм',
            'В. 28 cм',
            'С. 32 cм',
            'D. 30 cм',
            'Е. 29 cм',
        ],
        rightAnswer: 3
    },
    {         //question 15
        question: ' Велосипедтің бағасы 50 000 теңге еді. Мамыр мейрамы қарсаңында х пайызбен жеңілдік жасалғандықтын оның жаңа бағасы 40 000 теңге болды. Жеңілдіктің пайыздық мөлшері қандай?',
        options: [
            'А. 14%',
            'В. 16%',
            'С. 18%',
            'D. 20%',
            'Е. 22%',
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
        let score = localStorage.getItem(`${user}_score_c4`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_c4`, score);   //change a>c or 1>2

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
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_c4`);  //change a>c or 1>2
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
















