const d = document,
$selectProvincias = d.getElementById("provincia"),
$selectdepto = d.getElementById("departamento"),
$error = d.getElementById("error"),
$form = d.getElementById("form");


async function apiArgentina (){
    try {
        let res = await fetch("https://apis.datos.gob.ar/georef/api/provincias"),
        json = await res.json();
        
        console.log(res, json)

        if(!res.ok){throw{
            status: res.status,
            statusText: res.statusText
        }}

        json.provincias.forEach(element => {
            console.log(element.nombre)
            let option = d.createElement("option"),
            $fragment = d.createDocumentFragment;

            option.textContent = `${element.nombre}`;
            option.value = `${element.nombre}`
            $selectProvincias.appendChild(option);            
        });

    } catch (err) {
        let message = err.statusText || "Error al intentar llamar a la API";
        $error.innerHTML = `Error ${err.status} : ${message}`;
    }

}


const getDepto = async (departamento) =>{

    try {
        let res = await fetch(`https://apis.datos.gob.ar/georef/api/departamentos?provincia=${departamento}&campos=id,nombre&max=100`),
        json = await res.json();

        console.log(json.departamentos);

        let $option = d.createElement("option");

        json.departamentos.forEach(el =>
            $option += `<option value="${el.nombre}">${el.nombre}</option>`);

            $selectdepto.innerHTML = $option; 

        // if(json.departamentos.provincia)
    } catch (err) {
        let message = err.statusText || "Error al intentar llamar a la API de deptos";
        $error.innerHTML = `Error ${err.status} : ${message}`;
    }
}


d.addEventListener("DOMContentLoaded", apiArgentina);

d.addEventListener("click", e => {
    if(e.target.matches("#provincia") && e.target.value === "provincia"){
     
       $selectProvincias[0].remove();
    }
    if(e.target.matches("#departamento") && e.target.value === "departamento"){
        $selectdepto[0].remove();
    }
})

$selectProvincias.addEventListener("change", e => {
    getDepto(e.target.value);
    $selectdepto.classList.remove("none")

})
