export default class Clock{
    constructor(){
        this.counter = 30;
        this.timediv = document.querySelector('.timediv');
        this.startbtn = document.querySelector('.start')
        this.printTime()
        this.startbtn.addEventListener('click', () =>{
            this.startbtn.style.display = 'none';
            setInterval(this._tick.bind(this),1000)}
            )
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
            clearInterval(counter);
            alert('sorry, out of time');
         }   
    }
}