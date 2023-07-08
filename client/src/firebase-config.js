import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "",
  authDomain: "cf-project-urmi.firebaseapp.com",
  projectId: "cf-project-urmi",
  storageBucket: "cf-project-urmi.appspot.com",
  messagingSenderId: "432059320322",
  appId: "1:432059320322:web:bc845c6ef601035a1f7f1b",
  measurementId: "G-NZPN4H7XMY"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app)
export const storage=getStorage(app)