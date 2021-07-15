export default function isCorrect(correct){
    const message = document.querySelector('.message');
    const correctImg = document.createElement('img');

    correctImg.classList.add('correctImg');
    message.appendChild(correctImg);

    if(correct){
        correctImg.src = './src/image/yes.png'
    }else{
        correctImg.src = './src/image/no.png'
    }

    setTimeout(()=>{
        correctImg.src = ''
    },1000)
    
    
    
}