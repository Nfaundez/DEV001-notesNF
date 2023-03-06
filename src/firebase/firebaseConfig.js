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
  export const googlePopUp = () => signInWithPopup(auth, provider);
  export const loginWithGoogle = () => {
  
  const auth = getAuth();
  const user = auth.currentUser;
if (user !== null) {
  const displayNameUser = user.displayName;
  const emailUser = user.email;
  const uid = user.uid;
  console.log("usuario ingresado: ", emailUser)
  console.log("usuario display: ", displayNameUser)
}
  return googlePopUp();
};

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
  
