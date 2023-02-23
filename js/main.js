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
/*-------------------------------------------------------------------------------------------------*/
$(document).ready(function() {
   $('.js-example-basic-single').select2();
});
/*-------------------------------------------------------------------------------------------------*/
new Swiper('.service__swiper',{
   //Optional parameters
   // direction: 'horizontal',
   loop: true,
   centeredSlides:true, 
   
   //    speed:300,
   
   //    //количество слайдов для прокрутки 
   //    slidesPerGroup:1,
   
   //    //вкючает слайдер 
   //    enabled:true,
   
   // //вывод стрелок
   breakpoints:{
      1000:{
         slidesPerView:3,
         spaceBetween:65,
      },
      550:{
         slidesPerView:2,
         spaceBetween:35,
      },
      320:{
         slidesPerView:1,
         spaceBetween:35,
       },
      },
      
      // navigation: {
         //    nextEl: '.swiper-button-next',
         //    prevEl: '.swiper-button-prev',
         //  },
         
         pagination: {
            el: '.swiper-pagination',
            clickable: true,
            //    dynamicBullets: true,
            //    type: 'fraction',
            //    type: 'progressbar',
         },
         
         //  scrollbar: {
            //    el: '.swiper-scrollbar',
            //    draggable: true,
            //  },
            
   //  //перетаскивать на пк
   simulateTouch: true,
   grabCursor: true,
   
   //  // нажатие на слайд
   //  slideToClickedSlide: true,
   
   //  //управление клавиатурой
   keyboard:{
      enable: true,
      onlyinViewport: true,
   },
   
   //  mousewheel:{
      //    sensitivity: 1,
      //  },
      
      //  //автовысота
      //  autoHeight:true,
      
      //  //свободный режим
      //  freeMode:true,

      //  //автопрокрутка
      //  autoplay:{
         //    delay:50000,
         //    stoponLastSlide:true,
         //    //отключить после ручного переключения
         //    disableOnInteraction: false,
         //  },
         
         //  //эффекты переключения слайдов
         
         //  effect: 'slide',// 'fade', 'cube', 'coverflow', 'flip'  'creative',
      });
      
      /*-------------------------------------------------------------------------------------------------*/
      new Swiper('.say-about__swiper',{
         //Optional parameters
         // direction: 'horizontal',
         loop: true,
         //    speed:300,
         spaceBetween:31,
         //    //количество слайдов для прокрутки 
         //    slidesPerGroup:1,
         
         //    //вкючает слайдер 
         //    enabled:true,
         
         // //вывод стрелок
         breakpoints:{
         320:{
            slidesPerView:1,
         },
         650:{
            slidesPerView:2,
           
         },
         
            1000:{
               slidesPerView:3,
            },
      },
      effect: 'coverflow',
             navigation: {
                   nextEl: '.swiper-button-next',
                   prevEl: '.swiper-button-prev',
                 },
               
               // pagination: {
               //    el: '.swiper-pagination',
               //    clickable: true,
               //    //    dynamicBullets: true,
               //    //    type: 'fraction',
               //    //    type: 'progressbar',
               // },
               
               //  scrollbar: {
                  //    el: '.swiper-scrollbar',
                  //    draggable: true,
                  //  },
                  
         //  //перетаскивать на пк
         simulateTouch: true,
         grabCursor: true,
         
         //  // нажатие на слайд
         //  slideToClickedSlide: true,
         
         //  //управление клавиатурой
         keyboard:{
            enable: true,
            onlyinViewport: true,
         },
         
         //  mousewheel:{
            //    sensitivity: 1,
            //  },
            
            //  //автовысота
            //  autoHeight:true,
            
            //  //свободный режим
            //  freeMode:true,
      
            //  //автопрокрутка
              autoplay:{
                   delay:2000,
               //    stoponLastSlide:true,
               //    //отключить после ручного переключения
               //    disableOnInteraction: false,
                 },
               
               //  //эффекты переключения слайдов
               
                 // 'fade', 'cube', 'coverflow', 'flip'  'creative',
            });
            