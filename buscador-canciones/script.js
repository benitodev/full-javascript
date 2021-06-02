const d = document,
$form = d.getElementById("song-search"),
$loader = d.querySelector(".loader"),
$error = d.querySelector(".error"),
$main = d.querySelector("main"),
$artist = d.querySelector(".artist"),
$song = d.querySelector(".song");


$form.addEventListener("submit", async e =>{
    e.preventDefault();

    try {
        $loader.style.display = "block";

        let artist = e.target.artist.value.toLowerCase(),
        $artistTemplate = "";
       
        
        let artistAPI = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`,     
        artistRes = fetch(artistAPI),
        artistResolve =  await artistRes,
        artistJson = await artistResolve.json();

        console.log(artistJson);
        console.log(artist);

        if(artistJson.artists === null){
            $artistTemplate = `<h2>No existe el intérprete llamado</h2>`
        }else{
            let artistData = artistJson.artists[0];
            $artistTemplate = `<h2>${artistData.strArtist}</h2>
            <img src="${artistData.strArtistThumb}" alt="${artistData.strArtist}">
            <p>${(artistData.intBornYear || `<h3 style="display:inline-block">Sin fecha de inicio</h3>`)} - ${(artistData.intDiedYear || "Presente vivardo")}</p>
            <p>${artistData.strCountry}</p>
            <p>${artistData.strGenre} - ${artistData.strStyle}</p>
            <a href="https://${artistData.strWebsite}" target="_blank">Página del artista</a>
            <h3>Historia del artista</h3>
            <p class="history">${artistData.strBiographyES}</p>
            `     
        }
        $loader.style.display = "none";
        $artist.innerHTML = $artistTemplate;
        
    } catch (err) {
        $loader.style.display = "none";
        let message = err.statusText || "Ocurrió un error al llamar a la API";
        $error.innerHTML = `<p>Error ${err.status} : ${message}</p>`
    }

})