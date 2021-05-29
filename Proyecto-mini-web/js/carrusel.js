const d = document;

export default function carousel() {
    const $nextBtn = d.querySelector(".slider-btns .next"),
    $prevBtn = d.querySelector(".slider-btns .prev"),
    $slides = d.querySelectorAll(".slider-slide");
    
    let i = 0;
    console.log($slides);
    console.log($slides.length);
    
    const prev = function () {
     
        
        $slides[i].classList.remove("active");
        i--;
        
        if(i < 0){
            i = $slides.length -1
        }
        
        $slides[i].classList.add("active");
    }
    
    
    const next = function () {
      

        $slides[i].classList.remove("active");
        i++;
        
        if(i > ($slides.length - 1)){
            i = 0;
        }
        $slides[i].classList.add("active");
    }
    
    const play = function(){
        setInterval(() => {
            next()
        }, 2000);
    }
    
    play();
    
    d.addEventListener("click", e => {
        if(e.target === $prevBtn){
            e.preventDefault();
           prev();
        }

    if(e.target === $nextBtn){
        e.preventDefault();
        next();
    }
    });


}
