import Header from "../components/header";
import Wallform from "./wallForm";
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
        <button className="buttonclose">Cerrar sesion</button>
        <Wallform saveNote={saveNote}/>
          <div  className="divWall" id="divWall">      
          </div>
          <div className="notessaved">
          <button className="buttonDelete">Eliminar</button>
          <button className="buttonEdit">Editar</button>
          </div>
        </div>
    )
  }