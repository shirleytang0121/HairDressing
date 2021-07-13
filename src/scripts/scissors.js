export default class Scissors{
    constructor(){
        this.scissors_btn = document.querySelector(".scissors");
        this.hair_obj = document.querySelector(".hair-style");
        this.scissors_btn.addEventListener('click',this.handleScissors.bind(this));
    }

    handleScissors(e){
        e.preventDefault();
        switch(this.hair_obj.id){
            case 'initial':
                this.hair_obj.src = "/src/image/hairstyle/initial/initial-cut.png";
                this.hair_obj.id ='initial-cut';
                break;
            case 'initial-cut':
                this.hair_obj.src = "/src/image/hairstyle/initial/initial-cut-end.png";
                console.log(this.hair_obj.src);
                this.hair_obj.id = 'initial-cut-2'
                break;
            case 'long':
                this.hair_obj.src = "/src/image/hairstyle/long/long-cut.png";
                this.hair_obj.id ="long-cut"
                break;
            case 'long-cut':
                break;
            case 'curling-long':
                this.hair_obj.src = "/src/image/hairstyle/curling/curling-long-cut.png";
                this.hair_obj.id ="curling-long-cut"
                break;
            
            default:
                alert('can not cut');

        }


        }
    
}