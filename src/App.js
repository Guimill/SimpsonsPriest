import './App.css';
import bell from "./bell.png"
import shield from "./shield.png"
import main from "./main.png"

function App() {
  return (
    <div className="App">
      <header></header>
      <div className='body'>
        <img style={{top:"60px", left:"150px", position:"relative"}} src={bell} alt='bells' />
        <img src={shield} alt='bells' />
        <img src={main} alt='bells' />
        <img src={main} alt='bells' />
        <p className='welcome'>Welcome</p>
        <p>to the</p>
        <h1><i>e</i>Piscopale <br /> church</h1>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
