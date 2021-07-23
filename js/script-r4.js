

var user = sessionStorage.getItem('user');



//localStorage.setItem(`${user}`, `${user}`);

//localStorage.setItem(`${user}1`, `${user}1`);


if (localStorage.getItem(`${user}_score_r4`) != 0) {    //change a>c or 1>2
    window.location.href = `${user}.html`;
    alert('Сіз бұл тестті қайта тапсыра алмайсыз');


}

//let score = 0; //Final result of test
if (!localStorage.getItem(`${user}_score_r4`)) {   //change a>c or 1>2
    localStorage.setItem(`${user}_score_r4`, 0);   //change a>c or 1>2
}

let score = localStorage.getItem(`${user}_score_r4`);  //change a>c or 1>2



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
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>READING LETTERS</div></br><div class = 'reading-text'> Letters are either informal or formal. Informal letters include personal letters of thanks and congratulations. Formal letters include ones writings for legal purposes or to and between companies. Formal letters are often considered contracts. For example, if you wrote to a store and asked them to send you a number of CDs, your letter would become a contract. </br></br>Letters are structured in similar ways. At the top is a return address, on the next level is the date followed by the name, position and address of the person you're writing to. A salutation, usually Dear... with the person's title and family name is next. Sometimes there is a subject line, giving the purpose or problem of the letter, but this purpose instead could be included in the introductory paragraph. The body is the middle of the letter and includes arguments and examples, and is followed by a closing paragraph that usually suggests some kind of action. A complimentary close such asYours sincerely, is next, then a signature and the name of the writer. </br></br>Here are tips for working with formal letters: </br></br>-Quickly scan the introductory and closing paragraph(s) to get an idea of what the letter is about. </br></br>-Look for examples in the middle paragraph(s). Are they convincing? </br></br>-Guess the writer's attitude based on his/her language choices. Is the writer angry, amused, fed up, pleased or something else? </br></br>-Make notes on letters as you read them so you can remember what you first thought when you refer to them later. </div><div class=reading-question> ‘I am writing to complain about’ is a / an _________ of the letter.</div>",
        options: [
            'A. middle',
            'B. subject line',
            'C. ending',
            "D. body",

        ],
        rightAnswer: 1
    },
    {    //question 2
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>READING LETTERS</div></br><div class = 'reading-text'> Letters are either informal or formal. Informal letters include personal letters of thanks and congratulations. Formal letters include ones writings for legal purposes or to and between companies. Formal letters are often considered contracts. For example, if you wrote to a store and asked them to send you a number of CDs, your letter would become a contract. </br></br>Letters are structured in similar ways. At the top is a return address, on the next level is the date followed by the name, position and address of the person you're writing to. A salutation, usually Dear... with the person's title and family name is next. Sometimes there is a subject line, giving the purpose or problem of the letter, but this purpose instead could be included in the introductory paragraph. The body is the middle of the letter and includes arguments and examples, and is followed by a closing paragraph that usually suggests some kind of action. A complimentary close such asYours sincerely, is next, then a signature and the name of the writer. </br></br>Here are tips for working with formal letters: </br></br>-Quickly scan the introductory and closing paragraph(s) to get an idea of what the letter is about. </br></br>-Look for examples in the middle paragraph(s). Are they convincing? </br></br>-Guess the writer's attitude based on his/her language choices. Is the writer angry, amused, fed up, pleased or something else? </br></br>-Make notes on letters as you read them so you can remember what you first thought when you refer to them later. </div><div class=reading-question> Contracts are written between _________.</div>",
        options: [
            'А. companies',
            'В. centers',
            'С. schoolmates',
            'D. friends',

        ],
        rightAnswer: 0
    },
    {        //question 3
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>READING LETTERS</div></br><div class = 'reading-text'> Letters are either informal or formal. Informal letters include personal letters of thanks and congratulations. Formal letters include ones writings for legal purposes or to and between companies. Formal letters are often considered contracts. For example, if you wrote to a store and asked them to send you a number of CDs, your letter would become a contract. </br></br>Letters are structured in similar ways. At the top is a return address, on the next level is the date followed by the name, position and address of the person you're writing to. A salutation, usually Dear... with the person's title and family name is next. Sometimes there is a subject line, giving the purpose or problem of the letter, but this purpose instead could be included in the introductory paragraph. The body is the middle of the letter and includes arguments and examples, and is followed by a closing paragraph that usually suggests some kind of action. A complimentary close such asYours sincerely, is next, then a signature and the name of the writer. </br></br>Here are tips for working with formal letters: </br></br>-Quickly scan the introductory and closing paragraph(s) to get an idea of what the letter is about. </br></br>-Look for examples in the middle paragraph(s). Are they convincing? </br></br>-Guess the writer's attitude based on his/her language choices. Is the writer angry, amused, fed up, pleased or something else? </br></br>-Make notes on letters as you read them so you can remember what you first thought when you refer to them later. </div><div class=reading-question> A letter written to a store to send __________ is a contract.</div>",
        options: [
            "А. a number of CDs",
            "В. personal letters of congratulations",
            "С. personal letters of thanks",
            "D. ones writings about birthdays",

        ],
        rightAnswer: 0
    },
    {          //question 4

        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>READING LETTERS</div></br><div class = 'reading-text'> Letters are either informal or formal. Informal letters include personal letters of thanks and congratulations. Formal letters include ones writings for legal purposes or to and between companies. Formal letters are often considered contracts. For example, if you wrote to a store and asked them to send you a number of CDs, your letter would become a contract. </br></br>Letters are structured in similar ways. At the top is a return address, on the next level is the date followed by the name, position and address of the person you're writing to. A salutation, usually Dear... with the person's title and family name is next. Sometimes there is a subject line, giving the purpose or problem of the letter, but this purpose instead could be included in the introductory paragraph. The body is the middle of the letter and includes arguments and examples, and is followed by a closing paragraph that usually suggests some kind of action. A complimentary close such asYours sincerely, is next, then a signature and the name of the writer. </br></br>Here are tips for working with formal letters: </br></br>-Quickly scan the introductory and closing paragraph(s) to get an idea of what the letter is about. </br></br>-Look for examples in the middle paragraph(s). Are they convincing? </br></br>-Guess the writer's attitude based on his/her language choices. Is the writer angry, amused, fed up, pleased or something else? </br></br>-Make notes on letters as you read them so you can remember what you first thought when you refer to them later. </div><div class=reading-question> A closing paragraph usually suggests some kind of action. The word suggests means ______ .</div>",
        options: [
            'А. wants',
            'В. predicts',
            'С. asks',
            'D. offers',

        ],
        rightAnswer: 3
    },

    {          //question 5 Егер шаршының а см қабырғасы мына аралықта жатса 0,9 < а < 1,2; онда периметрі қай аралықта жатады?
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>READING LETTERS</div></br><div class = 'reading-text'> Letters are either informal or formal. Informal letters include personal letters of thanks and congratulations. Formal letters include ones writings for legal purposes or to and between companies. Formal letters are often considered contracts. For example, if you wrote to a store and asked them to send you a number of CDs, your letter would become a contract. </br></br>Letters are structured in similar ways. At the top is a return address, on the next level is the date followed by the name, position and address of the person you're writing to. A salutation, usually Dear... with the person's title and family name is next. Sometimes there is a subject line, giving the purpose or problem of the letter, but this purpose instead could be included in the introductory paragraph. The body is the middle of the letter and includes arguments and examples, and is followed by a closing paragraph that usually suggests some kind of action. A complimentary close such asYours sincerely, is next, then a signature and the name of the writer. </br></br>Here are tips for working with formal letters: </br></br>-Quickly scan the introductory and closing paragraph(s) to get an idea of what the letter is about. </br></br>-Look for examples in the middle paragraph(s). Are they convincing? </br></br>-Guess the writer's attitude based on his/her language choices. Is the writer angry, amused, fed up, pleased or something else? </br></br>-Make notes on letters as you read them so you can remember what you first thought when you refer to them later. </div><div class=reading-question> The _________ of the letter includes problems and arguments.</div>",
        options: [
            'А. ending',
            'В. body',
            'С. introduction',
            'D. top',

        ],
        rightAnswer: 1
    },


    {          //question 6
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>READING LETTERS</div></br><div class = 'reading-text'> Letters are either informal or formal. Informal letters include personal letters of thanks and congratulations. Formal letters include ones writings for legal purposes or to and between companies. Formal letters are often considered contracts. For example, if you wrote to a store and asked them to send you a number of CDs, your letter would become a contract. </br></br>Letters are structured in similar ways. At the top is a return address, on the next level is the date followed by the name, position and address of the person you're writing to. A salutation, usually Dear... with the person's title and family name is next. Sometimes there is a subject line, giving the purpose or problem of the letter, but this purpose instead could be included in the introductory paragraph. The body is the middle of the letter and includes arguments and examples, and is followed by a closing paragraph that usually suggests some kind of action. A complimentary close such asYours sincerely, is next, then a signature and the name of the writer. </br></br>Here are tips for working with formal letters: </br></br>-Quickly scan the introductory and closing paragraph(s) to get an idea of what the letter is about. </br></br>-Look for examples in the middle paragraph(s). Are they convincing? </br></br>-Guess the writer's attitude based on his/her language choices. Is the writer angry, amused, fed up, pleased or something else? </br></br>-Make notes on letters as you read them so you can remember what you first thought when you refer to them later. </div><div class=reading-question> _________ is in the end of the letter.</div>",
        options: [
            'А. The name of the writer',
            'В. The problem',
            'С. The date',
            'D. A return address',

        ],
        rightAnswer: 0
    },
    {         //question 7
        question: "<div class = 'reading-heading'>Text 1</div> <div class = 'reading-heading'>READING LETTERS</div></br><div class = 'reading-text'> Letters are either informal or formal. Informal letters include personal letters of thanks and congratulations. Formal letters include ones writings for legal purposes or to and between companies. Formal letters are often considered contracts. For example, if you wrote to a store and asked them to send you a number of CDs, your letter would become a contract. </br></br>Letters are structured in similar ways. At the top is a return address, on the next level is the date followed by the name, position and address of the person you're writing to. A salutation, usually Dear... with the person's title and family name is next. Sometimes there is a subject line, giving the purpose or problem of the letter, but this purpose instead could be included in the introductory paragraph. The body is the middle of the letter and includes arguments and examples, and is followed by a closing paragraph that usually suggests some kind of action. A complimentary close such asYours sincerely, is next, then a signature and the name of the writer. </br></br>Here are tips for working with formal letters: </br></br>-Quickly scan the introductory and closing paragraph(s) to get an idea of what the letter is about. </br></br>-Look for examples in the middle paragraph(s). Are they convincing? </br></br>-Guess the writer's attitude based on his/her language choices. Is the writer angry, amused, fed up, pleased or something else? </br></br>-Make notes on letters as you read them so you can remember what you first thought when you refer to them later. </div><div class=reading-question> Yours sincerely is a _________.</div>",
        options: [
            'А. body',
            'В. introduction',
            'С. complimentary close',
            'D. writer’s attitude',

        ],
        rightAnswer: 2
    },
    {          //question 8
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Man’s best friends</div></br><div class = 'reading-text'> A Dorset couple, Andrew and Harriet Athay, got married with their dogs acting as best man and maid of honour on the big day because they had brought the couple together. Andrew and Harriet met when they were walking their respective pets along a beach. They started chatting when the dogs were playing with each other. </br></br>A Japanese restaurant is employing two parrots as waiters. The parrots take drinks orders from customers and repeat them to a waiter at the bar, who then brings the drinks to the table. The parrots had previously lived in a cage in a corner of the restaurant. One day the owner, Mr.Otusaka, heard the parrots copying his customers' requests and after that, he trained them to actually take orders. </br></br>Rats may have a bad reputation, but, says a spokesman for the charity Hero Rats, they are saving hundreds of lives in Africa because of their incredible sense of smell and intelligence. The rats are trained to detect mines and bombs lying in the ground. Being so small, they don't cause the mines to explode when they stand on them. They can also detect some diseases in humans. </br></br>Researchers from Newcastle University have discovered that farmers who are friendly and talk to their cows can boost milk production. They found that cows that had been given names by their farmers produced over 300 litres more milk a year than those which hadn't been named. </br></br>A dog called Scooby has appeared in court in a murder case. The animal's owner had been found dead in her flat and the family had asked for an investigation. Scooby, who had been in the flat, was brought into court to see how he would react to the man suspected of the crime. It barked very loudly. </div><div class=reading-question>The date is followed by the name, position is the _________of the letter.</div>",
        options: [
            'А. ending',
            'В. middle',
            'С. top',
            'D. body',

        ],
        rightAnswer: 2
    },
    {          //question 9
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Zaha Hadid</div></br><div class = 'reading-text'> Who is Zaha Hadid? By Peter Hedley </br></br>What does a famous architect look like? Well, he’s normally quite old with white hair. He often looks rather serious. Sometimes he wears modern glasses (the latest fashion), and grey suits. He comes from England, the USA, Germany, Japan or Spain. </br></br>But not Zaha Hadid. Firstly, she’s a woman. And than she grew up in Iraq before she went to London as a student. Zaha, who is not a quiet person, is passionate about what she does. In the words of writer Christopher Hawthrone, she is a big woman with a bigger intellect and a gigantic personality. She wears fashionable clothes, bright shiny jewellery, and very high-heeled shoes. When she’s excited she rolls her eye, and shouts at the students and colleagues who work with her. But the same colleagues and friends say that she is good with people; it’s just that she cares, really cares about architecture. As one of her friends says, when you get to know Zaha Hadid, you realize that all the storms are on the outside-the weather may be bad the other side of the window, but in the house it’s all calm and peaceful! </br></br>But it hasn’t always been easy for Zaha Hadid. In 1994, she won a competition for a new opera house in Cardiff, Wales (UK). The public weren’t interested, however. They said they wanted a new sports stadium, not the opera house and so her design was never built. But other people were noticing her work and suddenly she was designing building all over the world (like the Museum of Contemporary Art in Cincinnati, USA) and winning prizes. </br></br>In the newspapers they call Zaha the ‘diva of contemporary architecture’-as if she was a bad tempered opera star. Zaha Hadid’s reply? ‘Would they call me a dive if I was a guy’ </div><div class=reading-question>The opposite meaning of the word “easy” from the text is ________</div>",
        options: [
            'А. heavy',
            'В. light',
            'С. difficult',
            'D. normal',

        ],
        rightAnswer: 2
    },
    {         //question 10
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Zaha Hadid</div></br><div class = 'reading-text'> Who is Zaha Hadid? By Peter Hedley </br></br>What does a famous architect look like? Well, he’s normally quite old with white hair. He often looks rather serious. Sometimes he wears modern glasses (the latest fashion), and grey suits. He comes from England, the USA, Germany, Japan or Spain. </br></br>But not Zaha Hadid. Firstly, she’s a woman. And than she grew up in Iraq before she went to London as a student. Zaha, who is not a quiet person, is passionate about what she does. In the words of writer Christopher Hawthrone, she is a big woman with a bigger intellect and a gigantic personality. She wears fashionable clothes, bright shiny jewellery, and very high-heeled shoes. When she’s excited she rolls her eye, and shouts at the students and colleagues who work with her. But the same colleagues and friends say that she is good with people; it’s just that she cares, really cares about architecture. As one of her friends says, when you get to know Zaha Hadid, you realize that all the storms are on the outside-the weather may be bad the other side of the window, but in the house it’s all calm and peaceful! </br></br>But it hasn’t always been easy for Zaha Hadid. In 1994, she won a competition for a new opera house in Cardiff, Wales (UK). The public weren’t interested, however. They said they wanted a new sports stadium, not the opera house and so her design was never built. But other people were noticing her work and suddenly she was designing building all over the world (like the Museum of Contemporary Art in Cincinnati, USA) and winning prizes. </br></br>In the newspapers they call Zaha the ‘diva of contemporary architecture’-as if she was a bad tempered opera star. Zaha Hadid’s reply? ‘Would they call me a dive if I was a guy’ </div><div class=reading-question>When you get to know Zaha Hadid, you realize that the weather may be _____ the other side of the window ______ in the house it’s all _______.</div>",
        options: [
            'А. bad, and, terrible too!',
            'В. good, but, noisy!',
            'С. nice, but, not calm and peaceful! ',
            'D. bad, but, calm and peaceful!',

        ],
        rightAnswer: 3
    },
    {         //question 11
       question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Zaha Hadid</div></br><div class = 'reading-text'> Who is Zaha Hadid? By Peter Hedley </br></br>What does a famous architect look like? Well, he’s normally quite old with white hair. He often looks rather serious. Sometimes he wears modern glasses (the latest fashion), and grey suits. He comes from England, the USA, Germany, Japan or Spain. </br></br>But not Zaha Hadid. Firstly, she’s a woman. And than she grew up in Iraq before she went to London as a student. Zaha, who is not a quiet person, is passionate about what she does. In the words of writer Christopher Hawthrone, she is a big woman with a bigger intellect and a gigantic personality. She wears fashionable clothes, bright shiny jewellery, and very high-heeled shoes. When she’s excited she rolls her eye, and shouts at the students and colleagues who work with her. But the same colleagues and friends say that she is good with people; it’s just that she cares, really cares about architecture. As one of her friends says, when you get to know Zaha Hadid, you realize that all the storms are on the outside-the weather may be bad the other side of the window, but in the house it’s all calm and peaceful! </br></br>But it hasn’t always been easy for Zaha Hadid. In 1994, she won a competition for a new opera house in Cardiff, Wales (UK). The public weren’t interested, however. They said they wanted a new sports stadium, not the opera house and so her design was never built. But other people were noticing her work and suddenly she was designing building all over the world (like the Museum of Contemporary Art in Cincinnati, USA) and winning prizes. </br></br>In the newspapers they call Zaha the ‘diva of contemporary architecture’-as if she was a bad tempered opera star. Zaha Hadid’s reply? ‘Would they call me a dive if I was a guy’ </div><div class=reading-question> But the same colleagues and friends say that she _____.</div>",
       options: [
            "А. doesn’t know how to speak to people",
            "В. isn’t talkative",
            'С. gets on well with people',
            'D. is not communicable',

        ],
        rightAnswer: 2
    },
    {         //question 12
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Zaha Hadid</div></br><div class = 'reading-text'> Who is Zaha Hadid? By Peter Hedley </br></br>What does a famous architect look like? Well, he’s normally quite old with white hair. He often looks rather serious. Sometimes he wears modern glasses (the latest fashion), and grey suits. He comes from England, the USA, Germany, Japan or Spain. </br></br>But not Zaha Hadid. Firstly, she’s a woman. And than she grew up in Iraq before she went to London as a student. Zaha, who is not a quiet person, is passionate about what she does. In the words of writer Christopher Hawthrone, she is a big woman with a bigger intellect and a gigantic personality. She wears fashionable clothes, bright shiny jewellery, and very high-heeled shoes. When she’s excited she rolls her eye, and shouts at the students and colleagues who work with her. But the same colleagues and friends say that she is good with people; it’s just that she cares, really cares about architecture. As one of her friends says, when you get to know Zaha Hadid, you realize that all the storms are on the outside-the weather may be bad the other side of the window, but in the house it’s all calm and peaceful! </br></br>But it hasn’t always been easy for Zaha Hadid. In 1994, she won a competition for a new opera house in Cardiff, Wales (UK). The public weren’t interested, however. They said they wanted a new sports stadium, not the opera house and so her design was never built. But other people were noticing her work and suddenly she was designing building all over the world (like the Museum of Contemporary Art in Cincinnati, USA) and winning prizes. </br></br>In the newspapers they call Zaha the ‘diva of contemporary architecture’-as if she was a bad tempered opera star. Zaha Hadid’s reply? ‘Would they call me a dive if I was a guy’ </div><div class=reading-question>Zaha won a competition in ____.</div>",
        options: [
            'А. nineteen ninety four',
            'В. nineteen nineteen four',
            'С. nineteen forty nine',
            'D. ninety ninety four',

        ],
        rightAnswer: 0
    },
    {         //question 13
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Zaha Hadid</div></br><div class = 'reading-text'> Who is Zaha Hadid? By Peter Hedley </br></br>What does a famous architect look like? Well, he’s normally quite old with white hair. He often looks rather serious. Sometimes he wears modern glasses (the latest fashion), and grey suits. He comes from England, the USA, Germany, Japan or Spain. </br></br>But not Zaha Hadid. Firstly, she’s a woman. And than she grew up in Iraq before she went to London as a student. Zaha, who is not a quiet person, is passionate about what she does. In the words of writer Christopher Hawthrone, she is a big woman with a bigger intellect and a gigantic personality. She wears fashionable clothes, bright shiny jewellery, and very high-heeled shoes. When she’s excited she rolls her eye, and shouts at the students and colleagues who work with her. But the same colleagues and friends say that she is good with people; it’s just that she cares, really cares about architecture. As one of her friends says, when you get to know Zaha Hadid, you realize that all the storms are on the outside-the weather may be bad the other side of the window, but in the house it’s all calm and peaceful! </br></br>But it hasn’t always been easy for Zaha Hadid. In 1994, she won a competition for a new opera house in Cardiff, Wales (UK). The public weren’t interested, however. They said they wanted a new sports stadium, not the opera house and so her design was never built. But other people were noticing her work and suddenly she was designing building all over the world (like the Museum of Contemporary Art in Cincinnati, USA) and winning prizes. </br></br>In the newspapers they call Zaha the ‘diva of contemporary architecture’-as if she was a bad tempered opera star. Zaha Hadid’s reply? ‘Would they call me a dive if I was a guy’ </div><div class=reading-question>Zaha Hadid came from_____.</div>",
        options: [
            'А. England',
            'В. Germany',
            'С. The USA',
            'D. Iraq',

        ],
        rightAnswer: 3
    },
    {         //question 14
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Zaha Hadid</div></br><div class = 'reading-text'> Who is Zaha Hadid? By Peter Hedley </br></br>What does a famous architect look like? Well, he’s normally quite old with white hair. He often looks rather serious. Sometimes he wears modern glasses (the latest fashion), and grey suits. He comes from England, the USA, Germany, Japan or Spain. </br></br>But not Zaha Hadid. Firstly, she’s a woman. And than she grew up in Iraq before she went to London as a student. Zaha, who is not a quiet person, is passionate about what she does. In the words of writer Christopher Hawthrone, she is a big woman with a bigger intellect and a gigantic personality. She wears fashionable clothes, bright shiny jewellery, and very high-heeled shoes. When she’s excited she rolls her eye, and shouts at the students and colleagues who work with her. But the same colleagues and friends say that she is good with people; it’s just that she cares, really cares about architecture. As one of her friends says, when you get to know Zaha Hadid, you realize that all the storms are on the outside-the weather may be bad the other side of the window, but in the house it’s all calm and peaceful! </br></br>But it hasn’t always been easy for Zaha Hadid. In 1994, she won a competition for a new opera house in Cardiff, Wales (UK). The public weren’t interested, however. They said they wanted a new sports stadium, not the opera house and so her design was never built. But other people were noticing her work and suddenly she was designing building all over the world (like the Museum of Contemporary Art in Cincinnati, USA) and winning prizes. </br></br>In the newspapers they call Zaha the ‘diva of contemporary architecture’-as if she was a bad tempered opera star. Zaha Hadid’s reply? ‘Would they call me a dive if I was a guy’ </div><div class=reading-question>By the journalists Zaha was called the ‘____ of contemporary _____’.</div>",
        options: [
            'А. lady, building',
            'В. diva, architecture',
            'С. lady, life',
            'D. diva, design',

        ],
        rightAnswer: 1
    },
    {         //question 15
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Zaha Hadid</div></br><div class = 'reading-text'> Who is Zaha Hadid? By Peter Hedley </br></br>What does a famous architect look like? Well, he’s normally quite old with white hair. He often looks rather serious. Sometimes he wears modern glasses (the latest fashion), and grey suits. He comes from England, the USA, Germany, Japan or Spain. </br></br>But not Zaha Hadid. Firstly, she’s a woman. And than she grew up in Iraq before she went to London as a student. Zaha, who is not a quiet person, is passionate about what she does. In the words of writer Christopher Hawthrone, she is a big woman with a bigger intellect and a gigantic personality. She wears fashionable clothes, bright shiny jewellery, and very high-heeled shoes. When she’s excited she rolls her eye, and shouts at the students and colleagues who work with her. But the same colleagues and friends say that she is good with people; it’s just that she cares, really cares about architecture. As one of her friends says, when you get to know Zaha Hadid, you realize that all the storms are on the outside-the weather may be bad the other side of the window, but in the house it’s all calm and peaceful! </br></br>But it hasn’t always been easy for Zaha Hadid. In 1994, she won a competition for a new opera house in Cardiff, Wales (UK). The public weren’t interested, however. They said they wanted a new sports stadium, not the opera house and so her design was never built. But other people were noticing her work and suddenly she was designing building all over the world (like the Museum of Contemporary Art in Cincinnati, USA) and winning prizes. </br></br>In the newspapers they call Zaha the ‘diva of contemporary architecture’-as if she was a bad tempered opera star. Zaha Hadid’s reply? ‘Would they call me a dive if I was a guy’ </div><div class=reading-question>She went to London to study______.</div>",
        options: [
            'А. culture',
            'В. English',
            'С. at the University',
            'D. at primary school',

        ],
        rightAnswer: 2
    },
    {         //question 16
        question: "<div class = 'reading-heading'>Text 2</div> <div class = 'reading-heading'>Zaha Hadid</div></br><div class = 'reading-text'> Who is Zaha Hadid? By Peter Hedley </br></br>What does a famous architect look like? Well, he’s normally quite old with white hair. He often looks rather serious. Sometimes he wears modern glasses (the latest fashion), and grey suits. He comes from England, the USA, Germany, Japan or Spain. </br></br>But not Zaha Hadid. Firstly, she’s a woman. And than she grew up in Iraq before she went to London as a student. Zaha, who is not a quiet person, is passionate about what she does. In the words of writer Christopher Hawthrone, she is a big woman with a bigger intellect and a gigantic personality. She wears fashionable clothes, bright shiny jewellery, and very high-heeled shoes. When she’s excited she rolls her eye, and shouts at the students and colleagues who work with her. But the same colleagues and friends say that she is good with people; it’s just that she cares, really cares about architecture. As one of her friends says, when you get to know Zaha Hadid, you realize that all the storms are on the outside-the weather may be bad the other side of the window, but in the house it’s all calm and peaceful! </br></br>But it hasn’t always been easy for Zaha Hadid. In 1994, she won a competition for a new opera house in Cardiff, Wales (UK). The public weren’t interested, however. They said they wanted a new sports stadium, not the opera house and so her design was never built. But other people were noticing her work and suddenly she was designing building all over the world (like the Museum of Contemporary Art in Cincinnati, USA) and winning prizes. </br></br>In the newspapers they call Zaha the ‘diva of contemporary architecture’-as if she was a bad tempered opera star. Zaha Hadid’s reply? ‘Would they call me a dive if I was a guy’ </div><div class=reading-question>A new opera house was built in____.</div>",
        options: [
            'А. England',
            'В. Germany',
            'С. Spain',
            'D. Wales',

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
        let score = localStorage.getItem(`${user}_score_r4`);  //change a>c or 1>2
        score++;

        updateAnswerTracker('correct');
        localStorage.setItem(`${user}_score_r4`, score);   //change a>c or 1>2

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
    correctAnswer.innerHTML = localStorage.getItem(`${user}_score_r4`);  //change a>c or 1>2
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
















