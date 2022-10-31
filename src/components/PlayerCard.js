import Dot from './Dot'
import cat from '../assets/meow.png'
import dog from '../assets/woof.png'
import unicorn from '../assets/neigh.png'

const cardStyle={
    margin: "20px",
    backgroundColor: '#E6F8FF',
    width: '80%',
    maxWidth: '400px',
    height: '200px',
    borderRadius: '40px',
    justifyContent: 'center',
    padding: '10px'
}
const pStyle = {
    fontSize: "3vh"

}
const dotsS = {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',

    alignItems: 'center'
}
const dt={
    padding:'10px'
}

export default function PlayerCard(){
    return(
  
        <div style={cardStyle}>
        <p style={pStyle}>Player 1</p>
            <div style={dotsS}>
                <div style={dt}>
                    <Dot character={cat}></Dot>
                </div>
                <div style={dt}>
                    <Dot character={dog}></Dot>
                </div>
                <div style={dt}>
                    <Dot character={unicorn}></Dot>
                </div>
            </div>
            
        </div>
    )
}