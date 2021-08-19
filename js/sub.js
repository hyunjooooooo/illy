window.addEventListener('DOMContentLoaded',function(){

    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    const list = document.querySelectorAll('main > .main > .setlist > ul');    
    const listMenu = document.querySelectorAll('main > .hove');
    for(let i=0;i<list.length;i++){
      list[i].addEventListener('mouseover',function(){
            for(let j=0;j<listMenu.length;j++){
              listMenu[j].classList.toggle('active');
            }
        })
      }
      for(let i=0;i<list.length;i++){
        list[i].addEventListener('mouseout',function(){
          for(let j=0;j<listMenu.length;j++){
            listMenu[j].classList.remove('active');
          }
      })
    }
});