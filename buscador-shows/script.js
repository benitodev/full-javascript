const d = document,
$show = d.getElementById("shows"),
$template = d.getElementById("show-template").content,
$fragment = d.createDocumentFragment();

d.addEventListener("keypress", async e => {
    if(e.target.matches("#search")){
       if(e.key === "Enter"){

           try {
               $show.innerHTML = `<img src="assets/rings.svg" alt="loader" class="loader">`;

               let query = e.target.value.toLowerCase(),
               api = `https://api.tvmaze.com/search/shows?q=${query}`,
               res = await fetch(api),
               json = await res.json();

               if(!res.ok){ 
                throw{
                   status: res.status, 
                   statusText: res.statusText
               }}

               if(json.length === 0){
                   $show.innerHTML = `<h2>No existen resultados de shows para tu busqueda : ${e.target.value}</h2>`

               }else{
                   json.forEach(peliculas => {
                       $template.querySelector("h3").textContent = peliculas.show.name;
                       $template.querySelector("div").innerHTML = !peliculas.show.summary ? `<b>No tiene descripción</b>` : peliculas.show.summary;
                       $template.querySelector("img").setAttribute("src", !peliculas.show.image.medium ? "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png" : peliculas.show.image.medium);
                       $template.querySelector("a").setAttribute("href", peliculas.show.url)
                       $template.querySelector("a").textContent = "Click aquí para ver en la página"

                       let $clone = d.importNode($template, true)
                       $fragment.appendChild($clone)
                   });
                   $show.innerHTML = "";
                   $show.appendChild($fragment);
               }

               console.log(json)
           } catch (err) {
               let message = err.statusText || "Error al llamar a la API verifica llamarla bien!";
               $show.innerHTML = `${message}`
           }
       }
    }
})