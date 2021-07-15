
export default function resetPage(){
    const hair = document.querySelector('.hair-style');
    const bangs = document.querySelector('.bang-style');
    hair.setAttribute("id","initial");
    hair.src = "./src/image/hairstyle/initial/initial.png"
    bangs.setAttribute("id","initial-bangs");
    bangs.src = "./src/image/bangs/bangs-1.png";
    hair.style.filter="";
    bangs.style.filter="";
     if(document.querySelector('.hair-style-L')){
        const hairL = document.querySelector('.hair-style-L');
        const bangsL = document.querySelector('.bang-style-L');
        hairL.setAttribute("id","initial");
        hairL.src = "./src/image/hairstyle/initial/initial.png"
        bangsL.setAttribute("id","initial-bangs");
        bangsL.src = "./src/image/bangs/bangs-1.png";
        hairL.style.filter="";
        bangsL.style.filter="";
     }
}