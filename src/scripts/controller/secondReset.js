export default function resetSecondPage(){
    const hair = document.querySelector('.man-style');
    hair.setAttribute("id","man-initial");
    hair.src = "./src/image/manstyle/initial.png"
    hair.style.filter="";
    if(document.querySelector('.hair-style-L')){
        const hairL = document.querySelector('.man-style-L');
        hairL.setAttribute("id","man-initial");
        hairL.src = "./src/image/hairstyle/initial/initial.png"
        hairL.style.filter="";
     }
}