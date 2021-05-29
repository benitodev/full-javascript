const d = document;
let x = 0, 
y = 0;

export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();

    

    // console.log(e.keyCode);
    // console.log(e.key)
//    console.clear()
    switch (e.keyCode) {
        case 37:
            //move("left");
           if(limitBall.left > limitStage.left) {
            // e.preventDefault();
            x--}

          
            break;
            case 38:
                // move("up");
              
                if(limitBall.top > limitStage.top) {
                    // e.preventDefault();
                    y--}
                break;
                
                case 39:
                   
                    //move("right");
                    if(limitBall.right < limitStage.right) {
                        // e.preventDefault();
                        x++}
                    break;
                    
                    case 40:
                     //   move("down");
                     if(limitBall.bottom < limitStage.bottom){  
                        //  e.preventDefault(); 
                        y++
                    } 
                     
                        break;
                        
                        
                        default:
                            break;
                        }
                        $ball.style.transform = `translate(${x * 5}px, ${y * 5}px)`
                        // console.log("Bola", limitBall);
                        // console.log("Escenario", limitStage);
                    }
                    




export function shortcuts(e) {
 // console.log(e);
   // console.log(e.type);
 // console.log(e.key);
// console.log(e.keyCode);
// console.log(e.ctrlKey);
// console.log(e.altKey);

//Crear propios shortcuts
if(e.key === "a" && e.altKey){
    alert(`holuiss jajaj no puedes tocarr alt shif mayus o shiftt leroleroo`)
    }
}
