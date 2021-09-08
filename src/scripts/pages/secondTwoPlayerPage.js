import Character from '../character.js';
import Scissors from '../tools/scissors';
import HairDryer from '../tools/hairDryer.js';
import LimitDye from '../tools/limitDye.js'

export default function renderTwoPlayer(){
    const salon = document.querySelector('.salon');
    salon.remove();

    const startbtnM = document.querySelector('.genderbtn')
    startbtnM.remove();

    const startbtnF = document.querySelector('.genderbtn')
    startbtnF.remove();

    const leftdiv = document.querySelector('.leftdiv')
    leftdiv.remove();
    
    const rightdiv = document.querySelector('.rightdiv')
    rightdiv.remove();


    const mainPage = document.querySelector(".main-page");

    const leftbtns = document.createElement('div');
    leftbtns.classList.add('left-buttons')
    const midLeftdiv = document.createElement('div');
    midLeftdiv.classList.add('midLeftdiv');
    const middiv = document.createElement('div');
    middiv.classList.add('middiv');
    const midRightdiv = document.createElement('div');
    midRightdiv.classList.add('midRightdiv');
    const rightbtns = document.createElement('div');
    rightbtns.classList.add('right-buttons');

    mainPage.appendChild(leftbtns);
    mainPage.appendChild(midLeftdiv);
    mainPage.appendChild(middiv);
    mainPage.appendChild(midRightdiv);
    mainPage.appendChild(rightbtns);


    const mirror1 = document.createElement('img');
    mirror1.setAttribute('src','./src/image/tools/mirror.png')
    mirror1.classList.add('mirror');
    const mirror2 = document.createElement('img');
    mirror2.setAttribute('src','./src/image/tools/mirror.png')
    mirror2.classList.add('mirror');
    const chardiv1 = document.createElement('div')
    chardiv1.classList.add('main-character');
    const chardiv2 = document.createElement('div')
    chardiv2.classList.add('main-character');
 
    midLeftdiv.appendChild(mirror1);
    midLeftdiv.appendChild(chardiv1);
    midRightdiv.appendChild(mirror2);
    midRightdiv.appendChild(chardiv2);

    const character =new Character('M');
    leftbtns.style.marginTop = '0px';


    const toolsbar = [leftbtns, rightbtns];
   

    for(let i=0; i<toolsbar.length; i++){
        const scissorsbtn = document.createElement('button');
        scissorsbtn.classList.add('scissors');
        const scissorsimg = document.createElement('img');
        scissorsimg.setAttribute('src','./src/image/tools/scissors.png');
        scissorsimg.classList.add('tools');
        scissorsbtn.innerHTML = '1';
        scissorsbtn.appendChild(scissorsimg);

        const hairdryerbtn =document.createElement('button');
        hairdryerbtn.classList.add('hair-dryer');
        const hairdryerimg =document.createElement('img');
        hairdryerimg.setAttribute('src','./src/image/tools/hair-dryer.png')
        hairdryerimg.classList.add('tools');
        hairdryerbtn.innerHTML = '4';
        hairdryerbtn.appendChild(hairdryerimg);

        const hairdyebtn =document.createElement('button');
        hairdyebtn.classList.add('hair-dye');
        const hairdyeimg =document.createElement('img');
        hairdyeimg.setAttribute('src','./src/image/tools/hair-dye.png')
        hairdyeimg.classList.add('tools');
        hairdyebtn.innerHTML = '7'
        hairdyebtn.appendChild(hairdyeimg);

    

        const colorSelector = document.createElement('div');
        colorSelector.classList.add('colorSelector');
       
        
        
        
        toolsbar[i].appendChild(scissorsbtn);
        toolsbar[i].appendChild(hairdryerbtn);
        toolsbar[i].appendChild(hairdyebtn);
        toolsbar[i].appendChild(colorSelector);
        toolsbar[i].appendChild(colorSelector);

    }

}