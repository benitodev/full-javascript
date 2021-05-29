const d = document;

export default function raffle(btn, selector) {
    const getWinner = (selector) => {
        const players = document.querySelectorAll(selector),
        random = Math.floor(Math.random() * players.length),
        winner = players[random];

        return `El ganador es: ${winner.textContent}`
    }

    d.addEventListener("click", e => {
        if(e.target.matches(btn)){
            let result = getWinner(selector);
            alert(result);
            console.log(result)
        }
    })
}