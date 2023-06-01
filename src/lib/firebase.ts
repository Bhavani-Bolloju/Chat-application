import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6tb4Iwk3k3o2kTZwy8dVuu6LM88uMLQ8",
  authDomain: "chat-b342f.firebaseapp.com",
  databaseURL: "https://chat-b342f-default-rtdb.firebaseio.com",
  projectId: "chat-b342f",
  storageBucket: "chat-b342f.appspot.com",
  messagingSenderId: "140300217335",
  appId: "1:140300217335:web:a72e83d9c5a94ee809dcf2"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
