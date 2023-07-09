import './App.css';
import bell from "./bell.png"
import shield from "./shield.png"
import main1 from "./main1.png"
import main2 from "./main2.png"
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <header></header>
      <img style={{top:"16vh", left:"85vw", position:"absolute", zIndex:"2", scale:"1.5"}} src={bell} alt='bells' />
      <img style={{top:"12vh", left:"8vw", position:"absolute", zIndex:"1", scale:"1.2"}} src={shield} alt='shield' />
      <img style={{top:"78vh", left:"10vw", position:"absolute", zIndex:"1", scale:"1.5"}} src={main1} alt='main1' />
      <img style={{top:"78vh", left:"90vw", position:"absolute", zIndex:"1", scale:"1.5"}} src={main2} alt='main2' />
      <div className='bodyApp'>
        <p className='welcome'>Welcome</p>
        <p>to the</p>
        <Link to={'./Formulaire'}>
          <h1><i>e</i>PISCOPAL <br /> CHURCH</h1>
        </Link>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
