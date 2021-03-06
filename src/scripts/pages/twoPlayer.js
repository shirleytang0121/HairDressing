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
import Countdown from '../controller/countdown.js'

export default function renderTwoPlayer(){
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

    const newlogo1 = document.createElement('img');
    newlogo1.setAttribute('src','./src/image/Logo-2.png')
    newlogo1.classList.add('logo2');
    const newlogo2 = document.createElement('img');
    newlogo2.setAttribute('src','./src/image/Logo-2.png')
    newlogo2.classList.add('logo2');

    midLeftdiv.appendChild(mirror1);
    midLeftdiv.appendChild(chardiv1);
    midLeftdiv.appendChild(newlogo1);

    midRightdiv.appendChild(mirror2);
    midRightdiv.appendChild(chardiv2);
    midRightdiv.appendChild(newlogo2);

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
        scissorsbtn.innerHTML = '1';
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
       

        const curlingIronbtn = document.createElement('button');
        curlingIronbtn.classList.add('curling-iron');
        const curlingIronimg = document.createElement('img');
        curlingIronimg.setAttribute('src','./src/image/tools/curling-iron.png');
        curlingIronimg.classList.add('tools');
        curlingIronbtn.innerHTML = '2';
        curlingIronbtn.appendChild(curlingIronimg);

        const curlingIronInfo = document.createElement('p');
        curlingIronInfo.classList.add('toolInfo');
        curlingIronInfo.innerHTML = 'Use curling iron to make hair curling'
        curlingIronInfo.style.display = 'none';
    
        curlingIronbtn.addEventListener('mouseover',()=>{
            curlingIronInfo.style.display='block';
        })
    
        curlingIronbtn.addEventListener('mouseout',()=>{
            curlingIronInfo.style.display='none';
        })


        const hairdryerbtn =document.createElement('button');
        hairdryerbtn.classList.add('hair-dryer');
        const hairdryerimg =document.createElement('img');
        hairdryerimg.setAttribute('src','./src/image/tools/hair-dryer.png')
        hairdryerimg.classList.add('tools');
        hairdryerbtn.innerHTML = '4';
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

        const straightenerbtn = document.createElement('button');
        straightenerbtn.classList.add('straightener');
        const straightenerimg = document.createElement('img');
        straightenerimg.setAttribute('src','./src/image/tools/straightener.png');
        straightenerimg.classList.add('tools');
        straightenerbtn.innerHTML = '3';
        straightenerbtn.appendChild(straightenerimg);

        const straightenerInfo = document.createElement('p');
        straightenerInfo.classList.add('toolInfo');
        straightenerInfo.innerHTML = 'Use straightener to make curling hair straight'
        straightenerInfo.style.display='none';
    
        straightenerbtn.addEventListener("mouseover",()=>{
            straightenerInfo.style.display='block';
        })
    
        straightenerbtn.addEventListener("mouseout",()=>{
            straightenerInfo.style.display='none';
        })

        const hairdyebtn =document.createElement('button');
        hairdyebtn.classList.add('hair-dye');
        const hairdyeimg =document.createElement('img');
        hairdyeimg.setAttribute('src','./src/image/tools/hair-dye.png')
        hairdyeimg.classList.add('tools');
        hairdyebtn.innerHTML = '7'
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
    

     
    

        const combbtn = document.createElement('button');
        combbtn.classList.add('comb');
        const combimg = document.createElement('img')
        combimg.setAttribute('src','./src/image/tools/comb.png');
        combimg.classList.add('tools');
        combbtn.innerHTML='5';
        combbtn.appendChild(combimg);

        const combInfo = document.createElement('p');
        combInfo.classList.add('toolInfo');
        combInfo.innerHTML = 'Use comb after cut the hair'
        combInfo.style.display='none';
    
        combbtn.addEventListener("mouseover",()=>{
            combInfo.style.display='block';
        })
    
        combbtn.addEventListener("mouseout",()=>{
            combInfo.style.display='none';
        })
    

        const bangsbtn = document.createElement('button');
        bangsbtn.classList.add('bangs');
        const bangsimg = document.createElement('img')
        bangsimg.setAttribute('src','./src/image/tools/spray.png');
        bangsimg.classList.add('tools');
        bangsbtn.innerHTML = '6';
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

        const colorSelector = document.createElement('div');
        colorSelector.classList.add('colorSelector');
       
        
        
        
        toolsbar[i].appendChild(scissorsbtn);
        toolsbar[i].appendChild(scissorInfo);

        toolsbar[i].appendChild(curlingIronbtn);
        toolsbar[i].appendChild(curlingIronInfo);

        toolsbar[i].appendChild(straightenerbtn);
        toolsbar[i].appendChild(straightenerInfo);

        toolsbar[i].appendChild(hairdryerbtn);
        toolsbar[i].appendChild(hairdryerInfo);

        toolsbar[i].appendChild(combbtn);
        toolsbar[i].appendChild(combInfo);

        toolsbar[i].appendChild(bangsbtn);
        toolsbar[i].appendChild(bangInfo);

        toolsbar[i].appendChild(hairdyebtn);
        toolsbar[i].appendChild(hairdyeInfo);

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
        const hairL = document.querySelector('.hair-style-L');
        const bangsL = document.querySelector('.bang-style-L');
        hairL.setAttribute("id","initial");
        hairL.src = "./src/image/hairstyle/initial/initial.png"
        bangsL.setAttribute("id","initial-bangs");
        bangsL.src = "./src/image/bangs/bangs-1.png";
        hairL.style.filter="";
        bangsL.style.filter="";
        }
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