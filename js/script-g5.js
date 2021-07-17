

var user = sessionStorage.getItem('user');



//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_g5`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_g5`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_g5`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_g5`);  //change a>c or 1>2



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
        question: "Do you remember _____ ladies we met in Greece last year? What were their names?",
        options: [
            'A. these',
            'B. that',
            'C. this',
            "D. those",

        ],
        rightAnswer: 3
    },
    {    //question 2
        question: "Though __ earth was cold and wet, __ sky was clear and __ sun was shining brightly.",
        options: [
            'А.  the / the / the',
            'В. - / the / the',
            'С.  - / - / -',
            'D. an / a / a',

        ],
        rightAnswer: 0
    },
    {        //question 3
        question: "The man ____ won the Nobel prize was Norwegian.",
        options: [
            'А. who',
            'В. what',
            'С. whom',
            'D. which',

        ],
        rightAnswer: 0
    },
    {          //question 4

        question: "______ are you doing tonight? Let’s go to my place and play video games if you are not busy",
        options: [
            'А. What',
            'В. Where',
            'С. When',
            'D. Who',

        ],
        rightAnswer: 0
    },

    {          //question 5 Егер шаршының а см қабырғасы мына аралықта жатса 0,9 < а < 1,2; онда периметрі қай аралықта жатады?
        question: 'I ____ very long," said Florence. "When __ I __ here? Yesterday?"',
        options: [
            'А. slept / was / coming',
            'В. slept/ have / been coming',
            'С. have slept / have / come',
            'D. have slept / did / come',

        ],
        rightAnswer: 3
    },
    {          //question 6
        question: 'In ______ (2017) Kazakhstan welcomed a lot of visitors who came to see EXPO.',
        options: [
            'А. twenty hundred seventeen',
            'В. twenty seventy',
            'С. two zero one seven',
            'D. twenty seventeen',

        ],
        rightAnswer: 3
    },
    {          //question 7 .
        question: 'Nobody cooks Don’s meals for him. He has to cook _____ .',
        options: [
            'А. himself',
            'В. him',
            'С. his',
            'D. herself',

        ],
        rightAnswer: 0
    },
    {         //question 8
        question: "I go to bed at ten o'clock every day but yesterday I ______ to bed at ten.",
        options: [
            'А. don’t go',
            "В. didn’t go",
            'С. have gone',
            'D. had gone',

        ],
        rightAnswer: 1
    },
    {          //question 9
        question: "She ______ her homework by six o'clock tomorrow and we _____ to the cinema together",
        options: [
            'А. will do / shall go',
            'В. would do / should be going',
            'С. will be doing / shall go',
            'D. will have done / shall go',

        ],
        rightAnswer: 3
    },
    {         //question 10
        question: "He had been a great fencer before the war, __ fencer in Italy.",
        options: [
            'А. the greatest',
            'В. more greater',
            'С. greater',
            'D. the most great',

        ],
        rightAnswer: 0
    },
    {         //question 11
       question: "It was autumn and all around him there were red and yellow fallen _______ .",
       options: [
            'А. leafs',
            'В. leafes',
            'С. lives',
            'D. leaves',

        ],
        rightAnswer: 3
    },
    {         //question 12
        question: "_____ you _____ to see my father? - Yes, I _____ .",
         options: [
            'А. Do / want / am',
            'В. Are / wanting / am',
            'С. Are / want / am',
            'D. Do / want / do',

        ],
        rightAnswer: 3
    },
    {         //question 13
        question: "I am nineteen and my brother is five years older than me: he is ______ .",
        options: [
            'А. twenty-fourth',
            'В. twenty fourth',
            'С. twentieth four',
            'D. twenty-four',

        ],
        rightAnswer: 3
    },
    {         //question 14
        question: "It is remarkable that 70.8 ( ________ ) per cent of teachers in our school are women under 35.",
        options: [
            'А. seventy period eight',
            'В. seventy dot eight',
            'С. seventy-full stop-eight',
            'D. seventy point eight',

        ],
        rightAnswer: 3
    },
    {         //question 15
        question: "The students’ essays ______ (to check) by the end of the week.",
        options: [
            'А. be checking',
            'В. have checked',
            'С. check',
            'D. will have been checked',

        ],
        rightAnswer: 3
    },
    {         //question 16
        question: "I have a good ________ for you: don’t marry him, dear!",
        options: [
            'А. advices',
            'В. piece of advice',
            'С. pieces of advice',
            'D. advice',

        ],
        rightAnswer: 1
    },
    {         //question 17
        question: "This is my ________ room. They are happy to share it.",
        options: [
            'А. children’',
            'В. children’s',
            'С. child’s',
            'D. childrens’s',

        ],
        rightAnswer: 1
    },
    {         //question 18
        question: "You must watch “The Notebook”. It is a very ______ film.",
        options: [
            'А. moving',
            'В. delicious',
            'С. wonderfully',
            'D. excited',

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
        let score = localStorage.getItem(`${user}_score_g5`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_g5`, score);   //change a>c or 1>2

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
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_g5`);  //change a>c or 1>2
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
















