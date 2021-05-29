export function digitalClock(clock, btnPlay, btnStop) {
    let Interval;


    document.addEventListener("click", e => {
        if(e.target.matches(btnPlay)){

         Interval = setInterval(() =>{
                let clockHour = new Date().toLocaleTimeString();
                document.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 100);

            e.target.disabled = true
        }
        
        if(e.target.matches(btnStop)){
            
            clearInterval(Interval);
            document.querySelector(clock).innerHTML = null;
            document.querySelector(btnPlay).disabled = false;
            document.querySelector(clock).innerHTML = `<h3>00:00:00</h3>`
        }
    })
}

export function alarm(sound, active, disabled) {
    let alarmaTempo;
    const $alarm = document.createElement("audio");
    $alarm.src = sound;


    document.addEventListener("click", e => {

        if(e.target.matches(active)){
            alarmaTempo = setTimeout(() => {
                $alarm.play()
            }, 1000);
            e.target.disabled = true
        }

        if(e.target.matches(disabled)){
            clearTimeout(alarmaTempo);
            $alarm.pause();
            $alarm.currentTime = 0;
            document.querySelector(active).disabled = false;
        }


    });


}