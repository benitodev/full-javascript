const d = document;

export default  function search(input, card) {
    
    d.addEventListener("keyup", e => {
        if(e.target.matches(input)){
            console.log(e.target.value)  

            if(e.value === "Escape") e.target.value = ""

            d.querySelectorAll(card).forEach(el => {
                el.textContent.toLowerCase().includes(e.target.value) 
                ? el.classList.remove("filter")
                : el.classList.add("filter")
            })
        }
    })
}