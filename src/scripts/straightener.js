export default class Straightener{
    constructor(){
        this.straightener_btn = document.querySelector('.straightener')
        this.hair_obj = document.querySelector(".hair-style");
        this.straightener_btn.addEventListener('click',this.handleStraigtener.bind(this))
    }
    
    handleStraigtener=function(e){
        e.preventDefault();
        
        if(this.hair_obj.id === 'initial' || this.hair_obj.id==='long' ||this.hair_obj.id === 'curling-long'){
           this.hair_obj.src="/src/image/hairstyle/straight/straight-long.png";
           this.hair_obj.id ="straight-long";
        }
    }
}