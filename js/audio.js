document.addEventListener('DOMContentLoaded', function () {
    const caseItems = document.querySelectorAll('.caseItem'); // Получаем все элементы с классом .caseItem
    const hoverSound = document.getElementById('hoverSound'); // Звук, который будет проигрываться

    caseItems.forEach(item => {
        item.addEventListener('click', () => {
            if (hoverSound) {
                hoverSound.currentTime = 0; // Перематываем звук в начало
                hoverSound.play().catch((error) => {
                    console.log('Ошибка воспроизведения звука:', error);
                });
            }
        });
    });
});
