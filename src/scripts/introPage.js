import renderGamePage from "./gamePage"

export default function renderIntroPage(){
    const gender = '';
    const mode='';
    const mainPage = document.querySelector(".main-page");
    const salon = document.createElement('img');
    salon.setAttribute('src','./src/image/hair-salon.png');
    salon.classList.add('salon');
   

    const startbtnF = document.createElement('button');
    startbtnF.innerHTML='SHE'
    startbtnF.classList.add('genderbtn')
    startbtnF.addEventListener('click',renderGamePage);

    const startbtnM = document.createElement('button');
    startbtnM.innerHTML='HE'
    startbtnM.classList.add('genderbtn')
    startbtnM.addEventListener('click',renderGamePage);

    const leftdiv = document.createElement('div');
    leftdiv.classList.add('leftdiv');
    const rightdiv = document.createElement('div');
    rightdiv.classList.add('rightdiv');
    mainPage.appendChild(leftdiv);
    mainPage.appendChild(salon);
    mainPage.appendChild(rightdiv);

    leftdiv.appendChild(startbtnM);
    rightdiv.appendChild(startbtnF);
    


}
