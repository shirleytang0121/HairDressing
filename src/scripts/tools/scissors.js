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
                this.hair_obj.src = "/src/image/hairstyle/straight/straight-long-cut.png";
                this.hair_obj.id ="straight-long-cut";
                break;
            case 'long':
                this.hair_obj.src = "/src/image/hairstyle/long/long-cut.png";
                this.hair_obj.id ="long-cut"
                break;
            case 'long-cut':
                this.hair_obj.src = "/src/image/hairstyle/long/long-cut-end.png";
                this.hair_obj.id ="long-cut-end"
                break;
            case 'median':
                this.hair_obj.src = "/src/image/hairstyle/long/long-cut-end.png";
                this.hair_obj.id ="long-cut-end"
                break;
            case 'curling-long':
                this.hair_obj.src = "/src/image/hairstyle/curling/curling-long-cut.png";
                this.hair_obj.id ="curling-long-cut"
                break;
            case 'curling-long-cut':
                this.hair_obj.src = "/src/image/hairstyle/curling/curling-long-cut-end.png";
                this.hair_obj.id ="curling-long-cut-end"
                break;
            case 'curling-median':
                this.hair_obj.src = "/src/image/hairstyle/curling/curling-long-cut-end.png";
                this.hair_obj.id ="curling-long-cut-end"
                break;
            case 'straight-long':
                this.hair_obj.src = "/src/image/hairstyle/straight/straight-long-cut.png";
                this.hair_obj.id ="straight-long-cut"
                break;
            case 'straight-long-cut':
                this.hair_obj.src = "/src/image/hairstyle/straight/straight-long-cut-end.png";
                this.hair_obj.id ="straight-long-cut-end"
                break;
            case 'straight-median':
                this.hair_obj.src = "/src/image/hairstyle/straight/straight-long-cut-end.png";
                this.hair_obj.id ="straight-long-cut-end"
                break;
            default:
                alert('can not cut');

        }


        }
    
}