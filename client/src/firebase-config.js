import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "",
  authDomain: "cfg-project-1f1c5.firebaseapp.com",
  projectId: "cfg-project-1f1c5",
  storageBucket: "cfg-project-1f1c5.appspot.com",
  messagingSenderId: "1028589317206",
  appId: "1:1028589317206:web:5e26989be11e0891a3dff7",
  measurementId: "G-SF0HPR0S4D"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app)
export const storage=getStorage(app)