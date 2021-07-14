import renderGamePage from "./gamePage";
import GenerateImg from "../controller/generater";

export default function renderCompetitionPage(){
    renderGamePage();
    const leftdiv = document.querySelector('.left-buttons');
    const imgdiv = document.createElement('div')
    imgdiv.classList.add('imgdiv');
    leftdiv.appendChild(imgdiv);

    const genImg = new GenerateImg();
    
}