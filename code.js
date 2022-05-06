const pMin = document.querySelector('.pomo_min');
const pSec = document.querySelector('.pomo_sec');
const btnStart = document.querySelector('.inicio');
const btnStop = document.querySelector('.parar');
let sec = 60;
let min = 25;
onTimer = false


btnStart.addEventListener('click', ()=>{
  if(onTimer){
    stop();
    btnStart.innerHTML = 'Continuar';
    btnStop.innerHTML = 'Hecho';
  }else{
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
    console.log(`minuto: ${min} segundo: ${sec}`)
    onTimer=true;
  }, 1000);


}

const stop = ()=>{
  clearInterval(pomo);
  
  onTimer = false;
  
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


// clearInterval(pomo)