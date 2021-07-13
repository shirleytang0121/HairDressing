import iro from "@jaames/iro";
import { hexToCSSFilter } from 'hex-to-css-filter';


export default class HairDye{
    constructor(){
        this.dye_btn = document.querySelector(".hair-dye");
        this.hair_obj = document.querySelector(".hair-style");
        this.bangs_obj = document.querySelector(".bang-style")
        this.colordiv = document.querySelector(".wheel");

        this.colorWheel = new iro.ColorPicker("#colorWheel", {
            layout: [
            { 
              component: iro.ui.Wheel,
              options: {
                wheelLightness: true,
                wheelAngle: 0,
                wheelDirection: "anticlockwise"
              } 
            },
           
            ]    
        });  
        
        this.dye_btn.addEventListener('click',this.handleShow.bind(this))
        this.colorWheel.on('color:change', function(color, changes){
            
            const cssFilter= hexToCSSFilter(color.hexString);
            console.log(cssFilter.filter);
            debugger
            this.hair_obj.style.filter = cssFilter.filter.slice(0,-1);
            this.bangs_obj.style.filter = cssFilter.filter.slice(0,-1);
          }.bind(this))
      
    }

    handleShow(e){
        e.preventDefault();
        this.colordiv.style.display = 'block';
       
    }



}