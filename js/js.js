
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
    const caseItems = document.querySelectorAll('.caseItem');
    const hoverSound = document.getElementById('hoverSound');

    caseItems.forEach(item => {
        item.addEventListener('click', () => {
            if (hoverSound) {
                hoverSound.currentTime = 0;
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
            const targetId = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
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
           const resultList = this.previousElementSibling;
           
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

    function animatePageIn() {
        page.classList.add('fade-in');

        setTimeout(() => {
            page.style.opacity = '1';
            page.style.transform = 'translateY(0)';
            page.classList.remove('fade-in');
        }, 1000);
    }




    function animatePageOut(href) {
        page.classList.add('fade-out');
        console.log('fade out')
        //
        page.style.opacity = '0';
        console.log('opacity')
        page.style.transform = 'translateY(60px)';
        console.log('transform')

        setTimeout(() => {
 

            window.location.href = href;
        }, 1000); 
    }

    animatePageIn();

    const links = document.querySelectorAll('.transition-link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = link.getAttribute('href');
            
            animatePageOut(href);
        });
    });
});
