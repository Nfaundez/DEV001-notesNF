import Header from "../components/header";
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
        <div className="divWall">
          <input class="title"></input>
          <textarea className="textarea" rows="10" ></textarea>
          <button className="buttonPost">Guardar</button>
          </div>
          <div className="notessaved">
          <button className="buttonDelete">Eliminar</button>
          <button className="buttonEdit">Editar</button>
          </div>
          <Buttonclose/>
      </div>
    )
  }