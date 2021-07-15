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
import GeneraterForTwo from '../controller/generatorForTwoPlayer.js'

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
    leftbtns.style.marginTop = '0px';

    const toolsbar = [leftbtns, rightbtns];

   midLeftdiv.childNodes[1].childNodes[1].setAttribute('class','hair-style-L')
   midLeftdiv.childNodes[1].childNodes[2].setAttribute('class','bang-style-L')

    for(let i=0; i<toolsbar.length; i++){
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
       
        
        
        
        toolsbar[i].appendChild(scissorsbtn);
        toolsbar[i].appendChild(curlingIronbtn);
        toolsbar[i].appendChild(straightenerbtn);
        toolsbar[i].appendChild(hairdryerbtn);
        toolsbar[i].appendChild(combbtn);
        toolsbar[i].appendChild(bangsbtn);
        toolsbar[i].appendChild(hairdyebtn);
        toolsbar[i].appendChild(colorSelector);
        toolsbar[i].appendChild(colorSelector);

    }



    
    const scissors = new Scissors();
    const curlingIron = new CurlingIron();
    const hairdryer = new HairDryer();
    const hairdye = new LimitDye();
    const straightener = new Straightener();
    const comb =new Comb();
    const bangs=new Bangs();


    
    const imgdiv = document.createElement('div')
    imgdiv.classList.add('imgdiv');
    middiv.appendChild(imgdiv);

    const submitbtn = document.createElement('button');
    submitbtn.classList.add('submit');
    submitbtn.innerHTML = 'SUBMIT';
    submitbtn.setAttribute('id','left-submit');
    midLeftdiv.appendChild(submitbtn);

    const submitbtn2 = document.createElement('button');
    submitbtn2.classList.add('submit');
    submitbtn2.innerHTML = 'SUBMIT';
    submitbtn2.setAttribute('id','right-submit')
    midRightdiv.appendChild(submitbtn2);

    const resetbtn = document.createElement('button');
    resetbtn.classList.add('reset');
    resetbtn.innerHTML = 'RESET';
    resetbtn.setAttribute('id','left-reset')
    midLeftdiv.appendChild(resetbtn);
    resetbtn.addEventListener('click', ()=>{
        const hairL = document.querySelector('.hair-style-L');
        const bangsL = document.querySelector('.bang-style-L');
        hairL.setAttribute("id","initial");
        hairL.src = "./src/image/hairstyle/initial/initial.png"
        bangsL.setAttribute("id","initial-bangs");
        bangsL.src = "./src/image/bangs/bangs-1.png";
        hairL.style.filter="";
        bangsL.style.filter="";
    })

    const resetbtn2 = document.createElement('button');
    resetbtn2.classList.add('reset');
    resetbtn2.innerHTML = 'RESET';
    resetbtn2.setAttribute('id','right-reset');
    midRightdiv.appendChild(resetbtn2);
    resetbtn2.addEventListener('click',()=>{
        const hair = document.querySelector('.hair-style');
        const bangs = document.querySelector('.bang-style');
        hair.setAttribute("id","initial");
        hair.src = "./src/image/hairstyle/initial/initial.png"
        bangs.setAttribute("id","initial-bangs");
        bangs.src = "./src/image/bangs/bangs-1.png";
        hair.style.filter="";
        bangs.style.filter="";
    })

    const generatorForTwo = new GeneraterForTwo()



}