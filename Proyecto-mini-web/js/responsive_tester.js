export default function tester(form) {
    const $form = document.getElementById(form);
    let tester; 

    document.addEventListener("submit", (e) => {
        if(e.target.matches("#responsive-tester")){
            e.preventDefault();
         tester = window.open($form.direc.value, "tester", `innerWidth=${$form.ancho.value}`,
            `innerHeight=${$form.alto.value}` );
            console.log();
            alert("Enviaoo");
        }

    })
    document.addEventListener("click", e => {
        if(e.target === $form.cerrar){
            tester.close()
        }
    })
}