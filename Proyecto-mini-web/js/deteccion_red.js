const d = document,
w = window,
n = navigator;

export default function network() {


    
    const myNetwork = () =>{
      const  $div = d.createElement("div");
        
        
        if(n.onLine){

            $div.innerHTML = `<p>chavall tienes internet</p>`
            $div.classList.add("online");
            $div.classList.remove("offline");
        } else {
            $div.innerHTML = `<p>No tienes internet</p>`
            $div.classList.remove("online");
            $div.classList.add("offline");
        }

        d.body.insertAdjacentElement("afterbegin", $div)

        setTimeout(() => {
            d.body.removeChild($div)
        }, 2500);
    }


    w.addEventListener("online", e => {
       myNetwork();
    })
    w.addEventListener("offline", e => {
        myNetwork();
    })
}