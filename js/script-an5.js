

var user = sessionStorage.getItem('user');



//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_a5`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_a5`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_a5`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_a5`);  //change a>c or 1>2



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
        question: 'Сөйлемді мағынасына сай толықтырыңыз. </br></br> <div class="texts"> Райымжан Марсенов: Қала аумағының жер бедерінен айтарлықтай еңіс немесе көзге шалынардай .... байқалмайды </div>',
        options: [
            'A. өр',
            'B. халық',
            'C. топ',
            "D. жануар",
            'E. шөп',
        ],
        rightAnswer: 0
    },
    {
        question: 'Көп нүктенің орнына сәйкес сөзді жазыңыз </br></br> <div class="texts"> Уа, Сұраншы [...] батырым! Қоқанның қолы қаптады, Қасиетті жерімді - Тозақ қылыптаптадың </div>',
        options: [
            'А. Райымбек',
            'В. Өтеген',
            'С. Қарасай',
            'D. Байсейіт',
            'Е. Саурық',
        ],
        rightAnswer: 4
    },
    {
        question: 'Көп нүктенің орынана сәйкес сөзді жазыңыз. </br></br> <div class="texts"> Мәшһүр Жүсіп Көпейұлы: «Батырда Қаракерей Қабанбайдан асқан батыр жоқ, [...] Төле биден асқан би жоқ». </div>',
        options: [
            'А. Суанда',
            'В. Үйсінде',
            'С. Қарада',
            'D. Төреде',
            'Е. Арғында',
        ],
        rightAnswer: 1
    },
    {
        question: "«Көрегендік» сөзіне мағынасы жақын сөзді табыңыз </br></br><div class='texts'> Осыдан 400 жылдай бұрын табиғатты зерттеуші ұлы ғалым Галилео Галилей математиканың барлық ғылымдардың ортақ тілі екендігін ерекше атап көрсеткен, сөйтіп «Философия ұланғайыр кітапта - ұлы Табиғатта жазылған дүние, оның беттері әрқашан және әркімге де ашық. Бірақ оны, оның тілін және жазылға таңба-символдарын меңгерген адам ғана түсіне алады. Бұл ұлы кітап математика тілінде жазылған, ал оның таңбалары - математикалық формулалар» - деген болатын. Оның ғасырлар асып бізге жеткен бұл көрегендігін кейінде басқа көптеген ғалымдар да растады. Математика әлдеқашан дүниені танудың сапалық жақтарын зерттейтін физика, химия, биология, астрономия сияқты ғылымдардың күнделікті қолданатын зерттеу құралына айналған, қазіргі кезде еш дау тудырмас ақиқатқа айналып отыр. </div>",
        options: [
            'А. ақылдылақ',
            'В. көргіштік',
            'С. тапқырлық',
            'D. болжағыштық',
            'Е. танымал',
        ],
        rightAnswer: 0
    },

    {
        question: "Берілген мәтінге сәйкес тақырыпты таңдаңыз </br></br><div class='texts'> Осыдан 400 жылдай бұрын табиғатты зерттеуші ұлы ғалым Галилео Галилей математиканың барлық ғылымдардың ортақ тілі екендігін ерекше атап көрсеткен, сөйтіп «Философия ұланғайыр кітапта - ұлы Табиғатта жазылған дүние, оның беттері әрқашан және әркімге де ашық. Бірақ оны, оның тілін және жазылға таңба-символдарын меңгерген адам ғана түсіне алады. Бұл ұлы кітап математика тілінде жазылған, ал оның таңбалары - математикалық формулалар» - деген болатын. Оның ғасырлар асып бізге жеткен бұл көрегендігін кейінде басқа көптеген ғалымдар да растады. Математика әлдеқашан дүниені танудың сапалық жақтарын зерттейтін физика, химия, биология, астрономия сияқты ғылымдардың күнделікті қолданатын зерттеу құралына айналған, қазіргі кезде еш дау тудырмас ақиқатқа айналып отыр. </div>",
        options: [
            'А. Дүниені тану құралы',
            'В. Зерттеу құралдары',
            'С. Философия ғылымы',
            'D. Математика - ғылымының ортақ тілі',
            'Е. Табиғат құбылыстары туралы',
        ],
        rightAnswer: 3
    },
    {
        question: "Берілген мәтіннің мақсаты </br></br><div class='texts'> Осыдан 400 жылдай бұрын табиғатты зерттеуші ұлы ғалым Галилео Галилей математиканың барлық ғылымдардың ортақ тілі екендігін ерекше атап көрсеткен, сөйтіп «Философия ұланғайыр кітапта - ұлы Табиғатта жазылған дүние, оның беттері әрқашан және әркімге де ашық. Бірақ оны, оның тілін және жазылға таңба-символдарын меңгерген адам ғана түсіне алады. Бұл ұлы кітап математика тілінде жазылған, ал оның таңбалары - математикалық формулалар» - деген болатын. Оның ғасырлар асып бізге жеткен бұл көрегендігін кейінде басқа көптеген ғалымдар да растады. Математика әлдеқашан дүниені танудың сапалық жақтарын зерттейтін физика, химия, биология, астрономия сияқты ғылымдардың күнделікті қолданатын зерттеу құралына айналған, қазіргі кезде еш дау тудырмас ақиқатқа айналып отыр. </div>",
        options: [
            'А. Ұлы ғалым Галилео Галилейдің дана ойлары жөнінде',
            'В. Математиканың дүниені тану құралы екенін көрсету',
            'С. Математикалық формулалардың пайда болуы',
            'D. Математикалық модульдің жүзеге асыру формаларын сипаттау',
            'Е. Математиканың символдар жүйесі екендігін сипаттау',
        ],
        rightAnswer: 1
    },
    {
        question: "«Зор» сөзіне мағынасы жақын сөзді табыңыз. </br></br><div class='texts'>  Жорғалаушылардың нағыз құрлықта тіршілік етуге бейімделген 8 000-ға жуық түрі бар. Жорғалаушыларға кесірткелер, жыландар, тасбақалар, құбылғылар, крокодилдер т.б. жатады. Суда тіршілік ететін түрлері де бар. Бірақ олар екінші рет оралып, суда тіршілік етуге бейімделген. Өйткені атмосфералық ауамен тек өкпесі арқылы ғана тыныс алады. Жорғалаушылардың дене тұрқы, пішіні әр түрлі. Құрлықта, суда, ағаш мекендейтін орындарды бүлдіруі немесе әртүрлі мақсаттарда пайдалануы олардың тіршілік етуіне зор қауіп төндіреді. Таралу шегу шектеулі жорғалаушыларды болашақ ұрпаққа сақтап қалу үшін орынсыз шығынға ұшыратпау қажет. Қазақ халқы жорғалаушыларды ежелден-ақ қастерлеп, қорғай білген. Мәселен, үйге кірген жыланның басына ақ құйып шығарған. Оларға ерекше мән берген. </div>",
        options: [
            'А. Кіші',
            'В. Негізгі',
            'С. Нағыз',
            'D. Үлкен',
            'Е. Басты',
        ],
        rightAnswer: 3
    },
    {
        question: "Берілген мәтіннің мақсатын анықтаңыз </br></br><div class='texts'>  Жорғалаушылардың нағыз құрлықта тіршілік етуге бейімделген 8 000-ға жуық түрі бар. Жорғалаушыларға кесірткелер, жыландар, тасбақалар, құбылғылар, крокодилдер т.б. жатады. Суда тіршілік ететін түрлері де бар. Бірақ олар екінші рет оралып, суда тіршілік етуге бейімделген. Өйткені атмосфералық ауамен тек өкпесі арқылы ғана тыныс алады. Жорғалаушылардың дене тұрқы, пішіні әр түрлі. Құрлықта, суда, ағаш мекендейтін орындарды бүлдіруі немесе әртүрлі мақсаттарда пайдалануы олардың тіршілік етуіне зор қауіп төндіреді. Таралу шегу шектеулі жорғалаушыларды болашақ ұрпаққа сақтап қалу үшін орынсыз шығынға ұшыратпау қажет. Қазақ халқы жорғалаушыларды ежелден-ақ қастерлеп, қорғай білген. Мәселен, үйге кірген жыланның басына ақ құйып шығарған. Оларға ерекше мән берген. </div>",
        options: [
            'А. Жорғалаушыларды қорғау мәселесін айқындау',
            'В. Жорғалаушылардың түрлерін сипаттау',
            'С. Жорғалаушылардың даму жайын көрсету',
            'D. Жорғалаушылардың санын сипаттау',
            'Е. Жорғалаушылардың мекенін таныту',
        ],
        rightAnswer: 4
    },
    {
        question: "Берілген мәтінге сәйкес тақырыпты таңдаңыз. </br></br><div class='texts'>  Жорғалаушылардың нағыз құрлықта тіршілік етуге бейімделген 8 000-ға жуық түрі бар. Жорғалаушыларға кесірткелер, жыландар, тасбақалар, құбылғылар, крокодилдер т.б. жатады. Суда тіршілік ететін түрлері де бар. Бірақ олар екінші рет оралып, суда тіршілік етуге бейімделген. Өйткені атмосфералық ауамен тек өкпесі арқылы ғана тыныс алады. Жорғалаушылардың дене тұрқы, пішіні әр түрлі. Құрлықта, суда, ағаш мекендейтін орындарды бүлдіруі немесе әртүрлі мақсаттарда пайдалануы олардың тіршілік етуіне зор қауіп төндіреді. Таралу шегу шектеулі жорғалаушыларды болашақ ұрпаққа сақтап қалу үшін орынсыз шығынға ұшыратпау қажет. Қазақ халқы жорғалаушыларды ежелден-ақ қастерлеп, қорғай білген. Мәселен, үйге кірген жыланның басына ақ құйып шығарған. Оларға ерекше мән берген. </div>",
        options: [
            'А. Топырақтағы тіршілік иелері',
            'В. Суда тіршілік ететін жануарлар',
            'С. Жорғалаушылар мекені',
            'D. Жорғалаушылардың таралуы',
            'Е. Жорғалаушылардың қорғалу',
        ],
        rightAnswer: 2
    },
    {
        question: "«Түсінік» сөзіне мағынасы жақын сөзді табыңыз </br></br><div class='texts'> Когнитивтік лингвистика - табиғи тілді сана әрекетінің көрінісі, ойдың тікелей шындығы ретінде зерттейтін тіл білімінің саласы. Когнетивтік лингвистика табиғи тілдің игерілу, қолданылу механизімін түсіндіруді және соған лайық оның моделін жасауды мақсат етеді. Ол үшін ниет, ес, еске сақтау, түсінік, жоспарлау, басқару сияқты сөйлемге қатысты тілдік, психологиялық, физиологиялық, тағы басқа ақпараттардың басын біріктіретін когнитивтік категориялар пайдаланылады. Когнитивтік лингвистика тілдің көмегімен ақпараттың берілу, сақталу тәсілдері мен құрылымы жайында түсінікті кеңейтеді және машиналық аударма, ақпараттық ізденіс, есептеу жүйесі мен тағы да басқа байланысты бірқатар қолданбалы міндеттерді шешуге мүмкіндік береді. Когнитивтік лингвистика қазіргі антропоцентристік парадигма шеңберіндегі базалық ілім деңгейінде қарастырылады. ХХ ғ. Ортасында тілді адамның танымдық іс-әрекетіне қатысты тұрғысынан қарастыру мәселесі туындады. </div>",
        options: [
            'А. қор',
            'В. айқындауыш дерек',
            'С. анықтама',
            'D. ұғым',
            'Е. білім',
        ],
        rightAnswer: 3
    },
    {
       question: "Мәтінге сәйкес ақпаратты табыңыз </br></br><div class='texts'> Когнитивтік лингвистика - табиғи тілді сана әрекетінің көрінісі, ойдың тікелей шындығы ретінде зерттейтін тіл білімінің саласы. Когнетивтік лингвистика табиғи тілдің игерілу, қолданылу механизімін түсіндіруді және соған лайық оның моделін жасауды мақсат етеді. Ол үшін ниет, ес, еске сақтау, түсінік, жоспарлау, басқару сияқты сөйлемге қатысты тілдік, психологиялық, физиологиялық, тағы басқа ақпараттардың басын біріктіретін когнитивтік категориялар пайдаланылады. Когнитивтік лингвистика тілдің көмегімен ақпараттың берілу, сақталу тәсілдері мен құрылымы жайында түсінікті кеңейтеді және машиналық аударма, ақпараттық ізденіс, есептеу жүйесі мен тағы да басқа байланысты бірқатар қолданбалы міндеттерді шешуге мүмкіндік береді. Когнитивтік лингвистика қазіргі антропоцентристік парадигма шеңберіндегі базалық ілім деңгейінде қарастырылады. ХХ ғ. Ортасында тілді адамның танымдық іс-әрекетіне қатысты тұрғысынан қарастыру мәселесі туындады. </div>",
       options: [
            'А. Когнитивтік лингвистика қазіргі кезде антропоцентристік парадигма шеңберінен тыс жатыр',
            'В. Когнитивтік ғылымда негізгі ұғым когниция болып табылады',
            'С. Адам санасында қалыптасқан білім көрінісі тілдің қызметі арқылы жүзеге асады',
            'D. Когнитивтік лингвистика - когнитология ғылымының бір бағыты.',
            'Е. Жаһандау үдерісі когнитивтік лингвистиканың қалыптасуы мен дамуына да әсер етеді',
        ],
        rightAnswer: 3
    },
    {
       question: "Мәтінде берілген ойды әрі қарай жалғастырыңыз: </br> Когнитивтік лингвистиканың тілі арқылы беретін ақпараты - ..... </br></br><div class='texts'> Когнитивтік лингвистика - табиғи тілді сана әрекетінің көрінісі, ойдың тікелей шындығы ретінде зерттейтін тіл білімінің саласы. Когнетивтік лингвистика табиғи тілдің игерілу, қолданылу механизімін түсіндіруді және соған лайық оның моделін жасауды мақсат етеді. Ол үшін ниет, ес, еске сақтау, түсінік, жоспарлау, басқару сияқты сөйлемге қатысты тілдік, психологиялық, физиологиялық, тағы басқа ақпараттардың басын біріктіретін когнитивтік категориялар пайдаланылады. Когнитивтік лингвистика тілдің көмегімен ақпараттың берілу, сақталу тәсілдері мен құрылымы жайында түсінікті кеңейтеді және машиналық аударма, ақпараттық ізденіс, есептеу жүйесі мен тағы да басқа байланысты бірқатар қолданбалы міндеттерді шешуге мүмкіндік береді. Когнитивтік лингвистика қазіргі антропоцентристік парадигма шеңберіндегі базалық ілім деңгейінде қарастырылады. ХХ ғ. Ортасында тілді адамның танымдық іс-әрекетіне қатысты тұрғысынан қарастыру мәселесі туындады. </div>",
       options: [
            'А. Антропоцентристік пирамида шеңбері',
            'В. Қолданбалы міндеттер',
            'С. Танымдық ақпараттар',
            'D. Қолданылу механизімі',
            'Е. Психологиялық, физиологиялық ақпарат',
        ],
        rightAnswer: 2
    },
    {
        question: "Берілген мәтінге сәйкес тақырыпты таңдаңыз </br></br><div class='texts'> Үлкен сарышұнақ тиінге ұқсайды. Бұлардың созыңқы тұрқы 14-40 см. құйрығы шағын, ұзындығы денесінің жартысына сирек жетеді, құлақтары қысқа әрі толықтай жалаң, көздері үлкен және артық аяқтары алдыңғыларына қарағанда ұзынырақ. Жалпы түсі - сарғыш-сұр, жотасы қоңырқай тартқан, жүні жұмсақ, қалың. Қыста сарышұнақ басқа кеміргіштер сияқты жүнінің құрылымын ауыстыруға бейім. Қыста жүні жұмсақ әрі қалың болса, ал жазда керісінше сиректейді, бірақ нығаяды. Сарышұнақтарды атжалмандармен жақ сыртындағы қапшыққа азығын жасыру әдеті жақындастырады. Мекендеу түрі бойынша бұл кеміргіш отыршыл, яғни, өзге індерді тартып алуға бейім. Сарышұнақтар қыста ұйқыға кетуге бейім, бірақ кейде бұл құбылыс аңдар арасында азық жетіспегендіктен жаз мезгілінде де байқалады. </div>",
        options: [
            'А. сарышұнақ сипаты',
            'В. сарышұнақтардың қоректенуі',
            'С. сарышұнақтардың ерекшелігі',
            'D. сарышұнақтардың мекендейтін ортасы',
            'Е. сарышұнақтардың эволюциясы',
        ],
        rightAnswer: 2
    },
    {
        question: "«Отаршыл» сөзіне мағынасы жақын сөзді табыңыз </br></br><div class='texts'> Үлкен сарышұнақ тиінге ұқсайды. Бұлардың созыңқы тұрқы 14-40 см. құйрығы шағын, ұзындығы денесінің жартысына сирек жетеді, құлақтары қысқа әрі толықтай жалаң, көздері үлкен және артық аяқтары алдыңғыларына қарағанда ұзынырақ. Жалпы түсі - сарғыш-сұр, жотасы қоңырқай тартқан, жүні жұмсақ, қалың. Қыста сарышұнақ басқа кеміргіштер сияқты жүнінің құрылымын ауыстыруға бейім. Қыста жүні жұмсақ әрі қалың болса, ал жазда керісінше сиректейді, бірақ нығаяды. Сарышұнақтарды атжалмандармен жақ сыртындағы қапшыққа азығын жасыру әдеті жақындастырады. Мекендеу түрі бойынша бұл кеміргіш отыршыл, яғни, өзге індерді тартып алуға бейім. Сарышұнақтар қыста ұйқыға кетуге бейім, бірақ кейде бұл құбылыс аңдар арасында азық жетіспегендіктен жаз мезгілінде де байқалады. </div>",
        options: [
            'А. пайдалану',
            'В. уақытша келу',
            'С. орын ауыстыру',
            'D. тартып алу',
            'Е. көшу',
        ],
        rightAnswer: 0
    },
    {
        question: "Берілген мәтіннің мақсатын анықтаңыз </br></br><div class='texts'> Үлкен сарышұнақ тиінге ұқсайды. Бұлардың созыңқы тұрқы 14-40 см. құйрығы шағын, ұзындығы денесінің жартысына сирек жетеді, құлақтары қысқа әрі толықтай жалаң, көздері үлкен және артық аяқтары алдыңғыларына қарағанда ұзынырақ. Жалпы түсі - сарғыш-сұр, жотасы қоңырқай тартқан, жүні жұмсақ, қалың. Қыста сарышұнақ басқа кеміргіштер сияқты жүнінің құрылымын ауыстыруға бейім. Қыста жүні жұмсақ әрі қалың болса, ал жазда керісінше сиректейді, бірақ нығаяды. Сарышұнақтарды атжалмандармен жақ сыртындағы қапшыққа азығын жасыру әдеті жақындастырады. Мекендеу түрі бойынша бұл кеміргіш отыршыл, яғни, өзге індерді тартып алуға бейім. Сарышұнақтар қыста ұйқыға кетуге бейім, бірақ кейде бұл құбылыс аңдар арасында азық жетіспегендіктен жаз мезгілінде де байқалады. </div>",
        options: [
            'А. сарышұнақтардың әдетін көрсету',
            'В. сарышұнақ тіршілігін зерттеу',
            'С. сарышұнақ тіршілігін салыстыру',
            'D. сарышұнақ тіршілігін сипаттау',
            'Е. сарышұнақ тіршілігін қорыту',
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
        let score = localStorage.getItem(`${user}_score_a5`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_a5`, score);   //change a>c or 1>2

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
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_a5`);  //change a>c or 1>2
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
















