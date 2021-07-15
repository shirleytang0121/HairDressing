export default class Straightener{
    constructor(){
        this.straightener_btn = Array.from(document.getElementsByClassName('straightener'));
        this.hair_obj = document.querySelector(".hair-style");
        this.hair_obj_L = document.querySelector(".hair-style-L");

        if(this.straightener_btn.length > 1){
            document.addEventListener('keydown',this.handleKeys.bind(this))
            this.straightener_btn[1].addEventListener('click',this.handleStraigtener.bind(this))
        }else{
            this.straightener_btn[0].addEventListener('click',this.handleStraigtener.bind(this))
        }
    }

    handleKeys(e){
        e.preventDefault();
        if(e.key === '3'){
            if(this.hair_obj_L.id === 'initial' || this.hair_obj_L.id==='long' ||this.hair_obj_L.id === 'curling-long'){
            this.hair_obj_L.src="./src/image/hairstyle/straight/straight-long.png";
            this.hair_obj_L.id ="straight-long";
            }else if(this.hair_obj_L.id === 'curling-median' || this.hair_obj_L.id==='median' || this.hair_obj_L.id==='blow'){
                this.hair_obj_L.src="./src/image/hairstyle/straight/straight-median.png";
            this.hair_obj_L.id ="straight-median";
            }else if(this.hair_obj_L.id === 'curling-short' || this.hair_obj_L.id === 'short'){
                this.hair_obj_L.src="./src/image/hairstyle/straight/straight-short.png";
                this.hair_obj_L.id ="straight-short";
            }else if (this.hair_obj_L.id === 'long-cut'||this.hair_obj_L.id === 'long-cut-end' ||this.hair_obj_L.id ==='curling-long-cut'||this.hair_obj.id ==='curling-long-cut-end'||this.hair_obj.id ==='straight-long-cut'||this.hair_obj.id ==='straight-long-cut-end'){
                alert('Please comb your hair first')
            }else{
                alert('it is perfect');
            }
        }
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
                alert('it is perfect. No need straightener');
            }
       
    }
}