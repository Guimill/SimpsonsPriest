import './App.css';
import dove1 from './dove1.png'
import dove2 from './dove2.png'
import church from './eglise.png'
import collerette from './collerette.png'

function Formulaire() {
    return (
      <div>
        <img style={{top:"10vh", left:"85vw", position:"absolute", scale:"2"}} src={dove2} alt='dove2' />
        <img style={{top:"10vh", left:"8vw", position:"absolute", scale:"2"}} src={dove1} alt='dove1' />
        <img style={{top:"65vh", left:"10vw", position:"absolute", scale:"2"}} src={church} alt='church' />
        <img style={{top:"65vh", left:"85vw", position:"absolute", scale:"2"}} src={church} alt='church' />
        <div className='bodyFormulaire'>
            <h1 style={{paddingTop:"22vh", fontSize:"9em"}}>INTERNET <br /> DIVINITY <br /> SCHOOL </h1>
            <form action="" method="get">
                <a href={collerette} download="collerette"><label style={{paddingTop:"8vh", fontSize:"4em"}} for="name"> NAME </label></a>
                <input style={{fontSize:"3em", border:"solid"}} type="text" name="name" id="name" required></input>
            </form>
        </div>
      </div>
    );
  }
  
  export default Formulaire;
  