document.addEventListener("DOMContentLoaded", () => {
    const categorias = [
      { nome: "Geografia", icone: "🌍" },
      { nome: "História", icone: "📜" },
      { nome: "Ciências", icone: "🧪" },
      { nome: "Curiosidades", icone: "❓" },
      { nome: "Esportes", icone: "⚽" },
      { nome: "Tecnologia", icone: "💻" }
    ];
  
    const container = document.getElementById("categorias-list");
  
    categorias.forEach(cat => {
      const card = document.createElement("div");
      card.classList.add("categoria-card");
      card.innerHTML = `
        <div class="categoria-conteudo">
          <div class="categoria-icone">${cat.icone}</div>
          <h3>${cat.nome}</h3>
        </div>
      `;
      card.onclick = () => {
        window.location.href = `quizzes.html?categoria=${encodeURIComponent(cat.nome)}`;
      };
      container.appendChild(card);
    });
  });
  