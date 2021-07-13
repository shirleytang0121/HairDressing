import iro from "@jaames/iro";

export default class HairDye{
    constructor(){
        this.dye_btn = document.querySelector(".hair-dye");
        this.hair_obj = document.querySelector(".hair-style");
        this.dye_btn.addEventListener('click',this.handleDye.bind(this))
        console.log(this.dye_btn)
        
    }

    handleDye(e){
        e.preventDefault();
        const colors =document.createElement('div');
        colors.classList.add('wheel');
        colors.setAttribute('id','colorWheel');
        this.dye_btn.appendChild(colors);
        console.log(colors);
        var colorWheel = new iro.ColorPicker("#colorWheel", {

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

    const color = document.createElement('input')
    color.setAttribute('type','text')
    

        }



}