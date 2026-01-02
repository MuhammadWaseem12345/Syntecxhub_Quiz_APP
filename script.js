const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks Text Mark Language"],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript"],
    answer: 1
  },
  {
    question: "Which is a JavaScript framework?",
    options: ["React", "Laravel", "Django"],
    answer: 0
  }
];

let currentIndex = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  selectedOption = null;
  optionsEl.innerHTML = "";

  const current = questions[currentIndex];
  questionEl.textContent = current.question;

  current.options.forEach((opt, index) => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = opt;

    div.onclick = () => {
      document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
      div.classList.add("selected");
      selectedOption = index;
    };

    optionsEl.appendChild(div);
  });
}

nextBtn.onclick = () => {
  if (selectedOption === null) return alert("Please select an option");

  if (selectedOption === questions[currentIndex].answer) {
    score++;
  }

  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";

  resultEl.classList.remove("hidden");
  scoreEl.textContent = `Your Score: ${score} / ${questions.length}`;
}

function restartQuiz() {
  currentIndex = 0;
  score = 0;

  questionEl.style.display = "block";
  optionsEl.style.display = "block";
  nextBtn.style.display = "block";

  resultEl.classList.add("hidden");
  loadQuestion();
}

loadQuestion();
