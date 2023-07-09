import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "",
  authDomain: "cfg-project-2.firebaseapp.com",
  projectId: "cfg-project-2",
  storageBucket: "cfg-project-2.appspot.com",
  messagingSenderId: "71685072116",
  appId: "1:71685072116:web:26a3cc1faef25ed44a2aa1",
  measurementId: "G-8H9V8JZM2S"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app)
export const storage=getStorage(app)