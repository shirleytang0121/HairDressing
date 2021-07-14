import { hexToCSSFilter } from 'hex-to-css-filter';

export default function checkIfSame(userDesign, gameShow){
    // console.log(userDesign);
    // console.log(gameShow);
    const red = hexToCSSFilter("#fc1a1a").filter.slice(0,-1);
    const imgObjArr = [
        {
            hair_style: 'curling-long',
            bangs_style: 'initial-bangs',
            color: ''
        },
        {
            hair_style: 'curling-long',
            bangs_style: 'initial-bangs', 
            color: red
        },
        {
            hair_style: 'curling-long',
            bangs_style: 'second-bangs', 
            color: ''
        },
        {
            hair_style: 'curling-long',
            bangs_style: 'second-bangs', 
            color: ''
        }
        
    ]

    let imgShow = imgObjArr[gameShow]
   
    if (imgShow.hair_style === userDesign.hair_style  && imgShow.bangs_style===userDesign.bangs_style && imgShow.color === userDesign.color ){
        console.log('true');
    }else{
        console.log('false');
    }


    


}