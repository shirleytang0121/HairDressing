import Character from '../character.js'
import Scissors from '../tools/scissors'
import CurlingIron from '../tools/curlingIron.js'
import HairDryer from '../tools/hairDryer.js'
import Straightener from '../tools/straightener.js'
import Comb from '../tools/comb.js'
import Bangs from '../tools/bangs.js'
import LimitDye from '../tools/limitDye.js'
import resetPage from '../controller/reset.js'
import finishPage from '../controller/finish.js'

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

    const character =new Character('F');

    const scissorsbtn = document.createElement('button');
    scissorsbtn.classList.add('scissors');
    const scissorsimg = document.createElement('img');
    scissorsimg.setAttribute('src','./src/image/tools/scissors.png');
    scissorsimg.classList.add('tools');
    scissorsbtn.appendChild(scissorsimg);

    const curlingIronbtn = document.createElement('button');
    curlingIronbtn.classList.add('curling-iron');
    const curlingIronimg = document.createElement('img');
    curlingIronimg.setAttribute('src','./src/image/tools/curling-iron.png');
    curlingIronimg.classList.add('tools');
    curlingIronbtn.appendChild(curlingIronimg);

    const hairdryerbtn =document.createElement('button');
    hairdryerbtn.classList.add('hair-dryer');
    const hairdryerimg =document.createElement('img');
    hairdryerimg.setAttribute('src','./src/image/tools/hair-dryer.png')
    hairdryerimg.classList.add('tools');
    hairdryerbtn.appendChild(hairdryerimg);

    const straightenerbtn = document.createElement('button');
    straightenerbtn.classList.add('straightener');
    const straightenerimg = document.createElement('img');
    straightenerimg.setAttribute('src','./src/image/tools/straightener.png');
    straightenerimg.classList.add('tools');
    straightenerbtn.appendChild(straightenerimg);

    const hairdyebtn =document.createElement('button');
    hairdyebtn.classList.add('hair-dye');
    const hairdyeimg =document.createElement('img');
    hairdyeimg.setAttribute('src','./src/image/tools/hair-dye.png')
    hairdyeimg.classList.add('tools');
    hairdyebtn.appendChild(hairdyeimg);

    const combbtn = document.createElement('button');
    combbtn.classList.add('comb');
    const combimg = document.createElement('img')
    combimg.setAttribute('src','./src/image/tools/comb.png');
    combimg.classList.add('tools');
    combbtn.appendChild(combimg);

    const bangsbtn = document.createElement('button');
    bangsbtn.classList.add('bangs');
    const bangsimg = document.createElement('img')
    bangsimg.setAttribute('src','./src/image/tools/spray.png');
    bangsimg.classList.add('tools');
    bangsbtn.appendChild(bangsimg);

    const colorSelector = document.createElement('div');
    colorSelector.classList.add('colorSelector');
    rightbtns.appendChild(colorSelector);


    leftbtns.style.marginTop = '0px';
    leftbtns.appendChild(scissorsbtn);
    leftbtns.appendChild(curlingIronbtn);
    leftbtns.appendChild(straightenerbtn);
    leftbtns.appendChild(hairdryerbtn);
    leftbtns.appendChild(combbtn);
    leftbtns.appendChild(bangsbtn);
    leftbtns.appendChild(hairdyebtn);
    leftbtns.appendChild(colorSelector);


    rightbtns.appendChild(scissorsbtn);
    rightbtns.appendChild(curlingIronbtn);
    rightbtns.appendChild(straightenerbtn);
    rightbtns.appendChild(hairdryerbtn);
    rightbtns.appendChild(combbtn);
    rightbtns.appendChild(bangsbtn);
    rightbtns.appendChild(hairdyebtn);
    rightbtns.appendChild(colorSelector);

    
    const scissors = new Scissors();
    const curlingIron = new CurlingIron();
    const hairdryer = new LimitDye();
    const straightener = new Straightener();
    const comb =new Comb();
    const bangs=new Bangs();




}