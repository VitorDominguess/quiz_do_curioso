function iniciarQuiz(perguntas) {
  let currentQuestion = 0;
  let score = 0;
  let timer;

  function showQuestion() {
    if (currentQuestion >= perguntas.length) {
      endQuiz();
      return;
    }

    const q = perguntas[currentQuestion];
    document.getElementById("question-text").textContent = q.question;

    const answersList = document.getElementById("answers-list");
    answersList.innerHTML = "";

    q.answers.forEach((ans, idx) => {
      const li = document.createElement("li");
      li.textContent = ans;
      li.classList.add("btn", "btn-secondary", "answer-option");
      li.onclick = () => checkAnswer(idx, li);
      answersList.appendChild(li);
    });

    let time = 15;
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
    const correct = perguntas[currentQuestion].correct;
    const allOptions = document.querySelectorAll(".answer-option");

    allOptions.forEach(opt => opt.style.pointerEvents = "none");

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

  document.getElementById("quiz-result").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  document.getElementById("quiz-coins").textContent = "0";
  showQuestion();
}

  
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
  
  document.addEventListener("DOMContentLoaded", () => {
    const quizSelecionado = JSON.parse(localStorage.getItem("quizSelecionado"));
  
    if (!quizSelecionado) {
      alert("Nenhum quiz selecionado!");
      window.location.href = "categorias.html";
      return;
    }
  
    const nickname = localStorage.getItem("nickname") || "Curioso";
    document.getElementById("quiz-nickname").textContent = nickname;
  
    // Exibe nome do quiz (opcional)
    document.title = `Quiz do Curioso | ${quizSelecionado.titulo}`;
    
    iniciarQuizComPerguntas(quizSelecionado);
  });

  function iniciarQuizComPerguntas(quiz) {
    const perguntasPorQuiz = {
      "Capitais do Mundo": [
        {
          question: "Qual a capital da Austrália?",
          answers: ["Sydney", "Canberra", "Melbourne", "Perth"],
          correct: 1
        },
        {
          question: "Qual a capital do Canadá?",
          answers: ["Toronto", "Ottawa", "Vancouver", "Quebec"],
          correct: 1
        },
        {
          question: "Qual a capital da Argentina?",
          answers: ["Córdoba", "Rosário", "Buenos Aires", "Mendoza"],
          correct: 2
        },
        {
          question: "Qual a capital da África do Sul?",
          answers: ["Joanesburgo", "Pretória", "Cidade do Cabo", "Durban"],
          correct: 1
        },
        {
          question: "Qual a capital do Japão?",
          answers: ["Osaka", "Quioto", "Tóquio", "Hiroshima"],
          correct: 2
        }
      ],
      "Bandeiras": [
        {
          question: "Qual país tem uma folha de bordo em sua bandeira?",
          answers: ["Canadá", "Estados Unidos", "México", "Chile"],
          correct: 0
        },
        {
          question: "Qual país tem uma bandeira vermelha com uma estrela amarela?",
          answers: ["China", "Turquia", "Vietnã", "Coreia do Norte"],
          correct: 2
        },
        {
          question: "Qual país possui uma cruz azul em fundo branco?",
          answers: ["Suécia", "Finlândia", "Noruega", "Dinamarca"],
          correct: 1
        },
        {
          question: "Qual país tem uma bandeira verde, branca e laranja em listras verticais?",
          answers: ["Itália", "Índia", "Irlanda", "Costa do Marfim"],
          correct: 2
        },
        {
          question: "Qual país tem uma bandeira com sol dourado no centro?",
          answers: ["Argentina", "Uruguai", "Colômbia", "Peru"],
          correct: 1
        }
      ],
      "Revolução Francesa": [
        {
          question: "Em que ano começou a Revolução Francesa?",
          answers: ["1776", "1789", "1804", "1815"],
          correct: 1
        },
        {
          question: "Qual era o lema da Revolução Francesa?",
          answers: ["Paz e Amor", "Trabalho e Progresso", "Liberdade, Igualdade e Fraternidade", "Unidade e Força"],
          correct: 2
        },
        {
          question: "Quem era o rei da França durante a Revolução?",
          answers: ["Luís XIV", "Luís XVI", "Napoleão", "Carlos X"],
          correct: 1
        },
        {
          question: "O que era a Bastilha?",
          answers: ["Um castelo real", "Uma prisão", "Um tribunal", "Uma fábrica"],
          correct: 1
        },
        {
          question: "Qual classe social liderou a revolução?",
          answers: ["Nobreza", "Clero", "Burguesia", "Camponeses"],
          correct: 2
        }
      ],
      "Brasil Colonial": [
        {
          question: "Qual produto foi a base da economia no início da colonização?",
          answers: ["Café", "Açúcar", "Algodão", "Ouro"],
          correct: 1
        },
        {
          question: "O que eram as Capitanias Hereditárias?",
          answers: ["Regiões de mineração", "Divisões administrativas", "Terras do clero", "Fortalezas militares"],
          correct: 1
        },
        {
          question: "Que povo foi escravizado para trabalhar nas lavouras?",
          answers: ["Europeus", "Africanos", "Árabes", "Chineses"],
          correct: 1
        },
        {
          question: "Qual cidade foi capital do Brasil colonial por mais tempo?",
          answers: ["Salvador", "Rio de Janeiro", "Recife", "São Paulo"],
          correct: 0
        },
        {
          question: "Qual metal precioso impulsionou a economia no século XVIII?",
          answers: ["Ferro", "Cobre", "Prata", "Ouro"],
          correct: 3
        }
      ],
      "Curiosidades da Internet": [
        {
          question: "Quem é considerado o criador da World Wide Web?",
          answers: ["Elon Musk", "Steve Jobs", "Tim Berners-Lee", "Bill Gates"],
          correct: 2
        },
        {
          question: "Qual foi o primeiro vídeo do YouTube?",
          answers: ["Me at the zoo", "Hello World", "My Cat", "The Beginning"],
          correct: 0
        },
        {
          question: "Qual a rede social com mais usuários ativos em 2024?",
          answers: ["Facebook", "Instagram", "TikTok", "YouTube"],
          correct: 0
        },
        {
          question: "O que significa 'URL'?",
          answers: ["Uniform Resource Locator", "Universal Read Language", "User Reading Level", "Upload Rate Level"],
          correct: 0
        },
        {
          question: "Em que ano o Google foi fundado?",
          answers: ["1998", "2000", "1995", "2003"],
          correct: 0
        }
      ],
      "Copa do Mundo": [
        {
          question: "Qual país sediou a Copa do Mundo de 2014?",
          answers: ["Alemanha", "África do Sul", "Brasil", "Rússia"],
          correct: 2
        },
        {
          question: "Quantas Copas do Mundo o Brasil venceu?",
          answers: ["4", "5", "6", "3"],
          correct: 1
        },
        {
          question: "Quem fez o famoso 'gol de mão' chamado 'Mão de Deus'?",
          answers: ["Pelé", "Zidane", "Messi", "Maradona"],
          correct: 3
        },
        {
          question: "Qual país venceu a Copa de 2022?",
          answers: ["França", "Brasil", "Argentina", "Alemanha"],
          correct: 2
        },
        {
          question: "Quem é o maior artilheiro das Copas do Mundo?",
          answers: ["Pelé", "Ronaldo", "Klose", "Messi"],
          correct: 2
        }
      ]
    };
  
    const perguntas = perguntasPorQuiz[quiz.titulo];
  
    if (!perguntas || perguntas.length === 0) {
      alert("Este quiz ainda não tem perguntas cadastradas.");
      window.location.href = "quizzes.html?categoria=" + encodeURIComponent(quiz.categoria);
      return;
    }
  
    iniciarQuiz(perguntas);
  }
  
  function sairDoQuiz() {
    if (confirm("Deseja sair do quiz? Seu progresso será perdido.")) {
      localStorage.removeItem("quizSelecionado");
      window.location.href = "home.html";
    }
  }
  
  
  