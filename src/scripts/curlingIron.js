export default class CurlingIron{
    constructor(){
        this.curling_btn = document.querySelector(".curling-iron");
        this.hair_obj = document.querySelector(".hair-style");
        this.curling_btn.addEventListener('click',this.handleCurlingIron.bind(this))
    }


    handleCurlingIron=function(e){
        e.preventDefault();
        
        if(this.hair_obj.id === 'initial' || this.hair_obj.id==='long' ||this.hair_obj.id ==='straight-long'){
           this.hair_obj.src="/src/image/hairstyle/curling/curling-long.png";
           this.hair_obj.id ="curling-long";
        }
    }
}