
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
        case 'curling-long-cut':
            this.hair_obj.src="/src/image/hairstyle/curling/curling-median.png";
            this.hair_obj.id ="curling-median";
            break;
        case 'straight-long-cut':
            this.hair_obj.src="/src/image/hairstyle/straight/straight-median.png";
            this.hair_obj.id ="straight-median";
            break;
        case 'straight-long-cut-end':
            this.hair_obj.src="/src/image/hairstyle/straight/straight-short.png";
            this.hair_obj.id ="straight-short";
            break;
        case 'curling-long-cut-end':
            this.hair_obj.src="/src/image/hairstyle/curling/curling-short.png";
            this.hair_obj.id ="curling-short";
            break;
        case 'long-cut-end':
            this.hair_obj.src="/src/image/hairstyle/long/long-short.png";
            this.hair_obj.id ="short";
            break;
        default:
            alert("it's perfect");
        
        }
   }
}