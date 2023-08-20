import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMdoY-Mg1811Ezn5Pw89ryzJ8vTExmM5M",
  authDomain: "pixelbattles-d4493.firebaseapp.com",
  projectId: "pixelbattles-d4493",
  storageBucket: "pixelbattles-d4493.appspot.com",
  messagingSenderId: "621382965108",
  appId: "1:621382965108:web:2564c9c4f710f49f84fe21",
  measurementId: "G-2JPRJ07ZD2",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
