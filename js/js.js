
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
   const toggleButtons = document.querySelectorAll('.toggle-btn');

   toggleButtons.forEach(button => {
       button.addEventListener('click', function () {
           const resultList = this.previousElementSibling;  // Находим соответствующий список (предыдущий элемент)
           
           if (resultList.classList.contains('open')) {
               resultList.classList.remove('open');
               this.textContent = 'Узнать больше'; 
           } else {
               resultList.classList.add('open');
               this.textContent = 'Скрыть';
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






// Анимация исчезновения и  страницы



document.addEventListener('DOMContentLoaded', function() {
    const page = document.querySelector('.page');

    // Функция для анимации появления страницы
    function animatePageIn() {
        page.classList.add('fade-in');

        // Убираем класс после завершения анимации появления (по желанию)
        setTimeout(() => {
            page.style.opacity = '1';
            page.style.transform = 'translateY(0)';
            page.classList.remove('fade-in');
        }, 1000); // Время совпадает с длительностью transition
    }




    // Функция для анимации переключения страниц при клике
    function animatePageOut(href) {
        // Запускаем анимацию исчезновения страницы
        page.classList.add('fade-out');
        console.log('fade out')
        //
        page.style.opacity = '0';
        console.log('opacity')
        page.style.transform = 'translateY(60px)';
        console.log('transform')

        // Переход на новую страницу после завершения анимации исчезновения
        setTimeout(() => {
 

            window.location.href = href;
        }, 1000); // Время совпадает с длительностью transition
    }

    // Инициализация анимации появления при загрузке страницы
    animatePageIn();

    // Обработка кликов для перехода между страницами
    const links = document.querySelectorAll('.transition-link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Отключаем стандартное поведение ссылки
            const href = link.getAttribute('href');
            
            // Инициализация анимации переключения страниц
            animatePageOut(href);
        });
    });
});













// Анимация переключения страницы


// document.addEventListener('DOMContentLoaded', function() {
// const links = document.querySelectorAll('.transition-link');

// links.forEach(link => {
//   link.addEventListener('click', function(event) {
//       event.preventDefault(); // Отключаем стандартное поведение ссылки
//       const href = link.getAttribute('href');
      
//       // Запускаем анимацию исчезновения страницы
//       document.querySelector('.page').classList.add('fade-out');
      
//       // Ждем окончания анимации (1 секунда) и выполняем переход
//       setTimeout(() => {
//           window.location.href = href;
//       }, 1000); // Время совпадает с длительностью transition
//   });
// });
// });




// анимация появления страницы

// window.addEventListener('load', function() {
//     document.page-container.classList.add('loaded'); // После загрузки страницы она плавно появляется
// });


