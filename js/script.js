document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('btn-login')) {
      document.getElementById('btn-login').addEventListener('click', () => {
        window.location.href = 'home.html';
      });
    }
  
    if (document.getElementById('btn-register')) {
      document.getElementById('btn-register').addEventListener('click', () => {
        window.location.href = 'cadastro.html';
      });
    }
  
    if (document.getElementById('btn-play')) {
        document.getElementById('btn-play').addEventListener('click', () => {
          window.location.href = 'categorias.html';
        });
      }
      
      
  
    if (document.getElementById("user-nickname")) {
      const nickname = localStorage.getItem("nickname") || "Curioso";
      document.getElementById("user-nickname").textContent = nickname;
    }
  
    if (document.getElementById("user-coins")) {
      const savedCoins = parseInt(localStorage.getItem("coins") || "150");
      document.getElementById("user-coins").textContent = savedCoins;
    }
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-cadastro');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const nome = document.getElementById('nome').value.trim();
      const apelido = document.getElementById('apelido').value.trim().toLowerCase();
      const email = document.getElementById('email').value.trim();
      const nascimento = document.getElementById('nascimento').value;
      const genero = document.getElementById('genero').value;
      const login = document.getElementById('login').value.trim();
      const senha = document.getElementById('senha').value;
      const avatar = document.querySelector('input[name="avatar"]:checked').value;
      const musica = document.getElementById('musica').checked;
      const efeitos = document.getElementById('efeitos').checked;
      const dificuldade = document.getElementById('dificuldade').value;
  
      const palavroes = ["bosta", "merda", "idiota", "retardado"]; // Exemplo, pode ampliar
  
      if (palavroes.some(p => apelido.includes(p))) {
        alert("O apelido contém palavras inadequadas.");
        return;
      }
  
      const usuario = {
        nome, apelido, email, nascimento, genero, login, senha,
        avatar, musica, efeitos, dificuldade, moedas: 0, pontos: 0
      };
  
      localStorage.setItem('usuario', JSON.stringify(usuario));
      localStorage.setItem('nickname', apelido);
      localStorage.setItem('coins', "0");
  
      alert("Cadastro realizado com sucesso!");
      window.location.href = "home.html";
    });
  });

  if (document.getElementById("btn-logout")) {
    document.getElementById("btn-logout").addEventListener("click", () => {
      localStorage.clear();
      window.location.href = "index.html";
    });
  }
  
  