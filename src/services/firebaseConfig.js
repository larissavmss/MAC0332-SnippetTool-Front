import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDIPTwdNbt_lL9AgIpipY328PPK4gNgf5A",
  authDomain: "snippet-tool-auth.firebaseapp.com",
  projectId: "snippet-tool-auth",
  storageBucket: "snippet-tool-auth.appspot.com",
  messagingSenderId: "381761359939",
  appId: "1:381761359939:web:c9307d8dd81dec9b14c4f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);