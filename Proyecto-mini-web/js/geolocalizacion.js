const d = document,
n = navigator;


export default function geolocate(id) {

    const $geo = d.getElementById(id),
    options = {
        enableHighAccuracy: true,
        timeout: 6000,
        maximumAge: 0
    },
    titulo = d.createElement("h3");
    titulo.textContent = `Tu posición actual es:`


    const success = position => {
        let cordenada = position.coords;
        console.log(position);
        
        $geo.insertAdjacentElement("beforebegin", titulo);
        
        $geo.innerHTML = `<p><mark>Precisión:${cordenada.accuracy}</mark> (metros)</p>
        <p><mark>Tu latitud es:${cordenada.latitude}</mark></p>
        <p><mark>tu longitud: ${cordenada.longitude}</mark></p>
        <a href="https://www.google.com/maps/@${cordenada.latitude},${cordenada.longitude},21z" target="_blank" rel="noopener">Ver en google maps</a>
        
        `
    }

    const error = err => {
        console.log(err)
    }

    n.geolocation.getCurrentPosition(success, error, options);
}