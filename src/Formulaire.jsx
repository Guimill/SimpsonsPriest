import './App.css';
import dove1 from './dove1.png'
import dove2 from './dove2.png'
import church from './eglise.png'
import { jsPDF } from "jspdf";
import { useState } from 'react';
import collerette from './collerette.png'
import soundfile from './simpsonsPriest.mp3'


const doc = new jsPDF();
doc.addImage(collerette, 'PNG', 0,0,0,0)


function Formulaire() {

    let audio = new Audio(soundfile)

    const [Name, setName] = useState("");
    const [submitted, setSubmitted] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        doc.text(75,10, Name);
        audio.play();
        setSubmitted(doc.save(Name.replace(/\s/g, '')));
        }



    return (
        <div>
            <img style={{ top: "10vh", left: "85vw", position: "absolute", scale: "2" }} src={dove2} alt='dove2' />
            <img style={{ top: "10vh", left: "8vw", position: "absolute", scale: "2" }} src={dove1} alt='dove1' />
            <img style={{ top: "65vh", left: "10vw", position: "absolute", scale: "2" }} src={church} alt='church' />
            <img style={{ top: "65vh", left: "85vw", position: "absolute", scale: "2" }} src={church} alt='church' />
            <div className='bodyFormulaire'>
                <h1 style={{ paddingTop: "22vh", fontSize: "9em" }}>INTERNET <br /> DIVINITY <br /> SCHOOL </h1>
                <form onSubmit={handleSubmit}>
                    <label style={{ paddingTop: "8vh", fontSize: "4em" }} for="name"> NAME </label>
                    <input onChange={handleChange} style={{ fontSize: "3em", border: "solid" }} type="text" name="name" id="name" value={Name} required></input>
                </form>
            </div>
        </div>
    );
}

export default Formulaire;
