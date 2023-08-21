import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBurSQHnPaclN0SvhyJ4EROgT_Rw9cFaYA",

  authDomain: "pixelbattle01-d398e.firebaseapp.com",

  projectId: "pixelbattle01-d398e",

  storageBucket: "pixelbattle01-d398e.appspot.com",

  messagingSenderId: "817809718177",

  appId: "1:817809718177:web:f17234fb38e2b5909ae9e0",

  measurementId: "G-W6JSW6TE54",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
