

var user = sessionStorage.getItem('user');



//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_r1`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_r1`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_r1`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_r1`);  //change a>c or 1>2



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
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>A daring Pilot</div></br><div class = 'reading-text'> </br></br>In 1929, when aviation was still very new a French pilot and novelist – Antoine de St. Exupery – took on a job that changed the mail service in South America. He set up an air mail route that joined the cities of South America and cut the delivery time of mail from several months to a few days.</br></br>Delivering the mail by the air was not a new idea in 1929, but it was still very dangerous. Flying was full of dangers. The aviation technology we have today wasn’t invented yet. Pilots had to use simple instruments such as compasses and road maps. Airplanes had small engines and lost a lot of power when they flew at high altitudes. These planes couldn’t fly over heights, so mountains, tall buildings, and even trees were dangerous. Also, these small planes didn’t have enough power to fly above storms and bad weather. They had to go through them. Once he was in the storm, the pilot couldn’t navigate. So when he came out of the clouds, he was lost. </br></br>The rugged landscape made St. Exupery’s job very dangerous. He and his men had to fly over high mountains, deserts, and rain forests. Large areas had almost no people, and there were few roads. So even when a lost pilot landed safely, he had little chance to survive. </br></br>St. Exupery’s, however, welcomed all these difficulties. He believed that people are most alive when they are risking their lives. In 1944 he joined the French air force in North Africa. Like the pilot in his novel, Night Flight, he disappeared while flying a mission. No trace of him or his plane was ever found. </div><div class=reading-question>Flying was full of_______ when they flew at high altitudes.</div>",
        options: [
            'A. technology',
            'B. compasses',
            'C. instruments',
            "D. risks",

        ],
        rightAnswer: 3
    },
    {    //question 2
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>A daring Pilot</div></br><div class = 'reading-text'> </br></br>In 1929, when aviation was still very new a French pilot and novelist – Antoine de St. Exupery – took on a job that changed the mail service in South America. He set up an air mail route that joined the cities of South America and cut the delivery time of mail from several months to a few days.</br></br>Delivering the mail by the air was not a new idea in 1929, but it was still very dangerous. Flying was full of dangers. The aviation technology we have today wasn’t invented yet. Pilots had to use simple instruments such as compasses and road maps. Airplanes had small engines and lost a lot of power when they flew at high altitudes. These planes couldn’t fly over heights, so mountains, tall buildings, and even trees were dangerous. Also, these small planes didn’t have enough power to fly above storms and bad weather. They had to go through them. Once he was in the storm, the pilot couldn’t navigate. So when he came out of the clouds, he was lost. </br></br>The rugged landscape made St. Exupery’s job very dangerous. He and his men had to fly over high mountains, deserts, and rain forests. Large areas had almost no people, and there were few roads. So even when a lost pilot landed safely, he had little chance to survive. </br></br>St. Exupery’s, however, welcomed all these difficulties. He believed that people are most alive when they are risking their lives. In 1944 he joined the French air force in North Africa. Like the pilot in his novel, Night Flight, he disappeared while flying a mission. No trace of him or his plane was ever found. </div><div class=reading-question>According to the text, to those small airplanes even______ were unsafe.</div>",
        options: [
            'А. road maps',
            'В. mountains',
            'С. good weather',
            'D. trees',

        ],
        rightAnswer: 3
    },
    {        //question 3
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>A daring Pilot</div></br><div class = 'reading-text'> </br></br>In 1929, when aviation was still very new a French pilot and novelist – Antoine de St. Exupery – took on a job that changed the mail service in South America. He set up an air mail route that joined the cities of South America and cut the delivery time of mail from several months to a few days.</br></br>Delivering the mail by the air was not a new idea in 1929, but it was still very dangerous. Flying was full of dangers. The aviation technology we have today wasn’t invented yet. Pilots had to use simple instruments such as compasses and road maps. Airplanes had small engines and lost a lot of power when they flew at high altitudes. These planes couldn’t fly over heights, so mountains, tall buildings, and even trees were dangerous. Also, these small planes didn’t have enough power to fly above storms and bad weather. They had to go through them. Once he was in the storm, the pilot couldn’t navigate. So when he came out of the clouds, he was lost. </br></br>The rugged landscape made St. Exupery’s job very dangerous. He and his men had to fly over high mountains, deserts, and rain forests. Large areas had almost no people, and there were few roads. So even when a lost pilot landed safely, he had little chance to survive. </br></br>St. Exupery’s, however, welcomed all these difficulties. He believed that people are most alive when they are risking their lives. In 1944 he joined the French air force in North Africa. Like the pilot in his novel, Night Flight, he disappeared while flying a mission. No trace of him or his plane was ever found. </div><div class=reading-question>In 1929 a French pilot and novelist _____________ in South America.</div>",
        options: [
            "А. flew at low altitudes",
            "В. used engines and instruments",
            "С. flew under storms and bad weather",
            "D. took on a job that changed the mail facility",

        ],
        rightAnswer: 3
    },
    {          //question 4

        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>A daring Pilot</div></br><div class = 'reading-text'> </br></br>In 1929, when aviation was still very new a French pilot and novelist – Antoine de St. Exupery – took on a job that changed the mail service in South America. He set up an air mail route that joined the cities of South America and cut the delivery time of mail from several months to a few days.</br></br>Delivering the mail by the air was not a new idea in 1929, but it was still very dangerous. Flying was full of dangers. The aviation technology we have today wasn’t invented yet. Pilots had to use simple instruments such as compasses and road maps. Airplanes had small engines and lost a lot of power when they flew at high altitudes. These planes couldn’t fly over heights, so mountains, tall buildings, and even trees were dangerous. Also, these small planes didn’t have enough power to fly above storms and bad weather. They had to go through them. Once he was in the storm, the pilot couldn’t navigate. So when he came out of the clouds, he was lost. </br></br>The rugged landscape made St. Exupery’s job very dangerous. He and his men had to fly over high mountains, deserts, and rain forests. Large areas had almost no people, and there were few roads. So even when a lost pilot landed safely, he had little chance to survive. </br></br>St. Exupery’s, however, welcomed all these difficulties. He believed that people are most alive when they are risking their lives. In 1944 he joined the French air force in North Africa. Like the pilot in his novel, Night Flight, he disappeared while flying a mission. No trace of him or his plane was ever found. </div><div class=reading-question>Airplanes lost a lot of power flying at high altitudes because of their _____.</div>",
        options: [
            'А. enough engines',
            'В. small devices',
            'С. no instruments',
            'D. large areas',

        ],
        rightAnswer: 1
    },

    {          //question 5 Егер шаршының а см қабырғасы мына аралықта жатса 0,9 < а < 1,2; онда периметрі қай аралықта жатады?
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>A daring Pilot</div></br><div class = 'reading-text'> </br></br>In 1929, when aviation was still very new a French pilot and novelist – Antoine de St. Exupery – took on a job that changed the mail service in South America. He set up an air mail route that joined the cities of South America and cut the delivery time of mail from several months to a few days.</br></br>Delivering the mail by the air was not a new idea in 1929, but it was still very dangerous. Flying was full of dangers. The aviation technology we have today wasn’t invented yet. Pilots had to use simple instruments such as compasses and road maps. Airplanes had small engines and lost a lot of power when they flew at high altitudes. These planes couldn’t fly over heights, so mountains, tall buildings, and even trees were dangerous. Also, these small planes didn’t have enough power to fly above storms and bad weather. They had to go through them. Once he was in the storm, the pilot couldn’t navigate. So when he came out of the clouds, he was lost. </br></br>The rugged landscape made St. Exupery’s job very dangerous. He and his men had to fly over high mountains, deserts, and rain forests. Large areas had almost no people, and there were few roads. So even when a lost pilot landed safely, he had little chance to survive. </br></br>St. Exupery’s, however, welcomed all these difficulties. He believed that people are most alive when they are risking their lives. In 1944 he joined the French air force in North Africa. Like the pilot in his novel, Night Flight, he disappeared while flying a mission. No trace of him or his plane was ever found. </div><div class=reading-question>The time he was misplaced when he was out of the ___________.</div>",
        options: [
            'А. clouds',
            'В. maps',
            'С. storms',
            'D. compasses',

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
        let score = localStorage.getItem(`${user}_score_r1`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_r1`, score);   //change a>c or 1>2

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
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_r1`);  //change a>c or 1>2
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
















