export default function twouserFinish(){
    const score1 = document.getElementById('left-submit');
    const score2 = document.getElementById('right-submit');

    const mainCharacter = Array.from(document.getElementsByClassName('main-character'));
    for (let i =0; i<mainCharacter.length;i++){
        mainCharacter[i].style.display="none";
    }

    const rightbtns = document.querySelector('.right-buttons');
    rightbtns.remove()

    const leftbtns = document.querySelector('.left-buttons');
    leftbtns.remove();

    const middiv =document.querySelector('.middiv');
    middiv.remove();

    
}