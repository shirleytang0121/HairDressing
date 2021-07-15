import twouserFinish from "./finishTwoPlayer";
export default function isCorrectForTwo(correct,user){
    const msgLeft = document.querySelector('.msgLeft');
    const msgRight = document.querySelector('.msgRight');
    const correctImg1 = document.createElement('img');
    const correctImg2 = document.createElement('img');

    correctImg1.classList.add('correctImg');
    correctImg2.classList.add('correctImg');
    msgLeft.appendChild(correctImg1);
    msgRight.appendChild(correctImg2);

    const submitbtn1 = document.getElementById('left-submit');
    const submitbtn2 = document.getElementById('right-submit');
    let score1 = parseInt(submitbtn1.dataset.score)
    let score2 = parseInt(submitbtn2.dataset.score)
    if(correct && user === 'userL'){
        correctImg1.src = './src/image/yes.png';
        score1++;
        submitbtn1.setAttribute('data-score',score1);
        console.log(score1);
        if ( score1 === 1){
            twouserFinish()
            console.log('gameover')
        }
    }else if(!correct && user === 'userL') {
        correctImg1.src = './src/image/no.png'
    }else if(correct && user === 'userR'){
        correctImg2.src = './src/image/yes.png';
        score2++;
        submitbtn2.setAttribute('data-score',score2);
        console.log(score2);
        if ( score2 === 1){
            twouserFinish()
            console.log('gameover')
         }
    }else if(!correct && user === 'userR'){
        correctImg2.src = './src/image/no.png'
    }

    setTimeout(()=>{
        correctImg1.src = '';
        correctImg2.src = '';
    },1200)

    
    
    
    
}