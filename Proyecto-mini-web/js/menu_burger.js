export default function hamburgerMenu(panelBtn, menu) {
    const d = document;
    
    d.addEventListener("click", e => {
        // console.log(e.target);
    
    
        if(e.target.matches(`${panelBtn} *`) ){
            
            d.querySelector(menu).classList.toggle("is-active");
            d.querySelector(".boton-menu").classList.toggle("none");
            d.querySelector(".boton-menu-close").classList.toggle("none");
            
        };

        if(e.target.matches("nav a")){
            d.querySelector(menu).classList.toggle("is-active");
            d.querySelector(".boton-menu").classList.toggle("none");
            d.querySelector(".boton-menu-close").classList.toggle("none");
        }
    });






}



// const $btn = document.getElementById("boton-menu"),
// $btnClose = document.getElementById("boton-menu-close"),
// $menu = document.querySelector(".menu");



// function botonMenu(e) {
//     if($btn.classList.contains("boton-menu")){
//         $btnClose.classList.remove("none")
//         $btn.classList.add("none")
//         $menu.classList.remove("none")
//     }
// };

// function botonClose(e){
//     if($btnClose.classList.contains("boton-menu-close")){
//         $btn.classList.remove("none")
//         $btnClose.classList.add("none")
//         $menu.classList.add("none")
//     } 
// }


// function menuClose(e){
//     $menu.classList.add("none")
//     $btnClose.classList.add("none")
//     $btn.classList.remove("none")
// }
