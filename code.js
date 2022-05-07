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
let minR = 5;
let minRL = 10;
onTimer = false





pomoStart.addEventListener('click', (e)=>{
  const btn1 = pomoStart.children[1].children[0];
  const btn2 = pomoStart.children[1].children[1];
  const minDisplay = pomoStart.children[0].children[0];
  const secDisplay = pomoStart.children[0].children[1];

  if(e.target.classList.contains('inicio')){
    if(onTimer){ 
      onTimer = false;
      clearInterval(pomo);
      btn1.innerHTML = 'Continuar';
      btn2.innerHTML = 'Hecho';
    }else{
      onTimer=true;
      counter(minDisplay, secDisplay, 25);
      
      btn1.innerHTML='Pausa'
      btn2.classList.remove('disable');
      btn2.innerHTML = 'Parar';
    }         
  }else if(e.target.classList.contains('parar')){
    if (onTimer){
      stopAll(btn1, btn2, minDisplay, secDisplay, 25);
      
    }else if(e.target.innerHTML == 'Hecho'){
      stopAll(btn1, btn2, minDisplay, secDisplay, 25);
      console.log('Pomo terminado');
  }}});



  pomoRest.addEventListener('click', (e)=>{
    const btn1 = pomoRest.children[1].children[0];
    const btn2 = pomoRest.children[1].children[1];
    const minDisplay = pomoRest.children[0].children[0];
    const secDisplay = pomoRest.children[0].children[1];
  
    if(e.target.classList.contains('inicio')){
      if(onTimer){ 
        onTimer = false;
        clearInterval(pomo);
        btn1.innerHTML = 'Continuar';
        btn2.innerHTML = 'Hecho';
      }else{
        onTimer=true;
        counter(minDisplay, secDisplay, 5);
        
        btn1.innerHTML='Pausa'
        btn2.classList.remove('disable');
        btn2.innerHTML = 'Parar';
      }         
    }else if(e.target.classList.contains('parar')){
      if (onTimer){
        stopAll(btn1, btn2, minDisplay, secDisplay, 5);
        
      }else if(e.target.innerHTML == 'Hecho'){
        stopAll(btn1, btn2, minDisplay, secDisplay, 5);
        console.log('Pomo terminado');
    }}});


    pomoRestL.addEventListener('click', (e)=>{
      const btn1 = pomoRestL.children[1].children[0];
      const btn2 = pomoRestL.children[1].children[1];
      const minDisplay = pomoRestL.children[0].children[0];
      const secDisplay = pomoRestL.children[0].children[1];
    
      if(e.target.classList.contains('inicio')){
        if(onTimer){ 
          onTimer = false;
          clearInterval(pomo);
          btn1.innerHTML = 'Continuar';
          btn2.innerHTML = 'Hecho';
        }else{
          onTimer=true;
          counter(minDisplay, secDisplay, 15);
          
          btn1.innerHTML='Pausa'
          btn2.classList.remove('disable');
          btn2.innerHTML = 'Parar';
        }         
      }else if(e.target.classList.contains('parar')){
        if (onTimer){
          stopAll(btn1, btn2, minDisplay, secDisplay, 15);
          
        }else if(e.target.innerHTML == 'Hecho'){
          stopAll(btn1, btn2, minDisplay, secDisplay, 15);
          console.log('Pomo terminado');
      }}});





btnPomo.addEventListener('click', (e)=>{
  let btn = e.target.innerHTML;
  let item1 = btnPomo.children[0];
  let item2 = btnPomo.children[1];
  let item3 = btnPomo.children[2];
  if (btn == 'Pomodoro'){
    item1.classList.add('pomo1')
    item2.classList.remove('pomo2')
    item3.classList.remove('pomo3')
    pomoStart.classList.add('active')
    pomoRest.classList.remove('active')
    pomoRestL.classList.remove('active')
    
  }else if(btn == 'Descanso'){
    item1.classList.remove('pomo1')
    item2.classList.add('pomo2')
    item3.classList.remove('pomo3')
    pomoRest.classList.add('active')
    pomoStart.classList.remove('active')
    pomoRestL.classList.remove('active')
    
    
  }else if(btn == 'Descanso largo'){
    item1.classList.remove('pomo1')
    item2.classList.remove('pomo2')
    item3.classList.add('pomo3')
    pomoRestL.classList.add('active')
    pomoStart.classList.remove('active')
    pomoRest.classList.remove('active')
    
}});




const counter = (minDisplay, secDisplay, time)=>{
  min = time;
  pomo = setInterval(()=>{ 
    if(min == 0 && sec == 0){
      clearInterval(pomo)
      return  console.log('terminado');
    }else if (sec == 0){
      sec = 60;
      min --; 
    }
    sec --
    if(min == time){
      min--;
    }

    minDisplay.innerHTML = min;
    secDisplay.innerHTML = sec;

  }, 1000);
}


   const stopAll = (btn1, btn2, minDisplay, secDisplay, time)=>{
      clearInterval(pomo);
      sec = 60;
      min = time;
      minDisplay.innerHTML = min;
      secDisplay.innerHTML = '00';
      btn1.innerHTML='Comenzar'
      btn2.innerHTML='Parar'
      btn2.classList.add('disable');
      onTimer = false;
    }


