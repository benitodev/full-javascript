import hamburgerMenu from "./menu_burger.js";
import {digitalClock, alarm} from "./reloj.js";

import {moveBall, shortcuts} from "./teclado.js";
import {countDown} from "./cuenta_regresiva.js";
import arrowScrollUp from "./flecha_arriba.js";
import {themeDark} from "./modo_oscuro.js";
import responsiveMedia from "./responsive_javascript.js";
import tester from "./responsive_tester.js";
import network from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import geolocate from "./geolocalizacion.js";
import search from "./filtro_busqueda.js";
import raffle from "./sorteo_digital.js";
import scrollSpy from "./scroll_espia.js"
import  carousel from "./carrusel.js";
import inteligentVideo from "./video_inteligente.js";
import contactFormValidation from "./validaciones_formularios.js";
import speech from "./texto_voz.js"

   const d = document;



 d.addEventListener("DOMContentLoaded", e =>{
    
    hamburgerMenu(".panel-btn", ".menu");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/picadura-cobra.mp3", "#activar-alarma", "#desactivar-alarma");
      // countDown();
    arrowScrollUp();
    responsiveMedia("responsive-audio", "(min-width: 1024px)",
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
    picture-in-picture" allowfullscreen></iframe>`,
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc" target="_blank" rel="noopener">Contenido de celular</a>`
    );
    responsiveMedia("responsive-maps",
     "(min-width: 1024px)",
      `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0338751172667!2d-64.16891370668334!3d-31
      .4131927520909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2a1f3de1ba1%3A0x2c41ea855ba9f707!2sPlaza%20Alberdi!5e0!3m2!1
      ses-419!2sar!4v1619667135296!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`,

    `<a href="https://goo.gl/maps/URzXxsHjTxGizdbx5" target="_blank" rel="noopener">Contenido de mapa</a>`);

    tester("responsive-tester");

    webCam("webcam");

    geolocate("geolocation");

    search(".card-filter", ".card");

    raffle("#winner-btn", ".player");

    carousel();

    scrollSpy();

    inteligentVideo();

    contactFormValidation();
  });
  


// Comprobar estado de red del navegador
network();
  
  
  
  //Shortcuts y colisiones


  d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
  });
  
  
  
  themeDark(".theme-dark", "darkClass", "specialClass");
  speech();
