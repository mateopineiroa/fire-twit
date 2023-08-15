import { initializeApp } from "firebase/app";
import { getApps, getApp } from "firebase/app";
import { GithubAuthProvider, getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "twitt-nt.firebaseapp.com",
  projectId: "twitt-nt",
  storageBucket: "twitt-nt.appspot.com",
  messagingSenderId: "869474563382",
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: "G-3WWNJ1E3VX",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GithubAuthProvider();

export { auth, provider };
