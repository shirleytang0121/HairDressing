import Character from '../character.js';
import Scissors from '../tools/scissors';
import HairDryer from '../tools/hairDryer.js';
import LimitDye from '../tools/limitDye.js';
import Bangs from '../tools/bangs.js';
import Clipper from '../tools/hairClipper';
import Countdown from '../controller/countdown.js';
import GeneraterForTwo from '../controller/secondGenForTwo.js';

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

    midLeftdiv.childNodes[1].childNodes[1].setAttribute('class','man-style-L')

    for(let i=0; i<toolsbar.length; i++){
        const scissorsbtn = document.createElement('button');
        scissorsbtn.classList.add('scissors');
        const scissorsimg = document.createElement('img');
        scissorsimg.setAttribute('src','./src/image/tools/scissors.png');
        scissorsimg.classList.add('tools');
        scissorsbtn.innerHTML = '1';
        scissorsbtn.appendChild(scissorsimg);

        const clipperbtn = document.createElement('button');
        clipperbtn.classList.add('clipper');
        const clipperimg = document.createElement('img');
        clipperimg.setAttribute('src','./src/image/tools/hair-clipper.png');
        clipperimg.classList.add('tools');
        clipperimg.setAttribute('id','hair-clipper');
        clipperbtn.innerHTML='2'
        clipperbtn.appendChild(clipperimg);

        const hairdryerbtn =document.createElement('button');
        hairdryerbtn.classList.add('hair-dryer');
        const hairdryerimg =document.createElement('img');
        hairdryerimg.setAttribute('src','./src/image/tools/hair-dryer.png')
        hairdryerimg.classList.add('tools');
        hairdryerbtn.innerHTML = '4';
        hairdryerbtn.appendChild(hairdryerimg);

        const bangsbtn = document.createElement('button');
        bangsbtn.classList.add('bangs');
        const bangsimg = document.createElement('img')
        bangsimg.setAttribute('src','./src/image/tools/spray.png');
        bangsimg.classList.add('tools');
        bangsbtn.innerHTML = '6';
        bangsbtn.appendChild(bangsimg);

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
        toolsbar[i].appendChild(clipperbtn);
        toolsbar[i].appendChild(hairdryerbtn);
        toolsbar[i].appendChild(bangsbtn);
        toolsbar[i].appendChild(hairdyebtn);
        toolsbar[i].appendChild(colorSelector);
        toolsbar[i].appendChild(colorSelector);

    }

    const scissors = new Scissors();
    const hairdryer = new HairDryer();
    const hairdye = new LimitDye();
    const bangs=new Bangs();
    const clipper = new Clipper();


    const imgdiv = document.createElement('div')
    imgdiv.classList.add('imgdiv');
    middiv.appendChild(imgdiv);

    const submitbtn = document.createElement('button');
    submitbtn.classList.add('submit');
    submitbtn.innerHTML = 'SUBMIT(S)';
    submitbtn.setAttribute('id','left-submit');
    midLeftdiv.appendChild(submitbtn);

    const submitbtn2 = document.createElement('button');
    submitbtn2.classList.add('submit');
    submitbtn2.innerHTML = 'SUBMIT';
    submitbtn2.setAttribute('id','right-submit')
    midRightdiv.appendChild(submitbtn2);

    const resetbtn = document.createElement('button');
    resetbtn.classList.add('reset');
    resetbtn.innerHTML = 'RESET(D)';
    resetbtn.setAttribute('id','left-reset')
    midLeftdiv.appendChild(resetbtn);
    document.addEventListener('keydown', (e)=>{
        if(e.key == 'd'){
        const hairL = document.querySelector('.man-style-L');
        hairL.setAttribute("id","man-initial");
        hairL.src = "./src/image/manstyle/initial.png"
        hairL.style.filter="";
        }
    })

    const resetbtn2 = document.createElement('button');
    resetbtn2.classList.add('reset');
    resetbtn2.innerHTML = 'RESET';
    resetbtn2.setAttribute('id','right-reset');
    midRightdiv.appendChild(resetbtn2);
    resetbtn2.addEventListener('click',()=>{
        const hair = document.querySelector('.hair-style');
        hair.setAttribute("id","man-initial");
        hair.src = "./src/image/manstyle/initial.png"
        hair.style.filter="";
    })

    const backbtn1 = document.createElement("button");
    backbtn1.classList.add('back');
    backbtn1.setAttribute('id','left-back')
    backbtn1.innerHTML = 'BACK(Q)'
    midLeftdiv.appendChild(backbtn1);

    const backbtn2 = document.createElement("button");
    backbtn2.classList.add('back');
    backbtn2.setAttribute('id','right-back')
    backbtn2.innerHTML = 'BACK'
    midRightdiv.appendChild(backbtn2);

    document.addEventListener('keydown',(e)=>{
        if(e.key === 'q'){
        history.go(0)
        }
    })

    backbtn2.addEventListener('click',()=>{
        history.go(0)
    })

    const generatorForTwo = new GeneraterForTwo();

    const msgLeft = document.createElement('div')
    msgLeft.classList.add('msgLeft');
    const msgRight = document.createElement('div')
    msgRight.classList.add('msgRight');

    midLeftdiv.appendChild(msgLeft);
    midRightdiv.appendChild(msgRight);

    const introdiv = document.createElement('div')
    introdiv.classList.add('introdiv');
    const readybtn = document.createElement('button')
    readybtn.classList.add('readybtn');
    readybtn.innerHTML= 'READY';
    const introp = document.createElement('p')
    introp.classList.add('introp')
    introp.innerHTML='Welcome to two player mode. In this mode, Left user uses keyboard to change the hair styles. Right user uses mouse to change hair style. Who first gets 5 styles done wins the game'
     readybtn.addEventListener('click',()=>{
         introdiv.style.display = 'none';
     })
    mainPage.appendChild(introdiv)
    introdiv.appendChild(introp);
    introdiv.appendChild(readybtn);

    const countdowndiv = document.createElement('div');
    countdowndiv.classList.add('countdowndiv');
    middiv.appendChild(countdowndiv);
    countdowndiv.style.display='none';
    const countdown = new Countdown();


}