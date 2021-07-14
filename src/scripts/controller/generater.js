import resetPage from "./reset";
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

            this.leftdiv = document.querySelector('.leftside');
            this.imgdiv = document.querySelector('.imgdiv');
            this.imgShow = document.createElement('img');
            this.imgShow.classList.add('gameImg');
            this.imgShow.src = this.imgSrcArr[this.randIndex];
            this.imgdiv.appendChild(this.imgShow);

            this.submitbtn = document.createElement('button');
            this.submitbtn.classList.add('submit');
            this.submitbtn.innerHTML = 'SUBMIT'
            this.leftdiv.appendChild(this.submitbtn);
            
            this.submitbtn.addEventListener('click', this.handleSubmit.bind(this));
    }


    handleSubmit(e){
        e.preventDefault();
        this.randIndex = Math.floor(Math.random()*20);
        this.imgShow.src = this.imgSrcArr[this.randIndex];
        this.hair_obi = document.querySelector('.hair-style');
        this.bangs_obj = document.querySelector('.bang-style');
        console.log(this.hair_obi);
        console.log(this.bangs_obj);
        resetPage();
    }
}