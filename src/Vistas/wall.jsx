import Header from "../components/Header";
import Buttonclose from "../components/Buttonclose";
import Wallform from "./WallForm";
import './wall.css';
import { db } from "../firebase/firebaseConfig";
import { collection, deleteDoc, getDocs, doc, getDoc} from "firebase/firestore";
import React, { useEffect, useState } from "react";


export default function Wall() {

  // useState es un Hook que te permite añadir el estado de React a un componente de función.

  const [getNoteEdit, setgetNoteEdit] = useState([])
  const [listNote, setListNote] = useState([])
  const [subId, setSubId] = useState('')

  
  const getList = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'notes'))
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      setListNote(docs)
    } catch (error) {
      console.log(error)
    }
  };

  // funcion renderizar contenido de nota y titulo
  useEffect(() => {
    getList()
  }, []);

  const getOneNote = async (id) => {
    try {
      const docRef = doc(db, 'notes', id)
      const docSnap = await getDoc(docRef)
      // console.log(subId)
      setgetNoteEdit(docSnap.data())

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if (subId !== '') {
      getOneNote(subId)
    }
  }, [subId])

  // funcion para eliminar notas
  const deleteNote = async (id) => {
    await deleteDoc(doc(db, 'notes', id))
  }

  return (
    <div id="wall">
      <Header />
      <Buttonclose />
      <div id="wallinwall">
        < Wallform getNoteEdit={getNoteEdit} subId={subId} />
        <div className="divWall" id="divWall">
        </div>
      </div>

      <div className="notessaved">
        <div className="note-body">
          {
            listNote.map(list => (
              <div className="notita"
                key={`div${list.id}`}>
                <h2 className="title">{list.title}</h2>
                <p className="description">{list.description}</p>
                <div className="buttons">
                  <button className="buttonDelete" onClick={() => deleteNote(list.id)}>
                    Eliminar
                  </button>
                  <button className="buttonEdit" onClick={() => setSubId(list.id)}>Editar</button>
                </div>
              </div>

            ))
          }
        </div>

      </div>
    </div>
  )
};
