// Score zeigt den Stand der richtig beantworteten Fragen an
let score = 0;

// currentQuestionIndex welche Frage ist aktuell
let currentQuestionIndex = 0;

// Fragen, Antworten und Inhalte
let questions = [
  {
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: ["Bonn", "Düsseldorf", "Berlin", "Hamburg"],
    correctAnswer: 2,
    img: "assets/img/berlin.jpg",
  },
  {
    question: "Was ist die Hauptstadt von Spanien?",
    answers: ["Barcelona", "Sevilla", "Grenada", "Madrid"],
    correctAnswer: 3,
    img: "assets/img/madrid.jpg",
  },
  {
    question: "Was ist die Hauptstadt von Bosnien-Herzegowina?",
    answers: ["Banja-Luka", "Mostar", "Sarajevo", "Belgrad"],
    correctAnswer: 2,
    img: "assets/img/sarajevo.jpg",
  },
  {
    question: "Was ist die Hauptstadt von Schweden?",
    answers: ["Stockholm", "Helsinki", "Malmö", "Oslo"],
    correctAnswer: 0,
    img: "assets/img/stockholm.jpg",
  },
  {
    question: "Was ist die Hauptstadt von Argentinien?",
    answers: ["Rosario", "Buenos Aires", "Cordoba", "Medoza"],
    correctAnswer: 1,
    img: "assets/img/buenos.jpg",
  },
  {
    question: "Was ist die Hauptstadt von Brasilien?",
    answers: ["Rio de Janeiro", "Bahia", "Brasilia", "Santos"],
    correctAnswer: 2,
    img: "assets/img/brasilia.jpg",
  },
  {
    question: "Was ist die Hauptstadt von Marokko?",
    answers: ["Marrakesch", "Rabat", "Casablanca", "Fes"],
    correctAnswer: 1,
    img: "assets/img/rabat.jpg",
  },
  {
    question: "Was ist die Hauptstadt von Südafrika?",
    answers: ["Kapstadt", "Johannesburg", "Durban", "Pretoria"],
    correctAnswer: 3,
    img: "assets/img/pretoria.jpg",
  },
];

// HTML Elemente
let answersDiv = document.getElementById("answers");
let answerButton = document.querySelector(".answer-button");
let checkResult = document.querySelector(".check-result");

// Zeigt das Resultat an, wenn alle Fragen beantwortet sind
function outputResult() {
  if (currentQuestionIndex >= questions.length) {
    document.getElementById("quiz-container").hidden = true;
    document.getElementById("result").hidden = false;
  }

  // Zeigt das Resultat an inkl. Bewertung zum Score
  if (currentQuestionIndex >= questions.length && score <= 3) {
    document.getElementById(
      "score"
    ).textContent = `Du hast ${score} von 8 möglichen Punkten erhalten, du musst noch üben`;
    return;
  } else if (currentQuestionIndex >= questions.length && score <= 5) {
    document.getElementById(
      "score"
    ).textContent = `Du hast ${score} von 8 möglichen Punkten erhalten, das sieht gut aus`;
    return;
  } else if (currentQuestionIndex >= questions.length && score > 5) {
    document.getElementById(
      "score"
    ).textContent = `Du hast ${score} von 8 möglichen Punkten erhalten, du bist ein Profi`;
    return;
  }
}

// Zeigt die Fragen an und zum Schluss das Resultat
function displayQuestion() {
  // Zeigt das Resultat an
  outputResult();

  // Zeigt die Fragen mit Buttons im HTML an und überprüft durch die function "checkAnswer" das Ergebnis
  let question = questions[currentQuestionIndex];

  document.getElementById("question").textContent = question.question;
  answersDiv.innerHTML = "";

  question.answers.forEach((answer, index) => {
    let answerButton = document.createElement("button");
    answerButton.classList.add("btn", "btn-dark", "me-1", "fs-6", "p-0");
    answerButton.textContent = answer;
    answerButton.onclick = () => checkAnswer(index);
    answersDiv.appendChild(answerButton);
  });
}
displayQuestion();

// Prüft die Antwort auf Richtigkeit
function checkAnswer(userAnswer) {
  let correctAnswer = questions[currentQuestionIndex].correctAnswer;
  let imgSrc = questions[currentQuestionIndex].img;
  let correctAnswerOutput =
    questions[currentQuestionIndex].answers[correctAnswer];
  if (userAnswer == correctAnswer) {
    score += 1;
    checkResult.innerHTML = ` <img style="max-width: 50%; max-height: 70%" src='${imgSrc}' alt='Bild'>
    <h2> Super! ${correctAnswerOutput} ist richtig </h2>
    `;
    // Errorhandling
    answersDiv.hidden = true;
  } else {
    checkResult.innerHTML = ` <img style="max-width: 50%; max-height: 70%" src='${imgSrc}' alt='Bild'>
    <h2> Das ist leider falsch! ${correctAnswerOutput} ist richtig </h2>
    `;
    // Errorhandling
    answersDiv.hidden = true;
  }
}
// Zeigt die nächste Frage an und zählt den currentQuestionIndex hoch
function nextQuestion() {
  checkResult.innerHTML = "";
  answersDiv.hidden = false;
  currentQuestionIndex += 1;
  displayQuestion();
}
