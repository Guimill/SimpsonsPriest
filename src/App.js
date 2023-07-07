import './App.css';
import bell from "bell.png"

function App() {
  return (
    <div className="App">
      <img src={bell}></img>
      <header></header>
      <div className='body'>
        <p className='welcome'>Welcome</p>
        <p>to the</p>
        <h1><i>e</i>Piscopale <br/> church</h1>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
