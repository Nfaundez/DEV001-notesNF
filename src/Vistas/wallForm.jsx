import React, { useEffect, useState } from "react";
import './wall.css';
import { db } from "../firebase/firebaseConfig";
import { addDoc, collection, setDoc, doc } from "firebase/firestore"

export default function Wallform({ getNoteEdit, subId }) {

  // variables de estado
  const [values, setValues] = useState({
    title: '',
    description: ''
  })

  // cada vez que cambia el getnoteedit el setvalues se reemplaza
  useEffect(() => {

    setValues({
      title: getNoteEdit.title,
      description: getNoteEdit.description
    })

  }, [getNoteEdit])

  const initialNote = {
    title: '',
    description: ''
  }

  //actualiza el form
  const handleSubmit = e => {
    e.preventDefault();
    saveNote(values);
    //restablece los valores iniciales 
    setValues({ ...initialNote })
  }

  // guarda los datos recogidos del formulario a firestore
  const saveNote = async (title, description) => {
    // console.log(subId, "que eres")
    if (subId === '') {
      console.log("crea")
      try {
        //el metodo adddoc() agrega un identificador, quiero guardar un objeto documento en la collecion
        await addDoc(collection(db, 'notes'), title, description);
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("actualiza")
      try {
        await setDoc(doc(db, 'notes', subId), {
          ...values
        })

      } catch (error) {
        console.log(error)
      }
    }
    // setSubId('')
  }

  //recoge los datos de los imputs
  const handleInputChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    //copia los valores ingresados, reconoce el name y coloca el valor
    return setValues({ ...values, [name]: value });
  }

  return (
    <>
      <form id="wallform" onSubmit={handleSubmit}>
        <label>Titulo:</label>
        <input type="text" className="noteTitle" name="title" placeholder="titulo" onChange={handleInputChange} value={values.title} ></input>
        <textarea className="noteDescription" name="description" rows="10" placeholder="deja tu nota" onChange={handleInputChange} value={values.description}></textarea>
        <button className="buttonSave" >Guardar</button>
      </form>
    </>
  );
};