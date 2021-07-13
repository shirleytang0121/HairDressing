import renderGamePage from "./gamePage"

export default function renderIntroPage(){
    const gender = '';
    const mode='';
    const mainPage = document.querySelector(".main-page");
    const salon = document.createElement('img');
    salon.setAttribute('src','./src/image/hair-salon.png');
    salon.classList.add('salon');
    mainPage.appendChild(salon);
    const startbtnF = document.createElement('button');
    startbtnF.innerHTML='SHE'
    startbtnF.addEventListener('click',renderGamePage);
    const startbtnM = document.createElement('button');
    startbtnM.innerHTML='HE'
    startbtnM.addEventListener('click',renderGamePage);
    mainPage.appendChild(startbtnF);
    mainPage.appendChild(startbtnM);
    


}
