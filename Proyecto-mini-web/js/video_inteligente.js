const d = document,
w = window;

export default function inteligentVideo(){
    // const $video = d.querySelectorAll("video[data-inteligent]")


    // const cb = (entries) =>{

    //     console.log(entries, "hola")
    //     entries.forEach(entry => {
            
    //         if(entry.isIntersecting){
    //             entry.target.play();
    //         }   else{
    //             entry.target.pause();
    //         }


    //         d.addEventListener("visibilitychange", (e) => {
    //             d.visibilityState === "visible"
    //             ? entry.target.play()
    //             : entry.target.pause()
    //         });
    //     });
    // }
    // const observer = new IntersectionObserver(cb, {threshold: 0.2});
    
    // $video.forEach(el => observer.observe(el));

    // $video.addEventListener("play", e =>{
    //     console.log("Se ha ejecutado play")
    // });

    // $video.addEventListener("pause", e => {
    //     console.log("se ha pausao")
    // })
    

    const $video = d.querySelector("#video-inteligente");
     
    const cb = (entries) =>{
        if(entries[0].isIntersecting){
            $video.play()

        } else {
             $video.pause()
        }

        d.addEventListener("visibilitychange", function() {
             if(d.visibilityState === "visible"){

               if($video.isIntersecting){ $video.play() } 
            }
               else $video.pause()
        
                 
            
        });
    }
        
        
        
        


    const observer = new IntersectionObserver(cb, {threshold: .4});
    observer.observe($video);    
  

}