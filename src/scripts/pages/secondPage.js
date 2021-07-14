import Character from '../character.js'
import Scissors from '../tools/scissors'
import HairDryer from '../tools/hairDryer.js'
import HairDye from '../tools/hairDye.js'
import Bangs from '../tools/bangs.js'
import HairClipper from '../tools/hairClipper.js'

export default function renderNewGamePage(){
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
    const middiv = document.createElement('div');
    const rightbtns = document.createElement('div');
    rightbtns.classList.add('right-buttons')
    
    mainPage.appendChild(leftbtns);
    mainPage.appendChild(middiv);
    mainPage.appendChild(rightbtns);

    const mirror = document.createElement('img');
    mirror.setAttribute('src','./src/image/tools/mirror.png')
    mirror.classList.add('mirror');
    const chardiv = document.createElement('div')
    chardiv.classList.add('main-character');

    middiv.appendChild(mirror);
    middiv.appendChild(chardiv);
    
    const character =new Character('M');
  
    const scissorsbtn = document.createElement('button');
    scissorsbtn.classList.add('scissors');
    const scissorsimg = document.createElement('img');
    scissorsimg.setAttribute('src','./src/image/tools/scissors.png');
    scissorsimg.classList.add('tools');
    scissorsbtn.appendChild(scissorsimg);

    const clipperbtn = document.createElement('button');
    clipperbtn.classList.add('clipper');
    const clipperimg = document.createElement('img');
    clipperimg.setAttribute('src','./src/image/tools/hair-clipper.png');
    clipperimg.classList.add('tools');
    clipperimg.setAttribute('id','hair-clipper');
    clipperbtn.appendChild(clipperimg);

    const hairdryerbtn =document.createElement('button');
    hairdryerbtn.classList.add('hair-dryer');
    const hairdryerimg =document.createElement('img');
    hairdryerimg.setAttribute('src','./src/image/tools/hair-dryer.png')
    hairdryerimg.classList.add('tools');
    hairdryerbtn.appendChild(hairdryerimg);

    const hairdyebtn =document.createElement('button');
    hairdyebtn.classList.add('hair-dye');
    const hairdyeimg =document.createElement('img');
    hairdyeimg.setAttribute('src','./src/image/tools/hair-dye.png')
    hairdyeimg.classList.add('tools');
    hairdyebtn.appendChild(hairdyeimg);
    // const dyediv = document.createElement('div');
    // dyediv.classList.add('dyediv');
    // dyediv.appendChild(hairdyebtn);

    const colordiv = document.createElement('div');
    colordiv.classList.add('wheel');
    colordiv.style.display = 'none';
    colordiv.setAttribute('id','colorWheel');

    const bangsbtn = document.createElement('button');
    bangsbtn.classList.add('bangs');
    const bangsimg = document.createElement('img')
    bangsimg.setAttribute('src','./src/image/tools/spray.png');
    bangsimg.classList.add('tools');
    bangsbtn.appendChild(bangsimg);


    rightbtns.appendChild(scissorsbtn);
    rightbtns.appendChild(clipperbtn);
    rightbtns.appendChild(hairdryerbtn);
    rightbtns.appendChild(bangsbtn);
    rightbtns.appendChild(hairdyebtn);
    rightbtns.appendChild(colordiv)

    const scissors = new Scissors();
    const hairdryer = new HairDryer();
    const hairClipper = new HairClipper();
    const bangs= new Bangs();
    const hairdye = new  HairDye();
    
    
}