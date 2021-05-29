 export function countDown() {    
     let end = new Date('12/17/2080 9:30 AM');
    // console.log(end)
   let _second = 1000,
    _minute = _second * 60,    
    _hour = _minute * 60,   
     _day = _hour * 24,    
    timer;
          
        let now = new Date(),
        distance = end - now;        
       

    // console.log(distance)

       if (distance < 0) {

           clearInterval(timer);
           document.getElementById('countdown').outerHTML = '<h3>EXPIRED!</h3>'; return  } 
           
           
          let days = Math.floor(distance / _day),       
           hours = Math.floor((distance % _day) / _hour),
        minutes = Math.floor((distance % _hour) / _minute),
   seconds = Math.floor((distance % _minute) / _second);

      document.getElementById('countdown').innerHTML = `${days} dias,
       ${hours} horas, 
       ${minutes} minutos 
      y ${seconds} segundos`;

       timer = setInterval(countDown, 1000);
}
