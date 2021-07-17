


var user = sessionStorage.getItem('user');

const heading = document.querySelectorAll('h5');



//Analytical score
var scoreA1 = document.getElementById('score-a1');    //test 1
var scoreA2 = document.getElementById('score-a2');    //test 2
var scoreA3 = document.getElementById('score-a3');    //test 3
var scoreA4 = document.getElementById('score-a4');    //test 4
var scoreA5 = document.getElementById('score-a5');    //test 5

// Critical score
var scoreC1 = document.getElementById('score-c1');    //test 11
var scoreC2 = document.getElementById('score-c2');    //test 12
var scoreC3 = document.getElementById('score-c3');    //test 13
var scoreC4 = document.getElementById('score-c4');    //test 14
var scoreC5 = document.getElementById('score-c5');    //test 15

//Grammar score
var scoreG1 = document.getElementById('score-g1');    //test 11
var scoreG2 = document.getElementById('score-g2');    //test 12
var scoreG3 = document.getElementById('score-g3');    //test 13
var scoreG4 = document.getElementById('score-g4');    //test 14
var scoreG5 = document.getElementById('score-g5');    //test 15

//Reading score
var scoreR1 = document.getElementById('score-r1');    //test 11
var scoreR2 = document.getElementById('score-r2');    //test 12
var scoreR3 = document.getElementById('score-r3');    //test 13
var scoreR4 = document.getElementById('score-r4');    //test 14
var scoreR5 = document.getElementById('score-r5');    //test 15

//Listening score
var scoreL1 = document.getElementById('score-l1');    //test 11
var scoreL2 = document.getElementById('score-l2');    //test 12
var scoreL3 = document.getElementById('score-l3');    //test 13
var scoreL4 = document.getElementById('score-l4');    //test 14
var scoreL5 = document.getElementById('score-l5');    //test 15




//question ANALYTICAL
var questionA1 = document.getElementById('question-a1');    //test 1
var questionA2 = document.getElementById('question-a2');   //test2
var questionA3 = document.getElementById('question-a3');    //test 3
var questionA4 = document.getElementById('question-a4');    //test 4
var questionA5 = document.getElementById('question-a5');    //test 5

//QUESTION CRITICAL
var questionC1 = document.getElementById('question-c1');    //test 11
var questionC2 = document.getElementById('question-c2');    //test 12
var questionC3 = document.getElementById('question-c3');    //test 13
var questionC4 = document.getElementById('question-c4');    //test 14
var questionC5 = document.getElementById('question-c5');    //test 15

//QUESTION GRAMMAR
var questionG1 = document.getElementById('question-g1');    //test 11
var questionG2 = document.getElementById('question-g2');    //test 12
var questionG3 = document.getElementById('question-g3');    //test 13
var questionG4 = document.getElementById('question-g4');    //test 14
var questionG5 = document.getElementById('question-g5');    //test 15


//QUESTION READING
var questionR1 = document.getElementById('question-r1');    //test 11
var questionR2 = document.getElementById('question-r2');    //test 12
var questionR3 = document.getElementById('question-r3');    //test 13
var questionR4 = document.getElementById('question-r4');    //test 14
var questionR5 = document.getElementById('question-r5');    //test 15
//QUESTION LISTENING
var questionL1 = document.getElementById('question-l1');    //test 11
var questionL2 = document.getElementById('question-l2');    //test 12
var questionL3 = document.getElementById('question-l3');    //test 13
var questionL4 = document.getElementById('question-l4');    //test 14
var questionL5 = document.getElementById('question-l5');    //test 15




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
    scoreA1.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_a1`) + ' / 15'; //change here
    hide(questionA1); //change here

};

// Score 2
if (!localStorage.getItem(`${user}_score_a2`)) {
    localStorage.setItem(`${user}_score_a2`, 0);
};

if (localStorage.getItem(`${user}_score_a2`) == 0) { //change here
    scoreA2.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreA2.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_a2`) + ' / 15'; //change here
    hide(questionA2); //change here
};

// Score 3
if (!localStorage.getItem(`${user}_score_a3`)) {
    localStorage.setItem(`${user}_score_a3`, 0);
};

if (localStorage.getItem(`${user}_score_a3`) == 0) { //change here
    scoreA3.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreA3.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_a3`) + ' / 15'; //change here
    hide(questionA3); //change here
};

// Score 4
if (!localStorage.getItem(`${user}_score_a4`)) {
    localStorage.setItem(`${user}_score_a4`, 0);
};

if (localStorage.getItem(`${user}_score_a4`) == 0) { //change here
    scoreA4.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreA4.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_a4`) + ' / 15'; //change here
    hide(questionA4); //change here
};

// Score 5
if (!localStorage.getItem(`${user}_score_a5`)) {
    localStorage.setItem(`${user}_score_a5`, 0);
};

