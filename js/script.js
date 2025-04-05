// Redirecionamentos
document.addEventListener('DOMContentLoaded', () => {
    // Onboarding
    if (document.getElementById('btn-login')) {
      document.getElementById('btn-login').addEventListener('click', () => {
        window.location.href = 'home.html';
      });
    }
  
    if (document.getElementById('btn-play')) {
      document.getElementById('btn-play').addEventListener('click', () => {
        window.location.href = 'quiz.html';
      });
    }
  
    // Simular dados do usuário
    if (document.getElementById('user-nickname')) {
      const nickname = localStorage.getItem('nickname') || 'Curioso';
      document.getElementById('user-nickname').textContent = nickname;
    }
  });