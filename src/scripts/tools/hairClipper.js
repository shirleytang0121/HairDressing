export default class HairClipper{
    constructor(){
        this.clipper_btn = document.querySelector(".clipper");
        this.hair_obj= document.querySelector(".man-style");
        this.clipper_btn.addEventListener('click',this.handleClippers.bind(this));
    }

    handleClippers(e){
        e.preventDefault();
        switch(this.hair_obj.id){
            case 'man-short-1':
                this.hair_obj.src = "./src/image/manstyle/short/short-last.png";
                this.hair_obj.id = "man-short-last";
                break;
            case 'man-short-2':
                this.hair_obj.src = "./src/image/manstyle/short/short-last.png";
                this.hair_obj.id = "man-short-last";
                break;
            case 'man-short-3':
                this.hair_obj.src = "./src/image/manstyle/short/short-last.png";
                this.hair_obj.id = "man-short-last";
                break;
            default:
                alert('No more hair');
        }
    }

}

