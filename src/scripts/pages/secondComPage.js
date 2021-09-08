import renderNewGamePage from "./secondPage";
import LimitDye from "../tools/limitDye";
import Clock from "../controller/clock";
import resetSecondPage from "../controller/secondReset";
import SecondGenerateImg from "../controller/secondGen";

export default function renderSecondCompPage(){
    renderNewGamePage();

    const maindiv = document.querySelector('.main-page')
    const leftside = document.querySelector('.leftside');
    const leftdiv = document.querySelector('.left-buttons');
    leftdiv.remove();
    
    const messagediv = document.createElement('div');
    messagediv.classList.add('message');
    const startbtn = document.createElement('button');
    startbtn.classList.add('start');
    startbtn.innerHTML = 'START'
    startbtn.style.display = 'none';
    maindiv.appendChild(messagediv);
    messagediv.appendChild(startbtn);

    const timediv = document.createElement('div');
    timediv.classList.add('timediv');
    maindiv.appendChild(timediv);

    const imgdiv = document.createElement('div')
    imgdiv.classList.add('imgdiv');
    leftside.appendChild(imgdiv);

    const submitbtn = document.createElement('button');
    submitbtn.classList.add('submit');
    submitbtn.innerHTML = 'SUBMIT';
    leftside.appendChild(submitbtn);

    const resetbtn = document.createElement('button');
    resetbtn.classList.add('reset');
    resetbtn.style.marginTop = '10px';
    resetbtn.innerHTML = 'RESET';
    leftside.appendChild(resetbtn);

    const backbtn = document.createElement("button");
    backbtn.classList.add('back');
    backbtn.style.marginTop='17px';
    backbtn.innerHTML = 'BACK'
    leftside.appendChild(backbtn);

    resetbtn.addEventListener('click',resetSecondPage);
    backbtn.addEventListener('click',()=>{
        history.go(0)
    })
    
    const rightdiv = document.querySelector('.right-buttons');
    const hairdye = document.querySelector('.wheel');
    hairdye.remove();

    const colorSelector = document.createElement('div');
    colorSelector.classList.add('colorSelector');
    rightdiv.appendChild(colorSelector);

    const gameImg = new SecondGenerateImg();
    const limitDye = new LimitDye();
    const clock = new Clock(30);

    
    const introp = document.querySelector(".introp");
    introp.innerHTML = 'Welcome to competition mode. In this mode, you need to create hair style according to the image show on the left with in 30 secs.'
    const readybtn = document.querySelector('.readybtn')
   
    readybtn.addEventListener('click',()=>{
        startbtn.style.display = 'block';
    })

}