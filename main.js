let score = 0;
let currentQuestionIndex = 0;

let questions = [
  {
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: ["Bonn", "Düsseldorf", "Berlin", "Hamburg"],
    correctAnswer: 2,
  },
  {
    question: "Was ist die Hauptstadt von Spanien?",
    answers: ["Barcelona", "Sevilla", "Grenada", "Madrid"],
    correctAnswer: 3,
  },
  {
    question: "Was ist die Hauptstadt von Bosnien-Herzegowina?",
    answers: ["Banja-Luka", "Mostar", "Sarajevo", "Belgrad"],
    correctAnswer: 2,
  },
  {
    question: "Was ist die Hauptstadt von Schweden?",
    answers: ["Stockholm", "Helsinki", "Malmö", "Oslo"],
    correctAnswer: 0,
  },
  {
    question: "Was ist die Hauptstadt von Argentinien?",
    answers: ["Rosario", "Buenos Aires", "Cordoba", "Medoza"],
    correctAnswer: 1,
  },
  {
    question: "Was ist die Hauotstadt von Brasilien?",
    answers: ["Rio de Janeiro", "Bahia", "Brasilia", "Puerto Alegre"],
    correctAnswer: 2,
  },
  {
    question: "Was ist die Hauotstadt von Marokko?",
    answers: ["Marrakesch", "Rabat", "Casablanca", "Fes"],
    correctAnswer: 1,
  },
  {
    question: "Was ist die Hauotstadt von Südafrika?",
    answers: ["Kapstadt", "Johannesburg", "Durban", "Pretoria"],
    correctAnswer: 3,
  },
];

let answersDiv = document.getElementById("answers");
let answerButton = document.querySelector(".answer-button");

function displayQuestion() {
  if (currentQuestionIndex >= questions.length) {
    document.getElementById("quiz-container").hidden = true;
    document.getElementById("result").hidden = false;
    document.getElementById("score").textContent = score;
    return;
  }

  let question = questions[currentQuestionIndex];

  document.getElementById("question").textContent = question.question;
  answersDiv.innerHTML = "";

  question.answers.forEach((answer, index) => {
    let answerButton = document.createElement("button");
    answerButton.classList.add("btn", "btn-dark", "me-2");
    answerButton.textContent = answer;
    answerButton.onclick = () => checkAnswer(index);
    answersDiv.appendChild(answerButton);
  });
}
displayQuestion();

function checkAnswer(userAnswer) {
  let correctAnswer = questions[currentQuestionIndex].correctAnswer;

  if (userAnswer == correctAnswer) {
    score += 1;
  }

  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex += 1;
  displayQuestion();
}
