window.addEventListener('DOMContentLoaded',function(){

    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    const navBtn = document.querySelector('nav > .nav_product > a');    
    const navMenu = document.querySelectorAll('body > .nav2 > .nav_product_menu > ul');
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
    const navBtn2 = document.querySelector('nav > .nav_coffee > a');    
    const navMenu2 = document.querySelectorAll('body > .nav2 > .nav_coffee_menu > ul');
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
    const navBtn3 = document.querySelector('nav > .nav_machines > a');    
    const navMenu3 = document.querySelectorAll('body > .nav2 > .nav_machines_menu > ul');
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
    const navBtn4 = document.querySelector('nav > .nav_art > a');    
    const navMenu4 = document.querySelectorAll('body > .nav2 > .nav_art_menu > ul');
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
    const navBtn5 = document.querySelector('nav > .nav_acc > a');    
    const navMenu5 = document.querySelectorAll('body > .nav2 > .nav_acc_menu > ul');
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
    
    const bottomBtn = document.querySelector('main > .bottom_banner > .bannerbtn');
    const bottomBar = document.querySelector('main > .bottom_banner > .bannerimg');
    bottomBtn.addEventListener('click',function(){
      bottomBar.classList.toggle('active');
      bottomBtn.classList.toggle('active');
      })

      const elImg = document.querySelectorAll('.sidebar > .sideimg > img');
      sIdx=0;
      function slide(){
        for(let i=0;i<elImg.length;i++){
          elImg[i].style=`transform:translateX(${-100*sIdx}%)`;

        }
    }
    let loop;
    function interval(){
        loop = setInterval(function(){
                        if(sIdx < 2){
                            sIdx++;
                        }else{
                            sIdx=0;
                        }
                        slide();
                    },3000);
    }
    interval();
    
});