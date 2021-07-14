export default class HairDryer{
    constructor(){
        this.dryer_btn = document.querySelector(".hair-dryer");
        if (document.querySelector(".hair-style")=== null){
           this.hair_obj= document.querySelector(".man-style");
         }else{
            this.hair_obj= document.querySelector(".hair-style");
         }
        this.dryer_btn.addEventListener('click',this.handleDryer.bind(this))
        console.log(this.hair_obj);
    }

    handleDryer(e){
        e.preventDefault();
      
        if( this.hair_obj.id === 'curling-long'){
            this.hair_obj.src="./src/image/hairstyle/long/long.png";
            this.hair_obj.id ="long";
         }else if(this.hair_obj.id==='straight-long'){
            this.hair_obj.src="./src/image/hairstyle/initial/initial.png";
            this.hair_obj.id ="initial";
         }else if( this.hair_obj.id === 'straight-median'){
            this.hair_obj.src="./src/image/hairstyle/straight/straight-median-blow.png";
            this.hair_obj.id ="blow";
         }else if(this.hair_obj.id === 'curling-median'){
            this.hair_obj.src="./src/image/hairstyle/long/median.png";
            this.hair_obj.id ="median";
         }else if(this.hair_obj.id === 'curling-short'){
            this.hair_obj.src="./src/image/hairstyle/long/long-short.png";
            this.hair_obj.id ="short";
         }else if (this.hair_obj.id === 'long-cut'||this.hair_obj.id === 'long-cut-end' ||this.hair_obj.id ==='curling-long-cut'||this.hair_obj.id ==='curling-long-cut-end'||this.hair_obj.id ==='straight-long-cut'||this.hair_obj.id ==='straight-long-cut-end'){
            alert('Please comb your hair first')
        }else if(this.hair_obj.id === 'man-long-1' || this.hair_obj.id === 'man-long-3'){
         this.hair_obj.src="./src/image/manstyle/long/long-2.png";
         this.hair_obj.id ="man-long-2";
        }
        else{
           alert('it is perfect');
        }
        
        
      
    }
}