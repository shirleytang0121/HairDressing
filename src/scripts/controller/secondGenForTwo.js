import { hexToCSSFilter } from 'hex-to-css-filter';
import isCorrectForTwo from './correctForTwo';
import resetPage from './secondReset';

export default class SecondGenForTwo{
    constructor(){
        this.randIndex = Math.floor(Math.random()*16);
        this.imgSrcArr = [
            "./src/image/competition-m/initial.png",
            "./src/image/competition-m/initial-red.png",
            "./src/image/competition-m/long-1.png",
            "./src/image/competition-m/long-1-blue.png",
            "./src/image/competition-m/long-2.png",
            "./src/image/competition-m/long-2-green.png",
            "./src/image/competition-m/short-1.png",
            "./src/image/competition-m/short-1-yellow.png",
            "./src/image/competition-m/short-2.png",
            "./src/image/competition-m/short-2-purple.png",
            "./src/image/competition-m/short-3.png",
            "./src/image/competition-m/short-3-red.png",
            "./src/image/competition-m/short-4.png",
            "./src/image/competition-m/short-4-blue.png",
            "./src/image/competition-m/short-last.png",
            "./src/image/competition-m/short-last-purple.png"
            ];



            const red = hexToCSSFilter("#fc1a1a").filter.slice(0,-1);
            const blue = hexToCSSFilter("#401afc").filter.slice(0,-1);
            const green = hexToCSSFilter("#1afc77").filter.slice(0,-1);
            const yellow = hexToCSSFilter("#fcdc1a").filter.slice(0,-1);
            const purple = hexToCSSFilter("#a516a5").filter.slice(0,-1);
            
            this.imgObjArr = [
                {
                    hair_style: 'man-inital',
                    color: ''
                },
                {
                    hair_style: 'man-initial',
                    color: red
                },
                {
                    hair_style: 'man-long-1',
                    color: ''
                },
                {
                    hair_style: 'man-long-1',
                    color: blue
                },
                {
                    hair_style: 'man-long-2',
                    color: ''
                },
                {
                    hair_style: 'man-long-2',
                    color: green
                },
                {
                    hair_style: 'man-short-1',
                    color: ''
                },
                {
                    hair_style: 'man-short-1', 
                    color: yellow  
                },
                {
                    hair_style: 'man-short-2',
                    color: ''
                },
                {
                    hair_style: 'man-short-2',
                    color: purple
                },
                {
                    hair_style: 'man-short-3',
                    color: ''
                },
                {
                    hair_style: 'man-short-3',
                    color: red 
                },
                {
                    hair_style: 'man-short-4',
                    color: ''
                },
                {
                    hair_style: 'man-short-4',
                    color: blue  
                },
                {
                    hair_style: 'man-short-end',
                    color: '' 
                },
                {
                    hair_style: 'man-short-end',
                    color: purple
                }
        
                
            ]


        this.imgdiv = document.querySelector('.imgdiv');
        this.imgShow = document.createElement('img');
        this.imgShow.classList.add('gameImgForTwo');
        this.imgShow.style.display = 'none';
        // this.imgShow.style.display = 'none';
        this.imgShow.src = this.imgSrcArr[this.randIndex];
        this.imgdiv.appendChild(this.imgShow);

        this.submitbtn1 = document.getElementById('left-submit');
        this.submitbtn1.setAttribute('data-score','0');
        this.submitbtn2 = document.getElementById('right-submit'); 
        this.submitbtn2.setAttribute('data-score','0'); 
        document.addEventListener('keydown', this.checkIfSamePress.bind(this));
        this.submitbtn2.addEventListener('click', this.checkIfSame.bind(this));
    }


    handleGnerater(){
        this.randIndex = Math.floor(Math.random()*16);
        this.imgShow.src = this.imgSrcArr[this.randIndex];
        resetPage()
    }


    checkIfSame(e){
        e.preventDefault();

        console.log(e);
            this.gameImg = this.imgObjArr[this.randIndex]
        
            this.hair_obj = document.querySelector('.man-style');
        
            if (this.gameImg.hair_style === this.hair_obj.id  && this.gameImg.color === this.hair_obj.style.filter ){
                console.log('right user true');
                this.handleGnerater()
                isCorrectForTwo(true,'userR')
                // isCorrect(true)
            }else{
                isCorrectForTwo(false,'userR')
                console.log(false)
            }
      
    }



    checkIfSamePress(e){
        e.preventDefault();
       if(e.key === 's'){
        console.log(e);
            this.gameImg = this.imgObjArr[this.randIndex]
        
            this.hair_obj_L = document.querySelector('.man-style-L');

            if(this.gameImg.hair_style === this.hair_obj_L.id && this.gameImg.color === this.hair_obj_L.style.filter){
                console.log('left user true');
                this.handleGnerater()
                isCorrectForTwo(true,'userL')
            }else{
                console.log('false');
                isCorrectForTwo(false,'userL')
            }
        }
      
    }
}