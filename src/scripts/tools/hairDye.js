import iro from "@jaames/iro";
import { hexToCSSFilter } from 'hex-to-css-filter';


export default class HairDye{
    constructor(){
        this.mydiv = document.querySelector(".right-buttons");
        this.dye_btn = document.querySelector(".hair-dye");
        this.hair_obj = document.querySelector(".hair-style");
        this.dye_btn.addEventListener('click',this.handleDye.bind(this))
        
    }

    handleDye(e){
        e.preventDefault();
        const colors =document.createElement('div');
        colors.classList.add('wheel');
        colors.setAttribute('id','colorWheel');
        this.mydiv.appendChild(colors);
        var colorWheel = new iro.ColorPicker("#colorWheel", {

            layout: [
            { 
            component: iro.ui.Wheel,
            options: {
                wheelLightness: true,
                wheelAngle: 0,
                wheelDirection: "anticlockwise",
                display: "flex"
            } 
            },
        
        ]
    
    });

    
    colorWheel.on('color:change', function(color, changes){
        document.body.style.backgroundColor = color.hexString;
        const cssFilter = hexToCSSFilter(color.hexString);
        console.log(cssFilter.filter);
      })

    
    }


}