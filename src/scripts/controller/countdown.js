export default class Countdown{
    constructor(){
        this.counter = 5
        this.gameImg = document.querySelector('.gameImgForTwo');
        this.countdowndiv = document.querySelector('.countdowndiv');
        this.readybtn = document.querySelector('.readybtn');
        this.printTime()
        this.readybtn.addEventListener('click', this.handleStart.bind(this));
    }

    printTime(){
        if(Array.from(this.countdowndiv.children).length > 0){
            this.countdowndiv.removeChild(this.countdowndiv.firstChild);
        }
        const ptag = document.createElement('p');
        ptag.classList.add('countdown');
        ptag.innerHTML = this.counter;
        this.countdowndiv.appendChild(ptag);
    }

    _tick(){
        this.counter--;
        if (this.counter >= 0) {
            this.printTime();
         }
         if (this.counter === 0) {
            clearInterval(this.counter);
            this.countdowndiv.style.display = 'none';
            this.gameImg.style.display = 'block';
         }   
    }


    handleStart(){
        this.countdowndiv.style.display = 'block';
        setInterval(this._tick.bind(this),1000);
    }
}