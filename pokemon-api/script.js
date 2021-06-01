const d = document;

async function pokeApi (url) {
    const $main = d.querySelector("main");    
    try {

        $main.innerHTML = `<img src="assets/three-dots.svg" alt="Cargando..." class="loader">`

        let res =  await fetch(url),
        json =  await res.json(),
        $template = "";
       
        //Primer error al intentar llamar a la APi
        if(!res.ok){throw{status:res.status, statusText: res.statusText}}
                
    for (let $i = 0; $i < json.results.length; $i++) {
        // console.log("hola")
         let $li = d.createElement("li");
        
         let pokemon = json.results[$i];
        // console.log(pokemon.name)
        
        
        // $li.textContent = pokemon.name
        // $ul.insertAdjacentElement("afterbegin", $li)


        try {
            let res = await fetch(pokemon.url),
            pokimon = await res.json();
         
            console.log(pokimon)
           

            if(!res.ok){throw{status:res.status, statusText: res.statusText}}


            $template += `
            <figure>
            <img src="${pokimon.sprites.front_default}" alt="${pokimon.name}" class="pokemon" ">
            <figcaption>${pokimon.name}</figcaption>
            </figure>
            `;




        } catch (error) {
            let message = error.statusText || "Ocurrió error al llamar la información de cada uno";
            $template += `
            <figure>
            <figcaption>Error ${error.status} : ${message}</figcaption>
            </figure>
            `;

        }
        

    }
    $main.innerHTML = $template;
    
    let  $left = d.getElementById("left"),
         $right = d.getElementById("right");


   let $prevlink = json.previous ? `<img src="assets/left-arrow.svg" alt="" class="left click" data-url="${json.previous}">` : "",
    $netxlink = json.next ? `<img src="assets/right-arrow.svg" alt="Right" class="right click"  data-url="${json.next}">` : "";     
  
    $right.innerHTML= `` + $netxlink;
    $left.innerHTML = `` + $prevlink;
    console.log($netxlink)

    } catch (err) {
        let message = err.statusText || "Ocurrió un error al llamar a la poke api";
        $main.innerHTML = `<h2>Error ${err.status} : ${message}</h2>`;
    }
}


d.addEventListener("DOMContentLoaded", e => pokeApi("https://pokeapi.co/api/v2/pokemon"));

d.addEventListener("click", e => {
    if (e.target.matches("div .click")){
        // e.preventDefault();
        pokeApi(e.target.getAttribute("data-url"))
        
    }
})