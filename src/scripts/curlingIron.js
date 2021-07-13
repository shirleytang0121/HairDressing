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
        }else if(this.hair_obj.id === 'median'||this.hair_obj.id === 'straight-median'||this.hair_obj.id === 'blow'){
            this.hair_obj.src="/src/image/hairstyle/curling/curling-median.png";
           this.hair_obj.id ="curling-median";
        }else if(this.hair_obj.id === 'short' || this.hair_obj.id === 'straight-short'){
            this.hair_obj.src="/src/image/hairstyle/curling/curling-short.png";
           this.hair_obj.id ="curling-short";
        }else if (this.hair_obj.id === 'long-cut'||this.hair_obj.id === 'long-cut-end' ||this.hair_obj.id ==='curling-long-cut'||this.hair_obj.id ==='curling-long-cut-end'||this.hair_obj.id ==='straight-long-cut'||this.hair_obj.id ==='straight-long-cut-end'){
            alert('Please comb your hair first')
        }else{
            alert('it is perfect')
        }
    }
}