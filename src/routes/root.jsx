import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../firebase/firebaseConfig";
import Header from "../components/header";
import "./root.css"

export default function Root() {
  const navigate = useNavigate();

  const signInWithGoogle = (e) => {
  e.preventDefault ()
      loginWithGoogle().then((res) => { 
      
          const displayNameUser = res.user.displayName;
          const emailUser = res.user.email;
          //actualiza un valor si la clave ya existe
          localStorage.setItem("name", displayNameUser);
          localStorage.setItem("email", emailUser);
          navigate("/wall/:wallId");
        })
        .catch( console.error ) 
  };

  return (
    <>
      <Header />
        <form> 
      <div id="sidebar">
          <div className="segment">
               </div>
               {/* <label> */}
          <h2>¡No olvides dejar tus notas!</h2>
                <h2>Ingresa con:</h2>
              <button className="google" type="submit" onClick={(e)=>signInWithGoogle(e)}>Google</button>
            {/* </label> */}
      </div>
      </form>
    </>
  );
};





