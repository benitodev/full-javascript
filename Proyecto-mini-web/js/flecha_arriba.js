const d = document,
w = window;
export default function arrowScrollUp() {
    const $btnCaja = d.querySelector(".caja-puños"),
    $btnImg = d.querySelector(".puño-scroll");
   
    w.addEventListener("scroll", e => {
       let scrollTop = w.scrollY;

        
        if(scrollTop > 600){
            $btnCaja.classList.remove("none");
        } else {
            $btnCaja.classList.add("none");
           
        }
        
    });
    
    d.addEventListener("click", e => {
        if(e.target.matches(".puño-scroll")){
            w.scrollTo({
              behavior:"smooth",
              top:0,
          });  
}

    })


}