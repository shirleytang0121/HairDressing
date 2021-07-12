export default class HairDryer{
    constructor(){
        this.dryer_btn = document.querySelector(".hair-dryer");
        this.hair_obj = document.querySelector(".hair-style");
        this.dryer_btn.addEventListener('click',this.handleDryer.bind(this))
    }

    handleDryer(e){
        e.preventDefault();
        switch(this.hair_obj.id ){
        case 'initial-hair':
            this.hair_obj.src="/src/image/hairstyle/long/long.png";
            this.hair_obj.id ="long";
            break;
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
        default:
            alert("it's perfect");
        
        }
    }
}