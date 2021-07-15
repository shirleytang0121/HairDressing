import timeoutPage from "./timeout";
export default class Clock{
    constructor( time ){
        this.counter =time ;
        this.gameImg = document.querySelector('.gameImg');
        this.timediv = document.querySelector('.timediv');
        this.startbtn = document.querySelector('.start');
        this.printTime()
        this.startbtn.addEventListener('click', this.handleStart.bind(this));
    }

    printTime(){
        if(Array.from(this.timediv.children).length > 0){
            this.timediv.removeChild(this.timediv.firstChild);
        }
        const ptag = document.createElement('p');
        ptag.classList.add('time');
        ptag.innerHTML = this.counter;
        this.timediv.appendChild(ptag);
    }

    _tick(){
        this.counter--;
        if (this.counter >= 0) {
            this.printTime();
         }
         if (this.counter === 0) {
            clearInterval(this.counter);
            timeoutPage();
         }   
    }


    handleStart(){
        this.gameImg.style.display = 'block';
        this.startbtn.style.display = 'none';
        setInterval(this._tick.bind(this),1000);
    }
}