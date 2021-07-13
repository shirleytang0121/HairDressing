import Character from '../character.js'
import Scissors from '../tools/scissors'
import CurlingIron from '../tools/curlingIron.js'
import HairDryer from '../tools/hairDryer.js'
import Straightener from '../tools/straightener.js'
import Comb from '../tools/comb.js'
import Bangs from '../tools/bangs.js'



export default function renderGamePage(gender){
    //delete all element
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


    const mygender = gender;
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
    
    const character =new Character();

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


    rightbtns.appendChild(scissorsbtn);
    rightbtns.appendChild(curlingIronbtn);
    rightbtns.appendChild(straightenerbtn);
    rightbtns.appendChild(hairdryerbtn);
    rightbtns.appendChild(hairdyebtn);
    rightbtns.appendChild(combbtn);
    rightbtns.appendChild(bangsbtn);


    const scissors = new Scissors();
    const curlingIron = new CurlingIron();
    const hairdryer = new HairDryer();
    const straightener = new Straightener();
    const comb =new Comb();
    const bangs=new Bangs();

    console.log("this is game page")


}