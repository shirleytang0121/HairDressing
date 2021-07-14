import resetPage from "./reset";
import checkIfSame from "./check";

export default class GenerateImg{
    
    constructor(){
        this.randIndex = Math.floor(Math.random()*20);
        this.imgSrcArr = [
            "./src/image/competition-w/curling-long-1.png",
            "./src/image/competition-w/curling-long-1-red.png",
            "./src/image/competition-w/curling-long-2.png",
            "./src/image/competition-w/curling-long-2-green.png",
            "./src/image/competition-w/curling-median-1.png",
            "./src/image/competition-w/curling-median-1-blue.png",
            "./src/image/competition-w/curling-median-2.png",
            "./src/image/competition-w/curling-median-2-yellow.png",
            "./src/image/competition-w/long-1.png",
            "./src/image/competition-w/long-1-purple.png",
            "./src/image/competition-w/long-2.png",
            "./src/image/competition-w/long-2-red.png",
            "./src/image/competition-w/median-1.png",
            "./src/image/competition-w/median-1-blue.png",
            "./src/image/competition-w/median-2.png",
            "./src/image/competition-w/median-2-green.png",
            "./src/image/competition-w/straight-1.png",
            "./src/image/competition-w/straight-1-yellow.png",
            "./src/image/competition-w/straight-2.png",
            "./src/image/competition-w/straight-2-purple.png"
            ];

            this.leftside = document.querySelector('.leftside');
            this.imgdiv = document.querySelector('.imgdiv');
            this.imgShow = document.createElement('img');
            this.imgShow.classList.add('gameImg');
            this.imgShow.style.display = 'none';
            this.imgShow.src = this.imgSrcArr[this.randIndex];
            this.imgdiv.appendChild(this.imgShow);

            this.submitbtn = document.querySelector('.submit');
            
            
            this.submitbtn.addEventListener('click', this.handleSubmit.bind(this));
    }


    handleSubmit(e){
        e.preventDefault();
        // this.randIndex = Math.floor(Math.random()*20);
        this.randIndex = 1;
        this.imgShow.src = this.imgSrcArr[this.randIndex];
        this.hair_obj = document.querySelector('.hair-style');
        this.bangs_obj = document.querySelector('.bang-style');
        // console.log(this.hair_obj);
        // console.log(this.bangs_obj);
        // console.log(this.hair_obj.style.filter);
        this.userDesign = {
            hair_style: this.hair_obj.id,
            bangs_style: this.bangs_obj.id,
            color: this.hair_obj.style.filter
        }
        checkIfSame(this.userDesign,this.randIndex);
        resetPage();
    }
}