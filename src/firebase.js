import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAKYumznAvCNlzoBuPlh0KOuVthbFUkFWA",
    authDomain: "fit-clan-ac424.firebaseapp.com",
    projectId: "fit-clan-ac424",
    storageBucket: "fit-clan-ac424.appspot.com",
    messagingSenderId:"732634308887" ,
    appId: "1:732634308887:web:1b9eafb96d8523233f9752"
};

//initialize firebase app
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

//initialize services
const db = getFirestore(app);
export const storage = getStorage(app);

export default db;
