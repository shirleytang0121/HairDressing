export default class HairClipper{
    constructor(){
        this.clipper_btn = Array.from(document.getElementsByClassName("clipper"));
        if (document.querySelector(".hair-style")=== null){
            this.hair_obj= document.querySelector(".man-style");
            this.hair_obj_L=document.querySelector(".man-style-L")
          }else{
             this.hair_obj= document.querySelector(".hair-style");
             this.hair_obj_L=document.querySelector(".hair-style-L")
          }
          
          if(this.clipper_btn.length > 1){
            document.addEventListener('keydown',this.handleKeys.bind(this)) 
            this.clipper_btn[1].addEventListener('click',this.handleClippers.bind(this));
          }else{
            this.clipper_btn[0].addEventListener('click',this.handleClippers.bind(this));
          }
    }

    handleClippers(e){
        e.preventDefault();
        switch(this.hair_obj.id){
            case 'man-short-1':
                this.hair_obj.src = "./src/image/manstyle/short/short-last.png";
                this.hair_obj.id = "man-short-end";
                break;
            case 'man-short-2':
                this.hair_obj.src = "./src/image/manstyle/short/short-last.png";
                this.hair_obj.id = "man-short-end";
                break;
            case 'man-short-3':
                this.hair_obj.src = "./src/image/manstyle/short/short-last.png";
                this.hair_obj.id = "man-short-end";
                break;
                case 'man-short-4':
                    this.hair_obj.src = "./src/image/manstyle/short/short-last.png";
                    this.hair_obj.id = "man-short-end";
                    break;
            case 'man-short-last':
                this.hair_obj.src = "";
                this.hair_obj.id = "man-bald";
                break;
            default:
                alert('No more hair');
        }
    }

}

