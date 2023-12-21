import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBW8E92lirGTXe4S4IxhDCclCYkqIb5pIM",
    authDomain: process.env.RAECT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.RAECT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.RAECT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.RAECT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.RAECT_APP_FIREBASE_APP_ID,
  };

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db };


