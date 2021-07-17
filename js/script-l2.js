

var user = sessionStorage.getItem('user');



//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_l2`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_l2`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_l2`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_l2`);  //change a>c or 1>2



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
        question: "Shop workers _________ do physical tasks.",
        options: [
            "A. hardly ever",
            "B. usually",
            "C. never",
            "D. rarely",

        ],
        rightAnswer: 1
    },
    {    //question 2
        question: "Shop workers have a computer, telephone and various ________ on their desks.",
        options: [
            "A. boxes",
            "B. samples",
            "C. hammers",
            "D. tools",

        ],
        rightAnswer: 3
    },
    {        //question 3
        question: "The desks of shop workers are used for a number of _________.",
        options: [
            "A. goals",
            "B. reasons",
            "C. measures",
            "D. purposes",

        ],
        rightAnswer: 3
    },
    {          //question 4

        question: "Shop workers’ jobs ____________ greasy equipment.",
        options: [
            "A. exclude",
            "B. contain",
            "C. avoid",
            "D. involve",

        ],
        rightAnswer: 3
    },

    {          //question 5 Егер шаршының а см қабырғасы мына аралықта жатса 0,9 < а < 1,2; онда периметрі қай аралықта жатады?
        question: "Shop workers are _________ to do reports or make telephone calls.",
        options: [
            "A. taught",
            "B. not required",
            "C. not permitted",
            "D. required",

        ],
        rightAnswer: 3
    },
    {          //question 6
        question: "Shop workers often _____a computer and telephone at work.",
        options: [
            "A. don`t need",
            "B. don`t use",
            "C. need",
            "D. sell",

        ],
        rightAnswer: 2
    },
    {          //question 7 .
        question: "Shop workers don't clean their ________ too often.",
        options: [
            "A. desks",
            "B. rooms",
            "C. tools",
            "D. cups",

        ],
        rightAnswer: 0
    },
    {         //question 8
        question: "You will be surprised how dirty a ________ worker's desk is in many machine shops.",
        options: [
            "A. office",
            "B. social",
            "C. school",
            "D. shop",

        ],
        rightAnswer: 3
    },
    {          //question 9
        question: "Alex and Barbara are mainly talking about relaxing after ________",
        options: [
            "A. work",
            "B. mountains",
            "C. reading",
            "D. study",

        ],
        rightAnswer: 0
    },
    {         //question 10
        question: "Alex likes to see _____ from his balcony.",
        options: [
            "A. fitness center",
            "B. soap opera",
            "C. gym",
            "D. mountains",

        ],
        rightAnswer: 3
    },
    {         //question 11
       question: "Alex likes ______ more than sports.",
        options: [
            "A. detective films",
            "B. clubbing",
            "C. hot baths",
            "D. live performing",

        ],
        rightAnswer: 1
    },
    {         //question 12
        question: "One reason Barbara gives in favor of fitness on Friday is that the next day is ________.",
        options: [
            "A. exhausting",
            "B. a working day",
            "C. Sunday",
            "D. Saturday",

        ],
        rightAnswer: 3
    },
    {         //question 13
        question: "Alex ______________ Barbara’s idea to go to fitness.",
        options: [
            "A. rejects",
            "B. loves",
            "C. likes",
            "D. prefers",

        ],
        rightAnswer: 0
    },
    {         //question 14
        question: "After a really bad day Alex _________",
        options: [
            "A. reads his favorite book",
            "B. goes dancing",
            "C. watches comedies",
            "D. reads one of his newspapers",

        ],
        rightAnswer: 0
    },
    {         //question 15
        question: "Alex loves Fridays because of the ability to _________.",
        options: [
            "A. do sports",
            "B. go clubbing",
            "C. weekend is far",
            "D. go jogging",

        ],
        rightAnswer: 1
    },
    {         //question 16
        question: "Alex is lazy to do sports because it takes ________",
        options: [
            "A. time, drive and gift",
            "B. time, gift and strength",
            "C. talent, energy and strength",
            "D. time, energy and strength",

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


    numberOfQuestion.innerHTML = indexOfPage + 1;   // setting page
    indexOfPage++; // increasing index of page
};

let completedAnswers = [];



let numbers = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17
    ];

let numberPumber = 0;


const randomQuestion = () => {



    let randomNumber = numbers[numberPumber];
    if(indexOfPage == questions.length) {
        quizOver();
    }
    if(completedAnswers.length > 0) {

        indexOfQuestion = randomNumber;
        load();
    }
    if(completedAnswers.length == 0) {

            indexOfQuestion = randomNumber;

            load();
    };
    completedAnswers.push(indexOfQuestion);
};





const checkAnswer = el => {
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('correct');
        let score = localStorage.getItem(`${user}_score_l2`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_l2`, score);   //change a>c or 1>2

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
        numberPumber++;
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
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_l2`);  //change a>c or 1>2
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
















