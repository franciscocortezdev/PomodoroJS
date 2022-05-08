const pMin = document.querySelector('.pomo_min');
const pSec = document.querySelector('.pomo_sec');
const btnStart = document.querySelector('.inicio');
const btnStop = document.querySelector('.parar');
const btnPomo = document.querySelector('.pomos');
const pomoStart = document.querySelector('.start');
const pomoRest = document.querySelector('.rest');
const pomoRestL = document.querySelector('.restLong');
const resultPomo = document.querySelector('.status_msg');
const progresBar = document.querySelector('.progres');
const porcent = document.querySelector('.porcent');

let sec = 60;
let min = 25;
let minR = 5;
let minRL = 15;
onTimer = false;
onActive = false;
velocityTimer = 1000;




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
      onActive = true;
      counter1(btn1, btn2, minDisplay, secDisplay, 25);
      
      btn1.innerHTML='Pausa'
      btn2.classList.remove('disable');
      btn2.innerHTML = 'Parar';
      resultPomo.classList.remove('active');
    }         
  }else if(e.target.classList.contains('parar')){
    if (onTimer){
      stopAll(btn1, btn2, minDisplay, secDisplay, 25);
      
    }else if(e.target.innerHTML == 'Hecho'){
      stopAll(btn1, btn2, minDisplay, secDisplay, 25);
      resultPomo.classList.add('active');
      
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
        counter2(btn1, btn2, minDisplay, secDisplay, 5);
        
        btn1.innerHTML='Pausa'
        btn2.classList.remove('disable');
        btn2.innerHTML = 'Parar';
        resultPomo.classList.remove('active');
      }         
    }else if(e.target.classList.contains('parar')){
      if (onTimer){
        stopAll(btn1, btn2, minDisplay, secDisplay, 5);
        
      }else if(e.target.innerHTML == 'Hecho'){
        stopAll(btn1, btn2, minDisplay, secDisplay, 5);
        resultPomo.classList.add('active');
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
          counter3(btn1, btn2, minDisplay, secDisplay, 15);
          
          btn1.innerHTML='Pausa'
          btn2.classList.remove('disable');
          btn2.innerHTML = 'Parar';
          resultPomo.classList.remove('active');
        }         
      }else if(e.target.classList.contains('parar')){
        if (onTimer){
          stopAll(btn1, btn2, minDisplay, secDisplay, 15);
          
        }else if(e.target.innerHTML == 'Hecho'){
          stopAll(btn1, btn2, minDisplay, secDisplay, 15);
          resultPomo.classList.add('active');
      }}});





btnPomo.addEventListener('click', (e)=>{
  let btn = e.target.innerHTML;
  let item1 = btnPomo.children[0];
  let item2 = btnPomo.children[1];
  let item3 = btnPomo.children[2];

  if (btn == 'Pomodoro'){

    if(onActive == true){
     

    }else{ 
    progresBar.classList.add('pomo1')
    progresBar.classList.remove('pomo2')
    progresBar.classList.remove('pomo3')

    resultPomo.classList.add('pomo1')
    resultPomo.classList.remove('pomo2')
    resultPomo.classList.remove('pomo3')

    item1.classList.add('pomo1')
    item2.classList.remove('pomo2')
    item3.classList.remove('pomo3')
    pomoStart.classList.add('active')
    pomoRest.classList.remove('active')
    pomoRestL.classList.remove('active')
    resultPomo.classList.remove('active');
    }
  }else if(btn == 'Descanso'){

    if(onActive == true){
     

    }else{ 


    
    progresBar.classList.remove('pomo1')
    progresBar.classList.add('pomo2')
    progresBar.classList.remove('pomo3')

    resultPomo.classList.remove('pomo1')
    resultPomo.classList.add('pomo2')
    resultPomo.classList.remove('pomo3')

    item1.classList.remove('pomo1')
    item2.classList.add('pomo2')
    item3.classList.remove('pomo3')
    pomoRest.classList.add('active')
    pomoStart.classList.remove('active')
    pomoRestL.classList.remove('active')
    resultPomo.classList.remove('active');
    }


  }else if(btn == 'Descanso largo'){

    if(onActive == true){
     

    }else{ 
    progresBar.classList.remove('pomo1')
    progresBar.classList.remove('pomo2')
    progresBar.classList.add('pomo3')

    resultPomo.classList.remove('pomo1')
    resultPomo.classList.remove('pomo2')
    resultPomo.classList.add('pomo3')

    item1.classList.remove('pomo1')
    item2.classList.remove('pomo2')
    item3.classList.add('pomo3')
    pomoRestL.classList.add('active')
    pomoStart.classList.remove('active')
    pomoRest.classList.remove('active')
    resultPomo.classList.remove('active');
    }
}});




const  counter1 =  (btn1, btn2, minDisplay, secDisplay, time)=>{
  
  pomo = setInterval(()=>{ 

    
    if(min == 0 && sec == 0){
      
      clearInterval(pomo)
      
      stopAll(btn1, btn2, minDisplay, secDisplay, time);
      resultPomo.classList.add('active');
      
      return;
      
    }else if (sec == 0){
      sec = 60;
      min --;
       
    }else if ( min == time){
      min--;

    }
    sec --
    if (sec < 10){
      sec = `0${sec}`;
    }
    progres = ((`${min}.${sec}`*100)/time);
    progresBar.style.width = `${progres.toFixed(2)}%`;
    
    
    porcent.innerHTML= progres.toFixed(2) + '%';
    minDisplay.innerHTML = min;
    secDisplay.innerHTML = sec;
  
  }, velocityTimer);
}


const  counter2 =  (btn1, btn2, minDisplay, secDisplay, time)=>{
  
  pomo = setInterval(()=>{ 

    
    if(minR == 0 && sec == 0){
      
      clearInterval(pomo)
      
      stopAll(btn1, btn2, minDisplay, secDisplay, time);
      resultPomo.classList.add('active');
      
      return;
      
    }else if (sec == 0){
      sec = 60;
      minR --;
       
    }else if ( minR == time){
      minR--;

    }
    sec --
    if (sec < 10){
      sec = `0${sec}`;
    }
    progres = ((`${minR}.${sec}`*100)/time);
    progresBar.style.width = `${progres.toFixed(2)}%`;
    console.log(progres);
    
    porcent.innerHTML= progres.toFixed(2) + '%';
    minDisplay.innerHTML = minR;
    secDisplay.innerHTML = sec;
  
  }, velocityTimer);
}

const  counter3 =  (btn1, btn2, minDisplay, secDisplay, time)=>{
  
  pomo = setInterval(()=>{ 

    
    if(minRL == 0 && sec == 0){
      
      clearInterval(pomo)
      
      stopAll(btn1, btn2, minDisplay, secDisplay, time);
      resultPomo.classList.add('active');
      
      return;
      
    }else if (sec == 0){
      sec = 60;
      minRL --;
       
    }else if ( minRL == time){
      minRL--;

    }
    sec --
    if (sec < 10){
      sec = `0${sec}`;
    }
    progres = ((`${minRL}.${sec}`*100)/time);
    progresBar.style.width = `${progres.toFixed(2)}%`;
    console.log(progres);
    
    porcent.innerHTML= progres.toFixed(2) + '%';
    minDisplay.innerHTML = minRL;
    secDisplay.innerHTML = sec;
  
  }, velocityTimer);
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
      
      progresBar.style.width = `100%`;
      porcent.innerHTML= '100%';
      onTimer = false;
      onActive = false;
    }


