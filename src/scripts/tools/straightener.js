export default class Straightener{
    constructor(){
        this.straightener_btn = Array.from(document.getElementsByClassName('straightener'));
        this.hair_obj = document.querySelector(".hair-style");
        if(this.straightener_btn.length > 1){
            this.straightener_btn[0].addEventListener('keypress',this.handleKeys.bind(this))
            this.straightener_btn[1].addEventListener('click',this.handleStraigtener.bind(this))
        }else{
            this.straightener_btn[0].addEventListener('click',this.handleStraigtener.bind(this))
        }
    }

    handleKeys(e){
        console.log(e);
        console.log('hi');
    }
    
    handleStraigtener=function(e){
        e.preventDefault();
        
        if(this.hair_obj.id === 'initial' || this.hair_obj.id==='long' ||this.hair_obj.id === 'curling-long'){
           this.hair_obj.src="./src/image/hairstyle/straight/straight-long.png";
           this.hair_obj.id ="straight-long";
        }else if(this.hair_obj.id === 'curling-median' || this.hair_obj.id==='median' || this.hair_obj.id==='blow'){
            this.hair_obj.src="./src/image/hairstyle/straight/straight-median.png";
           this.hair_obj.id ="straight-median";
        }else if(this.hair_obj.id === 'curling-short' || this.hair_obj.id === 'short'){
            this.hair_obj.src="./src/image/hairstyle/straight/straight-short.png";
            this.hair_obj.id ="straight-short";
        }else if (this.hair_obj.id === 'long-cut'||this.hair_obj.id === 'long-cut-end' ||this.hair_obj.id ==='curling-long-cut'||this.hair_obj.id ==='curling-long-cut-end'||this.hair_obj.id ==='straight-long-cut'||this.hair_obj.id ==='straight-long-cut-end'){
            alert('Please comb your hair first')
        }else{
            alert('it is perfect');
        }
    }
}