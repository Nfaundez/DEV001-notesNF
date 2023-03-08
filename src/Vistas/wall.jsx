import Header from "../components/header";
import Buttonclose from "../components/buttonclose";
import Wallform from "./wallForm";
import './wall.css';
import { db } from "../firebase/firebaseConfig";
import { addDoc, collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";


export default function Wall() {
  const saveNote = async (title, description) => {
    //el metodo adddoc() agrega un identificador, quiero guardar un objeto documento en la collecion
    await addDoc(collection(db, 'notes'), title, description);
    console.log("guardado");
  }
  const [listNote, setListNote] = useState([]) // añadir el estado de react a un componente de funcion.
  const getList = async() => {
    try {
      const querySnapshot = await getDocs(collection(db, 'notes'))
      const docs = [];
      querySnapshot.forEach((doc)=> {
        docs.push({...doc.data(), id:doc.id})
      })
      setListNote(docs)
    }catch (error){
      console.log(error)
    }
   };

// funcion renderizar contenido de nota y titulo
  useEffect(()=>{ // el componente tiene que hacer algo luego de renderizarse
    getList()
  
  },[]);
    
  
  // funcion para eliminar notas
  const deleteNote = async (id) =>{
  await deleteDoc (doc(db, 'notes', id))
}

// key se utiliza para evitar problemas de renderizacion.
  return (
    <div id="wall">
      <Header />
      <Buttonclose />
      <div id="wallinwall">
        <Wallform saveNote={saveNote} />
        <div className="divWall" id="divWall">
        </div></div>

      <div className="notessaved">
        <div className="note-body">
        {
          listNote.map(list => (
          <div className="notita" 
          key= {`div${list.id}`}> 
          <h2 className="title">{list.title}</h2>
          <p className="description">{list.description}</p>
          <div className="buttons">
           <button className="buttonDelete" onClick={()=>deleteNote(list.id)}>
            Eliminar
            </button>
           <button className="buttonEdit">Editar</button> 
           </div>
          </div> 
          ))
        }
        </div>
      </div>
    </div>
           )
          };
           
          
        
        
