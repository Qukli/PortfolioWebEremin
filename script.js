// Функция для отображения конкретного раздела и кнопки "Назад"
function showSection(sectionId, backButtonId) {
    document.querySelectorAll('.section').forEach(function(section) {
        section.style.display = 'none';
    });
    var section = document.getElementById(sectionId);
    section.style.display = 'block';
    section.classList.add('active');
    document.getElementById(backButtonId).style.display = 'block';
}

// Функция для возврата на главный экран
function showMainScreen() {
    document.querySelectorAll('.section').forEach(function(section) {
        section.style.display = 'block';
    });
    document.querySelectorAll('.section').forEach(function(section) {
        section.classList.remove('active');
    });
    document.querySelectorAll('button[id^="back-button"]').forEach(function(button) {
        button.style.display = 'none';
    });
}

// Показ раздела "Проекты" при нажатии на ссылку
document.querySelector('a[href="#projects"]').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('projects', 'back-button-projects');
});

// Показ раздела "Обо мне" при нажатии на ссылку
document.querySelector('a[href="#about"]').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('about', 'back-button-about');
});

// Показ раздела "Контакты" при нажатии на ссылку
document.querySelector('a[href="#contact"]').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('contact', 'back-button-contact');
});

// Кнопка "Назад" для возврата ко всем разделам из "Проектов"
document.getElementById('back-button-projects').addEventListener('click', function() {
    showMainScreen();
});

// Кнопка "Назад" для возврата ко всем разделам из "Обо мне"
document.getElementById('back-button-about').addEventListener('click', function() {
    showMainScreen();
});

// Кнопка "Назад" для возврата ко всем разделам из "Контактов"
document.getElementById('back-button-contact').addEventListener('click', function() {
    showMainScreen();
});
