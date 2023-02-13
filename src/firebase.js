import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqTrazkKmFBvHdkxRasc6TbvZOsI4Ck2U",
  authDomain: "react-project-buyit-34403.firebaseapp.com",
  projectId: "react-project-buyit-34403",
  storageBucket: "react-project-buyit-34403.appspot.com",
  messagingSenderId: "196636632735",
  appId: "1:196636632735:web:ac63c0e70eb7da218d64aa"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)