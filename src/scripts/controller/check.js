

//  checkIfSame(gameShow){
//     const red = hexToCSSFilter("#fc1a1a").filter.slice(0,-1);
//     const blue = hexToCSSFilter("#401afc").filter.slice(0,-1);
//     const green = hexToCSSFilter("#1afc77").filter.slice(0,-1);
//     const yellow = hexToCSSFilter("#fcdc1a").filter.slice(0,-1);
//     const purple = hexToCSSFilter("#a516a5").filter.slice(0,-1);
    
//     const imgObjArr = [
//         {
//             hair_style: 'curling-long',
//             bangs_style: 'initial-bangs',
//             color: ''
//         },
//         {
//             hair_style: 'curling-long',
//             bangs_style: 'initial-bangs', 
//             color: red
//         },
//         {
//             hair_style: 'curling-long',
//             bangs_style: 'second-bangs', 
//             color: ''
//         },
//         {
//             hair_style: 'curling-long',
//             bangs_style: 'second-bangs', 
//             color: green
//         },
//         {
//             hair_style: 'curling-median',
//             bangs_style: 'second-bangs', 
//             color: ''
//         },
//         {
//             hair_style: 'curling-median',
//             bangs_style: 'second-bangs', 
//             color: blue
//         },
//         {
//             hair_style: 'curling-median',
//             bangs_style: 'third-bangs', 
//             color: ''
//         },
//         {
//             hair_style: 'curling-median',
//             bangs_style: 'third-bangs', 
//             color: yellow  
//         },
//         {
//             hair_style: 'long',
//             bangs_style: 'initial-bangs', 
//             color: ''
//         },
//         {
//             hair_style: 'long',
//             bangs_style: 'initial-bangs', 
//             color: purple
//         },
//         {
//             hair_style: 'long',
//             bangs_style: 'third-bangs', 
//             color: ''
//         },
//         {
//             hair_style: 'long',
//             bangs_style: 'third-bangs', 
//             color: red 
//         },
//         {
//             hair_style: 'blow',
//             bangs_style: 'initial-bangs', 
//             color: ''
//         },
//         {
//             hair_style: 'blow',
//             bangs_style: 'initial-bangs', 
//             color: blue  
//         },
//         {
//             hair_style: 'blow',
//             bangs_style: 'second-bangs', 
//             color: ''
//         },
//         {
//             hair_style: 'blow',
//             bangs_style: 'second-bangs', 
//             color: green
//         },
//         {
//             hair_style: 'straight-median',
//             bangs_style: 'initial-bangs',
//             color: ''
//         },
//         {
//             hair_style: 'straight-median',
//             bangs_style: 'initial-bangs',
//             color: yellow
//         },
//         {
//             hair_style: 'straight-median',
//             bangs_style: 'second-bangs',
//             color: '' 
//         },
//         {
//             hair_style: 'straight-median',
//             bangs_style: 'second-bangs',
//             color: purple
//         }

        
//     ]

//     console.log(gameShow)
//     let imgShow = imgObjArr[gameShow]



//     const hair_obj = document.querySelector('.hair-style');
//     const bangs_obj = document.querySelector('.bang-style');
//         console.log(hair_obj);
//         console.log(bangs_obj);
//         console.log(hair_obj.style.filter);
//     const userDesign = {
//             hair_style: hair_obj.id,
//             bangs_style: bangs_obj.id,
//             color: hair_obj.style.filter
//         }

//     console.log('hair')
//     console.log(imgShow.hair_style)
//     console.log(userDesign.hair_style)
//     console.log(imgShow.hair_style === userDesign.hair_style)

//     console.log('bangs')
//     console.log(imgShow.bangs_style)
//     console.log(userDesign.bangs_style)
//     console.log(imgShow.bangs_style===userDesign.bangs_style)

//     console.log('color')
//     console.log(imgShow.color)
//     console.log(userDesign.color)
//     console.log(imgShow.color === userDesign.color)
   
//     // if (imgShow.hair_style === userDesign.hair_style  && imgShow.bangs_style===userDesign.bangs_style && imgShow.color === userDesign.color ){
//     //     console.log('true');
//     // }else{
//     //     console.log('false');
//     // }


    


// }