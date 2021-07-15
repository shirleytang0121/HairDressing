export default class Character{
    constructor(gender){
        //const mainCharacter = document.querySelector(".main-character");
        const mainCharacter = document.getElementsByClassName("main-character");
        console.log(Array.from(mainCharacter));
        for(let i=0; i<mainCharacter.length;i++){
            const characterImg= document.createElement('img');
            if(gender === 'F'){
                characterImg.setAttribute("src","./src/image/bald-w.png");
            }else{
                characterImg.setAttribute("src","./src/image/bald-m.png");
            }
            characterImg.classList.add('bald')
            mainCharacter[i].appendChild(characterImg);

            const initialStyle= document.createElement('img')
            if(gender==='F'){
                initialStyle.setAttribute("src","./src/image/hairstyle/initial/initial.png");
                initialStyle.classList.add('hair-style');
                initialStyle.setAttribute("id","initial");
            }else{
                initialStyle.setAttribute("src","./src/image/manstyle/initial.png");
                initialStyle.classList.add('man-style');
                initialStyle.setAttribute("id","man-initial")
            }
            
            mainCharacter[i].appendChild(initialStyle);

            const initialBangs= document.createElement('img')
            if(gender==='F'){
                initialBangs.setAttribute("src","./src/image/bangs/bangs-1.png");
            }
            initialBangs.classList.add('bang-style');
            initialBangs.setAttribute("id","initial-bangs");
            mainCharacter[i].appendChild(initialBangs);
        }

    }

   
}


// module.exports = Character;