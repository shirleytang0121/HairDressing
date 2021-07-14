export default function finishPage(){
    const mainCharacter = document.querySelector('.main-character');
    mainCharacter.remove();
  
    const leftbtns = document.querySelector('.left-buttons');
    leftbtns.remove();

    const rightbtns = document.querySelector('.right-buttons');
    rightbtns.remove()

    const mirror = document.querySelector('.mirror');
    mirror.style.marginLeft = '-200px';

   
    
    
}