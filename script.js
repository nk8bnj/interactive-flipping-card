const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const html = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'light' ? '☀️' : '🌙️';
}

// Hover sound functionality
const hoverSound = new Audio('assets/sound.mp3');
hoverSound.volume = 0.5;

const cardContainers = document.querySelectorAll('.card-container');

cardContainers.forEach(container => {
    const card = container.querySelector('.card');
    
    container.addEventListener('click', () => {
        card.classList.toggle('flipped');
        hoverSound.currentTime = 0;
        hoverSound.play().catch(err => {
            // Ignore autoplay errors
            console.log('Sound play prevented:', err);
        });
    });
});

