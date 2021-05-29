const d = document,
 w = window

export default function speech() {
const $speechSelect = d.getElementById("speech-select"),
    $speechTextarea = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    speechMessage = new SpeechSynthesisUtterance();

    
            
            console.log(speechMessage)
   

    let voices = []

    d.addEventListener("DOMContentLoaded", e => {
       
  

    w.speechSynthesis.addEventListener("voiceschanged", e => {
        voices = speechSynthesis.getVoices();
        console.log(voices)
        voices.forEach(voice => {
            const $option = d.createElement("option")
            console.log(voice)
            $option.value = voice.name
            $option.textContent = `${voice.name} - ${voice.lang}`

            $speechSelect.appendChild($option)
        })
    })
});

    d.addEventListener("change", e => {
        if(e.target === $speechSelect){
            // console.log(e)
             speechMessage.voice = voices.find(voice => voice.name === e.target.value);
        }
        console.log(speechMessage) 
    });

    d.addEventListener("click", e => {
        if(e.target === $speechBtn){ 
      speechMessage.text = $speechTextarea.value;  
    w.speechSynthesis.speak(speechMessage);
}
    });
}