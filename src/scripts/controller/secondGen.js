import resetSecondPage from './secondReset';
import { hexToCSSFilter } from 'hex-to-css-filter';
import isCorrect from "./isCorrect";


export default class SecondGenerateImg{
    
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

            this.leftside = document.querySelector('.leftside');
            this.imgdiv = document.querySelector('.imgdiv');
            this.imgShow = document.createElement('img');
            this.imgShow.classList.add('gameImg');
            this.imgShow.style.display = 'none';
            this.imgShow.src = this.imgSrcArr[this.randIndex];
            this.imgdiv.appendChild(this.imgShow);

            this.submitbtn = document.querySelector('.submit');
            this.submitbtn.setAttribute('id','0');
            
            this.submitbtn.addEventListener('click', this.checkIfSame.bind(this));
    }


    handleGnerater(){
        this.randIndex = Math.floor(Math.random()*16);
        this.imgShow.src = this.imgSrcArr[this.randIndex];
        resetSecondPage()
      
    }



    checkIfSame(e){
        e.preventDefault();

        const red = hexToCSSFilter("#fc1a1a").filter.slice(0,-1);
        const blue = hexToCSSFilter("#401afc").filter.slice(0,-1);
        const green = hexToCSSFilter("#1afc77").filter.slice(0,-1);
        const yellow = hexToCSSFilter("#fcdc1a").filter.slice(0,-1);
        const purple = hexToCSSFilter("#a516a5").filter.slice(0,-1);
        
        const imgObjArr = [
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
    
        this.gameImg = imgObjArr[this.randIndex]
    
        this.hair_obj = document.querySelector('.man-style');
        // console.log('hair')
        // console.log(this.gameImg.hair_style)
        // console.log(this.hair_obj.id)
        // console.log(this.imgShow.hair_style === this.hair_obj.id)
    
        // console.log('bangs')
        // console.log(this.gameImg.bangs_style)
        // console.log(this.bangs_obj.id)
        // console.log(this.gameImg.bangs_style===this.bangs_obj.id)
    
        // console.log('color')
        // console.log(this.gameImg.color)
        // console.log(this.hair_obj.style.filter)
        // console.log(this.gameImg.color === this.hair_obj.style.filter)
       
       
        if (this.gameImg.hair_style === this.hair_obj.id && this.gameImg.color === this.hair_obj.style.filter ){
            console.log('true');
            isCorrect(true)
        }else{
            console.log('false');
            isCorrect(false)
        }

       
        this.handleGnerater()
    
    }
}