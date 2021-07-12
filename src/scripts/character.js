export default class Character{
    constructor(){
        const mainCharacter = document.querySelector(".main-character");
        
        const characterImg= document.createElement('img');
        characterImg.setAttribute("src","/src/image/bald.png");
        characterImg.classList.add('bald')
        mainCharacter.appendChild(characterImg);

        const initialStyle= document.createElement('img')
        initialStyle.setAttribute("src","/src/image/hairstyle/initial/initial.png");
        initialStyle.classList.add('hair-style');
        initialStyle.setAttribute("id","initial-hair")
        mainCharacter.appendChild(initialStyle);

        const initialBangs= document.createElement('img')
        initialBangs.setAttribute("src","/src/image/bangs-1.png");
        initialBangs.classList.add('bang-style');
        initialBangs.setAttribute("id","initial-bangs");
        mainCharacter.appendChild(initialBangs);

    }

   
}


// module.exports = Character;