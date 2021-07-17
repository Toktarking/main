

var user = sessionStorage.getItem('user');



//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_r5`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_r5`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_r5`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_r5`);  //change a>c or 1>2



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
        question: "<div class='reading-heading'>Text 1</div><div class = 'reading-heading'>Canada </br></br></div><div class = 'reading-text'>Canada is the second biggest country in the world, second only to Russia. In fact, Canada is bigger than the entire European Union put together! </br></br>There are many interesting facts about Canada, some may surprise you! The country is called 'The Great White North'! </br></br>Canada has ten provinces and three territories. It also has six time zones! </br></br>Its capital city is Ottawa. Ottawa is in the province of Ontario. It has a population of 36 million people. This is small compared to other countries. It is also small considering its large size! </br></br>Over 80% of the population live near the United States border. The Canadian and US border is the largest border in the world. Over 30% of the country is a forest. And Canada has 10% of the world's forests! Canada also has more lake areas than any other country in the world. </br></br>Canada is a very young country. Canada became a country only in 1867. The country celebrated its 150th birthday in July 2017. July 1st is the Canada Day. People all across the country celebrate by wearing red and white. Red and white are the national colours shown on its flag. </br></br>Canada was first discovered by the French explorer, Jacques Cartier in 1534. Of course, people had been living in Canada long before that. </br></br>Canada's national animal is a beaver! And it has two national languages, both English and French. But only two provinces are officially French speaking, Quebec and New Brunswick. </br></br>Canada is still strongly tied to the country of England. Like Australia, Canada celebrates the Queen of England as their Queen too! </div><div class=reading-question>The population in the province of Ontario is _________ in comparison with other countries.</div>",
        options: [
            'A. big',
            'B. large',
            'C. so great',
            "D. not so large",

        ],
        rightAnswer: 3
    },
    {    //question 2
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>Canada</div></br><div class = 'reading-text'>Canada is the second biggest country in the world, second only to Russia. In fact, Canada is bigger than the entire European Union put together! </br></br>There are many interesting facts about Canada, some may surprise you! The country is called 'The Great White North'! </br></br>Canada has ten provinces and three territories. It also has six time zones! </br></br>Its capital city is Ottawa. Ottawa is in the province of Ontario. It has a population of 36 million people. This is small compared to other countries. It is also small considering its large size! </br></br>Over 80% of the population live near the United States border. The Canadian and US border is the largest border in the world. Over 30% of the country is a forest. And Canada has 10% of the world's forests! Canada also has more lake areas than any other country in the world. </br></br>Canada is a very young country. Canada became a country only in 1867. The country celebrated its 150th birthday in July 2017. July 1st is the Canada Day. People all across the country celebrate by wearing red and white. Red and white are the national colours shown on its flag. </br></br>Canada was first discovered by the French explorer, Jacques Cartier in 1534. Of course, people had been living in Canada long before that. </br></br>Canada's national animal is a beaver! And it has two national languages, both English and French. But only two provinces are officially French speaking, Quebec and New Brunswick. </br></br>Canada is still strongly tied to the country of England. Like Australia, Canada celebrates the Queen of England as their Queen too! </div><div class=reading-question>There are ____ time zones in Canada.</div>",
        options: [
            'А. 6',
            'В. 3',
            'С. 2',
            'D. 4',

        ],
        rightAnswer: 0
    },
    {        //question 3
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>Canada</div></br><div class = 'reading-text'>Canada is the second biggest country in the world, second only to Russia. In fact, Canada is bigger than the entire European Union put together! </br></br>There are many interesting facts about Canada, some may surprise you! The country is called 'The Great White North'! </br></br>Canada has ten provinces and three territories. It also has six time zones! </br></br>Its capital city is Ottawa. Ottawa is in the province of Ontario. It has a population of 36 million people. This is small compared to other countries. It is also small considering its large size! </br></br>Over 80% of the population live near the United States border. The Canadian and US border is the largest border in the world. Over 30% of the country is a forest. And Canada has 10% of the world's forests! Canada also has more lake areas than any other country in the world. </br></br>Canada is a very young country. Canada became a country only in 1867. The country celebrated its 150th birthday in July 2017. July 1st is the Canada Day. People all across the country celebrate by wearing red and white. Red and white are the national colours shown on its flag. </br></br>Canada was first discovered by the French explorer, Jacques Cartier in 1534. Of course, people had been living in Canada long before that. </br></br>Canada's national animal is a beaver! And it has two national languages, both English and French. But only two provinces are officially French speaking, Quebec and New Brunswick. </br></br>Canada is still strongly tied to the country of England. Like Australia, Canada celebrates the Queen of England as their Queen too! </div><div class=reading-question>The capital of Canada is situated in the province of Ontario. Its population is _______ million people.</div>",
        options: [
            "А. thirty-four",
            "В. thirty-six",
            "С. thirty-seven",
            "D. thirty-nine",

        ],
        rightAnswer: 1
    },
    {          //question 4

        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>Canada</div></br><div class = 'reading-text'>Canada is the second biggest country in the world, second only to Russia. In fact, Canada is bigger than the entire European Union put together! </br></br>There are many interesting facts about Canada, some may surprise you! The country is called 'The Great White North''! </br></br>Canada has ten provinces and three territories. It also has six time zones! </br></br>Its capital city is Ottawa. Ottawa is in the province of Ontario. It has a population of 36 million people. This is small compared to other countries. It is also small considering its large size! </br></br>Over 80% of the population live near the United States border. The Canadian and US border is the largest border in the world. Over 30% of the country is a forest. And Canada has 10% of the world's forests! Canada also has more lake areas than any other country in the world. </br></br>Canada is a very young country. Canada became a country only in 1867. The country celebrated its 150th birthday in July 2017. July 1st is the Canada Day. People all across the country celebrate by wearing red and white. Red and white are the national colours shown on its flag. </br></br>Canada was first discovered by the French explorer, Jacques Cartier in 1534. Of course, people had been living in Canada long before that. </br></br>Canada's national animal is a beaver! And it has two national languages, both English and French. But only two provinces are officially French speaking, Quebec and New Brunswick. </br></br>Canada is still strongly tied to the country of England. Like Australia, Canada celebrates the Queen of England as their Queen too! </div><div class=reading-question>________ of the population live near the United States border.</div>",
        options: [
            'А. Over 80%',
            'В. Less than 79%',
            'С. Less than 75%',
            'D. Over 83%',

        ],
        rightAnswer: 0
    },

    {          //question 5 Егер шаршының а см қабырғасы мына аралықта жатса 0,9 < а < 1,2; онда периметрі қай аралықта жатады?
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>Canada</div></br><div class = 'reading-text'>Canada is the second biggest country in the world, second only to Russia. In fact, Canada is bigger than the entire European Union put together! </br></br>There are many interesting facts about Canada, some may surprise you! The country is called 'The Great White North'! </br></br>Canada has ten provinces and three territories. It also has six time zones! </br></br>Its capital city is Ottawa. Ottawa is in the province of Ontario. It has a population of 36 million people. This is small compared to other countries. It is also small considering its large size! </br></br>Over 80% of the population live near the United States border. The Canadian and US border is the largest border in the world. Over 30% of the country is a forest. And Canada has 10% of the world's forests! Canada also has more lake areas than any other country in the world. </br></br>Canada is a very young country. Canada became a country only in 1867. The country celebrated its 150th birthday in July 2017. July 1st is the Canada Day. People all across the country celebrate by wearing red and white. Red and white are the national colours shown on its flag. </br></br>Canada was first discovered by the French explorer, Jacques Cartier in 1534. Of course, people had been living in Canada long before that. </br></br>Canada's national animal is a beaver! And it has two national languages, both English and French. But only two provinces are officially French speaking, Quebec and New Brunswick. </br></br>Canada is still strongly tied to the country of England. Like Australia, Canada celebrates the Queen of England as their Queen too! </div><div class=reading-question>Canada is a large country. But only ________ is larger than Canada.</div>",
        options: [
            'А. Russia',
            'В. Australia',
            'С. Asia',
            'D. Africa',

        ],
        rightAnswer: 0
    },
    {          //question 6
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>Canada</div></br><div class = 'reading-text'>Canada is the second biggest country in the world, second only to Russia. In fact, Canada is bigger than the entire European Union put together! </br></br>There are many interesting facts about Canada, some may surprise you! The country is called 'The Great White North'! </br></br>Canada has ten provinces and three territories. It also has six time zones! </br></br>Its capital city is Ottawa. Ottawa is in the province of Ontario. It has a population of 36 million people. This is small compared to other countries. It is also small considering its large size! </br></br>Over 80% of the population live near the United States border. The Canadian and US border is the largest border in the world. Over 30% of the country is a forest. And Canada has 10% of the world's forests! Canada also has more lake areas than any other country in the world. </br></br>Canada is a very young country. Canada became a country only in 1867. The country celebrated its 150th birthday in July 2017. July 1st is the Canada Day. People all across the country celebrate by wearing red and white. Red and white are the national colours shown on its flag. </br></br>Canada was first discovered by the French explorer, Jacques Cartier in 1534. Of course, people had been living in Canada long before that. </br></br>Canada's national animal is a beaver! And it has two national languages, both English and French. But only two provinces are officially French speaking, Quebec and New Brunswick. </br></br>Canada is still strongly tied to the country of England. Like Australia, Canada celebrates the Queen of England as their Queen too! </div><div class=reading-question>There are ten provinces and ____ territories in Canada.</div>",
        options: [
            'А. 3',
            'В. 2',
            'С. 4',
            'D. 13',

        ],
        rightAnswer: 0
    },
    {          //question 7 .
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>Canada</div></br><div class = 'reading-text'>Canada is the second biggest country in the world, second only to Russia. In fact, Canada is bigger than the entire European Union put together! </br></br>There are many interesting facts about Canada, some may surprise you! The country is called 'The Great White North'! </br></br>Canada has ten provinces and three territories. It also has six time zones! </br></br>Its capital city is Ottawa. Ottawa is in the province of Ontario. It has a population of 36 million people. This is small compared to other countries. It is also small considering its large size! </br></br>Over 80% of the population live near the United States border. The Canadian and US border is the largest border in the world. Over 30% of the country is a forest. And Canada has 10% of the world's forests! Canada also has more lake areas than any other country in the world. </br></br>Canada is a very young country. Canada became a country only in 1867. The country celebrated its 150th birthday in July 2017. July 1st is the Canada Day. People all across the country celebrate by wearing red and white. Red and white are the national colours shown on its flag. </br></br>Canada was first discovered by the French explorer, Jacques Cartier in 1534. Of course, people had been living in Canada long before that. </br></br>Canada's national animal is a beaver! And it has two national languages, both English and French. But only two provinces are officially French speaking, Quebec and New Brunswick. </br></br>Canada is still strongly tied to the country of England. Like Australia, Canada celebrates the Queen of England as their Queen too! </div><div class=reading-question>The capital of Canada is situated in the province of __________.</div>",
        options: [
            'А. Ontario',
            'В. Quebec',
            'С. Brunswick',
            'D. New Brunswick',

        ],
        rightAnswer: 0
    },
    {         //question 8
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>Canada</div></br><div class = 'reading-text'>Canada is the second biggest country in the world, second only to Russia. In fact, Canada is bigger than the entire European Union put together! </br></br>There are many interesting facts about Canada, some may surprise you! The country is called 'The Great White North'! </br></br>Canada has ten provinces and three territories. It also has six time zones! </br></br>Its capital city is Ottawa. Ottawa is in the province of Ontario. It has a population of 36 million people. This is small compared to other countries. It is also small considering its large size! </br></br>Over 80% of the population live near the United States border. The Canadian and US border is the largest border in the world. Over 30% of the country is a forest. And Canada has 10% of the world's forests! Canada also has more lake areas than any other country in the world. </br></br>Canada is a very young country. Canada became a country only in 1867. The country celebrated its 150th birthday in July 2017. July 1st is the Canada Day. People all across the country celebrate by wearing red and white. Red and white are the national colours shown on its flag. </br></br>Canada was first discovered by the French explorer, Jacques Cartier in 1534. Of course, people had been living in Canada long before that. </br></br>Canada's national animal is a beaver! And it has two national languages, both English and French. But only two provinces are officially French speaking, Quebec and New Brunswick. </br></br>Canada is still strongly tied to the country of England. Like Australia, Canada celebrates the Queen of England as their Queen too! </div><div class=reading-question>According to the text, Canada is bigger than the entire _____________ put together!</div>",
        options: [
            'А. Africa',
            'В. Latin America',
            'С. Asia',
            'D. European Union',

        ],
        rightAnswer: 3
    },
    {          //question 9
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Where is Roxy?</div></br><div class = 'reading-text'>After classes Chloe arrives home, makes a cup of coffee and goes to her bedroom. Everything is quiet and she plays with her pet rats. Chloe has two rats called Zena and Roxy. They live in a cage in Chloe's bedroom. Chloe knows that most people don't like rats. A year ago, Chloe didn't like rats either. Once, her friend Martin showed Chloe his rats and Chloe saw how intelligent and affectionate they were.</br></br>When one of Martin's rats had babies, Chloe asked her mum if she could have two pet rats for her birthday present. Her parents didn't like it, but Chloe got an excellent school report and they decided to give Chloe that present.</br></br>'There’s one very important rule,' said Chloe's mum. 'The rats live in your bedroom and never go to other rooms, especially the kitchen!'</br></br>In her room, Chloe opened the cage. She picked up Roxy and put her on the floor. Then she picked up Zena and put her on her shoulder. Roxy loved to explore climbing furniture and going under Chloe's bed. Zena was quieter and liked sitting on Chloe's shoulder.</br></br>Someone knocked on the door. 'Hi, Chloe,' called Mum.</br></br>'Mum, come in.'</br></br>'I'm going to my aerobics class. I'll return at seven. Dad's on his way home. He's making pasta tonight.'</br></br>'OK, Mum', Chloe replied.</br></br>Mum went away. Chloe called for Roxy. She started to search the house but she didn’t find Roxy. </br></br>When Dad came, they looked all over the house but couldn't find Roxy anywhere. Soon Mum came. She was smiling and Roxy was on her shoulder. When she arrived at the gym and opened her bag, she found Roxy sleeping in one of her shoes. She picked her up for the first time and understood that she liked rats too. </div><div class=reading-question>After school Chloe likes to ______ with her pet rats.</div>",
        options: [
            'А. play',
            'В. do yoga',
            'С. work',
            'D. watch TV',

        ],
        rightAnswer: 0
    },
    {         //question 10
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Where is Roxy?</div></br><div class = 'reading-text'>After classes Chloe arrives home, makes a cup of coffee and goes to her bedroom. Everything is quiet and she plays with her pet rats. Chloe has two rats called Zena and Roxy. They live in a cage in Chloe's bedroom. Chloe knows that most people don't like rats. A year ago, Chloe didn't like rats either. Once, her friend Martin showed Chloe his rats and Chloe saw how intelligent and affectionate they were.</br></br>When one of Martin's rats had babies, Chloe asked her mum if she could have two pet rats for her birthday present. Her parents didn't like it, but Chloe got an excellent school report and they decided to give Chloe that present.</br></br>'There’s one very important rule,' said Chloe's mum. 'The rats live in your bedroom and never go to other rooms, especially the kitchen!'</br></br>In her room, Chloe opened the cage. She picked up Roxy and put her on the floor. Then she picked up Zena and put her on her shoulder. Roxy loved to explore climbing furniture and going under Chloe's bed. Zena was quieter and liked sitting on Chloe's shoulder.</br></br>Someone knocked on the door. 'Hi, Chloe,' called Mum.</br></br>'Mum, come in.'</br></br>'I'm going to my aerobics class. I'll return at seven. Dad's on his way home. He's making pasta tonight.'</br></br>'OK, Mum', Chloe replied.</br></br>Mum went away. Chloe called for Roxy. She started to search the house but she didn’t find Roxy. </br></br>When Dad came, they looked all over the house but couldn't find Roxy anywhere. Soon Mum came. She was smiling and Roxy was on her shoulder. When she arrived at the gym and opened her bag, she found Roxy sleeping in one of her shoes. She picked her up for the first time and understood that she liked rats too. </div><div class=reading-question>The true statement referring to the text is: Chloe had to call for Roxy because she ____________________.</div>",
        options: [
            'А. couldn’t see her anywhere',
            'В. bit her finger',
            'С. started to run under her bed ',
            'D. went down to the kitchen',

        ],
        rightAnswer: 0
    },
    {         //question 11
       question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Where is Roxy?</div></br><div class = 'reading-text'>After classes Chloe arrives home, makes a cup of coffee and goes to her bedroom. Everything is quiet and she plays with her pet rats. Chloe has two rats called Zena and Roxy. They live in a cage in Chloe's bedroom. Chloe knows that most people don't like rats. A year ago, Chloe didn't like rats either. Once, her friend Martin showed Chloe his rats and Chloe saw how intelligent and affectionate they were.</br></br>When one of Martin's rats had babies, Chloe asked her mum if she could have two pet rats for her birthday present. Her parents didn't like it, but Chloe got an excellent school report and they decided to give Chloe that present.</br></br>'There’s one very important rule,' said Chloe's mum. 'The rats live in your bedroom and never go to other rooms, especially the kitchen!'</br></br>In her room, Chloe opened the cage. She picked up Roxy and put her on the floor. Then she picked up Zena and put her on her shoulder. Roxy loved to explore climbing furniture and going under Chloe's bed. Zena was quieter and liked sitting on Chloe's shoulder.</br></br>Someone knocked on the door. 'Hi, Chloe,' called Mum.</br></br>'Mum, come in.'</br></br>'I'm going to my aerobics class. I'll return at seven. Dad's on his way home. He's making pasta tonight.'</br></br>'OK, Mum', Chloe replied.</br></br>Mum went away. Chloe called for Roxy. She started to search the house but she didn’t find Roxy. </br></br>When Dad came, they looked all over the house but couldn't find Roxy anywhere. Soon Mum came. She was smiling and Roxy was on her shoulder. When she arrived at the gym and opened her bag, she found Roxy sleeping in one of her shoes. She picked her up for the first time and understood that she liked rats too. </div><div class=reading-question>The true statement referring to the text is: When Dad came home, he _______________________.</div>",
       options: [
            'А. had to phone Martin and asked him for help',
            'В. prepared pasta and they ate together',
            'С. joined Chloe and they started to look for Roxy together',
            'D. went to his bedroom and found Roxy there',

        ],
        rightAnswer: 2
    },
    {         //question 12
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Where is Roxy?</div></br><div class = 'reading-text'>After classes Chloe arrives home, makes a cup of coffee and goes to her bedroom. Everything is quiet and she plays with her pet rats. Chloe has two rats called Zena and Roxy. They live in a cage in Chloe's bedroom. Chloe knows that most people don't like rats. A year ago, Chloe didn't like rats either. Once, her friend Martin showed Chloe his rats and Chloe saw how intelligent and affectionate they were.</br></br>When one of Martin's rats had babies, Chloe asked her mum if she could have two pet rats for her birthday present. Her parents didn't like it, but Chloe got an excellent school report and they decided to give Chloe that present.</br></br>'There’s one very important rule,' said Chloe's mum. 'The rats live in your bedroom and never go to other rooms, especially the kitchen!'</br></br>In her room, Chloe opened the cage. She picked up Roxy and put her on the floor. Then she picked up Zena and put her on her shoulder. Roxy loved to explore climbing furniture and going under Chloe's bed. Zena was quieter and liked sitting on Chloe's shoulder.</br></br>Someone knocked on the door. 'Hi, Chloe,' called Mum.</br></br>'Mum, come in.'</br></br>'I'm going to my aerobics class. I'll return at seven. Dad's on his way home. He's making pasta tonight.'</br></br>'OK, Mum', Chloe replied.</br></br>Mum went away. Chloe called for Roxy. She started to search the house but she didn’t find Roxy. </br></br>When Dad came, they looked all over the house but couldn't find Roxy anywhere. Soon Mum came. She was smiling and Roxy was on her shoulder. When she arrived at the gym and opened her bag, she found Roxy sleeping in one of her shoes. She picked her up for the first time and understood that she liked rats too. </div><div class=reading-question>Chloe has got _____ pet rats.</div>",
        options: [
            'А. two',
            'В. five',
            'С. three',
            'D. four',

        ],
        rightAnswer: 0
    },
    {         //question 13
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Where is Roxy?</div></br><div class = 'reading-text'>After classes Chloe arrives home, makes a cup of coffee and goes to her bedroom. Everything is quiet and she plays with her pet rats. Chloe has two rats called Zena and Roxy. They live in a cage in Chloe's bedroom. Chloe knows that most people don't like rats. A year ago, Chloe didn't like rats either. Once, her friend Martin showed Chloe his rats and Chloe saw how intelligent and affectionate they were.</br></br>When one of Martin's rats had babies, Chloe asked her mum if she could have two pet rats for her birthday present. Her parents didn't like it, but Chloe got an excellent school report and they decided to give Chloe that present.</br></br>'There’s one very important rule,' said Chloe's mum. 'The rats live in your bedroom and never go to other rooms, especially the kitchen!'</br></br>In her room, Chloe opened the cage. She picked up Roxy and put her on the floor. Then she picked up Zena and put her on her shoulder. Roxy loved to explore climbing furniture and going under Chloe's bed. Zena was quieter and liked sitting on Chloe's shoulder.</br></br>Someone knocked on the door. 'Hi, Chloe,' called Mum.</br></br>'Mum, come in.'</br></br>'I'm going to my aerobics class. I'll return at seven. Dad's on his way home. He's making pasta tonight.'</br></br>'OK, Mum', Chloe replied.</br></br>Mum went away. Chloe called for Roxy. She started to search the house but she didn’t find Roxy. </br></br>When Dad came, they looked all over the house but couldn't find Roxy anywhere. Soon Mum came. She was smiling and Roxy was on her shoulder. When she arrived at the gym and opened her bag, she found Roxy sleeping in one of her shoes. She picked her up for the first time and understood that she liked rats too. </div><div class=reading-question>The girl’s name is ________.</div>",
        options: [
            'А. Cora',
            'В. Candy',
            'С. Chloe',
            'D. Clara',

        ],
        rightAnswer: 2
    },
    {         //question 14
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Where is Roxy?</div></br><div class = 'reading-text'>After classes Chloe arrives home, makes a cup of coffee and goes to her bedroom. Everything is quiet and she plays with her pet rats. Chloe has two rats called Zena and Roxy. They live in a cage in Chloe's bedroom. Chloe knows that most people don't like rats. A year ago, Chloe didn't like rats either. Once, her friend Martin showed Chloe his rats and Chloe saw how intelligent and affectionate they were.</br></br>When one of Martin's rats had babies, Chloe asked her mum if she could have two pet rats for her birthday present. Her parents didn't like it, but Chloe got an excellent school report and they decided to give Chloe that present.</br></br>'There’s one very important rule,' said Chloe's mum. 'The rats live in your bedroom and never go to other rooms, especially the kitchen!'</br></br>In her room, Chloe opened the cage. She picked up Roxy and put her on the floor. Then she picked up Zena and put her on her shoulder. Roxy loved to explore climbing furniture and going under Chloe's bed. Zena was quieter and liked sitting on Chloe's shoulder.</br></br>Someone knocked on the door. 'Hi, Chloe,' called Mum.</br></br>'Mum, come in.'</br></br>'I'm going to my aerobics class. I'll return at seven. Dad's on his way home. He's making pasta tonight.'</br></br>'OK, Mum', Chloe replied.</br></br>Mum went away. Chloe called for Roxy. She started to search the house but she didn’t find Roxy. </br></br>When Dad came, they looked all over the house but couldn't find Roxy anywhere. Soon Mum came. She was smiling and Roxy was on her shoulder. When she arrived at the gym and opened her bag, she found Roxy sleeping in one of her shoes. She picked her up for the first time and understood that she liked rats too. </div><div class=reading-question>Chloe likes to drink a cup of coffee after school and then she goes to her__________.</div>",
        options: [
            'А. bedroom',
            'В. living-room',
            'С. library',
            'D. parents’ room',

        ],
        rightAnswer: 0
    },
    {         //question 15
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Where is Roxy?</div></br><div class = 'reading-text'>After classes Chloe arrives home, makes a cup of coffee and goes to her bedroom. Everything is quiet and she plays with her pet rats. Chloe has two rats called Zena and Roxy. They live in a cage in Chloe's bedroom. Chloe knows that most people don't like rats. A year ago, Chloe didn't like rats either. Once, her friend Martin showed Chloe his rats and Chloe saw how intelligent and affectionate they were.</br></br>When one of Martin's rats had babies, Chloe asked her mum if she could have two pet rats for her birthday present. Her parents didn't like it, but Chloe got an excellent school report and they decided to give Chloe that present.</br></br>'There’s one very important rule,' said Chloe's mum. 'The rats live in your bedroom and never go to other rooms, especially the kitchen!'</br></br>In her room, Chloe opened the cage. She picked up Roxy and put her on the floor. Then she picked up Zena and put her on her shoulder. Roxy loved to explore climbing furniture and going under Chloe's bed. Zena was quieter and liked sitting on Chloe's shoulder.</br></br>Someone knocked on the door. 'Hi, Chloe,' called Mum.</br></br>'Mum, come in.'</br></br>'I'm going to my aerobics class. I'll return at seven. Dad's on his way home. He's making pasta tonight.'</br></br>'OK, Mum', Chloe replied.</br></br>Mum went away. Chloe called for Roxy. She started to search the house but she didn’t find Roxy. </br></br>When Dad came, they looked all over the house but couldn't find Roxy anywhere. Soon Mum came. She was smiling and Roxy was on her shoulder. When she arrived at the gym and opened her bag, she found Roxy sleeping in one of her shoes. She picked her up for the first time and understood that she liked rats too. </div><div class=reading-question>On returning from school, Chloe makes _______ and goes to her bedroom.</div>",
        options: [
            'А. green tea',
            'В. black tea',
            'С. drinks cocoa',
            'D. a cup of coffee',

        ],
        rightAnswer: 3
    },
    {         //question 16
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Where is Roxy?</div></br><div class = 'reading-text'>After classes Chloe arrives home, makes a cup of coffee and goes to her bedroom. Everything is quiet and she plays with her pet rats. Chloe has two rats called Zena and Roxy. They live in a cage in Chloe's bedroom. Chloe knows that most people don't like rats. A year ago, Chloe didn't like rats either. Once, her friend Martin showed Chloe his rats and Chloe saw how intelligent and affectionate they were.</br></br>When one of Martin's rats had babies, Chloe asked her mum if she could have two pet rats for her birthday present. Her parents didn't like it, but Chloe got an excellent school report and they decided to give Chloe that present.</br></br>'There’s one very important rule,' said Chloe's mum. 'The rats live in your bedroom and never go to other rooms, especially the kitchen!'</br></br>In her room, Chloe opened the cage. She picked up Roxy and put her on the floor. Then she picked up Zena and put her on her shoulder. Roxy loved to explore climbing furniture and going under Chloe's bed. Zena was quieter and liked sitting on Chloe's shoulder.</br></br>Someone knocked on the door. 'Hi, Chloe,' called Mum.</br></br>'Mum, come in.'</br></br>'I'm going to my aerobics class. I'll return at seven. Dad's on his way home. He's making pasta tonight.'</br></br>'OK, Mum', Chloe replied.</br></br>Mum went away. Chloe called for Roxy. She started to search the house but she didn’t find Roxy. </br></br>When Dad came, they looked all over the house but couldn't find Roxy anywhere. Soon Mum came. She was smiling and Roxy was on her shoulder. When she arrived at the gym and opened her bag, she found Roxy sleeping in one of her shoes. She picked her up for the first time and understood that she liked rats too. </div><div class=reading-question>The names of Chloe’s pet rats are _____ and _____.</div>",
        options: [
            'А. Zena; Roxy',
            'В. Roxy; Zulu',
            'С. Zena; Rodny',
            'D. Roxy; Zara',

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
        let score = localStorage.getItem(`${user}_score_r5`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_r5`, score);   //change a>c or 1>2

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
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_r5`);  //change a>c or 1>2
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




