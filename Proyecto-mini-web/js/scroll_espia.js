const d = document;
export default function scrollSpy(){
    const $sections = d.querySelectorAll("section[data-scroll-spy]");

    const cb = (entries)=> {
     

        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id")
            // console.log(id)
            // console.log("entradas", entry)
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("actives")
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("actives")
            }
        })
    };

    const observer = new IntersectionObserver(cb, {
        threshold:[0.5, 0.60],
    });
  

    $sections.forEach((el) => {
        observer.observe(el)
    });
}