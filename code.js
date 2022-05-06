const pMin = document.querySelector('.pomo_min');
const pSec = document.querySelector('.pomo_sec');
const btnStart = document.querySelector('.inicio');
const btnStop = document.querySelector('.parar');
const btnPomo = document.querySelector('.pomos');
const pomoStart = document.querySelector('.start');
const pomoRest = document.querySelector('.rest');
const pomoRestL = document.querySelector('.restLong');


let sec = 60;
let min = 25;
onTimer = false


btnPomo.addEventListener('click', (e)=>{
  console.log(e.target);

  let btn = e.target.innerHTML;
  if (btn == 'Pomodoro'){
    pomoStart.classList.add('active')
    pomoRest.classList.remove('active')
    pomoRestL.classList.remove('active')
  }else if(btn == 'Descanso'){
    pomoRest.classList.add('active')
    pomoStart.classList.remove('active')
    pomoRestL.classList.remove('active')
  }else if(btn == 'Descanso largo'){
    pomoRestL.classList.add('active')
    pomoStart.classList.remove('active')
    pomoRest.classList.remove('active')
  }



})



btnStart.addEventListener('click', ()=>{       
  if(onTimer){ 
    onTimer = false;
    clearInterval(pomo);
    btnStart.innerHTML = 'Continuar';
    btnStop.innerHTML = 'Hecho';
  }else{
    onTimer=true;
    counter();
    btnStart.innerHTML='Pausa'
    btnStop.classList.remove('disable');
    btnStop.innerHTML = 'Parar';
  }
  
  
})

btnStop.addEventListener('click', (e)=>{
  if (onTimer){
    stopAll();
  }else if(e.target.innerHTML == 'Hecho'){
    stopAll();
    console.log('pomo terminado');
  }
  
})

const counter = ()=>{
  
  pomo = setInterval(()=>{
    
      if(min == 0 && sec == 0){
      
        clearInterval(pomo)
        return  console.log('terminado');
      }else if (sec == 0){
          sec = 60;
          min --;
        
      }
    
    sec --
    pMin.innerHTML = min;
    pSec.innerHTML = sec;
    
    
  }, 1000);


}


const stopAll = ()=>{
    clearInterval(pomo);
    sec = 60;
    min = 25;
    pMin.innerHTML = min;
    pSec.innerHTML = '00';
    btnStart.innerHTML='Comenzar'
    btnStop.innerHTML='Parar'
    btnStop.classList.add('disable');
    onTimer = false;
}


