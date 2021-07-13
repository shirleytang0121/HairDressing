import renderGamePage from "./gamePage"

export default function renderIntroPage(){
    const mainPage = document.querySelector(".main-page");
    const startbtn = document.createElement('button');
    startbtn.addEventListener('click',renderGamePage);

}