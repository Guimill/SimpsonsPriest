import './App.css';
import bell from "./bell.png"
import shield from "./shield.png"
import main1 from "./main1.png"
import main2 from "./main2.png"
import { Link } from "react-router-dom";
import soundfile from './into.mp3'


function App() {

  let audio = new Audio(soundfile)

  function handleMouse(e) {
      e.preventDefault();
      audio.play();
      }

      alert("Montez le son SVP")

  return (
    <div onMouseDown={handleMouse} className='FirstPage'>
    <iframe title='audio' hidden src={soundfile} allow="autoplay"></iframe> 
      <img id='bells' style={{top:"16vh", left:"85vw", position:"absolute"}} src={bell} alt='bells' />
      <img id='shield' style={{top:"12vh", left:"8vw", position:"absolute"}} src={shield} alt='shield' />
      <img style={{top:"78vh", left:"10vw", position:"absolute"}} src={main1} alt='main1' />
      <img style={{top:"78vh", left:"90vw", position:"absolute"}} src={main2} alt='main2' />
      <header></header>
      <div className='bodyApp'>
        <p className='welcome'>Welcome</p>
        <p>to the</p>
        <Link to={'./Formulaire'}>
          <h1 id='ePiscopal'><i>e</i>PISCOPAL <br /> CHURCH</h1>
        </Link>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
