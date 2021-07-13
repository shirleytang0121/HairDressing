export default class HairDryer{
    constructor(){
        this.dryer_btn = document.querySelector(".hair-dryer");
        this.hair_obj = document.querySelector(".hair-style");
        this.dryer_btn.addEventListener('click',this.handleDryer.bind(this))
    }

    handleDryer(e){
        e.preventDefault();
      
        if( this.hair_obj.id === 'curling-long'){
            this.hair_obj.src="/src/image/hairstyle/long/long.png";
            this.hair_obj.id ="long";
         }else if(this.hair_obj.id==='straight-long'){
            this.hair_obj.src="/src/image/hairstyle/initial/initial.png";
            this.hair_obj.id ="initial";
         }else if( this.hair_obj.id === 'straight-median'){
            this.hair_obj.src="/src/image/hairstyle/straight/straight-median-blow.png";
            this.hair_obj.id ="blow";
         }else if(this.hair_obj.id === 'curling-median'){
            this.hair_obj.src="/src/image/hairstyle/long/median.png";
            this.hair_obj.id ="median";
         }else if(this.hair_obj.id === 'curling-short'){
            this.hair_obj.src="/src/image/hairstyle/long/long-short.png";
            this.hair_obj.id ="short";
         }
        
        
      
    }
}