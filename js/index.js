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

  
  const navBtn = document.querySelector('nav > .nav_brand > a');    
  const navMenu = document.querySelectorAll('body > .nav2 > .nav_brand_menu > ul');
    navBtn.addEventListener('mouseover',function(){
          for(let j=0;j<navMenu.length;j++){
            navMenu[j].classList.toggle('active');
          }
      })
      navBtn.addEventListener('mouseout',function(){
        for(let j=0;j<navMenu.length;j++){
          navMenu[j].classList.remove('active');
        }
    })
  const navBtn2 = document.querySelector('nav > .illy_caffe > a');    
  const navMenu2 = document.querySelectorAll('body > .nav2 > .illy_caffe_menu > ul');
    navBtn2.addEventListener('mouseover',function(){
          for(let j=0;j<navMenu2.length;j++){
            navMenu2[j].classList.toggle('active');
          }
      })
      navBtn2.addEventListener('mouseout',function(){
        for(let j=0;j<navMenu2.length;j++){
          navMenu2[j].classList.remove('active');
        }
    })
  const navBtn3 = document.querySelector('nav > .illy_shop > a');    
  const navMenu3 = document.querySelectorAll('body > .nav2 > .illy_shop_menu > ul');
    navBtn3.addEventListener('mouseover',function(){
          for(let j=0;j<navMenu3.length;j++){
            navMenu3[j].classList.toggle('active');
          }
      })
      navBtn3.addEventListener('mouseout',function(){
        for(let j=0;j<navMenu3.length;j++){
          navMenu3[j].classList.remove('active');
        }
    })
  const navBtn4 = document.querySelector('nav > .udc > a');    
  const navMenu4 = document.querySelectorAll('body > .nav2 > .udc_menu > ul');
    navBtn4.addEventListener('mouseover',function(){
          for(let j=0;j<navMenu4.length;j++){
            navMenu4[j].classList.toggle('active');
          }
      })
      navBtn4.addEventListener('mouseout',function(){
        for(let j=0;j<navMenu4.length;j++){
          navMenu4[j].classList.remove('active');
        }
    })
  const navBtn5 = document.querySelector('nav > .btb > a');    
  const navMenu5 = document.querySelectorAll('body > .nav2 > .btb_menu > ul');
    navBtn5.addEventListener('mouseover',function(){
          for(let j=0;j<navMenu5.length;j++){
            navMenu5[j].classList.toggle('active');
          }
      })
      navBtn5.addEventListener('mouseout',function(){
        for(let j=0;j<navMenu5.length;j++){
          navMenu5[j].classList.remove('active');
        }
    })
  const navBtn6 = document.querySelector('nav > .e_shop > a');    
  const navMenu6 = document.querySelectorAll('body > .nav2 > .e_shop_menu > ul');
    navBtn6.addEventListener('mouseover',function(){
          for(let j=0;j<navMenu6.length;j++){
            navMenu6[j].classList.toggle('active');
          }
      })
      navBtn6.addEventListener('mouseout',function(){
        for(let j=0;j<navMenu6.length;j++){
          navMenu6[j].classList.remove('active');
        }
    })

  });
  


