import Header from "../components/header";
import Buttonclose from "../components/buttonclose";
import Wallform from "./wallForm";
import './wall.css';
import { db } from "../firebase/firebaseConfig";
import { addDoc, collection, getDocs, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";

export default function Wall() {

  // useState es un Hook que te permite añadir el estado de React a un componente de función.
  const [arrayNotes, setArrayNotes] = useState([])


  const saveNote = async (title, description) => {
    //el metodo adddoc() agrega un identificador, quiero guardar un objeto documento en la collecion
    await addDoc(collection(db, 'notes'), title, description);
    console.log("guardado");
  }

  const getNotes = async () => {
    //recuperar todos los documentos de una colección 
    const querySnapshot = await getDocs(collection(db, "notes"));
    const array = []
    querySnapshot.forEach((doc) => {
      array.push(doc.data())
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
    });
    return array
  };

  //useEffectse ejecuta en cada render.
  useEffect(() => {
    getNotes().then(result => { return setArrayNotes(result) });
  }, []);

  /* if (!setArrayNotes()) {
    return null
  } */

  return (
    <div id="wall">
      <Header />
      <Buttonclose />
      <div id="wallinwall">
        <Wallform saveNote={saveNote} />
        <div className="divWall" id="divWall">
        </div></div>

      <div className="notessaved">
        <button className="buttonDelete">Eliminar</button>
        <button className="buttonEdit">Editar</button>
      </div>
    </div>
  )
}
