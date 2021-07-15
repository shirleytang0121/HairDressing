export default function timeoutPage(){
    const score = document.querySelector('.submit');

    const mainCharacter = document.querySelector('.main-character');
    mainCharacter.style.display="none";
  

    const rightbtns = document.querySelector('.right-buttons');
    rightbtns.remove()

    const leftside = document.querySelector('.leftside');
    leftside.remove();

    const timer =document.querySelector('.timediv');
    timer.remove();

    const mirror = document.querySelector('.mirror');
    mirror.style.marginLeft = '-200px';
    
    
   
    console.log(score);
   
    const middiv = document.querySelector('.middiv')
    const scorediv = document.createElement('div');
    scorediv.classList.add('show-score');
    const myscore = document.createElement('div');
    myscore.classList.add('score');
    scorediv.innerHTML = "Your score is"
    myscore.innerHTML =score.id;
    middiv.appendChild(scorediv);
    middiv.appendChild(myscore);
  
    const restartbtn = document.createElement('button')
    middiv.appendChild(restartbtn);
    restartbtn.innerHTML = 'RESTART'
    restartbtn.classList.add('restart');
    restartbtn.addEventListener('click', ()=>{
        history.go(0)
    })
    
    
}