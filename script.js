// Alternar tema claro/escuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verificar preferência salva
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️ Modo Claro';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Modo Claro';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙 Modo Escuro';
        localStorage.setItem('theme', 'light');
    }
});
