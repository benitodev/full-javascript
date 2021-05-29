const d = document,
w = window,
n = navigator;
export default function webCam(id) {
   const $video = d.getElementById(id)


    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video:true, audio: true})
        .then((stream) => {
            console.log(stream)
            $video.srcObject = stream;
            $video.play()

        })
        .catch((err) => {
            console.log(`Ha ocurrido un error ${err}` )
        }
        )

}
}