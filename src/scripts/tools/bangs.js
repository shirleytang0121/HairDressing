export default class Bangs{
    constructor(){
        this.bangs_btn = document.querySelector(".bangs");
        if (document.querySelector(".hair-style")=== null){
          this.bangs_obj= document.querySelector(".man-style");
        }else{
           this.bangs_obj= document.querySelector(".bang-style");
        }
        this.bangs_btn.addEventListener('click',this.handleBangs.bind(this))
        console.log(this.bangs_btn)
    }

    handleBangs(e){
        e.preventDefault();
        switch(this.bangs_obj.id ){
          case 'initial-bangs':
              this.bangs_obj.src = './src/image/bangs/bangs-2.png';
              this.bangs_obj.id = 'second-bangs';
              break;
          case 'second-bangs':
            this.bangs_obj.src = './src/image/bangs/bangs-3.png';
            this.bangs_obj.id = 'third-bangs';
            break;
          case 'third-bangs':
            this.bangs_obj.src = './src/image/bangs/bangs-1.png';
            this.bangs_obj.id = 'initial-bangs';
            break;
          case 'man-short-1':
            this.bangs_obj.src = './src/image/manstyle/short/short-2.png';
            this.bangs_obj.id="man-short-2";
            break;
          case 'man-short-2':
            this.bangs_obj.src = './src/image/manstyle/short/short-3.png';
            this.bangs_obj.id="man-short-3";
            break;
          case 'man-short-3':
              this.bangs_obj.src = './src/image/manstyle/short/short-2.png';
              this.bangs_obj.id="man-short-2";
              break;
          case 'man-short-4':
              this.bangs_obj.src = './src/image/manstyle/short/short-1.png';
              this.bangs_obj.id="man-short-2";
              break;
          
            

    }
}
}