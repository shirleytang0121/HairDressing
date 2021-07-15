export default function isCorrect(correct){
    const message = document.querySelector('.message');
    const correctImg = document.createElement('img');

    correctImg.classList.add('correctImg');
    message.appendChild(correctImg);

    const submitbtn = document.querySelector('.submit');
    let score = parseInt(submitbtn.id)

    if(correct){
        correctImg.src = './src/image/yes.png';
        score++;
        submitbtn.setAttribute('id',score);
        console.log(score);
    }else{
        correctImg.src = './src/image/no.png'
    }

    setTimeout(()=>{
        correctImg.src = ''
    },1200)
    
    
    
}