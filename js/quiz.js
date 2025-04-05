const questions = [
    {
      question: "Qual país tem a maior população do mundo?",
      answers: ["Índia", "Estados Unidos", "Brasil", "China"],
      correct: 3
    },
    {
      question: "Qual país é conhecido como 'Terra do Sol Nascente'?",
      answers: ["China", "Japão", "Tailândia", "Coreia do Sul"],
      correct: 1
    },
    {
      question: "Qual país é famoso pela Torre Eiffel?",
      answers: ["Itália", "França", "Alemanha", "Portugal"],
      correct: 1
    },
    {
      question: "Onde fica o deserto do Saara?",
      answers: ["África", "América do Sul", "Austrália", "Ásia"],
      correct: 0
    },
    {
      question: "Qual país tem formato de bota?",
      answers: ["Grécia", "México", "Itália", "Turquia"],
      correct: 2
    },
    {
      question: "Qual desses países não tem costa marítima?",
      answers: ["Bolívia", "Chile", "Argentina", "Peru"],
      correct: 0
    },
    {
      question: "Qual país tem o maior número de ilhas?",
      answers: ["Suécia", "Filipinas", "Canadá", "Indonésia"],
      correct: 0
    },
    {
      question: "Em qual país está localizada a cidade de Dubai?",
      answers: ["Catar", "Emirados Árabes", "Omã", "Arábia Saudita"],
      correct: 1
    },
    {
      question: "Qual país é conhecido por sua produção de chocolate?",
      answers: ["Bélgica", "França", "Espanha", "Inglaterra"],
      correct: 0
    },
    {
      question: "Qual é o país com maior extensão territorial?",
      answers: ["Canadá", "Estados Unidos", "China", "Rússia"],
      correct: 3
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let time = 15;
  let timer;
  
  document.addEventListener("DOMContentLoaded", () => {
    const nickname = localStorage.getItem("nickname") || "Curioso";
    document.getElementById("quiz-nickname").textContent = nickname;
    startQuiz();
  });
  
  function startQuiz() {
    score = 0;
    currentQuestion = 0;
    document.getElementById("quiz-result").style.display = "none";
    document.getElementById("quiz-box").style.display = "block";
    document.getElementById("quiz-coins").textContent = "0";
    showQuestion();
  }
  
  function showQuestion() {
    if (currentQuestion >= questions.length) {
      endQuiz();
      return;
    }
  
    const q = questions[currentQuestion];
    document.getElementById("question-text").textContent = q.question;
  
    const answersList = document.getElementById("answers-list");
    answersList.innerHTML = "";
    q.answers.forEach((ans, idx) => {
      const li = document.createElement("li");
      li.textContent = ans;
      li.classList.add("btn", "btn-secondary", "answer-option");
      li.style.margin = "10px 0";
      li.onclick = () => checkAnswer(idx, li);
      answersList.appendChild(li);
    });
  
    time = 15;
    document.getElementById("timer").textContent = time;
    clearInterval(timer);
    timer = setInterval(() => {
      time--;
      document.getElementById("timer").textContent = time;
      if (time <= 0) {
        clearInterval(timer);
        currentQuestion++;
        showQuestion();
      }
    }, 1000);
  }
  
  function checkAnswer(selectedIndex, element) {
    clearInterval(timer);
    const correct = questions[currentQuestion].correct;
    const allOptions = document.querySelectorAll(".answer-option");
  
    // Desativa cliques
    allOptions.forEach(option => option.style.pointerEvents = "none");
  
    if (selectedIndex === correct) {
      score += 10;
      element.classList.add("correct");
    } else {
      element.classList.add("wrong");
      allOptions[correct].classList.add("correct");
    }
  
    setTimeout(() => {
      currentQuestion++;
      showQuestion();
    }, 1200);
  }
  
  function endQuiz() {
    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("quiz-result").style.display = "block";
    document.getElementById("final-score").textContent = score;
  
    const currentCoins = parseInt(localStorage.getItem("coins") || "150");
    localStorage.setItem("coins", currentCoins + score);
  }
  