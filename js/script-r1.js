

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
    {          //question 6
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>A daring Pilot</div></br><div class = 'reading-text'> </br></br>In 1929, when aviation was still very new a French pilot and novelist – Antoine de St. Exupery – took on a job that changed the mail service in South America. He set up an air mail route that joined the cities of South America and cut the delivery time of mail from several months to a few days.</br></br>Delivering the mail by the air was not a new idea in 1929, but it was still very dangerous. Flying was full of dangers. The aviation technology we have today wasn’t invented yet. Pilots had to use simple instruments such as compasses and road maps. Airplanes had small engines and lost a lot of power when they flew at high altitudes. These planes couldn’t fly over heights, so mountains, tall buildings, and even trees were dangerous. Also, these small planes didn’t have enough power to fly above storms and bad weather. They had to go through them. Once he was in the storm, the pilot couldn’t navigate. So when he came out of the clouds, he was lost. </br></br>The rugged landscape made St. Exupery’s job very dangerous. He and his men had to fly over high mountains, deserts, and rain forests. Large areas had almost no people, and there were few roads. So even when a lost pilot landed safely, he had little chance to survive. </br></br>St. Exupery’s, however, welcomed all these difficulties. He believed that people are most alive when they are risking their lives. In 1944 he joined the French air force in North Africa. Like the pilot in his novel, Night Flight, he disappeared while flying a mission. No trace of him or his plane was ever found. </div><div class=reading-question>According to the text, St. Exupery’s disappeared__________.</div>",
        options: [
            'А. as soon as he flew above the storms',
            'В. while flying a mission',
            'С. when he came out of the clouds',
            'D. when couldn’t navigate',

        ],
        rightAnswer: 1
    },
    {          //question 7 .
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>A daring Pilot</div></br><div class = 'reading-text'> </br></br>In 1929, when aviation was still very new a French pilot and novelist – Antoine de St. Exupery – took on a job that changed the mail service in South America. He set up an air mail route that joined the cities of South America and cut the delivery time of mail from several months to a few days.</br></br>Delivering the mail by the air was not a new idea in 1929, but it was still very dangerous. Flying was full of dangers. The aviation technology we have today wasn’t invented yet. Pilots had to use simple instruments such as compasses and road maps. Airplanes had small engines and lost a lot of power when they flew at high altitudes. These planes couldn’t fly over heights, so mountains, tall buildings, and even trees were dangerous. Also, these small planes didn’t have enough power to fly above storms and bad weather. They had to go through them. Once he was in the storm, the pilot couldn’t navigate. So when he came out of the clouds, he was lost. </br></br>The rugged landscape made St. Exupery’s job very dangerous. He and his men had to fly over high mountains, deserts, and rain forests. Large areas had almost no people, and there were few roads. So even when a lost pilot landed safely, he had little chance to survive. </br></br>St. Exupery’s, however, welcomed all these difficulties. He believed that people are most alive when they are risking their lives. In 1944 he joined the French air force in North Africa. Like the pilot in his novel, Night Flight, he disappeared while flying a mission. No trace of him or his plane was ever found. </div><div class=reading-question>When a lost pilot landed carefully, he had _________to survive.</div>",
        options: [
            'А. little chance',
            'В. a lot of instruments',
            'С. good road maps',
            'D. the mail service',

        ],
        rightAnswer: 0
    },
    {         //question 8
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>A daring Pilot</div></br><div class = 'reading-text'> </br></br>In 1929, when aviation was still very new a French pilot and novelist – Antoine de St. Exupery – took on a job that changed the mail service in South America. He set up an air mail route that joined the cities of South America and cut the delivery time of mail from several months to a few days.</br></br>Delivering the mail by the air was not a new idea in 1929, but it was still very dangerous. Flying was full of dangers. The aviation technology we have today wasn’t invented yet. Pilots had to use simple instruments such as compasses and road maps. Airplanes had small engines and lost a lot of power when they flew at high altitudes. These planes couldn’t fly over heights, so mountains, tall buildings, and even trees were dangerous. Also, these small planes didn’t have enough power to fly above storms and bad weather. They had to go through them. Once he was in the storm, the pilot couldn’t navigate. So when he came out of the clouds, he was lost. </br></br>The rugged landscape made St. Exupery’s job very dangerous. He and his men had to fly over high mountains, deserts, and rain forests. Large areas had almost no people, and there were few roads. So even when a lost pilot landed safely, he had little chance to survive. </br></br>St. Exupery’s, however, welcomed all these difficulties. He believed that people are most alive when they are risking their lives. In 1944 he joined the French air force in North Africa. Like the pilot in his novel, Night Flight, he disappeared while flying a mission. No trace of him or his plane was ever found. </div><div class=reading-question>So even when a lost pilot ________ safely, he had little chance to survive.</div>",
        options: [
            'А. took off',
            'В. landed',
            'С. delivered',
            'D. flew',

        ],
        rightAnswer: 1
    },
    {          //question 9
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>The world’s best diets</div></br><div class = 'reading-text'> For many people in Western countries, food is a difficult topic. They know their Western diet, with a lot of processed and fast food, contains too much salt, sugar and fat. But to change eating habits takes time and clear information, and both can be difficult to find, especially when experts change their advice about what food is good and bad for you. </br></br>Unfortunately, the Western diet is becoming popular in other parts of the world too. To stop a global health problem, we need to learn from places where people still have healthy eating habits. </br></br>One example is the countries around the Mediterranean Sea in Europe. The traditional diet of this area is one of the world’s healthiest. People eat a lot of vegetables, beans, nuts and fruit, quite a lot of fish, some chicken, and not much meat. </br></br>Unfortunately, many people in this region have lost their traditional food habits. Japan is another place with good eating habits. It’s one of the countries in the world where people live the longest, healthiest lives. People there eat a lot of fish, vegetables and fruit. Also, Japanese food looks good, and portions are small. People eat slowly, they eat less and really taste their food. </br></br>The traditional diet of many Latin American countries is also very healthy. All meals include vegetables, beans, nuts and fruit. What’s more, people eat fish or chicken every day, and don’t eat much meat. </br></br>However, there are exceptions to the rule. Many people in France live long, healthy lives, but they eat some things that are not healthy. But in France food is important. People enjoy eating together and they don’t eat too much. Perhaps a healthy diet is not just about ingredients, it’s also about how people eat. </div><div class=reading-question>The word “diet” is closest in meaning to the word ____.</div>",
        options: [
            'А. food',
            'В. air',
            'С. coffee',
            'D. bite',

        ],
        rightAnswer: 0
    },
    {         //question 10
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>The world’s best diets</div></br><div class = 'reading-text'> For many people in Western countries, food is a difficult topic. They know their Western diet, with a lot of processed and fast food, contains too much salt, sugar and fat. But to change eating habits takes time and clear information, and both can be difficult to find, especially when experts change their advice about what food is good and bad for you. </br></br>Unfortunately, the Western diet is becoming popular in other parts of the world too. To stop a global health problem, we need to learn from places where people still have healthy eating habits. </br></br>One example is the countries around the Mediterranean Sea in Europe. The traditional diet of this area is one of the world’s healthiest. People eat a lot of vegetables, beans, nuts and fruit, quite a lot of fish, some chicken, and not much meat. </br></br>Unfortunately, many people in this region have lost their traditional food habits. Japan is another place with good eating habits. It’s one of the countries in the world where people live the longest, healthiest lives. People there eat a lot of fish, vegetables and fruit. Also, Japanese food looks good, and portions are small. People eat slowly, they eat less and really taste their food. </br></br>The traditional diet of many Latin American countries is also very healthy. All meals include vegetables, beans, nuts and fruit. What’s more, people eat fish or chicken every day, and don’t eat much meat. </br></br>However, there are exceptions to the rule. Many people in France live long, healthy lives, but they eat some things that are not healthy. But in France food is important. People enjoy eating together and they don’t eat too much. Perhaps a healthy diet is not just about ingredients, it’s also about how people eat. </div><div class=reading-question>According to the information given in the text, healthy eating habits can be observed in _____.</div>",
        options: [
            'А. the countries located far from the Mediterranean Sea',
            'В. the USA',
            'С. all Western countries ',
            'D. the countries around the Mediterranean Sea',

        ],
        rightAnswer: 3
    },
    {         //question 11
       question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>The world’s best diets</div></br><div class = 'reading-text'> For many people in Western countries, food is a difficult topic. They know their Western diet, with a lot of processed and fast food, contains too much salt, sugar and fat. But to change eating habits takes time and clear information, and both can be difficult to find, especially when experts change their advice about what food is good and bad for you. </br></br>Unfortunately, the Western diet is becoming popular in other parts of the world too. To stop a global health problem, we need to learn from places where people still have healthy eating habits. </br></br>One example is the countries around the Mediterranean Sea in Europe. The traditional diet of this area is one of the world’s healthiest. People eat a lot of vegetables, beans, nuts and fruit, quite a lot of fish, some chicken, and not much meat. </br></br>Unfortunately, many people in this region have lost their traditional food habits. Japan is another place with good eating habits. It’s one of the countries in the world where people live the longest, healthiest lives. People there eat a lot of fish, vegetables and fruit. Also, Japanese food looks good, and portions are small. People eat slowly, they eat less and really taste their food. </br></br>The traditional diet of many Latin American countries is also very healthy. All meals include vegetables, beans, nuts and fruit. What’s more, people eat fish or chicken every day, and don’t eat much meat. </br></br>However, there are exceptions to the rule. Many people in France live long, healthy lives, but they eat some things that are not healthy. But in France food is important. People enjoy eating together and they don’t eat too much. Perhaps a healthy diet is not just about ingredients, it’s also about how people eat. </div><div class=reading-question>People in Latin American countries don’t like to eat ____.</div>",
       options: [
            'А. much meat',
            'В. fish',
            'С. vegetables',
            'D. chicken',

        ],
        rightAnswer: 0
    },
    {         //question 12
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>The world’s best diets</div></br><div class = 'reading-text'> For many people in Western countries, food is a difficult topic. They know their Western diet, with a lot of processed and fast food, contains too much salt, sugar and fat. But to change eating habits takes time and clear information, and both can be difficult to find, especially when experts change their advice about what food is good and bad for you. </br></br>Unfortunately, the Western diet is becoming popular in other parts of the world too. To stop a global health problem, we need to learn from places where people still have healthy eating habits. </br></br>One example is the countries around the Mediterranean Sea in Europe. The traditional diet of this area is one of the world’s healthiest. People eat a lot of vegetables, beans, nuts and fruit, quite a lot of fish, some chicken, and not much meat. </br></br>Unfortunately, many people in this region have lost their traditional food habits. Japan is another place with good eating habits. It’s one of the countries in the world where people live the longest, healthiest lives. People there eat a lot of fish, vegetables and fruit. Also, Japanese food looks good, and portions are small. People eat slowly, they eat less and really taste their food. </br></br>The traditional diet of many Latin American countries is also very healthy. All meals include vegetables, beans, nuts and fruit. What’s more, people eat fish or chicken every day, and don’t eat much meat. </br></br>However, there are exceptions to the rule. Many people in France live long, healthy lives, but they eat some things that are not healthy. But in France food is important. People enjoy eating together and they don’t eat too much. Perhaps a healthy diet is not just about ingredients, it’s also about how people eat. </div><div class=reading-question>A healthy diet is not just about ____, it’s also about how people eat.</div>",
        options: [
            'А. features',
            'В. aspects',
            'С. characteristics',
            'D. components',

        ],
        rightAnswer: 3
    },
    {         //question 13
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>The world’s best diets</div></br><div class = 'reading-text'> For many people in Western countries, food is a difficult topic. They know their Western diet, with a lot of processed and fast food, contains too much salt, sugar and fat. But to change eating habits takes time and clear information, and both can be difficult to find, especially when experts change their advice about what food is good and bad for you. </br></br>Unfortunately, the Western diet is becoming popular in other parts of the world too. To stop a global health problem, we need to learn from places where people still have healthy eating habits. </br></br>One example is the countries around the Mediterranean Sea in Europe. The traditional diet of this area is one of the world’s healthiest. People eat a lot of vegetables, beans, nuts and fruit, quite a lot of fish, some chicken, and not much meat. </br></br>Unfortunately, many people in this region have lost their traditional food habits. Japan is another place with good eating habits. It’s one of the countries in the world where people live the longest, healthiest lives. People there eat a lot of fish, vegetables and fruit. Also, Japanese food looks good, and portions are small. People eat slowly, they eat less and really taste their food. </br></br>The traditional diet of many Latin American countries is also very healthy. All meals include vegetables, beans, nuts and fruit. What’s more, people eat fish or chicken every day, and don’t eat much meat. </br></br>However, there are exceptions to the rule. Many people in France live long, healthy lives, but they eat some things that are not healthy. But in France food is important. People enjoy eating together and they don’t eat too much. Perhaps a healthy diet is not just about ingredients, it’s also about how people eat. </div><div class=reading-question>The exceptions to the rule are eating habits in _____.</div>",
        options: [
            'А. the USA',
            'В. Latin America',
            'С. Japan',
            'D. France',

        ],
        rightAnswer: 3
    },
    {         //question 14
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>The world’s best diets</div></br><div class = 'reading-text'> For many people in Western countries, food is a difficult topic. They know their Western diet, with a lot of processed and fast food, contains too much salt, sugar and fat. But to change eating habits takes time and clear information, and both can be difficult to find, especially when experts change their advice about what food is good and bad for you. </br></br>Unfortunately, the Western diet is becoming popular in other parts of the world too. To stop a global health problem, we need to learn from places where people still have healthy eating habits. </br></br>One example is the countries around the Mediterranean Sea in Europe. The traditional diet of this area is one of the world’s healthiest. People eat a lot of vegetables, beans, nuts and fruit, quite a lot of fish, some chicken, and not much meat. </br></br>Unfortunately, many people in this region have lost their traditional food habits. Japan is another place with good eating habits. It’s one of the countries in the world where people live the longest, healthiest lives. People there eat a lot of fish, vegetables and fruit. Also, Japanese food looks good, and portions are small. People eat slowly, they eat less and really taste their food. </br></br>The traditional diet of many Latin American countries is also very healthy. All meals include vegetables, beans, nuts and fruit. What’s more, people eat fish or chicken every day, and don’t eat much meat. </br></br>However, there are exceptions to the rule. Many people in France live long, healthy lives, but they eat some things that are not healthy. But in France food is important. People enjoy eating together and they don’t eat too much. Perhaps a healthy diet is not just about ingredients, it’s also about how people eat. </div><div class=reading-question>The word “health” in the text is closest in meaning to the word _____.</div>",
        options: [
            'А. disease',
            'В. well-being',
            'С. illness',
            'D. spirit',

        ],
        rightAnswer: 1
    },
    {         //question 15
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>The world’s best diets</div></br><div class = 'reading-text'> For many people in Western countries, food is a difficult topic. They know their Western diet, with a lot of processed and fast food, contains too much salt, sugar and fat. But to change eating habits takes time and clear information, and both can be difficult to find, especially when experts change their advice about what food is good and bad for you. </br></br>Unfortunately, the Western diet is becoming popular in other parts of the world too. To stop a global health problem, we need to learn from places where people still have healthy eating habits. </br></br>One example is the countries around the Mediterranean Sea in Europe. The traditional diet of this area is one of the world’s healthiest. People eat a lot of vegetables, beans, nuts and fruit, quite a lot of fish, some chicken, and not much meat. </br></br>Unfortunately, many people in this region have lost their traditional food habits. Japan is another place with good eating habits. It’s one of the countries in the world where people live the longest, healthiest lives. People there eat a lot of fish, vegetables and fruit. Also, Japanese food looks good, and portions are small. People eat slowly, they eat less and really taste their food. </br></br>The traditional diet of many Latin American countries is also very healthy. All meals include vegetables, beans, nuts and fruit. What’s more, people eat fish or chicken every day, and don’t eat much meat. </br></br>However, there are exceptions to the rule. Many people in France live long, healthy lives, but they eat some things that are not healthy. But in France food is important. People enjoy eating together and they don’t eat too much. Perhaps a healthy diet is not just about ingredients, it’s also about how people eat. </div><div class=reading-question>The pronoun “they” in the paragraph 4 refers to people from_____.</div>",
        options: [
            'А. Latin America',
            'В. the countries around the Mediterranean Sea',
            'С. France',
            'D. Japan',

        ],
        rightAnswer: 3
    },
    {         //question 16
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>The world’s best diets</div></br><div class = 'reading-text'> For many people in Western countries, food is a difficult topic. They know their Western diet, with a lot of processed and fast food, contains too much salt, sugar and fat. But to change eating habits takes time and clear information, and both can be difficult to find, especially when experts change their advice about what food is good and bad for you. </br></br>Unfortunately, the Western diet is becoming popular in other parts of the world too. To stop a global health problem, we need to learn from places where people still have healthy eating habits. </br></br>One example is the countries around the Mediterranean Sea in Europe. The traditional diet of this area is one of the world’s healthiest. People eat a lot of vegetables, beans, nuts and fruit, quite a lot of fish, some chicken, and not much meat. </br></br>Unfortunately, many people in this region have lost their traditional food habits. Japan is another place with good eating habits. It’s one of the countries in the world where people live the longest, healthiest lives. People there eat a lot of fish, vegetables and fruit. Also, Japanese food looks good, and portions are small. People eat slowly, they eat less and really taste their food. </br></br>The traditional diet of many Latin American countries is also very healthy. All meals include vegetables, beans, nuts and fruit. What’s more, people eat fish or chicken every day, and don’t eat much meat. </br></br>However, there are exceptions to the rule. Many people in France live long, healthy lives, but they eat some things that are not healthy. But in France food is important. People enjoy eating together and they don’t eat too much. Perhaps a healthy diet is not just about ingredients, it’s also about how people eat. </div><div class=reading-question>According to the text, the Western diet contains ____.</div>",
        options: [
            'А. too much meat',
            'В. a lot of fish',
            'С. too much pepper',
            'D. too much salt and fat',

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
















