import React, { useState } from "react";
import './wall.css';
import { db } from "../firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore"

export default function Wallform(props) {

  console.log(props.getNoteEdit)

  const editNote = {
  title: props.getNoteEdit.title,
  description: props.getNoteEdit.description
   } 
   console.log(editNote)

  const initialNote = {
    title: '',
    description: ''
  }

  // variables de estado
  const [values, setValues] = useState(initialNote)
  //console.log(props.values)
  if (props.getNoteEdit !== '') {
    // console.log(editNote)
    // console.log(useState(editNote))
    setValues(editNote)
  } else {
    // console.log(useState(initialNote))
    setvalues(initialNote)
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
    //el metodo adddoc() agrega un identificador, quiero guardar un objeto documento en la collecion
    await addDoc(collection(db, 'notes'), title, description);
    console.log("guardado");
  }

  //recoge los datos de los imputs
  const handleInputChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    //copia los valores ingresados, reconoce el name y coloca el valor
    setValues({ ...values, [name]: value });
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