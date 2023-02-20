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
      <main>
      <div id="sidebar">
          <h1>Login</h1>
          <p>¡No olvides dejar tus notas!</p>
          <div>
            <form>
                <h2>Ingresa con:</h2>
              <button type="submit" onClick={(e)=>signInWithGoogle(e)}>Google</button>
            </form>
          </div>
      </div>
      </main>
    </>
  );
};





