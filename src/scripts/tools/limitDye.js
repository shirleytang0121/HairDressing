export default class LimitDye{
    constructor(){
        console.log('limit dye')
        this.dye_btn = document.querySelector(".hair-dye");
        if (document.querySelector(".hair-style")=== null){
          this.hair_obj= document.querySelector(".man-style");
          this.bangs_obj = this.hair_obj;
        }else{
           this.hair_obj= document.querySelector(".hair-style");
           this.bangs_obj = document.querySelector(".bang-style");
        }
        this.colordiv = document.querySelector(".colorSelector");
        this.colordiv.style.display = 'none';
        
        this.redbtn = document.createElement('button');
        this.redbtn.classList.add('colorbtn');
        this.redbtn.style.backgroundColor = 'red';
        this.bluebtn = document.createElement('button');
        this.bluebtn.classList.add('colorbtn');
        this.bluebtn.style.backgroundColor = 'blue';
        this.greenbtn = document.createElement('button');
        this.greenbtn.classList.add('colorbtn');
        this.greenbtn.style.backgroundColor = 'green';
        this.yellowbtn = document.createElement('button');
        this.yellowbtn.classList.add('colorbtn');
        this.yellowbtn.style.backgroundColor = 'yellow';
        this.purplebtn = document.createElement('button');
        this.purplebtn.classList.add('colorbtn');
        this.purplebtn.style.backgroundColor = 'purple';

        this.colordiv.appendChild(this.redbtn);
        this.colordiv.appendChild(this.bluebtn);
        this.colordiv.appendChild(this.greenbtn);
        this.colordiv.appendChild(this.yellowbtn);
        this.colordiv.appendChild(this.purplebtn);

        this.dye_btn.addEventListener('click',this.handleShow.bind(this))
      
    }

    handleShow(e){
        e.preventDefault();
        this.colordiv.style.display = 'flex';
       
    }
}