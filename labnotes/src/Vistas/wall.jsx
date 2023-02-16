import Header from "../components/header";
export default function Wall() {
    const wall = {
    };

    return (
      <div id="wall">
        <Header/>
        <button className="buttonclose">Cerrar sesion</button>
        <div className="divWall">
          <textarea className="textarea" rows="10" ></textarea>
          <button className="buttonPost">Guardar</button>
          </div>
          <div className="notessaved">
          <button className="buttonDelete">Eliminar</button>
          <button className="buttonEdit">Editar</button>
          </div>
        </div>
    )
  }