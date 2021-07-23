
document.getElementById('buy').onclick = () => {
     window.location.href = "https://wa.me/+77778135858/?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%8F%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D1%80%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D1%8B%D0%B9%20%D1%82%D0%B5%D1%81%D1%82!"

};

var user = sessionStorage.getItem('user');

const heading = document.querySelectorAll('h5');



//Analytical score
var scoreA1 = document.getElementById('score-a1');    //test 1



// Critical score
var scoreC1 = document.getElementById('score-c1');    //test 11



//Grammar score
var scoreG1 = document.getElementById('score-g1');    //test 11



//Reading score
var scoreR1 = document.getElementById('score-r1');    //test 11



//Listening score
var scoreL1 = document.getElementById('score-l1');    //test 11






//question ANALYTICAL
var questionA1 = document.getElementById('question-a1');    //test 1



//QUESTION CRITICAL
var questionC1 = document.getElementById('question-c1');    //test 11



//QUESTION GRAMMAR
var questionG1 = document.getElementById('question-g1');    //test 11




//QUESTION READING
var questionR1 = document.getElementById('question-r1');    //test 11


//QUESTION LISTENING
var questionL1 = document.getElementById('question-l1');    //test 11



function hide(something) {
    something.classList.add('not-active');
};



// Score 1
if (!localStorage.getItem(`${user}_score_a1`)) {
    localStorage.setItem(`${user}_score_a1`, 0);
};

if (localStorage.getItem(`${user}_score_a1`) == 0) { //change here
    scoreA1.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreA1.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_a1`) + ' / 7'; //change here
    hide(questionA1); //change here

};




// Score 11
if (!localStorage.getItem(`${user}_score_c1`)) {
    localStorage.setItem(`${user}_score_c1`, 0);
};

if (localStorage.getItem(`${user}_score_c1`) == 0) { //change here
    scoreC1.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreC1.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_c1`) + ' / 7'; //change here
    hide(questionC1); //change here
};



// Score g1
if (!localStorage.getItem(`${user}_score_g1`)) {
    localStorage.setItem(`${user}_score_g1`, 0);
};

if (localStorage.getItem(`${user}_score_g1`) == 0) { //change here
    scoreG1.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreG1.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_g1`) + ' / 5'; //change here
    hide(questionG1); //change here
};



// Score R1
if (!localStorage.getItem(`${user}_score_r1`)) {
    localStorage.setItem(`${user}_score_r1`, 0);
};

if (localStorage.getItem(`${user}_score_r1`) == 0) { //change here
    scoreR1.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreR1.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_r1`) + ' / 5'; //change here
    hide(questionR1); //change here
};




// Score L1
if (!localStorage.getItem(`${user}_score_l1`)) {
    localStorage.setItem(`${user}_score_l1`, 0);
};

if (localStorage.getItem(`${user}_score_l1`) == 0) { //change here
    scoreL1.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreL1.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_l1`) + ' / 5'; //change here
    hide(questionL1); //change here
};



//questions html
questionA1.onclick = () => {  //change here
    window.location.href = "question-demo-a1.html";
};


questionC1.onclick = () => {  //change here
    window.location.href = "question-demo-c1.html";
};


//grammar
questionG1.onclick = () => {  //change here
    window.location.href = "question-demo-g1.html";
};



//reading
questionR1.onclick = () => {  //change here
    window.location.href = "question-demo-r1.html";
};


//listening
questionL1.onclick = () => {  //change here
    window.location.href = "question-demo-l1.html";
};


info = document.querySelector('.info-about');
info.onclick = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
};

thanks = document.getElementById('thank-u');
thanks.onclick = () => {
    document.querySelector('.quiz-over-modal').classList.remove('active');
};





//just function
function open(num) {
    document.querySelectorAll('.article').forEach(arg => {
        arg.style.display = 'none';
    });


    document.querySelector(`#${num}`).style.display = 'block';
    }

        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.game').forEach(argu => {
                argu.onclick = function() {
                    open(this.dataset.num);
                }

            })
        })