if (localStorage.getItem(`${user}_score_a5`) == 0) { //change here
    scoreA5.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreA5.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_a5`) + ' / 15'; //change here
    hide(questionA5); //change here
};




// Score 11
if (!localStorage.getItem(`${user}_score_c1`)) {
    localStorage.setItem(`${user}_score_c1`, 0);
};

if (localStorage.getItem(`${user}_score_c1`) == 0) { //change here
    scoreC1.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreC1.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_c1`) + ' / 15'; //change here
    hide(questionC1); //change here
};

// Score 12
if (!localStorage.getItem(`${user}_score_c2`)) {
    localStorage.setItem(`${user}_score_c2`, 0);
};

if (localStorage.getItem(`${user}_score_c2`) == 0) { //change here
    scoreC2.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreC2.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_c2`) + ' / 15'; //change here
    hide(questionC2); //change here
};

// Score 13
if (!localStorage.getItem(`${user}_score_c3`)) {
    localStorage.setItem(`${user}_score_c3`, 0);
};

if (localStorage.getItem(`${user}_score_c3`) == 0) { //change here
    scoreC3.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreC3.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_c3`) + ' / 15'; //change here
    hide(questionC3); //change here
};

// Score 14
if (!localStorage.getItem(`${user}_score_c4`)) {
    localStorage.setItem(`${user}_score_c4`, 0);
};

if (localStorage.getItem(`${user}_score_c4`) == 0) { //change here
    scoreC4.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreC4.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_c4`) + ' / 15'; //change here
    hide(questionC4); //change here
};

// Score 15
if (!localStorage.getItem(`${user}_score_c5`)) {
    localStorage.setItem(`${user}_score_c5`, 0);
};

if (localStorage.getItem(`${user}_score_c5`) == 0) { //change here
    scoreC5.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreC5.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_c5`) + ' / 15'; //change here
    hide(questionC5); //change here
};


// Score g1
if (!localStorage.getItem(`${user}_score_g1`)) {
    localStorage.setItem(`${user}_score_g1`, 0);
};

if (localStorage.getItem(`${user}_score_g1`) == 0) { //change here
    scoreG1.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreG1.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_g1`) + ' / 18'; //change here
    hide(questionG1); //change here
};

// Score 12
if (!localStorage.getItem(`${user}_score_g2`)) {
    localStorage.setItem(`${user}_score_g2`, 0);
};

if (localStorage.getItem(`${user}_score_g2`) == 0) { //change here
    scoreG2.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreG2.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_g2`) + ' / 18'; //change here
    hide(questionG2); //change here
};

// Score 13
if (!localStorage.getItem(`${user}_score_g3`)) {
    localStorage.setItem(`${user}_score_g3`, 0);
};

if (localStorage.getItem(`${user}_score_g3`) == 0) { //change here
    scoreG3.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreG3.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_g3`) + ' / 18'; //change here
    hide(questionG3); //change here
};

// Score 14
if (!localStorage.getItem(`${user}_score_g4`)) {
    localStorage.setItem(`${user}_score_g4`, 0);
};

if (localStorage.getItem(`${user}_score_g4`) == 0) { //change here
    scoreG4.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreG4.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_g4`) + ' / 18'; //change here
    hide(questionG4); //change here
};

// Score 15
if (!localStorage.getItem(`${user}_score_g5`)) {
    localStorage.setItem(`${user}_score_g5`, 0);
};

if (localStorage.getItem(`${user}_score_g5`) == 0) { //change here
    scoreG5.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreG5.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_g5`) + ' / 18'; //change here
    hide(questionG5); //change here
};


// Score R1
if (!localStorage.getItem(`${user}_score_r1`)) {
    localStorage.setItem(`${user}_score_r1`, 0);
};

if (localStorage.getItem(`${user}_score_r1`) == 0) { //change here
    scoreR1.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreR1.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_r1`) + ' / 16'; //change here
    hide(questionR1); //change here
};

// Score 12
if (!localStorage.getItem(`${user}_score_r2`)) {
    localStorage.setItem(`${user}_score_r2`, 0);
};

if (localStorage.getItem(`${user}_score_r2`) == 0) { //change here
    scoreR2.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreR2.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_r2`) + ' / 16'; //change here
    hide(questionR2); //change here
};

// Score 13
if (!localStorage.getItem(`${user}_score_r3`)) {
    localStorage.setItem(`${user}_score_r3`, 0);
};

if (localStorage.getItem(`${user}_score_r3`) == 0) { //change here
    scoreR3.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreR3.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_r3`) + ' / 16'; //change here
    hide(questionR3); //change here
};

