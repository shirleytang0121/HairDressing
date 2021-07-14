import renderGamePage from "./gamePage";
import GenerateImg from "../controller/generater";
import LimitDye from "../tools/limitDye";
import Clock from "../controller/clock";

export default function renderCompetitionPage(){
    renderGamePage();

    const maindiv = document.querySelector('.main-page')
    const leftside = document.querySelector('.leftside');
    const leftdiv = document.querySelector('.left-buttons');
    leftdiv.remove();
    
    const messagediv = document.createElement('div');
    messagediv.classList.add('message');
    const startbtn = document.createElement('button');
    startbtn.classList.add('start');
    startbtn.innerHTML = 'START'
    maindiv.appendChild(messagediv);
    messagediv.appendChild(startbtn);

    const timediv = document.createElement('div');
    timediv.classList.add('timediv');
    maindiv.appendChild(timediv);

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
    const clock = new Clock();
}