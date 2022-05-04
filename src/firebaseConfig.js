// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAMsW3otslEI-RAsfX9l_KGXD4PHiF7HRU",
authDomain: "grownogrow.firebaseapp.com",
projectId: "grownogrow",
storageBucket: "grownogrow.appspot.com",
messagingSenderId: "112525971195",
appId: "1:112525971195:web:12c5e40c7d6d921984aa5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;