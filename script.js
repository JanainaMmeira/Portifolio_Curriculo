document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-darkmode');

  // Função para atualizar o texto do botão
  function updateButtonText() {
    if (document.body.classList.contains('dark-mode')) {
      toggleButton.textContent = '☀️ Dark';
    } else {
      toggleButton.textContent = '🌙 Light';
    }
  }

  // Atualiza o texto inicial ao carregar
  updateButtonText();

  // Adiciona o evento de clique
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    updateButtonText(); // Atualiza o texto após alternar
  });
});