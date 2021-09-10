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
            this.redbtn.classList.add('redbtn');
            this.redbtn.style.backgroundColor = 'red';
            this.redbtn.innerHTML='R';
            this.bluebtn = document.createElement('button');
            this.bluebtn.classList.add('bluebtn');
            this.bluebtn.style.backgroundColor = 'blue';
            this.bluebtn.innerHTML = 'B'
            this.greenbtn = document.createElement('button');
            this.greenbtn.classList.add('greenbtn');
            this.greenbtn.style.backgroundColor = 'green';
            this.greenbtn.innerHTML = 'G'
            this.yellowbtn = document.createElement('button');
            this.yellowbtn.classList.add('yellowbtn');
            this.yellowbtn.style.backgroundColor = 'yellow';
            this.yellowbtn.innerHTML = 'Y'
            this.purplebtn = document.createElement('button');
            this.purplebtn.classList.add('purplebtn');
            this.purplebtn.style.backgroundColor = 'purple';
            this.purplebtn.innerHTML = 'P'

            this.colordiv[i].appendChild(this.redbtn);
            this.colordiv[i].appendChild(this.bluebtn);
            this.colordiv[i].appendChild(this.greenbtn);
            this.colordiv[i].appendChild(this.yellowbtn);
            this.colordiv[i].appendChild(this.purplebtn);
       }

       this.redbtn = Array.from(document.getElementsByClassName('redbtn'));
       this.bluebtn = Array.from(document.getElementsByClassName('bluebtn'));
       this.greenbtn = Array.from(document.getElementsByClassName('greenbtn'));
       this.yellowbtn = Array.from(document.getElementsByClassName('yellowbtn'));
       this.purplebtn = Array.from(document.getElementsByClassName('purplebtn'));


       if(this.dye_btn.length > 1){
            document.addEventListener('keydown',this.handleShowPress.bind(this))
            this.dye_btn[1].addEventListener('click',this.handleShow.bind(this))
            document.addEventListener('keydown',this.handleRedPress.bind(this))
            this.redbtn[1].addEventListener('click',this.handleRed.bind(this))
            document.addEventListener('keydown',this.handleBluePress.bind(this))
            this.bluebtn[1].addEventListener('click',this.handleBlue.bind(this))
            document.addEventListener('keydown',this.handleGreenPress.bind(this))
            this.greenbtn[1].addEventListener('click',this.handleGreen.bind(this))
            document.addEventListener('keydown',this.handleYellowPress.bind(this));
            this.yellowbtn[1].addEventListener('click',this.handleYellow.bind(this));
            document.addEventListener('keydown',this.handlePurplePress.bind(this))
            this.purplebtn[1].addEventListener('click',this.handlePurple.bind(this))
       }else{
            this.dye_btn[0].addEventListener('click',this.handleShow.bind(this))
            this.redbtn[0].addEventListener('click',this.handleRed.bind(this))
            this.bluebtn[0].addEventListener('click',this.handleBlue.bind(this))
            this.greenbtn[0].addEventListener('click',this.handleGreen.bind(this))
            this.yellowbtn[0].addEventListener('click',this.handleYellow.bind(this));
            this.purplebtn[0].addEventListener('click',this.handlePurple.bind(this))
       }
    }

    handleShow(e){
        e.preventDefault();
        if(this.colordiv.length > 1){
            if(this.colordiv[1].style.display === 'none'){
                this.colordiv[1].style.display = 'flex'; 
            }else{
                this.colordiv[1].style.display = 'none'; 
            } 
        } else{
            if(this.colordiv[0].style.display === 'none'){
                this.colordiv[0].style.display = 'flex'; 
            }else{
                this.colordiv[0].style.display = 'none'; 
            } 
        }
    }

    handleShowPress(e){
        if((e.key === '7' && document.querySelector(".hair-style")!== null) || (e.key === '5' && document.querySelector(".hair-style")=== null)){
            if(this.colordiv[0].style.display === 'none'){
                this.colordiv[0].style.display = 'flex';
            }else{
                this.colordiv[0].style.display = 'none';
            }  
        }
        
    }



    handleRed(e){
        const cssFilter= hexToCSSFilter("#fc1a1a");
        this.hair_obj.style.filter = cssFilter.filter.slice(0,-1);
        this.bangs_obj.style.filter = cssFilter.filter.slice(0,-1);
    }

    handleRedPress(e){
        if(e.key === 'r'){
            const cssFilter= hexToCSSFilter("#fc1a1a");
            this.hair_obj_L.style.filter = cssFilter.filter.slice(0,-1);
            this.bangs_obj_L.style.filter = cssFilter.filter.slice(0,-1);
        }
    }

    handleBlue(e){
        const cssFilter= hexToCSSFilter("#401afc");
        this.hair_obj.style.filter = cssFilter.filter.slice(0,-1);
        this.bangs_obj.style.filter = cssFilter.filter.slice(0,-1);
    }
    handleBluePress(e){
        if(e.key === 'b'){
        const cssFilter= hexToCSSFilter("#401afc");
        this.hair_obj_L.style.filter = cssFilter.filter.slice(0,-1);
        this.bangs_obj_L.style.filter = cssFilter.filter.slice(0,-1);
        }
    }

    handleGreen(e){
        const cssFilter= hexToCSSFilter("#1afc77");
        this.hair_obj.style.filter = cssFilter.filter.slice(0,-1);
        this.bangs_obj.style.filter = cssFilter.filter.slice(0,-1);
    }
    handleGreenPress(e){
        if(e.key === 'g'){
        const cssFilter= hexToCSSFilter("#1afc77");
        this.hair_obj_L.style.filter = cssFilter.filter.slice(0,-1);
        this.bangs_obj_L.style.filter = cssFilter.filter.slice(0,-1);
        }
    }

    handleYellow(e){
        const cssFilter= hexToCSSFilter("#fcdc1a");
        this.hair_obj.style.filter = cssFilter.filter.slice(0,-1);
        this.bangs_obj.style.filter = cssFilter.filter.slice(0,-1);
    }
    handleYellowPress(e){
        if(e.key === 'y'){
        const cssFilter= hexToCSSFilter("#fcdc1a");
        this.hair_obj_L.style.filter = cssFilter.filter.slice(0,-1);
        this.bangs_obj_L.style.filter = cssFilter.filter.slice(0,-1);
        }
    }

    handlePurple(e){
        const cssFilter= hexToCSSFilter("#a516a5");
        this.hair_obj.style.filter = cssFilter.filter.slice(0,-1);
        this.bangs_obj.style.filter = cssFilter.filter.slice(0,-1);
    }

    handlePurplePress(e){
        if(e.key === 'p'){
        const cssFilter= hexToCSSFilter("#a516a5");
        this.hair_obj_L.style.filter = cssFilter.filter.slice(0,-1);
        this.bangs_obj_L.style.filter = cssFilter.filter.slice(0,-1);
        }
    }

    
}