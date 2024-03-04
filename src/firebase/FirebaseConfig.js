import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "",
  authDomain: "shopalot-79675.firebaseapp.com",
  projectId: "shopalot-79675",
  storageBucket: "shopalot-79675.appspot.com",
  messagingSenderId: "501838522400",
  appId: "1:501838522400:web:6f43fd88652997b04c7445"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export {fireDB,auth } ;
