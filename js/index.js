const elFigure = document.querySelector('.slide>div');
const pnBtn = document.querySelectorAll('.slidebox button');

let sIdx = 0;
for(let i=0;i<pnBtn.length;i++){
    pnBtn[i].addEventListener('click',function(){
        if(i==1){
            if(sIdx < 8) sIdx++;
        }else{
            if(sIdx > 0) sIdx--;
        }
        slide();
    });
}

function slide(){
    elFigure.style=`transform:translateX(${-100*sIdx}%)`;
}
let loop;
function interval(){
    loop = setInterval(function(){
                    if(sIdx < 8){
                        sIdx++;
                    }else{
                        sIdx=0;
                    }
                    slide();
                },2000);
}
interval();

const elSlide = document.querySelector('.slide')
elSlide.addEventListener('mouseenter',function(){
    clearInterval(loop);
});

elSlide.addEventListener('mouseleave',function(){
    interval();
});



