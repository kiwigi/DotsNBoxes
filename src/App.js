import './App.css';
import { Link } from "react-router-dom";
import PlayerCard from './components/PlayerCard';

const cardsS = {
  display: "flex",
  flexWrap: "wrap",
  
}

function App() {
  return (
    <div className="App">
      <div>
        <p>Welcome! Please select your player characters.</p>
        <div style={cardsS}>
          <PlayerCard ></PlayerCard>
          <PlayerCard ></PlayerCard>
          <PlayerCard ></PlayerCard>
        </div>
        <Link to="/game"></Link>
      </div>
    </div>
  );
}

export default App;
