export default class Bangs{
    constructor(){
        this.bangs_btn = document.querySelector(".bangs");
        this.bangs_obj = document.querySelector(".bang-style");
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

    }
}
}