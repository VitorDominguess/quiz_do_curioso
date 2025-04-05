document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoria = urlParams.get("categoria") || "Desconhecida";
  
    document.getElementById("categoria-nome").textContent = categoria;
  
    const quizzes = [
      { categoria: "Geografia", titulo: "Capitais do Mundo", dificuldade: "Fácil" },
      { categoria: "Geografia", titulo: "Bandeiras", dificuldade: "Médio" },
      { categoria: "História", titulo: "Revolução Francesa", dificuldade: "Médio" },
      { categoria: "História", titulo: "Brasil Colonial", dificuldade: "Difícil" },
      { categoria: "Tecnologia", titulo: "Curiosidades da Internet", dificuldade: "Fácil" },
      { categoria: "Esportes", titulo: "Copa do Mundo", dificuldade: "Fácil" }
    ];
  
    const container = document.getElementById("quizzes-list");
    const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");
  
    const quizzesFiltrados = quizzes.filter(q => q.categoria === categoria);
  
    quizzesFiltrados.forEach(quiz => {
      const isFavorito = favoritos.includes(quiz.titulo);
  
      const card = document.createElement("div");
      card.classList.add("quiz-card");
      card.innerHTML = `
        <div class="quiz-info">
          <h3>${quiz.titulo}</h3>
          <p>Dificuldade: <strong>${quiz.dificuldade}</strong></p>
        </div>
        <div class="quiz-actions">
          <span class="estrela ${isFavorito ? 'favorito' : ''}" title="Favoritar">⭐</span>
          <button class="btn btn-secondary btn-jogar">Jogar</button>
        </div>
      `;
  
      // Lidar com favoritos
      card.querySelector(".estrela").addEventListener("click", (e) => {
        e.stopPropagation();
        const index = favoritos.indexOf(quiz.titulo);
        if (index >= 0) {
          favoritos.splice(index, 1);
        } else {
          favoritos.push(quiz.titulo);
        }
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        e.target.classList.toggle("favorito");
      });
  
      // Jogar
      card.querySelector(".btn-jogar").addEventListener("click", () => {
        localStorage.setItem("quizSelecionado", JSON.stringify(quiz));
        window.location.href = "quiz.html";
      });
      
  
      container.appendChild(card);
    });
  
    if (quizzesFiltrados.length === 0) {
      container.innerHTML = `<p class="text-white">Ainda não há quizzes nesta categoria.</p>`;
    }
  });
  