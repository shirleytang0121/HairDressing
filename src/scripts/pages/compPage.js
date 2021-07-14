import renderGamePage from "./gamePage";
import GenerateImg from "../controller/generater";
import LimitDye from "../tools/limitDye";

export default function renderCompetitionPage(){
    renderGamePage();

    const leftside = document.querySelector('.leftside');
    const leftdiv = document.querySelector('.left-buttons');
    leftdiv.remove();
    const imgdiv = document.createElement('div')
    imgdiv.classList.add('imgdiv');
    leftside.appendChild(imgdiv);

    const rightdiv = document.querySelector('.right-buttons');
    const hairdye = document.querySelector('.wheel');
    hairdye.remove();

    const colorSelector = document.createElement('div');
    colorSelector.classList.add('colorSelector');
    rightdiv.appendChild(colorSelector);


    const genImg = new GenerateImg();
    const limitDye = new LimitDye();
}