export default function resetSecondPage(){
    const hair = document.querySelector('.man-style');
    hair.setAttribute("id","main-initial");
    hair.src = "./src/image/manstyle/initial.png"
    hair.style.filter="";
}