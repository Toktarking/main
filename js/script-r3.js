
/*
question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Where is Roxy?</div></br><div class = 'reading-text'>After classes Chloe arrives home, makes a cup of coffee and goes to her bedroom. Everything is quiet and she plays with her pet rats. Chloe has two rats called Zena and Roxy. They live in a cage in Chloe's bedroom. Chloe knows that most people don't like rats. A year ago, Chloe didn't like rats either. Once, her friend Martin showed Chloe his rats and Chloe saw how intelligent and affectionate they were.</br></br>When one of Martin's rats had babies, Chloe asked her mum if she could have two pet rats for her birthday present. Her parents didn't like it, but Chloe got an excellent school report and they decided to give Chloe that present.</br></br>'There’s one very important rule,' said Chloe's mum. 'The rats live in your bedroom and never go to other rooms, especially the kitchen!'</br></br>In her room, Chloe opened the cage. She picked up Roxy and put her on the floor. Then she picked up Zena and put her on her shoulder. Roxy loved to explore climbing furniture and going under Chloe's bed. Zena was quieter and liked sitting on Chloe's shoulder.</br></br>Someone knocked on the door. 'Hi, Chloe,' called Mum.</br></br>'Mum, come in.'</br></br>'I'm going to my aerobics class. I'll return at seven. Dad's on his way home. He's making pasta tonight.'</br></br>'OK, Mum', Chloe replied.</br></br>Mum went away. Chloe called for Roxy. She started to search the house but she didn’t find Roxy. </br></br>When Dad came, they looked all over the house but couldn't find Roxy anywhere. Soon Mum came. She was smiling and Roxy was on her shoulder. When she arrived at the gym and opened her bag, she found Roxy sleeping in one of her shoes. She picked her up for the first time and understood that she liked rats too. </div><div class=reading-question>The opposite meaning of the word “easy” from the text is ________</div>",










*/




var user = sessionStorage.getItem('user');



