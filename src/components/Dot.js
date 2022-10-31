
const dotStyle = {
    width: '70px',
    height: '70px',
    border: '1px solid #B5B5B5',
    borderRadius: '50%',

}

const charStyle = {
    objectFit: "cover",
    width: '70px',
}
export default function Dot(props){
    
    return(

        <div style={dotStyle}>
            <img style={charStyle} src={props.character}></img>
        </div>
    );

}