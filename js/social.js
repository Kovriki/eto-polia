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


