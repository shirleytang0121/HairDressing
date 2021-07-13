
export default class Comb{
   constructor(){
       this.comb_btn = document.querySelector(".comb");
       this.hair_obj = document.querySelector(".hair-style");
       this.comb_btn.addEventListener('click',this.handleComb.bind(this))
   }

   handleComb(e){
    e.preventDefault();
    switch(this.hair_obj.id ){
        case 'long-cut':
            this.hair_obj.src="/src/image/hairstyle/long/median.png";
            this.hair_obj.id ="median";
            break;
        case 'initial-cut':
            this.hair_obj.src="/src/image/hairstyle/long/median.png";
            this.hair_obj.id ="median";
            break;
        case 'curling-long-cut':
            this.hair_obj.src="/src/image/hairstyle/curling/curling-median.png";
            this.hair_obj.id ="curling-median";
            break;
        case 'straight-long-cut':
            this.hair_obj.src="/src/image/hairstyle/straight/straight-median.png";
            this.hair_obj.id ="straight-median";
            break;
        default:
            alert("it's perfect");
        
        }
   }
}