import Character from './scripts/character.js'
import Scissors from './scripts/scissors.js'
import CurlingIron from './scripts/curlingIron.js'
import HairDryer from './scripts/hairDryer.js'
import Straightener from './scripts/straightener.js'
import Comb from './scripts/comb.js'


// <!-- <div class="left-buttons">

// </div>
// <div>
//   <img src="src/image/tools/mirror.png" class="mirror">
//   <div class="main-character"></div>
// </div>

// <div class="right-buttons">
//   <button class="scissors"><img src="src/image/tools/scissors.png" class="tools" ></button>
//   <button class="curling-iron"><img src="src/image/tools/curling-iron.png" class="tools" ></button>
//   <button class="straightener"><img src="src/image/tools/straightener.png" class="tools" ></button>
//   <button class="hair-dryer"><img src="src/image/tools/hair-dryer.png" class="tools" ></button>
//   <button class="comb"><img src="src/image/tools/comb.png" class="tools" ></button>
// </div> -->

export default function renderGamePage(){
    const character =new Character();
    const scissors = new Scissors();
    const curlingIron = new CurlingIron();
    const hairdryer = new HairDryer();
    const straightener = new Straightener();
    const comb =new Comb();

    
}