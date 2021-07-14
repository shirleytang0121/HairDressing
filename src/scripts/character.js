export default class Character{
    constructor(gender){
        const mainCharacter = document.querySelector(".main-character");
        
        const characterImg= document.createElement('img');
        if(gender === 'F'){
            characterImg.setAttribute("src","./src/image/bald-w.png");
        }else{
            characterImg.setAttribute("src","./src/image/bald-m.png");
        }
        characterImg.classList.add('bald')
        mainCharacter.appendChild(characterImg);

        const initialStyle= document.createElement('img')
        if(gender==='F'){
            initialStyle.setAttribute("src","./src/image/hairstyle/initial/initial.png");
            initialStyle.classList.add('hair-style');
            initialStyle.setAttribute("id","initial")
        }else{
            initialStyle.setAttribute("src","./src/image/manstyle/initial.png");
            initialStyle.classList.add('man-style');
            initialStyle.setAttribute("id","man-initial")
        }
        
        mainCharacter.appendChild(initialStyle);

        const initialBangs= document.createElement('img')
        if(gender==='F'){
            initialBangs.setAttribute("src","./src/image/bangs/bangs-1.png");
        }
        initialBangs.classList.add('bang-style');
        initialBangs.setAttribute("id","initial-bangs");
        mainCharacter.appendChild(initialBangs);

    }

   
}


// module.exports = Character;