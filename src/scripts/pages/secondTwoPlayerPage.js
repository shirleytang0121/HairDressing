import Character from '../character.js'

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

}