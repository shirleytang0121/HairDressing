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
    startbtnF.addEventListener('click',renderGamePage('F'));

    const startbtnM = document.createElement('button');
    startbtnM.innerHTML='HE'
    startbtnM.classList.add('genderbtn')
    startbtnM.addEventListener('click',renderGamePage('M'));

    const leftdiv = document.createElement('div')
    const rightdiv = document.createElement('div')
    mainPage.appendChild(leftdiv);
    mainPage.appendChild(salon);
    mainPage.appendChild(rightdiv);

    leftdiv.appendChild(startbtnM);
    rightdiv.appendChild(startbtnF);
    


}
