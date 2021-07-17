

var user = sessionStorage.getItem('user');



//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_g3`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_g3`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_g3`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_g3`);  //change a>c or 1>2



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
        question: 'There is some ____in the cup',
        options: [
            'А. cofee',
            'В. cafe',
            'С. coffes',
            'D. coffee',

        ],
        rightAnswer: 3
    },
    {    //question 2
        question: 'Two pieces ______ missing from the bus.',
        options: [
            'А. of luggages was',
            'В. luggages were',
            'С. was luggage',
            'D. of luggage were',

        ],
        rightAnswer: 3
    },
    {        //question 3
        question: "Your _____ friends are here.",
        options: [
            'А. childrens',
            'В. childrens’',
            'С. children’',
            'D. children’s',

        ],
        rightAnswer: 3
    },
    {          //question 4

        question: "___students of our university studies from ___ Monday to __ Friday.",
        options: [
            'А. A / the / -',
            'В. The / - / -',
            'С. - / a / a',
            'D. The/ the/ the',

        ],
        rightAnswer: 1
    },

    {
        question: "___ Nauryz is ___ our national holiday.",
        options: [
            'А. A / the',
            'В. - / -',
            'С. - / the',
            'D. The / the',

        ],
        rightAnswer: 1
    },
    {          //question 6
        question: 'Toyota is _____ than Hyundai. Hyundai is ______ than Toyota.',
        options: [
            'А. expensive, cheaper',
            'В. cheaper, less expensive',
            'С. more expensive, less expensive',
            'D. the most expensive, the least expensive',

        ],
        rightAnswer: 2
    },
    {          //question 7 .
        question: 'Can you walk a bit ____?',
        options: [
            'А. more faster',
            'В. fast',
            'С. faster',
            'D. most fast',

        ],
        rightAnswer: 2
    },
    {         //question 8
        question: 'The film was so _____ that we decided to watch it once again',
        options: [
            'А. flying',
            'В. smoke-dried',
            'С. interesting',
            'D. handwritten',

        ],
        rightAnswer: 2
    },
    {          //question 9
        question: 'You and I are good students, so _____ teacher likes _____',
        options: [
            'А. us / our',
            'В. our / they',
            'С. our / we',
            'D. our / us',

        ],
        rightAnswer: 3
    },
    {         //question 10
        question: " Look at ___ earrings on my palm. Jamie gave them to me.",
        options: [
            'А. these',
            'В. that',
            'С. this',
            'D. those',

        ],
        rightAnswer: 0
    },
    {         //question 11
       question: "The book _____ I lost was very interesting.",
       options: [
            'А. whose',
            'В. who',
            'С. where',
            'D. that',

        ],
        rightAnswer: 3
    },
    {         //question 12
        question: "The foreign people who came to the conference went ___ while they were in the city, because it was too dangerous to walk around.",
        options: [
            'А. anywhere',
            'В. somewhere',
            'С. nowhere',
            'D. where any',

        ],
        rightAnswer: 2
    },
    {         //question 13
        question: "Five times five is _____.",
        options: [
            'А. twenty fifth',
            'В. twenty fife',
            'С. twelve five',
            'D. twenty five',

        ],
        rightAnswer: 3
    },
    {         //question 14
        question: "There were 25 people in the room",
        options: [
            'А. twenty-fivth',
            'В. twenty-fifth',
            'С. twentieth-five',
            'D. twenty-five',

        ],
        rightAnswer: 3
    },
    {         //question 15
        question: "The result of his task’s decision was3/6",
        options: [
            'А. third-sixths',
            'В. three-sixth',
            'С. three-sixths',
            'D. three-six',

        ],
        rightAnswer: 2
    },
    {         //question 16
        question: "I don’t understand this word. What _________________?",
        options: [
            'А. means it',
            'В. does it mean',
            'С. does mean it',
            'D. do mean it',

        ],
        rightAnswer: 1
    },
    {         //question 17
        question: "We got in a traffic jam on the way to the cinema. By the time we came the film ____.",
        options: [
            'А. started',
            'В. have started',
            'С. had been starting',
            'D. had started',

        ],
        rightAnswer: 3
    },
    {         //question 18
        question: "We ______ a binding contract last year and it ____recently.",
        options: [
            'А. signed/has been prolonged',
            'В. have signed/prolonged',
            'С. signed / has prolonged',
            'D. have been signed/prolonged',

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
        let score = localStorage.getItem(`${user}_score_g3`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_g3`, score);   //change a>c or 1>2

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
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_g3`);  //change a>c or 1>2
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
















