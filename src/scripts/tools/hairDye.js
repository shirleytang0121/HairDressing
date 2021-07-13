import iro from "@jaames/iro";
import { hexToCSSFilter } from 'hex-to-css-filter';


export default class HairDye{
    constructor(){
        this.dye_btn = document.querySelector(".hair-dye");
        this.hair_obj = document.querySelector(".hair-style");
        this.colordiv = document.querySelector(".wheel")

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
            document.body.style.backgroundColor=color.hexString;
            this.hair_obj.style.filter = hexToCSSFilter(color.hexString).filter;
           
          }.bind(this))
      
    }

    handleShow(e){
        e.preventDefault();
        this.colordiv.style.display = 'block';
       
    }



}