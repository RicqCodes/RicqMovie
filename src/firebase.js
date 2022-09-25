// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbjMtlX3_so_yb1iW3dLWZGxklQOABTgQ",
  authDomain: "ricqmovie.firebaseapp.com",
  projectId: "ricqmovie",
  storageBucket: "ricqmovie.appspot.com",
  messagingSenderId: "427215666607",
  appId: "1:427215666607:web:adec60fabf97a8004b835a",
  measurementId: "G-YR6JG13LQ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
