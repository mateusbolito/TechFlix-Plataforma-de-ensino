import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdW1LhyvPRpXcjCSWFtaxy3vQXmmU3M_g",
  authDomain: "techflixauth-c6baa.firebaseapp.com",
  projectId: "techflixauth",
  storageBucket: "techflixauth.appspot.com",
  messagingSenderId: "368862473224",
  appId: "1:368862473224:web:bae74616aafcb227fcb5bd",
};

const firebase =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(firebase);
