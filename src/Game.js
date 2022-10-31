import Dot from './components/Dot'
import cat from './assets/meow.png'
import dog from './assets/woof.png'
import unicorn from './assets/neigh.png'


export default function Game(){
    return(
        <div>
            <h2>
            Dots. & Boxes 
            </h2>
            <div className="gameBoard">
            <Dot character={cat}></Dot>
            </div>
        </div>
       

    )
}