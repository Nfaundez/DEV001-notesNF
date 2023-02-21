import Header from "../components/header";
import Buttonclose from "../components/buttonclose";
import "./wall.css"
export default function Wall() {
    const wall = {
    };

    

    return (
      <div id="wall">
        <Header/>
        

        
        <div className="divWall">
          <input class="title"></input>
          <textarea className="textarea" rows="10" ></textarea>
          <button className="buttonPost">Guardar</button>
        </div>
          {/* <div className="notessaved">
          <button className="buttonDelete">Eliminar</button>
          <button className="buttonEdit">Editar</button>
          </div> */}
          <Buttonclose/>
      </div>
    )
  }