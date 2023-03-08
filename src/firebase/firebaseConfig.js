// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore, collection, addDoc,
  onSnapshot, deleteDoc, doc, getDoc, updateDoc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCuz7-FN58Pn8dasCs058aGhGATI00c0nA",
    authDomain: "notesblog.firebaseapp.com",
    projectId: "notesblog",
    storageBucket: "notesblog.appspot.com",
    messagingSenderId: "1084781009327",
    appId: "1:1084781009327:web:f89db1fefbac1cc0ecb75a"
  };
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth (app); 
  export const provider = new GoogleAuthProvider();
  //export const googlePopUp = () => signInWithPopup(auth, provider);
  export const loginWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };
    
    

export const db = getFirestore(app);
 // datos strings
// se envia la funcion de guardar tarea
// el metodo adddoc() agrega un identificador,
// quiero guardar un objeto documento en la collecion tarea



//export const saveNote = (title, description) => addDoc(collection(db, 'notes'), { title, description });
// onsnapshot va escuchando, cuando ocurra un cambio como traerlo
export const onGetNote = (callback) => onSnapshot(collection(db, 'notes'), callback);
// el metodo deletedoc elimina el documento
// delete recibe dos parametros la conexion de la base de datos y el id
export const deleteNote = (id) => deleteDoc(doc(db, 'notes', id));
export const getNote = (id) => getDoc(doc(db, 'notes', id));
// actualiza los datos del documento nuevos campos
// el metodo uodateDoc sobreescribe parte del documento
export const updateNote = (id, newFields) => updateDoc(doc(db, 'notes', id), newFields);

  // Initialize Firebase
  
 // signOut(auth).then(() => { esto es para signOut (colocar en el import de auth)
    // Sign-out successful.
 // }).catch((error) => {
    // An error happened.
 // });
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  
