const submitBtn = document.getElementById('submit');  // ← Исправлено!
const ageInput = document.getElementById('age');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();  // ← Добавлено! Останавливает отправку формы
    
    const age = ageInput.value;
    
    // Запросить разрешение на уведомления
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
    
    // Проверка на пустое поле
    if (age === '') {
        new Notification('Ошибка!', {
            body: 'Введите возраст!',
            icon: '⚠️'
        });
        return;
    }
    
    if (age < 18) {
        new Notification('Ошибка!', {
            body: 'Вам должно быть минимум 18 лет!',
            icon: '❌'
        });
    } else {
        new Notification('Успех!', {
            body: 'Добро пожаловать!',
            icon: '✅'
        });
    }
});