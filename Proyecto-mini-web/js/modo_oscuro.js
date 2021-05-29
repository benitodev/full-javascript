


export function themeDark(btn, darkClass, specialClass) {

    const $dataAttribute = document.querySelectorAll("[data-dark]"),
 
    $themeBtn = document.querySelector(btn);

   let moon = "🌚",
    sun = "💡";
    
    const lightMode = () => {
        $dataAttribute.forEach(e => e.classList.remove(darkClass));
        document.querySelector("[data-special]").classList.remove(specialClass);
        $themeBtn.textContent = sun;
        localStorage.setItem("theme", "light");
    };

   const darkMode = () => {

        $dataAttribute.forEach(e => e.classList.add(darkClass));
        document.querySelector("[data-special]").classList.add(specialClass);
        $themeBtn.textContent = moon
         localStorage.setItem("theme", "dark")
    };



    console.log($dataAttribute)
    document.addEventListener("click", e =>{
        if(e.target.matches(btn)){
            console.log($themeBtn.textContent)
            
            if($themeBtn.textContent === sun){
               darkMode();
            } else{
                lightMode();
            }

        }
      
    });

    document.addEventListener("DOMContentLoaded", e => {
        
        if(localStorage.getItem("theme") === null){
            localStorage.setItem("theme", "dark")
            darkMode();

        }
        if(localStorage.getItem("theme") === "dark"){
            darkMode();
        }

        if(localStorage.getItem("theme") === "light"){
            lightMode();
        }
    })
 }