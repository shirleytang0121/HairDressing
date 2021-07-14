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
        "./src/image/competition-w/straight-2-purple.png",
        ];
        
        console.log(this.randIndex);

        this.imgdiv = document.querySelector('.imgdiv')
        this.imgShow = document.createElement('img')
        this.imgShow.classList.add('gameImg');
        this.imgShow.src = this.imgSrcArr[this.randIndex];
        this.imgdiv.appendChild(this.imgShow);



    }


    handlesubmit(e){
        this.imgShow.src = this.imgSrcArr[0];

    }
}