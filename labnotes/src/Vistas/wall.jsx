import Header from "../components/header";
import Buttonclose from "../components/buttonclose";
import Wallform from "./wallForm";
import './wall.css';
import { db } from "../firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export default function Wall() {

  //guarda la imformacion ingresada al input
  
  const saveNote = (title, description) => {
    addDoc(collection(db, 'notes'), title, description);
    console.log("guardado");
  }

  const wall = {

    };

    

    return (
      <div id="wall">
        <Header/>
        <Buttonclose/>
        <div id="wallinwall">
        <Wallform saveNote={saveNote}/>
          <div  className="divWall" id="divWall">      
          </div></div>

          <div className="notessaved">
          <button className="buttonDelete">Eliminar</button>
          <button className="buttonEdit">Editar</button>
          </div>
      </div>  
    )
  }