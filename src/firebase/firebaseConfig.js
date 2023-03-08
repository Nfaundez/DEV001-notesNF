// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import {
  getFirestore
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

  export function salirDeCuenta() {
    return signOut(auth);
  }


    
    

export const db = getFirestore(app);

  // Initialize Firebase
  
 // signOut(auth).then(() => { esto es para signOut (colocar en el import de auth)
    // Sign-out successful.
 // }).catch((error) => {
    // An error happened.
 // });
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  
