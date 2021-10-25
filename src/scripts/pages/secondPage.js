import Character from '../character.js'
import Scissors from '../tools/scissors'
import HairDryer from '../tools/hairDryer.js'
import HairDye from '../tools/hairDye.js'
import Bangs from '../tools/bangs.js'
import HairClipper from '../tools/hairClipper.js'
import resetSecondPage from '../controller/secondReset.js'
import finishPage from '../controller/finish.js'


export default function renderNewGamePage(){
    const salon = document.querySelector('.salon');
    salon.remove();

    const logo =document.querySelector(".logo");
    logo.remove();

    const startbtnM = document.querySelector('.genderbtnF')
    startbtnM.remove();

    const startbtnF = document.querySelector('.genderbtnM')
    startbtnF.remove();

    const leftdiv = document.querySelector('.leftdiv')
    leftdiv.remove();
    
    const rightdiv = document.querySelector('.rightdiv')
    rightdiv.remove();

    const mainPage = document.querySelector(".main-page");

    const leftside = document.createElement('div');
    leftside.classList.add('leftside');
    const leftbtns = document.createElement('div');
    leftbtns.classList.add('left-buttons')
    const middiv = document.createElement('div');
    middiv.classList.add('middiv');
    const rightbtns = document.createElement('div');
    rightbtns.classList.add('right-buttons')
    
    mainPage.appendChild(leftside);
    leftside.appendChild(leftbtns);
    mainPage.appendChild(middiv);
    mainPage.appendChild(rightbtns);

    const mirror = document.createElement('img');
    mirror.setAttribute('src','./src/image/tools/mirror.png')
    mirror.classList.add('mirror');
    const chardiv = document.createElement('div')
    chardiv.classList.add('main-character');

    middiv.appendChild(mirror);
    middiv.appendChild(chardiv);
    
    const newlogo = document.createElement('img');
    newlogo.setAttribute('src','./src/image/Logo-2.png')
    newlogo.classList.add('logo2');
    mainPage.appendChild(newlogo);
    
    const character =new Character('M');
  
    const scissorsbtn = document.createElement('button');
    scissorsbtn.classList.add('scissors');
    const scissorsimg = document.createElement('img');
    scissorsimg.setAttribute('src','./src/image/tools/scissors.png');
    scissorsimg.classList.add('tools');
    scissorsbtn.appendChild(scissorsimg);

    const scissorInfo = document.createElement('p');
    scissorInfo.classList.add('toolInfo');
    scissorInfo.innerHTML = 'Use scisscors to make the hair shorter'
    scissorInfo.style.display = 'none'

    scissorsbtn.addEventListener("mouseover",()=>{
        scissorInfo.style.display="block";
    })
   
    scissorsbtn.addEventListener("mouseout",()=>{
        scissorInfo.style.display="none";
    })

    const clipperbtn = document.createElement('button');
    clipperbtn.classList.add('clipper');
    const clipperimg = document.createElement('img');
    clipperimg.setAttribute('src','./src/image/tools/hair-clipper.png');
    clipperimg.classList.add('tools');
    clipperimg.setAttribute('id','hair-clipper');
    clipperbtn.appendChild(clipperimg);

    const clipperInfo =document.createElement('p');
    clipperInfo.classList.add('toolInfo');
    clipperInfo.innerHTML='Use clipper to make short hair even shorter';
    clipperInfo.style.display='none';

    clipperbtn.addEventListener("mouseover",()=>{
        clipperInfo.style.display='block';
    })

    clipperbtn.addEventListener("mouseout",()=>{
        clipperInfo.style.display='none';
    })


    const hairdryerbtn =document.createElement('button');
    hairdryerbtn.classList.add('hair-dryer');
    const hairdryerimg =document.createElement('img');
    hairdryerimg.setAttribute('src','./src/image/tools/hair-dryer.png')
    hairdryerimg.classList.add('tools');
    hairdryerbtn.appendChild(hairdryerimg);

    const hairdryerInfo =document.createElement('p');
    hairdryerInfo.classList.add('toolInfo');
    hairdryerInfo.innerHTML='Use hair dryer to make hair more bluky';
    hairdryerInfo.style.display='none';

    hairdryerbtn.addEventListener("mouseover",()=>{
        hairdryerInfo.style.display='block';
    })

    hairdryerbtn.addEventListener("mouseout",()=>{
        hairdryerInfo.style.display='none';
    })



    const hairdyebtn =document.createElement('button');
    hairdyebtn.classList.add('hair-dye');
    const hairdyeimg =document.createElement('img');
    hairdyeimg.setAttribute('src','./src/image/tools/hair-dye.png')
    hairdyeimg.classList.add('tools');
    hairdyebtn.appendChild(hairdyeimg);

    const hairdyeInfo = document.createElement('p');
    hairdyeInfo.classList.add('toolInfo');
    hairdyeInfo.innerHTML = 'Use to change hair to different color'
    hairdyeInfo.style.display='none';

    hairdyebtn.addEventListener("mouseover",()=>{
        hairdyeInfo.style.display='block';
    })

    hairdyebtn.addEventListener("mouseout",()=>{
        hairdyeInfo.style.display='none';
    })

    
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

    const bangInfo = document.createElement('p');
    bangInfo.classList.add('toolInfo');
    bangInfo.innerHTML = 'Use to change different type of bangs'
    bangInfo.style.display='none';

    bangsbtn.addEventListener("mouseover",()=>{
        bangInfo.style.display='block';
    })

    bangsbtn.addEventListener("mouseout",()=>{
        bangInfo.style.display='none';
    })



    rightbtns.appendChild(scissorsbtn);
    rightbtns.appendChild(scissorInfo);

    rightbtns.appendChild(clipperbtn);
    rightbtns.appendChild(clipperInfo);

    rightbtns.appendChild(hairdryerbtn);
    rightbtns.appendChild(hairdryerInfo);

    rightbtns.appendChild(bangsbtn);
    rightbtns.appendChild(bangInfo);

    rightbtns.appendChild(hairdyebtn);
    rightbtns.appendChild(hairdyeInfo);
    rightbtns.appendChild(colordiv)

    const scissors = new Scissors();
    const hairdryer = new HairDryer();
    const hairClipper = new HairClipper();
    const bangs= new Bangs();
    const hairdye = new  HairDye();


    const placediv = document.createElement('div');
    placediv.style.height = '100px';
    leftbtns.appendChild(placediv);

    const resetbtn = document.createElement('button');
    resetbtn.classList.add('reset');
    resetbtn.innerHTML = 'RESET';

    const finishbtn = document.createElement('button');
    finishbtn.classList.add('finish');
    finishbtn.innerHTML= 'FINISH';

    const backbtn = document.createElement("button");
    backbtn.classList.add('back');
    backbtn.innerHTML = 'BACK'

    leftbtns.appendChild(resetbtn);
    leftbtns.appendChild(finishbtn);
    leftbtns.appendChild(backbtn);

    resetbtn.addEventListener('click',resetSecondPage);
    finishbtn.addEventListener('click',finishPage);
    backbtn.addEventListener('click',()=>{
        history.go(0)
    })
    

    
    const introdiv = document.createElement('div')
    introdiv.classList.add('introdiv');
    const readybtn = document.createElement('button')
    readybtn.classList.add('readybtn');
    readybtn.innerHTML= 'READY';
    const introp = document.createElement('p')
    introp.classList.add('introp')
    introp.innerHTML='Welcome to creative mode. In this mode, you can use the tools on right side to create your fancy hair style.'
     readybtn.addEventListener('click',()=>{
         introdiv.style.display = 'none';
     })
    mainPage.appendChild(introdiv)
    introdiv.appendChild(introp);
    introdiv.appendChild(readybtn);

    
}