//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_r3`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_r3`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_r3`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_r3`);  //change a>c or 1>2



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
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>English Primary School</div><div class = 'reading-text'> </br></br>In Great Britain school begins at the age of five. At the age of sixteen the children usually leave school. So they spend eleven years there. School gives knowledge to English children. </br></br>There are two main types of school in England. They are primary and secondary schools. When children are five, they go to primary schools. First they attend infant schools or infant classes. They spend two years there till they are seven. </br></br>It is easy to study at primary schools. Their classes are usually informal. They learn to read, count and write through different games. They sing songs, dance, look at pictures in interesting books, walk around the class and school, draw pictures, learn to get on with their classmates. So their lessons are easy, not difficult. </br></br>At the age of seven they go to junior schools and stay there till they are eleven. Real school begins. The lessons are more formal. There are different subjects on the timetable. Children study English, Maths, History, Nature Study, Geography, Art, Music, Physical Education (PE), Handicraft and Religion. </br></br>By the way, English children go to school five days a week. On Saturday and on Sunday they have their days off. Classes usually begin at nine and are over at 4 o'clock. Children have lunch at school. In many primary schools pupils don't wear uniforms. But some schools have special uniforms. School year starts in September and is over in summer, in July. </div><div class=reading-question> Maths, History, Nature Study, Geography are studied at _____ school.</div>",
        options: [
            'A. first',
            'B. primary',
            'C. infant',
            "D. junior",

        ],
        rightAnswer: 3
    },
    {    //question 2
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>English Primary School</div><div class = 'reading-text'> </br></br>In Great Britain school begins at the age of five. At the age of sixteen the children usually leave school. So they spend eleven years there. School gives knowledge to English children. </br></br>There are two main types of school in England. They are primary and secondary schools. When children are five, they go to primary schools. First they attend infant schools or infant classes. They spend two years there till they are seven. </br></br>It is easy to study at primary schools. Their classes are usually informal. They learn to read, count and write through different games. They sing songs, dance, look at pictures in interesting books, walk around the class and school, draw pictures, learn to get on with their classmates. So their lessons are easy, not difficult. </br></br>At the age of seven they go to junior schools and stay there till they are eleven. Real school begins. The lessons are more formal. There are different subjects on the timetable. Children study English, Maths, History, Nature Study, Geography, Art, Music, Physical Education (PE), Handicraft and Religion. </br></br>By the way, English children go to school five days a week. On Saturday and on Sunday they have their days off. Classes usually begin at nine and are over at 4 o'clock. Children have lunch at school. In many primary schools pupils don't wear uniforms. But some schools have special uniforms. School year starts in September and is over in summer, in July. </div><div class=reading-question> According to the text, there are two types of school in___________.</div>",
        options: [
            'А. Europe',
            'В. Scotland',
            'С. Wales',
            'D. England',

        ],
        rightAnswer: 3
    },
    {        //question 3
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>English Primary School</div><div class = 'reading-text'> </br></br>In Great Britain school begins at the age of five. At the age of sixteen the children usually leave school. So they spend eleven years there. School gives knowledge to English children. </br></br>There are two main types of school in England. They are primary and secondary schools. When children are five, they go to primary schools. First they attend infant schools or infant classes. They spend two years there till they are seven. </br></br>It is easy to study at primary schools. Their classes are usually informal. They learn to read, count and write through different games. They sing songs, dance, look at pictures in interesting books, walk around the class and school, draw pictures, learn to get on with their classmates. So their lessons are easy, not difficult. </br></br>At the age of seven they go to junior schools and stay there till they are eleven. Real school begins. The lessons are more formal. There are different subjects on the timetable. Children study English, Maths, History, Nature Study, Geography, Art, Music, Physical Education (PE), Handicraft and Religion. </br></br>By the way, English children go to school five days a week. On Saturday and on Sunday they have their days off. Classes usually begin at nine and are over at 4 o'clock. Children have lunch at school. In many primary schools pupils don't wear uniforms. But some schools have special uniforms. School year starts in September and is over in summer, in July. </div><div class=reading-question>According to the text, some schools have special _______.</div>",
        options: [
            "А. timetables",
            "В. games",
            "С. pupils",
            "D. uniforms",

        ],
        rightAnswer: 3
    },
    {          //question 4

        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>English Primary School</div><div class = 'reading-text'> </br></br>In Great Britain school begins at the age of five. At the age of sixteen the children usually leave school. So they spend eleven years there. School gives knowledge to English children. </br></br>There are two main types of school in England. They are primary and secondary schools. When children are five, they go to primary schools. First they attend infant schools or infant classes. They spend two years there till they are seven. </br></br>It is easy to study at primary schools. Their classes are usually informal. They learn to read, count and write through different games. They sing songs, dance, look at pictures in interesting books, walk around the class and school, draw pictures, learn to get on with their classmates. So their lessons are easy, not difficult. </br></br>At the age of seven they go to junior schools and stay there till they are eleven. Real school begins. The lessons are more formal. There are different subjects on the timetable. Children study English, Maths, History, Nature Study, Geography, Art, Music, Physical Education (PE), Handicraft and Religion. </br></br>By the way, English children go to school five days a week. On Saturday and on Sunday they have their days off. Classes usually begin at nine and are over at 4 o'clock. Children have lunch at school. In many primary schools pupils don't wear uniforms. But some schools have special uniforms. School year starts in September and is over in summer, in July. </div><div class=reading-question> Classes at junior schools are more _______.</div>",
        options: [
            'А. difficult',
            'В. formal',
            'С. interesting',
            'D. real',

        ],
        rightAnswer: 1
    },

    {          //question 5 Егер шаршының а см қабырғасы мына аралықта жатса 0,9 < а < 1,2; онда периметрі қай аралықта жатады?
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>English Primary School</div><div class = 'reading-text'> </br></br>In Great Britain school begins at the age of five. At the age of sixteen the children usually leave school. So they spend eleven years there. School gives knowledge to English children. </br></br>There are two main types of school in England. They are primary and secondary schools. When children are five, they go to primary schools. First they attend infant schools or infant classes. They spend two years there till they are seven. </br></br>It is easy to study at primary schools. Their classes are usually informal. They learn to read, count and write through different games. They sing songs, dance, look at pictures in interesting books, walk around the class and school, draw pictures, learn to get on with their classmates. So their lessons are easy, not difficult. </br></br>At the age of seven they go to junior schools and stay there till they are eleven. Real school begins. The lessons are more formal. There are different subjects on the timetable. Children study English, Maths, History, Nature Study, Geography, Art, Music, Physical Education (PE), Handicraft and Religion. </br></br>By the way, English children go to school five days a week. On Saturday and on Sunday they have their days off. Classes usually begin at nine and are over at 4 o'clock. Children have lunch at school. In many primary schools pupils don't wear uniforms. But some schools have special uniforms. School year starts in September and is over in summer, in July. </div><div class=reading-question> According to the text, _____ children attend infant classes at primary school.</div>",
        options: [
            'А. six-year-old',
            'В. two-year-old',
            'С. seven-year-old',
            'D. five-year-old',

        ],
        rightAnswer: 3
    },
    {          //question 6
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>English Primary School</div><div class = 'reading-text'> </br></br>In Great Britain school begins at the age of five. At the age of sixteen the children usually leave school. So they spend eleven years there. School gives knowledge to English children. </br></br>There are two main types of school in England. They are primary and secondary schools. When children are five, they go to primary schools. First they attend infant schools or infant classes. They spend two years there till they are seven. </br></br>It is easy to study at primary schools. Their classes are usually informal. They learn to read, count and write through different games. They sing songs, dance, look at pictures in interesting books, walk around the class and school, draw pictures, learn to get on with their classmates. So their lessons are easy, not difficult. </br></br>At the age of seven they go to junior schools and stay there till they are eleven. Real school begins. The lessons are more formal. There are different subjects on the timetable. Children study English, Maths, History, Nature Study, Geography, Art, Music, Physical Education (PE), Handicraft and Religion. </br></br>By the way, English children go to school five days a week. On Saturday and on Sunday they have their days off. Classes usually begin at nine and are over at 4 o'clock. Children have lunch at school. In many primary schools pupils don't wear uniforms. But some schools have special uniforms. School year starts in September and is over in summer, in July. </div><div class=reading-question> According to the text, pupils start studying in__________ .</div>",
        options: [
            'А. July',
            'В. April',
            'С. October',
            'D. September',

        ],
        rightAnswer: 3
    },
    {          //question 7 .
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>English Primary School</div><div class = 'reading-text'> </br></br>In Great Britain school begins at the age of five. At the age of sixteen the children usually leave school. So they spend eleven years there. School gives knowledge to English children. </br></br>There are two main types of school in England. They are primary and secondary schools. When children are five, they go to primary schools. First they attend infant schools or infant classes. They spend two years there till they are seven. </br></br>It is easy to study at primary schools. Their classes are usually informal. They learn to read, count and write through different games. They sing songs, dance, look at pictures in interesting books, walk around the class and school, draw pictures, learn to get on with their classmates. So their lessons are easy, not difficult. </br></br>At the age of seven they go to junior schools and stay there till they are eleven. Real school begins. The lessons are more formal. There are different subjects on the timetable. Children study English, Maths, History, Nature Study, Geography, Art, Music, Physical Education (PE), Handicraft and Religion. </br></br>By the way, English children go to school five days a week. On Saturday and on Sunday they have their days off. Classes usually begin at nine and are over at 4 o'clock. Children have lunch at school. In many primary schools pupils don't wear uniforms. But some schools have special uniforms. School year starts in September and is over in summer, in July. </div><div class=reading-question> The text informs us that English children finish school when they are_____ years old.</div>",
        options: [
            'А. 11',
            'В. 18',
            'С. 16',
            'D. 17',

        ],
        rightAnswer: 2
    },
    {         //question 8
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>English Primary School</div><div class = 'reading-text'> </br></br>In Great Britain school begins at the age of five. At the age of sixteen the children usually leave school. So they spend eleven years there. School gives knowledge to English children. </br></br>There are two main types of school in England. They are primary and secondary schools. When children are five, they go to primary schools. First they attend infant schools or infant classes. They spend two years there till they are seven. </br></br>It is easy to study at primary schools. Their classes are usually informal. They learn to read, count and write through different games. They sing songs, dance, look at pictures in interesting books, walk around the class and school, draw pictures, learn to get on with their classmates. So their lessons are easy, not difficult. </br></br>At the age of seven they go to junior schools and stay there till they are eleven. Real school begins. The lessons are more formal. There are different subjects on the timetable. Children study English, Maths, History, Nature Study, Geography, Art, Music, Physical Education (PE), Handicraft and Religion. </br></br>By the way, English children go to school five days a week. On Saturday and on Sunday they have their days off. Classes usually begin at nine and are over at 4 o'clock. Children have lunch at school. In many primary schools pupils don't wear uniforms. But some schools have special uniforms. School year starts in September and is over in summer, in July. </div><div class=reading-question> According to the text classes start at _____o’clock.</div>",
        options: [
            'А. four',
            'В. seven',
            'С. nine',
            'D. eleven',

        ],
        rightAnswer: 2
    },
    {          //question 9
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Does a lot of money really make you happy?</div><div class = 'reading-text'> </br></br>Mark Larsen won over nine million pounds on the lottery two years ago. At first, life was fantastic and Mark had some fun – he spent a lot of money on a big new house and new cars. Then the problems started. Some friends began to ask him for money. He had a lot of arguments with his wife and they divorced. Now he says, “I haven’t got any friends and I feel lonely. Life was better when I didn’t have much money.” </br></br>Many people think that money brings happiness. However, according to Professor Michel Argyle, this is not true. In Britain, we are richer but unhappier than fifty years ago. The USA is the richest country in the world but Americans are not the happiest people in the world, </br></br>Professor Argyle has found that very poor people and very rich people are unhappier than those in the between. For example, very poor people in the developing world live in overcrowded houses without any running water and with no electricity. However, there are also many millionaires with personal problems. A lot of young people who get rich very quickly are at risk. </br></br>Because of this, a few young millionaires are changing their lifestyles. Richard Cross, a multi-millionaire computer analyst from California, is an example. His house shows no signs of his wealth. There is a small garden and there are only two cars parked outside his house, ‘I want my kids to live a normal life.’ says Richard. </br></br>So what can make us happy? According to Professor Argyle, you should have one close relationship and some close friends. You should do a little sport and have a lot of contact with other people. Other people make you happy, not money! </div><div class=reading-question> FALSE statement according to the text is _______.</div>",
        options: [
            'А. A lot of money doesn’t bring happiness to human being',
            'В. Richard Cross wants his children to become multi-millionaires',
            'С. Having a lot of contact with other people makes you happy',
            'D. Doing a little sport is one part of happinesss',

        ],
        rightAnswer: 1
    },


    {         //question 10
       question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Does a lot of money really make you happy?</div><div class = 'reading-text'> </br></br>Mark Larsen won over nine million pounds on the lottery two years ago. At first, life was fantastic and Mark had some fun – he spent a lot of money on a big new house and new cars. Then the problems started. Some friends began to ask him for money. He had a lot of arguments with his wife and they divorced. Now he says, “I haven’t got any friends and I feel lonely. Life was better when I didn’t have much money.” </br></br>Many people think that money brings happiness. However, according to Professor Michel Argyle, this is not true. In Britain, we are richer but unhappier than fifty years ago. The USA is the richest country in the world but Americans are not the happiest people in the world, </br></br>Professor Argyle has found that very poor people and very rich people are unhappier than those in the between. For example, very poor people in the developing world live in overcrowded houses without any running water and with no electricity. However, there are also many millionaires with personal problems. A lot of young people who get rich very quickly are at risk. </br></br>Because of this, a few young millionaires are changing their lifestyles. Richard Cross, a multi-millionaire computer analyst from California, is an example. His house shows no signs of his wealth. There is a small garden and there are only two cars parked outside his house, ‘I want my kids to live a normal life.’ says Richard. </br></br>So what can make us happy? According to Professor Argyle, you should have one close relationship and some close friends. You should do a little sport and have a lot of contact with other people. Other people make you happy, not money! </div><div class=reading-question> The definition of the word 'lonely' in paragraph 1 is</div>",
       options: [
            'А. Britain',
            'В. Canada',
            'С. Japan',
            'D. California',

        ],
        rightAnswer: 3
    },
    {         //question 11
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Does a lot of money really make you happy?</div><div class = 'reading-text'> </br></br>Mark Larsen won over nine million pounds on the lottery two years ago. At first, life was fantastic and Mark had some fun – he spent a lot of money on a big new house and new cars. Then the problems started. Some friends began to ask him for money. He had a lot of arguments with his wife and they divorced. Now he says, “I haven’t got any friends and I feel lonely. Life was better when I didn’t have much money.” </br></br>Many people think that money brings happiness. However, according to Professor Michel Argyle, this is not true. In Britain, we are richer but unhappier than fifty years ago. The USA is the richest country in the world but Americans are not the happiest people in the world, </br></br>Professor Argyle has found that very poor people and very rich people are unhappier than those in the between. For example, very poor people in the developing world live in overcrowded houses without any running water and with no electricity. However, there are also many millionaires with personal problems. A lot of young people who get rich very quickly are at risk. </br></br>Because of this, a few young millionaires are changing their lifestyles. Richard Cross, a multi-millionaire computer analyst from California, is an example. His house shows no signs of his wealth. There is a small garden and there are only two cars parked outside his house, ‘I want my kids to live a normal life.’ says Richard. </br></br>So what can make us happy? According to Professor Argyle, you should have one close relationship and some close friends. You should do a little sport and have a lot of contact with other people. Other people make you happy, not money! </div><div class=reading-question>The definition of the word 'lonely' in paragraph 1 is</div>",
        options: [
            "А. rich so he doesn’t need anyone to be around him",
            'В. alone because no one what to stay with him',
            'С. poor because he spent all his money on a new house',
            'D. unhappy because he has no friends or close people to talk to',

        ],
        rightAnswer: 3
    },
    {         //question 12
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Does a lot of money really make you happy?</div><div class = 'reading-text'> </br></br>Mark Larsen won over nine million pounds on the lottery two years ago. At first, life was fantastic and Mark had some fun – he spent a lot of money on a big new house and new cars. Then the problems started. Some friends began to ask him for money. He had a lot of arguments with his wife and they divorced. Now he says, “I haven’t got any friends and I feel lonely. Life was better when I didn’t have much money.” </br></br>Many people think that money brings happiness. However, according to Professor Michel Argyle, this is not true. In Britain, we are richer but unhappier than fifty years ago. The USA is the richest country in the world but Americans are not the happiest people in the world, </br></br>Professor Argyle has found that very poor people and very rich people are unhappier than those in the between. For example, very poor people in the developing world live in overcrowded houses without any running water and with no electricity. However, there are also many millionaires with personal problems. A lot of young people who get rich very quickly are at risk. </br></br>Because of this, a few young millionaires are changing their lifestyles. Richard Cross, a multi-millionaire computer analyst from California, is an example. His house shows no signs of his wealth. There is a small garden and there are only two cars parked outside his house, ‘I want my kids to live a normal life.’ says Richard. </br></br>So what can make us happy? According to Professor Argyle, you should have one close relationship and some close friends. You should do a little sport and have a lot of contact with other people. Other people make you happy, not money! </div><div class=reading-question>According to the text, very poor people in the developing world live without ____________.</div>",
        options: [
            "А. electricity and running water",
            'В. food and running water',
            'С. central heating and food',
            'D. mobiles and Internet',
        ],
        rightAnswer: 1
    },

    {         //question 13
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Does a lot of money really make you happy?</div><div class = 'reading-text'> </br></br>Mark Larsen won over nine million pounds on the lottery two years ago. At first, life was fantastic and Mark had some fun – he spent a lot of money on a big new house and new cars. Then the problems started. Some friends began to ask him for money. He had a lot of arguments with his wife and they divorced. Now he says, “I haven’t got any friends and I feel lonely. Life was better when I didn’t have much money.” </br></br>Many people think that money brings happiness. However, according to Professor Michel Argyle, this is not true. In Britain, we are richer but unhappier than fifty years ago. The USA is the richest country in the world but Americans are not the happiest people in the world, </br></br>Professor Argyle has found that very poor people and very rich people are unhappier than those in the between. For example, very poor people in the developing world live in overcrowded houses without any running water and with no electricity. However, there are also many millionaires with personal problems. A lot of young people who get rich very quickly are at risk. </br></br>Because of this, a few young millionaires are changing their lifestyles. Richard Cross, a multi-millionaire computer analyst from California, is an example. His house shows no signs of his wealth. There is a small garden and there are only two cars parked outside his house, ‘I want my kids to live a normal life.’ says Richard. </br></br>So what can make us happy? According to Professor Argyle, you should have one close relationship and some close friends. You should do a little sport and have a lot of contact with other people. Other people make you happy, not money! </div><div class=reading-question> The main idea presented in the text is that ________.</div>",
        options: [
            'А. Couples are getting divorced because of money',
            'В. We need close relationship and friends to get rich',
            "С. You mustn’t forget your friends when you get rich",
            'D. A good and close relationship with people brings happiness',

        ],
        rightAnswer: 3
    },
    {         //question 14
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Does a lot of money really make you happy?</div><div class = 'reading-text'> </br></br>Mark Larsen won over nine million pounds on the lottery two years ago. At first, life was fantastic and Mark had some fun – he spent a lot of money on a big new house and new cars. Then the problems started. Some friends began to ask him for money. He had a lot of arguments with his wife and they divorced. Now he says, “I haven’t got any friends and I feel lonely. Life was better when I didn’t have much money.” </br></br>Many people think that money brings happiness. However, according to Professor Michel Argyle, this is not true. In Britain, we are richer but unhappier than fifty years ago. The USA is the richest country in the world but Americans are not the happiest people in the world, </br></br>Professor Argyle has found that very poor people and very rich people are unhappier than those in the between. For example, very poor people in the developing world live in overcrowded houses without any running water and with no electricity. However, there are also many millionaires with personal problems. A lot of young people who get rich very quickly are at risk. </br></br>Because of this, a few young millionaires are changing their lifestyles. Richard Cross, a multi-millionaire computer analyst from California, is an example. His house shows no signs of his wealth. There is a small garden and there are only two cars parked outside his house, ‘I want my kids to live a normal life.’ says Richard. </br></br>So what can make us happy? According to Professor Argyle, you should have one close relationship and some close friends. You should do a little sport and have a lot of contact with other people. Other people make you happy, not money! </div><div class=reading-question> The word 'fantastic' in paragraph 1 could best be replaced by</div>",
        options: [
            'А. imaginative',
            'В. wonderful',
            'С. crazy',
            'D. boring',

        ],
        rightAnswer: 1
    },
    {         //question 15
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Does a lot of money really make you happy?</div><div class = 'reading-text'> </br></br>Mark Larsen won over nine million pounds on the lottery two years ago. At first, life was fantastic and Mark had some fun – he spent a lot of money on a big new house and new cars. Then the problems started. Some friends began to ask him for money. He had a lot of arguments with his wife and they divorced. Now he says, “I haven’t got any friends and I feel lonely. Life was better when I didn’t have much money.” </br></br>Many people think that money brings happiness. However, according to Professor Michel Argyle, this is not true. In Britain, we are richer but unhappier than fifty years ago. The USA is the richest country in the world but Americans are not the happiest people in the world, </br></br>Professor Argyle has found that very poor people and very rich people are unhappier than those in the between. For example, very poor people in the developing world live in overcrowded houses without any running water and with no electricity. However, there are also many millionaires with personal problems. A lot of young people who get rich very quickly are at risk. </br></br>Because of this, a few young millionaires are changing their lifestyles. Richard Cross, a multi-millionaire computer analyst from California, is an example. His house shows no signs of his wealth. There is a small garden and there are only two cars parked outside his house, ‘I want my kids to live a normal life.’ says Richard. </br></br>So what can make us happy? According to Professor Argyle, you should have one close relationship and some close friends. You should do a little sport and have a lot of contact with other people. Other people make you happy, not money! </div><div class=reading-question> The synonym of the word 'multi-millionaire' is very ___________.</div>",
        options: [
            'А. rich',
            'В. poor',
            'С. strict',
            'D. unhappy',

        ],
        rightAnswer: 0
    },
    {         //question 16
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Does a lot of money really make you happy?</div><div class = 'reading-text'> </br></br>Mark Larsen won over nine million pounds on the lottery two years ago. At first, life was fantastic and Mark had some fun – he spent a lot of money on a big new house and new cars. Then the problems started. Some friends began to ask him for money. He had a lot of arguments with his wife and they divorced. Now he says, “I haven’t got any friends and I feel lonely. Life was better when I didn’t have much money.” </br></br>Many people think that money brings happiness. However, according to Professor Michel Argyle, this is not true. In Britain, we are richer but unhappier than fifty years ago. The USA is the richest country in the world but Americans are not the happiest people in the world, </br></br>Professor Argyle has found that very poor people and very rich people are unhappier than those in the between. For example, very poor people in the developing world live in overcrowded houses without any running water and with no electricity. However, there are also many millionaires with personal problems. A lot of young people who get rich very quickly are at risk. </br></br>Because of this, a few young millionaires are changing their lifestyles. Richard Cross, a multi-millionaire computer analyst from California, is an example. His house shows no signs of his wealth. There is a small garden and there are only two cars parked outside his house, ‘I want my kids to live a normal life.’ says Richard. </br></br>So what can make us happy? According to Professor Argyle, you should have one close relationship and some close friends. You should do a little sport and have a lot of contact with other people. Other people make you happy, not money! </div><div class=reading-question> Richard Cross’s house doesn’t expose his ___________.</div>",
        options: [
            'А. richness',
            'В. children',
            'С. happiness',
            'D. cars and gardens',

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
        let score = localStorage.getItem(`${user}_score_r3`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_r3`, score);   //change a>c or 1>2

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
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_r3`);  //change a>c or 1>2
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
















