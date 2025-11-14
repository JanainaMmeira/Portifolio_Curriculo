document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-darkmode');

  function updateButtonText() {
    if (document.body.classList.contains('dark-mode')) {
      toggleButton.textContent = '☀️ Dark';
    } else {
      toggleButton.textContent = '🌙 Light';
    }
  }

  updateButtonText();

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    updateButtonText(); 
  });
});