import renderGamePage from "./gamePage.js"
import renderNewGamePage from './secondPage'
import renderCompetitionPage from "./compPage.js";
import renderSecondCompPage from "./secondComPage.js";
import renderTwoPlayer from "./twoPlayer.js";

export default function renderIntroPage(){
    const gender = '';
    const mode='';
    const mainPage = document.querySelector(".main-page");
    const salon = document.createElement('img');
    salon.setAttribute('src','./src/image/hair-salon.png');
    salon.classList.add('salon');

    const leftdiv = document.createElement('div');
    leftdiv.classList.add('leftdiv');
    const rightdiv = document.createElement('div');
    rightdiv.classList.add('rightdiv');
    mainPage.appendChild(leftdiv);
    
    const crebtn = document.createElement('button');
    crebtn.innerHTML='CREATE MODE';
    crebtn.classList.add('mode');
    crebtn.style.display = 'none';
    crebtn.addEventListener('click', renderGamePage);
    const compbtn = document.createElement('button');
    compbtn.innerHTML='COMPETITION MODE';
    compbtn.classList.add('mode');
    compbtn.style.display = 'none';
    compbtn.addEventListener('click',renderCompetitionPage);
    const twobtn = document.createElement('button');
    twobtn.innerHTML = 'TWO PLAYER MODE';
    twobtn.classList.add('mode');
    twobtn.style.display = 'none';
    twobtn.addEventListener('click',renderTwoPlayer)


    const crebtnM = document.createElement('button');
    crebtnM.innerHTML='CREATE MODE';
    crebtnM.classList.add('mode');
    crebtnM.style.display = 'none';
    crebtnM.addEventListener('click', renderNewGamePage);
    const compbtnM = document.createElement('button');
    compbtnM.innerHTML='COMPETITION MODE';
    compbtnM.classList.add('mode');
    compbtnM.style.display = 'none';
    compbtnM.addEventListener('click',renderSecondCompPage);


    

    const startbtnF = document.createElement('button');
    startbtnF.innerHTML='SHE'
    startbtnF.classList.add('genderbtn')
    startbtnF.addEventListener('mouseenter',()=>{
        crebtn.style.display = 'block';
        rightdiv.appendChild(crebtn);
        compbtn.style.display = 'block';
        rightdiv.appendChild(compbtn);
        twobtn.style.display= 'block';
        rightdiv.appendChild(twobtn);
    });

    
    // startbtnF.addEventListener('mouseleave',()=>{
    //     crebtn.style.display = 'none';
    //     // rightdiv.appendChild(crebtn);
    //     compbtn.style.display = 'none';
    //     // rightdiv.appendChild(compbtn);
    //     twobtn.style.display= 'none';
    //     // rightdiv.appendChild(twobtn);
    // })

    const startbtnM = document.createElement('button');
    startbtnM.innerHTML='HE'
    startbtnM.classList.add('genderbtn')
    startbtnM.addEventListener('mouseenter',()=>{
        crebtnM.style.display = 'block';
        leftdiv.appendChild(crebtnM);
        compbtnM.style.display = 'block';
        leftdiv.appendChild(compbtnM);

    });

    
    mainPage.appendChild(salon);
    mainPage.appendChild(rightdiv);

    leftdiv.appendChild(startbtnM);
    rightdiv.appendChild(startbtnF);
    


}
