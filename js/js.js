
// прогресс прокрутки

// window.onscroll = function() {
//     scrollProgress();
//   };

// function scrollProgress() {
//     let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     let scrolled = (windowScroll / height) * 100;
    
//     document.getElementById("scrollBar").style.width = scrolled + "%";
// };




// Социальные сети

document.addEventListener('DOMContentLoaded', function () {
   const links = document.querySelectorAll('.link');
   const highlight = document.querySelector('.highlight');
   
   links.forEach(link => {
       link.addEventListener('mouseenter', function () {
           const linkCoords = this.getBoundingClientRect();
           const containerCoords = this.parentElement.getBoundingClientRect(); 

           const width = linkCoords.width;
           const left = linkCoords.left - containerCoords.left;


           highlight.style.width = `${width}px`;
           highlight.style.left = `${left}px`;
       });
   });
});




// Воспроизведение звука

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

function openModal() {
    document.getElementById("myModal").style.display = "block";
  };
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  } ;
