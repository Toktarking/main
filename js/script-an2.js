

var user = sessionStorage.getItem('user');



//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_a2`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_a2`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_a2`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_a2`);  //change a>c or 1>2



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
    {
        question: 'Көп нүктенің орнындағы сөзді табыңыз. </br></br> <div class="texts"> Райымжан Марсенов: «Өстіп әдебиетіміз төмендеп, тіл болса кедейленіп бара жатқан уақытта ардақты [...] марқұм шығады» </div>',
        options: [
            'A. Шортанбай',
            'B. Ақан сері',
            'C. Дулат',
            "D. Алтынсарин",
            'E. Абай',
        ],
        rightAnswer: 4
    },
    {
        question: 'Көп нүктенің орнына сәйкес сөзді жазыңыз </br></br> <div class="texts"> Ей, Абылай, Абылай </br> Сені мен көргенде, </br> Тұрымтайдай [...] едің, </br> Түркістанда жүр едің.</div>',
        options: [
            'А. бала',
            'В. ұл',
            'С. адам',
            'D. құл',
            'Е. кісі',
        ],
        rightAnswer: 1
    },
    {
        question: 'Сөйлемді мағынасына сай толықтырыңыз. </br></br> <div class="texts"> Физика - өріс пен заттың жалпы [...] және олардың қозғалыс заттарын зерттейтін ғылым.</div>',
        options: [
            'А. түзілуін',
            'В. күшін',
            'С. қабілетін',
            'D. түрін',
            'Е. қасиеттерін',
        ],
        rightAnswer: 4
    },
    {
        question: "Берілген мәтінге сәйкес тақырыпты таңдаңыз </br></br><div class='texts'> Қазіргі кезде периодтық жүйеде барлық элементтер рет бойынша нөмірленген. Элементтердің нөмірін реттік немесе атомдық нөмірі деп атайды. Химиялық элементтердің периодтық жүйесін құрастырудағы негізгі принцип - барлық элементтердегі периодтар мен топтарға бөліп орналастыру. Әр топ өз кезегіндегі негізгі (а) және (б) топшаларға бөлінеді. Топшалардағы элементтер өзара химиялық қасиеттері жағынан өте ұқсас.</div>",
        options: [
            'А. Топшалар',
            'В. Элементтердің ашылуы',
            'С. Периодтық жүйе',
            'D. Химиялық элементтердің зерттелуі',
            'Е. Химиялық қасиеттері',
        ],
        rightAnswer: 2
    },

    {
        question: "Берілген мәтіннің мақсатын анықтаңыз </br></br><div class='texts'> Қазіргі кезде периодтық жүйеде барлық элементтер рет бойынша нөмірленген. Элементтердің нөмірін реттік немесе атомдық нөмірі деп атайды. Химиялық элементтердің периодтық жүйесін құрастырудағы негізгі принцип - барлық элементтердегі периодтар мен топтарға бөліп орналастыру. Әр топ өз кезегіндегі негізгі (а) және (б) топшаларға бөлінеді. Топшалардағы элементтер өзара химиялық қасиеттері жағынан өте ұқсас.</div>",
        options: [
            'А. Периодтық жүйенің құрылымын көрсету',
            'В. Элементтердің электртерістілігін көрсету',
            'С. Химиялық элементтер ретін анықтау',
            'D. Элементтердің өзара қасиеттерін салыстыру',
            'Е. Химиялық элементтердің құрамын саралау',
        ],
        rightAnswer: 0
    },
    {
        question:"«Ұқсас» сөзіне мағынасы жақын сөзді табыңыз </br></br><div class='texts'> Қазіргі кезде периодтық жүйеде барлық элементтер рет бойынша нөмірленген. Элементтердің нөмірін реттік немесе атомдық нөмірі деп атайды. Химиялық элементтердің периодтық жүйесін құрастырудағы негізгі принцип - барлық элементтердегі периодтар мен топтарға бөліп орналастыру. Әр топ өз кезегіндегі негізгі (а) және (б) топшаларға бөлінеді. Топшалардағы элементтер өзара химиялық қасиеттері жағынан өте ұқсас.</div>",
        options: [
            'А. алыс',
            'В. белгілі',
            'С. танымал',
            'D. үлкен',
            'Е. сәйкес',
        ],
        rightAnswer: 4
    },
    {
        question: "Берілген мәтінге сәйкес тақырыпты таңдаңыз </br></br><div class='texts'> Биология - тіршілік туралы ғылым. Ол тірі ағзалардың құрылысын, қызметін, өсіп дамуын және сыртқы ортамен қарым-қатынасын зерттейді. «Биология» деген терминді алғаш рет 1797 жылы неміс ғалымы Т.Руз (1771-1803) енгізген. Қазіргі биологияны тірі табиғатты және оның құрамдас бөліктерін зерттейтін ғылымдардың жиынтығы деп атауға болады. Себебі биология ғылымының соңғы 30-40 жыл аралығында қарқынды дамуы кейбір биологиялық пәндердің (молекулалық биология, цитогенетика, биофизика, т.б.) жеке-дара ғылым ретінде қалыптасуына мүмкіндік туғызды.</div>",
        options: [
            'А. биолог ғалым',
            'В. ғылыми байланыс',
            'С. биологияның салалары',
            'D. тіршілік туралы ғылым',
            'Е. биологияның зерттелуі',
        ],
        rightAnswer: 3
    },
    {
        question: "Берілген мәтіннің мақсатын анықтаңыз </br></br><div class='texts'> Биология - тіршілік туралы ғылым. Ол тірі ағзалардың құрылысын, қызметін, өсіп дамуын және сыртқы ортамен қарым-қатынасын зерттейді. «Биология» деген терминді алғаш рет 1797 жылы неміс ғалымы Т.Руз (1771-1803) енгізген. Қазіргі биологияны тірі табиғатты және оның құрамдас бөліктерін зерттейтін ғылымдардың жиынтығы деп атауға болады. Себебі биология ғылымының соңғы 30-40 жыл аралығында қарқынды дамуы кейбір биологиялық пәндердің (молекулалық биология, цитогенетика, биофизика, т.б.) жеке-дара ғылым ретінде қалыптасуына мүмкіндік туғызды.</div>",
        options: [
            'А. Биологиялық пәндерге сипаттама жасау',
            'В. Биология ғылымының зерттелуі туралы',
            'С. Биология ғылымы туралы түсінік беру',
            'D. Биологияның бүгінгі таңдағы жетістіктері',
            'Е. Неміс ғалымы Т.Руздің еңбектеріне шолу',
        ],
        rightAnswer: 2
    },
    {
        question: "«Даму» сөзіне мағынасы жақын сөзді табыңыз </br></br><div class='texts'> Биология - тіршілік туралы ғылым. Ол тірі ағзалардың құрылысын, қызметін, өсіп дамуын және сыртқы ортамен қарым-қатынасын зерттейді. «Биология» деген терминді алғаш рет 1797 жылы неміс ғалымы Т.Руз (1771-1803) енгізген. Қазіргі биологияны тірі табиғатты және оның құрамдас бөліктерін зерттейтін ғылымдардың жиынтығы деп атауға болады. Себебі биология ғылымының соңғы 30-40 жыл аралығында қарқынды дамуы кейбір биологиялық пәндердің (молекулалық биология, цитогенетика, биофизика, т.б.) жеке-дара ғылым ретінде қалыптасуына мүмкіндік туғызды.</div>",
        options: [
            'А. Жиналу',
            'В. Озу',
            'С. Жасау',
            'D. Өсу',
            'Е. Кету',
        ],
        rightAnswer: 3
    },
    {
        question: "«қабілеті» сөзіне мағынасы жақын сөзді табыңыз </br></br><div class='texts'>  Адам саусақтарындағы екі сүйектің қосылған жерінде байланыс капсуласы бар. Бұл капсуланың ішінде сүйектердің әрекет етуі барысында сол жерлерді майлайтын бір сұйықтық бар. Бұл сұйықтық оттегі, азот және көміртегі газдарынан құралған. Денеміздің ең оңай тырсылдайтын буындары саусақтарымыз болып табылады. Саусақтарымыз керілген кезде буындар түзеліп, капсула да керіледі. Капсуланың ішіндегі сұйықтықтың қысымы азайып, ғаз көпіршіктері жарылады. Біздің құлағымызға естілетін, міне, осы дыбыстар. Жарылған көпіршіктер нәтижесінде газдар бұл сұйықтықтан бөлініп шығады және сұйықтық тағы да кеңейіп буындардың әрекет ету қабілетін арттырады. Бір сауссағымызды бірнеше рет тарсылдата алмаймыз. Біраз уақыт күтуіміз керек. Өйткені газ көпіршіктері сұйықтықтың ішінде тағы да түзілуі үшін біраз уақыт қажет болады.</div>",
        options: [
            'А. шамасын',
            'В. қызметін',
            'С. сапасын',
            'D. уақытын',
            'Е. қасиетін',
        ],
        rightAnswer: 1
    },
    {
       question: "Берілген мәтінге сәйкес тақырыпты таңдаңыз </br></br><div class='texts'>  Адам саусақтарындағы екі сүйектің қосылған жерінде байланыс капсуласы бар. Бұл капсуланың ішінде сүйектердің әрекет етуі барысында сол жерлерді майлайтын бір сұйықтық бар. Бұл сұйықтық оттегі, азот және көміртегі газдарынан құралған. Денеміздің ең оңай тырсылдайтын буындары саусақтарымыз болып табылады. Саусақтарымыз керілген кезде буындар түзеліп, капсула да керіледі. Капсуланың ішіндегі сұйықтықтың қысымы азайып, ғаз көпіршіктері жарылады. Біздің құлағымызға естілетін, міне, осы дыбыстар. Жарылған көпіршіктер нәтижесінде газдар бұл сұйықтықтан бөлініп шығады және сұйықтық тағы да кеңейіп буындардың әрекет ету қабілетін арттырады. Бір сауссағымызды бірнеше рет тарсылдата алмаймыз. Біраз уақыт күтуіміз керек. Өйткені газ көпіршіктері сұйықтықтың ішінде тағы да түзілуі үшін біраз уақыт қажет болады.</div>",
       options: [
            'А. саусақ дыбысы',
            'В. саусақ сұйықтығы',
            'С. буын сұйықтығы',
            'D. саусақ құрылымы',
            'Е. буын дыбыстары',
        ],
        rightAnswer: 2
    },
    {
       question: "Берілген мәтіннің мақсатын анықтаңыз </br></br><div class='texts'>  Адам саусақтарындағы екі сүйектің қосылған жерінде байланыс капсуласы бар. Бұл капсуланың ішінде сүйектердің әрекет етуі барысында сол жерлерді майлайтын бір сұйықтық бар. Бұл сұйықтық оттегі, азот және көміртегі газдарынан құралған. Денеміздің ең оңай тырсылдайтын буындары саусақтарымыз болып табылады. Саусақтарымыз керілген кезде буындар түзеліп, капсула да керіледі. Капсуланың ішіндегі сұйықтықтың қысымы азайып, ғаз көпіршіктері жарылады. Біздің құлағымызға естілетін, міне, осы дыбыстар. Жарылған көпіршіктер нәтижесінде газдар бұл сұйықтықтан бөлініп шығады және сұйықтық тағы да кеңейіп буындардың әрекет ету қабілетін арттырады. Бір сауссағымызды бірнеше рет тарсылдата алмаймыз. Біраз уақыт күтуіміз керек. Өйткені газ көпіршіктері сұйықтықтың ішінде тағы да түзілуі үшін біраз уақыт қажет болады.</div>",
       options: [
            'А. саусақ тырсылының пайда болуын саралау',
            'В. саусақ тырсылыңң пайда болуын салыстыру',
            'С. саусақ тырсылының пайда болуына мысал келтіру',
            'D. саусақ тырсылының пайда болуын түсіндіру',
            'Е. саусақ тырсылының пайда болуына пікір білдіру',
        ],
        rightAnswer: 3
    },
    {
        question: "«Өлкеде» сөзіне мағынасы жақын сөзді табыңыз </br></br><div class='texts'> Қазақстан жерінде металлургия кәсібі өте ерте заманда пайда болған. Алғашқы қауымдық құрылыстың өзінде Қазақстан жерінде металлургияның белгілі формасы болғаны анықталған. Оралық Қазақстандағы Атасу маңынан көне заманның мыс қорытатын ескі пештерін тапқан. Бұдан 3 мың жыл бұрынғы осынау пештер сол заманда бұл өлкеде металлургияның едәуір дамығанын байқатады. 1767- 1774 жылдары Қазақстанда зерттеген Петер Симон Паллас Алтай тауларында қорғасын, күміс кендерінің қазылған орындары көп екенін айтқан. ХІХ ғасырдан-ақ тау-кен зауыттары пайда бола бастайды. Қазақстан қара және түсті металургиясының қалыптасуы ең алдымен тау-кен зауыты кәсіпорындарынан басталды. Бұл кезде пайдалы кен орындарын игеру үшін ірі-ірі капиталдар жұмсайтын қағамдар құрылады. Қазақстан өнеркәсібі ХХ ғасырдың басында дәуірлеп өсе бастады. </div>",
        options: [
            'А. Салада',
            'В. Ағымда',
            'С. Кезеңде',
            'D. Өңірде',
            'Е. Топта',
        ],
        rightAnswer: 3
    },
    {
        question: "Мәтінге сәйкес ақпаратты табыңыз </br></br><div class='texts'> Қазақстан жерінде металлургия кәсібі өте ерте заманда пайда болған. Алғашқы қауымдық құрылыстың өзінде Қазақстан жерінде металлургияның белгілі формасы болғаны анықталған. Оралық Қазақстандағы Атасу маңынан көне заманның мыс қорытатын ескі пештерін тапқан. Бұдан 3 мың жыл бұрынғы осынау пештер сол заманда бұл өлкеде металлургияның едәуір дамығанын байқатады. 1767- 1774 жылдары Қазақстанда зерттеген Петер Симон Паллас Алтай тауларында қорғасын, күміс кендерінің қазылған орындары көп екенін айтқан. ХІХ ғасырдан-ақ тау-кен зауыттары пайда бола бастайды. Қазақстан қара және түсті металургиясының қалыптасуы ең алдымен тау-кен зауыты кәсіпорындарынан басталды. Бұл кезде пайдалы кен орындарын игеру үшін ірі-ірі капиталдар жұмсайтын қағамдар құрылады. Қазақстан өнеркәсібі ХХ ғасырдың басында дәуірлеп өсе бастады. </div>",
        options: [
            'А. Алтай тауларынан мыс қорыту пештері табылға',
            'В. Атасу маңында тау-кен орны бар',
            'С. Қазақстан металлургиясының қалыптасуы алғашқы дәуірден басталды',
            'D. Елімізле металлургия саласы жетекші орын алады',
            'Е. Тау-кен зауыттық өнеркәсібі 20 ғасырда қалыптаса бастады',
        ],
        rightAnswer: 2
    },
    {
        question: "Мәтінде берілген ойды ары қарай жалғастырыңыз </br></br><div class='texts'> Қазақстан жерінде металлургия кәсібі өте ерте заманда пайда болған. Алғашқы қауымдық құрылыстың өзінде Қазақстан жерінде металлургияның белгілі формасы болғаны анықталған. Оралық Қазақстандағы Атасу маңынан көне заманның мыс қорытатын ескі пештерін тапқан. Бұдан 3 мың жыл бұрынғы осынау пештер сол заманда бұл өлкеде металлургияның едәуір дамығанын байқатады. 1767- 1774 жылдары Қазақстанда зерттеген Петер Симон Паллас Алтай тауларында қорғасын, күміс кендерінің қазылған орындары көп екенін айтқан. ХІХ ғасырдан-ақ тау-кен зауыттары пайда бола бастайды. Қазақстан қара және түсті металургиясының қалыптасуы ең алдымен тау-кен зауыты кәсіпорындарынан басталды. Бұл кезде пайдалы кен орындарын игеру үшін ірі-ірі капиталдар жұмсайтын қағамдар құрылады. Қазақстан өнеркәсібі ХХ ғасырдың басында дәуірлеп өсе бастады. </div>",
        options: [
            'А. пештері салынды',
            'В. байланыс дәуірлей бастады',
            'С. сауда дамыды',
            'D. қоғамдар құрылды',
            'Е. қара және түсті металлургия қалыптасты',
        ],
        rightAnswer: 4
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
        let score = localStorage.getItem(`${user}_score_a2`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_a2`, score);   //change a>c or 1>2

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
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_a2`);  //change a>c or 1>2
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
















