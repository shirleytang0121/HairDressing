import Character from './character.js'
import Scissors from './scissors'
import CurlingIron from './curlingIron.js'
import HairDryer from './hairDryer.js'
import Straightener from './straightener.js'
import Comb from './comb.js'



// <!-- <div class="left-buttons">

// </div>
// <div>
//   <img src="src/image/tools/mirror.png" class="mirror">
//   <div class="main-character"></div>
// </div>

// <div class="right-buttons">
//   <button class="scissors"><img src="src/image/tools/scissors.png" class="tools" ></button>
//   <button class="curling-iron"><img src="src/image/tools/curling-iron.png" class="tools" ></button>
//   <button class="straightener"><img src="src/image/tools/straightener.png" class="tools" ></button>
//   <button class="hair-dryer"><img src="src/image/tools/hair-dryer.png" class="tools" ></button>
//   <button class="comb"><img src="src/image/tools/comb.png" class="tools" ></button>
// </div> -->

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

    const scissorsbtn = document.createElement('img');
    scissorsbtn.setAttribute('src','./src/image/tools/scissors.png');
    scissorsbtn.classList.add('tools');

    const curlingIronbtn = document.createElement('img');
    curlingIronbtn.setAttribute('src','./src/image/tools/curling-iron.png');
    curlingIronbtn.classList.add('tools');

    const hairdryerbtn =document.createElement('img');
    hairdryerbtn.setAttribute('src','./src/image/tools/hair-dryer.png')
    hairdryerbtn.classList.add('tools');

    const straightenerbtn = document.createElement('img');
    straightenerbtn.setAttribute('src','./src/image/tools/straightener.png')
    straightenerbtn.classList.add('tools');

    const combbtn = document.createElement('img');
    combbtn.setAttribute('src','./src/image/tools/comb.png')
    combbtn.classList.add('tools');


    // rightbtns.appendChild(scissorsbtn);


    // const scissors = new Scissors();
    // const curlingIron = new CurlingIron();
    // const hairdryer = new HairDryer();
    // const straightener = new Straightener();
    // const comb =new Comb();

    console.log("this is game page")


}