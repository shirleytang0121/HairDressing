export default function twouserFinish(){
    const score1 = document.getElementById('left-submit');
    const score2 = document.getElementById('right-submit');

    const mainCharacter = Array.from(document.getElementsByClassName('main-character'));
    for (let i =0; i<mainCharacter.length;i++){
        mainCharacter[i].style.display="none";
    }

    const rightbtns = document.querySelector('.right-buttons');
    rightbtns.remove()

    const leftbtns = document.querySelector('.left-buttons');
    leftbtns.remove();

    const middiv =document.querySelector('.middiv');
    middiv.remove();

    const submit1 = document.getElementById('left-submit') 
    const submit2 = document.getElementById('right-submit') 
    const reset1 = document.getElementById('left-reset') 
    const reset2 = document.getElementById('right-reset')
    submit1.remove();
    submit2.remove();
    reset1.remove();
    reset2.remove();
    
    const check = document.querySelector(".correctImg")
    check.remove();

    const mirrors = document.getElementsByClassName('mirror');
    const mirror1 = mirrors[0];
    const mirror2 = mirrors[1];

    mirror1.style.marginLeft = '-150px';
    mirror1.style.width = '340px';

    mirror2.style.marginLeft = '-100px';
    mirror2.style.width = '340px';

    const midLeftdiv = document.querySelector('.midLeftdiv')
    const scorediv = document.createElement('div');
    scorediv.classList.add('show-score-1');
    const myscore = document.createElement('div');
    myscore.classList.add('score');
    scorediv.innerHTML = "Left user score is"
    myscore.innerHTML =score1.dataset.score;
    midLeftdiv.appendChild(scorediv);
    midLeftdiv.appendChild(myscore);


    const midRightdiv = document.querySelector('.midRightdiv')
    const scorediv2 = document.createElement('div');
    scorediv2.classList.add('show-score-2');
    const myscore2 = document.createElement('div');
    myscore2.classList.add('score');
    scorediv2.innerHTML = "Right User score is"
    myscore2.innerHTML =score2.dataset.score;
    midRightdiv.appendChild(scorediv2);
    midRightdiv.appendChild(myscore2);

    const restartbtn = document.createElement('button')
    midRightdiv.appendChild(restartbtn);
    midLeftdiv.appendChild(restartbtn);
    restartbtn.innerHTML = 'RESTART'
    restartbtn.classList.add('restart');
    restartbtn.addEventListener('click', ()=>{
        history.go(0)
    })

}