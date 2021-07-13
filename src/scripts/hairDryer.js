export default class HairDryer{
    constructor(){
        this.dryer_btn = document.querySelector(".hair-dryer");
        this.hair_obj = document.querySelector(".hair-style");
        this.dryer_btn.addEventListener('click',this.handleDryer.bind(this))
    }

    handleDryer(e){
        e.preventDefault();
        switch(this.hair_obj.id ){
        case 'curling-long':
            this.hair_obj.src="/src/image/hairstyle/long/long.png";
            this.hair_obj.id ="long";
            break;
        case 'straight-long':
            this.hair_obj.src="/src/image/hairstyle/initial/initial.png";
            this.hair_obj.id ="initial";
            break;
        default:
            alert("it's perfect");
        
        }
    }
}