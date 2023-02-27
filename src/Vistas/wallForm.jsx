import React, {useEffect, useState} from "react";
import './wall.css';
export default function Wallform(props) {

  const initialNote = {
    title: '',
    description: ''
  }
// variables de estado
  const [values, setValues] = useState(initialNote)
 


  //actualiza el form
  const handleSubmit = e => {
    e.preventDefault();
    props.saveNote(values);
    setValues({ ...initialNote })
  }
  
  //recoge los datos de los imputs
  const handleInputChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    //copia los valores ingresados, reconoce el name y coloca el valor
    setValues({ ...values, [name]: value });
  }


  const Wallform = {

  };

  return (
    <>
      <form id="wallform" onSubmit={handleSubmit}>
      <label>Titulo:</label>
        <input type="text" className="noteTitle" name="title" placeholder="titulo" onChange={handleInputChange} value={values.title}></input>
        <textarea className="noteDescription" name="description" rows="10" placeholder="deja tu nota" onChange={handleInputChange} value={values.description}></textarea>
        <button className="buttonSave">Guardar</button>
      </form>
    </>
  );
};