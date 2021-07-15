export default function finishPage(){
   
    const mainCharacter = document.querySelector('.main-character');
    mainCharacter.style.display="none";
  
    const leftbtns = document.querySelector('.left-buttons');
    leftbtns.remove();

    const rightbtns = document.querySelector('.right-buttons');
    rightbtns.remove()

    const leftside = document.querySelector('.leftside');
    leftside.remove();

    const mirror = document.querySelector('.mirror');
    mirror.style.marginLeft = '-200px';

    let hair_obj = document.querySelector('.hair-style')
    if(hair_obj === null){
        hair_obj =document.querySelector(".man-style");
    }
    
    let score = 0;
    const low_score=["straight-long-cut","long-cut","long-cut-end","curling-long-cut","curling-long-cut-end","straight-long-cut-end","man-bald"];
    const high_score=["straight-long","straight-short","blow","curling-long","curling-median","median","short","man-long-2","man-short-4","man-short-2"];

    if (low_score.includes(hair_obj.id)){
        score = Math.random()*21+30;

    }else if(high_score.includes(hair_obj.id)){
        score = Math.random()*21+70;
    }else{
        score = Math.random()*21+50;
    }

    if(hair_obj.style.filter !== ""){
        score += Math.random()*25;
    }
    score = Math.floor(score);
    console.log(score);
    const middiv = document.querySelector('.middiv')
    const scorediv = document.createElement('div');
    scorediv.classList.add('show-score');
    const myscore = document.createElement('div');
    myscore.classList.add('score');
    scorediv.innerHTML = "Your score is"
    myscore.innerHTML =score;
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