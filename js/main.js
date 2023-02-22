const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuItem = document.querySelectorAll('.menu__item');
if(iconMenu){
   iconMenu.addEventListener("click", function (e){
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
      
      menuItem.forEach((e)=>{
         e.classList.toggle('top');
      })
   });
}
