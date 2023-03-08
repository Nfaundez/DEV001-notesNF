import "./buttonclose.css"
import { auth, salirDeCuenta } from "../firebase/firebaseConfig";
import { useNavigate } from 'react-router-dom';

export default function Buttonclose() {
    const navigate = useNavigate();
    const signOut = () => {
        salirDeCuenta(auth).then(() => {
            console.log('session successfully closed');
            navigate('/');
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <button className="buttonclose" onClick={signOut}
        >Cerrar sesion</button>
    )
}