// Скролл до якорного элемента

document.addEventListener('DOMContentLoaded', function () {
    const caseItems = document.querySelectorAll('.caseItem');

    caseItems.forEach(item => {
        item.addEventListener('click', function () {
            // Получаем значение data-target, которое содержит ID секции
            const targetId = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Плавная прокрутка до нужного элемента
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});


// Скрытие части списка

document.addEventListener('DOMContentLoaded', function () {
   const toggleButtons = document.querySelectorAll('.toggle-btn');  // Получаем все кнопки

   toggleButtons.forEach(button => {
       button.addEventListener('click', function () {
           const resultList = this.previousElementSibling;  // Находим соответствующий список (предыдущий элемент)
           
           if (resultList.classList.contains('open')) {
               resultList.classList.remove('open');
               this.textContent = 'Показать все';  // Меняем текст кнопки на "Показать все"
           } else {
               resultList.classList.add('open');
               this.textContent = 'Скрыть';  // Меняем текст кнопки на "Скрыть"
           }
       });
   });
});


