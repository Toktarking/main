

var user = sessionStorage.getItem('user');



//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_r2`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_r2`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_r2`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_r2`);  //change a>c or 1>2



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
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>Food Around the World</div></br><div class = 'reading-text'>For 99 % of human history, people took their food from the world around them. They ate all that they could find, and then moved on. Then about 10,000 years ago, or for 1% of human history, people learned to farm the land and control their environment. </br></br>The kind of food we eat depends on which part of the world we live in, or which part of our country we live in. For example, in the south of China they eat rice, but in the north they eat noodles. In Scandinavia, they eat a lot of herrings, and the Portuguese love sardines. But in Central Europe, away from the sea, people don’t eat so much fish; they eat more meat and sausages. In Germany and Poland there are hundreds of different kinds of sausages. </br></br>In the north of America, Australia, and Europe there are two or more courses for every meal and people eat with knives and forks. </br></br>In China there is only one course, all the food is together on the table, and they eat with chopsticks. </br></br>In most parts of India and the Middle East people use their fingers and bread to pick up their food. </br></br>Nowadays it is possible to transport food easily from one part of the world to another. We can eat what we like, when we like, at any time of the year. Our bananas come from the Caribbean or Africa; our rice comes from India or the USA; our strawberries come from Chile or Spain. Food is a very big business. But people in poor countries are still hungry, and people in rich countries eat too much.</div><div class=reading-question>In Scandinavian countries and Portugal people eat mainly _______ .</div>",
        options: [
            'A. rice',
            'B. fish',
            'C. sausages',
            "D. meat",

        ],
        rightAnswer: 1
    },
    {    //question 2
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>Food Around the World</div></br><div class = 'reading-text'>For 99 % of human history, people took their food from the world around them. They ate all that they could find, and then moved on. Then about 10,000 years ago, or for 1% of human history, people learned to farm the land and control their environment. </br></br>The kind of food we eat depends on which part of the world we live in, or which part of our country we live in. For example, in the south of China they eat rice, but in the north they eat noodles. In Scandinavia, they eat a lot of herrings, and the Portuguese love sardines. But in Central Europe, away from the sea, people don’t eat so much fish; they eat more meat and sausages. In Germany and Poland there are hundreds of different kinds of sausages. </br></br>In the north of America, Australia, and Europe there are two or more courses for every meal and people eat with knives and forks. </br></br>In China there is only one course, all the food is together on the table, and they eat with chopsticks. </br></br>In most parts of India and the Middle East people use their fingers and bread to pick up their food. </br></br>Nowadays it is possible to transport food easily from one part of the world to another. We can eat what we like, when we like, at any time of the year. Our bananas come from the Caribbean or Africa; our rice comes from India or the USA; our strawberries come from Chile or Spain. Food is a very big business. But people in poor countries are still hungry, and people in rich countries eat too much.</div><div class=reading-question>The inhabitants of northern China prefer to eat _______.</div>",
        options: [
            'А. noodles',
            'В. herrings',
            'С. rice',
            'D. sardines',

        ],
        rightAnswer: 0
    },
    {        //question 3
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>Food Around the World</div></br><div class = 'reading-text'>For 99 % of human history, people took their food from the world around them. They ate all that they could find, and then moved on. Then about 10,000 years ago, or for 1% of human history, people learned to farm the land and control their environment. </br></br>The kind of food we eat depends on which part of the world we live in, or which part of our country we live in. For example, in the south of China they eat rice, but in the north they eat noodles. In Scandinavia, they eat a lot of herrings, and the Portuguese love sardines. But in Central Europe, away from the sea, people don’t eat so much fish; they eat more meat and sausages. In Germany and Poland there are hundreds of different kinds of sausages. </br></br>In the north of America, Australia, and Europe there are two or more courses for every meal and people eat with knives and forks. </br></br>In China there is only one course, all the food is together on the table, and they eat with chopsticks. </br></br>In most parts of India and the Middle East people use their fingers and bread to pick up their food. </br></br>Nowadays it is possible to transport food easily from one part of the world to another. We can eat what we like, when we like, at any time of the year. Our bananas come from the Caribbean or Africa; our rice comes from India or the USA; our strawberries come from Chile or Spain. Food is a very big business. But people in poor countries are still hungry, and people in rich countries eat too much.</div><div class=reading-question>According to the text, the business that brings a lot of money today is the ___business.</div>",
        options: [
            "А. show",
            "В. food",
            "С. film",
            "D. car",

        ],
        rightAnswer: 1
    },
    {          //question 4

        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>Food Around the World</div></br><div class = 'reading-text'>For 99 % of human history, people took their food from the world around them. They ate all that they could find, and then moved on. Then about 10,000 years ago, or for 1% of human history, people learned to farm the land and control their environment. </br></br>The kind of food we eat depends on which part of the world we live in, or which part of our country we live in. For example, in the south of China they eat rice, but in the north they eat noodles. In Scandinavia, they eat a lot of herrings, and the Portuguese love sardines. But in Central Europe, away from the sea, people don’t eat so much fish; they eat more meat and sausages. In Germany and Poland there are hundreds of different kinds of sausages. </br></br>In the north of America, Australia, and Europe there are two or more courses for every meal and people eat with knives and forks. </br></br>In China there is only one course, all the food is together on the table, and they eat with chopsticks. </br></br>In most parts of India and the Middle East people use their fingers and bread to pick up their food. </br></br>Nowadays it is possible to transport food easily from one part of the world to another. We can eat what we like, when we like, at any time of the year. Our bananas come from the Caribbean or Africa; our rice comes from India or the USA; our strawberries come from Chile or Spain. Food is a very big business. But people in poor countries are still hungry, and people in rich countries eat too much.</div><div class=reading-question>___________ are very famous countries for different kinds of sausages.</div>",
        options: [
            'А. Germany and Scandinavia',
            'В. Poland and China',
            'С. Germany and Australia',
            'D. Poland and Germany',

        ],
        rightAnswer: 3
    },

    {          //question 5 Егер шаршының а см қабырғасы мына аралықта жатса 0,9 < а < 1,2; онда периметрі қай аралықта жатады?
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>Food Around the World</div></br><div class = 'reading-text'>For 99 % of human history, people took their food from the world around them. They ate all that they could find, and then moved on. Then about 10,000 years ago, or for 1% of human history, people learned to farm the land and control their environment. </br></br>The kind of food we eat depends on which part of the world we live in, or which part of our country we live in. For example, in the south of China they eat rice, but in the north they eat noodles. In Scandinavia, they eat a lot of herrings, and the Portuguese love sardines. But in Central Europe, away from the sea, people don’t eat so much fish; they eat more meat and sausages. In Germany and Poland there are hundreds of different kinds of sausages. </br></br>In the north of America, Australia, and Europe there are two or more courses for every meal and people eat with knives and forks. </br></br>In China there is only one course, all the food is together on the table, and they eat with chopsticks. </br></br>In most parts of India and the Middle East people use their fingers and bread to pick up their food. </br></br>Nowadays it is possible to transport food easily from one part of the world to another. We can eat what we like, when we like, at any time of the year. Our bananas come from the Caribbean or Africa; our rice comes from India or the USA; our strawberries come from Chile or Spain. Food is a very big business. But people in poor countries are still hungry, and people in rich countries eat too much.</div><div class=reading-question>The kind of food we usually eat depends on the _________ it grows in.</div>",
        options: [
            'А. region',
            'В. weather',
            'С. time',
            'D. work',

        ],
        rightAnswer: 0
    },
    {          //question 6
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>Food Around the World</div></br><div class = 'reading-text'>For 99 % of human history, people took their food from the world around them. They ate all that they could find, and then moved on. Then about 10,000 years ago, or for 1% of human history, people learned to farm the land and control their environment. </br></br>The kind of food we eat depends on which part of the world we live in, or which part of our country we live in. For example, in the south of China they eat rice, but in the north they eat noodles. In Scandinavia, they eat a lot of herrings, and the Portuguese love sardines. But in Central Europe, away from the sea, people don’t eat so much fish; they eat more meat and sausages. In Germany and Poland there are hundreds of different kinds of sausages. </br></br>In the north of America, Australia, and Europe there are two or more courses for every meal and people eat with knives and forks. </br></br>In China there is only one course, all the food is together on the table, and they eat with chopsticks. </br></br>In most parts of India and the Middle East people use their fingers and bread to pick up their food. </br></br>Nowadays it is possible to transport food easily from one part of the world to another. We can eat what we like, when we like, at any time of the year. Our bananas come from the Caribbean or Africa; our rice comes from India or the USA; our strawberries come from Chile or Spain. Food is a very big business. But people in poor countries are still hungry, and people in rich countries eat too much.</div><div class=reading-question>According to the text, _______ people have meals with their hands.</div>",
        options: [
            'А. Indian',
            'В. Chinese',
            'С. Spanish',
            'D. Australian',

        ],
        rightAnswer: 0
    },
    {          //question 7 .
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>Food Around the World</div></br><div class = 'reading-text'>For 99 % of human history, people took their food from the world around them. They ate all that they could find, and then moved on. Then about 10,000 years ago, or for 1% of human history, people learned to farm the land and control their environment. </br></br>The kind of food we eat depends on which part of the world we live in, or which part of our country we live in. For example, in the south of China they eat rice, but in the north they eat noodles. In Scandinavia, they eat a lot of herrings, and the Portuguese love sardines. But in Central Europe, away from the sea, people don’t eat so much fish; they eat more meat and sausages. In Germany and Poland there are hundreds of different kinds of sausages. </br></br>In the north of America, Australia, and Europe there are two or more courses for every meal and people eat with knives and forks. </br></br>In China there is only one course, all the food is together on the table, and they eat with chopsticks. </br></br>In most parts of India and the Middle East people use their fingers and bread to pick up their food. </br></br>Nowadays it is possible to transport food easily from one part of the world to another. We can eat what we like, when we like, at any time of the year. Our bananas come from the Caribbean or Africa; our rice comes from India or the USA; our strawberries come from Chile or Spain. Food is a very big business. But people in poor countries are still hungry, and people in rich countries eat too much.</div><div class=reading-question> According to the text, all products are _________ nowadays.</div>",
        options: [
            'А. available',
            'В. expensive',
            'С. useful',
            'D. cheap',

        ],
        rightAnswer: 0
    },
    {         //question 8
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>Food Around the World</div></br><div class = 'reading-text'>For 99 % of human history, people took their food from the world around them. They ate all that they could find, and then moved on. Then about 10,000 years ago, or for 1% of human history, people learned to farm the land and control their environment. </br></br>The kind of food we eat depends on which part of the world we live in, or which part of our country we live in. For example, in the south of China they eat rice, but in the north they eat noodles. In Scandinavia, they eat a lot of herrings, and the Portuguese love sardines. But in Central Europe, away from the sea, people don’t eat so much fish; they eat more meat and sausages. In Germany and Poland there are hundreds of different kinds of sausages. </br></br>In the north of America, Australia, and Europe there are two or more courses for every meal and people eat with knives and forks. </br></br>In China there is only one course, all the food is together on the table, and they eat with chopsticks. </br></br>In most parts of India and the Middle East people use their fingers and bread to pick up their food. </br></br>Nowadays it is possible to transport food easily from one part of the world to another. We can eat what we like, when we like, at any time of the year. Our bananas come from the Caribbean or Africa; our rice comes from India or the USA; our strawberries come from Chile or Spain. Food is a very big business. But people in poor countries are still hungry, and people in rich countries eat too much.</div><div class=reading-question>According to the text most of tropical fruits come from _________.</div>",
        options: [
            'А. India and the USA',
            'В. Chile and Spain',
            'С. Africa and the Middle East',
            'D. the Caribbean and Africa',

        ],
        rightAnswer: 3
    },
    {          //question 9
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Man’s best friends</div></br><div class = 'reading-text'> A Dorset couple, Andrew and Harriet Athay, got married with their dogs acting as best man and maid of honour on the big day because they had brought the couple together. Andrew and Harriet met when they were walking their respective pets along a beach. They started chatting when the dogs were playing with each other. </br></br>A Japanese restaurant is employing two parrots as waiters. The parrots take drinks orders from customers and repeat them to a waiter at the bar, who then brings the drinks to the table. The parrots had previously lived in a cage in a corner of the restaurant. One day the owner, Mr.Otusaka, heard the parrots copying his customers' requests and after that, he trained them to actually take orders. </br></br>Rats may have a bad reputation, but, says a spokesman for the charity Hero Rats, they are saving hundreds of lives in Africa because of their incredible sense of smell and intelligence. The rats are trained to detect mines and bombs lying in the ground. Being so small, they don't cause the mines to explode when they stand on them. They can also detect some diseases in humans. </br></br>Researchers from Newcastle University have discovered that farmers who are friendly and talk to their cows can boost milk production. They found that cows that had been given names by their farmers produced over 300 litres more milk a year than those which hadn't been named. </br></br>A dog called Scooby has appeared in court in a murder case. The animal's owner had been found dead in her flat and the family had asked for an investigation. Scooby, who had been in the flat, was brought into court to see how he would react to the man suspected of the crime. It barked very loudly. </div><div class=reading-question>The statement made in paragraph 3 implies all of the following EXCEPT Rats ________</div>",
        options: [
            'А. can be useful for society',
            'В. are saving people’s lives in Africa',
            'С. are spreading infectious disease',
            'D. have also positive characteristics',

        ],
        rightAnswer: 2
    },
    {         //question 10
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Man’s best friends</div></br><div class = 'reading-text'> A Dorset couple, Andrew and Harriet Athay, got married with their dogs acting as best man and maid of honour on the big day because they had brought the couple together. Andrew and Harriet met when they were walking their respective pets along a beach. They started chatting when the dogs were playing with each other. </br></br>A Japanese restaurant is employing two parrots as waiters. The parrots take drinks orders from customers and repeat them to a waiter at the bar, who then brings the drinks to the table. The parrots had previously lived in a cage in a corner of the restaurant. One day the owner, Mr.Otusaka, heard the parrots copying his customers' requests and after that, he trained them to actually take orders. </br></br>Rats may have a bad reputation, but, says a spokesman for the charity Hero Rats, they are saving hundreds of lives in Africa because of their incredible sense of smell and intelligence. The rats are trained to detect mines and bombs lying in the ground. Being so small, they don't cause the mines to explode when they stand on them. They can also detect some diseases in humans. </br></br>Researchers from Newcastle University have discovered that farmers who are friendly and talk to their cows can boost milk production. They found that cows that had been given names by their farmers produced over 300 litres more milk a year than those which hadn't been named. </br></br>A dog called Scooby has appeared in court in a murder case. The animal's owner had been found dead in her flat and the family had asked for an investigation. Scooby, who had been in the flat, was brought into court to see how he would react to the man suspected of the crime. It barked very loudly. </div><div class=reading-question>The wrong sentence is __________________.</div>",
        options: [
            'А. Cows can produce more milk',
            'В. Dogs can catch the criminals',
            'С. Rats can discover mines and bombs ',
            'D. Parrots can copy customers’ words',

        ],
        rightAnswer: 1
    },
    {         //question 11
       question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Man’s best friends</div></br><div class = 'reading-text'> A Dorset couple, Andrew and Harriet Athay, got married with their dogs acting as best man and maid of honour on the big day because they had brought the couple together. Andrew and Harriet met when they were walking their respective pets along a beach. They started chatting when the dogs were playing with each other. </br></br>A Japanese restaurant is employing two parrots as waiters. The parrots take drinks orders from customers and repeat them to a waiter at the bar, who then brings the drinks to the table. The parrots had previously lived in a cage in a corner of the restaurant. One day the owner, Mr.Otusaka, heard the parrots copying his customers' requests and after that, he trained them to actually take orders. </br></br>Rats may have a bad reputation, but, says a spokesman for the charity Hero Rats, they are saving hundreds of lives in Africa because of their incredible sense of smell and intelligence. The rats are trained to detect mines and bombs lying in the ground. Being so small, they don't cause the mines to explode when they stand on them. They can also detect some diseases in humans. </br></br>Researchers from Newcastle University have discovered that farmers who are friendly and talk to their cows can boost milk production. They found that cows that had been given names by their farmers produced over 300 litres more milk a year than those which hadn't been named. </br></br>A dog called Scooby has appeared in court in a murder case. The animal's owner had been found dead in her flat and the family had asked for an investigation. Scooby, who had been in the flat, was brought into court to see how he would react to the man suspected of the crime. It barked very loudly. </div><div class=reading-question>Rats don't cause explosion of mines because they _______.</div>",
       options: [
            'А. are intelligent',
            'В. don’t like it',
            'С. are small',
            'D. explode bombs',

        ],
        rightAnswer: 2
    },
    {         //question 12
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Man’s best friends</div></br><div class = 'reading-text'> A Dorset couple, Andrew and Harriet Athay, got married with their dogs acting as best man and maid of honour on the big day because they had brought the couple together. Andrew and Harriet met when they were walking their respective pets along a beach. They started chatting when the dogs were playing with each other. </br></br>A Japanese restaurant is employing two parrots as waiters. The parrots take drinks orders from customers and repeat them to a waiter at the bar, who then brings the drinks to the table. The parrots had previously lived in a cage in a corner of the restaurant. One day the owner, Mr.Otusaka, heard the parrots copying his customers' requests and after that, he trained them to actually take orders. </br></br>Rats may have a bad reputation, but, says a spokesman for the charity Hero Rats, they are saving hundreds of lives in Africa because of their incredible sense of smell and intelligence. The rats are trained to detect mines and bombs lying in the ground. Being so small, they don't cause the mines to explode when they stand on them. They can also detect some diseases in humans. </br></br>Researchers from Newcastle University have discovered that farmers who are friendly and talk to their cows can boost milk production. They found that cows that had been given names by their farmers produced over 300 litres more milk a year than those which hadn't been named. </br></br>A dog called Scooby has appeared in court in a murder case. The animal's owner had been found dead in her flat and the family had asked for an investigation. Scooby, who had been in the flat, was brought into court to see how he would react to the man suspected of the crime. It barked very loudly. </div><div class=reading-question>According to paragraph 1 best man and maid of honour were _________</div>",
        options: [
            'А. parrots',
            'В. rats',
            'С. cats',
            'D. dogs',

        ],
        rightAnswer: 3
    },
    {         //question 13
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Man’s best friends</div></br><div class = 'reading-text'> A Dorset couple, Andrew and Harriet Athay, got married with their dogs acting as best man and maid of honour on the big day because they had brought the couple together. Andrew and Harriet met when they were walking their respective pets along a beach. They started chatting when the dogs were playing with each other. </br></br>A Japanese restaurant is employing two parrots as waiters. The parrots take drinks orders from customers and repeat them to a waiter at the bar, who then brings the drinks to the table. The parrots had previously lived in a cage in a corner of the restaurant. One day the owner, Mr.Otusaka, heard the parrots copying his customers' requests and after that, he trained them to actually take orders. </br></br>Rats may have a bad reputation, but, says a spokesman for the charity Hero Rats, they are saving hundreds of lives in Africa because of their incredible sense of smell and intelligence. The rats are trained to detect mines and bombs lying in the ground. Being so small, they don't cause the mines to explode when they stand on them. They can also detect some diseases in humans. </br></br>Researchers from Newcastle University have discovered that farmers who are friendly and talk to their cows can boost milk production. They found that cows that had been given names by their farmers produced over 300 litres more milk a year than those which hadn't been named. </br></br>A dog called Scooby has appeared in court in a murder case. The animal's owner had been found dead in her flat and the family had asked for an investigation. Scooby, who had been in the flat, was brought into court to see how he would react to the man suspected of the crime. It barked very loudly. </div><div class=reading-question>The wrong sentence is _______________.</div>",
        options: [
            'А. Parrots copy customers’ orders to a waiter',
            'В. Waiters bring the drinks to the table',
            'С. Parrots were trained by the owner of the restaurant',
            'D. The restaurant is employing customers as waiters',

        ],
        rightAnswer: 3
    },
    {         //question 14
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Man’s best friends</div></br><div class = 'reading-text'> A Dorset couple, Andrew and Harriet Athay, got married with their dogs acting as best man and maid of honour on the big day because they had brought the couple together. Andrew and Harriet met when they were walking their respective pets along a beach. They started chatting when the dogs were playing with each other. </br></br>A Japanese restaurant is employing two parrots as waiters. The parrots take drinks orders from customers and repeat them to a waiter at the bar, who then brings the drinks to the table. The parrots had previously lived in a cage in a corner of the restaurant. One day the owner, Mr.Otusaka, heard the parrots copying his customers' requests and after that, he trained them to actually take orders. </br></br>Rats may have a bad reputation, but, says a spokesman for the charity Hero Rats, they are saving hundreds of lives in Africa because of their incredible sense of smell and intelligence. The rats are trained to detect mines and bombs lying in the ground. Being so small, they don't cause the mines to explode when they stand on them. They can also detect some diseases in humans. </br></br>Researchers from Newcastle University have discovered that farmers who are friendly and talk to their cows can boost milk production. They found that cows that had been given names by their farmers produced over 300 litres more milk a year than those which hadn't been named. </br></br>A dog called Scooby has appeared in court in a murder case. The animal's owner had been found dead in her flat and the family had asked for an investigation. Scooby, who had been in the flat, was brought into court to see how he would react to the man suspected of the crime. It barked very loudly. </div><div class=reading-question>Farmers can increase milk production if they ________.</div>",
        options: [
            'А. feed cows a lot',
            'В. lash their cows',
            'С. treat their cows friendly',
            'D. keep cows in the zoo',

        ],
        rightAnswer: 2
    },
    {         //question 15
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Man’s best friends</div></br><div class = 'reading-text'> A Dorset couple, Andrew and Harriet Athay, got married with their dogs acting as best man and maid of honour on the big day because they had brought the couple together. Andrew and Harriet met when they were walking their respective pets along a beach. They started chatting when the dogs were playing with each other. </br></br>A Japanese restaurant is employing two parrots as waiters. The parrots take drinks orders from customers and repeat them to a waiter at the bar, who then brings the drinks to the table. The parrots had previously lived in a cage in a corner of the restaurant. One day the owner, Mr.Otusaka, heard the parrots copying his customers' requests and after that, he trained them to actually take orders. </br></br>Rats may have a bad reputation, but, says a spokesman for the charity Hero Rats, they are saving hundreds of lives in Africa because of their incredible sense of smell and intelligence. The rats are trained to detect mines and bombs lying in the ground. Being so small, they don't cause the mines to explode when they stand on them. They can also detect some diseases in humans. </br></br>Researchers from Newcastle University have discovered that farmers who are friendly and talk to their cows can boost milk production. They found that cows that had been given names by their farmers produced over 300 litres more milk a year than those which hadn't been named. </br></br>A dog called Scooby has appeared in court in a murder case. The animal's owner had been found dead in her flat and the family had asked for an investigation. Scooby, who had been in the flat, was brought into court to see how he would react to the man suspected of the crime. It barked very loudly. </div><div class=reading-question>According to the text, Scooby __________.</div>",
        options: [
            'А. taught to take orders and bring them to the tables',
            'В. acted as a best man at Andrew and Harriet’s wedding',
            'С. trained to discover bombs lying in the ground',
            'D. appeared in court to help investigate a crime',

        ],
        rightAnswer: 3
    },
    {         //question 16
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Man’s best friends</div></br><div class = 'reading-text'> A Dorset couple, Andrew and Harriet Athay, got married with their dogs acting as best man and maid of honour on the big day because they had brought the couple together. Andrew and Harriet met when they were walking their respective pets along a beach. They started chatting when the dogs were playing with each other. </br></br>A Japanese restaurant is employing two parrots as waiters. The parrots take drinks orders from customers and repeat them to a waiter at the bar, who then brings the drinks to the table. The parrots had previously lived in a cage in a corner of the restaurant. One day the owner, Mr.Otusaka, heard the parrots copying his customers' requests and after that, he trained them to actually take orders. </br></br>Rats may have a bad reputation, but, says a spokesman for the charity Hero Rats, they are saving hundreds of lives in Africa because of their incredible sense of smell and intelligence. The rats are trained to detect mines and bombs lying in the ground. Being so small, they don't cause the mines to explode when they stand on them. They can also detect some diseases in humans. </br></br>Researchers from Newcastle University have discovered that farmers who are friendly and talk to their cows can boost milk production. They found that cows that had been given names by their farmers produced over 300 litres more milk a year than those which hadn't been named. </br></br>A dog called Scooby has appeared in court in a murder case. The animal's owner had been found dead in her flat and the family had asked for an investigation. Scooby, who had been in the flat, was brought into court to see how he would react to the man suspected of the crime. It barked very loudly. </div><div class=reading-question>Parrots are serving in the restaurant as _______</div>",
        options: [
            'А. customers',
            'В. managers',
            'С. singers',
            'D. waiters',

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
        let score = localStorage.getItem(`${user}_score_r2`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_r2`, score);   //change a>c or 1>2

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
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_r2`);  //change a>c or 1>2
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
