// Score 14
if (!localStorage.getItem(`${user}_score_r4`)) {
    localStorage.setItem(`${user}_score_r4`, 0);
};

if (localStorage.getItem(`${user}_score_r4`) == 0) { //change here
    scoreR4.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreR4.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_r4`) + ' / 16'; //change here
    hide(questionR4); //change here
};

// Score 15
if (!localStorage.getItem(`${user}_score_r5`)) {
    localStorage.setItem(`${user}_score_r5`, 0);
};

if (localStorage.getItem(`${user}_score_r5`) == 0) { //change here
    scoreR5.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreR5.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_r5`) + ' / 16'; //change here
    hide(questionR5); //change here
};


// Score L1
if (!localStorage.getItem(`${user}_score_l1`)) {
    localStorage.setItem(`${user}_score_l1`, 0);
};

if (localStorage.getItem(`${user}_score_l1`) == 0) { //change here
    scoreL1.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreL1.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_l1`) + ' / 16'; //change here
    hide(questionL1); //change here
};

// Score 12
if (!localStorage.getItem(`${user}_score_l2`)) {
    localStorage.setItem(`${user}_score_l2`, 0);
};

if (localStorage.getItem(`${user}_score_l2`) == 0) { //change here
    scoreL2.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreL2.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_l2`) + ' / 16'; //change here
    hide(questionL2); //change here
};

// Score 13
if (!localStorage.getItem(`${user}_score_l3`)) {
    localStorage.setItem(`${user}_score_l3`, 0);
};

if (localStorage.getItem(`${user}_score_l3`) == 0) { //change here
    scoreL3.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreL3.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_l3`) + ' / 16'; //change here
    hide(questionL3); //change here
};

// Score 14
if (!localStorage.getItem(`${user}_score_l4`)) {
    localStorage.setItem(`${user}_score_l4`, 0);
};

if (localStorage.getItem(`${user}_score_l4`) == 0) { //change here
    scoreL4.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreL4.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_l4`) + ' / 16'; //change here
    hide(questionL4); //change here
};

// Score 15
if (!localStorage.getItem(`${user}_score_l5`)) {
    localStorage.setItem(`${user}_score_l5`, 0);
};

if (localStorage.getItem(`${user}_score_l5`) == 0) { //change here
    scoreL5.innerHTML = ': (Тест тапсырылмаған)'; //change here
} else {
    scoreL5.innerHTML = 'Тест тапсырылды. Сіздің балл :   ' + localStorage.getItem(`${user}_score_l5`) + ' / 16'; //change here
    hide(questionL5); //change here
};






//questions html
questionA1.onclick = () => {  //change here
    window.location.href = "question-a1.html";
};

questionA2.onclick = () => {  //change here
    window.location.href = "question-a2.html";
};

questionA3.onclick = () => {  //change here
    window.location.href = "question-a3.html";
};

questionA4.onclick = () => {  //change here
    window.location.href = "question-a4.html";
};

questionA5.onclick = () => {  //change here
    window.location.href = "question-a5.html";
};


questionC1.onclick = () => {  //change here
    window.location.href = "question-c1.html";
};

questionC2.onclick = () => {  //change here
    window.location.href = "question-c2.html";
};

questionC3.onclick = () => {  //change here
    window.location.href = "question-c3.html";
};

questionC4.onclick = () => {  //change here
    window.location.href = "question-c4.html";
};

questionC5.onclick = () => {  //change here
    window.location.href = "question-c5.html";
};


//grammar
questionG1.onclick = () => {  //change here
    window.location.href = "question-g1.html";
};

questionG2.onclick = () => {  //change here
    window.location.href = "question-g2.html";
};

questionG3.onclick = () => {  //change here
    window.location.href = "question-g3.html";
};

questionG4.onclick = () => {  //change here
    window.location.href = "question-g4.html";
};

questionG5.onclick = () => {  //change here
    window.location.href = "question-g5.html";
};


//reading
questionR1.onclick = () => {  //change here
    window.location.href = "question-r1.html";
};

questionR2.onclick = () => {  //change here
    window.location.href = "question-r2.html";
};

questionR3.onclick = () => {  //change here
    window.location.href = "question-r3.html";
};

questionR4.onclick = () => {  //change here
    window.location.href = "question-r4.html";
};

questionR5.onclick = () => {  //change here
    window.location.href = "question-r5.html";
};

//listening
questionL1.onclick = () => {  //change here
    window.location.href = "question-l1.html";
};

questionL2.onclick = () => {  //change here
    window.location.href = "question-l2.html";
};

questionL3.onclick = () => {  //change here
    window.location.href = "question-l3.html";
};

questionL4.onclick = () => {  //change here
    window.location.href = "question-l4.html";
};

questionL5.onclick = () => {  //change here
    window.location.href = "question-l5.html";
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








