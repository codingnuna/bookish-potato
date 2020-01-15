const guestion = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Animal?",
        choice1: "Dog",
        choice2: "Cat",
        choice3: "Elephant",
        choice4: "Horse",
        answer: 1
    },
    {
        question: "Car?",
        choice1: "Truck",
        choice2: "Taxi",
        choice3: "Bus",
        choice4: "Fire Engine",
        answer: 3
    },
    {
        question: "Fruit?",
        choice1: "Apple",
        choice2: "Orange",
        choice3: "Banana",
        choice4: "Kiwi",
        answer: 4
    }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestions();
}

getNewQuestions = () => {
    if (availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign("/end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    console.log(availableQuestions);
    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);
        getNewQuestions();
    });
});

startGame();