import resetPage from "./reset";
import { hexToCSSFilter } from 'hex-to-css-filter';

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
            
            
            this.submitbtn.addEventListener('click', this.checkIfSame.bind(this));
    }


    handleGnerater(e){
       
        // this.hair_obj = document.querySelector('.hair-style');
        // this.bangs_obj = document.querySelector('.bang-style');
        // console.log(this.hair_obj);
        // console.log(this.bangs_obj);
        // console.log(this.hair_obj.style.filter);
        // this.userDesign = {
        //     hair_style: this.hair_obj.id,
        //     bangs_style: this.bangs_obj.id,
        //     color: this.hair_obj.style.filter
        // }
        this.randIndex = Math.floor(Math.random()*20);
        this.imgShow.src = this.imgSrcArr[this.randIndex];
      
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
                hair_style: 'curling-long',
                bangs_style: 'initial-bangs',
                color: ''
            },
            {
                hair_style: 'curling-long',
                bangs_style: 'initial-bangs', 
                color: red
            },
            {
                hair_style: 'curling-long',
                bangs_style: 'second-bangs', 
                color: ''
            },
            {
                hair_style: 'curling-long',
                bangs_style: 'second-bangs', 
                color: green
            },
            {
                hair_style: 'curling-median',
                bangs_style: 'second-bangs', 
                color: ''
            },
            {
                hair_style: 'curling-median',
                bangs_style: 'second-bangs', 
                color: blue
            },
            {
                hair_style: 'curling-median',
                bangs_style: 'third-bangs', 
                color: ''
            },
            {
                hair_style: 'curling-median',
                bangs_style: 'third-bangs', 
                color: yellow  
            },
            {
                hair_style: 'long',
                bangs_style: 'initial-bangs', 
                color: ''
            },
            {
                hair_style: 'long',
                bangs_style: 'initial-bangs', 
                color: purple
            },
            {
                hair_style: 'long',
                bangs_style: 'third-bangs', 
                color: ''
            },
            {
                hair_style: 'long',
                bangs_style: 'third-bangs', 
                color: red 
            },
            {
                hair_style: 'blow',
                bangs_style: 'initial-bangs', 
                color: ''
            },
            {
                hair_style: 'blow',
                bangs_style: 'initial-bangs', 
                color: blue  
            },
            {
                hair_style: 'blow',
                bangs_style: 'second-bangs', 
                color: ''
            },
            {
                hair_style: 'blow',
                bangs_style: 'second-bangs', 
                color: green
            },
            {
                hair_style: 'straight-median',
                bangs_style: 'initial-bangs',
                color: ''
            },
            {
                hair_style: 'straight-median',
                bangs_style: 'initial-bangs',
                color: yellow
            },
            {
                hair_style: 'straight-median',
                bangs_style: 'second-bangs',
                color: '' 
            },
            {
                hair_style: 'straight-median',
                bangs_style: 'second-bangs',
                color: purple
            }
    
            
        ]
    
        this.gameImg = imgObjArr[this.randIndex]
    
    
    
        const hair_obj = document.querySelector('.hair-style');
        const bangs_obj = document.querySelector('.bang-style');
            console.log(hair_obj);
            console.log(bangs_obj);
            console.log(hair_obj.style.filter);
        const userDesign = {
                hair_style: hair_obj.id,
                bangs_style: bangs_obj.id,
                color: hair_obj.style.filter
            }
    
        console.log('hair')
        console.log(this.gameImg.hair_style)
        console.log(userDesign.hair_style)
        console.log(this.imgShow.hair_style === userDesign.hair_style)
    
        console.log('bangs')
        console.log(this.gameImg.bangs_style)
        console.log(userDesign.bangs_style)
        console.log(this.gameImg.bangs_style===userDesign.bangs_style)
    
        console.log('color')
        console.log(this.gameImg.color)
        console.log(userDesign.color)
        console.log(this.gameImg.color === userDesign.color)
       
        this.handleGnerater()
        // if (imgShow.hair_style === userDesign.hair_style  && imgShow.bangs_style===userDesign.bangs_style && imgShow.color === userDesign.color ){
        //     console.log('true');
        // }else{
        //     console.log('false');
        // }
    
    
    }
}