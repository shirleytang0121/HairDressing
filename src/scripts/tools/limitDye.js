import { hexToCSSFilter } from 'hex-to-css-filter';
export default class LimitDye{
    constructor(){
        console.log('limit dye')
        this.dye_btn = Array.from(document.getElementsByClassName("hair-dye"));
        if (document.querySelector(".hair-style")=== null){
          this.hair_obj= document.querySelector(".man-style");
          this.bangs_obj = this.hair_obj;
          this.hair_obj_L= document.querySelector(".man-style-L");
          this.bangs_obj_L = this.hair_obj_L;
        }else{
           this.hair_obj= document.querySelector(".hair-style");
           this.bangs_obj = document.querySelector(".bang-style");
           this.hair_obj_L= document.querySelector(".hair-style-L");
           this.bangs_obj_L = document.querySelector(".bang-style-L");
        }
        this.colordiv = Array.from(document.getElementsByClassName("colorSelector"));
       for( let i=0; i< this.dye_btn.length;i++){
            this.colordiv[i].style.display = 'none';
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

            this.colordiv[i].appendChild(this.redbtn);
            this.colordiv[i].appendChild(this.bluebtn);
            this.colordiv[i].appendChild(this.greenbtn);
            this.colordiv[i].appendChild(this.yellowbtn);
            this.colordiv[i].appendChild(this.purplebtn);
       }

       if(this.dye_btn.length > 1){
            this.dye_btn[0].addEventListener('click',this.handleShow.bind(this))
            this.dye_btn[1].addEventListener('click',this.handleShow.bind(this))
            this.redbtn.addEventListener('click',this.handleRed.bind(this))
            this.bluebtn.addEventListener('click',this.handleBlue.bind(this))
            this.greenbtn.addEventListener('click',this.handleGreen.bind(this))
            this.yellowbtn.addEventListener('click',this.handleYellow.bind(this));
            this.purplebtn.addEventListener('click',this.handlePurple.bind(this))
       }else{
            this.dye_btn[0].addEventListener('click',this.handleShow.bind(this))
            this.redbtn.addEventListener('click',this.handleRed.bind(this))
            this.bluebtn.addEventListener('click',this.handleBlue.bind(this))
            this.greenbtn.addEventListener('click',this.handleGreen.bind(this))
            this.yellowbtn.addEventListener('click',this.handleYellow.bind(this));
            this.purplebtn.addEventListener('click',this.handlePurple.bind(this))
       }
    }

    handleShow(e){
        e.preventDefault();
        if(this.colordiv.length > 1){
            this.colordiv[1].style.display = 'flex';  
        } else{
            this.colordiv[0].style.display = 'flex';  
        }
    }

    handleRed(e){
        const cssFilter= hexToCSSFilter("#fc1a1a");
        this.hair_obj.style.filter = cssFilter.filter.slice(0,-1);
        this.bangs_obj.style.filter = cssFilter.filter.slice(0,-1);
    }

    handleBlue(e){
        const cssFilter= hexToCSSFilter("#401afc");
        this.hair_obj.style.filter = cssFilter.filter.slice(0,-1);
        this.bangs_obj.style.filter = cssFilter.filter.slice(0,-1);
    }

    handleGreen(e){
        const cssFilter= hexToCSSFilter("#1afc77");
        this.hair_obj.style.filter = cssFilter.filter.slice(0,-1);
        this.bangs_obj.style.filter = cssFilter.filter.slice(0,-1);
    }

    handleYellow(e){
        const cssFilter= hexToCSSFilter("#fcdc1a");
        this.hair_obj.style.filter = cssFilter.filter.slice(0,-1);
        this.bangs_obj.style.filter = cssFilter.filter.slice(0,-1);
    }

    handlePurple(e){
        const cssFilter= hexToCSSFilter("#a516a5");
        this.hair_obj.style.filter = cssFilter.filter.slice(0,-1);
        this.bangs_obj.style.filter = cssFilter.filter.slice(0,-1);
    }

    
}