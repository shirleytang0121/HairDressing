export default class HairDryer{
    constructor(){
        this.dryer_btn = Array.from(document.getElementsByClassName("hair-dryer"));
        if (document.querySelector(".hair-style")=== null){
           this.hair_obj= document.querySelector(".man-style");
           this.hair_obj_L = document.querySelector(".man-style-L");
         }else{
            this.hair_obj= document.querySelector(".hair-style");
            this.hair_obj_L= document.querySelector(".hair-style-L");
         }
         if(this.dryer_btn.length > 1){
            document.addEventListener('keydown',this.handleKeys.bind(this))
            this.dryer_btn[1].addEventListener('click',this.handleDryer.bind(this))
         }else{
            this.dryer_btn[0].addEventListener('click',this.handleDryer.bind(this))
         }
       
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
         }else if(this.hair_obj.id === 'man-long-1'){
            this.hair_obj.src="./src/image/manstyle/long/long-2.png";
            this.hair_obj.id ="man-long-2";
         }else if(this.hair_obj.id === 'man-long-2'){
            this.hair_obj.src="./src/image/manstyle/long/long-1.png";
            this.hair_obj.id ="man-long-1";
         }else if(this.hair_obj.id === 'man-short-1'||this.hair_obj.id === 'man-short-2'||this.hair_obj.id === 'man-short-3'){
            this.hair_obj.src="./src/image/manstyle/short/short-4.png";
            this.hair_obj.id ="man-short-4";
         }else if(this.hair_obj.id === 'man-short-4'){
            this.hair_obj.src="./src/image/manstyle/short/short-1.png";
            this.hair_obj.id ="man-short-1";
         }
        else{
           alert('it is perfect');
        }
    }


    handleKeys(e){
   e.preventDefault();
    if (e.key === '4' ){
      if( this.hair_obj_L.id === 'curling-long'){
          this.hair_obj_L.src="./src/image/hairstyle/long/long.png";
          this.hair_obj_L.id ="long";
       }else if(this.hair_obj_L.id==='straight-long'){
          this.hair_obj_L.src="./src/image/hairstyle/initial/initial.png";
          this.hair_obj_L.id ="initial";
       }else if( this.hair_obj_L.id === 'straight-median'){
          this.hair_obj_L.src="./src/image/hairstyle/straight/straight-median-blow.png";
          this.hair_obj_L.id ="blow";
       }else if(this.hair_obj_L.id === 'curling-median'){
          this.hair_obj_L.src="./src/image/hairstyle/long/median.png";
          this.hair_obj_L.id ="median";
       }else if(this.hair_obj_L.id === 'curling-short'){
          this.hair_obj_L.src="./src/image/hairstyle/long/long-short.png";
          this.hair_obj_L.id ="short";
       }else if (this.hair_obj_L.id === 'long-cut'||this.hair_obj_L.id === 'long-cut-end' ||this.hair_obj_L.id ==='curling-long-cut'||this.hair_obj_L.id ==='curling-long-cut-end'||this.hair_obj_L.id ==='straight-long-cut'||this.hair_obj_L.id ==='straight-long-cut-end'){
             alert('Please comb your hair first')
       }else if(this.hair_obj_L.id === 'man-long-1'){
          this.hair_obj_L.src="./src/image/manstyle/long/long-2.png";
          this.hair_obj_L.id ="man-long-2";
       }else if(this.hair_obj_L.id === 'man-long-2'){
          this.hair_obj_L.src="./src/image/manstyle/long/long-1.png";
          this.hair_obj_L.id ="man-long-1";
       }else if(this.hair_obj_L.id === 'man-short-1'||this.hair_obj_L.id === 'man-short-2'||this.hair_obj_L.id === 'man-short-3'){
          this.hair_obj_L.src="./src/image/manstyle/short/short-4.png";
          this.hair_obj_L.id ="man-short-4";
       }else if(this.hair_obj_L.id === 'man-short-4'){
          this.hair_obj_L.src="./src/image/manstyle/short/short-1.png";
          this.hair_obj_L.id ="man-short-1";
       }
      else{
         alert('it is perfect. No need hair dryer');
      }
   }
  }
}